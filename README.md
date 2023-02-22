# todo-app
Readme Document for a ReactJS Todo App


This readme is an overview for a Todo App written using ReactJS and Laravel


## Project Setup
#### clone github
```
$ git clone https://github.com/trantiendat0110/todo-app.git
```
### Set up server Laravel
#### composer install
```
composer install
```
#### Then create a environment file using this command-
```
cp .env.example .env
```

#### Then edit .env file with appropriate credential for your database server. Just edit these two parameter(DB_USERNAME, DB_PASSWORD) Then create a database named todos and then do a database migration using this command-

```
php artisan migrate
```

#### Run server
```
php artisan serve
```
<hr>

### Clients reactjs

#### install npm 
```
$ npm install
```
#### start app 
```
$ npm start
```
### Features
```
$ hello
```

This Todo App allows users to:


Create, Delete, Edit and View individual "todo" items
Sort items by priority or date added
Search for items quickly and easily
View completed and uncompleted items

For any further questions or feedback, please email trandatyl1@gmail.com
