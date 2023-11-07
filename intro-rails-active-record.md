# Intro to Rails

- Rails is a framework
- Framework dictates the flow of control
- Open source

- MVC (Model, View, Controller)
  - Model: Data itself inside the database
  - View: UI for the user
  - Controller: switchboard between model and view

`rails new intro-rails -d postgresql -T`
`cd intro-rails`
`rails db:create`

## Tour of a Rails App
- Gemfile: consists of all the gems in the rails app
- MVC
  - app/controllers
  - app/models
  - app/views
- config/routes
- db: stands for database
- README: great for documentation

To run server: 
`rails server`
OR
`rails s`

To exit server:
`ctr + c`

To drop database:
`rails db:drop`

# Active Record
- Active record is a gem
- ORM(Object relational mapping)
  - translator
  - translating Ruby code to SQL


- During development - databases live on your machine
- Rails app - collection of folders and files that can be accessed on GitHub
- During production - Database will exist on seperate server

## Model
MVC - Model View Controller

- Model is working with the database
- Model defines the structure of the DB

## Rails Generate
- Generate creates files and folders in a rails app the rails way
- Active Record data types: https://dev.to/asyraf/rails-activerecord-data-types-32ip


- Generate command takes arguments:
  - Classname will be in PascalCasing and SINGULAR!

`rails g model Schedule day:string date:date event:string`

## Migration
- File that allows us to create a table

`rails db:migrate`

## Schema
READ ONLY FILE - DO NOT UPDATE DIRECTLY
- Source of truth on how the database is structured

## Rails Console
`rails console` 
OR
`rails c`

To exit out of rails console type `exit`

## Interacting with Data
Create data:
```ruby
Schedule.create(event: 'PD Week', date: '2023-11-13', day: 'Monday')
```

Get data:
```ruby
Schedule.all
```


### CRUD
- Create
```ruby
Schedule.create(event: 'PD Week', date: '2023-11-13', day: 'Monday')
Schedule.create(day: 'Friday', date: '2023-11-10', event: 'Veterans 
Day - No Class')
```
- Read
  - .all - gets all the instances
  - .first - gives us the first instance in the database
  - .second 
  - .last
  - .find() - takes an argument of the primary key and returns that instance
  - .where() - takes an argument of the key value pairs you are looking for and returns a set(array) that matches

- Update
  - assessments = Schedule.find(2)
  - assessments.update(event: 'Awesomely amazing assessment review!!')

- Delete
  - assessments = Schedule.find(2)
  - assessments.destroy
  - Schedule.all 
    - the instance has been removed


