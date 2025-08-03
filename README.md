# MeeraOS - An Interactive Portfolio

Welcome to MeeraOS, a personal portfolio website designed to be an interactive and engaging showcase of my professional journey. This project is built with a modern tech stack and is fully open source for anyone to fork and adapt.

**Live Site:** https://meeraos.vercel.app/

 

## About The Project

This isn't just a static resume. MeeraOS is a dynamic application that reflects my 16+ years of experience in project management and my passion for Generative AI. It includes an interactive chatbot, a showcase of my AI projects, and a detailed history of my professional experience.

### Built With

  * **[React](https://reactjs.org/)** - The web framework used.
  * **[Vite](https://vitejs.dev/)** - For a blazing fast development experience.
  * **[Tailwind CSS](https://tailwindcss.com/)** - For modern, utility-first styling.
  * **[Framer Motion](https://www.framer.com/motion/)** - For beautiful and simple animations.
  * **[React Router](https://reactrouter.com/)** - For client-side routing.

## Features

  * **🤖 Interactive AI Chatbot:** Ask questions about my career and get instant answers from a Gemini-powered chatbot.
  * **💡 GenAI Showcase:** Explore a collection of my hands-on Generative AI projects.
  * **💼 Detailed Experience:** An overview of my roles at companies like IQVIA, Accenture, CSC, and TCS.
  * **🏆 Certifications:** A display of my professional certifications, including PMP and CSM.
  * **📱 Fully Responsive:** Designed to look great on all devices.

## Using This Template For Your Own Portfolio

This project is open source\! If you'd like to use it as a template for your own portfolio, please follow these steps.

### Prerequisites

  * Node.js (v18 or higher recommended)
  * npm or yarn

### Installation

1.  **Fork the repository** by clicking the "Fork" button on the top right of this page.
2.  **Clone your forked repository:**
    ```bash
    git clone https://github.com/YourUsername/meeraos.git
    ```
3.  **Navigate into the project directory:**
    ```bash
    cd meeraos
    ```
4.  **Install the dependencies:**
    ```bash
    npm install
    ```

### Customization

To make this portfolio your own, you'll need to customize the following files:

1.  **`public/` folder:**

      * Replace `meera-profile.jpg` with your own profile picture.
      * Add your resume PDF and update the link in `src/components/Resume.jsx`.
      * Replace the company logos with the ones you need.

2.  **`src/components/` folder:**

      * `Experience.jsx`: Update the `experiences` array with your work history.
      * `Education.jsx`: Update with your educational background.
      * `Contact.jsx`: Change the email, phone, and LinkedIn details.
      * `Certifications.jsx`: Update the `certs` array with your certifications.
      * `GeminiChat.jsx`: **Most importantly**, update the `meeraContext` variable with your own professional summary so the chatbot can represent you accurately.
      * `GenAI/` folder: Update the components here to link to your own projects.

3.  **API Key for Chatbot:**

      * This project uses the Google Gemini API for the chatbot. To enable it, you'll need to get a free API key from [Google AI Studio](https://ai.google.dev/).
      * Create a `.env.local` file in the root of your project.
      * Add your API key to this file:
        ```
        VITE_GEMINI_API_KEY=YOUR_API_KEY_HERE
        ```

### Running the Project

```bash
npm run dev
```

This will start the development server, usually at `http://localhost:5173`.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
