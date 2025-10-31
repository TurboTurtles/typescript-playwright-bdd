# typescript-playwright-bdd

# 🧪 Playwright + Cucumber + TypeScript + Node.js Framework

This project is a robust end-to-end test automation framework using:
- ✅ [Playwright](https://playwright.dev/) for browser automation
- ✅ [Cucumber](https://cucumber.io/) for BDD (Gherkin syntax)
- ✅ [TypeScript](https://www.typescriptlang.org/) for static typing
- ✅ [Node.js](https://nodejs.org/) as the runtime
- ✅ [Visual Studio Code](https://code.visualstudio.com/) for development

---

## 🚀 Quickstart

### 1. Prerequisites

#### [Visual Studio Code](https://code.visualstudio.com/)

[Download](https://code.visualstudio.com/Download) and install from the official website.

After installing, open VSCode and install the official Playwright Test for VSCode extension:

- Go to the Settings -> Extensions tab (or press Ctrl+Shift+X / Cmd+Shift+X)
- Search for: Playwright Test for VSCode
- Publisher: Microsoft microsoft.com (Run Playwright Test tests in Visual Studio Code.)
- Install the extension.


Also install the official Cucumber extension:

- Go to the Settings -> Extensions tab (or press Ctrl+Shift+X / Cmd+Shift+X)
- Search for: Cucumber
- Publisher: Cucumber cucumber.io (Cucmber for Visual Studio Code)
- Install the extension.


#### [Node.js](https://nodejs.org/) 

##### 🪟 Windows

Go to the official [Node.js](https://nodejs.org/en/download) download page:

- Download the latest LTS version.
- Run the installer.
- Leave default settings checked (includes npm).
- Follow the prompts to complete installation.

Verify installation:
```bash
node -v
```
```bash
npm -v
```

##### 🍎 macOS

Install Homebrew (if not installed):
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install Node.js:
```bash
brew install node
```

Verify installation:
```bash
node -v
```
```bash
npm -v
```

#### [Git](https://git-scm.com) 

##### 🪟 Windows

Go to the [Git](https://git-scm.com/downloads) downloads page:

- Download and run the installer.
- Choose default options unless you have specific needs.
- After installation, open a new terminal (Command Prompt or Git Bash) and verify:

```bash
git --version
```

##### 🍎 macOS

Check if Git is already installed:
```bash
git --version
```

If not installed or needs update:
```bash
brew install git
```

### 2. Clone the Repo


Setup your repository.

#### [Option 1] In VSCode directly:

- Click Source Control icon on the left
- Select Clone Repository
- https://github.com/vskryabin/typescript-playwright-bdd.git
- Select a directory where the project will be located

#### [Option 2] Or, alternatively, in terminal:
```bash
cd your-projects-directory
```
```bash
git clone https://github.com/vskryabin/typescript-playwright-bdd.git
```
```bash
cd typescript-playwright-bdd
```

### 3. Install Dependencies


#### 🍎 macOS

In VSCode, open Terminal and run:
```bash
npm install
```
Install Plawright browsers:
```bash
npx playwright install
```

#### 🪟 Windows
- Open Powershell as Admin (Run as Administrator)
- Check current execution policy
```bash
Get-ExecutionPolicy
```
- If Restricted, change to RemoteSigned
```bash
Set-ExecutionPolicy RemoteSigned
```
- Validate that changed
```bash
Get-ExecutionPolicy
```
Then in VSCode, open Terminal and run:
```bash
npm install
```
Install Plawright browsers:
```bash
npx playwright install
```

### 4.1 Running BDD tests

BDD Playwright tests:
```bash
npm run bdd -- "@bdd1"
```

### 4.2 Running Playwright tests

Playwright tests:
```bash
npx playwright test
```
```bash
npx playwright test tests/test.spec.ts
```
```bash
npx playwright test -g "partial test name"
```
```bash
npx playwright test -g "partial test name" -g "another partial test name"
```
```bash
npx playwright test --grep-invert "excluded partial name"
```

Playwright report:
```bash
npx playwright show-report test-reports
```

### More

Codegen:
```bash
npx playwright codegen
```

- [Playwright Documentation](https://playwright.dev/docs/test-cli)