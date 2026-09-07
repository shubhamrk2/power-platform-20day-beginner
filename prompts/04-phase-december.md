# Phase 4: AI Integration + Final Capstone
## December 1 – December 31, 2026
### Making the System Intelligent — and Presenting What You Built

---

> **You have built a complete system. You have built the pipes. This month, you make the pipes think. AI is not a separate tool — it is a layer you add to everything you already have. The canvas app becomes smarter. The chatbot becomes genuinely useful. The flows make decisions. By December 31, you will have a system that would impress any technology employer — and the ability to explain every single choice you made. That is the skill that nobody can take from you.**

---

## What "AI" Really Means (Before We Touch Any Tool)

Before December starts, let us be very clear about what AI is and is not. Most people are confused by this word.

### AI is not magic

AI is mathematics. Specifically, it is statistics — very sophisticated statistics.

When a chatbot reads your question and gives an answer, it is doing this:
1. Your question is broken into numbers (this is called "tokenization")
2. A very large mathematical model trained on billions of sentences finds the most likely next word, then the next, then the next
3. Those words are assembled into a response

The AI does not "know" anything in the way a human knows things. It has seen patterns in text and learned which words tend to follow which other words, in which context. It is extremely good at this — good enough that the output seems like understanding.

### What AI does well
- Generating natural-sounding text
- Summarizing long documents
- Translating between languages
- Classifying inputs into categories
- Extracting specific information from unstructured text
- Predicting patterns in data

### What AI does badly
- Knowing current facts (it only knows what was in its training data)
- Doing precise arithmetic reliably
- Following strict business rules without error
- Knowing when it is wrong (it can be confidently incorrect)
- Respecting data privacy if not carefully configured

> 💭 **The most important question to ask about any AI feature:** "What happens when the AI is wrong?" Every AI feature needs a fallback — a way for humans to catch and correct AI errors before they affect real people.

---

## December Week-by-Week Plan

| Week | Dates | Focus |
|------|-------|-------|
| Week 13 | Dec 1–7 | AI Builder (Power Platform) + Azure AI Services |
| Week 14 | Dec 8–14 | Copilot Studio Advanced — AI that takes actions |
| Week 15 | Dec 15–21 | AI in DevOps + GitHub Copilot concepts + AI ethics |
| Week 16 | Dec 22–31 | Final Capstone + System Design Document + Career Preparation |

---

---

# WEEK 13: December 1–7
## AI Builder + Azure AI Services — Bringing Intelligence to Every Layer

---

## Vocabulary for Week 13

---

**1. Machine Learning (noun)**
- **Simple meaning:** A category of AI where a computer learns patterns from examples instead of being given explicit rules
- **Real-world analogy:** Teaching a child to recognize cats. You do not give the child a list of rules ("cats have four legs, pointed ears, fur"). You show them thousands of pictures of cats and say "cat" each time. After many examples, the child can recognize cats in new pictures they have never seen.
- **Example sentence:** *"The AI Builder model learned to recognize overdue notices by looking at 200 examples of overdue notices and 200 examples of other documents. Now it can classify new documents with 94% accuracy."*

---

**2. Model (noun, in AI)**
- **Simple meaning:** The result of machine learning — the mathematical structure that learned from examples and can now make predictions on new data
- **Real-world analogy:** A doctor who has treated 10,000 patients. All those cases are their "training data." Their medical judgment is the "model" — a pattern-recognition system built from experience.
- **Example sentence:** *"I trained an AI Builder model to classify library book return condition: Good, Damaged, or Lost. The model is a file that stores what it learned. I deploy this model to production and it classifies 100 book returns per day automatically."*

---

**3. Training (noun/verb, in AI)**
- **Simple meaning:** The process of teaching an AI model by showing it many labeled examples
- **Example sentence:** *"Training the membership form reader took 45 minutes: I uploaded 50 completed membership forms, highlighted the Name, Email, and Phone fields on each form, and clicked Train. The model learned where these fields are on the form."*

---

**4. Prediction (noun)**
- **Simple meaning:** The AI model's output — what it thinks the answer is for a new input
- **Example sentence:** *"I sent a new membership form to the trained model. The model's prediction: Name = 'Aditya Kumar', Email = 'aditya.kumar@email.com', Phone = '+91-9876501234', Confidence = 97%. The 97% confidence means the model is highly certain about this prediction."*

---

**5. Confidence Score (noun)**
- **Simple meaning:** A percentage that tells you how certain the AI is about its prediction — 99% means very sure, 40% means unsure
- **Critical rule:** Always set a minimum confidence threshold below which you ask a human to verify. Never automatically trust a prediction below 70%.
- **Example sentence:** *"The form reader returned a phone number with 42% confidence. The flow is programmed: if confidence < 70%, send the form to Pooja for manual review. If confidence ≥ 70%, save the extracted data automatically."*

---

**6. Azure AI Language (noun)**
- **Simple meaning:** An Azure service that understands text — it can detect language, analyze sentiment, extract key information, and answer questions from documents
- **Example sentence:** *"I used Azure AI Language to analyze member complaint emails. The service returns: sentiment = 'negative', key phrases = ['damaged book', 'spine broken', 'replacement request']. The flow automatically routes high-priority negative sentiment emails to Pooja."*

---

**7. Sentiment Analysis (noun)**
- **Simple meaning:** AI-powered analysis of whether text is positive, negative, or neutral
- **Real-world analogy:** A mood ring — but for text. It does not always get it right, but it gives you a quick indicator.
- **Example sentence:** *"I ran sentiment analysis on 6 months of member feedback forms. Result: 72% positive (members happy), 18% neutral, 10% negative. The negative feedback cluster around two themes: parking (outside our control) and late fee amounts (actionable)."*

---

**8. Named Entity Recognition — NER (noun)**
- **Simple meaning:** AI that identifies specific types of information in text — names, dates, amounts, locations, organizations
- **Example sentence:** *"I used NER on member emails to automatically extract: who they are mentioning (person names), which books they are discussing (titles), and what dates they reference. The flow uses these extracted entities to link the email to the correct Dataverse records."*

---

## CONCEPT: AI Builder — AI Inside Power Platform, No Code Required

AI Builder is Microsoft's point-and-click AI tool inside Power Platform. It gives you pre-trained AI models AND the ability to train your own — all without writing a single line of Python or machine learning code.

### Pre-Built Models (Ready to Use Today)

| Model | What It Does | Library Use Case |
|-------|-------------|-----------------|
| **Business Card Reader** | Extracts info from business cards | When new member brings their card |
| **Text Recognition (OCR)** | Reads text from images and PDFs | Digitize old handwritten loan records |
| **Sentiment Analysis** | Detects positive/negative/neutral | Analyze member feedback |
| **Language Detection** | Identifies which language text is in | Handle multilingual book inquiries |
| **Category Classification** | Classifies text into categories | Auto-categorize member support emails |

### Custom Models (You Train Them)

| Model Type | What You Train | Library Use Case |
|-----------|---------------|-----------------|
| **Document Processing** | Upload sample forms, label fields | Read membership application forms |
| **Object Detection** | Label objects in images | Detect book damage from photos |
| **Text Classification** | Classify your own categories | Classify book return conditions |
| **Prediction** | Predict outcomes from data | Predict which members are likely to go overdue |

> 💭 **System Thinking Question #1:** AI Builder models cost "AI credits" from your Microsoft license. Each prediction uses credits. What happens when credits run out?
>
> The AI features stop working. If your overdue email classification flow depends on AI Builder, and credits run out mid-month, emails stop being classified.
>
> **Good system design:**
> 1. Monitor credit consumption monthly
> 2. Have a fallback: if AI is unavailable, process manually (or with a simple rule: all emails from members are flagged for human review)
> 3. AI should be an enhancement, not a single point of failure
>
> The principle: **AI should make your system better, not make your system fragile.**

---

## HANDS-ON EXERCISE 1: Train a Document Processing Model

This model will read membership application forms and automatically extract fields.

### Step 1: Create Sample Forms

Create 5–10 PDF or image files that look like membership application forms. They should have:
- Full Name
- Email
- Phone
- Membership Type (checkbox: Standard / Premium / Student)
- Date

You can create these in Word and save as PDF, or scan handwritten forms.

### Step 2: Train the Model

1. `make.powerapps.com` → left menu → **AI hub** (or **AI Builder**)
2. Click **+ New model** → **Document processing**
3. Name: `Membership Form Reader`
4. Upload your sample forms
5. On each form, draw a box around each field:
   - Draw box around the name → label it "FullName"
   - Draw box around email → label it "Email"
   - Etc.
6. After all forms are labeled → click **Train**
7. Wait 15–30 minutes for training to complete

### Step 3: Test the Model

1. After training, click **Quick test**
2. Upload a new form (one the model has NOT seen during training)
3. See the extracted fields and confidence scores

