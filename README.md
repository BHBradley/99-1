<div align="center">

# The 99 &nbsp;÷&nbsp; 1

### *A word for the one in the wilderness.*

He left the ninety-nine. He came for **you**.

<br>

![Expo](https://img.shields.io/badge/Expo-SDK%2056-000020?logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React%20Native-0.85-61DAFB?logo=react&logoColor=000)
![Platforms](https://img.shields.io/badge/iOS%20·%20Android%20·%20Web-one%20codebase-444)
![Scripture](https://img.shields.io/badge/KJV-public%20domain-e3a155)
![Status](https://img.shields.io/badge/status-POC-9cb8e0)

</div>

---

## ✦ The Inspiration

> *“What man of you, having an hundred sheep, if he lose one of them, doth not leave the ninety and nine, and go after that which is lost, until he find it?”* — **Luke 15:4**

Most devotional apps hand everyone the same verse in the same flat voice. But the same Scripture lands **completely differently** depending on the season you're in — and the voice you hear it in.

**The 99** is built for the ones who feel like they're *outside* the flock: the prodigal, the black sheep, the one wandering the dry land. The whole idea hangs on **personality**. You don't just get a verse — you get a verse spoken to you in the voice you need today. Gentle when you're broken. Loud when you need to get off the floor. Honest when you need the truth.

The one thing people remember isn't *“the app showed me a verse.”*
It's *“it talked to me like \_\_\_\_\_.”*

---

## 🕯️ The Four Voices

Pick the voice that meets you where you are. Each carries its own accent color, its own glow, and its own pool of verses with original, in-voice reflections.

| Voice | | Accent | When you reach for it |
|---|---|---|---|
| **The Shepherd** | 🕯️ | candlelight | *“He left the 99 for me.”* — belonging, being sought |
| **The Comforter** | 🤍 | moonlit blue | the heavy, low days — a soft place to land |
| **The Fire** | 🔥 | ember orange | get-off-the-floor hype for the comeback |
| **The Real One** | ⚡ | amber / steel | tough love — the wilderness is *building* you |

Every verse arrives with a short reflection **above** it (in that voice), the Scripture in the center, and the reference below. Tap **“Pull another word”** for a different verse; **“Change voice”** to start over.

---

## ⚙️ Tech Stack

One JavaScript codebase ships to **iOS, Android, and web**.

| Layer | Choice | Why |
|---|---|---|
| **Framework** | [Expo](https://expo.dev) (SDK 56) + React Native 0.85 | One codebase, three platforms, zero native toolchain to start |
| **UI** | React 19 + `StyleSheet` / `Pressable` | Native components, no heavy UI lib for a POC |
| **Atmosphere** | `expo-linear-gradient` | The desert-dusk background + per-voice horizon glow |
| **State** | React `useState` | Two screens, driven by simple state — no router/store needed |
| **Daily verse** | Pure date math (`dailyIndex`) | Deterministic verse-of-the-day, stable until **local** midnight — no backend, no database |
| **Content** | King James Version | Public domain — free to ship. Reflections are original writing. |
| **Dev loop** | Expo Go + QR code | Live reload on a real phone in seconds |

> **No backend. No login. No database.** The verse of the day is *computed from the calendar date*, so the whole POC runs entirely on-device.

---

## 🗂️ Project Structure

```
99-1/
├── App.js            # the whole app — home screen + verse screen (state-driven)
├── src/
│   └── verses.js     # MODES data (4 voices) + dailyIndex() helper
├── the-99.html       # the original web prototype — visual reference / spec
├── app.json          # Expo config
├── PLAN.md           # the build plan & roadmap
└── assets/           # icon + splash (Expo defaults for now)
```

---

## 🚀 Getting Started

**Requirements:** Node.js 18+ (this project pins **20** via `.nvmrc`) and the **Expo Go** app on your phone.

```bash
# 1. install dependencies
npm install

# 2. start the dev server
npx expo start

# 3. scan the QR code with Expo Go (iOS/Android) — live reload is on
```

Prefer a simulator? `npm run ios`, `npm run android`, or `npm run web`.

---

## 🧮 How the Daily Verse Works

No server required — the verse of the day is derived from the date:

```js
index = (daysSinceLocalMidnight + offset) % versesInThisVoice
```

- `offset = 0` → today's verse — **stable all day, rolls over at your local midnight**
- *“Pull another word”* just bumps the offset to cycle through the rest

---

## 🗺️ Roadmap

**Phase 2 — make it sticky**
- Expand each voice to 50–100+ verses so the rotation lasts months
- Save your favorites (`AsyncStorage`) + a streak / history view

**Phase 3 — polish & personality**
- Real fonts (Fraunces / Newsreader via `expo-font`) to match the prototype
- More voices (The Poet; a Late-Night voice for 2am)
- Custom icon, splash, and a *“share this verse”* image card

**Phase 4 — ship it**
- Build with **EAS Build** (Expo's cloud build — no Xcode/Android Studio)
- Submit to the App Store & Play Store
- Optional daily push notification with the verse of the day

---

## 📜 Content & Licensing

- All verse text is **King James Version** — **public domain**, free to ship.
- The personality reflections are **original writing**.
- ⚠️ Modern translations (NIV, ESV, NLT, The Message…) are **copyrighted** and need a license before they're added.

---

<div align="center">

*Built one verse at a time.*
**The desert isn't the detour — it's the training.**

</div>
