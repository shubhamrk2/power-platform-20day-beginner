# Phase 3: Azure + GitHub + DevOps
## November 1 – November 30, 2026
### Azure Free Account + GitHub Free — Where Real Engineering Happens

---

> **Power Platform is how businesses build solutions quickly. Azure and GitHub are how engineers build the systems that run the world — the APIs, databases, and pipelines that Power Platform itself depends on. This month, you pull back the curtain. You see what is behind the scenes. By November 30, you will understand not just how to USE a system — you will understand how systems are BUILT and DEPLOYED. This is the knowledge that moves someone from "I use the tool" to "I understand the system."**

---

## A New Way of Thinking: Infrastructure Thinking

In October, you thought like an **app builder**: "What does the user see? What happens when they tap this button?"

In November, you think like an **infrastructure engineer**: "Where does the data live? What happens when the server gets 1,000 requests at the same time? If this service goes down, what is the backup?"

These two types of thinking are not opposites — the best engineers have both. This month, you develop the infrastructure mind.

---

## Azure Free Tier — What We Use This Month

Remember this table from the master roadmap — now we use it:

| Service | What It Is | We Build |
|---------|-----------|---------|
| **Azure SQL Database** | A real relational database in the cloud | LibraryDB — same data as Dataverse but in SQL |
| **Azure Functions** | Code that runs on-demand, no server management | An API that Power Apps and Power Automate call |
| **Azure Blob Storage** | Cloud file storage | Book cover images for the library app |
| **Azure App Service (F1 free)** | Hosts a web application | A simple library catalog webpage |
| **Azure Static Web Apps** | Hosts a static website (HTML/CSS/JS) | A public-facing library information page |
| **Azure DevOps** | Plan, track, and deploy projects | A sprint board + deployment pipeline |

---

## November Week-by-Week Plan

| Week | Dates | Focus |
|------|-------|-------|
| Week 9 | Nov 1–7 | Azure Portal fundamentals + Resource Groups + Azure SQL |
| Week 10 | Nov 8–14 | Azure Functions + Blob Storage + calling Azure from Power Platform |
| Week 11 | Nov 15–21 | GitHub — repositories, branches, commits, pull requests |
| Week 12 | Nov 22–30 | GitHub Actions (CI/CD) + Azure DevOps + connecting everything |

---

---

# WEEK 9: November 1–7
## Azure Portal + Resource Groups + Azure SQL Database

---

## Vocabulary for Week 9

---

**1. Azure Portal (noun)**
- **Simple meaning:** The web interface for managing all your Azure services — like the cockpit of an airplane, with all the controls in one place
- **Example sentence:** *"I opened portal.azure.com to create a new database. The Azure Portal shows all my services, their costs, health status, and settings in one place."*

---

**2. Subscription (noun)**
- **Simple meaning:** Your billing account in Azure — all services you create are attached to a subscription, and the subscription is what Microsoft charges
- **Real-world analogy:** Your electricity meter. All the electricity used in your house goes through one meter. The meter is your subscription — it accumulates charges.
- **Example sentence:** *"My Azure free account comes with one free subscription. All the services I create this month — SQL database, Functions, Storage — are all inside this one subscription."*

---

**3. Resource Group (noun)**
- **Simple meaning:** A logical container that holds related Azure services — like a project folder that groups everything belonging to one project
- **Real-world analogy:** A file drawer for one project. All documents, invoices, notes for "Community Library" go in the same drawer. When the project ends, you open the drawer and delete everything at once.
- **Example sentence:** *"I created a resource group called 'rg-community-library'. Inside it, I put the SQL database, the Azure Functions app, and the Blob storage. When I want to delete the entire project, I delete the resource group and everything inside it disappears."*

---

**4. Region (noun)**
- **Simple meaning:** The physical location of the data center where your Azure service runs — a specific city or area
- **Real-world analogy:** Choosing which Amazon warehouse ships your order. Mumbai warehouse (Central India region) ships faster to Delhi than the Singapore warehouse.
- **Example sentence:** *"I chose the 'Central India' region for all my Azure services because our library's users are in India. Data traveling from a Delhi user to a Central India data center is faster than traveling to a Europe data center."*

---

**5. SQL (noun, abbreviation for Structured Query Language)**
- **Simple meaning:** The language used to talk to relational databases — to create tables, insert rows, read data, update records, and delete
- **Real-world analogy:** The language you use to talk to a filing clerk. "Give me all files where the date is after January 2025" is a SELECT query. "Add this new file" is an INSERT. "Change the status to Closed" is an UPDATE.
- **Example sentence:** *"I used SQL to create the Books table: `CREATE TABLE Books (BookID INT PRIMARY KEY, Title VARCHAR(200), Author VARCHAR(100), ISBN VARCHAR(20), Genre VARCHAR(50))`"*

---

**6. Connection String (noun)**
- **Simple meaning:** A text code that tells an app HOW to connect to a database — it contains the server address, database name, username, and password in one line
- **Real-world analogy:** A full mailing address: building name + floor + room number + a key. All the information needed to find and open a specific room.
- **Example sentence:** *"The Power Automate flow uses a connection string to connect to the Azure SQL database: `Server=tcp:library-server.database.windows.net,1433;Database=LibraryDB;User ID=libadmin;Password=...`. I keep this secret — never put connection strings in public code."*

---

**7. Schema (noun)**
- **Simple meaning:** The structure of a database — which tables exist, which columns each table has, and what data type each column stores
- **Real-world analogy:** The blueprint of a filing system. "The Member drawer has: a Name section, an Email section, a Phone section, a Join Date section." The schema is the blueprint, not the actual files.
- **Example sentence:** *"The Library database schema has 4 tables: Books, Members, Loans, Authors. The Loans table schema: LoanID (integer), BookID (foreign key to Books), MemberID (foreign key to Members), LoanDate (date), DueDate (date), ReturnDate (date, nullable), LateFee (decimal)."*

---

**8. Query (noun/verb)**
- **Simple meaning:** A question you ask a database, written in SQL
- **Example sentence:** *"I ran a query to find all overdue loans: `SELECT m.FullName, b.Title, l.DueDate, DATEDIFF(day, l.DueDate, GETDATE()) AS DaysOverdue FROM Loans l JOIN Members m ON l.MemberID = m.MemberID JOIN Books b ON l.BookID = b.BookID WHERE l.ReturnDate IS NULL AND l.DueDate < GETDATE()`"*

---

## CONCEPT: Azure SQL vs Dataverse — Why Learn Both?

You have already built your library system in Dataverse. Why are we now building it in Azure SQL?

**Three reasons:**

### Reason 1: Dataverse is built ON Azure SQL

Dataverse stores its data in Azure SQL internally. Microsoft adds a layer on top (security roles, Power Apps integration, business rules) and calls it Dataverse. Understanding Azure SQL means understanding what Dataverse is doing behind the scenes.

### Reason 2: Not Every System Uses Dataverse

Many companies store their data in:
- Azure SQL (relational data, traditional enterprises)
- Azure Cosmos DB (NoSQL, high-scale apps)
- Azure Data Lake (analytics, big data)
- SQL Server on-premises (old systems that were not moved to cloud)

If you connect Power Automate to a customer's Azure SQL database (very common in consulting projects), you must understand SQL.

### Reason 3: SQL is Universal

SQL is 50+ years old and is used by every major database system: Microsoft SQL Server, PostgreSQL, MySQL, Oracle, SQLite. If you understand SQL, you can work with any of these. Power Fx and DAX are Microsoft-specific. SQL is the language of data for the whole world.

