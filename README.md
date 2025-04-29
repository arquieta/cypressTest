# Automatización E-commerce - Cypress

> **Author:** Diego Arquieta  
> **Context:** This repository was created as a part of a test requested by **Alejandra de KMS**.

Automated test suite for a fictional e-commerce web application covering:

- User registration and login  
- Product search (Strategy Pattern)  
- Add-to-cart flow  
- Complete checkout with payment  
- Retry logic & parallel execution (GitHub Actions + Cypress Cloud)

## Getting started

## Setup
npm install

## Local run
npx cypress open    
npx cypress run --browser chrome --headed

## CI / Parallel
npm run ci

## Cypress dashboard run

1.- Create account in Cypress Cloud
2.- Create a new project and copy the projectId
3.- Paste the projectId in cypress.config.ts:
export default defineConfig({
  projectId: 'abc123',   // ← tu id
  
});

4.- Record Key obtained in Project Settings › Record Keys
5.- Save key in an env variable
export CYPRESS_RECORD_KEY=<record_key>

6.- Run npx cypress run --record --key $CYPRESS_RECORD_KEY \ --parallel --group "local-run"


