# Deploying to GitHub Pages

The site deploys automatically to **https://kwame-minta2021.github.io** every time you push to the `main` branch. The workflow is in `.github/workflows/deploy.yml`.

## One-time setup

1. **Create the repository.** On GitHub, create a new **public** repository named exactly:

   ```
   Kwame-Minta2021.github.io
   ```

   A repository with this exact name becomes your user site at the root URL. Any other name would put the site at `https://kwame-minta2021.github.io/<repo-name>/`, and links would break unless you also set `base` in `astro.config.mjs`.

2. **Push this project.** From the project folder:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/Kwame-Minta2021/Kwame-Minta2021.github.io.git
   git push -u origin main
   ```

3. **Turn on GitHub Pages with Actions.** In the repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

4. **Watch the first deploy.** Open the **Actions** tab. The "Deploy to GitHub Pages" run takes about 1 to 2 minutes. When it turns green, the site is live.

## Every update after that

Edit files, then:

```bash
git add .
git commit -m "Describe the change"
git push
```

The site rebuilds and redeploys on its own. You can also re-run it by hand from **Actions → Deploy to GitHub Pages → Run workflow**.

## If a deploy fails

- Open the failed run in the **Actions** tab and expand the red step.
- **`npm run build` failed:** run `npm run build` locally. The error usually names the file, most often a typo in the frontmatter of a project or publication (for example, a missing quote or a URL without `https://`).
- **`npm ci` failed:** make sure `package-lock.json` is committed.
- **404 after a successful deploy:** check the repository name (step 1) and that Pages is set to **GitHub Actions** (step 3). Then wait a minute and hard-refresh.

## Custom domain (optional, later)

If you buy a domain, add it in **Settings → Pages → Custom domain**, add a `public/CNAME` file that contains only the domain, and change `site` in `astro.config.mjs` and the `Sitemap:` line in `public/robots.txt` to the new URL.
