Set up an express server to create a build categorization site for the video game Path of Exile.

Used Pug to set up views to display information and handle navigation.

These include a home page with dummy login that uses a post request, a build list, a page for selected specific build. Then player information that follows the same structure.

I used a data folder in the express application for build information and player information.  It is rough data to just simulate having a database, and have something for the server to point to and render data from.

I also set up a utilities folder for error handling middleware.

There is a very basic styles folder linked for basic styling

Used express, body-parser, fs, nodemon, and pug as dependencies in the package.json.

Have a public folder where I can point to images, etc if time allows to update the project.
