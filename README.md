# 💻 Duban Zuluaga | Portfolio
A personal portfolio designed and built to function as a system terminal. Beyond showcasing projects, this space serves as an experiment in strictly modular component architecture and a retro CRT monitor aesthetic.

- https://www.soydz.com/
- https://www.duban-zuluaga-portafolio.vercel.app/

## 🚀 The Purpose
The goal was to create an interface that mimics a real operating system, where navigation feels like moving through directories and project details are presented as system logs. 
Technically, this project is an exercise in implementing **Atomic Design**, ensuring the UI remains scalable, maintainable, and consistent across the entire application.
## 🛠️ Built With
### Core Stack
![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-//badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
### Tools & Infrastructure
![Resend](https://img.shields.io/badge/resend-black?style=for-the-badge&logo=resend&logoColor=white)
![Lucide](https://img.shields.io/badge/lucide-react-blue?style=for-the-badge)
### 📐 Architecture
- **Design Pattern**: Atomic Design (Atoms $\rightarrow$ Molecules $\rightarrow$ Organisms)
- **Rendering**: Server Components & Server Actions (Next.js App Router)
- **Styling**: Tailwind CSS 4 (CSS-first configuration)
## 🏃 Local Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/202601-Ingenieria-Web/duban-zuluaga-portafolio.git
   cd duban-zuluaga-portafolio
   ```
2. Install dependencies:
    ```bash
    pnpm install
    ```
3. Environment Configuration:
   Create a .env.local file in the root directory with the following variables:
    ```
    RESEND_API_KEY=re_your_key_here
    TO_EMAIL=your-email@example.com
    ```
4. Run the development server:
    ```bash
    pnpm dev
    ```
    
    Visit: http://localhost:3000