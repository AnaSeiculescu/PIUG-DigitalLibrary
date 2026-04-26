# PIUG Digital Library 📚

A small **React** web app (TypeScript, Vite, React Router, Bootstrap) for the PIUG project. This guide assumes you are new to working in an IDE, a command-line terminal, and a Git team repository—take it one step at a time. 🐣

---

## 1. Get access to this repository on GitHub 🔑

You can’t push code or see private coursework until you are a **collaborator** on the repo (or a member of the course organization).

1. **Use a GitHub account**  
   If you don’t have one yet, create it at [github.com](https://github.com/signup). Use an email you check often—invites and notifications go there.

2. **Send your teacher or repo owner the exact username**  
   They need the **username** (not the password) that appears on your GitHub profile, e.g. `alex-doe`, so they can add you with the right permissions.

3. **Wait for the invitation**  
   You’ll get an **email** from GitHub or a notification on the site. Open it and click **Accept invitation** before it expires. If you don’t see the email, check spam or log in to GitHub and look under **Notifications** (bell icon).

4. **Open the project page**  
   After you’re in, the repository will appear on your profile or in the org’s list. Bookmark it. You’ll use this page for issues, pull requests, and the green **Code** button when you need the clone URL.

💡 *Tip:* Until you have access, you won’t be able to clone a private repository. If something fails, double-check the invite and that you’re logged into the right GitHub account in the browser.

---

## 2. What you need on your computer 🧰

- 🧩 **[Node.js](https://nodejs.org/)** (LTS version is best). It installs `node` and `npm` (Node Package Manager), which this project needs to run and build.
- 🌳 **Git** (usually already installed, or get it from [git-scm.com](https://git-scm.com/)). You’ll use it to `clone` the repository once you have access.
- 🖱️ **[Cursor](https://cursor.com/)** (or another editor)—this is where you’ll edit code and use the **integrated terminal** below.

If you’re unsure whether Node is installed, open a terminal and run:

```bash
node -v
npm -v
```

You should see version numbers, not an error.

---

## 3. Get the project on your machine (clone) 🐑

1. On the GitHub page of this repo, click the green **Code** button and copy the **HTTPS** URL (something like `https://github.com/…/PIUG-DigitalLibrary.git`).

2. In a folder where you keep university projects, open a terminal and run (paste your real URL):

   ```bash
   git clone https://github.com/YOUR-ORG-OR-USER/PIUG-DigitalLibrary.git
   cd PIUG-DigitalLibrary
   ```

3. After that, the **project root** is the `PIUG-DigitalLibrary` folder. All commands in the next sections are run from there.

---

## 4. Using the terminal in Cursor (step by step) 🖥️

The **terminal** is a text window where you type commands; the computer runs them in order. In Cursor, you don’t have to use a separate app—the terminal is inside the editor.

1. **Open the project in Cursor**  
   **File → Open Folder** (or **Open…**) and select the `PIUG-DigitalLibrary` folder you cloned (the one that contains `package.json`).

2. **Open the integrated terminal**  
   - Menu: **Terminal → New Terminal**, or  
   - Shortcut: **Ctrl+`** (backtick) on Windows, or **Ctrl+J** / **View → Terminal** depending on your keybindings.  
   A panel usually appears at the bottom of the window.

3. **Check you’re in the right folder**  
   The last part of the prompt should show `PIUG-DigitalLibrary` (or the path to it). If not, go to the project root:

   ```bash
   cd path\to\your\PIUG-DigitalLibrary
   ```

4. **How to run a command**  
   Type the command, press **Enter**, and wait until it finishes. If you see a question, read it; if the command fails, copy the **red** error text and ask your lab instructor.

5. **Stop a running process**  
   The dev server (next section) runs until you stop it. Press **Ctrl+C** in the same terminal. Don’t close Cursor without stopping it, or the port may stay busy (your teacher can help you free it).

That’s the loop for this course: open repo → open terminal in Cursor → `npm` commands in the right folder.

---

## 5. Install dependencies 📦

Dependencies are the libraries listed in [package.json](package.json). You download them once (or after pulling changes) with **npm** from the project root:

```bash
npm install
```

This creates a `node_modules` folder. It can take a minute. You normally **do not** commit `node_modules` to Git; your `.gitignore` already excludes it.

---

## 6. Run the app in development 🚂

Start the Vite dev server (hot reload while you code):

```bash
npm run dev
```

- The terminal will show a local URL, usually **http://localhost:5173** (or another port if 5173 is taken).
- Open that URL in your browser, or in some setups you can **Ctrl+click** the link in the terminal to open it.

To stop the server, go back to the terminal and press **Ctrl+C**.

---

## 7. If you get stuck 🆘

- **“Command not found” for `node` or `npm`** → Node.js isn’t installed or isn’t on your PATH. Reinstall the LTS version from [nodejs.org](https://nodejs.org/) and restart Cursor.
- **“EACCES” or permission errors** → Don’t run `npm` as admin unless your instructor says so; try a folder you own, like `Documents\Projects`.
- **Port already in use** → Another `npm run dev` is still running. Find that terminal and **Ctrl+C**, or use the port Vite suggests in the log.

You’re in the right place. Small errors are normal; saving your work, committing, and asking early saves time. Happy building. 🎉
