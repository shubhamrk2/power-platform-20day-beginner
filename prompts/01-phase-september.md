# Phase 1: The Foundation
## September 6 – September 30, 2026
### M365 E5 Trial — Use Every Premium Feature Before It Expires

---

> **Remember: The trial expires on September 30. After that date, some features in this phase will no longer be available unless you pay. So this month, we go deep into the Microsoft cloud ecosystem — not because we are memorizing buttons, but because we are building a mental map of how the whole thing works. That mental map will serve you for years, long after the trial is gone.**

---

## The Big Question for September

Before we open any portal or click any button, let us answer the most important question of this entire month:

> **What IS Microsoft 365, and why does it exist?**

Imagine you are starting a new company. You need:
- Email for all your employees
- A way to store files that everyone can share
- A tool for video calls and meetings
- A way to track your customers and inventory
- Security — so only your employees can see company files

Before Microsoft 365 existed, you had to buy all these things separately. You bought an email server (expensive hardware, a room full of computers), a file storage server, a video call software license, and a security system — and you paid a tech expert to keep it all running. If a hard drive broke, your emails were gone. If the building flooded, your data was gone.

Microsoft 365 says: **"Give us a monthly fee per person, and we run ALL of this for you in our data centers around the world. No hardware. No expert. No single point of failure."**

This is called **Software as a Service (SaaS)** — you pay for software as if it were water or electricity. You do not own the pipe, you just pay for what flows through it.

> 💭 **System Thinking Question #1:** What are the risks of putting ALL your company data into Microsoft's hands? What could go wrong?
>
> *Think about this genuinely before reading the answer below.*
>
> **Possible risks:**
> - If Microsoft has an outage (it has happened — Azure went down in 2021 and thousands of companies could not work for hours), your entire company stops
> - If Microsoft raises prices, you must pay or lose everything
> - If governments force Microsoft to share data, your company's private information may be exposed
> - If you stop paying, Microsoft locks your data — you must export before that happens
>
> **This is why** companies do not put everything in one cloud. They use what is called a "multi-cloud" or "hybrid" strategy. You will learn about this in November.

---

## September Week-by-Week Plan

| Week | Dates | Focus |
|------|-------|-------|
| Week 1 | Sept 6–12 | Cloud fundamentals + Microsoft Identity (Entra ID) + Tenant setup |
| Week 2 | Sept 13–19 | SharePoint, Teams, and OneDrive — before the trial expires |
| Week 3 | Sept 20–26 | Power Platform intro + Dataverse basics + Power BI Pro |
| Week 4 | Sept 27–30 | Export, backup, transition to Developer Plan + September recap |

---

---

# WEEK 1: September 6–12
## The Cloud, Tenants, Identity, and the Microsoft Ecosystem

---

## Vocabulary for Week 1

Learn these words before doing anything else. Read each one out loud.

---

**1. Cloud (noun)**
- **Simple meaning:** Computers that belong to someone else (Microsoft, Amazon, Google) that you rent over the internet
- **Real-world analogy:** Electricity. You do not own a power station. You just pay your electricity bill and power comes from the grid. Cloud computing is the same — you do not own the computers, you just pay and use them.
- **Example sentence:** *"We moved our company email to the cloud so we do not need to maintain our own email server."*

---

**2. Tenant (noun)**
- **Simple meaning:** Your company's private space inside Microsoft's cloud
- **Real-world analogy:** An apartment building. Microsoft owns the entire building (their data centers). Your company rents one apartment (the tenant). Your neighbor (another company) has their own apartment. They cannot enter your apartment, and you cannot enter theirs.
- **Example sentence:** *"Our company's tenant is on Microsoft's India data center. All our users exist only inside our tenant."*

---

**3. License (noun)**
- **Simple meaning:** Permission to use a software feature, given to one person
- **Real-world analogy:** A bus ticket. The bus exists for everyone, but you can only ride if you have a ticket. Each person needs their own ticket. If your ticket expires, you cannot ride anymore.
- **Example sentence:** *"Pooja has a Microsoft 365 E5 license, so she can use all premium features including Copilot Studio. Rohit has only a basic license, so he cannot."*

---

**4. Identity (noun, in technology)**
- **Simple meaning:** Proof of who you are in a computer system — your username, password, and what you are allowed to do
- **Real-world analogy:** Your government ID card (Aadhaar). It proves who you are, what benefits you are entitled to, and where you can go.
- **Example sentence:** *"When Sanjay signs in, the system checks his identity. Because his identity has the 'Library Staff' role, he can see the book inventory. He cannot see salary records because his identity does not have that permission."*

---

**5. Azure Active Directory / Entra ID (noun)**
- **Simple meaning:** Microsoft's system for managing identities — who can sign in, what they can see, and what they can do
- **Real-world analogy:** The reception desk and security system of an office building. When you arrive, the reception desk checks your ID badge. If your badge says "Finance Department," you can only go to the Finance floor. If it says "All Access," you can go anywhere.
- **Example sentence:** *"Entra ID knows that Neha is a Junior Librarian. When she tries to delete a book record, Entra ID blocks her — because Junior Librarians only have Read access, not Delete."*

---

**6. Role (noun)**
- **Simple meaning:** A set of permissions grouped under one name
- **Real-world analogy:** A job title. "Manager" can approve expenses. "Employee" can submit expenses but not approve. The title defines what you can do.
- **Example sentence:** *"The System Administrator role gives full control. The Basic User role allows only basic tasks. We gave Rohit the Basic User role because he is a regular library member, not a staff member."*

---

**7. Provision (verb)**
- **Simple meaning:** To set up or create a resource or system, making it ready to use
- **Real-world analogy:** When you rent a new apartment, the landlord "provisions" it — connects electricity, water, and gas before you move in.
- **Example sentence:** *"It takes 2–3 minutes to provision a new Power Platform environment because Microsoft is setting up the database and all the services in the background."*

---

**8. Domain (noun)**
- **Simple meaning:** The name of your company's online address — the part after the @ in your email
- **Real-world analogy:** Your home address. If your address is "123, Library Lane, Delhi," your domain is "LibraryLane.in" — it is how people find you.
- **Example sentence:** *"Our trial tenant uses the domain accenturetrial.onmicrosoft.com. All user emails end with @accenturetrial.onmicrosoft.com during the trial."*

---

## CONCEPT: What Is a Microsoft Tenant?

Let us go very deep on this because **everything in Microsoft 365, Power Platform, and Azure connects to the tenant**. If you understand the tenant, you understand the whole architecture.

### The Layered Structure

Think of Microsoft's system like a country, with smaller divisions inside:

```
MICROSOFT'S GLOBAL CLOUD  (the country)
│
├── YOUR TENANT  (your state/province)
│   │
│   ├── USERS  (the citizens)
│   │   ├── Pooja Sharma (System Administrator)
│   │   ├── Sanjay Singh (Senior Librarian)
│   │   ├── Neha Agarwal (Junior Librarian)
│   │   └── Rohit Verma (Library Member)
│   │
│   ├── GROUPS  (villages or neighborhoods)
│   │   ├── Library Staff (Pooja, Sanjay, Neha)
│   │   └── Library Members (Rohit, Priyanka, Gaurav)
│   │
│   ├── LICENSES  (what citizens are allowed to do)
│   │   ├── Microsoft 365 E5 (full access — expires Sept 30)
│   │   └── Basic (limited access — free)
│   │
│   ├── APPLICATIONS  (the buildings inside your state)
│   │   ├── SharePoint  (the library building)
│   │   ├── Teams  (the meeting rooms)
│   │   ├── Power Apps  (your custom app)
│   │   └── Power Automate  (the auto-robot worker)
│   │
│   └── ENVIRONMENTS  (different zones for building)
│       ├── LM-DEV  (where you build)
│       ├── LM-UAT  (where you test)
│       └── LM-PRD  (where real users go)
│
└── OTHER COMPANIES' TENANTS  (other states — invisible to you)
```

> 💭 **System Thinking Question #2:** Why are there three separate environments (DEV, UAT, PRD)?
>
> **What would happen if there was only one environment?**
>
> Imagine you are building a new feature in the library app — you are changing how loan records are created. While you are building and testing this change, your half-finished broken feature is live for all members. Rohit opens the app to borrow a book and sees errors. He cannot borrow. The library stops working.
>
> This is what happens in companies with no environment separation. It is called "developing in production" and it is one of the most dangerous mistakes in software.
>
> **DEV** = Your workshop. Messy, experimental, always changing.
> **UAT (User Acceptance Testing)** = A clean copy where real users test before launch. If Rohit finds a bug here, it is okay — nothing is actually broken for real.
> **PRD (Production)** = The real thing. Members use it. It must always work.
>
> This pattern — DEV → UAT → PRD — is used by every company in the world, from a 5-person startup to Google.

---

## HANDS-ON EXERCISE 1: Explore Your Tenant

**Before you start, open a private/incognito browser window (Ctrl+Shift+N in Chrome).**

*Why incognito? Because your regular browser may be signed into a personal account. Incognito forces you to sign in fresh with the trial account. This prevents "wrong account" mistakes.*

### Step 1: Open the Admin Center

1. Go to: `admin.microsoft.com`
2. Sign in with your M365 E5 trial account (the email and password the administrator gave you)
3. You will see the Microsoft 365 admin center

**What you see:** A dashboard showing your tenant's health, active users, licenses used, and recent activity.

> 💭 **Ask yourself:** What is this screen telling me? Who built this screen? Why does Microsoft give administrators this view and not give it to regular users?

### Step 2: Find Your Tenant Information

1. Click **Settings** (left menu) → **Org settings**
2. Click the **Organization profile** tab
3. Look for **Tenant ID** — this is a unique code like `a1b2c3d4-e5f6-...`

**Write down your Tenant ID:** _______________________

**Why does a Tenant ID exist?**
When you make API calls to Microsoft (we will do this in October), you need to tell Microsoft WHICH company's data you want. The Tenant ID is your company's unique fingerprint. No two tenants have the same ID.

### Step 3: Explore Your Users

1. Click **Users** (left menu) → **Active users**
2. You should see your 6 test users: Pooja, Sanjay, Neha, Rohit, Priyanka, Gaurav

