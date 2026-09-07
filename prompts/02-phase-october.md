# Phase 2: Power Platform Deep Dive
## October 1 – October 31, 2026
### Developer Plan (Free Forever) — Build the Complete Library System

---

> **The M365 E5 trial is gone. But you are not starting over — you are going deeper. Everything you touched in September now becomes something you truly understand and build from scratch. This month, you will build the complete Community Library Management System. By October 31, a real person could use it to borrow books. That is the standard we are building to.**

---

## What Changes After September 30

| Feature | September (E5 Trial) | October (Developer Plan) |
|---------|---------------------|--------------------------|
| Dataverse | ✅ Included | ✅ Included (1 environment) |
| Power Apps | ✅ Full | ✅ Full (for your own environment) |
| Power Automate | ✅ Premium connectors | ✅ Standard + Dataverse connectors |
| Power BI | ✅ Pro (sharing enabled) | ⚠️ Free (personal use only, no sharing) |
| Copilot Studio | ✅ Full (2,000 sessions) | ❌ Not included (paid separately) |
| SharePoint | ✅ Full | ❌ Requires M365 subscription |
| Teams | ✅ Full | ❌ Requires M365 subscription |
| Entra ID Premium | ✅ P2 | ❌ Basic only |

> 💭 **System Thinking Question #1:** How does this change your architecture decisions for October?
>
> You no longer have SharePoint (for Events list) or Teams (for publishing the chatbot). You still have Dataverse (for core data), Power Apps (for the member app), Power Automate (for automation), and Power BI (for personal analysis).
>
> In October, the library events list moves from SharePoint to a Dataverse table. The chatbot waits until December when we build it more powerfully with Copilot Studio connected to Azure. Power BI becomes your personal analysis tool.
>
> **This is reality.** Professional developers always design within constraints — budget limits, license limits, expiry dates. Knowing what you CAN'T do is as important as knowing what you CAN do. This month, you build a fully working library system with exactly the tools you have.

---

## October Week-by-Week Plan

| Week | Dates | Focus |
|------|-------|-------|
| Week 5 | Oct 1–7 | Canvas App — Screen design, galleries, navigation |
| Week 6 | Oct 8–14 | Power Fx — Formulas, logic, and data operations |
| Week 7 | Oct 15–21 | Power Automate Advanced — Conditions, loops, error handling |
| Week 8 | Oct 22–31 | Model-Driven App + Dataverse Security + Power BI (personal) |

---

---

# WEEK 5: October 1–7
## Canvas App — Building What Users Actually See

---

## Vocabulary for Week 5

---

**1. Screen (noun)**
- **Simple meaning:** One page in a canvas app — like one page in a book, or one room in a house
- **Real-world analogy:** Pages in a magazine. The home page shows the cover story. You flip to the next page for the full article. In an app, you navigate between screens the same way.
- **Example sentence:** *"The library app has 4 screens: Home (search books), Book Details (one book's info), My Loans (my borrowing history), and Profile (my membership details)."*

---

**2. Gallery (noun)**
- **Simple meaning:** A control that displays a list of items — each item in the list gets the same layout, repeated
- **Real-world analogy:** A bookshelf. Each shelf slot has the same size and shape. Every book in the library appears in a slot. The slot design is defined once — it applies to all books automatically.
- **Example sentence:** *"I created a Gallery control on the Home screen connected to the Book table in Dataverse. It shows 50 books — each with a cover image, title, and available copies. I designed the layout once; Power Apps repeated it for all 50 rows."*

---

**3. Control (noun)**
- **Simple meaning:** Any individual element in a canvas app — a button, a text box, an image, a gallery, a date picker
- **Real-world analogy:** Furniture in a room. A sofa, a table, a lamp — each is a separate piece. A screen is the room; controls are the furniture.
- **Example sentence:** *"I have a Text Input control where users type the book title to search. Next to it is a Button control labeled 'Search.' When the user taps the button, the gallery filters to show only matching books."*

---

**4. Property (noun)**
- **Simple meaning:** A setting that controls how a control looks or behaves — its color, size, text, what data it shows, whether it is visible
- **Real-world analogy:** Adjusting a desk lamp: you can change the height, the brightness, and the direction. These are properties of the lamp.
- **Example sentence:** *"The Borrow Button's 'Visible' property is set to: `Available_Copies > 0`. So the button only appears when copies are available. If the book is out, the button disappears and a 'Waitlist' label appears instead."*

---

**5. Navigate (verb)**
- **Simple meaning:** Moving the user from one screen to another when they click something
- **Real-world analogy:** Clicking a link on a website takes you to a new page. Navigate does the same thing inside the app.
- **Example sentence:** *"When a user taps a book in the Gallery, the app Navigates to the Book Details screen and passes that specific book's data so the screen shows the correct information."*

---

**6. Context Variable (noun)**
- **Simple meaning:** A temporary value that lives only on the current screen — when you navigate away, it disappears
- **Real-world analogy:** A sticky note on your desk. It holds information temporarily while you work on this task. When you finish and move to a different task, you throw the sticky note away.
- **Example sentence:** *"I used a context variable called 'SelectedBook' to pass the book the user clicked on to the Book Details screen. The Book Details screen reads SelectedBook to know which book to display."*

---

**7. Global Variable (noun)**
- **Simple meaning:** A value that lives for the entire duration the app is open — all screens can read it
- **Real-world analogy:** A whiteboard in the office that everyone can see. Anyone in any room can walk out, look at the whiteboard, and write on it. Global variables are that whiteboard for the app.
- **Example sentence:** *"I stored the logged-in user's name in a global variable called 'CurrentUser' when the app first opens. Every screen can display 'Hello, Rohit!' using this variable."*

---

**8. Delegation (noun, Power Apps concept)**
- **Simple meaning:** When Power Apps lets the data source (Dataverse) do the filtering/sorting instead of downloading all the data to the app first
- **Real-world analogy:** Two ways to find a book in a library: (A) Take every book off the shelf, carry them to a table, and search through them yourself. (B) Ask the librarian: "Find me all Science books from 2020." The librarian knows where everything is and brings only the right books. Option B (delegation) is much faster.
- **Example sentence:** *"My search formula uses Filter() which is a delegable function for Dataverse — meaning Dataverse does the searching and only sends matching books to the app. If I used a non-delegable function, Power Apps would download all 50 books first and then filter — slow and risky with large datasets."*

---

## CONCEPT: The Three Layers of a Canvas App

Every canvas app has three layers. Understanding these layers helps you design better apps and debug problems faster.

```
LAYER 1: PRESENTATION (what the user sees)
─────────────────────────────────────────────
Screens, Controls, Colors, Fonts, Layout
"What does it look like? Where do buttons go?"

        ↕ (connected by formulas)

LAYER 2: LOGIC (what the app does)
─────────────────────────────────────────────
Power Fx formulas, Variables, Navigation, Conditions
"What happens when a button is clicked? What data shows where?"

        ↕ (connected by connectors)

LAYER 3: DATA (what the app stores and reads)
─────────────────────────────────────────────
Dataverse tables, Variables, Collections
"Where does the information come from? Where does it go?"
```

**Why this layering matters:**

When your app shows the wrong data, you know to look at Layer 3 (is the data source correct?) or Layer 2 (is the formula correct?).

When the button does not respond, you look at Layer 2 (is the OnSelect formula correct?).

When the layout looks wrong on a phone, you look at Layer 1 (are the controls positioned for mobile screen size?).

**Separating concerns** — keeping presentation, logic, and data as independent as possible — is one of the most important principles in software architecture. You will see this pattern again in November when we learn about Azure Functions (logic layer separate from data layer).

> 💭 **System Thinking Question #2:** What would happen if we mixed all three layers together — if the formula that calculates late fees was also responsible for displaying the button color?
>
> Imagine you need to change the button color (presentation). To do that, you have to dig into the formula that calculates late fees (logic). While you are editing, you accidentally change the fee calculation. Now fees are wrong.
>
> This is called "tight coupling" — when two different concerns are tangled together. It is a dangerous pattern. Changes in one area unexpectedly break other areas. Professional developers spend years untangling tightly coupled systems. We design loosely coupled systems from the beginning.

---

## HANDS-ON EXERCISE 1: Build the Library App — Home Screen

### Before You Start: Open Your Developer Plan Environment

1. Open `make.powerapps.com`
2. Sign in with your **Developer Plan** account (the personal one, not the expired trial)
3. Confirm environment picker shows your Developer Plan environment
4. Confirm all your Dataverse tables are there (Book, Member, Loan, Author)

If tables are missing: import from the solution ZIP you exported in Week 4 of September.

### Step 1: Create a New Canvas App

1. Left menu → **Apps** → **+ New app** → **Canvas**
2. Choose **Tablet** format (we will design for tablet first, then test on phone)
3. Give it a name: `Community Library`
4. Click **Create**

You see a blank white canvas. This is your first screen, called "Screen1."

### Step 2: Rename Screens

Good naming matters. Rename Screen1:
1. In the left panel (Tree view), right-click `Screen1` → **Rename**
2. Name it: `HomeScreen`

### Step 3: Add a Header

