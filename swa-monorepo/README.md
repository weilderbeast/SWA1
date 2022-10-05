# SWA Assignment 1

# Structure

- This is a monorepo set-up, built with [turborepo](https://turborepo.org)
- The apps package contains the API provided, and the assignment itself
- The app is built with react and typescript using [create-vite](https://vitejs.dev/)
- The packages directory has the linting and ui packages to be shared by multiple apps (i was planning to make all the assignments into one repository for ease of use for myself, but will re-consider for the teacher)
- The ui package has some reusable components with a syntax i like to steal from [chakra-ui](https://chakra-ui.com)
- The assignment itself has custom built types, formatters, ui, and on-the-fly switching for which kind of request it should use (fetch/xhr)
- Tip: if you try to use the post page, get a chrome plugin to allow cors on localhost (i bet you already knew that), but it's only a problem on chrome (as far as i'm aware)

# Pages

- There's 2 pages, `/` and `/post`
- I was too lazy to make a button to switch to them so you can manually write the URL

# Usage

- Navigate to `/apps/weather_report` and run `yarn start` to run the server (you should really do that first as the requests come in at page render time)
- Navigate to `/apps/assignment-one` and run `yarn install` to install appropriate packages, then run `yarn dev` to run the web app
- Click the city name to change which city is being displayed and fetched for
- Click the button next to the city name to change the request type used
- Navigate to `/post` to post data to the server (i could not figure out the structure for it but i did get it a couple of times so good luck)
