import { NextRequest, NextResponse } from "next/server";

// Mock patient data — replace with HST EMR API integration later
const MOCK_ACCOUNTS: Record<
  string,
  { name: string; balance: number; items: { description: string; amount: number; date: string }[] }
> = {
  "10001": {
    name: "John Smith",
    balance: 1250.0,
    items: [
      { description: "Outpatient Surgery - Colonoscopy", amount: 850.0, date: "2026-01-15" },
      { description: "Anesthesia Services", amount: 400.0, date: "2026-01-15" },
    ],
  },
  "10002": {
    name: "Jane Doe",
    balance: 575.0,
    items: [
      { description: "Cataract Surgery - Left Eye", amount: 575.0, date: "2026-02-03" },
    ],
  },
  "10003": {
    name: "Robert Johnson",
    balance: 2100.0,
    items: [
      { description: "Endoscopy Procedure", amount: 1200.0, date: "2025-12-20" },
      { description: "Facility Fee", amount: 600.0, date: "2025-12-20" },
      { description: "Lab Work", amount: 300.0, date: "2025-12-20" },
    ],
  },
};

export async function POST(request: NextRequest) {
  const { accountNumber } = await request.json();

  if (!accountNumber || typeof accountNumber !== "string") {
    return NextResponse.json({ error: "Account number is required" }, { status: 400 });
  }

  // TODO: Replace with HST EMR API call
  // Example: const account = await hstClient.getPatientAccount(accountNumber);
  const account = MOCK_ACCOUNTS[accountNumber.trim()];

  if (!account) {
    return NextResponse.json(
      { error: "Account not found. Please check your account number and try again, or call (386) 248-8206 for assistance." },
      { status: 404 }
    );
  }

  return NextResponse.json({
    name: account.name,
    balance: account.balance,
    items: account.items,
  });
}
