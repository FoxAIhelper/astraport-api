# astraport-api
AstraPort API is the backend service built with **NestJS**.   It exposes endpoints for portfolio analysis, risk scoring, and integration with Stellar smart contracts.
# AstraPort API

AstraPort API is the backend service built with **NestJS**.  
It exposes endpoints for portfolio analysis, risk scoring, and integration with Stellar smart contracts.

## Repo Structure
- /docs        → API usage and endpoint documentation
- /examples    → Example API calls and integrations
- /src         → NestJS modules and services

## Modules
- Auth: JWT-based authentication
- Portfolio: Endpoints for wallet and market data
- Risk: Endpoints for risk scoring (from Core AI)
- Contracts: Integration with Soroban smart contracts

## Tech Stack
- NestJS (TypeScript)
- PostgreSQL
- TypeORM
- Stellar SDK

## Getting Started
1. Clone the repo
2. Install dependencies: `npm install`
3. Run the server: `npm run start:dev`

## Examples
See `/examples` for sample API requests and integrations.