> 💭 **System Thinking Question #1:** If Dataverse and Azure SQL are similar, why doesn't Microsoft just tell everyone to use Azure SQL directly?
>
> Because Azure SQL requires:
> - Writing SQL queries (a programming skill)
> - Managing connections, authentication, firewalls manually
> - Building your own security model
> - No built-in Power Apps integration
>
> Dataverse is Azure SQL + security model + Power Apps integration + business rules + automatic API — all pre-built. For business users who cannot write SQL, Dataverse is much more accessible.
>
> The trade-off: Dataverse is easier and more integrated, but more expensive and more opinionated (it works Microsoft's way). Azure SQL is harder to set up but cheaper at scale and more flexible.

---

## HANDS-ON EXERCISE 1: Create Your Azure Resource Group and SQL Database

### Step 1: Open Azure Portal

1. Go to `portal.azure.com`
2. Sign in with your Azure free account
3. You will see the Azure home page — a dashboard showing all your services

### Step 2: Create a Resource Group

1. Search for "Resource groups" in the top search bar
2. Click **+ Create**
3. Fill in:
   - **Subscription:** Azure subscription 1 (the free account)
   - **Resource group name:** `rg-community-library`
   - **Region:** `(Asia Pacific) Central India`
4. Click **Review + Create** → **Create**

> 💭 **Why do we always put ALL related resources in the same resource group?**
>
> **Cost visibility:** The Azure Portal shows the total cost of a resource group. If "rg-community-library" costs ₹0 this month (free tier), you know immediately. If it costs ₹500, you know something is wrong.
>
> **Lifecycle management:** When the project ends, delete the resource group. Done. No orphaned resources slowly billing you.
>
> **Access control:** You can give a colleague access to the entire resource group instead of individually configuring access for each service inside it.

### Step 3: Create the Azure SQL Database

1. Search "SQL databases" → click **+ Create**
2. **Basics tab:**
   - Resource group: `rg-community-library`
   - Database name: `LibraryDB`
   - Server: **Create new** → fill in:
     - Server name: `library-server-[yourname]` (must be globally unique)
     - Region: `Central India`
     - Authentication: SQL authentication
     - Admin login: `libadmin`
     - Password: Create a strong password (12+ chars, uppercase, lowercase, number, symbol). Write it in your notebook.
3. **Compute + storage:** Click **Configure database** → choose **Basic** tier (5 DTU, 2 GB, ~₹400/month BUT your free account includes 250 GB SQL Database free for 12 months — this will show ₹0)
4. Click **Review + Create** → **Create**

Wait 3–5 minutes for the database to be provisioned.

### Step 4: Configure the Firewall

By default, Azure SQL blocks ALL access from outside Azure. You need to allow your computer's IP.

1. Go to your new SQL server → **Networking** (left menu)
2. Under **Firewall rules** → click **+ Add your client IPv4 address**
3. Also toggle: **Allow Azure services and resources to access this server** → ON (this allows Azure Functions and Power Automate to connect)
4. Click **Save**

> 💭 **System Thinking Question #2:** Why does Azure block all access by default?
>
> The principle: **deny everything, then explicitly allow what you need.**
>
> If the default was "allow everything," a hacker who discovered your server address could immediately try to connect. By denying everything by default, an attacker hitting the server gets no response at all — they do not even know if the server exists.
>
> This is called "deny by default" or "zero trust" — a security philosophy that assumes everyone outside is a potential threat until proven otherwise. You will see this principle in Azure networking, Dataverse security roles, GitHub repository permissions, and Azure Active Directory. It is everywhere.

### Step 5: Create the Library Database Tables using SQL

1. In the Azure Portal → your SQL database → **Query editor (preview)**
2. Sign in with your `libadmin` credentials
3. You now have a SQL editor. Run these queries one at a time:

**Create the Books table:**
```sql
CREATE TABLE Books (
    BookID INT IDENTITY(1,1) PRIMARY KEY,
    Title NVARCHAR(200) NOT NULL,
    AuthorName NVARCHAR(100) NOT NULL,
    ISBN NVARCHAR(20),
    Genre NVARCHAR(50) NOT NULL,
    PublishedYear INT,
    TotalCopies INT NOT NULL DEFAULT 1,
    AvailableCopies INT NOT NULL DEFAULT 1,
    AverageRating DECIMAL(3,1),
    CreatedDate DATETIME DEFAULT GETDATE()
);
```

**Create the Members table:**
```sql
CREATE TABLE Members (
    MemberID INT IDENTITY(1,1) PRIMARY KEY,
    FullName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL UNIQUE,
    Phone NVARCHAR(20),
    MembershipType NVARCHAR(20) NOT NULL CHECK (MembershipType IN ('Standard', 'Premium', 'Student', 'Staff')),
    JoinDate DATE NOT NULL DEFAULT CAST(GETDATE() AS DATE),
    MembershipExpiry DATE NOT NULL,
    IsActive BIT NOT NULL DEFAULT 1
);
```

**Create the Loans table:**
```sql
CREATE TABLE Loans (
    LoanID INT IDENTITY(1,1) PRIMARY KEY,
    BookID INT NOT NULL FOREIGN KEY REFERENCES Books(BookID),
    MemberID INT NOT NULL FOREIGN KEY REFERENCES Members(MemberID),
    LoanDate DATE NOT NULL DEFAULT CAST(GETDATE() AS DATE),
    DueDate DATE NOT NULL,
    ReturnDate DATE NULL,
    LateFee DECIMAL(8,2) DEFAULT 0,
    Status NVARCHAR(20) NOT NULL DEFAULT 'Active' CHECK (Status IN ('Active', 'Returned', 'Lost'))
);
```

> 💭 **Notice the SQL concepts in these CREATE TABLE statements:**
>
> - `INT IDENTITY(1,1) PRIMARY KEY` — auto-incrementing integer primary key (like Dataverse's auto-generated ID)
> - `NOT NULL` — this column cannot be empty (like "Required" in Dataverse)
> - `UNIQUE` — no two rows can have the same email (prevents duplicate members)
> - `CHECK (MembershipType IN (...))` — only these values are allowed (like "Choice" column type in Dataverse)
> - `FOREIGN KEY REFERENCES Books(BookID)` — this column must contain a valid BookID from the Books table (like a Lookup column in Dataverse)
> - `DEFAULT GETDATE()` — if you do not provide a value, use today's date (like a default value in Dataverse)
>
> **Every constraint you see in SQL has an equivalent in Dataverse.** Now you understand what Dataverse is doing behind the scenes when you set "Required" or "Choice" column types.

### Step 6: Insert Sample Data

```sql
-- Insert sample books
INSERT INTO Books (Title, AuthorName, ISBN, Genre, PublishedYear, TotalCopies, AvailableCopies, AverageRating)
VALUES 
('Atomic Habits', 'James Clear', '978-1847941831', 'Non-Fiction', 2018, 3, 2, 4.8),
('The Alchemist', 'Paulo Coelho', '978-0062315007', 'Fiction', 1988, 2, 1, 4.5),
('Sapiens', 'Yuval Noah Harari', '978-0062316097', 'Non-Fiction', 2011, 2, 2, 4.4),
('Wings of Fire', 'A.P.J. Abdul Kalam', '978-8173711466', 'Biography', 1999, 4, 4, 4.7),
('The God of Small Things', 'Arundhati Roy', '978-0812979657', 'Fiction', 1997, 1, 0, 4.3);

-- Insert sample member
INSERT INTO Members (FullName, Email, Phone, MembershipType, MembershipExpiry)
VALUES 
('Rohit Verma', 'rohit.verma@learner.com', '+91-9876543210', 'Premium', '2027-09-30'),
('Priyanka Singh', 'priyanka.singh@learner.com', '+91-9876543211', 'Student', '2027-03-31');

-- Insert a sample loan (Rohit borrowed The God of Small Things, currently overdue)
INSERT INTO Loans (BookID, MemberID, LoanDate, DueDate, Status)
VALUES (5, 1, '2026-10-01', '2026-10-15', 'Active');
```

### Step 7: Query the Data

Run these queries and observe the results:

```sql
-- Find all overdue loans with member and book details
SELECT 
    m.FullName AS MemberName,
    b.Title AS BookTitle,
    l.DueDate,
    DATEDIFF(day, l.DueDate, GETDATE()) AS DaysOverdue,
    DATEDIFF(day, l.DueDate, GETDATE()) * 5.00 AS LateFeeINR
FROM Loans l
INNER JOIN Members m ON l.MemberID = m.MemberID
INNER JOIN Books b ON l.BookID = b.BookID
WHERE l.ReturnDate IS NULL 
  AND l.DueDate < GETDATE()
ORDER BY DaysOverdue DESC;
```

This JOIN query shows data from 3 tables simultaneously — combining Members, Books, and Loans. This is the power of relational databases.

> 💭 **System Thinking Question #3:** In Dataverse, when you use `LookUp(Members, cr_email = User().Email)` in Power Apps, what SQL query is Dataverse running behind the scenes?
>
> Something like:
> ```sql
> SELECT TOP 1 * FROM Members WHERE Email = 'rohit.verma@learner.com'
> ```
>
> When you use `Filter(Loans, cr_due_date < Today())` in Power Apps, Dataverse runs:
> ```sql
> SELECT * FROM Loans WHERE DueDate < GETDATE()
> ```
>
> Power Fx and SQL are different languages, but they express the same ideas. Understanding SQL makes you a better Power Fx developer — because now you understand WHAT the formula is doing at the data layer.

---

## 🗣️ English Practice — Week 9: Technical Precision Writing

### Why This Grammar Pattern?

Infrastructure work — databases, cloud services, configurations — requires **precise language**. Vague descriptions cause confusion, delays, and expensive mistakes.

**The precision principle:** Every technical sentence should answer: **WHAT** exactly? **WHERE** exactly? **WHEN** exactly? **HOW MUCH** exactly?

**Compare:**

| Vague (avoid) | Precise (use) |
|--------------|---------------|
| "I created a database." | "I created an **Azure SQL Database** named **LibraryDB** in the **Central India** region using the **Basic (5 DTU)** tier." |
| "Something went wrong." | "The **CREATE TABLE** statement failed with error: **'Cannot insert duplicate key in object dbo.Books'**, indicating that BookID 1 already exists." |
| "It takes some time." | "The Azure SQL Database takes **2–3 minutes** to provision after clicking Create." |
| "I added some users." | "I added **6 user accounts**: 1 System Administrator (Pooja), 2 Basic Users with Staff role (Sanjay, Neha), and 3 Basic Users with Member role." |

---

### Grammar Practice: Add Precision

Rewrite each vague sentence with specific details from your own learning this week:

1. "The database has some tables." → "The LibraryDB database has _____ tables: ________________________________."

2. "I set up the firewall." → "I configured the Azure SQL firewall to ______________ and enabled ______________."

3. "The query returns loan information." → "The SQL query returns ______ columns: _____, _____, _____, filtered by _____ and sorted by _____."

4. "There was an error." → "When I ran the CREATE TABLE statement for Loans, I received error: ______, which occurred because _______."

---

### Vocabulary in Sentences (with maximum precision)

For each word, write ONE sentence including numbers, names, locations, or specific conditions:

| Word | Write your precise sentence |
|------|-----------------------------|
| Resource Group | |
| SQL | |
| Connection String | |
| Schema | |
| Region | |

**Example:** Word: Subscription → *"My Azure free account includes one subscription named 'Azure subscription 1', covering 12 months of free services including 250 GB of Azure SQL Database storage."*

---

### Writing Exercise: The Technical Setup Log

A setup log is critical in infrastructure. When something breaks 3 months later, this log tells you exactly what was configured.

**Write a complete setup log for the Azure SQL Database you created:**

```
AZURE SQL DATABASE SETUP LOG

Date: [Exact date]
Created by: [Your name]

RESOURCE DETAILS:
  Resource Group: [Name]
  Server Name: [Full address, e.g. library-server.database.windows.net]
  Database Name: [Name]
  Region: [Region name]
  Pricing Tier: [Tier and DTU count]
  Monthly Cost: [Amount — should be ₹0 on free tier]

AUTHENTICATION:
  Method: SQL Authentication
  Admin Login: [Username only — NEVER write passwords in documents]
  Password stored in: [Location — e.g., "personal encrypted notebook"]

FIREWALL RULES:
  - Rule 1: [IP range or description]
  - Azure services access: [Enabled / Disabled]

TABLES CREATED:
  - Books: [Number of columns, primary key name]
  - Members: [Number of columns, primary key name]
  - Loans: [Number of columns, foreign keys]

SAMPLE DATA LOADED:
  - Books: [Number of rows]
  - Members: [Number of rows]
  - Loans: [Number of rows]

VERIFICATION:
  - Test query: [What you ran] — Result: [What it returned]

NOTES:
  [Any problems encountered and how you solved them]
```

---

### 🔊 Read Aloud Exercise

Read this SQL query explanation out loud as if teaching a colleague:

*"This SQL query joins three tables to produce a list of overdue loans. The FROM clause starts with the Loans table, aliased as 'l'. The first INNER JOIN connects Loans to the Members table using the MemberID column — this gives us the member's name and email. The second INNER JOIN connects to the Books table using BookID, giving us the book title. The WHERE clause has two conditions: ReturnDate IS NULL — meaning the book has not been returned — and DueDate is less than today's date, meaning the loan is past due. The ORDER BY clause sorts results so the most overdue loans appear first."*

After reading: Write this query's purpose in 3 plain English bullet points without using SQL keywords.

---

### Professional Communication: The Azure Support Ticket

When something goes wrong in Azure, a good support ticket is specific, structured, and saves everyone time.

**Template:**
```
Subject: [Service Name] — [Brief problem description] — [Urgency: Low/Medium/High]

SUBSCRIPTION: [Name]
RESOURCE: [Full resource name and type]
REGION: [Region]

PROBLEM DESCRIPTION:
[What you were trying to do, what you expected, what actually happened — 2-3 sentences]

ERROR MESSAGE:
[Copy the EXACT error text — do not paraphrase]

STEPS TO REPRODUCE:
1. [Exact step]
2. [Exact step]

WHAT I HAVE ALREADY TRIED:
- [Action] — Result: [What happened]

IMPACT:
[What cannot be done while this problem exists?]
```

Write one for the firewall configuration from this week (real or fictional).

---

### 🚫 Common English Mistakes — Week 9

**Mistake 1: Vague time references**
❌ "I will do it soon." ✅ "I will complete the database setup **by November 5**."

**Mistake 2: "Same to same" (Indian English)**
❌ "The Azure SQL schema is same to same as Dataverse." ✅ "The schema is **identical to** the Dataverse schema."

**Mistake 3: Writing passwords in documentation**
NEVER write passwords in documents. Write: "Password stored in [location]."

**Mistake 4: Passive without saying who did it**
❌ "The error was fixed." ✅ "**I** fixed the error **on November 4** by updating the firewall rules."

---

### ✅ Week 9 English Progress Check

- [ ] Did you write a complete Azure SQL setup log?
- [ ] Can you describe the LibraryDB schema in 4 precise sentences without looking at notes?
- [ ] Are you using specific dates, numbers, and names instead of vague words?
- [ ] Have you practised "identical to" instead of "same to same"?
- [ ] Can you explain what a SQL JOIN does using the words "combines" and "matches"?

---

---

# WEEK 10: November 8–14
## Azure Functions + Blob Storage + Calling Azure from Power Platform

---

## Vocabulary for Week 10

---

**9. Serverless (adjective)**
- **Simple meaning:** Running code without managing servers — you write the function; Microsoft runs it on whatever server is available; you pay only for the milliseconds your code actually runs
- **Real-world analogy:** Using a hotel room vs buying an apartment. If you book a hotel, you pay only for the nights you stay. You do not maintain the building. Azure Functions is the hotel room of computing — available on demand, billed only when used.
- **Example sentence:** *"I built a serverless Azure Function to calculate late fees. The function sleeps 99% of the time. When Power Automate calls it with a loan date and due date, it wakes up, calculates the fee in 50 milliseconds, and sends the result back. I pay only for those 50ms — approximately ₹0.000001."*

---

**10. API (noun — Application Programming Interface)**
- **Simple meaning:** A defined way for one software to talk to another software — a contract that says "send me THIS, and I will give you THAT back"
- **Real-world analogy:** A restaurant menu. The menu is the API — it tells you what you can order (inputs) and what you will receive (outputs). You do not go into the kitchen and cook it yourself. You use the menu interface.
- **Example sentence:** *"Power Automate calls the late fee calculation Azure Function using its API. Power Automate sends: `{loanDate: '2026-10-01', dueDate: '2026-10-15'}`. The API sends back: `{lateFee: 75, daysOverdue: 15, message: '15 days × ₹5 = ₹75'}`."*

---

**11. HTTP (noun — HyperText Transfer Protocol)**
- **Simple meaning:** The standard language of the internet — when your browser loads a webpage, it uses HTTP. When an app calls an API, it usually uses HTTP.
- **Methods:**
  - **GET** — asking for data ("give me the book with ID 5")
  - **POST** — sending data to create something ("here is a new loan record, please save it")
  - **PUT/PATCH** — updating existing data ("change the status of loan #12 to Returned")
  - **DELETE** — removing data ("delete book #7")
- **Example sentence:** *"When Power Automate calls the Azure Function, it makes an HTTP POST request — it is sending data (the loan details) to the function and expecting a calculated result back."*

---

**12. JSON (noun — JavaScript Object Notation)**
- **Simple meaning:** A simple text format for sending structured data between systems — uses curly braces `{}` for objects and square brackets `[]` for lists
- **Real-world analogy:** A standardized form. Everyone fills in the same fields, in the same order. The form can be read by anyone who knows the format.
- **Example sentence:**
  ```json
  {
    "loanDate": "2026-10-01",
    "dueDate": "2026-10-15",
    "feePerDay": 5,
    "memberEmail": "rohit.verma@learner.com"
  }
  ```

---

**13. Blob Storage (noun)**
- **Simple meaning:** Azure's service for storing unstructured files — images, videos, PDFs, CSVs — any file type, in massive quantities
- **Real-world analogy:** A warehouse for boxes. You don't care what's in the boxes (structured data) — you just need somewhere to store them. Blob storage is the warehouse.
- **Example sentence:** *"I uploaded all 50 book cover images to Azure Blob Storage. The canvas app loads each cover image directly from its Blob Storage URL, so book cover images are not stored inside Dataverse (which would make Dataverse expensive)."*

---

**14. Endpoint (noun)**
- **Simple meaning:** The URL (web address) of an API — where you "call" to use the API
- **Example sentence:** *"The Azure Function's endpoint is `https://library-functions.azurewebsites.net/api/CalculateLateFee`. Any system that knows this URL and has the right key can call the function."*

---

## CONCEPT: Why Build an Azure Function Instead of Doing It in Power Automate?

You might wonder: "Can't I calculate late fees directly in Power Automate? Why build an Azure Function?"

Yes, you CAN calculate in Power Automate. But let's compare:

| Scenario | Power Automate Only | Azure Function |
|---------|--------------------|-----------------|
| Basic calculation | ✅ Works fine | Overkill |
| Complex calculation (multiple rules, exceptions) | ⚠️ Gets messy | ✅ Clean code |
| Reusable by Power Apps AND Power Automate AND a website | ❌ Cannot (flow is only callable by Microsoft tools) | ✅ Any system can call it (HTTP) |
| If logic changes, update in one place | ❌ Must update every flow that has the formula | ✅ Update the function, all callers get new behavior automatically |
| Version history and testing | ❌ Limited | ✅ Full code repository, automated tests |

> 💭 **System Thinking Question #4:** We are building a calculation in three different places this course: Power Fx (in the app), Power Automate (in the flow), and Azure Functions. Is this good design?
>
> **No. This is the DRY principle violation.** DRY = Don't Repeat Yourself.
>
> The late fee calculation formula exists in:
> 1. The canvas app (Power Fx formula)
> 2. The overdue reminder flow (Power Automate expression)
> 3. Now the Azure Function
>
> If the library changes its policy from ₹5/day to ₹7/day, you must update 3 places. If you forget one, different parts of the system give different answers.
>
> **The solution:** ONE Azure Function holds the late fee calculation. The canvas app calls this function. Power Automate calls this function. Nothing calculates fees locally — they always ask the function. The policy lives in one place.
>
> This is called **centralized business logic** and it is one of the most important architectural principles in enterprise software.

---

## HANDS-ON EXERCISE 2: Create the Late Fee Calculation Azure Function

### Step 1: Create a Function App

1. Azure Portal → search "Function App" → **+ Create**
2. **Basics:**
   - Resource group: `rg-community-library`
   - Function App name: `library-functions-[yourname]` (globally unique)
   - Runtime stack: **Node.js** (or Python — choose whichever you are more curious about)
   - Version: latest
   - Region: `Central India`
3. **Hosting:**
   - Plan type: **Consumption (Serverless)** — you pay per execution, first 1 million free
4. Click **Review + Create** → **Create**

### Step 2: Create the Function

1. Go to your Function App → **Functions** → **+ Create**
2. Choose **HTTP trigger**
3. Name: `CalculateLateFee`
4. Authorization level: **Function** (requires a key to call — not public)
5. Click **Create**

### Step 3: Write the Code

Click **Code + Test** → replace the default code with:

**Node.js version:**
```javascript
module.exports = async function (context, req) {
    // Read input from the request body
    const { loanDate, dueDate, feePerDay = 5 } = req.body;
    
    // Validate input
    if (!loanDate || !dueDate) {
        context.res = {
            status: 400,
            body: { error: "Please provide loanDate and dueDate in the request body." }
        };
        return;
    }
    
    // Calculate days overdue
    const today = new Date();
    const dueDateObj = new Date(dueDate);
    const loanDateObj = new Date(loanDate);
    
    // If not overdue yet, fee is 0
    if (today <= dueDateObj) {
        context.res = {
            body: {
                daysOverdue: 0,
                lateFee: 0,
                status: "Not overdue",
                dueDate: dueDate
            }
        };
        return;
    }
    
    // Calculate overdue
    const msPerDay = 24 * 60 * 60 * 1000;
    const daysOverdue = Math.ceil((today - dueDateObj) / msPerDay);
    const lateFee = daysOverdue * feePerDay;
    
    context.res = {
        body: {
            daysOverdue: daysOverdue,
            lateFee: lateFee,
            feePerDay: feePerDay,
            status: "Overdue",
            message: `${daysOverdue} days × ₹${feePerDay} = ₹${lateFee}`,
            dueDate: dueDate,
            calculatedAt: new Date().toISOString()
        }
    };
};
```

### Step 4: Test the Function

In the Code + Test view, click **Test/Run**:

**Input body:**
```json
{
    "loanDate": "2026-10-01",
    "dueDate": "2026-10-15",
    "feePerDay": 5
}
```

**Expected output (if today is November 5, 2026):**
```json
{
    "daysOverdue": 21,
    "lateFee": 105,
    "feePerDay": 5,
    "status": "Overdue",
    "message": "21 days × ₹5 = ₹105",
    "dueDate": "2026-10-15",
    "calculatedAt": "2026-11-05T..."
}
```

### Step 5: Get the Function URL and Key

1. Click **Get Function Url** → copy the URL (it includes the function key)
2. Save this URL — you will use it in Power Automate next

### Step 6: Call the Function from Power Automate

1. Open `make.powerautomate.com`
2. Create a new flow: **Instant cloud flow** → **Manual trigger**
3. Add step → **HTTP** connector:
   - Method: POST
   - URI: the Azure Function URL you copied
   - Headers: `Content-Type` = `application/json`
   - Body:
     ```json
     {
         "loanDate": "2026-10-01",
         "dueDate": "2026-10-15",
         "feePerDay": 5
     }
     ```
4. Add step → **Parse JSON** (to read the response)
5. Add step → **Send email** → Body: `The calculated late fee is: ₹@{body('Parse_JSON')?['lateFee']}`

Run the flow — it calls Azure, gets the fee, and emails it to you.

> 💭 **What just happened:** A Microsoft cloud service (Power Automate) called a Microsoft function (Azure Functions) using a standard web API (HTTP POST) with standard data format (JSON). This exact pattern — Power Platform calling Azure Functions via HTTP — is used in thousands of enterprise systems today. You built it from scratch.

---

## HANDS-ON EXERCISE 3: Book Cover Images in Azure Blob Storage

### Step 1: Create a Storage Account

1. Azure Portal → **Storage accounts** → **+ Create**
2. Resource group: `rg-community-library`
3. Storage account name: `librarystorage[yourname]` (lowercase, globally unique)
4. Region: `Central India`
5. Performance: Standard, Redundancy: LRS (Locally Redundant Storage — cheapest, fine for practice)
6. Click **Review + Create** → **Create**

### Step 2: Create a Container

1. Go to your Storage Account → **Containers** → **+ Container**
2. Name: `book-covers`
3. Public access level: **Blob** (so the canvas app can display images without authentication)

> 💭 **Why do we make book covers public but NOT the database?**
>
> Book cover images are not sensitive data — anyone can see what a book looks like. Making them public means the canvas app can display them in a simple `<img>` tag without any authentication. This is faster and simpler.
>
> The database contains member emails, phone numbers, and loan histories — private data. This MUST be private. A hacker should not be able to type a URL and read all your members' personal information.
>
> **The principle:** Make things as open as they need to be, no more. Images: open. Data: private. Authentication keys: very private (never in code).

### Step 3: Upload Book Cover Images

For each book in your library (use Google Images or any book cover site):
1. Download the book cover image
2. In the `book-covers` container → **Upload** → select the image
3. Once uploaded, click the image → copy its **URL**
4. This URL looks like: `https://librarystorage[yourname].blob.core.windows.net/book-covers/atomic-habits.jpg`

### Step 4: Update the Canvas App

1. Open your Library Canvas App in Power Apps
2. In the Book Gallery, add an **Image** control
3. Set its **Image** property to:
   ```
   ThisItem.cr_cover_image_url
   ```
   (You add a new `cr_cover_image_url` column to the Dataverse Books table and store the Blob Storage URL there)

Now the canvas app shows real book cover images, stored in Azure Blob Storage.

---

## 🗣️ English Practice — Week 10: Procedural Writing (First, Then, After That, Finally)

### Why This Grammar Pattern?

APIs, functions, deployment instructions — all require procedural writing. When you write a setup guide or step-by-step instructions, the sequence must be absolutely clear.

**Sequential connectors:**

| Position | Words to use |
|----------|-------------|
| First step | "First,", "To begin,", "Start by [verb-ing]" |
| Middle steps | "Next,", "Then,", "After that,", "Once [step] is complete," |
| Before a condition | "If [condition],", "When [event]," |
| Final step | "Finally,", "The setup is complete when..." |

**Example — Azure Function deployment:**

*"To deploy the CalculateLateFee Azure Function, begin by creating a Function App in the Azure Portal. First, navigate to portal.azure.com and search for 'Function App'. Then, click '+ Create' and fill in the resource group, name, and runtime settings. After that, configure the hosting plan as 'Consumption (Serverless)'. Once the Function App is provisioned — which takes approximately 2 minutes — navigate to Functions and click '+ Create'. Finally, select 'HTTP trigger', name the function 'CalculateLateFee', and paste the Node.js code. The setup is complete when the function URL appears and a test run returns a valid JSON response."*

---

### Grammar Practice

Write the steps for ONE of these processes (5–8 steps), using at least 5 connectors:
- Option A: Upload a book cover image to Azure Blob Storage
- Option B: Test the CalculateLateFee function in the Azure Portal
- Option C: Call the Azure Function from Power Automate

---

### Vocabulary in Sentences (describing HOW it works, not just what it is)

| Word | Write your "how it works" sentence |
|------|-----------------------------------|
| Serverless | |
| API | |
| JSON | |
| Blob Storage | |
| Endpoint | |

**Example:** Word: HTTP → *"When Power Automate calls the Azure Function, it first sends an HTTP POST request containing the JSON body with loanDate and dueDate, then the Function processes the calculation, and finally returns an HTTP 200 response with the lateFee in the response body."*

---

### Writing Exercise: API Documentation

Every API needs documentation so other developers know how to use it.

**Template:**
```
# API Reference: CalculateLateFee

## Endpoint
POST https://[your-function-app].azurewebsites.net/api/CalculateLateFee

## Description
[2 sentences: what the function does and who should use it]

## Request Body (Content-Type: application/json)
{
  "loanDate": "[YYYY-MM-DD] The date the book was borrowed",
  "dueDate": "[YYYY-MM-DD] The date the book is due back",
  "feePerDay": "[number, optional] Fee in INR per day. Default: 5"
}

## Response (HTTP 200)
{
  "daysOverdue": "[number] Days past due date. 0 if not overdue.",
  "lateFee": "[number] Total fee in INR.",
  "status": "[string] 'Overdue' or 'Not overdue'",
  "message": "[string] Human-readable explanation"
}

## Example Request
[Write the JSON for a loan due October 15, calculated on November 10]

## Example Response
[Write what the function returns for the above]
```

---

### 🔊 Read Aloud Exercise

Read this out loud as if explaining to a colleague unfamiliar with APIs:

*"An API is a defined way for two software systems to communicate. Think of it as a restaurant menu: the menu tells you what you can order and what you will receive. You do not go into the kitchen and cook it yourself. In our case, the CalculateLateFee function is the kitchen. Power Automate is the waiter. Power Automate sends an order — the loan date and due date — using an HTTP POST request. The function calculates the late fee and sends back a response — the calculated amount — in JSON format. The two systems never need to know how each other works internally — only how to communicate through the defined interface."*

After reading: Explain what JSON is, out loud, using your own analogy.

---

### Professional Communication: Setup Guide for a New Team Member

**Key principles:**
1. Assume the reader has never done this before
2. State prerequisites FIRST
3. After each step, say what the reader SHOULD SEE if it worked
4. Include one troubleshooting tip

**Template:**
```
# Setup Guide: CalculateLateFee Azure Function

## Who This Is For
[Role and assumed technical level]

## Prerequisites
- [ ] [Requirement 1]
- [ ] [Requirement 2]

## Steps

### Step 1: [Name]
[Instructions]
✅ Complete when: [what they should see]

### Step 2: [Name]
[Instructions]
✅ Complete when: [what they should see]

## Troubleshooting
Problem: [Common error]
Solution: [How to fix it]
```

---

### 🚫 Common English Mistakes — Week 10

**Mistake 1: Starting every step with "Then"**
❌ "Then open. Then click. Then fill. Then save." ✅ Vary: First → Next → After that → Finally.

**Mistake 2: Steps that skip sub-steps**
❌ "Step 3: Configure the firewall." ✅ Break it into labeled sub-steps a, b, c, d with a ✅ success check.

**Mistake 3: Passive without clear instruction**
❌ "The function key should be copied." ✅ "**Copy** the function key by clicking **Get Function Url**."
Rule: In instructions, use imperative verbs: Copy, Click, Navigate, Enter, Select, Save.

---

### ✅ Week 10 English Progress Check

- [ ] Did you write API documentation for the CalculateLateFee function?
- [ ] Did you write a setup guide using First/Then/Finally connectors?
- [ ] Can you explain what an API is using the restaurant menu analogy?
- [ ] Are you using imperative verbs (Copy, Click, Navigate) in instructions?
- [ ] Did you write at least 3 journal entries this week?

---

---

# WEEK 11: November 15–21
## GitHub — Where Code Lives, Grows, and Is Kept Safe

---

## Vocabulary for Week 11

---

**15. Repository (noun) — often called "repo"**
- **Simple meaning:** A storage place for code (and all its history) — every version of every file, from the very first line to today
- **Real-world analogy:** A very detailed diary that stores every version of your writing — not just the latest version, but every sentence you ever wrote, every word you crossed out, and who made each change.
- **Example sentence:** *"I created a GitHub repository called 'community-library' for our project. It stores our Power Platform solution files, our Azure Function code, and all documentation."*

---

**16. Commit (noun/verb)**
- **Simple meaning:** A saved snapshot of your changes — like pressing "Save" but also adding a note explaining what you changed and why
- **Real-world analogy:** A dated entry in a project logbook: "November 15: Updated the late fee formula from ₹5/day to ₹7/day because the library committee approved the increase."
- **Example sentence:** *"I made a commit with the message: 'Fix: recalculate available copies from live loans instead of stored field — prevents race condition.' Now anyone reading the commit history understands why this change was made."*

---

**17. Branch (noun)**
- **Simple meaning:** A separate copy of the repository where you make changes safely — without affecting the main/working version
- **Real-world analogy:** Making a photocopy of an important document before editing it. You mark up the photocopy. If the changes are good, you update the original. If the changes are bad, you throw the photocopy away.
- **Example sentence:** *"I created a branch called 'feature/waitlist-system' to build the book waitlist feature. The main branch still has the working app. I experiment in my branch. When the feature is done and tested, I merge my branch into main."*

---

**18. Pull Request (noun) — often called "PR"**
- **Simple meaning:** A formal request to merge your branch into the main branch — it shows your changes, allows others to review them, and triggers automated checks
- **Real-world analogy:** Submitting a report for manager approval before publishing. You write the report (changes in your branch). You submit it for review (pull request). Your manager reads it, asks questions, suggests edits. When approved, it gets published (merged).
- **Example sentence:** *"I created a pull request to add the waitlist feature. Pooja reviewed the code, asked why I used a FIFO queue instead of a priority system, and approved it after I explained. The merge only happened after approval."*

---

**19. Merge (verb)**
- **Simple meaning:** Combining changes from one branch into another — usually from a feature branch into the main branch
- **Example sentence:** *"After Pooja approved the pull request, I merged the waitlist-system branch into main. Now the waitlist feature is part of the official app."*

---

**20. .gitignore (noun)**
- **Simple meaning:** A file that tells Git which files to NOT save in the repository — secrets, large files, auto-generated files that do not need to be tracked
- **Critical rule:** **NEVER commit API keys, passwords, connection strings, or .env files to GitHub.** If you do, even after deleting them, they exist in the history and can be found by hackers using automated tools.
- **Example sentence:** *"My .gitignore file contains: `*.env`, `local.settings.json`, `connection_strings.txt`. These files contain database passwords and API keys — they exist on my computer but are never uploaded to GitHub."*

---

**21. README.md (noun)**
- **Simple meaning:** A text file (written in Markdown — a simple formatting language) that explains what the repository is, how to set it up, and how to use it
- **Example sentence:** *"The repository README explains: what the Community Library system is, which tools are needed to run it (Power Platform Developer Plan, Azure free account), step-by-step setup instructions, and how to run the Azure Functions locally for testing."*

---

## CONCEPT: Why Version Control Exists — The Story Without It

Imagine you are building the library app with a team of 3 people:
- Sanjay is adding the waitlist feature
- Neha is fixing a bug in the date calculation
- You are updating the book cover image URLs

Without version control, you all work on the same files:

```
Day 1: All three start with a copy of the app
Day 3: Sanjay saves his waitlist changes
Day 3: Neha saves her bug fix (accidentally overwrites Sanjay's work)
Day 4: You save your URL updates (accidentally overwrites both)
Day 4: Sanjay's work is GONE. Neha's fix is GONE.
Panic.
```

With version control (Git):

```
Day 1: All three create their own BRANCH from main
Day 3: Sanjay commits his changes to branch 'feature/waitlist'
Day 3: Neha commits her fix to branch 'bugfix/date-calc'
Day 4: You commit your changes to branch 'update/cover-images'
Day 4: All three create pull requests
Day 4: If there are conflicting changes, Git shows exactly where and asks for a decision
Day 5: All three branches are merged cleanly. Everyone's work is preserved.
```

Version control is not just a backup tool — it is the entire infrastructure of team collaboration in software development.

---

## HANDS-ON EXERCISE 4: Create the Community Library GitHub Repository

### Step 1: Create the Repository

1. Go to `github.com` → sign in with your GitHub account
2. Click **+** (top right) → **New repository**
3. Repository name: `community-library`
4. Description: `Complete Community Library Management System — Power Platform, Azure, and GitHub Actions`
5. Visibility: **Private** (we have data model files that should not be public)
6. Add a README file: ✅
7. Add .gitignore: choose **Node** (since our Azure Function is Node.js)
8. License: MIT
9. Click **Create repository**

### Step 2: Understand the Repository Structure

You see:
- `README.md` — the project description
- `.gitignore` — the list of excluded files
- `.git/` (hidden) — the version control database

Now let us set up a proper folder structure:

Click **Create new file** for each:

```
community-library/
├── README.md
├── .gitignore
├── docs/
│   ├── architecture.md       ← System design documentation
│   ├── setup-guide.md        ← How to set up from scratch
│   └── api-reference.md      ← Azure Function API documentation
├── power-platform/
│   ├── solution/             ← Power Platform solution .zip files go here
│   └── sample-data/          ← The CSV files from our course
├── azure-functions/
│   └── library-functions/    ← The Azure Function Node.js code
├── sql/
│   ├── schema.sql            ← All CREATE TABLE statements
│   └── seed-data.sql         ← Sample data INSERT statements
└── .github/
    └── workflows/            ← GitHub Actions (CI/CD) — Week 12
```

### Step 3: Upload the Azure Function Code

1. On your computer, create a folder: `azure-functions/library-functions/`
2. Create `CalculateLateFee/index.js` with the function code from Week 10
3. Create `local.settings.json`:
   ```json
   {
     "IsEncrypted": false,
     "Values": {
       "AzureWebJobsStorage": "",
       "FUNCTIONS_WORKER_RUNTIME": "node"
     }
   }
   ```
4. Add `local.settings.json` to `.gitignore` (it may contain secrets later)

**Upload to GitHub:**
In the GitHub repository, navigate to `azure-functions/library-functions/` and click **Upload files** → drag your files.

### Step 4: Write the README

Click on `README.md` → **Edit** (pencil icon). Write:

```markdown
# Community Library Management System

A complete library management system built as a learning project using:
- **Microsoft Power Platform** (Canvas App, Power Automate, Dataverse, Copilot Studio)
- **Azure** (Azure Functions, Azure SQL Database, Blob Storage)
- **GitHub Actions** for automated deployment

## What This System Does
- Members can search books and borrow them via a mobile-friendly canvas app
- Overdue loans trigger automatic email reminders
- New member registrations go through an approval workflow
- A chatbot answers library questions 24/7
- A Power BI dashboard shows library operations in real time

## How to Set Up

### Prerequisites
- Power Apps Developer Plan (free) — [sign up here](https://powerapps.microsoft.com/developerplan)
- Azure free account — [sign up here](https://azure.microsoft.com/free)
- GitHub account (free)

### Step 1: Import the Power Platform Solution
1. Download the solution .zip from `power-platform/solution/`
2. In `make.powerapps.com`, go to Solutions → Import Solution
3. Upload the .zip and follow the prompts

### Step 2: Set Up Azure SQL
Run the scripts in `sql/schema.sql` then `sql/seed-data.sql` in the Azure Portal Query Editor.

### Step 3: Deploy Azure Functions
[Instructions in `docs/setup-guide.md`]
```

### Step 5: Create Your First Branch and Pull Request

Let us practice the Git workflow:

1. Create a new branch: click the branch dropdown → type `feature/add-architecture-docs` → press Enter
2. You are now in the new branch
3. Click on `docs/architecture.md` → create it with content describing the system architecture (3–5 sentences)
4. Commit the change with message: `docs: add initial architecture documentation`
5. Click **Compare & pull request** (the banner that appears)
6. Title: `Add architecture documentation`
7. Description: `Adds the initial architecture overview document explaining how the 4 system components connect.`
8. Click **Create pull request**
9. Review your own changes → click **Merge pull request** → **Confirm merge**

> 💭 **System Thinking Question #5:** Why do teams require pull requests even for small changes? Why not just push directly to main?
>
> **The protection of the main branch:**
>
> In professional teams, the `main` branch is always deployable. It always works. Nobody pushes directly to `main`.
>
> The pull request process enforces:
> 1. A second person reviews the change (code review)
> 2. Automated tests must pass (we add this in Week 12)
> 3. The branch is up to date with main (no conflicts)
> 4. Approvals are recorded (for compliance and audit)
>
> Even if you work alone, PRs are valuable because they force you to look at your own changes one more time before they go to production.

### Step 6: Upload the Power Platform Solution

1. In Power Apps → Solutions → select your Community Library solution
2. **Export** → Unmanaged → download the ZIP
3. On GitHub, navigate to `power-platform/solution/`
4. Upload the ZIP file
5. Commit message: `chore: upload Power Platform solution v1.0`

Now your entire Power Platform project is backed up in GitHub with full version history.

---

## 🗣️ English Practice — Week 11: Asking Good Technical Questions

### Why This Grammar Pattern?

In the world of GitHub and team collaboration, **asking questions well** is as important as having answers. Good questions get better answers faster.

**Question types in technical English:**

| Type | Structure | Example |
|------|-----------|---------|
| Yes/No | Does/Is/Can/Will + subject + verb? | "Does this function handle a null DueDate?" |
| Wh-question | What/Why/How/When/Who + auxiliary + subject + verb? | "Why did we choose FIFO for the waitlist?" |
| Clarification | Could you explain...? / What do you mean by...? | "Could you explain what 'delegation limit' means?" |
| Suggestion | Would it be better to...? / Have you considered...? | "Would it be better to store the key in Azure Key Vault?" |

**The most common Indian English question mistake:**
❌ "How I can add a branch?" / "What is means of this error?"
✅ "How **can I** add a branch?" / "What **does** this error **mean**?"

Rule: The helping verb (can, does, should, will, is) comes BEFORE the subject in questions.

---

### Grammar Practice — Fix the Question Formation

1. ❌ "How I can create a pull request in GitHub?" → ✅ "______________________________?"
2. ❌ "What is means of this error message?" → ✅ "______________________________?"
3. ❌ "Why we need to add files to .gitignore?" → ✅ "______________________________?"
4. ❌ "When the pipeline will run automatically?" → ✅ "______________________________?"
5. "Who is responsible for approving the pull request?" — Is this CORRECT or INCORRECT? Explain why.

---

### Vocabulary in Sentences (as questions)

For each word, write one well-formed technical question:

| Word | Write a correct question |
|------|--------------------------|
| Repository | "What is the difference between ______ and a ZIP file of the same code?" |
| Branch | "Why do we create a branch instead of ______ directly?" |
| Pull Request | "Who should review a pull request when ______?" |
| .gitignore | "What happens if I accidentally commit a file that should be in ______?" |
| README.md | "What information should ______ contain for someone new to this project?" |

---

### Writing Exercise: 8 System Thinking Questions About GitHub

Think like a curious, non-technical library manager hearing about GitHub for the first time. Write 8 questions they would ask — then answer each in 1–2 sentences.

```
Q1: [Question]
A1: [Answer in 1-2 sentences]

Q2: [Question]
A2: [Answer]

[Continue to Q8...]
```

---

### 🔊 Read Aloud Exercise

Read this code review comment out loud — notice the tone is questioning and constructive, not critical:

*"I have a question about this section. On line 23, we use LookUp(Members, cr_email = User().Email) to find the member record. This makes sense if the member's Microsoft account email always matches their library registration email. But what happens if a member registered with their personal email but signs in with their work email? Would the LookUp return blank? If so, the Borrow button would show 'Member not found' even though Rohit is a valid member. Could we discuss whether we need to add an alternate email field to the Members table, or another way to handle this?"*

After reading: Notice this raises a concern WITHOUT saying "this is wrong." It asks a question, explains the risk, and suggests solutions. Write a similar comment about any part of the system you built.

---

### Professional Communication: The Pull Request Description

**Template:**
```
## What this PR does
[2-3 sentences: what you changed and why]

## Changes made
- [File/component 1]: [What you changed]
- [File/component 2]: [What you changed]

## Why this approach
[1-2 sentences: the technical decision and alternatives considered]

## Testing done
- [ ] [Test 1 and result]
- [ ] [Test 2 and result]

## Notes for reviewer
[Anything to pay special attention to, or questions you have]
```

Write a real PR description for the branch you created this week.

---

### 🚫 Common English Mistakes — Week 11

**Mistake 1: "Could you please revert back on my PR"**
❌ "Please revert back on my pull request comments."
✅ "Please **respond to** my pull request comments." / "Please **review** my pull request."

**Mistake 2: Accusatory code review**
❌ "This code is wrong. You should have used a different approach."
✅ "I noticed this uses [approach X]. Have you considered [approach Y]? It might handle [edge case] better — what do you think?"

**Mistake 3: "Suggest to"**
❌ "I suggest to use a branch." ✅ "I suggest **using** a branch." / "I suggest **that** you use a branch."

**Mistake 4: Over-polite hedging that obscures the point**
❌ "I humbly request that you might perhaps consider potentially looking at the .gitignore."
✅ "Please update the .gitignore to exclude local.settings.json — it contains environment-specific settings."

---

### ✅ Week 11 English Progress Check

- [ ] Can you form 5 correct "How can I...?", "Why do we...?", "What happens when...?" questions?
- [ ] Did you write a pull request description this week?
- [ ] Can you give code review feedback in a questioning, non-accusatory way?
- [ ] Did you write the 8 system thinking questions about GitHub?
- [ ] Are you using "suggest using" instead of "suggest to"?

---

---

# WEEK 12: November 22–30
## GitHub Actions (CI/CD) + Azure DevOps — Automation of Everything

---

## Vocabulary for Week 12

---

**22. CI/CD (noun — Continuous Integration / Continuous Delivery)**
- **Simple meaning:** An automated system that takes your code from "developer committed it" to "it is live and running" — testing it, building it, and deploying it automatically
- **Real-world analogy:** A car factory assembly line. When a new part arrives (commit), the conveyor belt (CI/CD pipeline) automatically takes it through: quality check (tests) → assembly (build) → inspection (more tests) → shipping (deploy). Humans set up the line; the line runs automatically.
- **Example sentence:** *"Our CI/CD pipeline runs every time we merge a pull request to main. It automatically deploys the Azure Function to production. We never manually copy files to the server — the pipeline does it."*

---

**23. Pipeline (noun)**
- **Simple meaning:** A series of automated steps that run in sequence — each step takes input from the previous step
- **Example sentence:** *"The pipeline steps: 1) Check out code from GitHub. 2) Install Node.js dependencies. 3) Run tests. 4) If tests pass, deploy to Azure. 5) Send a Teams notification: 'Deployment successful.'"*

---

**24. YAML (noun — Yet Another Markup Language)**
- **Simple meaning:** A human-readable text format for writing configuration — GitHub Actions pipelines are written in YAML
- **Real-world analogy:** A recipe card format. Indentation shows structure. Easy for humans to read and write, but the computer also understands it precisely.
- **Example sentence:**
  ```yaml
  name: Deploy Azure Function
  on:
    push:
      branches: [main]
  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - name: Deploy to Azure
          run: echo "deploying..."
  ```

---

**25. Secret (noun, in GitHub)**
- **Simple meaning:** An encrypted value stored in GitHub that your pipelines can use — but nobody can read (not even you, after setting it)
- **Critical use:** API keys, Azure credentials, database passwords — never write these in your YAML files. Use Secrets instead.
- **Example sentence:** *"I stored the Azure Function key as a GitHub Secret named `AZURE_FUNCTION_KEY`. The pipeline YAML references it as `${{ secrets.AZURE_FUNCTION_KEY }}` — it appears in the pipeline but is never visible in logs or code."*

---

**26. Environment (noun, in deployment/GitHub)**
- **Simple meaning:** A specific target for deploying code — Development, Staging (UAT), Production — each with its own credentials and protection rules
- **Example sentence:** *"The pipeline has 3 environments: Dev (auto-deploys on every commit), UAT (auto-deploys on merge to main, requires manual approval from Pooja), Production (deploys only when UAT is confirmed successful)."*

---

**27. Azure DevOps (noun)**
- **Simple meaning:** Microsoft's platform for planning, tracking, and deploying software projects — includes a task board (Boards), a code repository (Repos), and a pipeline system (Pipelines)
- **Example sentence:** *"We use Azure DevOps Boards to track work: each new feature or bug fix is a 'work item' on the board. Each sprint is 2 weeks. At the start of the sprint, we move work items from 'Backlog' to 'Active.' At the end, everything in 'Done' is deployed."*

---

## CONCEPT: GitHub Actions vs Azure DevOps — Which One to Use?

| | GitHub Actions | Azure DevOps Pipelines |
|--|---------------|----------------------|
| Where code lives | GitHub | Azure DevOps Repos or GitHub |
| Pricing | Free for public repos; 2,000 min/month for private | 1,800 min/month free (5 users) |
| Best for | Open source, modern cloud apps, GitHub-centric teams | Enterprise Microsoft environments, existing Azure DevOps users |
| Integration with Azure | ✅ Good (official Microsoft actions) | ✅ Excellent (native) |
| Integration with Power Platform | ✅ Via Microsoft Power Platform Actions | ✅ Via Azure DevOps Power Platform tasks |
| Learning curve | Lower | Higher |

**For our learning project:** GitHub Actions — simpler to start with, and more industry-standard for modern cloud development.

**For a large enterprise already on Azure DevOps:** Azure DevOps Pipelines — better integration with existing governance and approval workflows.

> 💭 **System Thinking Question #6:** Why would a company choose to have CI/CD at all? What was happening before it existed?
>
> **Before CI/CD (the old world):**
> A developer finishes a feature. On a Friday afternoon, someone manually copies files to a server. Something breaks. They spend the weekend fixing it. This is called a "big bang" deployment — everything at once, high risk.
>
> **With CI/CD (the new world):**
> Every small change is deployed automatically and immediately (or on schedule). If something breaks, the pipeline catches it in tests BEFORE it reaches production. Deployments happen dozens of times per day with no drama. This is the industry standard.
>
> **Why it matters for you:** Companies now require CI/CD knowledge from anyone who works with cloud systems. Understanding CI/CD — even at a basic level — is the difference between a "button clicker" and an "infrastructure person" in a job interview.

---

## HANDS-ON EXERCISE 5: Create the GitHub Actions Pipeline for Azure Functions

### Step 1: Set Up Azure Credentials as GitHub Secrets

First, we need to give GitHub permission to deploy to Azure.

1. In Azure Portal → Azure Cloud Shell (the `>_` icon at top) → run:
   ```bash
   az ad sp create-for-rbac --name "github-library-deploy" --role contributor --scopes /subscriptions/[your-subscription-id]/resourceGroups/rg-community-library --sdk-auth
   ```
2. Copy the entire JSON output — this is your Azure service principal credentials

3. In GitHub repository → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**:
   - Name: `AZURE_CREDENTIALS`
   - Value: paste the JSON

> **What is a Service Principal?**
> A service principal is like a "robot user" in Azure — it has its own identity and permissions, but it is not a human. GitHub Actions uses this identity to deploy to Azure. The service principal only has permission to the `rg-community-library` resource group — it cannot touch anything else in your subscription.

### Step 2: Create the GitHub Actions Workflow

In your repository → create file `.github/workflows/deploy-functions.yml`:

```yaml
name: Deploy Azure Functions

# This pipeline runs when code is pushed to the main branch
on:
  push:
    branches:
      - main
    paths:
      - 'azure-functions/**'  # Only run if Azure Function files changed

jobs:
  deploy:
    runs-on: ubuntu-latest  # Use a Linux computer from GitHub's pool
    
    steps:
      # Step 1: Download the code from the repository
      - name: Checkout code
        uses: actions/checkout@v4
      
      # Step 2: Set up Node.js
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      # Step 3: Install dependencies
      - name: Install dependencies
        run: npm install
        working-directory: azure-functions/library-functions
      
      # Step 4: Run tests (we will add tests later)
      - name: Run tests
        run: npm test --if-present
        working-directory: azure-functions/library-functions
      
      # Step 5: Log in to Azure using the secret we stored
      - name: Login to Azure
        uses: azure/login@v2
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}
      
      # Step 6: Deploy the function to Azure
      - name: Deploy Azure Functions
        uses: azure/functions-action@v1
        with:
          app-name: 'library-functions-[yourname]'
          package: 'azure-functions/library-functions'
      
      # Step 7: Logout (security best practice)
      - name: Logout from Azure
        run: az logout
```

### Step 3: Trigger the Pipeline

1. Make a small change to your Azure Function code (add a comment)
2. Commit it to the `main` branch (or merge a PR to main)
3. Go to the **Actions** tab in your GitHub repository
4. Watch the pipeline run in real time — each step shows a green ✅ or red ❌
5. After it finishes, test the Azure Function URL — your new code is live

> 💭 **What you just did:**
> You committed code on your computer. GitHub automatically:
> 1. Detected the change
> 2. Started a virtual machine (ubuntu-latest)
> 3. Downloaded your code
> 4. Installed dependencies
> 5. Ran tests
> 6. Logged into Azure
> 7. Deployed the code
> 8. Logged out
>
> You did not touch the Azure Portal. You did not manually copy files. You changed code → it deployed itself.
>
> This is modern software delivery. This is what "DevOps" means.

---

## HANDS-ON EXERCISE 6: GitHub Actions for Power Platform

Microsoft provides official GitHub Actions for Power Platform. This allows you to export your solution from Power Platform and commit it to GitHub — automatically.

### Step 1: Set Up Power Platform Credentials

1. In Azure → Entra ID → **App registrations** → **+ New registration**
2. Name: `github-powerplatform-deploy`
3. After creation, note the **Application (client) ID** and **Directory (tenant) ID**
4. Go to **Certificates & secrets** → **Client secrets** → **+ New client secret** → copy the value

5. In your Power Platform environment, add this app registration as an Application User with System Administrator role

6. In GitHub Secrets, add:
   - `PP_APP_ID` — the Application (client) ID
   - `PP_TENANT_ID` — the tenant ID
   - `PP_CLIENT_SECRET` — the secret value
   - `PP_ENVIRONMENT_URL` — your Developer Plan environment URL

### Step 2: Create the Power Platform Export Workflow

Create `.github/workflows/export-solution.yml`:

```yaml
name: Export Power Platform Solution

# Run manually (you click a button in GitHub to trigger this)
on:
  workflow_dispatch:

jobs:
  export:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Install Power Platform Tools
        uses: microsoft/powerplatform-actions/actions-install@v1
      
      - name: Export solution from Power Platform
        uses: microsoft/powerplatform-actions/export-solution@v1
        with:
          environment-url: ${{ secrets.PP_ENVIRONMENT_URL }}
          app-id: ${{ secrets.PP_APP_ID }}
          client-secret: ${{ secrets.PP_CLIENT_SECRET }}
          tenant-id: ${{ secrets.PP_TENANT_ID }}
          solution-name: CommunityLibrary
          solution-output-file: power-platform/solution/CommunityLibrary.zip
      
      - name: Commit exported solution to GitHub
        run: |
          git config --global user.name "GitHub Actions Bot"
          git config --global user.email "actions@github.com"
          git add power-platform/solution/
          git commit -m "chore: auto-export Power Platform solution $(date +'%Y-%m-%d %H:%M')"
          git push
```

Now you can click **Run workflow** in GitHub Actions and your Power Platform solution is automatically exported to GitHub. Every change you make in Power Apps is backed up to GitHub on demand.

---

## HANDS-ON EXERCISE 7: Azure DevOps — Sprint Board

Even if you use GitHub Actions for deployments, Azure DevOps Boards is excellent for project management.

1. Go to `dev.azure.com` → create a new organization → create project: `Community Library`
2. Choose **Scrum** template
3. Go to **Boards** → **Backlog**
4. Create Epic: `Library Management System`
5. Under the Epic, create Features:
   - `Member App (Canvas)`
   - `Admin App (Model-Driven)`
   - `Automation (Flows)`
   - `Reporting (Power BI)`
   - `AI Chatbot (Copilot Studio)`
   - `Azure Backend (Functions + SQL)`
6. Under each Feature, create User Stories (work items):
   - "As a library member, I want to search books by title so I can find books quickly"
   - "As a librarian, I want to see overdue loans sorted by days overdue so I can prioritize follow-ups"
7. Set Sprint 1 = October, Sprint 2 = November, etc.
8. Assign work items to the appropriate sprint

> 💭 **System Thinking Question #7:** Why do we write requirements as "As a [user], I want to [action] so that [benefit]"?
>
> This format — called a **User Story** — forces you to think from the user's perspective, not the developer's perspective.
>
> A developer might write: "Build a filter function for the book gallery."
> A user story writes: "As a library member, I want to filter books by genre so I can find books I enjoy without scrolling through the whole catalog."
>
> The second version tells you:
> - **Who** is affected (library member, not librarian)
> - **What** they need (filter by genre)
> - **Why** they need it (efficiency, enjoyment)
>
> The "why" is crucial. Without it, developers build technically correct features that nobody uses.

---

## 🗣️ English Practice — Week 12: Explaining Decisions

### Why This Grammar Pattern?

This week you made architectural decisions: GitHub Actions vs Azure DevOps, pipeline structure, what goes in Secrets. Every professional must be able to EXPLAIN their decisions — not just make them.

**The 6-step decision explanation structure:**

1. State the decision: *"We chose X."*
2. Give the main reason: *"This is because Y."*
3. Acknowledge the alternative: *"An alternative was Z."*
4. Explain why you rejected it: *"However, Z has the limitation that..."*
5. Acknowledge your choice's downside: *"The trade-off is that X requires..."*
6. State confidence: *"Overall, X is the better fit because..."*

**Example:**

*"We chose GitHub Actions over Azure DevOps Pipelines for our CI/CD system. This is because GitHub Actions is directly integrated into our GitHub repository, reducing the number of tools required. An alternative was Azure DevOps Pipelines, which is Microsoft's native pipeline tool with deeper Azure Portal integration. However, Azure DevOps requires a separate account and setup, adding complexity unnecessary for a project of this size. The trade-off with GitHub Actions is that for large enterprise deployments, Azure DevOps offers more granular approval controls. Overall, GitHub Actions is the better fit because we are a small team already using GitHub and want simplicity over governance complexity."*

---

### Grammar Practice

Write a decision explanation (all 6 steps) for ONE of these:
- **Option A:** Why we stored Azure credentials in GitHub Secrets instead of hardcoding them in YAML
- **Option B:** Why we used Consumption (Serverless) for the Azure Function instead of App Service
- **Option C:** Why the Power Platform export is triggered manually instead of automatically

---

### Vocabulary in Sentences (decision language)

| Word | Write a sentence with a decision or trade-off |
|------|----------------------------------------------|
| CI/CD | "We chose to implement CI/CD because ______, which means ______." |
| Pipeline | "The pipeline runs automatically when ______, instead of ______ because ______." |
| YAML | "We write the pipeline in YAML rather than ______ because ______." |
| Secret (GitHub) | "We store credentials as a GitHub Secret because ______, which prevents ______." |
| Environment | "We separated Dev and Production environments because ______, ensuring ______." |

---

### Writing Exercise: Architecture Decision Record (ADR)

An ADR is a document that records important technical decisions and their rationale. Professional teams write these so future teammates understand WHY the system was built this way.

**Template:**
```
# ADR-001: [Short title]

Date: [Date] | Status: Accepted | Author: [Your name]

## Context
[2-3 sentences: what situation required this decision?]

## Decision
We will [exactly what you decided].

## Rationale
We chose this because [main reason]. Compared to [other option], this [advantage].
While [other option] would have [its benefit], it also [its limitation], which is
not acceptable because [why].

## Consequences

Positive:
- [Benefit 1]
- [Benefit 2]

Negative (trade-offs):
- [Limitation 1]

## Alternatives Considered
Alternative A: [Name] — [Why not chosen, 1-2 sentences]

## Review
This decision will be revisited if [condition that would change it].
```

---

### 🔊 Read Aloud Exercise

Read this deployment announcement out loud as if sending a voice message:

*"Hi team — quick update: our CI/CD pipeline is now live. Starting today, whenever a change is merged into the main branch of our GitHub repository, the Azure Function will automatically deploy to production within approximately 3 minutes. You do not need to do anything manually. If a deployment fails — for example, if there is a test failure or authentication problem — GitHub will send an email notification, and the previous version of the function will remain live. You can monitor all pipeline runs in the GitHub Actions tab of our repository. Let me know if you have any questions."*

After reading: Summarise this in 2 sentences for someone who missed it.

---

### Professional Communication: The Deployment Announcement

**Template:**
```
Subject: [System Name] — [What Was Deployed] — [Date]

Hi team,

[Component] has been successfully deployed to [environment].

WHAT WAS DEPLOYED:
- [Change 1]
- [Change 2]

WHEN: [Time and date]

HOW TO TEST: [2-3 steps to verify it works]

IF SOMETHING LOOKS WRONG: Contact [name] on Teams.

The previous version can be restored in [estimated time] if needed.

[Your name]
```

Write a real deployment announcement for the GitHub Actions pipeline you set up this week.

---

### 🚫 Common English Mistakes — Week 12

**Mistake 1: "As discussed" without referencing where**
❌ "As discussed, I have deployed the pipeline."
✅ "As **we discussed in the November 22 Teams call**, I have deployed the pipeline."

**Mistake 2: Weak conclusions**
❌ "So GitHub Actions is good and we should use it."
✅ "Overall, GitHub Actions is the right choice because it integrates with our repository, reduces tooling complexity, and provides the 2,000 free minutes per month we need."

**Mistake 3: "Basically" overuse**
❌ "Basically, CI/CD basically means deployment basically happens automatically."
✅ "CI/CD means deployments happen **automatically** whenever code is merged — without manual intervention."

**Mistake 4: Inconsistent capitalization**
GitHub ✅ | Azure ✅ | YAML ✅ | pipeline (lowercase) | CI/CD (uppercase with slash)

---

### ✅ Week 12 English Progress Check

- [ ] Did you write a full Architecture Decision Record for one decision?
- [ ] Did you write a deployment announcement for the GitHub Actions pipeline?
- [ ] Can you explain why you chose GitHub Actions using all 6 steps of the decision structure?
- [ ] Read your Week 9 journal — notice the precision improvement over 4 weeks.
- [ ] Write one sentence summarising November: "In November, I built ______, connected ______, and learned that ______."

---

## November Recap

By November 30, you have:

1. ✅ An **Azure Resource Group** with all services organized
2. ✅ An **Azure SQL Database** with the full library schema
3. ✅ An **Azure Function** (API) for late fee calculation
4. ✅ **Azure Blob Storage** for book cover images
5. ✅ A **GitHub repository** with proper folder structure and README
6. ✅ **GitHub Actions pipelines** — auto-deploy Azure Functions on push to main
7. ✅ **Power Platform export** automated via GitHub Actions
8. ✅ An **Azure DevOps sprint board** tracking all project work

---

## November Vocabulary Master List

| Word | Your definition |
|------|----------------|
| Azure Portal | |
| Subscription | |
| Resource Group | |
| Region | |
| SQL | |
| Connection String | |
| Schema | |
| Query | |
| Serverless | |
| API | |
| HTTP | |
| JSON | |
| Blob Storage | |
| Endpoint | |
| Repository | |
| Commit | |
| Branch | |
| Pull Request | |
| Merge | |
| .gitignore | |
| README.md | |
| CI/CD | |
| Pipeline | |
| YAML | |
| Secret (GitHub) | |
| Environment (deployment) | |
| Azure DevOps | |

---

## Looking Ahead: December

December is the month where everything connects. You now have:
- A Power Platform system (apps, flows, Dataverse)
- An Azure backend (SQL, Functions, Storage)
- A GitHub repository with CI/CD pipelines

What is missing? **Intelligence.** The system stores and processes data. But it does not THINK.

In December, we add AI:
- **AI Builder** in Power Apps — reads documents, recognizes patterns
- **Copilot Studio advanced** — a chatbot that does more than answer questions
- **Azure AI Services** — language understanding, sentiment analysis
- **AI in GitHub Actions** — using AI to improve code quality
- **The final capstone** — every piece connected, documented, deployable

**English goal for December:** Write your first technical document in English — a 1-page system design document. This is the kind of document senior engineers write before starting a project. By December 31, you will write one explaining the Community Library system: what it does, why each component exists, and what trade-offs were made.

---

*Phase 3 complete. Open `04-phase-december.md` when ready.*

*November 1 – November 30, 2026*
*Prerequisite for December: GitHub repository set up, Azure functions deployed via pipeline, Dataverse + SQL both populated with data.*
