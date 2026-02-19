"use client";

import { useState, FormEvent } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {
  MagnifyingGlassIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

type LineItem = {
  description: string;
  amount: number;
  date: string;
};

type AccountData = {
  name: string;
  balance: number;
  items: LineItem[];
};

// Step 1: Account Lookup
function AccountLookup({
  onAccountFound,
}: {
  onAccountFound: (account: AccountData, accountNumber: string) => void;
}) {
  const [accountNumber, setAccountNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/account-lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accountNumber: accountNumber.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        return;
      }

      onAccountFound(data, accountNumber.trim());
    } catch {
      setError("Unable to connect. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900">
          Look Up Your Account
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Enter the account number from your billing statement to view your
          balance.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="accountNumber"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Account Number
          </label>
          <div className="relative">
            <input
              id="accountNumber"
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="e.g. 10001"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            />
          </div>
          <p className="text-xs text-slate-400 mt-1.5">
            Your account number can be found on your billing statement or by
            calling (386) 248-8206.
          </p>
        </div>

        {error && (
          <div className="flex items-start gap-2 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg p-3 text-sm">
            <ExclamationTriangleIcon className="h-5 w-5 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !accountNumber.trim()}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? (
            <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <MagnifyingGlassIcon className="h-5 w-5" />
          )}
          {loading ? "Looking up..." : "Look Up Account"}
        </button>
      </form>
    </div>
  );
}

// Step 2: Balance & Payment Form
function BalanceAndPayment({
  account,
  accountNumber,
  onBack,
}: {
  account: AccountData;
  accountNumber: string;
  onBack: () => void;
}) {
  const [paymentAmount, setPaymentAmount] = useState(
    account.balance.toFixed(2)
  );
  const [clientSecret, setClientSecret] = useState("");
  const [loadingIntent, setLoadingIntent] = useState(false);
  const [error, setError] = useState("");

  async function handleProceedToPayment() {
    const cents = Math.round(parseFloat(paymentAmount) * 100);
    if (isNaN(cents) || cents < 50) {
      setError("Please enter a valid amount of at least $0.50.");
      return;
    }

    setError("");
    setLoadingIntent(true);

    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: cents,
          accountNumber,
          patientName: account.name,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        return;
      }

      setClientSecret(data.clientSecret);
    } catch {
      setError("Unable to initialize payment. Please try again.");
    } finally {
      setLoadingIntent(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Account Info */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <button
              onClick={onBack}
              className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 transition-colors mb-2"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Different account
            </button>
            <h2 className="text-xl font-bold text-slate-900">
              Account Summary
            </h2>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-400 uppercase tracking-wide">
              Account #
            </p>
            <p className="text-sm font-mono font-semibold text-slate-700">
              {accountNumber}
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-slate-500">Patient</p>
          <p className="text-lg font-semibold text-slate-900">
            {account.name}
          </p>
        </div>

        {/* Line Items */}
        <div className="border border-slate-100 rounded-lg overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left px-4 py-2.5 font-medium text-slate-500">
                  Description
                </th>
                <th className="text-right px-4 py-2.5 font-medium text-slate-500">
                  Date
                </th>
                <th className="text-right px-4 py-2.5 font-medium text-slate-500">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {account.items.map((item, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 text-slate-700">
                    {item.description}
                  </td>
                  <td className="px-4 py-3 text-right text-slate-500">
                    {new Date(item.date + "T00:00:00").toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right font-medium text-slate-900">
                    ${item.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-primary/5">
                <td
                  colSpan={2}
                  className="px-4 py-3 font-semibold text-slate-900"
                >
                  Total Balance Due
                </td>
                <td className="px-4 py-3 text-right font-bold text-lg text-primary">
                  ${account.balance.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Payment Amount */}
        {!clientSecret && (
          <div className="space-y-4">
            <div>
              <label
                htmlFor="paymentAmount"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Payment Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
                  $
                </span>
                <input
                  id="paymentAmount"
                  type="number"
                  min="0.50"
                  step="0.01"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 pl-8 pr-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                />
              </div>
              <p className="text-xs text-slate-400 mt-1">
                You may pay the full balance or a partial amount.
              </p>
            </div>

            {error && (
              <div className="flex items-start gap-2 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg p-3 text-sm">
                <ExclamationTriangleIcon className="h-5 w-5 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <button
              onClick={handleProceedToPayment}
              disabled={loadingIntent}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white hover:bg-accent-light focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loadingIntent ? (
                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : null}
              {loadingIntent
                ? "Preparing..."
                : `Pay $${parseFloat(paymentAmount || "0").toFixed(2)}`}
            </button>
          </div>
        )}
      </div>

      {/* Stripe Payment Element */}
      {clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance: {
              theme: "stripe",
              variables: {
                colorPrimary: "#0d9488",
                colorBackground: "#ffffff",
                fontFamily: "Inter, system-ui, sans-serif",
                borderRadius: "8px",
              },
            },
          }}
        >
          <CheckoutForm
            amount={parseFloat(paymentAmount)}
            onBack={() => setClientSecret("")}
          />
        </Elements>
      )}
    </div>
  );
}

// Step 3: Stripe Checkout Form
function CheckoutForm({
  amount,
  onBack,
}: {
  amount: number;
  onBack: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setError("");

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment/confirmation`,
      },
      redirect: "if_required",
    });

    if (submitError) {
      setError(submitError.message || "Payment failed. Please try again.");
      setProcessing(false);
    } else {
      setSuccess(true);
      setProcessing(false);
    }
  }

  if (success) {
    return (
      <div className="bg-white border border-green-200 rounded-xl p-8 text-center shadow-sm">
        <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircleIcon className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Payment Successful!
        </h3>
        <p className="text-slate-500 mb-1">
          Your payment of{" "}
          <span className="font-semibold text-slate-900">
            ${amount.toFixed(2)}
          </span>{" "}
          has been processed.
        </p>
        <p className="text-sm text-slate-400">
          A confirmation will be sent to your email on file. If you have
          questions, call (386) 248-8206.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-900">Payment Details</h3>
        <button
          onClick={onBack}
          className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
        >
          Change amount
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <PaymentElement
          options={{
            layout: "tabs",
            paymentMethodOrder: ["card", "us_bank_account", "afterpay_clearpay", "affirm"],
          }}
        />

        {error && (
          <div className="flex items-start gap-2 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg p-3 text-sm">
            <ExclamationTriangleIcon className="h-5 w-5 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={!stripe || processing}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-light focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {processing ? (
            <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : null}
          {processing ? "Processing..." : `Pay $${amount.toFixed(2)}`}
        </button>
      </form>

      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
        </svg>
        Secured by Stripe. Your payment info is encrypted end-to-end.
      </div>
    </div>
  );
}

// Main Payment Flow Component
export default function PaymentFlow() {
  const [account, setAccount] = useState<AccountData | null>(null);
  const [accountNumber, setAccountNumber] = useState("");

  function handleAccountFound(data: AccountData, acctNum: string) {
    setAccount(data);
    setAccountNumber(acctNum);
  }

  function handleBack() {
    setAccount(null);
    setAccountNumber("");
  }

  if (account) {
    return (
      <BalanceAndPayment
        account={account}
        accountNumber={accountNumber}
        onBack={handleBack}
      />
    );
  }

  return <AccountLookup onAccountFound={handleAccountFound} />;
}