### Step 4: Use the Model in a Power Automate Flow

1. Create a new flow: **When a new email arrives** (with membership form attachment)
2. Add step: **Predict** (AI Builder) → select your Membership Form Reader model
3. Input: the email attachment
4. Extract the fields: FullName, Email, Phone, MembershipType
5. Add step: **Create a row in Dataverse** → Members table → use extracted fields
6. Add condition: if confidence < 70% → send to Pooja for manual review

> 💭 **What you just built:**
> A new member scans and emails their membership form. Power Automate receives the email, AI Builder reads the form, extracts the member's information, and creates the member record in Dataverse. If the AI is not confident enough, a human reviews it.
>
> This is AI augmenting a human workflow — not replacing humans entirely. The human is still in the loop for low-confidence cases. This is responsible AI design.

---

## HANDS-ON EXERCISE 2: Azure AI Language — Sentiment Analysis on Member Feedback

### Step 1: Create Azure AI Language Resource

1. Azure Portal → search **Language service** → **+ Create**
2. Resource group: `rg-community-library`
3. Region: `Central India`
4. Pricing tier: **Free (F0)** — 5,000 transactions/month free
5. Click **Review + Create** → **Create**

### Step 2: Get the API Key and Endpoint

1. Go to your Language resource → **Keys and Endpoint**
2. Copy Key 1 and the Endpoint URL
3. Store in GitHub Secrets: `AZURE_AI_KEY` and `AZURE_AI_ENDPOINT`

### Step 3: Call Sentiment Analysis from Power Automate

1. Create a flow: **When a new row is added** to a "MemberFeedback" Dataverse table
2. Add step → **HTTP** connector:
   - Method: POST
   - URI: `[your endpoint]/text/analytics/v3.1/sentiment`
   - Headers:
     - `Ocp-Apim-Subscription-Key`: `[your AI key]`
     - `Content-Type`: `application/json`
   - Body:
     ```json
     {
       "documents": [
         {
           "id": "1",
           "language": "en",
           "text": "@{triggerOutputs()?['body/cr_feedback_text']}"
         }
       ]
     }
     ```
3. Parse the JSON response — it returns:
   ```json
   {
     "sentiment": "negative",
     "confidenceScores": {"positive": 0.02, "neutral": 0.05, "negative": 0.93}
   }
   ```
4. Update the MemberFeedback row with the sentiment and confidence scores
5. Condition: if sentiment = "negative" AND confidence > 0.80 → send alert email to Pooja

Now every piece of member feedback is automatically analyzed. Pooja sees a weekly report: "This week — 85% positive feedback. 2 high-confidence negative feedbacks require attention."

---

## HANDS-ON EXERCISE 3: Prediction Model — Which Members Are at Risk of Going Overdue?

This is the most advanced AI exercise. We use AI Builder's Prediction model to predict which members are likely to have an overdue loan next month, based on their history.

### The Training Data

For this model, we need historical data. The `loans.csv` file from the sample data is perfect.

From each loan record, we want features (inputs) and a label (what we want to predict):

| Feature | Why It Matters |
|---------|----------------|
| MembershipType | Premium members may be more responsible |
| TotalPreviousLoans | Active borrowers have more history |
| PreviousOverdueCount | Past behavior predicts future behavior |
| DaysSinceLastReturn | Irregular returners may go overdue again |
| AverageHoldDuration | How long do they typically keep books? |
| **Label (what to predict)** | WentOverdue (Yes/No) for this loan |

### Train the Model

1. AI Builder → **+ New model** → **Prediction**
2. Upload the enriched loans CSV (with the features above)
3. Select the target column: `WentOverdue`
4. AI Builder automatically:
   - Splits data into training (80%) and test (20%)
   - Tries multiple algorithms
   - Picks the best performing one
   - Gives you an accuracy score and feature importance chart

5. Look at the **Feature Importance** chart — which features most predict overdue loans?

> 💭 **System Thinking Question #2:** If the model says "PreviousOverdueCount" is the most important predictor, what should the library do with this information?
>
> Option A: Block members with high overdue counts from borrowing (punitive)
> Option B: Send proactive reminders to high-risk members earlier (preventive)
> Option C: Offer high-risk members a shorter loan period (adaptive)
> Option D: Call high-risk members personally when a book is due (personalized)
>
> All four are valid responses — they just reflect different library philosophies. The AI gives you the insight. YOU (and the library team) decide what to do with it.
>
> **This is the correct relationship between AI and humans.** AI finds patterns. Humans make policy decisions. Never automate the policy decision itself based purely on AI — especially when it affects people's access to services.

---

## 🗣️ English Practice — Week 13: Hedging Language — Speaking Carefully About Uncertainty

### Why This Grammar Pattern?

AI is powerful — but it is NOT certain. One of the most important professional skills when working with AI is knowing how to communicate about things that are PROBABLE but not GUARANTEED. This is called **hedging language** — language that expresses appropriate uncertainty.

**Without hedging (overconfident — dangerous):**
- "The AI model correctly identifies all overdue members."
- "The sentiment analysis always detects negative feedback."
- "The prediction model will prevent all late returns."

**With hedging (accurate — professional):**
- "The AI model **correctly identifies most** overdue members, **with an accuracy of approximately** 94% on our test data."
- "The sentiment analysis **tends to detect** negative feedback effectively, **though it may miss** sarcasm or culturally specific expressions."
- "The prediction model **can help reduce** late returns **in many cases**, **though it should not be** the sole basis for restricting member access."

---

### Key Hedging Words and Phrases

| Category | Words | Example |
|----------|-------|---------|
| **Frequency** (how often) | usually, generally, often, sometimes, rarely | "The model **generally** returns results within 200ms." |
| **Certainty** (how sure) | likely, probably, possibly, may, might, could | "Low confidence scores **may indicate** a poor quality form scan." |
| **Approximation** (how exact) | approximately, around, about, roughly, up to | "Training takes **approximately** 30 minutes." |
| **Limitation** (what it cannot do) | in most cases, under normal conditions, when properly configured | "The form reader works well **in most cases**, but **may struggle with** handwritten text." |
| **Source** (where the information comes from) | according to, based on, our data suggests | "**Based on** our test dataset, the model achieved 94% accuracy." |

---

### Grammar Practice

Rewrite these overconfident sentences using hedging language:

1. ❌ "The AI model perfectly predicts which members will go overdue."
   ✅ "The AI model ________________________________________________."

2. ❌ "Sentiment analysis always detects when a member is angry."
   ✅ "Sentiment analysis ________________________________________________."

3. ❌ "The confidence score tells you whether the prediction is right."
   ✅ "The confidence score ________________________________________________."

4. ❌ "AI will replace the need for human review of membership forms."
   ✅ "AI ________________________________________________."

5. ❌ "The chatbot answers every question correctly."
   ✅ "The chatbot ________________________________________________."

---

### Vocabulary in Sentences (with hedging)

For each AI word, write one sentence that includes appropriate hedging:

| Word | Write your hedged sentence |
|------|---------------------------|
| Machine Learning | |
| Confidence Score | |
| Prediction | |
| Sentiment Analysis | |
| Training | |

**Example:** Word: Model → *"The document processing model **generally** extracts field values with high accuracy, **though it may occasionally misread** handwritten text or fields that are partially covered by a stamp."*

---

### Writing Exercise: The AI Model Card

An **AI Model Card** is a document that describes an AI model honestly — what it does, how accurate it is, what its limitations are, and when NOT to use it. Every responsible AI deployment should have one.

**Write a Model Card for the Overdue Prediction model you built this week:**

```
# AI Model Card: Overdue Loan Predictor

## Purpose
This model [describe what it predicts and why — use hedging].

## Training Data
- Source: [Where the data came from]
- Size: [Number of records]
- Date range: [Time period covered]
- Potential biases: [What groups or patterns may be underrepresented]

## Performance
- Accuracy: approximately [X]% on test data
- The model tends to perform better when: [conditions]
- The model may perform less well when: [conditions]

## What This Model Should Be Used For
- ✅ [Appropriate use 1]
- ✅ [Appropriate use 2]

## What This Model Should NOT Be Used For
- ❌ [Inappropriate use 1 — and why]
- ❌ [Inappropriate use 2 — and why]

## Human Oversight Required
Decisions based on this model's predictions should [describe what human review is needed].

## Limitations
- [Limitation 1 — with hedging language]
- [Limitation 2 — with hedging language]
- [Limitation 3 — with hedging language]

## Contact
Questions about this model: [Your name]
Last reviewed: [Date]
```

---

### 🔊 Read Aloud Exercise

Read this out loud as if you are presenting AI findings to a library management committee who do not know much about technology:

