# nodejs-api-starter(MVC)
A simple post API boilplate based on MVC pattern.

## What's in the box?
1. Basic Authentication
2. MVC Pattern folder structure
3. Helpers, Middlewares & validators
4. Sequelize ORM
5. File Uploads

## Quick start

1. Clone the repository with `git clone --depth=1 https://github.com/mfauzaan/nodejs-api-starter-MVC.git`
2. Open the folder `cd nodejs-api-starter-MVC`
3. Copy Env Example File`cp .env.example .env`,
4. Setup the database fields on `.env`
5. Install the dependencies with `npm install`
6. Generate App Key, this is used for hashing password `npm run key:generate` 
7. Run the database migrations with `sequelize db:migrate`
8. Add some seed data to the development database with `sequelize db:seed:all` 
9. Run the application in development mode with `npm run dev` (Make Sure Nodemon is installed in the system globally)
10. Access `http://localhost:3000` and you're ready to go!

## What's the roadmap?
1. More authentication Method like JWT etc..
2. Frontend Setup
3. Test Casess