Click on **Pooja Sharma**. Look at:
- What license she has (Microsoft 365 E5)
- What groups she belongs to
- What her username (email) is

Now click on **Rohit Verma**. Compare:
- Does he have the same license as Pooja?
- What can Rohit do that Pooja cannot? What can Pooja do that Rohit cannot?

> 💭 **System Thinking Question #3:** What happens on October 1 when the M365 E5 trial expires?
>
> *Think about this. What do your users lose? What do they keep? What breaks?*
>
> **Answer:**
> - Rohit's email stops working (Exchange Online requires a license)
> - Pooja can no longer use Teams (Teams requires a license)
> - SharePoint sites become read-only, then inaccessible
> - Power Apps premium connectors stop working
> - BUT: Dataverse data is not deleted immediately — you have 30 days to export
> - BUT: If you move to a Developer Plan (free), your Power Apps and Dataverse environment continues
>
> **This is why Week 4 (Sept 27–30) is dedicated to backup and transition.** We plan our exit from the beginning.

### Step 4: Look at the License Assignment

1. In Active users, click on **Pooja Sharma**
2. Click the **Licenses and Apps** tab
3. Expand the Microsoft 365 E5 license — see all the features it enables

You will see a very long list. This is why E5 is expensive — it includes everything. Security tools, compliance tools, AI tools, phone calls, analytics.

---

## 🗣️ English Practice — Week 1: Simple Present Tense

### Why This Grammar Pattern?

When you describe how a system works, you use the **simple present tense**. This is the most common tense in technical writing and documentation.

- ✅ "A **tenant** IS a company's private space in Microsoft's cloud."
- ✅ "Entra ID **manages** who can sign in and what they can see."
- ✅ "A license **gives** a user permission to use specific features."
- ✅ "The admin center **shows** all users, licenses, and service health."

Notice: for he/she/it, always add **-s** or **-es** to the verb.
- The system → the system **manages**, **shows**, **allows**, **controls**
- A user → a user **has**, **gets**, **signs in**, **belongs to**

---

### Grammar Practice — Complete These Sentences

Write your answer in the blank. Use a verb in simple present tense.

1. "A tenant ______________ (contain) all the users and applications of one company."
2. "The sign-in log ______________ (record) every time a user signs into any Microsoft service."
3. "When a license expires, the user ______________ (lose) access to the features it covered."
4. "Entra ID ______________ (check) the username and password before allowing access."
5. "A security role ______________ (define) what actions a user is allowed to perform."

*(Answers: contains, records, loses, checks, defines)*

---

### Vocabulary in Sentences — Write Your Own

For each word, write ONE original sentence. Do NOT copy the examples from the vocabulary section. Write from your own understanding.

| Word | Write your sentence here |
|------|--------------------------|
| Tenant | |
| License | |
| Role | |
| Domain | |
| Provision | |

**Example of a good original sentence:**
Word: Identity → *"In the Microsoft system, identity means the combination of who you are and what you are allowed to do — like a staff ID badge that also lists your access permissions."*

---

### Writing Exercise: Describe Your Tenant

Write 5 sentences describing the tenant you explored today. Use simple present tense throughout. Use at least 4 of this week's vocabulary words.

**Template to follow:**
```
"Our tenant [describe what it contains].
It has [number] users, including [examples].
Pooja's account has [license type], which means she [what she can do].
Rohit's account has [license type], so he [what he can/cannot do].
The most important thing the tenant does is [function]."
```

**Example answer (read this, then write your own WITHOUT looking):**
*"Our tenant contains all our company's users, applications, and data inside Microsoft's cloud. It has 7 users, including administrators and regular library members. Pooja's account has a Microsoft 365 E5 license, which means she can use Copilot Studio, Power BI Pro, and advanced security features. Rohit's account has a basic license, so he can sign in and use the canvas app but cannot access admin settings. The most important thing the tenant does is keep our data completely separate from every other company in Microsoft's cloud."*

---

### 🔊 Read Aloud Exercise

Read this paragraph out loud, **slowly and clearly**. The words in **CAPITAL LETTERS** should be said a little louder. Repeat 3 times. Do not rush.

*"A TENANT is like an apartment in a very large building. Microsoft OWNS the building — their data centers around the world. Your company RENTS one apartment — the tenant. Your neighbour company has their OWN apartment. They CANNOT see into yours. Everything your company creates — emails, files, apps, user accounts — lives inside your apartment. When the apartment's lease expires, Microsoft REMOVES the apartment and everything in it."*

After reading: Close your eyes and say 2 sentences from memory about what a tenant is. Do not worry about using the exact words — use your own.

---

### Professional Communication: The "Good Morning Message"

In many Indian workplaces, people send "Good morning" in groups without additional information. In international or technical teams, a morning message includes context.

**Instead of:** *"Good morning everyone"*

**Write this:**
```
Good morning [Name/Team],

Quick update on this week's work:

I am currently setting up the Microsoft 365 tenant for the Community Library project.
Today I will be configuring user accounts and checking license assignments.
I expect to have the Entra ID security settings reviewed by end of day.

Let me know if you need anything.

[Your name]
```

**Why this is better:** It tells colleagues what you are working on, what your plan is, and that you are available. This kind of message builds professional trust.

---

### 🚫 Common English Mistakes — Week 1

**Mistake 1: Missing articles (the / a / an)**

❌ "I created user in tenant."
✅ "I created **a** user in **the** tenant."

Rule: Use "a/an" the first time you mention something. Use "the" when you and the reader both know which specific thing you mean.

**Mistake 2: "I am having" instead of "I have"**

❌ "I am having a question about licenses."
✅ "I **have** a question about licenses."

Rule: Verbs like have, know, understand, need, want, belong — do NOT use the -ing form. Say "I have", "I know", "I understand."

**Mistake 3: "informations" / "feedbacks" / "knowledges"**

❌ "I found many informations in the admin center."
✅ "I found a lot of **information** in the admin center."

Rule: These words have NO plural form in English: information, knowledge, feedback, data, advice, equipment, access. Never add -s.

**Mistake 4: "How I can..." instead of "How can I..."**

❌ "How I can add a new user?"
✅ "**How can I** add a new user?"

Rule: In questions, the helping verb (can, should, will, does) comes BEFORE the subject (I, you, we).

---

### ✅ Week 1 English Progress Check

By the end of this week, you should be able to:
- [ ] Describe what a tenant is in 2 sentences without looking at notes
- [ ] Write 5 sentences about the admin center in simple present tense
- [ ] Use "the" and "a" correctly before technical nouns
- [ ] Say "I have a question" instead of "I am having a question"
- [ ] Write a short professional update message about your week's work

---

## CONCEPT: Microsoft Entra ID — The Identity System

Entra ID (previously called Azure Active Directory) is the most important piece of the entire Microsoft ecosystem. It is the **brain that decides who can do what**.

### How Sign-In Works (Step by Step)

When Sanjay tries to sign into Power Apps:

```
Step 1: Sanjay types username + password at make.powerapps.com
          ↓
Step 2: Power Apps sends the credentials to Entra ID
         "Hey Entra ID, is this person real?"
          ↓
Step 3: Entra ID checks its database:
         - Is sanjay.singh@[tenant] a real user? ✅
         - Is his password correct? ✅
         - Does he have an active license? ✅
         - Is Multi-Factor Authentication (MFA) required? → If yes, 
           Sanjay gets a code on his phone and types it
          ↓
Step 4: Entra ID issues a TOKEN — a temporary digital pass
         (Like a wristband at a concert — proves you paid without 
         showing your ticket every 5 seconds)
          ↓
Step 5: Power Apps reads the token, sees Sanjay's roles:
         "Library Staff role + Basic User role"
         Shows Sanjay only what his roles allow
```

> 💭 **System Thinking Question #4:** What is a "Token" and why is it better than sending username/password every time?
>
> **Problem without tokens:**
> Imagine Sanjay opens the library app. Every time he clicks something, the app sends his password to Microsoft to check if he is allowed. This would be:
> - Very slow (checking password = network call every click)
> - Very dangerous (password travels across the network constantly — hackers love this)
>
> **Tokens solve this:**
> The token is issued ONCE when you log in. It says: "Sanjay is authenticated, he has Library Staff role, this token is valid for 1 hour." The app trusts the token without calling Microsoft every single time. After 1 hour, Sanjay needs to re-authenticate (or the token is silently refreshed in the background).
>
> **Real-world analogy:** A hotel key card. You check in once (authenticate). The hotel gives you a key card (token) that opens your room (authorization) for the duration of your stay. The hotel front desk is not following you to check your ID every time you open your room door.

### Multi-Factor Authentication (MFA)

The E5 license includes **Azure AD Premium P2**, which means you can enforce MFA. Let us understand why MFA exists.

**The problem with passwords alone:**
- Neha's password is "Library2024" — she uses it everywhere
- A hacker breaks into a website (not Microsoft) and steals a list of emails and passwords
- They try "neha.agarwal@[tenant] / Library2024" — it works
- The hacker is now inside your library system with Neha's identity

**MFA adds a second check:**
Even if the hacker has Neha's password, they also need her phone. When they try to sign in, a notification goes to Neha's phone: "Someone is trying to sign in. Approve?" Neha did not try to sign in — so she taps "Deny." The hacker is blocked.

**Why this matters:** In the October phase, when you build apps and flows that access real data, MFA is what separates a "nice practice project" from a "safe system I can show an employer."

---

## HANDS-ON EXERCISE 2: Enable MFA for Your Tenant

### Step 1: Go to the Security Defaults

1. Open: `entra.microsoft.com`
2. Sign in with your admin account
3. Left menu: **Identity** → **Overview** → **Properties**
4. Scroll down, find **Manage Security Defaults**
5. Look at whether "Security Defaults" is On or Off

**Note:** With E5, you can use **Conditional Access** (more powerful than security defaults). But for now, just understanding what MFA looks like is the goal.

### Step 2: Look at Sign-In Logs

This is a premium E5 feature that expires September 30 — use it now.

1. `entra.microsoft.com` → **Identity** → **Monitoring & health** → **Sign-in logs**
2. You will see a list of every single sign-in attempt in your tenant
3. Click on one entry — look at:
   - Who signed in (user)
   - From where (IP address, country)
   - What app they signed into
   - Whether it succeeded or failed
   - Whether MFA was required

