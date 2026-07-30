## Why this project?

Instead of building a generic test script for a random site, I chose **SauceDemo** as a standardized demo application so the project could focus on **automation framework design** rather than business-domain complexity. This allowed me to demonstrate **framework architecture**, **Page Object Model refactoring**, and reusable **custom Playwright fixtures**.

## 🛠️ Tech Stack & Key Features

- **Language & Runtime:** TypeScript, Node.js
- **Testing Framework:** Playwright (E2E Test Runner)
- **Architecture Pattern:** Page Object Model (POM) for maximum maintainability and reusability.
- **Custom Fixtures:** Isolated test contexts with reusable setup and teardown logic to help reduce duplicated setup code and improve test reliability.
- **Reporter & CI Ready:** Comprehensive HTML test reporting.

## 🏗️ Architecture & Project Structure

The project is organized to separate test logic from page interactions, making the framework easier to maintain and extend:

- `pages/`: Page Object classes that define UI elements and page-specific actions (e.g., `LoginPage`, `ProductsPage`).
- `tests/`: Test specifications with clear, declarative assertions.
- `fixtures/`: Custom Playwright fixtures to streamline authentication and test setup.
- `playwright.config.ts`: Provides centralized configuration for multi-browser execution, timeouts, and reporting.

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/moonyako/SauceDemo-Playwright-Framework.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run tests:**
   ```bash
   npx playwright test
   ```
