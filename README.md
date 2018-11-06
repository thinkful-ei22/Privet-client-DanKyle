# Privet!

## Brief Description

**Privet** uses a *Spaced Repetition* algorithm to speed up your learning.

Spaced repetition is a method for efficient learning that has you practice concepts or skills over increasing periods of time. It's based on the notion of a "forgetting curve," or the idea that over time, if we don't actively use or reflect on something we know, our knowledge decays.

With **Privet**, we help you stay ahead of that moment of forgetting, and we do it *efficiently*.

As you answer words correctly, we'll show you those words less frequently. If you guess the wrong answer, we'll give you more opportunities to practice that word. *Learning has never been easier!*

## Tech Stack

Front-end: React / Redux / CSS Grid [ [repo](https://github.com/thinkful-ei22/Privet-client-DanKyle) ]

Back-end: [ [repo](https://github.com/thinkful-ei22/Privet-server-DanKyle) ]

- Express.js server
- Node.js
- Passport/JWT for authentication
- MongoDB/Mongoose for data persistence
- Mocha/Chai for testing

## Deployed version

<https://privet-hello.herokuapp.com/>

### Demo User Account

```
Username: privet
Password: learnrussian
```

## App screenshots

![Mainpage][mainpage]

[mainpage]: https://s3.amazonaws.com/donics/Screen+Shot+2018-09-14+at+17.18.41.png "Mainpage"

![Practice page][practice]

[practice]: https://s3.amazonaws.com/donics/Screen+Shot+2018-09-14+at+17.19.36.png "Practice page"

![Progress page][progress]

[progress]: https://s3.amazonaws.com/donics/Screen+Shot+2018-09-14+at+17.20.41.png "Progress page"

## API - Request & Response examples

- [POST /api/login](#post-apilogin)
- [POST /api/refresh](#post-apirefresh)
- [POST /api/users](#post-apiusers)
- [GET  /api/users/progress](#get-apiusersprogress)
- [PUT  /api/users/reset](#put-apiusersreset)
- [GET  /api/word](#get-apiword)
- [POST /api/word](#post-apiword)

### POST /api/login

Example: POST <https://example.com/api/login>

Request body:

```json
{
  "username": "JohnSmith",
  "password": "correct-horse-battery-staple"
}
```

[ [more examples](#api---request--response-examples) ]

### POST /api/refresh

Example: POST <https://example.com/api/refresh>

Response body:

```json
{
  "authToken": "A_VALID_JWT"
}
```

[ [more examples](#api---request--response-examples) ]

### POST /api/users

Example: POST <https://example.com/api/users>

Request body:

```json
{
  "name": "John Smith",
  "username": "JohnSmith",
  "password": "correct-horse-battery-staple"
}
```

Response body:

```json
{
  "id": "MONGO_DOCUMENT_ID",
  "name": "John Smith",
  "username": "JohnSmith"
}
```

[ [more examples](#api---request--response-examples) ]

### GET /api/users/progress

Example: <https://example.com/api/users/progress>

Response body:

```json
{
  "questions": [
    {
      "russian": "Привет",
      "translit": "pree-vyEt",
      "english": "hello",
      "score": "1",
      "attempts": "1",
      "sessionScore": "1",
      "sessionAttempts": "1"
    },
    { "repeat": "for" },
    { "each": "word" }
  ]
}
```

[ [more examples](#api---request--response-examples) ]

### PUT /api/users/reset

Example: PUT <http://example.com/api/users/reset>

Request body: `empty`

Response: `status 200`

[ [more examples](#api---request--response-examples) ]

### GET /api/word

Example: <http://example.com/api/word>

Response body:

```json
{
  "word": "Привет",
  "translit": "pree-vyEt"
}
```

[ [more examples](#api---request--response-examples) ]

### POST /api/word

Example: POST <http://example.com/api/word>

Request body:

```json
{
  "answer": "hello" //_user_input
}
```

Response body:

```json
{
  "answer": "hello", //_answer_from_database
  "correct": "true"
}
```

[ [more examples](#api---request--response-examples) ]