> 💭 **System Thinking Question #5:** Why would a company WANT to see every single sign-in?
>
> *Imagine you are the Library Admin. You look at sign-in logs on a Monday morning and you see:*
> *"Rohit Verma signed in from Russia at 3:00 AM on Sunday."*
>
> *Rohit lives in Delhi. He was asleep. This means someone else is using Rohit's account. This is a security incident.*
>
> *Sign-in logs are the security camera footage of your Microsoft tenant. Most people never look at them — until something goes wrong. Smart administrators look at them regularly.*

---

## CONCEPT: What Happens to Your Data After September 30?

This is a critical system design topic. Every person who builds on trial accounts must plan their exit strategy.

### The Timeline (After Trial Expires)

```
September 30:   Trial expires
                → Users cannot sign in
                → Apps stop working for premium features
                
October 1-30:   "Grace period" (30 days)
                → Admin can still access admin center
                → Data is still in the tenant but frozen
                → This is your window to export everything
                
October 31+:    Tenant is disabled
                → Data begins deletion process
                → After 60–90 days, Microsoft permanently deletes all data
                
NEVER get to October 31 without exporting your data!
```

### What We Do in Week 4 (September 27–30)

- Export all Dataverse data (tables → Excel/CSV)
- Export your Power Platform solution (.zip file)
- Make sure Developer Plan is working
- Import your solution into Developer Plan
- Verify everything works

> 💭 **This is System Design Thinking in action:** When we set up a system, we always think about how we will close it down safely. Engineers call this "graceful degradation" — planning how to exit before you even start.

---

---

# WEEK 2: September 13–19
## SharePoint, Teams, and OneDrive — The M365 Core

---

## Vocabulary for Week 2

---

**9. SharePoint (noun)**
- **Simple meaning:** Microsoft's system for storing and sharing files and lists inside a company, accessible from anywhere
- **Real-world analogy:** The office notice board plus the filing cabinet, but digital and accessible from anywhere in the world
- **Example sentence:** *"We store the library's event calendar in a SharePoint list. Every librarian can see it from their laptop or phone, and changes are updated instantly for everyone."*

---

**10. List (noun, in SharePoint)**
- **Simple meaning:** A table of data stored in SharePoint — like an Excel spreadsheet, but with sharing, permissions, and workflows built in
- **Real-world analogy:** A physical ledger or register. The library's "Book Loan Register" is a list — each row is one loan, each column is one piece of information (who, which book, when borrowed, when due).
- **Example sentence:** *"I created a SharePoint list called 'Library Events' with columns for Event Name, Date, Location, and Maximum Capacity."*

---

**11. Library (noun, in SharePoint)**
- **Simple meaning:** A special type of SharePoint storage for files (documents, images, videos) — not the same as a book library!
- **Real-world analogy:** A folder in your computer, but shared with your whole team and with version history (you can see every old version of a file and go back to it)
- **Example sentence:** *"The library policy documents are stored in a Document Library in SharePoint. When the Librarian edits the Borrowing Policy, SharePoint keeps the old version too, so we can always go back."*

---

**12. Version History (noun)**
- **Simple meaning:** A record of every change made to a file or document, who made it, and when
- **Real-world analogy:** The "undo" button, but for weeks or months. You can see what a document looked like 3 weeks ago and restore it.
- **Example sentence:** *"Someone accidentally deleted the 'Late Fees' section from the borrowing policy. I went to version history and restored the document from 2 days ago in 30 seconds."*

---

**13. Permission (noun)**
- **Simple meaning:** What a specific person or group is allowed to do — read, edit, delete, or share
- **Real-world analogy:** Different keys for different rooms. The librarian has a key to the book storage room. A member has a key to the reading room. Nobody gives a member the key to the storage room.
- **Example sentence:** *"Rohit has Read permission on the library events list, so he can see events but cannot add or delete them. Pooja has Edit permission, so she can change events."*

---

**14. Teams Channel (noun)**
- **Simple meaning:** A discussion room inside Microsoft Teams for a specific topic or team
- **Real-world analogy:** WhatsApp groups, but inside a company tool, with files, meetings, and apps attached
- **Example sentence:** *"We created a 'Book Acquisitions' channel in Teams so librarians can discuss which new books to buy. All the conversation is recorded and searchable."*

---

**15. OneDrive (noun)**
- **Simple meaning:** Your personal cloud storage in Microsoft 365 — only you can see it (unless you share)
- **Real-world analogy:** Your personal locker. Your team has a shared office (SharePoint), but your locker (OneDrive) is just for you.
- **Example sentence:** *"I keep my work-in-progress reports in OneDrive. When they are finished and ready for the team, I move them to the SharePoint document library."*

---

## CONCEPT: Why SharePoint Matters for Power Platform

SharePoint is not just a file storage tool. In the Power Platform world, SharePoint is often used as a **data source** for apps and flows.

### The Connection

```
SharePoint List (data source)
        ↕
Power Apps reads and writes data
        ↕
Power Automate runs when data changes
        ↕
Power BI shows the data in charts
```

**Real example in our project:**

On Day 12 (from the 20-day course), we created a SharePoint list of library events. But now let us go deeper — why did we choose SharePoint instead of Dataverse for events?

| Feature | SharePoint List | Dataverse Table |
|---------|----------------|-----------------|
| Free with M365 | ✅ Yes | ❌ Requires Power Apps license |
| Easy for non-tech users to edit | ✅ Yes, looks like Excel | ⚠️ Requires the Power Apps interface |
| Handles millions of rows | ❌ Limit: 30 million items | ✅ Enterprise-grade |
| Supports complex relationships | ⚠️ Basic only | ✅ Full relational database |
| Offline use | ❌ Requires internet | ✅ With proper setup |
| Best for | Small lists, team collaboration, event calendars | Business applications, complex data |

> 💭 **System Thinking Question #6:** If SharePoint lists are free with M365 and Dataverse requires a license, why don't all companies just use SharePoint lists for everything?
>
> *Think about this before reading the answer.*
>
> **The answer: Complexity and scale**
>
> A library with 50 books and 30 members can use SharePoint lists. But imagine a library with 5,000 books, 10,000 members, and 500 loans happening every day. SharePoint lists slow down, become hard to manage, and cannot handle complex data relationships well (for example: a loan is connected to a book, which is connected to an author, which is connected to a publisher — this is 4 levels of relationship, which SharePoint cannot handle cleanly).
>
> Dataverse is a proper relational database. SharePoint lists are a useful collaboration tool that happens to store data. Knowing which one to use for which situation is a skill that senior architects have. You are learning it now.

---

## HANDS-ON EXERCISE 3: Build the Events List in SharePoint

This is one of the exercises from the 20-day course, but now we go deeper — we focus on understanding WHY each step exists.

### Step 1: Open SharePoint

1. Go to `microsoft365.com` → sign in → click the **SharePoint** app
2. You will see the SharePoint home — it shows sites you have access to

**What is a "Site"?**
A SharePoint site is like a department's office. The library could have one site: "Community Library." Inside that site, you have separate rooms: document libraries, lists, pages.

### Step 2: Create a Site for the Library

1. Click **+ Create site** (top of the page)
2. Choose **Team site** (not Communication site)
3. Name: `Community Library`
4. Description: `All resources for the Community Library Management System`
5. Privacy: **Private** (only people you add can see it)
6. Click **Next** → add your 6 test users → **Finish**

> 💭 **Why "Team site" and not "Communication site"?**
>
> - **Team site:** For a team that works together. Everyone can contribute, edit, add files. Connected to a Microsoft Teams group automatically. Best for internal teams.
> - **Communication site:** For broadcasting information. Like a company intranet or news portal. People read, but most cannot edit. Best for company-wide announcements.
>
> The library team all work together, so Team site is correct.

### Step 3: Create the Events List

1. Inside the Community Library site, click **+ New** → **List**
2. Click **Blank list**
3. Name: `Library Events`
4. Description: `Upcoming events at the Community Library`
5. Click **Create**

### Step 4: Add Columns

The list starts with only a "Title" column. We need more.

Click **+ Add column** for each of the following:

| Column Name | Column Type | Why this type? |
|-------------|-------------|----------------|
| Event_Date | Date and Time | So we can sort by date and build calendar views |
| Location | Single line of text | Short text for room name |
| Max_Capacity | Number | So we can count available spots |
| Description | Multiple lines of text | Long text for full event details |
| Is_Online | Yes/No | Boolean — true or false, nothing in between |
| Registration_Link | Hyperlink | So we can store a URL to register |

> 💭 **Why do different column types matter?**
>
> If you store a date as "plain text" (e.g., "September 15, 2026"), SharePoint does not know it is a date. It cannot sort by date properly. It cannot filter "show me all events in September." It cannot calculate "how many days until this event."
>
> When you choose the correct column type, SharePoint understands the data. It can sort it, filter it, do math on it, and display it in calendar form.
>
> **This is a core database concept.** Every database — SharePoint, Dataverse, SQL Server, Excel, Google Sheets — requires you to declare what TYPE of data is in each column. The type determines what operations are possible.

### Step 5: Add Sample Data

Add 5 events manually using the data from `sample-data/library-events.csv`.

Open `library-events.csv` in Excel first. Then type (or copy) the data into the SharePoint list, one row at a time.

When you type a date, notice that SharePoint shows a calendar picker. This only happens because you set the column type to "Date and Time" — if it were plain text, there would be no calendar.

### Step 6: Create a View

Currently, the list shows all events in the order they were added. But users want to see events sorted by date. Let us create a view.

1. Click the **View** dropdown (top right of the list, near "All Items")
2. Click **Create new view**
3. Name: `Upcoming Events`
4. Sort by: `Event_Date` → Ascending
5. Filter: `Event_Date` is greater than `[Today]` (this means show only future events)
6. Click **OK**

Now the list shows only future events, sorted by date.

