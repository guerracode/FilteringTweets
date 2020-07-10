# Filtering Tweets API

## OVERVIEW

The application will listen to tweets and track certain keywords and those tweets will be available through an API.

---

## SPECIFICATIONS

The keywords that is listening to, are: **platzi**, **open source** and **node**.
Twitter API (https://developer.twitter.com/en/docs/tweets/filter-realtime/overview)
In case of a keyword match, the tweet will be sent to a **RabbitMQ** queue, which will be processed and saved to **Redis**. It also has a **REST API** exposing the tweets we have saved.

---

### Technologies used:

- Node
- Express
- RabbitMQ
- Redis
- GraphQL
- Twitter API’s

---

## How to use

Install all dependencies:

```bash
npm install
```

To start getting tweets in real-time and being able to make requests to the APIs, start the servers.

- **Server Twitter**: To get the filtered tweets at real time.
- **Server RabbitMQ**: To get all the tweets that the twitter server gets, and store them into Redis.
- **Server API**: To expose all the tweets that are stored on Redis, could be using API REST methods or with GraphQL queries, it depends on what API server you are using.

Run all servers at once:

```bash
npm run dev
```

Run servers separately:

```bash
# Run RabbitMQ server:
npm run rabbitmq
# Run Twitter server:
npm run twitter
# Run Express server:
npm run api
```

---

## API REST

To use the api rest functionality, move to api branch

- Run all servers, it's explained above.👆🏼
- You could use postman to test the API.
- Send a **GET** request, to get all the tweets stored on Redis.

  - Endpoint example: http://localhost:3000/api/tweets

  Response Example:

  ```json
  {
    "tweets": [
      {
        "text": "@platzi Hola quiero inscribirme en Platzi pero sólo puedo pagar mensual, quiero hablar con ustedes me pueden enviar… https://t.co/Br0t2PGi7j",
        "user": "tiburon1929",
        "user_name": "Tiburon",
        "date": "Fri Jul 10 06:24:24 +0000 2020"
      },
      {
        "text": "test #node",
        "user": "siulchg",
        "user_name": "luis chavez",
        "date": "Fri Jul 10 06:24:26 +0000 2020"
      },
      {
        "text": "Don't miss: SUSE Wrangles Rancher Labs to Boost Kubernetes Cred https://t.co/TbpnIkY0JH #ai #cloud #cloudnative… https://t.co/zs4Z9mXA8g",
        "user": "sdxcentral",
        "user_name": "SDxCentral",
        "date": "Fri Jul 10 16:35:13 +0000 2020"
      }
    ],
    "message": "All Correct!"
  }
  ```

- Send a **DELETE** request, to delete all tweets stored on Redis.

  - Endpoint example: http://localhost:3000/api/tweets

  Response Example:

  ```json
  "tweets": []
  "message": "Tweets deleted Correctly!"
  ```

---

## API GraphQL

To use the api rest functionality, move to graphql branch

- Run all servers, it's explained above.👆🏼
- You could use postman to test the API on the GraphQL functionality or use GraphiQL when starting graphql server.
- Endpoint example: http://localhost:3000/api

  - Send GraphQL query Example:

    ```graphql
    {
      getTweets {
        text
        user
        user_name
        date
      }
    }
    ```

    Response Example:

    ```json
    {
      "tweets": [
        {
          "text": "@platzi Hola quiero inscribirme en Platzi pero sólo puedo pagar mensual, quiero hablar con ustedes me pueden enviar… https://t.co/Br0t2PGi7j",
          "user": "tiburon1929",
          "user_name": "Tiburon",
          "date": "Fri Jul 10 06:24:24 +0000 2020"
        },
        {
          "text": "test #node",
          "user": "siulchg",
          "user_name": "luis chavez",
          "date": "Fri Jul 10 06:24:26 +0000 2020"
        },
        {
          "text": "Don't miss: SUSE Wrangles Rancher Labs to Boost Kubernetes Cred https://t.co/TbpnIkY0JH #ai #cloud #cloudnative… https://t.co/zs4Z9mXA8g",
          "user": "sdxcentral",
          "user_name": "SDxCentral",
          "date": "Fri Jul 10 16:35:13 +0000 2020"
        }
      ],
      "message": "All Correct!"
    }
    ```
