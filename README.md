# Filtering Tweets API

## OVERVIEW

The application will listen to tweets and track certain keywords and those tweets will be available through an API.

## SPECIFICATIONS

The keywords that is listening to, are: **platzi**, **open source** and **node**.  
Twitter API (https://developer.twitter.com/en/docs/tweets/filter-realtime/overview)  
In case of a keyword match, the tweet will be sent to a **RabbitMQ** queue, which will be processed and saved to **Redis**. It also has a **REST API** exposing the tweets we have saved.

### Technologies used:

- Node
- Express
- RabbitMQ
- Redis
- GraphQL
- Twitter API's

---

## How to use

Install all dependencies:

```
npm install
```

Run all services at once:

```
npm run dev
```

Run services separately:

```bash
# Run RabbitMQ server:
npm run rabbitmq
# Run Twitter server:
npm run twitter
# Run Express server:
npm run api
```