*"I would like to share the results of our AI analysis of library loan patterns. Based on the past 18 months of data, our prediction model suggests that approximately 12% of new members are at higher risk of returning books late. I want to be clear: this does not mean these members will definitely go overdue — it means they share characteristics with members who have gone overdue in the past. This is a probabilistic estimate, not a certainty. Our recommendation is to use this information to send earlier reminders to these members — not to restrict their access. We believe this approach can help reduce overdue rates while treating all members fairly. We will review the model's effectiveness in 3 months and report back to this committee."*

After reading: Write the 3 most important points from this presentation in your journal — using hedging language.

---

### Professional Communication: Presenting AI Findings to a Manager

When you present AI results to a non-technical manager, your goal is to be honest about both what the AI can do AND what it cannot do.

**Template:**
```
Subject: AI Analysis Results — [What Was Analysed] — [Date]

Hi [Manager's name],

I have completed the [name of AI analysis] and wanted to share the key findings.

WHAT WE ANALYSED:
[1-2 sentences: what data, what question we asked the AI]

KEY FINDINGS:
- [Finding 1 — with appropriate hedging]
- [Finding 2 — with appropriate hedging]
- [Finding 3 — with appropriate hedging]

CONFIDENCE IN THESE FINDINGS:
The results are based on [data size and quality]. [1 sentence acknowledging any limitations in the data or model.]

RECOMMENDED ACTION:
Based on these findings, I suggest [specific action]. This is a recommendation, not an automated decision — final approval should come from [who].

WHAT THE AI CANNOT TELL US:
[1-2 sentences about what is outside the scope of this analysis]

Please let me know if you have questions or would like to discuss further.

[Your name]
```

---

### 🚫 Common English Mistakes — Week 13

**Mistake 1: "The AI thinks / believes / knows"**

AI does not think, believe, or know. Use accurate language:
❌ "The AI thinks this member will go overdue."
✅ "The model **predicts** that this member has a higher risk of going overdue." OR "The model **indicates** a higher overdue risk for this member."

**Mistake 2: Confusing "accuracy" and "precision"**

In everyday English, these are synonyms. In AI, they have different meanings:
- **Accuracy** = of all predictions, what fraction were correct overall
- **Precision** = of all predictions that said "overdue", what fraction were actually overdue

For your AI model card, always specify which metric you are reporting.

**Mistake 3: Reporting only the success rate**

❌ "Our model is 94% accurate."
✅ "Our model is **approximately** 94% accurate **on our test dataset of 200 loan records**. This accuracy **may vary** on new data, particularly if member behaviour or library policies change."

Always include: approximately, on what data, and what could change the accuracy.

**Mistake 4: "AI is intelligent"**

❌ "The AI is intelligent enough to understand member behaviour."
✅ "The model **identifies statistical patterns** in historical member behaviour."

AI is not intelligent in the human sense. Use precise language: identifies patterns, predicts, classifies, generates text.

---

### ✅ Week 13 English Progress Check

- [ ] Can you write 5 hedged sentences about the AI tools you used this week?
- [ ] Did you write an AI Model Card for the overdue prediction model?
- [ ] Did you write a "presenting AI findings" email to a fictional manager?
- [ ] Are you using "predicts", "suggests", "indicates" instead of "thinks", "believes", "knows" for AI?
- [ ] Can you explain what a confidence score is, using the words "approximately" and "may"?

---

---

# WEEK 14: December 8–14
## Copilot Studio Advanced — A Chatbot That Takes Actions

---

## Vocabulary for Week 14

---

**9. Generative AI (noun)**
- **Simple meaning:** AI that creates new content — text, images, code — rather than just classifying or analyzing existing content
- **Real-world analogy:** The difference between a librarian who looks up answers in a reference book (traditional AI) and a librarian who explains concepts in their own words (generative AI).
- **Example sentence:** *"Copilot Studio's generative answers feature uses generative AI — it does not just retrieve a stored answer. It reads our borrowing policy and writes a fresh, conversational answer for each question."*

---

**10. Conversational Design (noun)**
- **Simple meaning:** The practice of designing how a conversation between a user and a bot flows — what the bot says, when it asks for clarification, how it handles misunderstandings
- **Real-world analogy:** Writing a script for a telephone helpline. If the caller says X, the agent responds Y. If the caller seems confused, the agent says Z. The script is conversational design.
- **Example sentence:** *"Good conversational design means the bot does not ask 5 questions at once. It asks one, waits for the answer, then asks the next. This feels like talking to a person, not filling out a form."*

---

**11. Escalation (noun)**
- **Simple meaning:** When the chatbot cannot handle a request and transfers the user to a human agent
- **Critical design principle:** Every chatbot MUST have a clear escalation path. Users get frustrated when the bot loops endlessly and never offers a human.
- **Example sentence:** *"If a member asks 'I lost a book and cannot afford to pay the replacement fee,' the bot escalates to Pooja — this requires human judgment, empathy, and possibly a payment plan discussion that no bot should handle."*

---

**12. Slot Filling (noun)**
- **Simple meaning:** When the bot needs multiple pieces of information and collects them one by one in a conversation
- **Example sentence:** *"To reserve a book, the bot needs: book title, member ID, and preferred pickup date. Slot filling means the bot asks for each piece of information it is missing, in a natural way, until it has everything needed."*

---

## CONCEPT: From Question-Answering Bot to Action-Taking Agent

In September, we built a Library Helper bot that answered questions from knowledge documents. That was impressive — but limited.

In December, we build an **agent** — a bot that not only answers questions but also DOES THINGS:

| September Bot (Q&A) | December Agent (Action-Taking) |
|---------------------|-------------------------------|
| "What is the borrowing limit?" → reads policy | "What is my current loan status?" → queries Dataverse |
| "What are library hours?" → reads FAQ | "Renew my loan for Atomic Habits" → updates Dataverse record |
| "How do I report a damaged book?" → gives instructions | "I want to report a damaged book" → creates a Dataverse record AND emails Pooja |
| "What books do you have on AI?" → static answer | "What books do you have on AI?" → searches the live book catalog |

The difference is **live data access** and **write operations**. The September bot read documents. The December agent reads live databases and creates records.

This is the direction AI is moving: from chatbots that answer to **agents** that act.

---

## HANDS-ON EXERCISE 4: Rebuild the Library Helper as an Action-Taking Agent

We are not starting from scratch — we are enhancing what we built in September. Open your Copilot Studio agent.

### Enhancement 1: "What is my loan status?" — Live Dataverse Query

**New Topic:** `My Loan Status`

**Trigger phrases:**
```
my loan status
my borrowed books
what have I borrowed
are any of my books overdue
my account
```

**Conversation flow:**

