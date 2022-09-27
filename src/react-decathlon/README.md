<p align="center">
  <img src="https://raw.githubusercontent.com/meilisearch/integration-guides/master/assets/logos/logo.svg" alt="MeiliSearch-Vue" width="200" height="200" />
</p>
<h1 align="center">React + Meilisearch tutorial</h1>

<h4 align="center">
  <a href="https://github.com/meilisearch/meilisearch">Meilisearch</a> |
  <a href="https://docs.meilisearch.com">Documentation</a> |
  <a href="https://www.meilisearch.com">Website</a> |
  <a href="https://blog.meilisearch.com">Blog</a> |
  <a href="https://twitter.com/meilisearch">Twitter</a> |
  <a href="https://docs.meilisearch.com/faq">FAQ</a>
</h4>

<p align="center">
  <a href="https://slack.meilisearch.com"><img src="https://img.shields.io/badge/slack-meilisearch-blue.svg?logo=slack" alt="Slack"></a>
  <a href="https://github.com/meilisearch/meilisearch/discussions" alt="Discussions"><img src="https://img.shields.io/badge/github-discussions-red" /></a>
</p>

<p align="center">How to implement instant search within 5 minutes in your React app!</p>

## 📖 Documentation

See our [Documentation](https://docs.meilisearch.com/learn/security/tenant_tokens.html#what-is-multitenancy) or our [API References](https://docs.meilisearch.com/reference/api/).

## 🎁 Content of this repository
In this repository, you will find a React application that leverages Meilisearch to create a search-as-you-type experience. This application is the outcome of the tutorial titled [How to implement instant search within 5 minutes in your React app!](https://blog.meilisearch.com/how-to-implement-instant-search-within-5-minutes-in-your-react-app/).

## 📝 Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/)
- [npm](https://docs.npmjs.com/cli/v8/configuring-npm/install) or [yarn](https://yarnpkg.com/) 

## 🎬 Getting Started

### 1. Install dependencies

Navigate to the project folder and run:
```
npm install
```

or 

```
yarn
```

### 2. Run the setup

```bash

yarn setup_meili

```
or 

```bash

npm run setup_meili

```

This does the following:

- Download and run Meilisearch using Docker 

- Creates an index called `decathlon` in your Meilisearch instance.

- Adds documents to the index


### 5. Run the project

You can now run the project. The front-end client is now communicating with your Meilisearch instance.

```bash

yarn start

```

or

```bash

npm run start

```

 Visit `http://localhost:3000` in your browser and start searching with Meilisearch!
