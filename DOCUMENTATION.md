Thank you for using Turbo!
<<<<<<< HEAD
https://www.turbo360.co
=======
http://www.turbo360.co
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0

Think of this file as quick-guide when you need to look something up or get stuck. Reading the entire page from top-to-bottom (though not a bad thing) is probably not necessary - just know that this file is here whenever you have questions.


- - - - - - - - - - - - - - - - - - SCAFFOLDING PROJECTS - - - - - - - - - - - - - - - - - - 

Turbo scaffolds projects in three ways:

<<<<<<< HEAD
VERTEX PROJECTS | $ turbo new <MY_PROJECT_NAME>
- After creating, cd into the project directory and run $ npm install
- Vertex projects are full stack apps that closely follow Node/Express architecture.

REACT/REDUX PROJECTS | $ turbo new <MY_PROJECT_NAME> --react
=======
STATIC PROJECTS | $ turbo new <MY_PROJECT_NAME> --static
- After creating, cd into the project directory and run $ npm install
- Static projects consist of conventional HTML/CSS/JS.
- Included in assets are Bootstrap and JQuery.
- The gulpfile.js config file defines the build tasks which concatenate and minify the assets to a 'dist' directory

REACT/REDUX PROJECTS | $ turbo new <MY_PROJECT_NAME>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
- After creating, cd into the project directory and run $ npm install
- This scaffolds a project with REACT/REDUX configured
- The REACT/REDUX source code is in the 'src' directory
- A webpack.config.js file is included with some basic webpack configuration. Feel free to adjust as needed.

<<<<<<< HEAD
STATIC PROJECTS | $ turbo new <MY_PROJECT_NAME> --static
- After creating, cd into the project directory and run $ npm install
- This scaffolds a project with just a static frontend, no backend configuration.
- The Express project code is under the 'server' directory
- A webpack.config.js file is included with some basic webpack configuration. Feel free to adjust as needed.
- The gulpfile.js config file defines the build tasks which concatenate and minify the assets to a 'dist' directory
=======
REACT WITH EXPRESS PROJECTS | $ turbo new <MY_PROJECT_NAME> --express 
- After creating, cd into the project directory and run $ npm install
- This scaffolds a project with REACT/REDUX as well as an Express project.
- The Express project code is under the 'server' directory
- A webpack.config.js file is included with some basic webpack configuration. Feel free to adjust as needed.

ADD EXPRESS TO EXISTING PROJECTS | $ turbo server express
- This adds an express server to existing projects
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0


- - - - - - - - - - - - - - - - - - GENERAL COMMANDS - - - - - - - - - - - - - - - - - - 

<<<<<<< HEAD
RUN DEV SERVER | $ turbo devserver
=======
RUN DEV SERVER - STATIC PROJECTS ONLY | $ turbo devserver
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
- This runs a simple Express server and renders the main index.html from http://localhost:3000
- We recommend running the dev server throughout development because it accurately reflects the behavior of your site in deployment.
- We also recommend running "gulp" in a separate tab. This invokes the build process whenever you make changes to JS or CSS files.
- The dev server supports relative links for anchor tags. For example, <a href="/blog">Blog</a> works fine with the dev server running.

<<<<<<< HEAD
=======
ADD A PAGE - STATIC PROJECTS ONLY | $ turbo page <PAGE_NAME>
- This adds a new folder to the project called <PAGE_NAME> containing a single index.html file.
- The index.html imports a few Javascript modules: vendor.min.js, turbo.min.js, app.js
- vendor.min.js is a minified bundle of imported Javascript files which can be found in the 'js' task in gulpfile.js
- turbo.min.js is a the Turbo CDN which provides the core functionality of the Turbo platform such as adding users, creating entities, sending emails, adding blog posts, and more.
- app.js is a module with your custom functions. This is initially empty

>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
BUILD THE PROJECT - ALL PROJECTS | $ npm run build
- This packages the project assets and concatenates/minifies the imports into the 'dist' directory.
** This command should be executed before every deployment because the 'dist' directory gets deployed, NOT the assets
- The gulpfile.js is where the configuration for the build process is defined. Register your custom assets here to include them in the build sequence.

