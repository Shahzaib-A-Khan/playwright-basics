# playwright-basics
End-to-end tests written with Playwright and TypeScript against two practice sites: saucedemo.com and the-internet.herokuapp.com.

## What's covered
- Login (valid and invalid), cart add and remove, logout
- Checkboxes, dropdowns, JavaScript alerts, file upload
- Assertions with `expect`, and a shared login helper

## Setup
npm install
npx playwright install

## Run the tests
npx playwright test

## Project structure
- `tests/` : Playwright test files
- `tests/test-data/` : files used by the tests
- `js-exercises/` : JavaScript practice scripts