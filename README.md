# ☁️ Cloud-Native Interactive Portfolio

A modern, responsive, and highly animated personal portfolio application designed to showcase software engineering projects, professional experience, and technical skills. 

Built with **React (Vite)** and **Tailwind CSS v4**, this project goes beyond a standard frontend application by utilizing a **Serverless AWS Architecture** for high availability, secure global delivery, and automated CI/CD deployments.

## 🚀 Live Demo
[View Live Site](https://d2nc3vmmsmqdbq.cloudfront.net/)

## 🏗️ Architecture & Tech Stack

### Frontend Engineering
* **Framework:** React.js initialized via Vite for ultra-fast Hot Module Replacement (HMR) and optimized production builds.
* **Styling:** Tailwind CSS (v4) utilizing PostCSS. Features custom utility classes for Glassmorphism UI, advanced scrollbar styling, and neon text glowing effects.
* **Animations:** Framer Motion for smooth, hardware-accelerated scroll reveals and hover states.

### Cloud Infrastructure & DevOps
* **Hosting:** Amazon S3 (Static Website Hosting) configured with custom IAM Bucket Policies for secure, read-only public access.
* **CDN & Security:** AWS CloudFront deployed to serve the application globally from edge locations, ensuring sub-second load times and enforcing strict HTTPS/SSL security.
* **CI/CD Pipeline:** "Zero-touch" automated deployment pipeline utilizing **GitHub Actions**. Code merges to the `main` branch automatically trigger secure environment builds and sync optimized assets to AWS S3.

## ✨ Key Features
* **Zero-Touch Deployments:** Fully automated Git-to-AWS pipeline eliminating manual build overhead.
* **Dark-Mode Optimized UI:** Deep slate aesthetic with indigo and emerald gradient accents.
* **Interactive Project Grid:** Hover-responsive project cards detailing tech stacks, descriptions, and direct code/live links.
* **Performance Focused:** Minimal bundle sizing achieved through Vite's Rollup configuration and global edge-caching via CloudFront.

## 🛠️ Local Setup & Development

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/aniketrick/aniket-cloud-portfolio.git](https://github.com/aniketrick/aniket-cloud-portfolio.git)