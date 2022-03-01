# api-server
api server implementation.
## Today's Task summary.
### In steps:
* After creating the server and middlewares.
* created th database.
* created  two models(tables) and index.js modl for dealing with these two tables.
* in index.js requiring the sequelize (which is a package the ORM tool uses for sending request to the data base).
*  also in index I required the collection I created.
* also in index.js(model) i required these two moldes(tables) and the dotenv , the two models requiring to export them and the same for sequelize (it also to be exported) and also to connect it with the database url using **(  let sequelize = new Sequelize(url of the database, sequelizeOptions))**.
* we created new instances in the collection constructors for the two models (clothes,food).
* and then i created routers folder which has food and clothes routers.
* in each router file i required the express itself . Also, the model which i want to create routes for it, and the express.Router() method.
* then i created the whole routers for each model.
* then i required the router for each path in server.js and called them in it using app.use(router requiring name).
* them i connected (sync()) the express server not to work unless the postgress server is alive (the database is accessible).
* the last step was testing(which supposed to be written before the code itself) i tested the 404 status for bad route and method.
 Also tested each router with all it's methods.
 
 
 # links
 * [heroku App link](https://class04-app-prod.herokuapp.com)
 * [pull request link](https://github.com/ibrahimalaqoul/api-server/pull/1)
 * [Action Link](https://github.com/ibrahimalaqoul/api-server/actions)