1. Insert a **Rectangle** control (Insert menu → Shapes → Rectangle)
2. Set its properties:
   - **X:** 0, **Y:** 0
   - **Width:** Parent.Width (this means: fill the full width of the screen)
   - **Height:** 80
   - **Fill:** `RGBA(0, 120, 212, 1)` (this is Microsoft blue — a professional library color)

3. Insert a **Label** control on top of the rectangle:
   - **Text:** `"Community Library"`
   - **X:** 20, **Y:** 15
   - **Font Size:** 24
   - **Bold:** true
   - **Color:** White
   - **Font:** `"Segoe UI"`

> 💭 **Why do we hard-code colors with RGBA values instead of just picking from a color picker?**
>
> When you pick a color with a color picker, the value is stored as a color code (like `#0078D4`). Tomorrow, a designer tells you: "All blue elements must be 10% darker." If you used a color picker on 50 controls, you must change 50 places.
>
> If you had defined the color once in a global variable or as a constant, you change it in one place and all 50 controls update automatically. This is called the "DRY principle" — Don't Repeat Yourself. In October, we will move all color constants to the App.OnStart formula so they are defined once.

### Step 4: Add the Search Box

1. Insert a **Text Input** control
2. Set properties:
   - **Hint Text:** `"Search books by title or author..."`
   - **X:** 20, **Y:** 100
   - **Width:** Parent.Width - 40
   - **Height:** 50
   - **Border Radius:** 8 (makes corners rounded — feels modern)
3. Rename this control: `SearchInput`

### Step 5: Add the Books Gallery

1. Insert a **Blank Vertical Gallery**
2. Set its **Items** property (the most important property of a gallery):
   ```
   Search(Books, SearchInput.Text, "cr_title", "cr_author_name")
   ```
   
   **What this formula does:**
   - `Books` — the Dataverse table you are connecting to
   - `SearchInput.Text` — the text the user is currently typing
   - `"cr_title"`, `"cr_author_name"` — the columns to search in
   
   When SearchInput is empty, it shows ALL books. When the user types "Harry", it shows only books with "Harry" in the title or author name.

3. Inside the gallery template (click the first item in the gallery), add:
   - A **Label** for Title: `ThisItem.cr_title`
   - A **Label** for Author: `ThisItem.cr_author_name`
   - A **Label** for Available: `"Available: " & Text(ThisItem.cr_available_copies)`
   - A **Label** showing availability with color:
     - Text: `If(ThisItem.cr_available_copies > 0, "✓ Available", "✗ On Loan")`
     - Color: `If(ThisItem.cr_available_copies > 0, Green, Red)`

4. Set the Gallery's `OnSelect` property:
   ```
   Navigate(BookDetailScreen, ScreenTransition.Slide, {SelectedBook: ThisItem})
   ```
   
   This navigates to the Book Detail screen (which we will build next) and passes the clicked book as `SelectedBook`.

> 💭 **System Thinking Question #3:** What happens if the Dataverse table has 5,000 books? Will the Search function still work correctly?
>
> With Dataverse as the data source, `Search()` is a **delegable** function — Dataverse does the searching. It will only return matching books, not all 5,000. So yes, it works.
>
> But if you used `Filter()` with a non-delegable condition (for example, a formula using `Left()` or `Len()` inside Filter), Power Apps would download the first 500 rows (the delegation limit), filter those locally, and miss books #501 onwards. This is the delegation problem.
>
> Always check the yellow delegation warning triangle when you write a formula in the Items property. If it is yellow, your formula is not delegated — fix it or you will get wrong results on large datasets.

---

## HANDS-ON EXERCISE 2: Build the Book Detail Screen

### Step 1: Add a New Screen

1. Left panel → Click **+** next to Screens → **Blank screen**
2. Rename it: `BookDetailScreen`

### Step 2: Show the Book Information

Add labels to display the selected book's data. All of these use `SelectedBook` (the context variable passed from HomeScreen):

| Control | Property | Formula |
|---------|----------|---------|
| Title Label | Text | `SelectedBook.cr_title` |
| Author Label | Text | `"by " & SelectedBook.cr_author_name` |
| Genre Label | Text | `"Genre: " & SelectedBook.cr_genre` |
| Year Label | Text | `"Published: " & Text(SelectedBook.cr_published_year)` |
| Rating Label | Text | `"⭐ " & Text(SelectedBook.cr_average_rating, "[$-en-US]0.0")` |
| Available Label | Text | `"Available copies: " & Text(SelectedBook.cr_available_copies) & " / " & Text(SelectedBook.cr_total_copies)` |

### Step 3: Add the Borrow Button

This is the most important control in the entire app — it creates a Loan record.

1. Insert a **Button** control
2. Text: `"Borrow This Book"`
3. **Visible property** (the button only shows when copies are available):
   ```
   SelectedBook.cr_available_copies > 0
   ```
4. **OnSelect property** (what happens when tapped):
   ```
   Patch(
     Loans,
     Defaults(Loans),
     {
       cr_book: {Id: SelectedBook.cr_bookid, '@odata.type': '#Microsoft.Dynamics.CRM.cr_book'},
       cr_member: {Id: LookUp(Members, cr_email = User().Email).cr_memberid, '@odata.type': '#Microsoft.Dynamics.CRM.cr_member'},
       cr_loan_date: Today(),
       cr_due_date: DateAdd(Today(), 14, TimeUnit.Days),
       cr_status: "Active"
     }
   );
   Notify("Book borrowed successfully! Due back by " & Text(DateAdd(Today(), 14, TimeUnit.Days), "dd mmm yyyy"), NotificationType.Success);
   Navigate(HomeScreen)
   ```

**What this formula does (line by line):**