1. Bot asks: "I can look up your account. Please share the email you registered with the library."
2. User types their email
3. Bot calls **Power Automate** (via Action):
   - Flow: "Get Member Loans by Email"
   - This flow:
     - Queries Members table: find member where Email = [user's email]
     - If found: queries Loans table: all active loans for this member
     - Returns: list of loans with book titles, due dates, days remaining
4. Bot displays the results:
   ```
   You currently have 2 active loans:
   
   📚 Atomic Habits — Due November 30 (15 days remaining)
   📚 Sapiens — Due October 25 (OVERDUE by 12 days, fee: ₹60)
   
   Would you like help paying the late fee or renewing a loan?
   ```

**The Power Automate flow used by this topic:**

Create a flow triggered by HTTP:
- Input: `memberEmail` (string)
- Query Dataverse: `Filter(Members, cr_email = memberEmail)` → get MemberID
- Query Dataverse: `Filter(Loans, cr_member = MemberID, cr_status = "Active")` → get loans
- For each loan: calculate days overdue or days remaining
- Return JSON array of loans
- Output: the JSON to Copilot Studio

> 💭 **System Thinking Question #3:** The user types their email in the chatbot. What are the security risks?
>
> 1. **Privacy:** The user types their email in Teams chat. Teams logs all messages. An admin can read what Gaurav typed. Is this acceptable?
> 2. **Impersonation:** Rohit could type Priyanka's email and see her loan status. Nothing in this flow verifies that the person typing is actually the owner of that email.
>
> **Better approach:** Use the bot's built-in identity (Teams knows who is logged in). Instead of asking for email, the flow uses `@{triggeredBy/userPrincipalName}` — the logged-in user's email, automatically. This cannot be spoofed.
>
> **In the enhanced flow:**
> - Do NOT ask the user for their email
> - Use the Teams identity: the bot's authentication session tells you who the user is
> - This is called **authenticated access** — every serious chatbot uses it

### Enhancement 2: "Renew My Loan" — Write Operation

**New Topic:** `Renew Loan`

**Trigger phrases:**
```
renew my book
extend my loan
I need more time
renew
extend
```

**Conversation flow:**

1. Bot: "Which book would you like to renew? Here are your current loans: [list]"
2. User selects a book (or types the title)
3. Bot checks: is renewal allowed? (Library policy: max 1 renewal per book, and only if not overdue)
4. If allowed:
   - Power Automate flow: Update the Loan's DueDate = current DueDate + 14 days
   - Bot: "Done! Atomic Habits is now due on December 15."
5. If not allowed (already renewed or overdue):
   - Bot: "I'm sorry, this loan cannot be renewed — it has already been renewed once, or it is overdue. Please return the book or contact a librarian."

> 💭 **Why does the "max 1 renewal" rule live in Power Automate (or Dataverse) and NOT in the bot's conversation flow?**
>
> If the rule is in the conversation flow (the bot's Topics), then the rule only applies when users talk to the bot. But what if a librarian renews a loan directly through the model-driven app? What if a Power Automate flow automatically renews a loan? Those paths do not go through the bot.
>
> The renewal rule must be a **Dataverse Business Rule** or enforced in the Power Automate flow — so that ALL paths respect it. The bot is just one entry point. Business rules belong to the data layer.

### Enhancement 3: "Report a Problem" — Creates a Record + Escalates

**New Topic:** `Report a Problem`

**Conversation flow with slot filling:**

1. Bot: "I'm sorry to hear you're having a problem. Let me help you report it."
2. Bot asks (slot filling):
   - "What type of problem? (1) Damaged book (2) Missing book (3) Billing issue (4) App problem (5) Other"
   - "Please describe the problem briefly."
   - "Which book is this about? (if applicable)"
3. Bot creates a "MemberIssue" record in Dataverse:
   - MemberID, IssueType, Description, BookID, DateReported, Status = "Open"
4. Bot: "I've logged your issue (Reference #12345). A librarian will contact you within 2 working days."
5. Power Automate sends email to Pooja with the issue details
6. For **Billing issues**: bot adds escalation message: "For billing concerns, you can also speak with a librarian directly at your next visit or call +91-[number]."

---

## HANDS-ON EXERCISE 5: Copilot Studio + Azure OpenAI (Advanced, Free Tier)

Azure OpenAI has a free tier for some regions. We can connect Copilot Studio to Azure OpenAI for even more powerful generative answers.

> **Note:** Azure OpenAI may not be in the free tier depending on your region. Check `azure.microsoft.com/pricing/details/cognitive-services/openai-service/` for current free tier availability. If not free, skip this exercise — it is optional.

If available:
1. Azure Portal → search **Azure OpenAI** → **+ Create**
2. Choose the free tier (if shown)
3. Deploy a model: `gpt-4o-mini` (cheapest/free tier model)
4. In Copilot Studio → **Settings** → **Generative AI** → connect to your Azure OpenAI deployment

This gives your Library Helper access to a larger language model than the default — better at complex questions, better at understanding unusual phrasings.

> 💭 **System Thinking Question #4:** If GPT-4 gives better answers than the default Copilot Studio model, why doesn't Microsoft just use GPT-4 for everything?
>
> **Cost:** GPT-4 costs significantly more per query than smaller models. If the library bot answers 1,000 questions per day and each question costs ₹0.05 with GPT-4 but ₹0.005 with a smaller model, the annual cost difference is ₹16,000 vs ₹1,600.
>
> **Latency:** Larger models take longer to respond. GPT-4 may take 2–4 seconds. A smaller model may take 0.5 seconds. In a chatbot, users notice a 3-second delay.
>
> **Privacy:** For sensitive systems, you may not want your data sent to GPT-4's servers. Azure OpenAI keeps data within Azure (and your chosen region). This is a compliance requirement for many companies.
>
> Model choice is always a trade-off between quality, cost, speed, and privacy. The "best" model is the one that meets your specific requirements at acceptable cost — not always the most powerful one.

---

## 🗣️ English Practice — Week 14: Problem-Solution Structure

### Why This Grammar Pattern?

Every good chatbot was designed to solve a specific problem. Every feature you build as an engineer exists because there was a problem to solve. Being able to describe a problem clearly and explain your solution is one of the most valuable professional skills.

**The Problem-Solution Structure:**

```
1. THE PROBLEM: "The problem was that..." / "Users faced the challenge of..." / "Without X, users could not..."
2. WHY IT MATTERED: "This meant that..." / "As a result,..." / "The impact was..."
3. THE SOLUTION: "To solve this, we..." / "The solution was to..." / "We addressed this by..."
4. HOW IT WORKS: "This works because..." / "The mechanism is..." / "When a user X, the system Y..."
5. THE RESULT: "As a result,..." / "Now, users can..." / "This reduced / improved / enabled..."
6. THE LIMITATION: "However, this approach has the limitation that..." / "One area for improvement is..."
```

**Example:**

*"The problem was that library members had no way to check book availability after library hours without calling a librarian the next day. This meant that members often arrived at the library only to find their desired book was already on loan — a frustrating and wasteful experience. To solve this, we built a Copilot Studio chatbot that connects directly to the live Dataverse database. This works because when a user asks 'Is Atomic Habits available?', the chatbot calls a Power Automate flow that queries the Books table in real time and returns the current Available_Copies count. As a result, members can now check availability 24 hours a day from any device with Teams. However, this approach has the limitation that it requires members to have a Teams account — members without Teams access must still call during library hours."*

---

### Grammar Practice

Write a problem-solution paragraph (using all 6 parts of the structure) for ONE of these chatbot features you built:

Option A: The "Renew Loan" topic that updates the due date
Option B: The "Report a Problem" topic that creates a Dataverse record
Option C: The escalation path to a human librarian

Use connectors from the structure: "The problem was...", "This meant that...", "To solve this...", "This works because...", "As a result...", "However..."

---

### Vocabulary in Sentences (problem-solution format)

Write one problem-solution sentence for each word:

| Word | Write: "Without [word], [problem]. To solve this, [solution]." |
|------|----------------------------------------------------------------|
| Topic (Copilot Studio) | |
| Trigger Phrase | |
| Generative Answers | |
| Escalation | |
| Slot Filling | |

---

### Writing Exercise: User Guide for the Library Helper Chatbot

A user guide explains HOW to use something, for people who have never used it before. Write a user guide section for library members explaining how to use the Library Helper chatbot.

**Key principles:**
- Write for a person who has never used a chatbot
- Use simple vocabulary — no technical words the user does not need
- Use imperative sentences for instructions (Open, Type, Click, Wait)
- Use hedging for AI: "The chatbot can usually answer...", "If the chatbot cannot help..."

**Template:**
```
# Library Helper — Member Guide

## What is the Library Helper?
[2-3 sentences describing the chatbot in completely non-technical language]

## How to Open the Library Helper
[3-4 steps: where to find it, how to start a conversation]

## What You Can Ask
The Library Helper can help you with:
- [Topic 1 — plain English description, example question]
- [Topic 2 — plain English description, example question]
- [Topic 3 — plain English description, example question]

## What the Library Helper Cannot Do
The Library Helper cannot:
- [Limitation 1]
- [Limitation 2]
If you need help with something not on this list, [how to contact a librarian].

## Tips for Getting Good Answers
- [Tip 1: how to phrase questions well]
- [Tip 2: what to do if the answer is wrong]
- [Tip 3: how to speak to a human if needed]

## Privacy Note
[1-2 sentences: what data the chatbot sees and does not share]
```

---

### 🔊 Read Aloud Exercise

Read this problem-solution explanation out loud, pausing at each full stop:

*"One of the key design challenges in building the Library Helper chatbot was deciding when to use a scripted topic versus generative AI answers. The problem with using generative AI for everything was reliability — when a member asks 'How much is the late fee?', the AI might read the policy document and give an approximate or slightly wrong answer, which could cause disputes. The problem with scripting everything was coverage — there are hundreds of possible questions, and writing a scripted topic for each one would take months. Our solution was a hybrid approach: we use scripted topics for questions that require precise answers or live data queries, and generative AI for general information questions where a slightly imprecise but broadly correct answer is acceptable. This works because scripted topics give us control over critical information, while generative AI handles the long tail of unpredictable questions. The result is a chatbot that is both reliable for high-stakes questions and flexible enough for general enquiries. The limitation is that the boundary between 'precise' and 'general' is not always obvious, and we will need to monitor chat logs and adjust topics over time."*

After reading: Identify the 6 parts of the problem-solution structure in this paragraph. Write which sentence belongs to which part in your journal.

---

### Professional Communication: The System Demonstration Script

When you demonstrate a system to stakeholders, having a prepared script prevents panic and ensures you show the most impressive parts first.

**Template:**
```
DEMO SCRIPT: Library Helper Chatbot
Audience: [Who you are presenting to]
Duration: Approximately [X] minutes

OPENING (30 seconds):
"Today I would like to show you the Library Helper — a chatbot that [what it does in one sentence]. 
The purpose of this demonstration is to [what you want the audience to understand or decide]."

DEMO PART 1 — Basic Questions (2 minutes):
[What you will show: which question to type, what you expect the bot to say]
Script: "I will start by showing a simple question about borrowing policy..."

DEMO PART 2 — Live Data Query (2 minutes):
[What you will show: the loan status or book availability feature]
Script: "Now I will show how the chatbot connects to our live library database..."

DEMO PART 3 — Action Taking (2 minutes):
[What you will show: renew loan or report problem feature]
Script: "The chatbot does not just answer questions — it can also take actions..."

DEMO PART 4 — Escalation (1 minute):
[Show what happens when the bot cannot help]
Script: "When the chatbot cannot answer or the issue is sensitive..."

CLOSING (30 seconds):
"This chatbot is currently [status: live / in testing / in development]. 
The next step is [what comes next].
Are there any questions?"

BACKUP PLAN:
If the demo breaks: "[What you will say and do if the technology fails]"
```

Write this script for your own chatbot demonstration.

---

### 🚫 Common English Mistakes — Week 14

**Mistake 1: "Users are not able to" vs "Users cannot"**

Both are correct, but "cannot" is cleaner in technical writing:
✅ "Users **cannot** renew an overdue loan through the chatbot."
✅ "Users **are unable to** renew an overdue loan through the chatbot." (more formal)
❌ "Users are not able to to renew..." (doubled "to" — common mistake when switching between forms)

**Mistake 2: Overly complex sentences when explaining to non-technical audiences**

❌ "The chatbot leverages a generative AI large language model to perform semantic matching between user utterances and the indexed knowledge base documents."
✅ "The chatbot reads our library policy documents and uses AI to give answers in natural language."

Rule: Know your audience. Technical precision is good for developers. Simple language is good for users and managers.

**Mistake 3: "It is showing" instead of "It shows"**

❌ "The chatbot is showing an error."
✅ "The chatbot **shows** an error." (state/condition → simple present)
✅ "The chatbot **is currently showing** an error." (happening right now, ongoing → present continuous)

**Mistake 4: Starting user guide steps with "You should click" instead of "Click"**

❌ "You should click on the Teams icon."
✅ "**Click** the Teams icon." (imperative is cleaner for instructions)
❌ "Users are required to type their question."
✅ "**Type** your question in the chat box." (direct, active, imperative)

---

### ✅ Week 14 English Progress Check

- [ ] Did you write a full problem-solution paragraph for one chatbot feature?
- [ ] Did you write the Library Helper user guide?
- [ ] Did you write the demo script for presenting the chatbot?
- [ ] Can you explain the difference between a scripted topic and generative answers using the problem-solution structure?
- [ ] Are you using imperative verbs (Click, Type, Open, Select) in user instructions?

---

---

# WEEK 15: December 15–21
## AI in DevOps + GitHub Copilot + AI Ethics

---

## Vocabulary for Week 15

---

**13. GitHub Copilot (noun)**
- **Simple meaning:** An AI assistant inside VS Code and other code editors that suggests code as you type, explains existing code, and helps write tests and documentation
- **Real-world analogy:** An experienced colleague sitting next to you while you code, who can say: "I think you want something like this..." and write the first draft.
- **Example sentence:** *"I asked GitHub Copilot: 'Write a Power Automate HTTP connector request to call the CalculateLateFee Azure Function with today's date and the loan due date.' It wrote the JSON body and headers correctly in 3 seconds."*

---

**14. Prompt Engineering (noun)**
- **Simple meaning:** The skill of writing clear, specific instructions to an AI model to get useful, accurate output
- **Real-world analogy:** Giving good directions. "Go to the place with the thing near the corner" gets a confused look. "Go to the red building on the left side of MG Road, second lane, number 42" gets you there.
- **Example sentence:** *"My first AI prompt was: 'Write a Power Fx formula.' It gave a generic answer. My improved prompt: 'Write a Power Fx formula for a canvas app gallery that filters Dataverse Loans table to show only loans belonging to the user with email User().Email, where Status = Active, sorted by DueDate ascending.' It gave exactly what I needed."*

---

**15. AI Ethics (noun)**
- **Simple meaning:** The study of what is right and wrong when using AI — fairness, privacy, accountability, and avoiding harm
- **Example sentence:** *"The prediction model flags members as 'high risk' for overdue loans. We decided NOT to automatically block high-risk members from borrowing — only to send them earlier reminders. This is an ethical decision: the AI's prediction is probabilistic, not certain, and blocking access is a significant penalty."*

---

## CONCEPT: Using AI as a Tool in Your Daily Workflow

This week is about changing how you WORK, not just what you build.

### Where AI Helps in the Workflows We Have Built

**Writing Power Fx formulas:**
When you are not sure of the exact syntax, describe what you want:
> *Prompt:* "Write a Power Fx formula for Power Apps that creates a new row in Dataverse Loans table, linking to the selected book using its ID (SelectedBook.cr_bookid), linking to the current user's member record (found by matching User().Email to the cr_email field in Members table), with today as LoanDate, 14 days from today as DueDate, and status 'Active'."

This is a precise prompt. The more precise your prompt, the more useful the output.

**Writing GitHub Actions YAML:**
> *Prompt:* "Write a GitHub Actions YAML workflow that runs when code is pushed to the main branch, only if files in the 'azure-functions/' folder changed. It should: install Node.js 18, install npm dependencies in 'azure-functions/library-functions', run npm test, then deploy to an Azure Function App named 'library-functions-[name]' using service principal credentials stored in GitHub Secrets as AZURE_CREDENTIALS."

**Writing SQL queries:**
> *Prompt:* "Write a SQL query for Azure SQL Server that joins the Loans table (columns: LoanID, BookID, MemberID, DueDate, ReturnDate, LateFee) with the Members table (MemberID, FullName, Email) and Books table (BookID, Title) to return all loans that are overdue as of today, ordered by number of days overdue descending, including a calculated column for DaysOverdue and another for PotentialFee at ₹5 per day."

**Debugging errors:**
> *Prompt:* "I am getting this error in Power Automate: 'The expression 'items('Apply_to_each')?['cr_member_value']' is not valid. I am trying to get the GUID of the related Member record from a Loan row retrieved from Dataverse. What is the correct way to reference the related member ID?"

---

## HANDS-ON EXERCISE 6: AI-Assisted Development Practice

For each of these tasks, use an AI assistant (Claude, GitHub Copilot, or any other) to help you write the first draft. Then review and modify:

**Task 1:** Write the Power Automate flow description for the Membership Approval Flow
→ Give the AI: what the flow should do (step by step)
→ It gives you: a written description you can use in documentation

**Task 2:** Write the GitHub Actions YAML for a new workflow: "Export Power Platform solution daily at midnight"
→ Use the prompt engineering approach from above
→ Review what the AI gives you: is it correct? What would you change?

**Task 3:** Write a SQL query to calculate monthly loan statistics for Power BI
→ Ask for: total loans per month, average loan duration, total late fees per month, percentage overdue
→ Test the query in Azure SQL Query Editor

**Task 4:** Write a DAX measure for Power BI
→ Ask for: a measure that calculates the rolling 3-month average number of loans
→ Verify it gives the right numbers on your data

> 💭 **The critical habit when using AI for code:**
>
> Never paste AI-generated code directly into production without reading and understanding it.
>
> Ask yourself:
> 1. Does this code do what I asked?
> 2. Does it do anything I did NOT ask? (Unexpected side effects)
> 3. Could this break anything in the existing system?
> 4. Does it follow the security principles I have learned? (No hardcoded secrets, no overly permissive access)
>
> AI can write incorrect code confidently. Your job is to be the quality gate — the thinking human who reviews the AI's work. This is how AI makes you more productive, not a liability.

---

## CONCEPT: AI Ethics — The Questions Every System Builder Must Ask

When we built the Prediction Model in Week 13, we made the ethical decision NOT to block high-risk members. Let us examine why — and extend this thinking.

### The Fairness Problem

Suppose the prediction model finds that members from a certain area of the city tend to return books late more often. The AI will use "postal code" or "neighborhood" as a predictive feature.

But what if certain neighborhoods have lower income? Are we now creating a system that systematically disadvantages economically vulnerable members?

This is called **algorithmic bias** — the AI learned from historical data that reflects real-world inequalities, and now it perpetuates those inequalities through automated decisions.

**What to do:**
- Remove features that are proxies for protected characteristics (income, location, community)
- Test the model's output for disparate impact: does it flag certain groups at higher rates?
- Regularly audit AI decisions that affect people's access to services

### The Accountability Problem

When the AI recommends blocking a member and Pooja follows the recommendation — who is accountable if the recommendation was wrong?

The AI does not face consequences. Pooja does. Microsoft does not face consequences. Your organization does.

**Rule:** Every AI-driven decision that affects a person must have a human accountable for it. AI can recommend. Humans must decide.

### The Transparency Problem

If Rohit is blocked from borrowing books because the AI flagged him as "high risk," does he have the right to know why? Does he have the right to appeal?

In many countries and contexts, yes — there are legal requirements for transparency and appeals in automated decisions. GDPR in Europe, similar laws being developed in India.

**Good practice:** If an AI decision affects someone, be able to explain what factors led to that decision, in plain language.

---

## 🗣️ English Practice — Week 15: Balanced Arguments — "On one hand... On the other hand..."

### Why This Grammar Pattern?

AI ethics — like most important questions in technology — has no simple right answer. The ability to present both sides of an argument fairly, and then reach a conclusion, is a sign of mature professional thinking. This is called a **balanced argument**.

**The Structure:**

```
1. INTRODUCE THE TOPIC: "The question of whether [X] is [debated / complex / not straightforward]."

2. FIRST SIDE: "On one hand, [argument for]. This is supported by [evidence/reason]."

3. SECOND SIDE: "On the other hand, [argument against]. Proponents of this view argue that [reason]."

4. NUANCE: "It is also worth noting that [complicating factor or middle ground]."

5. CONCLUSION: "On balance, [your conclusion], because [primary reason]. However, [acknowledged limitation of your position]."
```

---

### Grammar Practice

Write a balanced argument paragraph (all 5 parts) for ONE of these questions:

Option A: "Should the library use AI predictions to identify at-risk members?"
Option B: "Should the library's chatbot use generative AI or scripted answers for policy questions?"
Option C: "Should all library members' borrowing data be used to train the overdue prediction model?"

Use the connectors: "On one hand...", "On the other hand...", "It is also worth noting that...", "On balance..."

---

### Vocabulary in Sentences (balanced argument format)

For each AI ethics concept, write one sentence that presents TWO perspectives:

| Concept | Write: "While [perspective 1], [perspective 2]." |
|---------|--------------------------------------------------|
| Algorithmic Bias | |
| Confidence Score | |
| Transparency | |
| Data Privacy | |
| AI Ethics | |

**Example:** Concept: Automation → *"While automating the overdue fine calculation saves staff time and reduces human error, it also removes the possibility of case-by-case compassion — for instance, a member who was hospitalised and could not return a book on time."*

---

### Writing Exercise: The Ethics Analysis

Write a short (3-paragraph) ethical analysis of ONE AI feature in your library system.

**Paragraph 1 — What the AI feature does:**
Describe the feature objectively, using hedging language where appropriate.

**Paragraph 2 — The ethical considerations:**
Present both sides: the benefits AND the risks/concerns. Use "On one hand... On the other hand..." Use words like: fair, unfair, transparent, opaque, privacy, consent, accuracy, error, impact.

**Paragraph 3 — Your recommendation:**
State your position. What should be done? What safeguards should be in place? Use "On balance..." to introduce your conclusion. Acknowledge that reasonable people might disagree.

**Minimum length:** 200 words in English. This is your longest English writing exercise so far in this course — and that is intentional. December is about professional-level writing.

---

### 🔊 Read Aloud Exercise

Read this balanced argument out loud. This is harder than previous exercises — the sentences are longer and more complex. Read slowly:

*"The question of whether to use AI predictions to identify library members at risk of going overdue is not straightforward. On one hand, early identification allows the library to send proactive reminders to members who are most likely to need them, potentially reducing overdue rates and the administrative burden of chasing unpaid fines. This benefit is real and measurable. On the other hand, the prediction model was trained on historical data that may reflect existing inequalities — for example, if members from certain postcodes or income groups have historically had higher overdue rates due to circumstances beyond their control, the model may unfairly target these groups for additional scrutiny. It is also worth noting that even a highly accurate model will make mistakes — some members flagged as high risk will always return books on time, and some low-risk members will go overdue. Treating people differently based on a probabilistic prediction, rather than their actual behaviour, raises concerns about fairness and dignity. On balance, using AI predictions to send earlier reminders — rather than to restrict access — appears to be a proportionate use of this technology, provided that all members are treated with equal courtesy and that the model's outputs are reviewed regularly for evidence of disproportionate impact on any group."*

After reading: Write the 5 parts of the structure (introduce, first side, second side, nuance, conclusion) in your journal, with one sentence from the paragraph for each part.

---

### Professional Communication: The Recommendation Memo

A recommendation memo is used when you need to recommend a decision or policy to management. It is one of the most formal documents you will write in a professional role.

**Template:**
```
MEMORANDUM

To: [Recipient name and role]
From: [Your name and role]
Date: [Date]
Subject: Recommendation — [What you are recommending]

EXECUTIVE SUMMARY (2-3 sentences)
[State your recommendation immediately. Do not make the reader wait for the conclusion.]

BACKGROUND
[Why is this decision being considered? What prompted this recommendation?]

ANALYSIS

Option 1: [Name]
Advantages: [List]
Disadvantages: [List]
Estimated impact: [What would change]

Option 2: [Name]
Advantages: [List]
Disadvantages: [List]
Estimated impact: [What would change]

RECOMMENDATION
Based on the analysis above, I recommend [Option X] because [primary reason].
This approach [main benefit], while acknowledging that [acknowledged limitation].

NEXT STEPS (if recommendation is approved)
1. [Action 1] — Timeline: [Date]
2. [Action 2] — Timeline: [Date]
3. [Action 3] — Timeline: [Date]

QUESTIONS?
Please contact me at [contact] to discuss.
```

Write a recommendation memo to a fictional library director recommending whether or not to use the overdue prediction model to restrict borrowing for high-risk members.

---

### 🚫 Common English Mistakes — Week 15

**Mistake 1: One-sided "balanced" arguments**

❌ "On one hand, AI is good for efficiency. On the other hand, some people do not like AI. In conclusion, AI is great."
✅ A genuine balanced argument gives REAL evidence for BOTH sides, even if you ultimately disagree with one side. Steelman the opposing view.

**Mistake 2: Weak conclusions with "It depends"**

❌ "In conclusion, it depends on the situation."
✅ "On balance, [specific recommendation], because [specific reason], provided that [specific safeguard]."

"It depends" is sometimes accurate — but if you use it, you must immediately say WHAT it depends on and HOW that changes the answer.

**Mistake 3: "Moreover" and "Furthermore" used as "Also"**

"Moreover" and "Furthermore" mean "and this is an ADDITIONAL, STRONGER point." Use them only when the point you are adding is more important than the previous one.

❌ "AI can predict overdue loans. Moreover, it can also analyse sentiment." (sentiment analysis is not a stronger point)
✅ "AI can predict overdue loans. Moreover, these predictions have proven more accurate than the library staff's intuitions based on manual review." (this IS a stronger additional claim)

**Mistake 4: "Bias" used vaguely**

❌ "The AI model has bias."
✅ "The AI model shows **demographic bias** — specifically, it **disproportionately flags** members from [specific group] as high-risk, **at a rate 1.4x higher** than other groups with similar actual overdue frequencies."

When discussing bias in AI, always specify: which group, what direction, and how large the effect.

---

### ✅ Week 15 English Progress Check

- [ ] Did you write a full balanced argument (5 parts) about an AI ethics question?
- [ ] Did you write a 200+ word ethical analysis?
- [ ] Did you write the recommendation memo about the prediction model?
- [ ] Can you use "On one hand... On the other hand... On balance..." correctly in conversation?
- [ ] Are you using specific language for bias ("disproportionately flags", "at a rate X times higher") instead of vague "the AI has bias"?

---

---

# WEEK 16: December 22–31
## Final Capstone + System Design Document + Career Preparation

---

## The Final Week

This is not a week of building new things. This is the week where you:
1. Connect all pieces into one complete, documented system
2. Write a system design document in English
3. Understand your career path forward
4. Celebrate how far you have come

---

## CAPSTONE: The Full Architecture

Draw (or describe) the complete Community Library system you have built:

```
USER INTERACTIONS
──────────────────────────────────────────────────────────────
                    
MEMBER (Rohit)                    LIBRARIAN (Pooja)
│                                 │
├─ Canvas App (Power Apps)        ├─ Model-Driven App (Power Apps)
│  ├─ Search books                │  ├─ Manage all records
│  ├─ Borrow books                │  ├─ See overdue loans
│  └─ View my loans               │  └─ Approve new members
│                                 │
├─ Teams Chatbot (Copilot Studio) └─ Power BI Dashboard
│  ├─ Ask questions                  ├─ Loans per month
│  ├─ Check loan status              ├─ Popular books
│  ├─ Renew loans                    └─ Overdue analysis
│  └─ Report problems

DATA & LOGIC LAYER
──────────────────────────────────────────────────────────────

Dataverse                     Azure SQL Database
├─ Books table                ├─ Books table (replica for BI)
├─ Members table              ├─ Members table (replica for BI)
├─ Loans table                └─ Loans table (source of truth for SQL queries)
├─ Authors table
└─ MemberIssues table

Power Automate Flows           Azure Functions
├─ Overdue reminder (daily)   ├─ CalculateLateFee (API)
├─ Member approval            └─ [Future: book recommendation API]
├─ Loan created notification
└─ Issue created → email Pooja

Azure Blob Storage
└─ Book cover images

AI LAYER
──────────────────────────────────────────────────────────────

AI Builder                    Azure AI Language
├─ Membership Form Reader     └─ Sentiment analysis on feedback
└─ Overdue Prediction Model

DEVOPS LAYER
──────────────────────────────────────────────────────────────

GitHub Repository
├─ All code (Azure Functions, YAML, SQL scripts)
├─ Power Platform solution (exported zip)
└─ Documentation

GitHub Actions
├─ Deploy Azure Functions on push to main
├─ Export Power Platform solution (scheduled)
└─ Run tests on pull requests

Azure DevOps
└─ Sprint board (project management)
```

---

## HANDS-ON EXERCISE 7: Write the System Design Document

This is your most important English and technical writing exercise.

**File location:** `docs/system-design.md` in your GitHub repository

**Template:**

```markdown
# Community Library Management System — System Design Document

## Author
[Your name]
Date: December 2026

## 1. Overview
Write 3–5 sentences describing what this system is and who uses it.

*Example: "The Community Library Management System is a digital platform built to manage book lending, membership, and library operations for a small community library with approximately 500 members. The system serves two types of users: library members who borrow books and check loan status, and library staff who manage inventory, approve memberships, and monitor operations."*

## 2. The Problem We Are Solving
Describe what the library was doing BEFORE this system existed, and what problems that caused.

*Example: "Before this system, loan records were kept in a paper register. Overdue reminders were sent manually by Pooja every Friday — she had to look through 200 entries to find overdue loans. A member's full borrowing history required looking through multiple paper registers. New member registrations took 3 days to process."*

## 3. Architecture Overview
Describe the 4 main layers with one sentence each:
- Presentation layer (what users see)
- Logic layer (what happens when users interact)
- Data layer (where data is stored)
- AI layer (what is automated/intelligent)

## 4. Key Design Decisions and Their Reasons

For each decision, write: what was decided, why, and what the alternative was.

**Decision 1: Dataverse vs Azure SQL as primary data store**
- Chose: Dataverse
- Why: [Your answer]
- Alternative considered: Azure SQL
- Why not: [Your answer]

**Decision 2: Canvas App for members vs Model-Driven App**
- Chose: Canvas App for members, Model-Driven App for staff
- Why: [Your answer]

**Decision 3: Scheduled flow for overdue reminders vs event-driven**
- Chose: Scheduled (runs every morning at 7 AM)
- Why: [Your answer]
- Alternative: Event-driven (trigger when DueDate passes)
- Why not: [Your answer — hint: Dataverse triggers are for row changes, not date conditions]

**Decision 4: Azure Functions for late fee calculation**
- Chose: Centralize in Azure Function, not repeat in each flow/app
- Why: [Your answer — DRY principle]

**Decision 5: Copilot Studio for chatbot vs building a custom bot**
- Chose: Copilot Studio
- Why: [Your answer]
- Limitations: [Your answer]

## 5. What Could Be Improved

No system is perfect. List 3 things you would improve if you had more time:

1. [Your improvement 1] — because [reason]
2. [Your improvement 2] — because [reason]
3. [Your improvement 3] — because [reason]

## 6. Security Considerations

Describe how the system keeps data safe:
- Who can see what data (Dataverse security roles)
- How secrets are stored (GitHub Secrets, Azure Key Vault)
- What happens if a service goes down (failure modes)

## 7. Future Roadmap

If this system were to grow over the next year, what would you add?
- [Feature 1]: why useful, rough effort estimate
- [Feature 2]: why useful, rough effort estimate
- [Feature 3]: why useful, rough effort estimate
```

Write this document yourself. Use the AI to help you check grammar and improve sentences — but the IDEAS must be yours. You have built this system. You know the answers.

---

## 🗣️ English Practice — Week 16: Professional Documentation and Presentation

### Why This Grammar Pattern?

This is the last English practice section of the course. This week, you are not practising grammar rules — you are practising **register**: the ability to change how you communicate depending on who you are talking to and why.

The same information can be written in three very different ways:

**The System Design Document** (for a technical colleague):
*"The Community Library Management System uses a three-tier architecture: a Dataverse-backed Power Apps front end for member and staff interactions, a set of Power Automate flows for event-driven business logic including overdue notifications and membership approvals, and an Azure Functions API layer for centralised business logic (late fee calculation) callable by multiple consumers. The Azure SQL replica serves as an analytics-optimised read model for Power BI reporting."*

**The Interview Answer** (for a hiring manager):
*"I built a complete library management system over 4 months using Microsoft Power Platform and Azure. It includes a mobile app for members to borrow books, automated email reminders when books are overdue, a chatbot that answers questions 24 hours a day, and a Power BI dashboard that helps the library understand which books are most popular. I also set up a GitHub repository with automated deployment so that any code change I make goes live automatically without manual steps."*

**The LinkedIn Post** (for your professional network):
*"Excited to share that I have completed a 4-month learning journey building a Community Library Management System from scratch using Microsoft Power Platform, Azure, and GitHub. From zero technical knowledge to a complete, deployed system with AI, chatbot, and CI/CD automation. If you are curious about how non-technical people can build enterprise-level systems, I am happy to share what I learned. 🚀 #PowerPlatform #Azure #LearningInPublic"*

**Same system. Three audiences. Three completely different tones.**

---

### The Three Registers You Must Master

| Register | Audience | Tone | Vocabulary | Length |
|----------|----------|------|------------|--------|
| **Technical documentation** | Developers, architects | Precise, formal | Technical terms, exact measurements | Long, complete |
| **Professional interview** | Hiring manager | Confident, clear, structured | Some technical terms, explained | Medium, storytelling |
| **Social/public** | LinkedIn, peers | Enthusiastic, accessible | Plain English, emojis acceptable | Short, impactful |

---

### Grammar: Tense Consistency in Documentation

Technical documentation uses different tenses for different purposes:

- **Present simple** — for describing what the system IS and DOES:
  "The canvas app **connects** to Dataverse and **reads** book records."

- **Past simple** — for describing decisions and history:
  "We **chose** Dataverse over Azure SQL because it **provided** built-in Power Apps integration."

- **Imperative** — for instructions:
  "**Navigate** to the Power Apps portal. **Select** the LM-DEV environment. **Click** Solutions."

- **Future** — for planned improvements:
  "Future versions **will include** mobile push notifications for overdue reminders."

**Rule:** Do not mix tenses randomly. Decide: am I describing current state (present), history (past), or instructions (imperative)? Then stay consistent.

---

### Grammar Practice — Identify and Fix Tense Inconsistency

Rewrite this paragraph with consistent tense:

*"The system used Power Automate for automation. The overdue flow runs every morning at 7 AM and was sending emails to members. We chose Dataverse because it provides built-in security roles. The chatbot connects to Dataverse and returned live data. In the future, we added mobile push notifications."*

---

### Vocabulary in Sentences — All Four Months Combined

Write one sentence using EACH of these words from across the 4 months — but write them as if you are telling the story of what you built:

| Month | Word | Write your sentence as part of the project story |
|-------|------|--------------------------------------------------|
| September | Tenant | |
| September | Provision | |
| October | Delegation | |
| October | Child Flow | |
| November | Serverless | |
| November | Pull Request | |
| December | Hedging | |
| December | Escalation | |

---

### Writing Exercise: The Three-Register Challenge

Write the same content (your Community Library project) in all three registers:

**Part 1: System Design Document excerpt (150+ words, technical)**
Write the "Architecture Overview" section of your system design document. Use technical vocabulary. Be precise. Include: layers, tools, data flow, integration points.

**Part 2: Interview Answer (100-150 words)**
Answer this question: "Tell me about a technical project you have built independently."
Use the STAR method: Situation (what the context was), Task (what you needed to build), Action (what you did), Result (what the outcome was).

**Part 3: LinkedIn Post (50-80 words)**
Announce your completed project to your professional network. Be enthusiastic. Use 2-3 relevant hashtags. Make someone want to ask you more.

---

### 🔊 Read Aloud Exercise — Your Final Presentation

Read your system design document's "Overview" section out loud — the one you wrote in the capstone exercise.

Then, WITHOUT looking at it, say it again in your own words as if speaking to:
1. A technical colleague (use the technical language)
2. A non-technical library manager (use simple language)
3. A friend who knows nothing about technology (use an analogy)

This exercise — explaining the same thing at different levels — is called **the Feynman technique**. If you can explain something simply, you truly understand it. If you can only explain it using technical words, you have memorised without understanding.

---

### Professional Communication: The LinkedIn Profile Summary

Your LinkedIn profile summary is often the first thing a recruiter reads. It should describe what you can do, not just what you have done.

**Template:**
```
[Opening: who you are and what you do — 1-2 sentences]
I am a [role or aspiration] with experience in [your main skills].

[What you build — 2-3 sentences]
Over the past [time period], I have built [what], using [tools]. 
Most recently, I [specific achievement with a concrete detail].

[What you are looking for — 1 sentence]
I am currently [looking for / open to / focused on] [what].

[Call to action — 1 sentence]
[How to connect with you — "Feel free to reach out..." / "I am happy to discuss..."]
```

**Example:**
*"I am a Microsoft Power Platform developer with hands-on experience building end-to-end business applications using Power Apps, Power Automate, Dataverse, and Azure.*

*Over the past four months, I designed and built a complete Community Library Management System — including a mobile canvas app, automated overdue workflows, a Copilot Studio AI chatbot, Power BI dashboards, and a CI/CD pipeline using GitHub Actions. I also integrated Azure SQL, Azure Functions, and Azure AI Services into the Power Platform ecosystem.*

*I am currently preparing for the PL-900 and AZ-900 certifications and open to junior roles in Power Platform development or business applications consulting.*

*Feel free to connect if you are working on Microsoft ecosystem projects."*

Write your own LinkedIn summary — honest, specific, and confident.

---

### 🚫 Common English Mistakes — Week 16

**Mistake 1: "I am a quick learner" (the most overused phrase in CVs)**

❌ "I am a quick learner and a team player."
✅ "I built a complete enterprise-scale system from zero technical knowledge in 4 months." (show the evidence, do not claim the adjective)

Rule: Do not claim qualities — prove them with specific evidence. Replace "I am hardworking" with what you actually did.

**Mistake 2: Inconsistent first person in professional documents**

If you start a document using "I", keep using "I" (not "the author" or "one"):
❌ "I designed the system. The author chose Dataverse. One found that..."
✅ "I designed the system. I chose Dataverse. I found that..."

**Mistake 3: Abbreviations without explanation**

In a document for non-technical readers:
❌ "The system uses Power Apps, PA, CDS, PBI, and CS."
✅ "The system uses Power Apps, Power Automate (PA), Dataverse (formerly Common Data Service), Power BI, and Copilot Studio." (spell out first, abbreviate after)

**Mistake 4: Ending with "Please let me know if any issues"**

❌ "Please let me know if any issues."
✅ "Please **contact me** if you **have any questions** or notice **any problems**." (grammatically complete sentence)

---

### ✅ Final English Progress Check — The Complete Journey

Look back at your very first journal entry (September 6 or 7). Then look at what you have written today.

Write a reflection of 5–8 sentences answering:
1. How has your English writing changed in 4 months?
2. Which grammar pattern was most useful to you?
3. What type of professional document was hardest to write?
4. Which mistake did you make most often — and have you improved?
5. What will you continue to practise after December 31?

This reflection is the final English exercise. There is no template. No example. Write it entirely in your own words, in English, from your own experience.

**That is the point.** After 4 months, you no longer need a template.

---

## Career Preparation

### Certifications to Pursue in 2027

| Certification | What It Tests | Estimated Study Time | Cost |
|--------------|--------------|---------------------|------|
| **PL-900** — Power Platform Fundamentals | All Power Platform basics | 2–3 weeks | ~₹3,000 |
| **PL-300** — Power BI Data Analyst | Power BI, DAX, data modeling | 4–6 weeks | ~₹3,000 |
| **PL-200** — Power Platform Functional Consultant | Power Apps, Automate, Dataverse | 6–8 weeks | ~₹3,000 |
| **AZ-900** — Azure Fundamentals | Azure basics, cloud concepts | 2–3 weeks | ~₹3,000 |
| **AZ-204** — Azure Developer | Building Azure applications | 3–4 months | ~₹3,000 |

**Recommended order for you:** PL-900 → AZ-900 → PL-300 → PL-200 (or AZ-204 if you want to go deeper into Azure)

Start with PL-900 in January. You have already done everything it tests — the exam will feel familiar.

### How to Talk About This Project in an Interview

**Weak answer:** *"I built a library system in Power Apps and Power Automate."*

**Strong answer:** *"I designed and built a complete library management system using Microsoft Power Platform for the front-end layer (a Canvas App for members and a Model-Driven App for staff), with Dataverse as the primary data store. I built 3 Power Automate flows for automation — overdue reminders, new member approvals, and loan notifications. I integrated Azure Functions as a centralized API for late fee calculation, Azure Blob Storage for book cover images, and added AI Builder for document processing and predictive overdue detection. I used GitHub for version control and GitHub Actions for automated deployment of the Azure Functions. The entire system is documented in GitHub and can be deployed to a new environment from scratch."*

Notice how the strong answer:
- Names specific tools (canvas app, model-driven, Dataverse)
- Explains WHY you made choices (centralized API for late fee calculation)
- Shows depth (you did not just use Power Apps — you integrated it with Azure)
- Shows process (version control, deployment pipeline)
- Shows documentation (it can be reproduced)

### What Jobs Use These Skills

| Role | Primary Skills Used |
|------|-------------------|
| **Power Platform Developer** | Power Apps, Power Automate, Dataverse |
| **Business Applications Analyst** | Power Platform + requirements gathering |
| **CRM Consultant (Dynamics 365)** | Dataverse, model-driven apps |
| **Power BI Developer** | Power BI, DAX, data modeling |
| **Azure Integration Engineer** | Azure Functions, Logic Apps, API Management |
| **DevOps Engineer (Microsoft Stack)** | GitHub Actions, Azure DevOps, CI/CD |
| **AI Solutions Engineer** | Copilot Studio, AI Builder, Azure AI |

Your 4-month project touches ALL of these roles. You are not an expert in any single role — but you are qualified to join a team in any of these areas and grow from there.

---

## December 31: Your Final Checklist

Before midnight on December 31, complete this checklist:

**Technical:**
- [ ] Canvas App works end-to-end (search, borrow, view loans)
- [ ] Model-Driven App shows all library data
- [ ] Overdue reminder flow runs successfully
- [ ] Member approval flow works
- [ ] Azure Function (CalculateLateFee) is deployed and callable from Power Automate
- [ ] Copilot Studio agent answers questions AND takes actions (loan status, renewal, report issue)
- [ ] AI Builder form reader is trained and integrated
- [ ] GitHub repository has all code, solution files, and documentation
- [ ] GitHub Actions pipelines run automatically

**Documentation:**
- [ ] `docs/system-design.md` written in English
- [ ] `README.md` explains the project clearly
- [ ] `docs/setup-guide.md` exists

**English:**
- [ ] December journal: at least 15 entries
- [ ] Can explain the project in English for 3 minutes without stopping
- [ ] Vocabulary list: all 30+ words from December, defined in your own words

**Reflection:**
- [ ] Read your September 6 journal entry — the very first one
- [ ] Compare it to your December 31 entry
- [ ] Notice: your English improved. Your thinking improved. Your confidence improved.

---

## December Vocabulary Master List

| Word | Your definition |
|------|----------------|
| Machine Learning | |
| Model (AI) | |
| Training (AI) | |
| Prediction | |
| Confidence Score | |
| Azure AI Language | |
| Sentiment Analysis | |
| Named Entity Recognition | |
| Generative AI | |
| Conversational Design | |
| Escalation | |
| Slot Filling | |
| GitHub Copilot | |
| Prompt Engineering | |
| AI Ethics | |
| Algorithmic Bias | |

---

## A Final Message

On September 6, you started this guide as someone who described themselves as non-technical with poor English.

On December 31, you are someone who:
- Built a complete, production-quality library management system
- Understands why each piece of the system exists, not just how to click it
- Knows how databases relate to each other, how APIs work, how CI/CD pipelines run
- Has used AI as a tool — and understands its limits
- Has written technical documents, SQL queries, YAML configurations, Power Fx formulas
- Has a GitHub repository to show anyone who asks
- Has the vocabulary and the confidence to discuss technical topics in English

The world of technology did not become simpler this year. But you became someone who can navigate it.

That is the goal. You reached it.

---

> *"The measure of intelligence is the ability to change." — Albert Einstein*
>
> You changed. That is the proof.

---

*Phase 4 complete. The roadmap is done.*

*December 1 – December 31, 2026*
*End state: A complete, documented, deployed Community Library Management System — covering Power Platform, Azure, GitHub, CI/CD, and AI.*
