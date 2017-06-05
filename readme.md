## What is this?

Just you wait folks!

## Sample Data

To load sample data, run the following command in your terminal:

```bash
npm run sample
```

If you have previously loaded in this data, you can wipe your database 100% clean with:

```bash
npm run blowitallaway
```

That will populate 16 stores with 3 authors and 41 reviews. The logins for the authors are as follows:

|Name|Email (login)|Password|
|---|---|---|
|Wes Bos|wes@example.com|wes|
|Debbie Downer|debbie@example.com|debbie|
|Beau|beau@example.com|beau|


## 4 Core Concept - Routing

in app.js => 
          26 // Takes the raw requests and turns them into usable properties on req.body
          27 app.use(bodyParser.json());
          28 app.use(bodyParser.urlencoded({ extended: true }));

Node.js body parsing middleware. [Body Parser](https://github.com/expressjs/body-parser)

## 5 Core Concept - Templating

in app.js => 
          19 // view engine setup
          20 app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
          21 app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too

it's possible to extends layout.

## 6 Core Concept - Template Helpers

in app.js => 
          55 // pass variables to our templates + all requests
          56 app.use((req, res, next) => {
          57 res.locals.h = helpers;
          58 res.locals.flashes = req.flash();
          59 res.locals.user = req.user || null;
          60 res.locals.currentPath = req.path;
          61 next();
          62 });




