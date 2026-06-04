# The 99 — Project Plan

*A daily-verse app for the ones who feel like they're in the wilderness: prodigals, black sheep, the one Jesus left the ninety-nine to find.*

---

## 1. The Vision

A simple, beautiful mobile app that delivers **one Bible verse per day**, framed in the **voice** the user needs to hear it in. The whole idea hangs on personality: the same Scripture lands differently when it's spoken gently versus spoken like a hype man. The user picks a voice; the app speaks to them in it.

**Who it's for:** Christians going through a dry/desert season, people who feel far off or "lost," anyone who needs a word that meets them where they are.

**The one thing people will remember:** "It talked to me like _____" — the voice, not just the verse.

---

## 2. POC Scope (Build This First)

Keep the first version deliberately small. The POC is "done" when:

- [ ] App runs on both iOS and Android from one codebase
- [ ] Home screen shows the four voices as tappable cards
- [ ] Picking a voice shows that voice's **verse of the day**
- [ ] Each verse appears with a short reflection (in-voice) above it and the reference below
- [ ] "Pull another word" button shows a different verse from that voice
- [ ] "Change voice" returns to the home screen
- [ ] The daily verse is stable all day and rolls over at midnight
- [ ] It looks good — dark desert-dusk theme with a per-voice accent color

**Explicitly NOT in the POC** (save for later): accounts/login, push notifications, saving favorites, sharing, large verse libraries, multiple translations.

---

## 3. The Voices

Four personality modes. Each has its own accent color and its own pool of verses with in-voice reflections.

| Voice | Glyph | Accent | When you reach for it |
|---|---|---|---|
| The Shepherd | 🕯️ | warm candlelight | "He left the 99 for me" — belonging, being sought |
| The Comforter | 🤍 | moonlit blue | the heavy/low days; a soft place to land |
| The Fire | 🔥 | ember orange | get-off-the-floor hype; the comeback |
| The Real One | ⚡ | amber/steel | tough love; the wilderness is building you |

The verse content for all four lives in `src/verses.js`.

---

## 4. Tech Stack

- **Framework:** Expo (React Native) — one JavaScript codebase ships to iOS, Android, and web.
- **Language:** JavaScript (the default blank template). TypeScript optional later.
- **Background visuals:** `expo-linear-gradient` for the dusk glow.
- **Testing on device:** Expo Go app (scan a QR code; live reload).
- **Storage:** none for the POC — the daily verse is computed from the date, so no database needed.
- **IDE:** VS Code with the Claude Code extension.

> **Version note (current):** Expo is mid-transition to SDK 56. For testing on a physical phone via Expo Go right now, stay on the default **SDK 54** project that `create-expo-app` produces. Requires **Node.js 18+** and **VS Code 1.85+**.

---

## 5. Project Structure (target)

```
the-99/
├── App.js              # the whole app: home screen + verse screen (state-driven)
├── src/
│   └── verses.js       # MODES data + dailyIndex() helper  ← already written
├── app.json            # Expo config (name, icon, splash)
├── package.json        # dependencies
├── CLAUDE.md           # auto-generated; gives Claude Code Expo context
└── assets/             # icon + splash (Expo defaults are fine for POC)
```

---

## 6. Setup Steps

1. **Install Node.js** (LTS build from nodejs.org). Verify: `node --version`.
2. **Create a project folder** (e.g. `Documents/the-99`) and open it in VS Code (*File → Open Folder*).
3. **Open the terminal** in VS Code: `Ctrl + ` (backtick).
4. **Scaffold the app:**
   ```
   npx create-expo-app@latest .
   ```
5. **Add the data file:** drop `verses.js` into a `src/` folder.
6. **Build `App.js`** — hand the kickoff prompt below to Claude Code in the IDE.
7. **Install the gradient package:**
   ```
   npx expo install expo-linear-gradient
   ```
8. **Run it:**
   ```
   npx expo start
   ```
   Install **Expo Go** on your phone and scan the QR code.

---

## 7. Kickoff Prompt for Claude Code (paste in your IDE)

> Scaffold this into a simple Expo POC mobile app called "The 99." Use the MODES data already in `src/verses.js`. Build `App.js` with two screens managed by React state: (1) a home screen with a title and four tappable voice cards, and (2) a verse screen showing the daily verse for the chosen voice, with the reflection above it, the reference below, a "Pull another word" button, and a "Change voice" back button. Use a dark desert-dusk theme with a per-voice accent color and `expo-linear-gradient` for the background glow. No external storage — use the `dailyIndex` helper already in `verses.js`. Then tell me how to run it.

---

## 8. Daily Verse Logic

No backend required. The verse of the day is derived from the calendar date:

```
index = (daysSinceEpoch + offset) % numberOfVersesInVoice
```

- `offset = 0` → today's verse (stable all day, changes at midnight).
- "Pull another word" just bumps the offset to cycle through the rest.

This is already implemented as `dailyIndex()` in `verses.js`.

---

## 9. Content & Licensing Note

- All verse text in the POC is **King James Version**, which is **public domain** — free to ship with no license.
- The personality reflections are **original writing**, also free to use.
- ⚠️ Modern translations (NIV, ESV, NLT, The Message, etc.) are **copyrighted** and require a license/permission. Decide per translation before adding them.

---

## 10. Roadmap (After the POC Works)

**Phase 2 — make it sticky**
- Expand each voice to 50–100+ verses so the daily rotation lasts months
- Add "save your favorites" (using `AsyncStorage`)
- Add a streak / history view

**Phase 3 — polish & personality**
- More voices (e.g. The Poet, a Late-Night voice for 2am)
- Custom app icon + splash screen
- A "share this verse" image card

**Phase 4 — ship to the stores**
- Build with **EAS Build** (Expo's cloud build — no Xcode/Android Studio needed)
- Set up Apple Developer ($99/yr) and Google Play ($25 one-time) accounts
- Submit to the App Store and Play Store
- Optional: daily push notification with the verse of the day

---

*Built one verse at a time. The desert isn't the detour — it's the training.*
