# Filtering Tweets API

## OVERVIEW

The application will listen to tweets and track certain keywords and those tweets will be available through an API.

---

## API GraphQL

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

- Run all servers.
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
