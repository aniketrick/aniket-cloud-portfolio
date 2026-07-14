# Aniket Chakraborty — Cloud Engineer Portfolio

A responsive portfolio website built from Aniket's CV and 3D profile image. The design is tailored for Cloud, DevOps and Platform Engineering roles and includes:

- A 3D hero profile with responsive scaling and motion
- AWS, Terraform, Kubernetes, GitOps and CI/CD skills
- Measurable Cognizant engineering achievements
- Sainsbury's leadership experience
- Four detailed cloud engineering project case studies
- Education, certification and contact sections
- Downloadable CV, LinkedIn and GitHub links
- Mobile, tablet and desktop layouts

## Run locally

```bash
npm install
npm run dev
```

Open the local address shown by Vite, normally `http://localhost:3000`.

## Create a production build

```bash
npm run build
npm run preview
```

The deployable website will be generated inside the `dist` folder.

## Deployment options

### Vercel or Netlify

Import this folder from GitHub. Use:

- Build command: `npm run build`
- Output directory: `dist`

### AWS S3 and CloudFront

Upload the contents of the `dist` folder to an S3 static website bucket or private S3 origin behind CloudFront. Set `index.html` as the default root object.

## Personal details and links

Profile content is stored in `src/data.ts`. Replace or update the values there when your CV, projects or contact details change.

The profile image and CV are stored in `public/assets`.
