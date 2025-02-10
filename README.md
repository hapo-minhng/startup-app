# Cloning the repository

```bash
git clone https://github.com/hapo-minhng/startup-app.git
cd startup-app
```

# Installation
Install the project dependencies:

```bash
npm install
```
# Set up environment variables
Create a .env.local at the root of the project:

```bash
AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION="vX"

SANITY_WRITE_TOKEN=
```
Replace the placeholder values with actual Sanity credentials. You can obtain these credentials by signing up & creating a new project on the Sanity website.

# Run the project

```bash
npm run dev
```
