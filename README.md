# Power Platform in 20 Days — A Beginner's Course

A self-paced, **browser-only** course for an absolute beginner to learn Microsoft Power
Platform **and Power BI**, using an active **Microsoft 365 E5** trial and an **Azure** free
trial. No software to install, nothing that needs a powerful laptop, and **no Power Automate
Desktop** — everything works in a normal web browser (and in an incognito/private window).

**One growing project.** From Day 2 you build a single **Community Library** ecosystem — Dataverse
tables (Book, Author, Member, Loan) → a canvas app → Power Automate flows → SharePoint → a Copilot
Studio chatbot → a Power BI report on the *same* Loan data. Nothing is a throwaway exercise; each day
plugs into what came before, so by Day 20 you have a real project of your own.

**Self-contained.** Every step gives the exact table names, columns, lookups, Power Fx expressions,
DAX measures, and clicks — you never need to search or ask an AI to complete a step. Links to
Microsoft Learn are provided *in order* as optional extra depth, not as required reading.

**Keeping your project after the trial ends.** The trial's cloud copy is deleted when the trial
lapses, but you can keep everything: export the solution `.zip` + table data + the Power BI `.pbix`
(Day 16 & Day 20), and import into a free **Power Apps Developer Plan** (no card, no expiry). See the
"Keep it forever" section on the home page.

## How to open it

Open **`index.html`** in your browser (double-click it). It's a small **multi-page site** with
a sidebar you can use to jump between phases and days. It works fully **offline** — no internet
needed to read it, no external fonts or scripts, and the diagrams are drawn inline (SVG), so
nothing can fail to load. Your checkbox progress is saved automatically per page.

Files:

```
index.html      Welcome, how to use, Day 0 setup, the roadmap
phase1.html     Phase 1 · Foundations         (Days 1–4)
phase2.html     Phase 2 · Building apps       (Days 5–8)
phase3.html     Phase 3 · Automation          (Days 9–11)
phase4.html     Phase 4 · Data & integration  (Days 12–14)
phase5.html     Phase 5 · AI & governance     (Days 15–16)
phase6.html     Phase 6 · Power BI            (Days 17–20)
reference.html  Glossary & troubleshooting
assets/course.css, assets/course.js   Shared styling & behaviour
```

> Tip: read the course in a **normal** tab, and do the actual hands-on work in a separate
> **incognito** window signed in with the learning account. That keeps the learning account
> cleanly separate from any personal accounts.

## What you'll learn (20 days, six phases)

| Phase | Days | You learn |
|------|------|-----------|
| 1 · Foundations | 1–4 | The cloud & maker portal, Dataverse tables/columns/rows, relationships, solutions & security |
| 2 · Building apps | 5–8 | Canvas apps, Power Fx formulas, galleries & forms, model-driven apps (+ views & business rules) |
| 3 · Automation | 9–11 | Power Automate flows, logic, approvals & Adaptive Cards, changing data & error handling |
| 4 · Data & integration | 12–14 | SharePoint, dataflows & Power Query (M), connectors, APIs, Office Scripts |
| 5 · AI & governance | 15–16 | Copilot Studio chatbots; governance, DLP, ALM, and a cost-safe first look at Azure |
| 6 · Power BI | 17–20 | Datasets, visuals & reports, star-schema modelling & DAX, dashboards, sharing, RLS + a capstone |

Certifications this prepares you for: **PL-900 (Power Platform Fundamentals)** and **PL-300
(Power BI Data Analyst)** — both have free study paths on <https://learn.microsoft.com>. The
Power BI phase is browser-first (Power BI **Service**); Power BI **Desktop** (free Windows app)
is the "when you have a laptop" step that PL-300 assumes.

## Before Day 1 — one-time setup (for the account owner)

1. **Create a user** for the learner at <https://admin.microsoft.com> → *Users → Active users →
   Add a user*. Assign a **Microsoft 365 / Office 365 E5** licence.
2. **Create an environment** at <https://admin.powerplatform.microsoft.com> → *Environments →
   New*. Name it **Learning**, set **Add a Dataverse data store = Yes**.
3. **Give the learner rights** in that environment (System Administrator is fine — it's an
   isolated practice room).
4. **Azure (only for Day 16's short tour):** do it together with the owner's sign-in, or add the
   learner as a limited user. Keep Azure supervised because it can cost money.

Full setup steps are also on the **index page (Day 0)**.

## Two golden rules (repeated throughout)

1. **Only use made-up ("fake") data.** Never real personal or work information.
2. **Only build in the "Learning" environment.**

## Day 14 — Office Script sample

On Day 14 you record an Office Script in Excel on the web, then edit it to **return a value** so
a Power Automate flow can use it. Minimal example (Excel on the web → **Automate → New Script**):

```typescript
function main(workbook: ExcelScript.Workbook) {
  // Get the sheet you're looking at
  let sheet = workbook.getActiveWorksheet();

  // Write a value into cell A1
  sheet.getRange("A1").setValue("Updated by an Office Script");

  // Count how many rows have data and hand that number back to the flow
  let usedRows = sheet.getUsedRange().getRowCount();
  return usedRows;
}
```

Then in Power Automate use **Run script (Excel Online)**, pick your workbook and this script, and
run the flow.

## Cost safety (Azure only)

Days 1–15 and the whole Power BI phase are covered by the trials and create **no surprise
charges**. The short Azure tour on Day 16 is the only place that *can* bill — the course keeps it
tiny, **never creates a virtual machine**, and ends by **deleting the `rg-learning` resource
group** so nothing is left to bill.

## When the trial ends

Keep practising for free with the **Power Apps Developer Plan**
(<https://powerapps.microsoft.com/developerplan>) — a free personal environment, no card, no
expiry. It won't have tenant-admin features, but it's perfect for continued app, flow, Dataverse,
and Power BI practice.