- `Patch(Loans, Defaults(Loans), {...})` — creates a NEW row in the Loans table (Patch = insert or update)
- `cr_book: ...` — links this loan to the selected book (using the book's ID, which Dataverse needs for relationships)
- `cr_member: LookUp(Members, cr_email = User().Email)` — finds the current logged-in user in the Members table by matching their email
- `cr_loan_date: Today()` — sets today as the borrow date
- `cr_due_date: DateAdd(Today(), 14, TimeUnit.Days)` — sets the due date to 14 days from today
- `Notify(...)` — shows a green success message at the top of the screen
- `Navigate(HomeScreen)` — sends the user back to the home screen

> 💭 **System Thinking Question #4:** What happens if `LookUp(Members, cr_email = User().Email)` finds no match?
>
> If Rohit's Microsoft account email is `rohit.verma@personal.com` but the Member table has his email as `rohit.verma@library.com`, the LookUp returns blank. The Patch then tries to create a loan with no member — which fails (or worse, creates an orphaned loan record with no member linked).
>
> This is called a **data quality issue**. The system works perfectly only when data is consistent. This is why professional systems have:
> 1. Validation rules on the form ("Does this email exist in Members table?")
> 2. Error handling in the formula (check if LookUp is blank before trying to Patch)
>
> We will add this error handling in Week 6 when we learn Power Fx deeply.

### Step 4: Add a Back Button

1. Insert a **Button** or an **Icon** (left arrow)
2. **OnSelect:** `Navigate(HomeScreen, ScreenTransition.UnCover)`

### Step 5: Add the Waitlist Label

When `Available_Copies = 0`, the Borrow Button is hidden. But the user needs to know why.

1. Insert a **Label** control
2. Text: `"All copies are currently on loan. Ask a librarian to add you to the waitlist."`
3. **Visible:** `SelectedBook.cr_available_copies = 0`
4. Color: Orange

---

## HANDS-ON EXERCISE 3: Build the My Loans Screen

### Step 1: Add Third Screen

Name it: `MyLoansScreen`

### Step 2: Show Current User's Loans

1. Add a **Blank Vertical Gallery**
2. **Items property:**
   ```
   Filter(
     Loans,
     cr_member.cr_email = User().Email
   )
   ```
   This shows ONLY loans belonging to the person currently logged in. No librarian configured this — the formula enforces it automatically.

3. Inside the gallery, add labels:
   - Book title: `ThisItem.cr_book.cr_title`
   - Loan date: `Text(ThisItem.cr_loan_date, "dd mmm yyyy")`
   - Due date: `Text(ThisItem.cr_due_date, "dd mmm yyyy")`
   - Status with color:
     - Text: `If(IsBlank(ThisItem.cr_return_date), If(Today() > ThisItem.cr_due_date, "OVERDUE", "Active"), "Returned")`
     - Color: `If(IsBlank(ThisItem.cr_return_date), If(Today() > ThisItem.cr_due_date, Red, DarkGreen), Gray)`

> 💭 **System Thinking Question #5:** Rohit can only see his own loans in this gallery. But what if Rohit is also a librarian? Should he see all loans?
>
> This is a **role-based experience** question. The solution is:
> - If the logged-in user has the "Library Staff" role, show ALL loans
> - If the logged-in user is a member, show only their loans
>
> In Dataverse security (Week 8), we implement this at the DATA layer — librarians get org-level read access to Loans; members get user-level access (only their own rows). The Power Apps formula does not need to change — Dataverse enforces the access automatically.
>
> **This is the principle of least privilege** — every user sees only what they need and nothing more. It is both a security best practice and a good UX (user experience) design principle.

---

## 🗣️ English Practice — Week 5: "If X, then Y" — Conditional Sentences

### Why This Grammar Pattern?

Canvas app logic IS conditional sentences written in a formula language. When you understand the English grammar of conditions, you understand the app logic — and vice versa.

**The Pattern:**
- **Real condition (present tense):** "If [something is true], [result happens]."
- **In formulas:** `If(AvailableCopies > 0, "Borrow", "Waitlist")`
- **In English:** "If available copies is greater than zero, show 'Borrow'. Otherwise, show 'Waitlist'."

**Four types of conditional sentences:**

| Type | Structure | Example |
|------|-----------|---------|
| Real present | If + present, present | "If the user is logged in, the app shows their loans." |
| Real future | If + present, will + verb | "If all copies are on loan, the system will show a waitlist message." |
| Unlikely | If + past, would + verb | "If every member borrowed 5 books at once, the library would run out of copies quickly." |
| Impossible/Past | If + past perfect, would have + verb | "If we had not set up error handling, the app would have crashed when no member was found." |

For technical descriptions, use **Real present** and **Real future** most often.

---

### Grammar Practice

Write the complete conditional sentence:

1. Condition: User types in search box. Result: Gallery filters in real time.
   "If ________________________________________________, the gallery ________________________________________________."

2. Condition: Available_Copies = 0. Result: Borrow button is hidden.
   "If ________________________________________________, the Borrow button ________________________________________________."

3. Condition: LookUp returns blank (member not found). Result: Show error message.
   "If ________________________________________________, the app ________________________________________________."

4. Condition: DateDiff(Today, DueDate) is negative. Result: Loan is overdue.
   "If ________________________________________________, the loan ________________________________________________."

5. Condition: User does NOT have the Library Member security role. Result: Cannot create a loan.
   "If ________________________________________________, the user ________________________________________________."

---

### Vocabulary in Sentences

Write one conditional sentence ("If X, then Y") for each word:

| Word | Write your sentence |
|------|---------------------|
| Gallery | |
| Property | |
| Navigate | |
| Context Variable | |
| Delegation | |

---

### Writing Exercise: Write User Stories for the Library App

A **User Story** is a professional way to describe a feature from the user's perspective. Format: *"As a [type of user], I want to [action] so that [benefit]."*

Write 5 user stories for the library canvas app. Then, for each one, add the conditional logic: "If [condition], the app [result]."

**Example:**
- User story: *"As a library member, I want to see only available books when I search so that I do not waste time requesting books that are all on loan."*
- App logic: *"If the user applies the 'Available Only' filter, the gallery shows only books where Available_Copies is greater than zero."*

Write your own 5 user stories + conditional logic below.

---

### 🔊 Read Aloud Exercise

Read this explanation of the Borrow formula out loud, slowly, as if you are explaining it to a new colleague:

*"The Borrow button has three layers of logic. First: if the user's email does not match any record in the Members table, the button shows an error message instead of borrowing. Second: if Available_Copies on the selected book is zero at the exact moment of borrowing — even if it showed one available a moment earlier — the system shows a message saying all copies were just borrowed and asks the user to try again. Third: if both checks pass, the system creates a new loan record in Dataverse, sets the due date to 14 days from today, and shows a green confirmation message. These three checks prevent three different types of errors: wrong user, race condition, and system failure."*

After reading: close your eyes and explain, in your own words, what a "race condition" is.

---

### Professional Communication: Describing a Feature in a Meeting

When someone asks "What does this screen do?" in a meeting, you need to explain it clearly and concisely. Practice this structure:

**Structure: Purpose → Action → Result → Edge Case**

**Template:**
```
"This [screen/feature] allows [who] to [do what].
When [the user does X], the app [does Y].
The result is [what the user sees or what data is saved].
One edge case we handle is: if [unusual situation], the app [how it handles it]."
```

**Example:**
*"The Home screen allows library members to search for books. When the member types in the search box, the app filters the book gallery in real time, showing only books that match the title or author name. The result is a filtered list of books the member can browse. One edge case we handle is: if the search returns no results, the gallery shows a message — 'No books found. Try a different search.' — instead of showing an empty screen."*

Write your own description of either the Book Detail screen or the My Loans screen using this structure.

---

### 🚫 Common English Mistakes — Week 5

**Mistake 1: "If I will click" — wrong future in conditionals**

❌ "If I will click the button, the record will be saved."
✅ "**If I click** the button, the record **will be** saved."

Rule: After "If" in a real condition, use PRESENT tense — never "will."

**Mistake 2: "The data are" vs "The data is"**

Both are technically acceptable in English, but in modern professional/American English, "data is" is more common:
✅ "The data **is** stored in Dataverse."
✅ "The data **is** filtered by the gallery formula."

In academic or British English, "data are" is still used. Be consistent — pick one and stick to it.

**Mistake 3: "Screenshot" as a verb**

❌ "I screenshotted the error message."
✅ "I **took a screenshot of** the error message." OR "I **captured** the error message."

**Mistake 4: Starting every sentence with "I"**

❌ "I built the home screen. I added a gallery. I connected it to Dataverse. I set the filter."
✅ "I built the home screen and added a gallery connected to Dataverse. **The gallery uses a filter formula** that shows only matching books as the user types."

Rule: Vary your sentence starters: "The gallery...", "When a user...", "This formula...", "After setting up..."

---

### ✅ Week 5 English Progress Check

- [ ] Can you write 5 correct "If X, then Y" sentences about your app?
- [ ] Can you explain what your Home screen does in 4 sentences to someone who has never seen Power Apps?
- [ ] Did you write 5 user stories this week?
- [ ] Are you avoiding "If I will..." and using "If I..." instead?
- [ ] Did you write at least 3 journal entries this week?

---

---

# WEEK 6: October 8–14
## Power Fx — The Language Behind Everything

---

## Vocabulary for Week 6

---

**9. Formula (noun)**
- **Simple meaning:** A calculation or instruction written in Power Fx that tells a control what to do or show
- **Real-world analogy:** A recipe instruction: "If the dough is not ready, wait 10 more minutes. Otherwise, put it in the oven." A formula makes decisions based on conditions.
- **Example sentence:** *"The formula in the Available Copies label is: `Text(SelectedBook.cr_total_copies - CountRows(Filter(Loans, cr_book.cr_bookid = SelectedBook.cr_bookid, IsBlank(cr_return_date))))`. It calculates available copies live from the database instead of trusting the stored number."*

---

**10. Function (noun)**
- **Simple meaning:** A built-in operation in Power Fx that does a specific job — like Filter, Sort, Patch, Navigate, Notify, LookUp, Today, DateAdd
- **Real-world analogy:** Tools in a toolbox. A hammer (Patch), a measuring tape (DateDiff), scissors (Split). Each tool does one specific job.
- **Example sentence:** *"The `DateDiff()` function calculates the number of days between two dates. I used it to calculate how many days overdue a loan is: `DateDiff(cr_due_date, Today(), TimeUnit.Days)`."*

---

**11. Collection (noun)**
- **Simple meaning:** A temporary local table stored inside the app — not in Dataverse, not in SharePoint — just in the app's memory, lost when the app closes
- **Real-world analogy:** A shopping basket. You pick items from the shelves (Dataverse) and put them in your basket (Collection) to review before finalising. The basket is temporary — it does not change the shop's inventory.
- **Example sentence:** *"I created a Collection called 'SelectedGenres' to store which genre filters the user has turned on. The gallery then filters books based on the collection. When the user closes the app, the collection disappears."*

---

**12. Error Handling (noun)**
- **Simple meaning:** Code or formulas that catch problems and respond gracefully instead of crashing
- **Real-world analogy:** A safety net under a tightrope walker. If they fall, the net catches them. The performance does not stop — it continues. Without a net, one fall ends everything.
- **Example sentence:** *"My Borrow button formula has error handling: if the Patch fails, the formula shows 'Sorry, there was a problem borrowing this book. Please try again.' instead of showing a confusing technical error to Rohit."*

---

**13. IfError (function)**
- **Simple meaning:** A Power Fx function that runs one formula and, if it fails, runs a different formula instead
- **Example sentence:** *"`IfError(Patch(Loans, ...), Notify('Borrow failed. Check your internet connection.', NotificationType.Error))`"*

---

**14. IsBlank (function)**
- **Simple meaning:** Checks if a value is empty — returns true if empty, false if it has a value
- **Example sentence:** *"`If(IsBlank(cr_return_date), 'On Loan', 'Returned')` — if the return date is blank, the book has not been returned yet."*

---

## CONCEPT: Power Fx Is Functional Programming

Power Fx formulas are different from traditional programming in one important way: **they react to changes automatically**.

In traditional code:
```
// You write step-by-step instructions
x = 5
y = x + 3   // y is now 8
x = 10      // y is STILL 8 — it calculated once and stopped
```

In Power Fx:
```
// You declare a relationship
y = x + 3   // y is ALWAYS x + 3, no matter when x changes
// If x becomes 10, y automatically becomes 13
```

This is why when you type in the search box, the gallery updates instantly — you did not write "when the user finishes typing, refresh the gallery." Power Fx watches the formula `Search(Books, SearchInput.Text, ...)` and automatically re-evaluates it every time `SearchInput.Text` changes.

> 💭 **System Thinking Question #6:** What are the advantages of this reactive style? What are the limitations?
>
> **Advantages:**
> - No need to write "event listeners" (code that waits for changes) — Power Apps handles this
> - Fewer bugs — you declare relationships, not procedures
> - Easier for beginners to understand
>
> **Limitations:**
> - Complex workflows (do step A, wait for result, then do step B based on result) are harder
> - Debugging is harder — when many formulas react to each other, tracking down a bug requires thinking about the whole chain
> - Performance issues when formulas are complex and trigger on every keystroke

---

## HANDS-ON EXERCISE 4: Improve the Borrow Formula with Error Handling

The current Borrow formula (from Week 5) has problems:
1. What if the loan record fails to save?
2. What if the user is not in the Members table?
3. What if Available Copies becomes negative (two people borrow at the exact same time)?

Let us fix each one.

### Problem 1: Member Not Found

**Current formula fragment:**
```
cr_member: {Id: LookUp(Members, cr_email = User().Email).cr_memberid, ...}
```

If LookUp returns blank, this crashes. Fix:

```
// Before the Patch, check if member exists
If(
  IsBlank(LookUp(Members, cr_email = User().Email)),
  Notify("Your account is not registered as a library member. Please contact a librarian.", NotificationType.Error),
  
  // Only if member exists, proceed with borrow
  Patch(
    Loans,
    Defaults(Loans),
    {
      cr_book: {Id: SelectedBook.cr_bookid, '@odata.type': '#Microsoft.Dynamics.CRM.cr_book'},
      cr_member: {Id: LookUp(Members, cr_email = User().Email).cr_memberid, '@odata.type': '#Microsoft.Dynamics.CRM.cr_member'},
      cr_loan_date: Today(),
      cr_due_date: DateAdd(Today(), 14, TimeUnit.Days),
      cr_status: "Active"
    }
  );
  Notify("Book borrowed successfully! Due back by " & Text(DateAdd(Today(), 14, TimeUnit.Days), "dd mmm yyyy"), NotificationType.Success);
  Navigate(HomeScreen)
)
```

### Problem 2: Patch Failure (network, server error)

Wrap the Patch with IfError:

```
IfError(
  Patch(Loans, Defaults(Loans), {...}),
  Notify("Could not save the loan record. Please check your internet connection and try again.", NotificationType.Error)
)
```

### Problem 3: Race Condition (two borrows at same time)

This is a **concurrency problem** — a classic challenge in computer science.

```
// Before Patch, re-read available copies from Dataverse (not from SelectedBook which may be stale)
Set(
  LiveAvailableCopies,
  LookUp(Books, cr_bookid = SelectedBook.cr_bookid).cr_available_copies
);

If(
  LiveAvailableCopies <= 0,
  Notify("Sorry, all copies were just borrowed. Please refresh and try again.", NotificationType.Warning),
  Patch(Loans, ...)
)
```

**Why `SelectedBook.cr_available_copies` might be stale:**
When you navigated to the Book Detail screen, Power Apps read the book data at that moment. If someone else borrowed the last copy 2 seconds later, `SelectedBook.cr_available_copies` still shows 1 (because it was read 2 seconds ago). The `LookUp(Books, ...)` reads fresh data from Dataverse right now.

> 💭 **This problem — stale data — is one of the hardest problems in distributed systems.** Every app that has multiple users editing the same data simultaneously faces it. There are multiple strategies:
>
> - **Optimistic locking:** Try to save, but if someone else saved first, show a conflict message (this is what we did)
> - **Pessimistic locking:** Lock the record when you open it, so nobody else can touch it (safe but slow — imagine a book that nobody can see because one person has it open on their screen)
> - **Last-write-wins:** Whoever saves last wins, earlier saves are overwritten (simple but risky for financial data)
>
> These are not beginner concepts — they are senior architect concepts. You are learning them now because understanding the problem is the first step to choosing the right solution.

---

## HANDS-ON EXERCISE 5: Power Fx Formulas Practice Set

Write these formulas in a new canvas app (create a blank "Practice" app for this):

**Exercise A: Date calculations**
- Calculate how many days until a book is due: `DateDiff(Today(), DueDate, TimeUnit.Days)`
- If overdue, show negative number: automatically happens (DateDiff returns negative if due date is in the past)
- Format nicely: `If(DateDiff(Today(), DueDate, TimeUnit.Days) < 0, "OVERDUE by " & Abs(DateDiff(Today(), DueDate, TimeUnit.Days)) & " days", "Due in " & DateDiff(Today(), DueDate, TimeUnit.Days) & " days")`

**Exercise B: Counting**
- Count all active loans: `CountRows(Filter(Loans, cr_status = "Active"))`
- Count overdue loans: `CountRows(Filter(Loans, cr_status = "Active", Today() > cr_due_date))`
- Total late fees: `Sum(Filter(Loans, cr_status = "Returned"), cr_late_fee)`

**Exercise C: String operations**
- Show first 50 characters of a description: `Left(cr_description, 50) & "..."`
- Capitalize first letter: `Upper(Left(cr_title, 1)) & Lower(Mid(cr_title, 2))`
- Check if email is valid format: `IsMatch(EmailInput.Text, Email)`

**Exercise D: Combining data from two tables**
- Show member name next to their overdue loans:
  ```
  ForAll(
    Filter(Loans, IsBlank(cr_return_date), Today() > cr_due_date),
    Collect(
      OverdueLoansWithMember,
      {
        BookTitle: cr_book.cr_title,
        MemberName: cr_member.cr_full_name,
        DaysOverdue: DateDiff(cr_due_date, Today(), TimeUnit.Days),
        LateFee: DateDiff(cr_due_date, Today(), TimeUnit.Days) * 5
      }
    )
  )
  ```

---

## 🗣️ English Practice — Week 6: "Because... Therefore..." — Cause and Effect Chains

### Why This Grammar Pattern?

Power Fx formulas are chains of logic: one thing causes another. In English, cause-effect language explains WHY you made a decision, WHY a formula works, or WHY something broke.

**Key connectors:**

| Connector | Use | Example |
|-----------|-----|---------|
| **because** | gives the reason | "The formula uses DateDiff **because** we need to count days automatically." |
| **therefore** | shows the result | "The delegation limit is 500 rows; **therefore**, we use a delegable function." |
| **as a result** | shows the result (formal) | "The filter is delegable. **As a result**, Dataverse does the work, not the app." |
| **so** | shows the result (casual) | "The formula is reactive, **so** the gallery updates every time the user types." |
| **due to** | gives the reason (formal, before a noun) | "**Due to** the race condition risk, we re-read Available_Copies before borrowing." |
| **which means** | explains a consequence | "The formula is reactive, **which means** you never need to press a Refresh button." |

---

### Grammar Practice

Connect each cause with its effect using a connector from the table above:

1. Cause: Power Fx is reactive. Effect: Gallery updates automatically when search changes.
   "Power Fx is reactive, ________________________________________________."

2. Cause: We used a non-delegable function. Effect: Only the first 500 rows are searched.
   "We used a non-delegable function; ________________________________________________, only 500 rows are searched."

3. Cause: We store Available_Copies in the Book table. Effect: Two users can borrow the last copy simultaneously.
   "We store Available_Copies as a static number. ________________________________________________ two users may simultaneously borrow the last copy."

4. Cause: We add IfError to the Borrow formula. Effect: The app shows a friendly message instead of crashing.
   "We added IfError to the formula. ________________________________________________ the app shows a helpful message instead of a technical error when something goes wrong."

---

### Vocabulary in Sentences

Write one cause-effect sentence using each of these words:

| Word | Write your cause-effect sentence |
|------|----------------------------------|
| Formula | |
| Delegation | |
| Collection | |
| IfError | |
| IsBlank | |

---

### Writing Exercise: Explain a Formula in Plain English

Pick any formula you wrote this week (the Borrow formula, a Filter formula, or the DateDiff calculation). Write a plain-English explanation of it for someone who has never seen a formula.

**Structure:**
1. What the formula does (one sentence)
2. Why we need it (cause — "because...")
3. How it works step by step (then... then... then...)
4. What happens if it fails (therefore... / as a result...)

**Example:**
*"The Borrow button formula creates a new loan record in the database. We need it because simply pressing a button does not save anything — an explicit instruction must tell the system what to save and where. The formula works in three steps: first, it checks whether the current user exists in the Members table; then, it re-reads the Available_Copies directly from Dataverse to prevent race conditions; finally, if both checks pass, it creates the loan record with today's date and a due date 14 days from now. If any step fails, the IfError function catches the failure and shows the user a friendly message — 'Could not save. Please try again.' — instead of a confusing technical error."*

---

### 🔊 Read Aloud Exercise

Read this out loud, pausing at each comma:

*"The delegation problem occurs because Power Apps has a limit on how many rows it downloads from a data source at one time. This limit is 500 rows by default. If a formula is not delegable — meaning Dataverse cannot process the filter remotely — Power Apps downloads the first 500 rows, applies the filter locally, and returns results only from those 500 rows. As a result, if your library has 600 books and the book you searched for is number 601 in the database, it will not appear in the search results, even though it exists. This is a silent error — the app does not warn you. Therefore, always use delegable functions when working with large datasets."*

After reading: Explain the delegation problem to an imaginary person in 3 sentences. Use the word "because" at least once.

---

### Professional Communication: Asking for Technical Help

When you have a problem, asking for help well gets you faster and better answers. Most people describe their problem too vaguely.

**Template for a technical help message:**
```
Subject: [Brief description of the problem] — Need Help

Hi [Name/Team],

I am trying to [what you are trying to do].

What I have done so far:
- [Step 1]
- [Step 2]
- [Step 3]

The problem: [What is going wrong — be specific. What error message, if any?]

What I have already tried:
- [Thing you tried] — Result: [what happened]

My environment: [Power Apps / Developer Plan / Dataverse / etc.]

Could you please [specific help you need]?

Thank you,
[Your name]
```

Write a real help message for any problem you encountered this week, even if you already solved it. Practice the format.

---

### 🚫 Common English Mistakes — Week 6

**Mistake 1: "Due to" vs "Because of"**

"Due to" follows a form of "to be":
✅ "The error was **due to** a missing connection."

"Because of" works everywhere else:
✅ "The app crashed **because of** a missing connection."

Avoid starting a sentence with "Due to":
❌ "Due to the delegation limit, only 500 rows were searched."
✅ "**Because of** the delegation limit, only 500 rows were searched."

**Mistake 2: "Hence" used too much**

❌ "Hence, the formula failed. Hence, I used IfError. Hence, the app works."
✅ Vary your connectors: "Therefore...", "As a result...", "So...", "This is why..."

**Mistake 3: Confusing "affect" (verb) and "effect" (noun)**

✅ "The delegation limit **affects** the search results." (affect = verb)
✅ "The **effect** of the delegation limit is that only 500 rows are searched." (effect = noun)

Memory trick: **A**ffect = **A**ction (verb). **E**ffect = End result (noun).

**Mistake 4: Long sentences with multiple "and"s**

❌ "I opened Power Apps and I created a new formula and I tested it and it worked."
✅ "I opened Power Apps and created a new formula. After testing it, I confirmed it worked."

---

### ✅ Week 6 English Progress Check

- [ ] Can you explain what "delegation" is using the words "because" and "therefore"?
- [ ] Did you write a plain-English explanation of one formula you built?
- [ ] Can you write a professional help request message without saying "please do the needful"?
- [ ] Are you using "because", "therefore", "as a result" correctly in your journal?
- [ ] Can you correctly use "affect" (verb) and "effect" (noun)?

---

---

# WEEK 7: October 15–21
## Power Automate — When the App Sleeps, the Flows Run

---

## Vocabulary for Week 7

---

**15. Trigger (noun, Power Automate)**
- **Simple meaning:** The event that starts a flow — like an alarm clock. When the alarm rings (trigger), you wake up (flow starts).
- **Types of triggers:**
  - **Automated** — triggered by a data event (new row created, row updated)
  - **Instant** — triggered manually by a button click (in an app or Teams)
  - **Scheduled** — triggered at a set time (every morning at 7 AM)
- **Example sentence:** *"The overdue reminder flow uses a scheduled trigger: every morning at 7 AM, it wakes up and checks all loans. If any are overdue, it sends emails."*

---

**16. Condition (noun)**
- **Simple meaning:** A decision point in a flow — "if this is true, do X; otherwise, do Y"
- **Real-world analogy:** A traffic light. Red (condition: is the light red?) → Stop (action if true). Green → Go (action if false).
- **Example sentence:** *"In the overdue flow, there is a condition: 'Is Due_Date before Today?' If yes → send overdue email. If no → do nothing."*

---

**17. Loop (noun)**
- **Simple meaning:** A part of a flow that repeats — "do this action for each item in a list"
- **Real-world analogy:** Sending invitations to a party. You have a list of 30 guests. You write the same invitation 30 times, once for each guest. A loop automates this: "for each guest in the list, send one invitation."
- **Example sentence:** *"The overdue reminder flow uses an 'Apply to each' loop. It gets all overdue loans (a list of records), then for each overdue loan, it sends one email to that member."*

---

**18. Variable (noun, Power Automate)**
- **Simple meaning:** A temporary storage container in a flow — it holds a value that you can read, change, and use later in the flow
- **Real-world analogy:** A notepad you carry during a meeting. You write things down (set variable), cross out old values (update variable), and refer back to them (use variable).
- **Example sentence:** *"I initialised a variable called 'TotalFee' at the start of the flow with value 0. Inside the loop, for each overdue loan, I added the daily fee to TotalFee. After the loop, TotalFee holds the total fees for all overdue loans."*

---

**19. Parallel Branch (noun)**
- **Simple meaning:** Two or more parts of a flow that run at the same time — not waiting for each other
- **Real-world analogy:** A restaurant kitchen. The chef does not make the salad, then the main course, then the dessert one at a time. Three cooks work in parallel — salad, main course, and dessert all being prepared simultaneously. The meal is ready much faster.
- **Example sentence:** *"When a new loan is created, the flow uses a parallel branch: one branch sends a confirmation email to the member (takes 2 seconds), the other branch sends a notification to Pooja's Teams (takes 1 second). Both happen simultaneously — total time: 2 seconds instead of 3."*

---

**20. Child Flow (noun)**
- **Simple meaning:** A flow that is called (started) by another flow — it does one specific job and can be reused by many parent flows
- **Real-world analogy:** A specialist consultant. The main project manager (parent flow) is running a project. When legal work is needed, she calls the legal consultant (child flow). The same legal consultant is called for other projects too — their expertise is reusable.
- **Example sentence:** *"I created a child flow called 'Calculate Late Fee' that takes a loan date, a due date, and a fee-per-day rate, and returns the calculated fee. Three different parent flows call this child flow instead of each calculating late fees themselves."*

---

## CONCEPT: The Anatomy of a Well-Built Flow

Beginners build flows that work. Professionals build flows that work, handle errors, are readable, and can be maintained by someone else.

```
A WELL-BUILT FLOW:

1. TRIGGER
   └─ What starts this flow?
   └─ Is the trigger as specific as possible? (Avoid "When any record changes" — use "When a record in the Loans table is created")

2. INITIALISE VARIABLES
   └─ Define all variables at the top (not inside loops)
   └─ Give them clear names: TotalLateFees, not x or temp1

3. GET DATA
   └─ Query only what you need (use filters — don't get all 5,000 records if you need 10)
   └─ Check: what if no records are returned? Handle the empty case.

4. MAIN LOGIC (with conditions and loops)
   └─ Keep each action focused on one thing
   └─ Add comments to each step explaining WHY (not what — the step name explains what)

5. ERROR HANDLING
   └─ Every flow should have a "Configure run after" on key steps
   └─ If a step fails, what should happen? Log the error? Send an alert to Pooja?

6. COMPLETION
   └─ Send a summary if needed
   └─ Clean up temporary data
```

> 💭 **System Thinking Question #7:** Why is it bad practice to build ALL logic in one single giant flow?
>
> Imagine the overdue loan flow does: check overdue loans → calculate late fees → send emails → update Dataverse records → generate a report → email the report to Pooja → archive old loans → update member status → send a Teams message.
>
> This is a 9-step flow. If step 5 (generate report) fails, the flow stops. Steps 6, 7, 8, 9 never run. Emails were already sent (step 3) but Dataverse was not updated (step 4 succeeded but step 5 failed). Your data is now inconsistent.
>
> **Break large flows into smaller focused flows.** Or use child flows for reusable parts. Or use error handling to catch failures and continue or retry.
>
> The rule of thumb: a flow should do ONE thing. If you need to explain it in a sentence and the sentence has more than one "and", it is probably doing too much.

---

## HANDS-ON EXERCISE 6: Build the Overdue Loan Reminder Flow

This flow runs every morning at 7 AM, finds all overdue loans, and sends a reminder email to each member.

### Step 1: Create the Flow

1. Go to `make.powerautomate.com`
2. **+ New flow** → **Scheduled cloud flow**
3. Name: `Overdue Loan Daily Reminder`
4. Starting time: `07:00 AM`
5. Repeat every: `1 Day`
6. Click **Create**

### Step 2: Initialize Variables

Add step → **Initialize variable**:
- Name: `OverdueCount`
- Type: Integer
- Value: 0

### Step 3: Get All Overdue Loans

Add step → **Microsoft Dataverse** → **List rows**:
- Table name: `Loans`
- Filter rows: `cr_status eq 'Active' and cr_due_date lt @{utcNow()}`

> **What `cr_due_date lt @{utcNow()}`means:**
> `lt` = less than. `utcNow()` = current date and time in UTC. This filter says: "give me loans where the due date is in the past (less than right now)."

### Step 4: Apply to Each Overdue Loan

Add step → **Apply to each**:
- Select output from previous step: the list of loans from Step 3

Inside the loop, add:

**Sub-step 1:** Get Member Details (the loan record contains a member ID, not the email)
- **Get a row by ID** from Members table
- Row ID: `items('Apply_to_each')?['_cr_member_value']`

**Sub-step 2:** Calculate Days Overdue
- **Compose** action (for calculations)
- Inputs: 
  ```
  @{div(sub(ticks(utcNow()), ticks(items('Apply_to_each')?['cr_due_date'])), 864000000000)}
  ```
  (this calculates days between now and the due date)

**Sub-step 3:** Send Email
- **Send an email (V2)** (using Office 365 Outlook connector)
- To: `outputs('Get_a_row_by_ID')?['cr_email']`
- Subject: `Overdue Library Book — Action Required`
- Body:
  ```
  Dear [Member Name],

  Our records show that the following book is overdue:

  Book: [Book Title]
  Due Date: [Due Date]
  Days Overdue: [Days Overdue]
  Late Fee So Far: ₹[Days Overdue × 5]

  Please return the book at your earliest convenience or contact us to discuss.

  Community Library Team
  ```

**Sub-step 4:** Increment the counter
- **Increment variable** → OverdueCount → add 1

### Step 5: After the Loop — Send Summary to Pooja

After the Apply to each step (outside the loop), add:

**Condition:** Is OverdueCount greater than 0?

If YES:
- **Send email** to Pooja Sharma
- Subject: `Daily Overdue Summary — @{variables('OverdueCount')} overdue loans`
- Body: `@{variables('OverdueCount')} members were sent overdue reminders today.`

If NO:
- No action needed (or optionally, send a "all clear" message)

### Step 6: Test the Flow

1. Click **Save** → **Test** (top right) → **Manually**
2. Click **Run flow**
3. Watch the flow execute step by step — green checkmarks = success

> 💭 **What to do if the flow fails:**
> 1. Click the failed step (shown in red)
> 2. Look at the **Inputs** — what data did the step receive?
> 3. Look at the **Outputs** — what error message did it produce?
> 4. The error message is usually specific: "Connection not authorized," "Record not found," "Invalid filter syntax"
> 5. Fix the specific problem, not just the symptom

---

## HANDS-ON EXERCISE 7: Build the Membership Approval Flow

When a new member registers (a new row is created in the Members table with status "Pending"), the flow asks Pooja for approval.

### Step 1: Create the Flow

**+ New flow** → **Automated cloud flow**
- Trigger: **When a row is added** (Dataverse) → Members table
- Filter: `cr_membership_status eq 'Pending'`

### Step 2: Send an Approval Request

Add step → **Start and wait for an approval**:
- Approval type: **Approve/Reject — First to respond**
- Title: `New Member Registration Approval`
- Assigned to: `pooja.sharma@[yourtenant]`
- Details: 
  ```
  New member registration request:
  Name: @{triggerOutputs()?['body/cr_full_name']}
  Email: @{triggerOutputs()?['body/cr_email']}
  Membership Type: @{triggerOutputs()?['body/cr_membership_type']}
  Registration Date: @{triggerOutputs()?['body/createdon']}
  ```

### Step 3: Handle the Decision

**Condition:** `outcome` is equal to `Approve`

If YES (approved):
- **Update a row** in Members table: set `cr_membership_status` to `Active`
- **Send email** to the new member: "Congratulations! Your library membership has been approved."

If NO (rejected):
- **Update a row** in Members table: set `cr_membership_status` to `Rejected`
- **Send email** to the new member: "Thank you for your interest. Your membership application requires further information. Please contact the library."

> 💭 **System Thinking Question #8:** Pooja approves members by clicking Approve in her email inbox. What are the risks of this approach?
>
> 1. **Pooja goes on vacation.** Nobody approves new members for 2 weeks. Members are stuck "Pending."
> 2. **Pooja's email goes to spam.** She never sees the approval request.
> 3. **The approval email expires.** Many approval systems have a timeout — if not responded to in X days, it auto-rejects.
>
> **Good system design questions to ask:**
> - Who is the backup approver if Pooja is unavailable? (Escalation path)
> - How long should approval wait before timing out?
> - Should un-responded approvals auto-approve or auto-reject?
>
> Add an approver escalation: if Pooja does not respond in 48 hours, send the approval to Sanjay Singh (Senior Librarian) as well.

---

## 🗣️ English Practice — Week 7: Active vs Passive Voice

### Why This Grammar Pattern?

In technical writing, both active and passive voice are used — but for different purposes. Understanding the difference makes your writing clearer and more professional.

**Active voice:** The subject DOES the action.
- "The flow **sends** the overdue reminder email."
- "Power Automate **creates** the loan record."
- "Pooja **approves** the membership request."

**Passive voice:** The action is DONE TO the subject. The "who" is optional or unknown.
- "The overdue reminder email **is sent** by the flow."
- "The loan record **is created** automatically."
- "The membership request **was approved**."

**When to use passive:**
- When who does the action is unimportant or unknown: "The database **was updated** at 7 AM."
- In documentation describing processes: "New members **are approved** within 48 hours."
- When you want to focus on the result, not who caused it: "The connection **was broken** during the import."

**When to use active:**
- In most everyday technical writing (clearer and more direct)
- When responsibility is important: "**Pooja** must approve new members" (not "New members must be approved by Pooja")
- In user instructions: "**Click** the Borrow button" (not "The Borrow button should be clicked by you")

---

### Grammar Practice — Transform Between Active and Passive

**Active → Passive:**
1. "The scheduled flow checks all overdue loans every morning at 7 AM."
   Passive: "All overdue loans ________________________________________________ every morning at 7 AM."

2. "Power Automate sends an approval email to Pooja when a new member registers."
   Passive: "An approval email ________________________________________________ to Pooja when a new member registers."

**Passive → Active:**
3. "The due date is calculated automatically by the system."
   Active: "The system ________________________________________________."

4. "The late fee was determined by the library committee in 2025."
   Active: "The library committee ________________________________________________."

---

### Vocabulary in Sentences

Write one sentence in ACTIVE voice and one in PASSIVE voice for each word:

| Word | Active sentence | Passive sentence |
|------|----------------|-----------------|
| Trigger | | |
| Condition | | |
| Loop | | |
| Child Flow | | |

---

### Writing Exercise: Incident Report

An incident report describes what went wrong, when, what the impact was, and what was done to fix it. This is a critical professional document in technology.

**Template:**
```
INCIDENT REPORT

Date and time: [When it happened]
Reported by: [Your name]
Severity: [Low / Medium / High]

WHAT HAPPENED:
[1-2 sentences describing the problem. Use past tense.]

IMPACT:
[Who was affected? What could they not do?]

ROOT CAUSE:
[Why did it happen? Use "because" or "due to".]

STEPS TAKEN TO RESOLVE:
1. [First thing done]
2. [Second thing done]
3. [Third thing done]

RESOLUTION:
[Was it fixed? When? How do you know it is fixed?]

PREVENTION:
[What will be done to prevent this in future?]
```

Write an incident report for any problem you encountered with the flows this week. If you had no problems, write a fictional one based on the common issues mentioned in the exercises.

---

### 🔊 Read Aloud Exercise

Read this out loud, clearly:

*"At approximately 7:15 AM on October 17, the overdue loan reminder flow failed to complete. The failure was caused by an expired authentication token in the Outlook connector. As a result, 12 overdue reminder emails were not sent to members. The issue was identified when Pooja noticed that the flow run history showed a red 'Failed' status. The Outlook connection was re-authenticated at 9:00 AM. The flow was then triggered manually to resend the missing emails. All 12 emails were successfully delivered by 9:10 AM. To prevent recurrence, a monitoring alert has been configured to notify Pooja if any flow fails for more than 30 minutes."*

After reading: Find 2 sentences in passive voice and 2 in active voice. Write them in your journal.

---

### Professional Communication: The Incident Summary Message

After fixing a problem, send a short Teams message to the team explaining what happened. This builds trust.

**Template:**
```
Hi team,

Quick update on this morning's [flow/app] issue.

WHAT HAPPENED: [1 sentence]
IMPACT: [Who was affected, what they could not do]
STATUS: [Fixed / Under investigation / Monitoring]
RESOLUTION: [What was done to fix it — 1-2 sentences]
PREVENTION: [What will be done to prevent recurrence]

Everything is now working normally. Let me know if you notice any further issues.

[Your name]
```

Write this message for a real or fictional flow failure this week.

---

### 🚫 Common English Mistakes — Week 7

**Mistake 1: Unclear "it" references**

❌ "The flow calls the function and it returns the result and then it sends the email."
✅ "The flow calls the function. **The function** returns the result. **The flow** then sends the email."

Rule: When you use "it" or "they", make sure the reader knows exactly what you are referring to.

**Mistake 2: Passive overuse making sentences unclear**

❌ "The email was sent by the flow that was triggered by the loan that was created by the user."
✅ "When the user creates a loan, **it triggers** the flow, which **sends** a confirmation email."

**Mistake 3: "Prepone" — not standard English**

❌ "Can we prepone the meeting to 9 AM?"
✅ "Can we **move the meeting earlier** to 9 AM?" OR "Can we **reschedule** the meeting to 9 AM?"

"Postpone" (delay to later) is standard English. "Prepone" (move to earlier) is Indian English and not widely understood internationally.

**Mistake 4: Mixing past and present tense in a report**

❌ "The flow failed at 7 AM. I check the error logs and find the token is expired. I re-authenticate and the flow runs again."
✅ "The flow **failed** at 7 AM. I **checked** the error logs and **found** that the token **was** expired. I **re-authenticated** the connection and the flow **ran** successfully again."

Rule: In incident reports and past narratives, stay in past tense throughout.

---

### ✅ Week 7 English Progress Check

- [ ] Can you explain the difference between active and passive voice with one example each?
- [ ] Did you write an incident report this week?
- [ ] Can you identify unclear "it" references in your own writing and fix them?
- [ ] Are you using past tense consistently in your technical log entries?
- [ ] Did you write the incident summary Teams message?

---

---

# WEEK 8: October 22–31
## Model-Driven App + Dataverse Security + Power BI (Personal)

---

## Vocabulary for Week 8

---

**21. Security Role (noun)**
- **Simple meaning:** A named collection of permissions in Dataverse — it defines what records a user can Create, Read, Update, and Delete, and at what scope (just their own records, their team's records, or all records in the organization)
- **Example sentence:** *"The 'Library Member' security role allows: Read all Book records (so members can search the catalog), Create Loan records only for themselves, and Read their own Member record. They cannot see other members' records at all."*

---

**22. CRUD (abbreviation)**
- **Simple meaning:** Create, Read, Update, Delete — the four basic operations you can do on any data
- **Example sentence:** *"Neha (Junior Librarian) has CRUD permissions on Book records but only Read on Loan records. She can add new books but cannot change or delete loan history."*

---

**23. Business Rule (noun)**
- **Simple meaning:** Logic enforced at the Dataverse level — a rule that applies no matter which app (Power Apps, model-driven app, API) touches the data
- **Real-world analogy:** A bank rule that says you cannot withdraw more than your balance. This rule applies whether you use the ATM, the bank's website, or the mobile app — the rule lives at the bank level, not the ATM level.
- **Example sentence:** *"I created a Dataverse business rule: if Total_Copies is changed to less than (Total_Copies - Available_Copies), show an error — 'You cannot reduce total copies below the number currently on loan.'"*

---

**24. View (noun, model-driven app)**
- **Simple meaning:** A saved filter and column configuration for a table — "show me all overdue loans, sorted by member name, showing these 5 columns"
- **Example sentence:** *"I created an 'Overdue Loans' view: filter where Status = Active AND Due_Date < Today, sorted by Due_Date ascending. Every librarian uses this view to see the worst overdue loans first."*

---

**25. DAX (noun)**
- **Simple meaning:** Data Analysis Expressions — a formula language used in Power BI to create calculated measures and columns
- **Real-world analogy:** Excel formulas, but for Power BI. Just as Excel has SUM(), AVERAGE(), IF() — Power BI has DAX versions that work across the entire dataset, not just a cell.
- **Example sentence:** *"I wrote a DAX measure: `Overdue Rate = DIVIDE(COUNTROWS(FILTER(Loans, Loans[Status] = 'Active' && Loans[DueDate] < TODAY())), COUNTROWS(FILTER(Loans, Loans[Status] = 'Active')))`. It shows what percentage of active loans are overdue."*

---

## HANDS-ON EXERCISE 8: Create Dataverse Security Roles

### Step 1: Open Security Roles in Power Apps

1. `make.powerapps.com` → LM-DEV (or Developer Plan environment)
2. Left menu → **Settings** (gear icon top right) → **Advanced settings**
3. Go to **Settings** → **Security** → **Security Roles**

### Step 2: Create "Library Member" Role

1. Click **+ New**
2. Name: `Library Member`

Set permissions on each table:

| Table | Create | Read | Write | Delete | Append | Append To |
|-------|--------|------|-------|--------|--------|-----------|
| Book | None | Organization | None | None | None | None |
| Member | None | User | User | None | None | None |
| Loan | User | User | User | None | None | None |
| Author | None | Organization | None | None | None | None |

**Explanation of scopes:**
- **None** — cannot do this action at all
- **User** — only on records they created or that belong to them
- **Organization** — on ALL records in the organization

**Why Book = Read at Organization scope?**
All members should be able to see the full library catalog — all 50 books, even books Rohit did not create. He needs to browse and search.

**Why Member = Read at User scope?**
Rohit should only see HIS member profile, not Priyanka's or Gaurav's. User scope = only your own records.

**Why Loan = Create + Read + Write at User scope?**
Rohit can create a loan (borrow a book), read his own loans, and write (mark returned) his own loans. He cannot see or touch other members' loans.

### Step 3: Create "Library Staff" Role

| Table | Create | Read | Write | Delete | Append | Append To |
|-------|--------|------|-------|--------|--------|-----------|
| Book | Organization | Organization | Organization | Organization | Organization | Organization |
| Member | Organization | Organization | Organization | None | Organization | Organization |
| Loan | Organization | Organization | Organization | None | Organization | Organization |
| Author | Organization | Organization | Organization | Organization | Organization | Organization |

Staff can do everything except delete Member or Loan records (deletion is restricted — you never delete loan history in a real library system).

### Step 4: Assign Roles to Users

1. Go to **Settings** → **Security** → **Users**
2. Click on **Rohit Verma** → **Manage Roles** → assign `Library Member`
3. Click on **Sanjay Singh** → **Manage Roles** → assign `Library Staff`
4. Click on **Neha Agarwal** → **Manage Roles** → assign `Library Staff`

### Step 5: Test the Security

Sign in as Rohit (in a private browser window using Rohit's credentials):
- Open `make.powerapps.com` → play the Library app
- Can he see all books? ✅ (Organization Read on Book)
- Can he see Priyanka's loans? ❌ (User Read on Loan — he can only see his own)
- Can he add a new book? ❌ (None on Book → Create)

This proves the security works at the data layer — not just the app layer.

> 💭 **System Thinking Question #9:** Why do we secure data at the Dataverse layer and NOT just in the Power Apps formula?
>
> If security is only in the Power Apps formula (`Filter(Loans, cr_member.cr_email = User().Email)`), what happens when:
> - Someone builds a second Power Apps app without that filter?
> - Someone connects Power BI directly to Dataverse?
> - A developer calls the Dataverse API directly from code?
>
> All three bypass the Power Apps formula. The filter is gone. Everyone sees everyone's data.
>
> **Security at the data layer (Dataverse security roles) cannot be bypassed by any app, any tool, or any API.** This is defence in depth — multiple layers of security, so that even if one layer fails, others remain.

---

## HANDS-ON EXERCISE 9: Build the Admin Model-Driven App

A model-driven app is perfect for librarians — it automatically generates tables, views, and forms from your Dataverse data structure.

1. `make.powerapps.com` → **+ New app** → **Model-driven**
2. Name: `Library Admin`
3. In the App Designer, add tables to the sitemap:
   - **Books** (with views: All Books, Books with Low Stock, High-Rated Books)
   - **Members** (with views: All Members, Active Members, Pending Approval, Expired Members)
   - **Loans** (with views: All Loans, Active Loans, Overdue Loans, Today's Returns)
   - **Authors**

4. For the Loans table, create a **Quick Chart:**
   - Chart type: Bar chart
   - Data: Count of loans per Member
   - This shows which members borrow the most

5. **Publish** the app

The model-driven app automatically gives you:
- Searchable grid views with column sorting
- Auto-generated forms for every record
- Related records panels (from the Book form, see all loans for that book)
- Activity feeds and notes
- Business rule enforcement

> 💭 **Canvas App vs Model-Driven App — the final decision framework:**
>
> | Use Canvas App when... | Use Model-Driven App when... |
> |----------------------|------------------------------|
> | You need a specific visual design | You need to manage lots of records quickly |
> | Members use it (non-experts) | Librarians use it (business process experts) |
> | Mobile-first experience | Desktop-first, data-intensive |
> | Custom UX is required | Standard Microsoft forms are good enough |
> | Simple data structure | Complex data with many relationships |
>
> **Real answer:** Most good systems have BOTH — a canvas app for end users and a model-driven app for administrators. You built both. That is the professional architecture.

---

## HANDS-ON EXERCISE 10: Power BI — Build the Library Dashboard (Personal Use)

Without E5 (Power BI Pro), we cannot share reports. But we CAN build and use them personally, and publish to "My Workspace."

### Build the Full Library Dashboard

Connect Power BI to your Dataverse tables (in Power BI Desktop, if you have a Windows machine, or use Power BI Service web interface).

**Page 1: Operations Overview**
- Card: Total Books in Library
- Card: Active Members
- Card: Active Loans Today
- Card: Total Overdue Loans
- Bar Chart: Loans per Month (last 12 months)
- Pie Chart: Books by Genre

**Page 2: Overdue Analysis**
- Table: All overdue loans with member name, book title, days overdue, late fee
- Bar Chart: Members with most overdue loans
- KPI card: Overdue Rate % (with DAX)

**Page 3: Popular Books**
- Bar Chart: Top 10 Most Borrowed Books
- Scatter Plot: Books by Rating vs Borrow Count (shows if popular = highly rated)
- Table: Books with Available_Copies = 0 (waitlist candidates)

**Key DAX measure to write:**

```dax
Overdue Rate =
DIVIDE(
    COUNTROWS(
        FILTER(
            Loans,
            Loans[Status] = "Active" &&
            Loans[Due_Date] < TODAY()
        )
    ),
    COUNTROWS(
        FILTER(
            Loans,
            Loans[Status] = "Active"
        )
    ),
    0
)
```

Format as a percentage. This measure tells you: of all currently active loans, what fraction are overdue? A healthy library should aim for below 10%.

---

## 🗣️ English Practice — Week 8: Comparison Sentences

### Why This Grammar Pattern?

This week you compared canvas apps vs model-driven apps, and evaluated different security options. In professional technical communication, you constantly compare tools, approaches, and design decisions. Learning structured comparison language makes your arguments clearer and more persuasive.

**Comparison structures:**

| Structure | Example |
|-----------|---------|
| X is **more [adjective] than** Y | "A model-driven app is more **efficient** than a canvas app for managing large volumes of records." |
| X is **less [adjective] than** Y | "A canvas app is less **automatic** than a model-driven app in terms of form generation." |
| X is **better for** [use case] | "Canvas apps are **better for** end-user-facing interfaces that need custom design." |
| X is **not as [adjective] as** Y | "SharePoint lists are **not as powerful as** Dataverse for complex business logic." |
| **Unlike** X, Y [verb] | "**Unlike** canvas apps, model-driven apps generate forms automatically from the data structure." |
| **Both** X and Y [verb] | "**Both** canvas apps and model-driven apps connect to the same Dataverse data." |
| **Whereas** X [verb], Y [verb] | "**Whereas** canvas apps give full design control, model-driven apps prioritise speed of development." |

---

### Grammar Practice

Write a comparison sentence for each pair:

1. Canvas App vs Model-Driven App — use "whereas"
   "Whereas canvas apps ________________________________________________, model-driven apps ________________________________________________."

2. Dataverse Security Roles vs Power Apps formula-level security — use "more secure than"
   "Dataverse security roles are more secure than ________________________________________________ because ________________________________________________."

3. Power BI Free vs Power BI Pro — use "unlike"
   "Unlike Power BI Pro, ________________________________________________."

4. Scheduled flow vs Event-driven flow — use "better for"
   "A scheduled flow is better for ________________________________________________, whereas an event-driven flow is better for ________________________________________________."

---

### Vocabulary in Sentences

Write one comparison sentence using each word:

| Word | Write your comparison sentence |
|------|-------------------------------|
| Security Role | |
| CRUD | |
| Business Rule | |
| DAX | |
| View (model-driven) | |

---

### Writing Exercise: Architecture Decision Record (ADR)

When you choose one technical option over another, document WHY. This is called an **Architecture Decision Record** in professional teams. It protects you when someone later asks: "Why did you build it this way?"

**Template:**
```
ARCHITECTURE DECISION RECORD
Decision: [What you decided]
Date: [Date]
Author: [Your name]

CONTEXT:
[Why a decision was needed — what problem or requirement drove this]

OPTIONS CONSIDERED:

Option A: [Name]
  Advantages: [what is good about it]
  Disadvantages: [what is bad about it]

Option B: [Name]
  Advantages: [what is good about it]
  Disadvantages: [what is bad about it]

DECISION: [Option A / B]

REASON: We chose [Option] because [reason]. Unlike [Option not chosen],
[Option chosen] [advantage]. However, we acknowledge the limitation
that [one downside of the chosen option].

REVIEW DATE: [When you will revisit this if circumstances change]
```

Write an ADR for: "Canvas App for Members vs Model-Driven App for Members."

---

### 🔊 Read Aloud Exercise

Read this comparison paragraph out loud:

*"Canvas apps and model-driven apps both connect to the same Dataverse database, but they serve different purposes. A canvas app gives the developer complete control over the visual design — every button, colour, and layout is placed exactly where you want it. This makes canvas apps ideal for member-facing interfaces where first impressions matter and the experience must feel intuitive. A model-driven app, on the other hand, generates its forms and views automatically from the underlying data structure. This makes it less visually flexible but significantly faster to build for administrators who need to manage large numbers of records quickly. For the Community Library, we chose a canvas app for members because they are casual users who need a polished, simple interface, and a model-driven app for librarians because they are power users who need efficient data management above visual design."*

After reading: In your own words, when would YOU choose a canvas app, and when would you choose a model-driven app? Write 3 sentences.

---

### Professional Communication: The Weekly Build Summary

At the end of every week, write a short summary of what you built. Over 4 months, these summaries become your project portfolio — proof of everything you created.

**Template:**
```
WEEKLY BUILD SUMMARY — Week [Number]
Date: [Date]
Written by: [Your name]

THIS WEEK I BUILT:
1. [Thing 1] — [1 sentence describing it]
2. [Thing 2] — [1 sentence describing it]
3. [Thing 3] — [1 sentence describing it]

KEY DECISIONS:
- I chose [Option A] over [Option B] because [reason].

WHAT I LEARNED:
- Technical: [1 concept or insight]
- English: [1 grammar or communication improvement]

WHAT WAS DIFFICULT:
- [Honest description of a real challenge you faced]

WHAT I AM PROUD OF:
- [Something you built that works well]

NEXT WEEK:
- [What you plan to do — specific, not vague]
```

Fill this in for real, for Week 8. In 3 months, you will have 16 of these. They will tell the complete story of how you built this system — and give you material for a portfolio and interview answers.

---

### 🚫 Common English Mistakes — Week 8

**Mistake 1: "More better" / "most best"**

❌ "Canvas apps are more better for end users."
✅ "Canvas apps are **better** for end users."

Rule: Never combine "more" with short adjectives that already have comparative forms:
- good → **better** (not "more good")
- bad → **worse** (not "more bad")
- big → **bigger** (not "more big")

**Mistake 2: "Different than" vs "Different from"**

In most formal and international English:
✅ "Canvas apps are **different from** model-driven apps."
"Different than" is used before a clause:
✅ "The result is **different than** I expected."

**Mistake 3: Forgetting "the" before unique, specific things**

❌ "Admin can see all records in model-driven app."
✅ "**The** admin can see all records in **the** model-driven app."

Rule: Use "the" before things that are specific or unique in context. "The admin" = we know which admin. "The model-driven app" = the specific one we built.

**Mistake 4: "Kindly" overuse**

❌ "Kindly review the security roles. Kindly approve the pull request. Kindly update the documentation."
✅ Use "**Please**" for most requests. Reserve "Kindly" for formal written communications, used at most once per message.

---

### ✅ Week 8 English Progress Check

- [ ] Can you write a comparison between canvas app and model-driven app using 3 different comparison structures?
- [ ] Did you fill in the Weekly Build Summary template?
- [ ] Did you write an Architecture Decision Record for any design choice you made?
- [ ] Are you avoiding "more better", "most best"?
- [ ] Read your Week 5 journal entry — write one sentence about how your English has improved since the start of October.

---

## October Recap — What You Built

By October 31, you have built:
1. ✅ A complete **Canvas App** (Home, Book Detail, My Loans screens)
2. ✅ **Power Fx formulas** with error handling and live data refresh
3. ✅ **Overdue Reminder Flow** (scheduled, loops through all overdue loans)
4. ✅ **Member Approval Flow** (approval workflow with escalation)
5. ✅ **Dataverse Security Roles** (Library Member, Library Staff)
6. ✅ **Model-Driven Admin App** (for librarians)
7. ✅ **Power BI Dashboard** (operations, overdue analysis, popular books)

This is a working system. A real library could use it.

---

## October Vocabulary Master List

| Word | Your definition |
|------|----------------|
| Screen | |
| Gallery | |
| Control | |
| Property | |
| Navigate | |
| Context Variable | |
| Global Variable | |
| Delegation | |
| Formula | |
| Function | |
| Collection | |
| Error Handling | |
| IfError | |
| IsBlank | |
| Trigger (Power Automate) | |
| Condition | |
| Loop | |
| Variable (Power Automate) | |
| Parallel Branch | |
| Child Flow | |
| Security Role | |
| CRUD | |
| Business Rule | |
| View (model-driven) | |
| DAX | |

---

## Looking Ahead: November

In November, we leave the Power Platform portal and enter **Azure** and **GitHub** — the world where software engineers live.

You will learn:
- What a "real" database looks like (Azure SQL)
- What code looks like in a repository (GitHub)
- How teams deploy software safely without breaking production (GitHub Actions, CI/CD)
- How to connect all of this to your Power Platform system

**English goal for November:** Start writing in the **past tense** about what you built. You will write a short "project log" — like an engineer's notebook:

*"On November 3, I created an Azure SQL database named 'LibraryDB' in the East India region. I chose East India because it is the closest Azure region to our learners. The database has a free tier of 250 GB. I created the Books table with the same columns as Dataverse but in SQL syntax."*

This habit — writing technical logs in English — is exactly what senior engineers do in real projects. It builds your English AND your professional practice simultaneously.

---

*Phase 2 complete. Open `03-phase-november.md` when ready.*

*October 1 – October 31, 2026*
*Prerequisite for November: GitHub account created, Azure free account active, complete library app built and working.*