> 💭 **System Thinking Question #7:** Why do we create VIEWS instead of just sorting the list manually every time?
>
> - **Without views:** Pooja sorts the list by date. Sanjay opens the same list and sees it unsorted (because his browser has his own view). Every person has to sort manually every time. If 10 people use the list, each person wastes time sorting.
>
> - **With views:** The "Upcoming Events" view is saved once. Everyone who clicks that view sees the same sorted, filtered list automatically. Changes to the data update automatically.
>
> **This concept — saving a reusable configuration — appears everywhere in technology:** database views, Power BI report filters, Power Apps gallery filters, GitHub branch protections. The principle is always the same: define it once, use it everywhere.

---

## CONCEPT: Microsoft Teams — More Than Chat

Most people think Teams is just a video call and chat tool. In the Microsoft ecosystem, Teams is actually a **platform** — it integrates with almost everything.

### What Teams Can Do That People Miss

1. **Teams + SharePoint:** Every Teams channel has a Files tab that IS a SharePoint document library. When you share a file in Teams, it is stored in SharePoint automatically.

2. **Teams + Power Apps:** You can embed a Power App directly inside a Teams tab. Library members could open Teams and see the Library App inside it — no need to go to a separate website.

3. **Teams + Power Automate:** You can build flows that send messages to Teams channels (e.g., "New book 'Atomic Habits' has been added to the library") or ask for approval in Teams ("Priyanka requests membership upgrade — Approve or Reject").

4. **Teams + Copilot Studio:** You can publish your library chatbot directly into Teams. Library members type questions in Teams and the chatbot answers — no separate app needed.

### Hands-on: Add the Library Events List as a Teams Tab

1. Open Microsoft Teams (at `teams.microsoft.com`)
2. Create a team called "Community Library Staff" (if it does not exist already)
3. Go to the "General" channel
4. Click the **+** button (Add a tab)
5. Search for **SharePoint** → click it
6. Select your "Community Library" site and the "Library Events" list
7. Click **Save**

Now the library events list appears directly inside Teams. Librarians never need to open a browser and navigate to SharePoint — they see it inside Teams.

