[![Build Status](https://travis-ci.com/julianchurchill/goboard.svg?branch=master)](https://travis-ci.com/julianchurchill/goboard)

# Development

To start the C# backend and serve the Angular front end with automatic rebuilding of the Angular app when the code is changed go to GoBoard and run `dotnet run`.

Go to http://localhost:5000 to see the app.

To run the front end unit tests go to GoBoard\ClientApp and run `npm run test`.

# Publishing

Committing to the repository will trigger a build in [Travis CI](https://travis-ci.com/julianchurchill/goboard).

Committing to the master branch will trigger a deployment to AWS where it will be served at a particular URL.

# TODO

- &#x2611; Clamp clicks to discrete board points
- Stop playing on an occupied point
- Choose colour
- Move list should be limited in size and scrollable
- Retrieve game from backend
- Persist game in backend (not just in memory)
- Allow undo
- Allow pieces to be removed when captured
- Note captured totals per side
- Pass button
- Start new game
- Game list (to review or continue)
- Annotation for scoring (mark black/white territory)
- Calculate score by using annotations
