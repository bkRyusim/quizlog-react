# quizlog-go

Frontend code of `Quizlog`.

Project for graduation in `Design Projects(Capstone Design)` in `CAU`.

Try in [Quizlog Web App](http://quizlog-react.s3-website.ap-northeast-2.amazonaws.com/)

## About Quizlog

`Quizlog` is Quiz platform based on user's posts on `Tistory`. Users can make their own Quiz for self-study.

## Project Stack

### Frontend

- `javascript`
- `react.js`

### Backend

- `golang`
- `fiber`
- `ent`
- `facebookgo/inject`

## Try code
```shell
npm start
```

## Setup
`config.js` should prepare:
```js
export const API_SERVER_DOMAIN = "YOUR_API_DOMAIN.COM"
export const CLIENT_DOMAIN = window.location.protocol + "//" + window.location.hostname
```