# SauceDemo Playwright Automation Framework

 Playwright + TypeScript automation portfolio covering **UI end-to-end testing** and **REST API testing**.

- **UI Testing:** SauceDemo
- **API Testing:** DummyJSON

> SauceDemo and DummyJSON are independent test targets. SauceDemo is used to demonstrate UI automation framework design, while DummyJSON is used to demonstrate REST API testing with Playwright.

## Why This Project?

I chose **SauceDemo** as a standardized demo application so the UI automation work could focus on **framework design**, **Page Object Model (POM)**, reusable **custom Playwright fixtures**, authentication handling, and end-to-end test scenarios rather than business-domain complexity.

This project includes **REST API automation using DummyJSON** to demonstrate API request handling, CRUD operations, HTTP status validation, and JSON response assertions **with Playwright**.

## 🛠️ Tech Stack & Key Features

- **Language & Runtime:** TypeScript, Node.js
- **Testing Framework:** Playwright
- **UI Automation:** End-to-end testing with SauceDemo
- **API Automation:** REST API testing with DummyJSON
- **Architecture:** Page Object Model (POM) to improve maintainability and reusability
- **Custom Fixtures:** Reusable setup and page-object initialization
- **Authentication:** Playwright storage state for reusable authenticated sessions
- **Cross-Browser Testing:** Chromium, Firefox, and WebKit
- **Reporting:** Playwright HTML reports

## 🌐 API Testing

The API test suite uses **DummyJSON** as an independent public REST API for demonstrating Playwright API automation.

Current coverage includes:

| Method | Scenario | Validation |
|---|---|---|
| GET | Retrieve products | Status code, product properties, data values |
| POST | Create a product | Status code and response data |
| PUT | Update a product | Status code and updated response data |
| DELETE | Delete a product | Status code, deletion status, deletion timestamp |

The API tests demonstrate:

- Playwright `request` fixture
- GET, POST, PUT, and DELETE operations
- Request payloads for POST and PUT
- HTTP status code validation
- JSON response parsing
- Response body assertions

## 🏗️ Architecture & Project Structure

The project separates UI test logic, page interactions, reusable fixtures, and API tests to make the framework easier to maintain and extend.

```text
.
├── pages/                  # Page Object classes
├── fixtures/               # Custom Playwright fixtures
├── tests/
│   ├── api/                # DummyJSON API tests
│   │   ├── products-get.spec.ts
│   │   ├── products-post.spec.ts
│   │   ├── products-put.spec.ts
│   │   └── products-delete.spec.ts
│   └── ...                 # SauceDemo UI tests
└── playwright.config.ts    # Playwright configuration
```

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/moonyako/SauceDemo-Playwright-Framework.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run all tests

```bash
npx playwright test
```

### 4. Run API tests only

```bash
npx playwright test tests/api
```

