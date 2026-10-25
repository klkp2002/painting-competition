# Google Form Setup Guide

## ASSC Open Painting Competition 2026 — Registration Form

This guide explains how to create, configure, and connect the official Google Form for competition registration.

---

## Table of Contents

1. [Create the Form](#1-create-the-form)
2. [Form Title and Description](#2-form-title-and-description)
3. [Section 1: Participant Details (Q1–Q5)](#3-section-1-participant-details)
4. [Section 2: Competition Category (Q6–Q8)](#4-section-2-competition-category)
5. [Section 3: School / Institution Details (Q9–Q11)](#5-section-3-school--institution-details)
6. [Section 4: Contact Details (Q12–Q16)](#6-section-4-contact-details)
7. [Section 5: Artwork and Competition Rules (Q17–Q20)](#7-section-5-artwork-and-competition-rules)
8. [Section 6: Artwork Submission Section (Q21–Q24)](#8-section-6-artwork-submission-section)
9. [Section 7: Declaration and Consent (Q25–Q27)](#9-section-7-declaration-and-consent)
10. [Confirmation Message](#10-confirmation-message)
11. [Form Settings](#11-form-settings)
12. [Link to Google Sheets & Google Drive](#12-link-to-google-sheets--google-drive)
13. [Obtain URLs for the Website](#13-obtain-urls-for-the-website)
14. [Configure Environment Variables](#14-configure-environment-variables)
15. [Testing](#15-testing)
16. [Verification & Evaluation Workflow](#16-verification--evaluation-workflow)
17. [Security & Access Control](#17-security--access-control)
18. [Known Limitations](#18-known-limitations)

---

## 1. Create the Form

1. Go to [Google Forms](https://forms.google.com).
2. Click **Blank form** (or the `+` button).
3. The form editor will open with a default "Untitled form".

---

## 2. Form Title and Description

### Title

Set the form title to:

```
ASTRONOMY & SPACE STUDY CENTER (ASSC)
OPEN PAINTING COMPETITION 2026
Theme: MAN, MOON & FUTURE
REGISTRATION FORM
```

### Description

Set the form description to:

```
Organised by the Astronomy & Space Study Center (ASSC).

Welcome to the ASSC Open Painting Competition 2026! This competition invites young artists, students and digital creators to explore astronomy, space exploration, humanity's future on the Moon, and life beyond Earth through creative expression.

Please complete this registration form carefully. Information marked with an asterisk (*) is compulsory.
```

---

## 3. Section 1: Participant Details

Add a new section titled **"Participant Details"**.

### Q1. Full Name of Participant

- **Type:** Short answer
- **Required:** Yes

### Q2. Date of Birth

- **Type:** Date
- **Required:** Yes

### Q3. Age as of the Registration Date

- **Type:** Short answer
- **Required:** Yes
- **Validation:** Number → Greater than or equal to 1 (custom error: "Please enter a valid age")

### Q4. Gender

- **Type:** Multiple choice
- **Required:** No
- **Options:**
  - Male
  - Female
  - Prefer not to say
  - Other

### Q5. Country of Residence

- **Type:** Short answer
- **Required:** Yes

---

## 4. Section 2: Competition Category

Add a new section titled **"Competition Category"**.

Add a section description:

```
Choose the competition category that matches your age and preferred medium. Please review the AI policy below before selecting your category.

• Category 1 & 2: AI assistance is STRICTLY PROHIBITED. Artworks must be the participant's own original work.
• Category 3: AI-assisted artwork is ALLOWED.
```

### Q6. Select Your Competition Category

- **Type:** Multiple choice
- **Required:** Yes
- **Options:**
  - Category 1: Junior Painting — Ages 6–12
  - Category 2: Youth Painting — Ages 13–21
  - Category 3: Open Digital Art — Artwork created using digital tools, software or AI

### Q7. Title of Your Artwork (if already decided)

- **Type:** Short answer
- **Required:** No

### Q8. What is your intended artwork medium?

- **Type:** Multiple choice
- **Required:** Yes
- **Options:**
  - Pencil, colour pencil or crayon
  - Watercolour
  - Acrylic
  - Oil colour
  - Poster colour or other painting medium
  - Digital drawing or painting software
  - AI-assisted digital artwork
  - Other

Add a note below or as description text:

```
Important: AI-assisted artwork is eligible ONLY for Category 3 (Open Digital Art).
```

---

## 5. Section 3: School / Institution Details

Add a new section titled **"School / Institution Details"**.

### Q9. Name of School, University or Institution

- **Type:** Short answer
- **Required:** No

### Q10. Current Grade / Year of Study

- **Type:** Short answer
- **Required:** No

### Q11. Name of Teacher / Art Instructor (if applicable)

- **Type:** Short answer
- **Required:** No

---

## 6. Section 4: Contact Details

Add a new section titled **"Contact Details"**.

### Supplementary Question: Are you under 18 years of age?

- **Type:** Multiple choice
- **Required:** Yes
- **Options:**
  - Yes, I am under 18
  - No, I am 18 or older

> **Important:** Use this question to set up **section branching**.
> - If "Yes" → Go to the section with guardian details AND contact fields
> - If "No" → Skip the guardian section

### Q12. Participant's Email Address

- **Type:** Short answer
- **Required:** Yes
- **Validation:** Text → Contains "@" (or use email validation)

### Q13. Participant's Mobile / WhatsApp Number

- **Type:** Short answer
- **Required:** Yes
- **Description:** "Include your international country code (e.g., +94 for Sri Lanka, +91 for India)"

### Q14. Parent's / Legal Guardian's Full Name

- **Type:** Short answer
- **Required:** Yes (in the under-18 branch section)

### Q15. Parent's / Legal Guardian's Contact Number

- **Type:** Short answer
- **Required:** Yes (in the under-18 branch section)

### Q16. Parent's / Legal Guardian's Email Address

- **Type:** Short answer
- **Required:** No
- **Validation:** If provided, Text → Contains "@"

### How to set up conditional branching

1. Create two separate sections after the "Are you under 18?" question:
   - **Section 4A:** "Parent / Guardian Information" (Q14–Q16 + Q12–Q13)
   - **Section 4B:** "Contact Information" (Q12–Q13 only)
2. On the "Are you under 18?" question, click the three-dot menu → **Go to section based on answer**.
3. Set "Yes, I am under 18" → Go to Section 4A
4. Set "No, I am 18 or older" → Go to Section 4B
5. At the end of both sections, set "After section" to the same next section (Section 5).

---

## 7. Section 5: Artwork and Competition Rules

Add a new section titled **"Artwork and Competition Rules"**.

### Q17. Have you read the competition guidelines?

- **Type:** Multiple choice
- **Required:** Yes
- **Options:**
  - Yes
  - No
- **Description:** Include a link to the guidelines page: "Read the guidelines at: [your-domain]/guidelines"

> **Tip:** To handle "No" responses, use section branching to redirect respondents who answer "No" to a section that asks them to read the guidelines first, then return. Alternatively, add a description explaining the guidelines are required reading.

### Q18. Do you understand that each participant may submit a maximum of two artworks, subject to the official competition guidelines?

- **Type:** Multiple choice
- **Required:** Yes
- **Options:**
  - Yes
  - No

> **Tip:** Use the same branching approach as Q17 for "No" answers.

### Q19. For digital artwork, please indicate whether AI tools or other digital software will be used.

- **Type:** Multiple choice
- **Required:** No
- **Options:**
  - AI tools
  - Digital drawing / painting software without AI
  - Both AI and digital software
  - Not applicable

### Q20. How did you hear about this competition?

- **Type:** Multiple choice
- **Required:** Yes
- **Options:**
  - Facebook
  - Instagram
  - WhatsApp
  - School / University
  - Teacher / Art Instructor
  - Friend / Family
  - ASSC announcement
  - Other

---

## 8. Section 6: Artwork Submission Section

Add a new section titled **"Artwork Submission"**.

Add a section description:

```
Please upload your artwork files and provide details about your creation.
• Theme: MAN, MOON & FUTURE
• Maximum artworks allowed: 2 per participant
• Accepted file formats: JPEG, JPG, PNG
• Maximum file size: 10 MB (or 100 MB depending on your Google Form settings)
• Category 1 & 2: Original hand-drawn or painted works only (no AI).
• Category 3: Open Digital Art (AI-assisted or digital painting software allowed).
```

### Q21. Upload Artwork 1 (Compulsory)

- **Type:** File upload
- **Required:** Yes
- **Allow only specific file types:** Image
- **Maximum number of files:** 1
- **Maximum file size:** 10 MB or 100 MB

### Q22. Title and Medium of Artwork 1

- **Type:** Short answer (or Paragraph)
- **Required:** Yes
- **Description:** "Mention the title and medium used (e.g., 'Return to Tranquility' — Watercolour on paper)."

### Q23. Upload Artwork 2 (Optional)

- **Type:** File upload
- **Required:** No (Optional)
- **Description:** "Upload your second artwork if you wish to submit two entries."
- **Allow only specific file types:** Image
- **Maximum number of files:** 1
- **Maximum file size:** 10 MB or 100 MB

### Q24. Title and Medium of Artwork 2 (if applicable)

- **Type:** Short answer (or Paragraph)
- **Required:** No

---

## 9. Section 7: Declaration and Consent

Add a new section titled **"Declaration and Consent"**.

### Q25. Participant Declaration

- **Type:** Checkboxes
- **Required:** Yes (all must be checked)
- **Options:**
  - I confirm that the information provided in this registration form is accurate.
  - I agree to follow the official competition guidelines, rules, and deadlines.
  - I confirm that the submitted artwork is my own original creation (or created in accordance with Category 3 AI guidelines).
  - I confirm that I have uploaded my artwork file(s) in the submission section of this form.
- **Validation:** Select at least 4 (response validation → select at least → 4)

### Q26. Consent for Participants Under 18

This should ideally appear **only for participants who indicated they are under 18** (using section branching from the earlier question).

- **Type:** Checkboxes
- **Required:** Yes (in the under-18 branch)
- **Options:**
  - I am the parent or legal guardian of the participant named in this form and consent to their participation in the ASSC Open Painting Competition 2026.

If conditional sections are used, place this in the guardian consent section and mark it required within that section.

If branching is not feasible, make this question optional and add a description: "Required for participants under 18 — to be completed by parent/legal guardian."

### Q27. Photography, Publicity and Artwork Display Consent

- **Type:** Checkboxes
- **Required:** No (optional — must NOT be required)
- **Options:**
  - I consent to the participant's submitted artwork and name being displayed in competition publicity, exhibitions or announcements, subject to the organiser's published privacy and publicity policy.

**Important:** This checkbox must be optional, unselected by default, and never treated as compulsory for registration.

---

## 10. Confirmation Message

Go to **Settings** (gear icon) → **Presentation** → **Confirmation message**.

Set to:

```
Thank you for registering and submitting your artwork for the ASSC Open Painting Competition 2026 — MAN, MOON & FUTURE!

We have successfully received your registration details and submitted artwork file(s).

Our evaluation panel will review all eligible entries. Follow ASSC's official social media channels and website for updates on shortlisted artworks, exhibition dates, and the award ceremony.

Astronomy & Space Study Center (ASSC)

Explore the Universe Through Art.
```

---

## 11. Form Settings

In the form's **Settings** tab, configure:

### Responses

- ✅ **Collect email addresses:** "Responder input" or "Verified"
- ⚠️ **Require sign-in:** **Automatically Required by Google Forms for File Uploads.**
  > **Crucial Google Forms Note:** Because this form includes a **File upload** question in the submission section, Google automatically requires respondents to sign in with a Google account to submit files to your Google Drive. Make sure to inform respondents that they should be signed into a Google account.
- ❌ **Limit to 1 response:** Off (unless you wish to strictly enforce one submission per Google account; keeping it off allows parents to submit for multiple children).

### Presentation

- Set the confirmation message (see above)
- ✅ Show link to submit another response: Off
- ✅ Show progress bar: On (helps with multi-section forms)

### Defaults

- ❌ Make questions required by default: Off (we set required individually)

---

## 12. Link to Google Sheets & Google Drive

1. In the form editor, click the **Responses** tab.
2. Click the **Google Sheets icon** (green spreadsheet icon) → "Create a new spreadsheet".
3. Name it: `ASSC Competition 2026 — Registrations & Submissions`
4. All responses will now automatically populate this spreadsheet, including clickable Google Drive links for each uploaded artwork file.
5. In your Google Drive, a folder named `ASSC Competition 2026 (File responses)` will automatically be created containing all submitted artwork files.

### Post-processing columns

Add the following manual tracking columns to the spreadsheet:

| Column | Purpose |
|--------|---------|
| `Participant ID` | Unique ID assigned (e.g., ASSC-2026-001) |
| `Artwork File Verified` | Yes/No — whether uploaded artwork file opens and is legible |
| `Format & Resolution` | Passed / Re-upload requested |
| `AI Compliance` | Verified / Ineligible |
| `Evaluation Status` | Shortlisted / Under Review / Disqualified |
| `Notes` | Evaluator or organiser comments |

### Enable notifications

1. In the Google Sheet, go to **Tools** → **Notification settings**.
2. Set "A user submits a form" → Notify immediately (or daily digest).

---

## 13. Obtain URLs for the Website

### Public URL

1. In the form editor, click **Send** (paper plane icon).
2. Click the **Link** tab (chain icon).
3. Copy the URL. It looks like: `https://docs.google.com/forms/d/e/FORM_ID/viewform`

### Embed URL

Take the public URL and append `?embedded=true`:

```
https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true
```

---

## 14. Configure Environment Variables

### Local development

Create a `.env.local` file (copy from `.env.example`):

```env
NEXT_PUBLIC_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform
NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true
NEXT_PUBLIC_REGISTRATION_STATUS=open
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Vercel deployment

1. Go to your Vercel project → **Settings** → **Environment Variables**.
2. Add the same variables with production values.
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain.

---

## 15. Testing

### Before launch

1. **Desktop test:** Open the form URL directly and complete a test registration.
2. **Mobile test:** Test on a phone — ensure all fields are usable.
3. **Embed test:** Run the website locally (`npm run dev`) and visit `/register`.
4. **Verify the iframe loads** and scrolls correctly.
5. **Check Google Sheets:** Confirm the test response appears in the linked spreadsheet.
6. **Verify branching:** Test the under-18 flow and the 18+ flow separately.
7. **Check email validation:** Try submitting an invalid email.
8. **Check declaration:** Try submitting without all 4 checkboxes checked.
9. **Verify confirmation message:** After submission, confirm the thank-you message displays correctly.

### After launch

10. **Monitor responses** in Google Sheets regularly.
11. **Test the direct link** ("Open Registration Form in New Tab") on the website.
12. **Check mobile embed** on various devices (iOS Safari, Android Chrome).

---

## 16. Verification & Evaluation Workflow

Because artwork is submitted directly through the form, the workflow is streamlined:

1. **Participant registers and uploads artwork** → Response and files recorded in Google Sheets and Google Drive.
2. **Organiser verifies entry** → Check participant age, category eligibility, artwork file resolution (JPEG/PNG), and AI policy compliance.
3. **Organiser assigns Participant ID** → Record ID in the Google Sheet.
4. **Organiser sends optional confirmation email** (acknowledging receipt with Participant ID).
5. **Judging Panel evaluates** submitted artwork according to official guidelines and evaluation criteria.
6. **Finalists and winners announced** via official ASSC announcements and invited to the award ceremony.

### Optional confirmation email template

```
Subject: ASSC Open Painting Competition 2026 — Submission Acknowledged [Participant ID]

Dear [Participant Name],

Thank you for registering and submitting your artwork for the ASSC Open Painting Competition 2026: MAN, MOON & FUTURE!

We have successfully received your submission:
• Category: [Category Name]
• Artwork Title: [Artwork Title]

Your submission is currently under review by our evaluation committee. If any clarification or higher-resolution image is needed, our team will reach out to you via this email.

Good luck with your submission!

Astronomy & Space Study Center (ASSC)
Explore the Universe Through Art.
```

---

## 17. Security & Access Control

### Spreadsheet access

1. Keep the Google Sheet **restricted** — do not share publicly.
2. Share only with authorised organisers.
3. Use "Editor" access for organisers who update tracking columns.
4. Use "Viewer" access for others who only need to see registrations.

### Response summary

1. In Google Forms, go to **Responses** → **Summary**.
2. **Do not** share the response summary link publicly — it contains personal information including names, emails, phone numbers, and birth dates of minors.

### General

- Do not embed the Google Sheets URL in any client-side code.
- Do not publish form response counts or data on the website.
- Do not create a public "view responses" page.

---

## 18. Known Limitations

| Limitation | Detail |
|-----------|--------|
| **Cross-field validation** | Google Forms cannot automatically validate that the declared age matches the date of birth, or that the chosen category matches the participant's age. Organisers should verify this manually in the spreadsheet. |
| **Conditional required fields** | Section branching works well for showing/hiding sections, but required fields within a conditionally shown section may still allow submission if the branching isn't set up perfectly. Test thoroughly. |
| **Iframe styling** | The embedded Google Form uses Google's default styling. It cannot be customised to match the website's visual identity via CSS. |
| **Duplicate registrations** | If sign-in limit is off, duplicate entries are possible. Organisers should check for duplicates in the spreadsheet. |
| **File uploads & Google sign-in** | Because the form collects artwork files via the File Upload question, Google Forms automatically requires respondents to be signed into a Google account. The form cannot allow anonymous file uploads without sign-in. Files are saved to the form creator's Google Drive. |

---

## Verification Checklist

- [ ] Form created with participant, category, contact, rules, and submission sections
- [ ] Artwork submission section configured with File Upload questions
- [ ] Max file size and accepted image formats set in Google Forms
- [ ] Sections properly divided
- [ ] Required fields correctly set
- [ ] Branching for under-18 participants works
- [ ] Q17/Q18 "No" respondents handled appropriately
- [ ] Q27 (publicity consent) is optional
- [ ] Confirmation message updated for direct submission
- [ ] Google Sheets linked (and Google Drive folder verified)
- [ ] Tracking columns added to spreadsheet
- [ ] Notifications enabled
- [ ] Public URL obtained
- [ ] Embed URL obtained
- [ ] Environment variables configured
- [ ] Website embed tested on desktop and mobile
- [ ] Direct link tested
- [ ] Spreadsheet access restricted
- [ ] Response summary not publicly shared
- [ ] Test registration and file upload completed and verified
