# Birthday story

## Run it

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

## Make it yours

All words and story data live in `data/story.ts`:

- `profile` — her name and your name
- `quizQuestions` — questions, choices, answers, and responses
- `memories` — timeline content and photo paths
- `gifts` — the three surprises
- `letter` — the birthday letter
- `secret` — the five-tap hidden surprise

Put photos in `public/images/` and keep their names aligned with the paths in `data/story.ts`. Put your optional song at `public/music/our-song.mp3`. Missing media deliberately falls back to an elegant placeholder so the experience never breaks while you are still assembling it.