LINK TO TURBO PROJECT - ALL PROJECTS | $ turbo app <APP_ID>
- This links your local project to the Turbo platform which is necessary for deployment
<<<<<<< HEAD
- To create a Turbo project, see here: https://www.turbo360.co/create
=======
- To create a Turbo project, see here: http://www.turbo360.co/create
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
- You can get the <APP_ID> from your app dashboard on turbo360.co

DEPLOY TO STAGING - ALL PROJECTS | $ turbo deploy
-- Deploys your site to the Turbo staging environment. The staging URL is accessible on the internet and can be viewed by anyone.
-- When deploying updates, it may take a minute or two for the changes to take effect as we propagate your site to multiple servers
<<<<<<< HEAD
** To deploy, your app must be linked to a  Turbo project. To create a Turbo project, see here: https://www.turbo360.co/create
=======
** To deploy, your app must be linked to a  Turbo project. To create a Turbo project, see here: http://www.turbo360.co/create
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
** It is best practice to run "$ npm run build" before deploying in order to package assets and minify imports.

DEPLOY TO PRODUCTION - ALL PROJECTS | $ turbo deploy --prod
-- Deploys your site to the Turbo production environment.
** The production URL is NOT accessible on the internet and must be forwarded from a CNAME record in your DNS provider.
-- When deploying updates, it may take a minute or two for the changes to take effect as we propagate your site to multiple servers
<<<<<<< HEAD
** To deploy, your app must be linked to a  Turbo project. To create a Turbo project, see here: https://www.turbo360.co/create
=======
** To deploy, your app must be linked to a  Turbo project. To create a Turbo project, see here: http://www.turbo360.co/create
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
** It is best practice to run "$ npm run build" before deploying in order to package assets and minify imports.


- - - - - - - - - - - - - - - - - - TURBO SDK COMMANDS - - - - - - - - - - - - - - - - - - 

