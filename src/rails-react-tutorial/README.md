<p align="center">
  <img src="https://raw.githubusercontent.com/meilisearch/integration-guides/master/assets/logos/logo.svg" alt="MeiliSearch-Vue" width="200" height="200" />
</p>
<h1 align="center">Meilisearch Ruby on Rails + React</h1>

<h4 align="center">
  <a href="https://github.com/meilisearch/meilisearch">Meilisearch</a> |
  <a href="https://docs.meilisearch.com">Documentation</a> |
  <a href="https://discord.gg/meilisearch">Discord</a> |
  <a href="https://www.meilisearch.com">Website</a> |
  <a href="https://blog.meilisearch.com">Blog</a> |
  <a href="https://fr.linkedin.com/company/meilisearch">LinkedIn</a> |
  <a href="https://twitter.com/meilisearch">Twitter</a> |
  <a href="https://docs.meilisearch.com/faq/">FAQ</a>
</h4>

<p align="center">Integrate an extremely fast and relevant search into your Rails app using Meilisearch and React</p>

## 📖 Documentation

See our [Documentation](https://docs.meilisearch.com/learn/security/tenant_tokens.html#what-is-multitenancy) or our [API References](https://docs.meilisearch.com/reference/api/).

## 🎁 Content of this repository
In this repository, you will find a simple recipe RoR application that leverages Meilisearch and React to create a faceted search interface with a search-as-you-type experience. This application is the outcome of following [this tutorial](https://blog.meilisearch.com/how-to-integrate-an-extremely-fast-and-relevant-search-into-your-rails-app-using-meilisearch-and-react/).

## 📝 Requirements

- A running instance of [Meilisearch](https://github.com/meilisearch/meilisearch) v0.28
- [Ruby](https://www.ruby-lang.org/en/) >= 2.7
- [Ruby on Rails](https://guides.rubyonrails.org/getting_started.html#creating-a-new-rails-project-installing-rails) 7.0
- [Node.js](https://nodejs.org/) >=16.10
- [yarn](https://yarnpkg.com/) 1

## 🎬 Getting Started

### Prerequisites

[Download and launch Meilisearch](https://docs.meilisearch.com/learn/getting_started/quick_start.html) using the basic configuration. For example, by using [Docker](https://docs.docker.com/get-docker/) in your terminal.

```bash
# Fetch the latest version of Meilisearch image from DockerHub
docker pull getmeili/meilisearch:v1.0.1

# Launch Meilisearch in development mode with a master key
docker run -it --rm \
    -p 7700:7700 \
    -e MEILI_ENV='development' \
    -v $(pwd)/meili_data:/meili_data \
    getmeili/meilisearch:v1.0.1
```

### 1. Install dependencies

Navigate to the project folder and run:
```
bundle install && yarn
```

### 2. Set your Meilisearch credentials

Set your Meilisearch host and API key in the `config/initializers/meilisearch.rb` file.

### 3. Create, migrate and seed the database

Run the following commands:

```
bin/rails db:create
bin/rails db:migrate
bin/rails db:seed
```

### 4. Run the project
Start the development server by running:

```
bin/dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser and start searching with Meilisearch!
