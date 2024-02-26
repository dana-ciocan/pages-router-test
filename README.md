# App router test repo

This is a small repo to go with my blog post comparing the pages and app routers in Next.js: https://danaciocan.com/nextjs-pages-vs-app-router

## Pre-requisites

You will need to have the following installed in order to run this code:

1. Node.js
1. NVM (node version manager)

## Running this code

To run this code, do the following in the root of this repo:

1. Run `nmv use`
1. Run `npm install`
1. Run `npm run dev`

## Checking the routing

Once the app is running, you can go to:

1. http://localhost:3000 to visit the homepage
1. http://localhost:3000/product/1234 to visit the Product page for an imaginary product with ID 1234 - you can change the ID to anything you like and see it update in the UI

## Things to notice

Global styles are not allowed in the pages router, which means we _have_ to use CSS modules even when we know that the styles don't clash. In the app router, this is not a problem and you can use global CSS in your child components.

Sharing a nav bar between pages in a section is a lot trickier in pages router - it has to be a separate component that manually gets inserted into the page, rather than defining a new `layout.tsx` and putting it in the directory where you'd like it to apply.
