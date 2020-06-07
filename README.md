# Remodeler

This is an application to help manage home remodeling projects.

You can access the staging example at http://remodeler.s3-website-us-west-2.amazonaws.com/

## Setup

In order for webpack to work you will need to add environment files.

Create `.env.development` and `.env.production` at the root of the project.

```
touch .env.development .env.production
```

Then install node modules.

```
npm i
```

## Development

To run the development server use the start command.

```
npm run start
```

Note that assets are not minified, and CSS isn't compiled to a separate file. This keeps builds fast for a better developer experience.

## Production

To build for production use the build command.

```
npm run build
```

This will output an optimized version of the application to `/dist`. This folder is ready to deploy to a production server.

## Analyzing bundle size

Build the project first then use the analyze command to see what is making bundles large.

```
npm run analyze
```

If bundles are getting too large, try [lazy loading components to enable code splitting](https://reactjs.org/docs/code-splitting.html#reactlazy).
