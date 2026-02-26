# msrgil2005-hub.github.io

This project is configured to deploy to GitHub Pages using GitHub Actions.

## Deploy

1. Push to the `main` or `master` branch.
2. In GitHub, open `Settings > Pages`.
3. Set **Source** to **GitHub Actions**.

The workflow in `.github/workflows/deploy.yml` builds a static export and publishes it.

Expected URL: https://msrgil2005-hub.github.io/