The Turbo library SDK comes in two forms: 
<<<<<<< HEAD
1. CDN: <script src="https://cdn.turbo360-dev.com/dist/turbo.min.js" type="text/javascript"></script>
2. NPM: $ npm install turbo360
* In order to leverage the Turbo SDK, your project must be linked to an app on Turbo (https://www.turbo360.co/create). See "LINK TO TURBO PROJECT" above for instructions.
=======
1. CDN: <script src="http://cdn.velocity360.io/dist/turbo.min.js" type="text/javascript"></script>
2. NPM: $ npm install turbo360
* In order to leverage the Turbo SDK, your project must be linked to an app on Turbo (http://www.turbo360.co/create). See "LINK TO TURBO PROJECT" above for instructions.
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0

The CDN is suited for conventional HTML/CSS with Javascript and JQuery. The NPM is best for robust client-side frameworks like React and Angular 2. Both come packaged with every scaffolded Turbo project and they provide the functionality for leveraging the Turbo platform.

DEFAULT RESOURCES
- By default, Turbo supports the following resources: USER, POST (blog posts), COMMENT
- Each resource comes with built-in attributes but you can add your own. For example, every USER entity has a 'username' attribute but if you want to add a 'nickname' field, you can do so by simply adding it as a parameter (with corresponding value) when creating new users. To see the built-in attributes, click on the resource name from the list above.

- To create a USER:
-- CDN: Turbo({site_id:<MY_APP_ID>}).createUser(params, function(err, data){})
-- NPM: turbo({site_id:<MY_APP_ID>}).create('user', params).then(data => {}).catch(err => {})
<<<<<<< HEAD
-- See here for full example: https://www.turbo360.co/docs
=======
-- See here for full example: http://www.turbo360.co/docs
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0

Turbo also includes a full suite of User-based operations for user management:

CDN
<<<<<<< HEAD
import <script src="https://cdn.turbo360-dev.com/dist/turbo.min.js" type="text/javascript"></script>
=======
import <script src="http://cdn.velocity360.io/dist/turbo.min.js" type="text/javascript"></script>
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
- Turbo({site_id:<MY_APP_ID>}).login(credentials, function(err, data){})
- Turbo({site_id:<MY_APP_ID>}).logout(function(err, data){})
- Turbo({site_id:<MY_APP_ID>}).currentUser(function(err, data){})

NPM
import turbo from 'turbo360'
turbo({site_id:<MY_APP_ID>}).login(credentials).then(data => {}).catch(err => {})
turbo({site_id:<MY_APP_ID>}).logout().then(data => {}).catch(err => {})
turbo({site_id:<MY_APP_ID>}).currentUser().then(data => {}).catch(err => {})

CUSTOM RESOURCES
Turbo supports custom resources as easily as the default ones. By simply specifying the resource name and its parameters when creating entities via the SDK, you can create as many resource types that your project requires.

- To create a custom resource called TEAM:
- CDN: Turbo({site_id:<MY_APP_ID>}).create('team', params, function(err, data){})
- NPM: turbo({site_id:<MY_APP_ID>}).create('team', params).then(data => {}).catch(err => {})
<<<<<<< HEAD
- See here for full example: https://www.turbo360.co/docs

CRUD OPERATIONS
Turbo supports the standard CRUD operations as you would expect from an API. The following are the primary operations:
CDN: import <script src="https://cdn.turbo360-dev.com/dist/turbo.min.js" type="text/javascript"></script>
- Turbo({site_id:<MY_APP_ID>}).create(resourceName, params, function(err, data){})
- Turbo({site_id:<MY_APP_ID>}).fetch(resourceName, params, function(err, data){})
- Turbo({site_id:<MY_APP_ID>}).fetchOne(resourceName, id, function(err, data){})
- Turbo({site_id:<MY_APP_ID>}).updateEntity(resource, entityId, updatedParams, function(err, data){})
- Turbo({site_id:<MY_APP_ID>}).removeEntity(resourceName, entityId, function(err, data){})

NPM: import turbo from 'turbo360'
- turbo({site_id:<MY_APP_ID>}).create(resourceName, params).then(data => {}).catch(err => {})
- turbo({site_id:<MY_APP_ID>}).fetch(resourceName, params).then(data => {}).catch(err => {})
- turbo({site_id:<MY_APP_ID>}).fetchOne(resourceName, id).then(data => {}).catch(err => {})
- turbo({site_id:<MY_APP_ID>}).updateEntity(resource, entityId, updatedParams).then(data => {}).catch(err => {})
- turbo({site_id:<MY_APP_ID>}).removeEntity(resourceName, entityId).then(data => {}).catch(err => {})


- - - - - - - - - - - - - - - - SENDING EMAILS (https://www.turbo360.co/service/email) - - - - - - - - - - - - - 

CDN: import <script src="https://cdn.turbo360-dev.com/dist/turbo.min.js" type="text/javascript"></script>
- Turbo({site_id:<MY_APP_ID>}).sendEmail(emailParams, function(err, data){})


- - - - - - - - - - - - - - - - FILE STORAGE (https://www.turbo360.co/service/storage) - - - - - - - - - - - - - 

CDN: import <script src="https://cdn.turbo360-dev.com/dist/turbo.min.js" type="text/javascript"></script>
- Turbo({site_id:<MY_APP_ID>}).uploadFile(function(err, data){})
- Turbo({site_id:<MY_APP_ID>}).getFiles(params, function(err, data){})


- - - - - - - - - - - - - - - - THEMES (https://www.turbo360.co/service/theme) - - - - - - - - - - - - - 

To view available themes: $ turbo themes
To change the theme of your project: $ turbo theme THEME_NAME
=======
- See here for full example: http://www.turbo360.co/docs

CRUD OPERATIONS
Turbo supports the standard CRUD operations as you would expect from an API. The following are the primary operations:
CDN: import <script src="http://cdn.velocity360.io/dist/turbo.min.js" type="text/javascript"></script>
- Turbo({site_id:<MY_APP_ID>}).create(resourceName, params, function(err, data){})
- Turbo({site_id:<MY_APP_ID>}).fetch(resourceName, params, function(err, data){})
- Turbo({site_id:<MY_APP_ID>}).fetchOne(resourceName, id, function(err, data){})
- Turbo({site_id:<MY_APP_ID>}).update(resource, originalEntity, updatedParams, function(err, data){})
- Turbo({site_id:<MY_APP_ID>}).remove(resourceName, originalEntity, function(err, data){})

NPM: import turbo from 'turbo360'
- turbo({site_id:<MY_APP_ID>}).create(resourceName, params).then(data => {}).catch(err => {})
- turbo({site_id:<MY_APP_ID>}).create(resourceName, params).then(data => {}).catch(err => {})
- turbo({site_id:<MY_APP_ID>}).create(resourceName, params).then(data => {}).catch(err => {})
- turbo({site_id:<MY_APP_ID>}).create(resourceName, params).then(data => {}).catch(err => {})


>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
