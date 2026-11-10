# Sherralene Edusma — Portfolio

A responsive Next.js portfolio for Sherralene Edusma, with a neutral editorial design and a gallery that loads image files from the public `xshrrln/xsdesigns` GitHub repository.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Visit http://localhost:3000.

## Deploy to Vercel

1. Create a new GitHub repository, for example `sherralene-portfolio`.
2. Upload/push the contents of this folder to the repository root.
3. Sign in to Vercel with GitHub.
4. Select **Add New → Project**, then import `sherralene-portfolio`.
5. Keep the detected Next.js settings and select **Deploy**.

Vercel will automatically redeploy when you push future changes to the connected GitHub repository.

## Important: personalize before publishing

- In `components/Portfolio.js`, replace `your-email@example.com` with your preferred public contact email.
- Review project descriptions and links to ensure they reflect the final work you want to showcase.
- Add certificates when you have the images or details ready.
- The Art gallery uses the GitHub Contents Tree API to discover image files in `xshrrln/xsdesigns` and displays them from `raw.githubusercontent.com`. If the repository's default branch is not `main`, update `REPO` and `RAW` near the top of `components/Portfolio.js`.
- The gallery excludes image filenames containing `profile`, `avatar`, `favicon`, `icon`, or `logo`. Adjust that filter if you want those included.

## Tech

- Next.js App Router
- React
- CSS
- Lucide icons
