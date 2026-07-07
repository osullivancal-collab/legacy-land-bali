# Deploying Dewayu Utama Land — Continuous Deployment Setup

This repo is git-initialized and ready to push. Once connected to GitHub + Vercel,
every future change I make gets deployed automatically — no more manual zip downloads.

## One-time setup

1. **Create a GitHub repo** (on github.com): New repository → name it e.g. `dewayu-utama-land` → keep it empty (no README/gitignore, we already have those).

2. **Push this code to it** (I'll do this automatically if you connect GitHub here in chat;
   otherwise run these commands yourself from this folder):
   ```
   git remote add origin https://github.com/YOUR_USERNAME/dewayu-utama-land.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect Vercel** (on vercel.com):
   - New Project → Import the GitHub repo you just created
   - Framework preset: **Other** (this is a plain static site, no build step needed)
   - Build command: leave blank
   - Output directory: leave as root (`.`)
   - Deploy

4. **Point your domain** at the Vercel project (Vercel → Project → Settings → Domains),
   replacing the placeholder `dewayu-utama-land.vercel.app` in `data/site.js` with your
   real domain once you have one.

## After setup — the new workflow

Every time I make a change (new listing, new photos, copy edits), instead of sending you
a zip:
- I push the change to this GitHub repo
- Vercel picks it up automatically and redeploys within ~30 seconds
- Your live site updates itself — nothing to download or re-upload

You'll still get a preview link to review before anything goes live, if you want a
review step — just say so and I'll push to a preview branch instead of `main`.