> 💭 **System Thinking Question #8:** Why does Microsoft build all these integrations between its own products?
>
> **Business strategy:** If Teams integrates with SharePoint, Outlook, Power Apps, and Dataverse — and if you use all of them — you are deeply embedded in the Microsoft ecosystem. Switching to a competitor (Google Workspace, Slack, Salesforce) means losing all these integrations. This is called a "switching cost" — the pain of leaving one platform for another.
>
> **This is not evil** — it is a business model. All big platforms do this (Apple's ecosystem, Google's ecosystem, Amazon's ecosystem). Understanding this helps you make smarter decisions about which tools to choose and which ones to depend on too heavily.

---

## 🗣️ English Practice — Week 2: Describing What Tools Do

### This Week's Grammar Pattern: "[Tool] allows / enables / provides / stores / connects"

Technical descriptions explain what a tool DOES for the user. These 6 verbs carry most of technical English:

- **allows** — gives permission or makes something possible → "SharePoint **allows** teams to share files from any device."
- **enables** — makes possible what was not possible before → "OneDrive **enables** you to access files from any computer in the world."
- **provides** — gives, supplies → "Teams **provides** a central place for chat, calls, and file sharing."
- **stores** — keeps data somewhere → "A SharePoint library **stores** documents with full version history."
- **connects** — links two things → "SharePoint **connects** directly to Power Apps so apps can read list data without coding."
- **restricts** — limits access → "Permissions **restrict** who can edit a list — others can only read it."

---

### Grammar Practice — Complete These Sentences

1. "SharePoint ______________ (store) files in the cloud so no physical server is needed."
2. "Version history ______________ (allow) you to restore an older version of any document."
3. "Microsoft Teams ______________ (connect) chat, calls, and SharePoint files in one place."
4. "A 'Read' permission ______________ (mean) the user can see data but not change it."
5. "The Upcoming Events view ______________ (show) only future events because of the filter."

*(Answers: stores, allows, connects, means, shows)*

---

### Vocabulary in Sentences

Write one original sentence using each word. Do NOT copy examples from the vocabulary list:

| Word | Write your sentence here |
|------|--------------------------|
| SharePoint | |
| Version History | |
| Permission | |
| Teams Channel | |
| OneDrive | |

---

### Writing Exercise: Explain SharePoint to a Non-Technical Person

Imagine your parent or friend asks: "What is this SharePoint thing you keep talking about?"

Write 4–5 sentences that explain it simply, without technical jargon. Then write 2 sentences explaining WHY it is useful.

**Example (read once, then write your own without looking):**
*"SharePoint is like a shared filing cabinet that lives on the internet, not in any one office. Everyone in our team can open it from their phone, laptop, or computer, anywhere in the world. When someone adds a new document, everyone sees it immediately. If someone accidentally changes something important, we can go back to the old version in one click. It is useful because it replaces the problem of different people keeping different copies of the same file on their own computers — which always leads to confusion about which version is correct."*

---

### 🔊 Read Aloud Exercise

Read this slowly and clearly, 3 times. Pause at every full stop (.) and comma (,):

*"SharePoint is Microsoft's tool for storing and sharing information inside a company. A SharePoint site is like a department's digital office. Inside the site, you can create lists — which are like spreadsheets where the whole team can add and edit rows — and libraries — which are folders of documents with version history. The most important difference between SharePoint and a regular shared folder is that SharePoint has permissions: you can control exactly who sees what, who can edit, and who can only read."*

After reading: Explain out loud — in your own words — what the difference is between a SharePoint list and a SharePoint library.

---

### Professional Communication: Teams Message Announcing a New List

You have just created the Library Events list in SharePoint. Write a Teams message to the library staff team.

**Template:**
```
Hi team,

I have created a new [what you created] in [where].

You can find it here: [link or navigation instructions]

The list contains columns for [what columns].

Please use this list for [what purpose].
If you have questions or need changes, message me here.

Thank you,
[Your name]
```

**Completed example:**
```
Hi team,

I have created a new SharePoint list called "Library Events" in the Community Library site.

You can find it by going to our Teams channel → Files tab → Library Events.

The list contains columns for Event Name, Date, Location, Maximum Capacity, and Registration Link.

Please use this list to add all upcoming library events. Members will soon be able to see
this list through the library app. If you need additional columns, message me here.

Thank you,
[Your name]
```

---

### 🚫 Common English Mistakes — Week 2

**Mistake 1: "Revert back" — used in India to mean "reply"**

❌ "Please revert back to me with the list details."
✅ "Please **reply** to me with the list details." OR "Please **let me know** the list details."

Note: In standard English, "revert" means to go back to a previous state (like reverting a file). It does NOT mean "reply."

**Mistake 2: "Please do the needful"**

❌ "Please do the needful and create the SharePoint site."
✅ "Please **create the SharePoint site** and let me know when it is ready."

Rule: Always say specifically WHAT you need. "Do the needful" is vague and not understood outside India.

**Mistake 3: "As and when"**

❌ "I will add the events as and when they are confirmed."
✅ "I will add the events **as they are confirmed**." OR "I will add events **when they are confirmed**."

**Mistake 4: Adding -s to uncountable nouns**

❌ "I received many feedbacks from the librarians."
✅ "I received a lot of **feedback** from the librarians."

Uncountable in English: feedback, information, access, advice, news, permission (the concept).

---

### ✅ Week 2 English Progress Check

- [ ] Can you explain what SharePoint does in 3 sentences without notes?
- [ ] Can you use "allows", "enables", "stores" correctly in original sentences?
- [ ] Did you write a Teams message this week — even just as practice in your journal?
- [ ] Can you avoid "revert back" and "do the needful"?
- [ ] Is your journal updated with today's entry?

---

---

# WEEK 3: September 20–26
## Power Platform Introduction + Dataverse + Power BI Pro

---

## Vocabulary for Week 3

---

**16. Power Apps (noun)**
- **Simple meaning:** Microsoft's tool for building mobile and web apps without writing code
- **Real-world analogy:** Building a house with pre-made walls and furniture instead of making every brick yourself. You assemble pieces that Microsoft made; you do not build from scratch.
- **Example sentence:** *"I built the library borrowing app in Power Apps. Members can search books, see availability, and borrow — all without me writing a single line of traditional code."*

---

**17. Canvas App (noun)**
- **Simple meaning:** A type of Power App where you design every pixel — you drag and drop elements exactly where you want them, like painting on a blank canvas
- **Real-world analogy:** A blank sketchbook. You decide where to draw, what color, what size. Complete creative control.
- **Example sentence:** *"I made the Library Member app a canvas app because I wanted the book covers to appear in a specific grid layout that shows the library's brand colors."*

---

**18. Model-Driven App (noun)**
- **Simple meaning:** A type of Power App that automatically generates forms and views based on your Dataverse data structure — less design, more automatic
- **Real-world analogy:** A template house. The layout is decided for you — kitchen here, bedroom there. You furnish it, but you do not move walls.
- **Example sentence:** *"I made the Library Admin app a model-driven app because the admin needs to manage lots of records quickly. The auto-generated forms and tables are perfect for that."*

---

**19. Power Automate (noun)**
- **Simple meaning:** Microsoft's tool for automating repetitive tasks — it watches for things to happen and does something in response
- **Real-world analogy:** A very reliable employee who only does one specific job, perfectly, every time, without being asked. If the library loan is overdue → send an email. Every time. At the right time.
- **Example sentence:** *"I set up a Power Automate flow: when a new loan record is created, automatically send a confirmation email to the member and set a reminder for the due date."*

---

**20. Flow (noun)**
- **Simple meaning:** One automated process built in Power Automate — it has a trigger (what starts it) and actions (what it does)
- **Real-world analogy:** A recipe. The trigger is "when the water boils." The actions are "add rice, stir, reduce heat, wait 15 minutes."
- **Example sentence:** *"The overdue reminder flow triggers every morning at 7 AM. It checks all loans. If a loan is overdue, it sends an email to the member and to Pooja."*

---

**21. Dataverse (noun)**
- **Simple meaning:** Microsoft's powerful cloud database system — stores structured data (tables, rows, columns) with relationships, security, and business logic built in
- **Real-world analogy:** A very organized library filing system. Every book has a specific place. You cannot put a book in the wrong section. The system enforces rules and sends alerts.
- **Example sentence:** *"All our library data — books, authors, members, loans — lives in Dataverse. Unlike Excel, Dataverse ensures that a loan record MUST be linked to a real member (it cannot be orphaned)."*

---

**22. Table (noun, in Dataverse)**
- **Simple meaning:** One category of data — like a spreadsheet with rows and columns. A "Book" table has one row per book.
- **Real-world analogy:** One section of a library card catalog. The card catalog has sections: Fiction, Non-Fiction, Reference. Each section is like a table. Each card in the section is one row.
- **Example sentence:** *"The Loan table has 100 rows — one for each borrowing event. Each row has columns: Book_ID, Member_ID, Loan_Date, Due_Date, Return_Date."*

---

**23. Relationship (noun, in databases)**
- **Simple meaning:** A link between two tables — shows how data in one table connects to data in another table
- **Real-world analogy:** A library card. The card belongs to one member (Rohit). Rohit's card can have many stamps (loans). Each stamp points to one book. The relationships: Member → Loan → Book.
- **Example sentence:** *"In Dataverse, the Loan table has a relationship to the Member table and to the Book table. This means every loan MUST have a valid member and a valid book — you cannot create a loan for a member who does not exist."*

---

**24. Power BI (noun)**
- **Simple meaning:** Microsoft's tool for turning raw data into charts, dashboards, and visual reports that help people understand what is happening
- **Real-world analogy:** The annual report your CEO shows to shareholders — instead of rows of numbers, it shows colorful charts that immediately communicate: "Sales went up 20% in Q3."
- **Example sentence:** *"Using Power BI, I connected to our Dataverse loan data and built a dashboard showing: loans per month, most borrowed books, members with overdue loans, and late fee totals."*

---

## CONCEPT: How Power Platform Fits Together

The four main tools of Power Platform are:

```
POWER APPS          POWER AUTOMATE
(user interface)    (automation)
       ↕                  ↕
         DATAVERSE (the data)
       ↕                  ↕
POWER BI            COPILOT STUDIO
(insight)           (chatbot AI)
```

They all read and write to the same Dataverse. This is the entire design principle of Power Platform — **one data source, four different lenses.**

Let us see this with our library:

- **Power Apps (Canvas):** Rohit opens the app, searches "Atomic Habits," borrows it → creates a Loan row in Dataverse
- **Power Automate:** The new Loan row triggers a flow → sends Rohit a confirmation email → schedules a due-date reminder
- **Power BI:** Pooja opens the dashboard → sees "87 loans this month — up 12% from last month" → chart shows Atomic Habits is the most borrowed book
- **Copilot Studio:** Gaurav types in the chatbot: "Is Atomic Habits available?" → chatbot queries Dataverse → responds: "Currently 0 copies available. 1 person has it due on October 15."

**All four tools. One data source. One community library.**

> 💭 **System Thinking Question #9:** What happens to all four tools if Dataverse goes down?
>
> All four break simultaneously. The app cannot save loans, flows cannot read data, Power BI dashboard shows errors, chatbot cannot answer questions.
>
> This is the risk of a **single point of failure**. Advanced architects add redundancy — backups, failover databases, offline caching. We will not build this level of complexity in our project, but understanding that it IS a risk is the first step to designing safe systems.

---

## HANDS-ON EXERCISE 4: Explore Dataverse and Build One Table

### Step 1: Open the Power Apps Maker Portal

1. Open a private browser window
2. Go to `make.powerapps.com`
3. Sign in with your trial account
4. In the environment picker (top right), make sure it says **LM-DEV**

> **Always check the environment picker before doing anything. Always.**

### Step 2: Explore Existing Tables

1. Left menu → **Dataverse** → **Tables**
2. Click **All** to see all tables (including Microsoft's standard ones)
3. Look for tables that start with "crm" or have names like "Account," "Contact" — these are the default Dataverse tables that Microsoft includes

> 💭 **Why does Microsoft include default tables like "Account" and "Contact"?**
>
> Dataverse was originally built for Dynamics 365 — Microsoft's CRM (Customer Relationship Management) system. Dynamics 365 uses tables called Account (a company), Contact (a person at a company), Opportunity (a potential sale), etc.
>
> When Power Platform was built on top of Dataverse, all those Dynamics 365 tables came with it. You can ignore them for now — but knowing they exist explains why some things in Dataverse look like they were built for sales teams (because they were).

### Step 3: Create the Book Table (if not already created from the 20-day course)

1. Click **+ New table**
2. Name: `Book`
3. Description: `Stores information about all books in the Community Library`
4. Click **Create**

### Step 4: Add Columns to the Book Table

The table automatically has an "ID" column (auto-generated) and a "Name" column.

Add these columns (click **+ Add column** for each):

| Column Name | Data Type | Required? | Why? |
|-------------|-----------|-----------|------|
| ISBN | Text (max 20 characters) | No | The International Standard Book Number — unique per book. Not required because some old books don't have ISBNs. |
| Author_Name | Text (max 100 characters) | Yes | We need to know who wrote it. Required because an unknown author is not useful. |
| Genre | Choice | Yes | Set choices: Fiction, Non-Fiction, Science, Biography, Children, Textbook. We use Choice (not text) so users cannot type "Ficton" by mistake. |
| Published_Year | Whole Number | No | Year the book was published. Number (not text) so we can filter "books published after 2020." |
| Total_Copies | Whole Number | Yes | How many physical copies the library has. Required — a book with unknown copies cannot be managed. |
| Available_Copies | Whole Number | Yes | How many are available right now (Total_Copies minus books currently on loan). |
| Average_Rating | Decimal Number | No | Rating from 1.0 to 5.0. Decimal (not whole number) so we can have 4.2, not just 4. |

> 💭 **System Thinking Question #10:** If a book gets borrowed, who or what should update "Available_Copies"?
>
> **Option A:** The librarian manually changes Available_Copies when a loan is created
> **Option B:** A Power Automate flow automatically decreases Available_Copies when a Loan record is created
> **Option C:** Available_Copies is not stored at all — it is always calculated: Total_Copies minus open loans
>
> **Which option is best and why?**
>
> - **Option A:** Bad. Humans make mistakes. If the librarian forgets to update Available_Copies, the data is wrong. Never trust humans for repetitive data updates.
>
> - **Option B:** Better. Automation is reliable. But what if the flow fails? What if two loans are created at exactly the same time? (This is called a "race condition" — a famous problem in computing.) The Available_Copies could be wrong.
>
> - **Option C:** Best for accuracy. Instead of storing the number, you always calculate it fresh: `Available_Copies = Total_Copies - COUNT(Loans where Book = this book and Return_Date is empty)`. This can never be wrong because it reads live data. The downside: it is slower (a calculation instead of reading a stored number).
>
> **This is a real architectural debate in data systems.** The trade-off is between "fast reading" (store the result) and "always accurate" (calculate fresh). In the November phase, when we learn about databases and SQL, we will build both and compare.

### Step 5: Add Sample Data to the Book Table

1. Click **Edit** at the top of the table to open the data grid
2. Add 5 books manually from your `sample-data/books.csv` file
3. Type one book per row: fill in Title (Name column), ISBN, Author_Name, Genre, Published_Year, Total_Copies, Available_Copies, Average_Rating

When you save a row, notice: the system auto-generates a unique ID for every row. You did not type this ID — Dataverse created it. This is called a **Primary Key** and it is one of the most important concepts in databases.

> 💭 **What is a Primary Key and why is it important?**
>
> The Primary Key is a unique identifier for every row. No two rows can ever have the same Primary Key.
>
> Why does this matter? Imagine you have two books both named "History of India." Without a Primary Key, how does the Loan table know WHICH "History of India" was borrowed? It cannot.
>
> The Primary Key solves this: Book #abc123 is "History of India by Romila Thapar." Book #def456 is "History of India by Bipan Chandra." Even though the titles are similar, the IDs are unique. The Loan table links to the ID, not the title.
>
> **This is a fundamental principle of database design.** Every table must have a primary key. Always. Without exception.

---

## HANDS-ON EXERCISE 5: Build Your First Power BI Report (E5 Pro Feature)

Power BI Pro is included in M365 E5 — after September 30, you will need Power BI Free, which cannot share reports. Use Pro now while you have it.

### Step 1: Open Power BI

1. Go to `app.powerbi.com`
2. Sign in with your trial account
3. You will see the Power BI service (the web version)

### Step 2: Connect to Your Dataverse Data

1. Click **+ New** → **Report**
2. Choose **Pick a published semantic model** → then **Paste or manually enter data** (for now, we will use the loans.csv sample data)
3. Or: **Get data** → **Text/CSV** → upload `sample-data/loans.csv`

### Step 3: Build Three Simple Visuals

**Visual 1: Line chart — Loans per Month**
- X-axis: Loan_Date (group by Month)
- Y-axis: Count of Loan_ID
- This shows: "Is the library growing? Are more people borrowing books over time?"

**Visual 2: Bar chart — Most Borrowed Books**
- X-axis: Book_Name
- Y-axis: Count of Loan_ID
- Sort by Count descending
- This shows: "Which books are most popular?"

**Visual 3: Card — Total Late Fees Collected**
- Value: Sum of Late_Fee
- This shows: "How much revenue from late fees this year?"

### Step 4: Publish and Share (E5 Pro only)

1. Click **Publish** (top right)
2. Choose "My Workspace" → **Select**
3. After publishing, click the link to open it in the Power BI service
4. Click **Share** → type Pooja Sharma's email → **Grant access**

Pooja can now open this report in her browser. She did not need to install Power BI Desktop. She did not need to download any files. She just opens a link.

> 💭 **System Thinking Question #11:** What is the difference between "the data" and "the report"?
>
> **The data** (loans.csv) is the raw numbers — rows and columns with no interpretation.
> **The report** is a lens — it asks a specific question of the data and shows the answer visually.
>
> The same data can power many different reports. The library operations team looks at "loans per librarian." The finance team looks at "late fees by month." The acquisition team looks at "most requested books we don't have." All three reports read the same data, but they answer different questions.
>
> **This is why separating data from presentation is so important in system design.** The data layer (Dataverse) should be clean and complete. The presentation layer (Power BI) should be flexible and purpose-built. Never mix them.

---

## HANDS-ON EXERCISE 6: Build the Library Helper Chatbot in Copilot Studio

> **Why now? Why in September?**
>
> Copilot Studio is included in the M365 E5 license. After September 30, using Copilot Studio requires a separate paid license (approximately ₹17,000–₹25,000 per month for 2,000 sessions). This is one of the most powerful tools in the Microsoft stack for building AI assistants. We must use it, understand it, and build something real with it **before the trial closes.**
>
> The `library-faq.txt`, `borrowing-policy.txt`, and `late-return-policy.txt` files in your sample data were created specifically for this exercise. Everything connects.

---

### New Vocabulary for Copilot Studio (add to your journal)

---

**25. Chatbot / Conversational Agent (noun)**
- **Simple meaning:** A computer program that has a text conversation with a user — it reads what the user types and responds intelligently
- **Real-world analogy:** The helpdesk at a library. You ask "Is this book available?" The helpdesk checks the system and tells you. A chatbot does the same thing, but 24 hours a day, without getting tired, and for hundreds of people simultaneously.
- **Example sentence:** *"We built a Library Helper chatbot so members can ask questions at midnight without waiting for a librarian to respond."*

---

**26. Topic (noun, in Copilot Studio)**
- **Simple meaning:** One specific subject or type of question that the chatbot knows how to handle
- **Real-world analogy:** A library information booklet with chapters. Chapter 1: Opening Hours. Chapter 2: How to Borrow a Book. Chapter 3: Late Fees. Each chapter is one "topic."
- **Example sentence:** *"I created a 'Check Book Availability' topic. When a user asks 'Is Harry Potter available?' the chatbot goes to this topic and checks Dataverse for the current available copies."*

---

**27. Trigger Phrase (noun)**
- **Simple meaning:** The words a user types that activate a specific topic
- **Real-world analogy:** A filing system. When someone says the keyword "refund," the cashier opens the Refunds file. The keyword is the trigger phrase.
- **Example sentence:** *"I added trigger phrases like 'is this book available', 'can I borrow', and 'check availability' to the Book Availability topic. Now the chatbot recognises many different ways of asking the same question."*

---

**28. Knowledge Source (noun)**
- **Simple meaning:** A document or file you give to the chatbot so it can read it and answer questions based on what is written inside
- **Real-world analogy:** Giving a new employee the company handbook and saying: "If a customer asks you a question, look in this handbook first and give them the answer." The handbook is the knowledge source.
- **Example sentence:** *"I uploaded library-faq.txt and borrowing-policy.txt as knowledge sources. Now when Gaurav asks 'How many books can I borrow at once?', the chatbot reads the policy file and answers: 'Standard members may borrow up to 3 books.'"*

---

**29. Generative Answers (noun)**
- **Simple meaning:** AI-powered answers that the chatbot creates by reading your knowledge documents — it does not memorize specific answers but uses AI to understand and respond to any question
- **Real-world analogy:** A very smart employee who has read the entire company handbook and can answer questions you never specifically trained them for. You did not teach them every possible question — you gave them the handbook and they figure it out.
- **Example sentence:** *"With Generative Answers enabled, when a member asked 'Can I renew my loan online?' — a question I never created a specific topic for — the chatbot found the relevant section in borrowing-policy.txt and answered correctly."*

---

**30. Publishing (verb, chatbot)**
- **Simple meaning:** Making the chatbot available for real users to use — before publishing, only you can test it; after publishing, you choose which channels (Teams, website, etc.) it appears on
- **Real-world analogy:** Printing and distributing a notice. While you are writing it, only you see it. Once you print and put it on the notice board, everyone can read it.
- **Example sentence:** *"After building and testing the Library Helper, I published it to Microsoft Teams. Now library members can open Teams and chat with the bot directly."*

---

### CONCEPT: What Is Copilot Studio and Why Does It Exist?

Before AI existed, if you wanted to help users answer questions without a human, you had two options:
1. Build a FAQ page — users read it themselves (they often cannot find the answer)
2. Build a complicated decision-tree bot — if user says "X" then say "Y" (brittle, breaks when users phrase things differently)

Both options were frustrating. Users still emailed or called.

**Copilot Studio is a third option:** It uses AI (specifically, large language models — the same technology behind ChatGPT) to understand what the user is asking — even if they phrase it in an unexpected way. Then it either follows a scripted path (for predictable questions like "Is this book available?") or generates an answer from your documents (for complex questions like "What happens if I lose a book?").

### The Two Types of Answers in Copilot Studio

```
USER'S QUESTION
       ↓
Does a Topic match this question?
       ↓
   YES ──────────────────────────→ SCRIPTED ANSWER
   (trigger phrase matches)         (you designed exactly
                                     what the bot says)
       ↓
    NO
       ↓
Is Generative Answers enabled?
       ↓
   YES ──────────────────────────→ AI-GENERATED ANSWER
   (knowledge sources exist)        (AI reads your documents
                                     and creates a response)
       ↓
    NO
       ↓
        BOT SAYS: "I'm sorry, I don't know the answer to that."
```

> 💭 **System Thinking Question #12 (added):** When should you use a scripted Topic vs Generative Answers?
>
> **Scripted Topics are better when:**
> - The answer must be precise and cannot vary (e.g., "The library is open 9 AM to 8 PM")
> - The question requires taking an action (e.g., "Check if this book is available" — the bot must query Dataverse)
> - Legal or compliance language must be exact
>
> **Generative Answers are better when:**
> - There are thousands of possible questions you cannot predict
> - The documents already contain the correct answers
> - Approximate/natural-language answers are acceptable
>
> **The risk of Generative Answers:** AI can "hallucinate" — it can confidently give a wrong answer. This is why you always test your bot carefully and why important decisions (approving a loan, cancelling a membership) should NEVER be handled by generative AI alone — they need a scripted flow with human confirmation.

---

### Step 1: Open Copilot Studio

1. Open a private browser window
2. Go to `copilotstudio.microsoft.com`
3. Sign in with your M365 E5 trial account
4. Make sure the environment picker (top right) shows **LM-DEV**

**What you see:** The Copilot Studio home page, with your existing agents (if any) and a button to create a new one.

> 💭 **Why is it called "Copilot Studio" and not "Power Virtual Agents"?**
>
> Microsoft renamed Power Virtual Agents to Copilot Studio in 2023, as part of their strategy to put AI ("Copilot") at the center of everything. The name changed; the tool became significantly more powerful — especially with the addition of Generative AI answers from documents. This rename teaches you something important: in technology, tool names change frequently. What does NOT change is the underlying concept: a system that has conversations with users.

### Step 2: Create a New Agent

1. Click **+ New agent** (top right)
2. Fill in:
   - **Name:** `Library Helper`
   - **Description:** `Helps Community Library members find books, understand policies, and get answers to common questions`
   - **Instructions:** Type this in the Instructions box:
   ```
   You are the Library Helper for the Community Library. 
   You are friendly, patient, and helpful. 
   You answer questions about books, loans, membership, and library policies.
   When you do not know something, you say so honestly.
   You do not make up information that is not in the library's documents.
   ```
3. Click **Create**

**What is the "Instructions" box?**
This is the system prompt — it tells the AI what personality to have and what boundaries to respect. The AI reads these instructions every time a conversation starts. This is exactly how ChatGPT and other AI assistants work — there is always a system prompt setting the context.

### Step 3: Add Knowledge Sources

This is the part that makes the bot actually useful without writing any code.

1. In the left menu, click **Knowledge**
2. Click **+ Add knowledge**
3. Choose **Files**
4. Upload all three text files from your sample data:
   - `library-faq.txt`
   - `borrowing-policy.txt`
   - `late-return-policy.txt`
5. Wait 1–2 minutes for the files to be processed (Copilot Studio reads them and indexes them)

**What happens behind the scenes:**
Copilot Studio sends your documents to Azure AI (Microsoft's AI service). Azure AI "reads" the documents and creates a searchable index. When a user asks a question, the AI searches this index, finds the relevant passage, and uses it to write an answer. You did not write any answers — you gave the AI the source material and the AI figures out the rest.

### Step 4: Test the Bot with Generative Answers

1. In the top right, click **Test** to open the test chat
2. Type: `How many books can I borrow at once?`
   - The bot should find the answer in borrowing-policy.txt and respond
3. Type: `What happens if I return a book late?`
   - The bot should reference late-return-policy.txt
4. Type: `What is the opening time of the library?`
   - Check if this is in library-faq.txt — it should be
5. Type something NOT in any document: `Can I borrow books in other languages?`
   - A well-configured bot should say it does not know, not make something up

> 💭 **What do you notice about how the bot answers?**
>
> It does not quote the document word for word. It reads the document and then writes a natural, conversational answer. This is the power of generative AI — it translates dense policy language into friendly, readable responses.
>
> But notice: if the document says "Members may borrow 3 books" and the AI says "You can borrow up to 5 books" — that is an error. Always verify AI answers against your source documents. Never trust AI output blindly. This habit — verify before trust — is the most important skill in the AI era.

### Step 5: Create a Scripted Topic — "Book Availability"

For checking if a specific book is available, generative answers are not enough — we need to actually query Dataverse. This requires a scripted topic.

1. Left menu → **Topics** → **+ Add a topic** → **From blank**
2. **Name:** `Check Book Availability`
3. **Description:** `Check how many copies of a specific book are currently available`

**Add Trigger Phrases** (the sentences that start this topic):
```
is this book available
can I borrow
check availability
how many copies
do you have
is available
```
Type each one and press Enter.

**Build the conversation:**

4. After the trigger, add a **Question node:**
   - Bot says: "Which book are you looking for? Please type the title."
   - Save the user's answer to a variable called: `BookTitle`

5. Add an **Action node** → **Call an action** → **Basic flow** (Power Automate):
   - This creates a Power Automate flow that:
     - Receives `BookTitle` from the bot
     - Queries Dataverse: find books where Title contains `BookTitle`
     - Returns: `AvailableCopies` and `TotalCopies`
   
   *(The full flow configuration is in the October phase — for now, just understand that the bot CAN call Power Automate to query live data)*

6. Add a **Message node:**
   - "I found the book **{BookTitle}**. There are currently **{AvailableCopies}** out of **{TotalCopies}** copies available."

7. Add a **Condition node:**
   - If `AvailableCopies` equals 0:
     - Message: "Unfortunately, all copies are currently on loan. Would you like me to add you to the waitlist?"
   - Otherwise:
     - Message: "Great news! You can ask any librarian to help you borrow a copy."

> 💭 **System Thinking Question (Copilot Studio):** Why do we use a scripted topic for book availability instead of letting the AI answer from the knowledge documents?
>
> Because the knowledge documents are static — they were written at one point in time. The borrowing policy says "3 copies of Atomic Habits exist." But if 2 are borrowed right now, the document still says 3. The generative AI would say "3 copies are available" — which is wrong.
>
> For questions about LIVE DATA (current availability, current loan status, member account balance), you must query the database directly through Power Automate. The AI is good at reading documents; it is not good at knowing what happened 5 minutes ago.
>
> This is a critical principle: **AI is good at understanding language. Databases are good at knowing current facts. Use each for what it does best.**

### Step 6: Publish to Teams

1. Left menu → **Channels**
2. Click **Microsoft Teams**
3. Click **Add to Teams** → follow the prompts
4. Open Microsoft Teams → search for "Library Helper" in the search bar
5. Start a conversation with it

Now your Library Helper chatbot lives inside Teams. Library members can chat with it the same way they chat with colleagues. No new app to download. No new website to visit.

**Test it in Teams:**
- Type: "What is the borrowing limit?"
- Type: "Is Atomic Habits available?"
- Type: "Can I renew my book online?"

> 💭 **Final thought on Copilot Studio in September:**
>
> We built this bot in September because the E5 trial gives us the tools. In December, we will come back to Copilot Studio and make it significantly more powerful — connecting it to live Dataverse data, adding Power Automate flows for complex actions, and using advanced AI features.
>
> But the foundation you built today — knowledge sources, topics, trigger phrases, publishing to Teams — is the same foundation that enterprise companies use in production systems serving thousands of users. The complexity comes later. The thinking starts now.

---

## Updated September Vocabulary Master List

Review all **30 words** you learned this month:

| Word | Your definition (write it from memory) |
|------|----------------------------------------|
| Cloud | |
| Tenant | |
| License | |
| Identity | |
| Azure Active Directory / Entra ID | |
| Role | |
| Provision | |
| Domain | |
| SharePoint | |
| List (SharePoint) | |
| Library (SharePoint) | |
| Version History | |
| Permission | |
| Teams Channel | |
| OneDrive | |
| Power Apps | |
| Canvas App | |
| Model-Driven App | |
| Power Automate | |
| Flow | |
| Dataverse | |
| Table | |
| Relationship | |
| Power BI | |
| Chatbot / Conversational Agent | |
| Topic (Copilot Studio) | |
| Trigger Phrase | |
| Knowledge Source | |
| Generative Answers | |
| Publishing (chatbot) | |

---

## 🗣️ English Practice — Week 3: "When X, Y" — Cause and Effect

### Why This Grammar Pattern?

Power Platform is built entirely on EVENTS causing RESPONSES. The English sentence "When [event], [result]" mirrors exactly how flows and apps work. This is the sentence pattern you will use most in technical writing.

- ✅ "**When** a member borrows a book, the flow **sends** a confirmation email."
- ✅ "**When** the due date passes without a return, the system **marks** the loan overdue."
- ✅ "**When** Available_Copies reaches zero, the Borrow button **disappears** and a Waitlist label **appears**."
- ✅ "**When** Pooja approves the membership request, the member's status **changes** to Active."

Related patterns:
- "**If** X, **then** Y" → "If the book is unavailable, the app shows a waitlist message."
- "**As soon as** X, Y" → "As soon as a loan is created, the flow sends a notification."
- "**Every time** X, Y" → "Every time someone logs in, Entra ID checks their credentials."
- "**Because** X, Y" → "Because all four tools share Dataverse, a change in one is visible in all others."

---

### Grammar Practice — Write the Full Sentence

Connect each trigger with its result:

1. Trigger: A new loan record is created → Result: confirmation email sent to member
   "When ____________________________________________, the flow ____________________________________________."

2. Trigger: Due date is 2 days away → Result: reminder email sent
   "When ____________________________________________, the system ____________________________________________."

3. Trigger: Member types a question in the chatbot → Result: Copilot Studio searches the knowledge source
   "When ____________________________________________, Copilot Studio ____________________________________________."

4. Trigger: Rohit's token expires after 1 hour → Result: he must sign in again
   "When ____________________________________________, the system ____________________________________________."

5. Trigger: Pooja opens Power BI dashboard → Result: she sees today's loan statistics
   "When ____________________________________________, Power BI ____________________________________________."

---

### Vocabulary in Sentences

Use each word in a "When X, Y" or "If X, Y" sentence:

| Word | Write your cause-and-effect sentence |
|------|--------------------------------------|
| Power Apps | |
| Power Automate | |
| Dataverse | |
| Relationship (database) | |
| Power BI | |

---

### Writing Exercise: Describe the Community Library Ecosystem

Write one paragraph (5–7 sentences) describing how the four tools connect, using "when" and "because" throughout.

**Template:**
```
"The Community Library system uses four connected tools.
At the centre is Dataverse, which [what it stores].
When a member [action in Power Apps], Dataverse [what happens to the data].
Because Dataverse is the shared source, [what Power Automate can do with the same data].
Power BI reads the same [table name] and [shows what].
When all four tools share one data source, [what benefit this creates]."
```

**Example paragraph (read it, then write your own):**
*"The Community Library system uses four connected tools. At the centre is Dataverse, which stores all books, members, and loan records. When Rohit borrows a book in Power Apps, a new row is created in the Loans table in Dataverse. Because that same row exists in Dataverse, Power Automate detects the new record and sends Rohit a confirmation email within seconds. Power BI reads the same Loans table and updates the dashboard — showing that total active loans increased by one. When all four tools share one data source, there is no duplicate data, no inconsistency, and no manual copying between systems."*

---

### 🔊 Read Aloud Exercise

Read this out loud slowly. Pause at every comma and full stop. After reading, say one sentence from memory about what happens when a book is borrowed:

*"When Rohit opens the library app and searches for Atomic Habits, Power Apps queries the Dataverse Books table and shows him the result. When he taps Borrow, Power Apps creates a new row in the Loans table in Dataverse. This triggers a Power Automate flow, which immediately sends Rohit a confirmation email with his due date. Two weeks later, if Rohit has not returned the book, a scheduled flow checks all loans every morning at 7 AM and sends him an overdue reminder. Pooja can see all of this in the Power BI dashboard — loans per day, overdue rates, and popular books — all from the same Dataverse data."*

---

### Professional Communication: Status Update Email

You have built the first version of the library system. Write a status update email to your manager or course supervisor.

**Template:**
```
Subject: Community Library System — Week [X] Update

Hi [Name],

This week I completed the following:
- [What you built — 1 sentence each, 3 bullet points]

One decision I made this week:
- I chose [option] instead of [alternative] because [reason].

Next week I plan to:
- [Next step 1]
- [Next step 2]

Current blocker (if any): [Describe it] / None at this time.

Please let me know if you have questions.

[Your name]
```

Fill in your real work from this week and send it — even if it is just an email to yourself. Writing it makes the habit real.

---

### 🚫 Common English Mistakes — Week 3

**Mistake 1: Mixing tenses in one sentence**

❌ "I created the table and then I am adding the columns."
✅ "I **created** the table and then **added** the columns."

Rule: Stay in the same tense within one sentence when describing a sequence of actions.

**Mistake 2: "I am having" for states (again — this is very common)**

❌ "I am having difficulty understanding the relationship between the tables."
✅ "I **have** difficulty understanding..." OR "I **find** it difficult to understand..."

**Mistake 3: "Itself" overuse (common in Indian English)**

❌ "The flow itself will send the email itself to the member itself."
✅ "The flow will **automatically** send the email to the member."

**Mistake 4: "As" used to give reasons (ambiguous)**

❌ "As the trial expires on September 30, we must export the data." (reads as "while" or "when")
✅ "**Because** the trial expires on September 30, we must export the data." (clear reason)

Rule: Use "because" for reasons. Use "as" only for simultaneous actions: "As I was exporting, the connection dropped."

---

### ✅ Week 3 English Progress Check

- [ ] Can you describe how Power Apps connects to Dataverse using "when" and "because"?
- [ ] Did you write a status update email for this week?
- [ ] Can you explain what Power BI does in one sentence without technical jargon?
- [ ] Can you write 5 "When X, the system Y" sentences correctly?
- [ ] Did you write at least 4 journal entries this week?

---

---

# WEEK 4: September 27–30
## Backup, Transition, and September Recap

---

## The Most Important Week of September

The trial expires on September 30. This week, we do something that no tutorial teaches but every professional needs to know: **a controlled exit**.

> 💭 **System Thinking Question #12:** What is the difference between a system "stopping" and a system "being decommissioned properly"?
>
> **Stopping:** The lights go out. Data may be lost. Users are confused. Nothing works. This is what happens when a trial expires without preparation.
>
> **Decommissioning properly:** You export all data. You migrate what can be migrated. You inform users. You test the new environment before the old one closes. When the old environment goes dark, the new one is already running.
>
> This is a professional skill. Companies pay consultants significant money to "decommission" old systems properly. You are learning it now, on a small scale.

---

## HANDS-ON EXERCISE 6: Export and Migrate Everything

### Export 1: The Power Platform Solution

A "solution" in Power Platform is a container that holds your apps, flows, tables, and other components — like a ZIP file for your entire project.

1. `make.powerapps.com` → LM-DEV environment
2. Left menu → **Solutions**
3. Click on your solution (e.g., "Community Library")
4. Click **Export solution** → **Next** → choose **Unmanaged** → **Export**
5. A ZIP file will download. Save it to your computer. This file contains your entire project.

**What is Unmanaged vs Managed?**
- **Unmanaged:** Editable. Used in development (LM-DEV). Like a Word document with track changes on.
- **Managed:** Locked. Used in production (LM-PRD). Like a printed document — you can read it but not easily edit it. This prevents people from directly editing production code.

### Export 2: Dataverse Table Data

1. In `make.powerapps.com`, go to **Dataverse → Tables**
2. Click on your **Book** table → click **Export → Export data**
3. Repeat for **Member**, **Loan**, **Author** tables
4. Each export creates an Excel file with all the rows

### Import to Developer Plan

1. Open your personal Microsoft account (the one for Developer Plan)
2. Go to `make.powerapps.com` → select your Developer Plan environment
3. **Solutions → Import solution** → upload the ZIP file you exported
4. After import, go to **Dataverse → Tables** → import the Excel files into each table

### Verify Everything Works

Before September 30, open the imported solution in your Developer Plan and test:
- [ ] Can you see all the tables with data?
- [ ] Does the canvas app open?
- [ ] Do the flows exist?
- [ ] Is the SharePoint connection still working? (It may need to be re-authenticated)

---

## 🗣️ English Practice — Week 4: Past Tense for Technical Logs

### Why This Grammar Pattern?

Technical logs, handover documents, and status reports are written in the **simple past tense** — because you are describing what ALREADY HAPPENED.

- ✅ "I **created** the resource group named 'rg-community-library'."
- ✅ "I **exported** the Power Platform solution as an unmanaged ZIP file."
- ✅ "I **verified** that all 50 books imported correctly into the Developer Plan."
- ✅ "The connection **failed** because the SharePoint credential had expired."

**Irregular past tenses you will use constantly — memorise these:**

| Present | Past | Example |
|---------|------|---------|
| build | **built** | "I built the canvas app." |
| find | **found** | "I found an error in the connection." |
| run | **ran** | "The flow ran successfully." |
| choose | **chose** | "I chose the Central India region." |
| write | **wrote** | "I wrote the SQL schema." |
| set up | **set up** | "I set up the developer account." |
| export | **exported** | "I exported the solution." |
| import | **imported** | "I imported the data tables." |
| delete | **deleted** | "I deleted the unused environment." |
| verify | **verified** | "I verified the data was correct." |

---

### Grammar Practice — Rewrite in Past Tense

1. Present: "I export the solution from Power Platform and save it to my computer."
   Past: ________________________________________________

2. Present: "The import process takes about 10 minutes and shows a progress bar."
   Past: ________________________________________________

3. Present: "I verify that all the tables appear correctly in the new environment."
   Past: ________________________________________________

4. Present: "The flow does not run because the connection is not re-authenticated."
   Past: ________________________________________________

5. Present: "I delete the old environment after confirming the new one works."
   Past: ________________________________________________

---

### Writing Exercise: Write a Real Technical Log Entry

A technical log records what you did, in order, with dates and results. This is one of the most valued professional habits in technology teams.

**Format:**
```
Date: [Date]
Task: [What you were doing in one sentence]
Environment: [Which system]
Steps completed:
  1. [Action] — Result: [What happened]
  2. [Action] — Result: [What happened]
  3. [Action] — Result: [What happened]
Issues encountered: [Describe any problem] / None
Resolution: [How you fixed it] / N/A
Status: Complete / In Progress / Blocked
```

**Write a real log entry for the export + migration you completed this week.** Use past tense throughout.

**Example:**
```
Date: September 28, 2026
Task: Export Community Library solution from LM-DEV and import to Developer Plan
Environment: LM-DEV (source) → Personal Developer Plan (destination)
Steps completed:
  1. Exported CommunityLibrary solution as Unmanaged ZIP — Result: 4.2 MB file downloaded.
  2. Exported data from Books, Members, Loans, Authors tables — Result: 4 Excel files, 183 rows total.
  3. Imported solution ZIP to Developer Plan — Result: 3 apps, 4 flows, 4 tables imported successfully.
  4. Imported data Excel files into each table — Result: All 183 rows confirmed present.
  5. Tested Borrow button in canvas app — Result: New Loan record created in Dataverse.
Issues encountered: SharePoint connection in the overdue reminder flow showed "Invalid credentials."
Resolution: Re-authenticated the SharePoint connection by clicking "Fix connection" in Power Automate.
Status: Complete
```

---

### 🔊 Read Aloud Exercise

Read this handover note out loud as if you are speaking to a new team member taking over from you:

*"The Community Library system was successfully migrated from the Microsoft 365 E5 trial to a free Developer Plan environment on September 28. The solution contained three canvas app screens, four Power Automate flows, and four Dataverse tables. One issue occurred during migration: the SharePoint connection in the overdue reminder flow required re-authentication after the environment change. This was resolved by updating the connection credentials inside Power Automate. The system is now fully operational. All tested features — book search, borrow, loan view, and overdue reminders — worked correctly after migration."*

---

### Professional Communication: The Handover Note

**Template:**
```
Subject: [Project Name] — System Handover Document

Date: [Date]
Written by: [Your name]
Current environment: [Where the system lives]

SYSTEM STATUS: [Operational / Partial / Blocked]

What is working:
- [Feature 1]
- [Feature 2]
- [Feature 3]

Known issues:
- [Issue and workaround] / None

How to access:
- URL: [environment URL]
- Login: use your learning account
- Credentials for test accounts: [where they are stored — never write passwords here]

Next steps:
- [What needs to be done next, if anything]

Contact [Your name] at [contact] with any questions.
```

Write this handover note for the Community Library system as it stands at the end of September.

---

### 🚫 Common English Mistakes — Week 4

**Mistake 1: Confusing "I have done" and "I did"**

Use **simple past** for a specific finished action:
✅ "Yesterday, I **exported** the solution." (specific time, finished)

Use **present perfect** when the result matters now:
✅ "I **have exported** the solution — it is ready for import." (result matters now)

**Mistake 2: Run-on sentences (too many ideas with no punctuation)**

❌ "I exported the solution and imported it and then I tested it and it worked but the SharePoint connection needed to be fixed."
✅ "I exported and imported the solution. After testing, I found that the SharePoint connection had expired. I fixed it by re-authenticating in Power Automate."

Rule: One sentence = one idea. When in doubt, add a full stop and start again.

**Mistake 3: "Out of station" (Indian English for "not in the office")**

❌ "Pooja was out of station this week."
✅ "Pooja was **out of the office** this week." OR "Pooja was **unavailable** this week."

**Mistake 4: Vague descriptions in technical writing**

❌ "Something went wrong with the import."
✅ "The import **failed with an authentication error** on the SharePoint connector. Error code: AADSTS70011."

Rule: In technical writing, always say: what failed, where it failed, and what the exact error was.

---

### ✅ Week 4 English Progress Check

- [ ] Can you write a complete technical log entry with dates, steps, results, and issues?
- [ ] Can you correctly use at least 8 irregular past tense verbs?
- [ ] Did you write a handover note for the Community Library system?
- [ ] Can you avoid run-on sentences — one idea per sentence?
- [ ] Read your Week 1 journal entry. Write 2 sentences about what changed in your writing since then.

---

## September Recap — What You Built and Understood

By the end of September, you should be able to explain these things to someone else (in English or Hindi — both count):

### Technical Things You Know

1. **Tenant** — your company's isolated space in Microsoft's cloud
2. **Entra ID** — the identity and access management system
3. **Licenses** — permissions granted to individual users
4. **Roles** — groups of permissions assigned to users
5. **SharePoint** — cloud-based file storage and list management
6. **Teams** — collaboration platform that integrates with everything
7. **Dataverse** — the relational database at the heart of Power Platform
8. **Primary Key** — unique identifier for every row in a database
9. **Data types** — why it matters to store dates as dates, not text
10. **Relationships** — how tables connect to each other
11. **Power BI** — turning data into visual insights
12. **Solution (Power Platform)** — container for exporting and deploying projects
13. **Managed vs Unmanaged** — production vs development
14. **DEV/UAT/PRD** — the three-environment pipeline for safe deployment

### System Thinking You Have Practiced

- Why does Microsoft create tenants? (Isolation, security, billing per company)
- Why do databases need primary keys? (Uniqueness, relationships, integrity)
- Why do we have DEV/UAT/PRD environments? (Safe development without breaking production)
- Why are some data stored and others calculated? (Trade-off between speed and accuracy)
- Why does Microsoft offer a free trial? (Customer acquisition strategy)
- Why do companies need sign-in logs? (Security monitoring)
- Why separate data from presentation? (Flexibility, maintenance, multiple audiences)

### English Progress

By September 30, your journal should have at least 20 entries. Go back and read your first entry. Notice how much better you write now compared to Day 1. That improvement happened without you trying — just by doing it every day.

---

## September Vocabulary Master List

Review all 24 words you learned this month:

| Word | Your definition (write it from memory) |
|------|----------------------------------------|
| Cloud | |
| Tenant | |
| License | |
| Identity | |
| Azure Active Directory / Entra ID | |
| Role | |
| Provision | |
| Domain | |
| SharePoint | |
| List (SharePoint) | |
| Library (SharePoint) | |
| Version History | |
| Permission | |
| Teams Channel | |
| OneDrive | |
| Power Apps | |
| Canvas App | |
| Model-Driven App | |
| Power Automate | |
| Flow | |
| Dataverse | |
| Table | |
| Relationship | |
| Power BI | |

If you can fill in this table without looking at the definitions, you have learned September deeply.

---

## Looking Ahead: October

In October, the M365 trial is gone, but your Developer Plan is active. We go **deep** into Power Platform:

- Build the complete library app from scratch with professional features
- Master Power Fx formulas (the Excel-like language of Power Apps)
- Build complex Power Automate flows with conditions and loops
- Understand Dataverse relationships and security roles properly
- Start your first data model design exercise

**The English goal for October:** Start writing "If... then..." sentences in your technical journal. These are the sentences of logical thinking:

- *"If a member's loan is overdue by more than 7 days, then the system should block them from borrowing more books."*
- *"If Available_Copies is 0, then the Borrow button should be disabled and show 'Waitlist'."*
- *"If the flow fails, then it should send an alert email to Pooja."*

These sentences are called **business rules** or **logic statements**. In October, you will turn them into real apps and flows.

---

*Phase 1 complete. Open `02-phase-october.md` when ready.*

*September 6 – September 30, 2026*
*Prerequisite for October: Developer Plan account active, solution exported and imported, all data backed up.*
