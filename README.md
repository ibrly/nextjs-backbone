# nextjs-backbone

A Next.js (pages router) reference project covering React basics, authentication flows, Redux state, Context, and integrations with third-party libraries. UI is built with Ant Design and React Bootstrap.

## Getting started

```bash
cp .env.example .env   # NEXT_PUBLIC_BACK_APP_URL points at the backend API
npm install
npm run dev            # http://localhost:3000
```

## What's inside

| Section | Path | Topics |
|---------|------|--------|
| Basics | [pages/basics](pages/basics) | props, lists, conditional rendering, binding, styling, child to parent events |
| Context | [pages/context](pages/context) | React Context shared across pages ([Context/AppContext.js](Context/AppContext.js)) |
| Authentication | [pages/authentication](pages/authentication) | sign up, log in, profile, forgot and reset password, email confirmation |
| Authorization | [pages/authorization](pages/authorization) | protecting pages for signed-in users |
| Meetups CRUD | [pages/meetups](pages/meetups) | list, detail (`[meetupid]`), create, update and delete against the API |
| Externals | [pages/externals](pages/externals) | animations, carousels (Swiper), charts (Ant Design Charts), Stripe payments, Zoom SDK |

## Structure

```
store/       # Redux Toolkit store, reducers and modules, persisted with redux-persist
services/    # API calls for authentication and meetups
http/        # shared axios instance
components/  # layout, auth forms, payments, charts and animation components
```

## Scripts

```bash
npm run dev
npm run build
npm start
```
