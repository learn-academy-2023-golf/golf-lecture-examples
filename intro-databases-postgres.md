# Intro to Databases and PostgresSQL

```ruby
class Student 
  def initialize(name, cohort, year)
    @name = name
    @cohort = cohort
    @year = year
  end
end

Student.new("Patsy", "Golf", 2023)
Student.new("Gene", "Delta", 2022)
Student.new("Elyse", "Alpha", 2021)
```

## Model
- Model is the class or structure of the data
- Model defines the data (Columns)
- Instances are the rows

## Primary Key
- Primary key: unique identifier


## SQL
General purpose programming languages - JavaScript, Ruby
Domain specific languages - HTML, RSpec, Postgres

Postgres: 
  - entire job is to talk to databases
  - Open source, object relational database system
  - Postgres has a very OOP approach

## Setup
Check databases:
`psql`
`\l` - lists all the databases on your local
`q` and `exit` to get back to file structure

## Queries
Query: request for data from your database, or for action of the data, or both

Gets all instances and columns from country database:
SELECT *
FROM country

Gets the first 10 instances with only the name, continent, and region columns:
SELECT name, continent, region
FROM country
LIMIT 10

## WHERE allows us to make decisions about the query
  - =, !=, >, <, >=, <=, BETWEEN, LIKE, IN, NOT, AND, OR


SELECT name, continent, population
FROM country
WHERE continent = 'North America'

SELECT name, continent, population
FROM country
WHERE continent != 'North America'

SELECT name, continent, population
FROM country
WHERE population < 1e6

SELECT name, continent, population
FROM country
WHERE population < 1e6
AND continent = 'North America'

## LIKE is a string matcher
- oftentimes used with a wildcard operator %

SELECT name, continent, population
FROM country
WHERE continent LIKE '%America'
LIMIT 10

## ORDER By
- Allows us to order our data

SELECT name, region, indepyear
FROM country
ORDER BY indepyear
LIMIT 10


SELECT name, region, indepyear
FROM country
WHERE indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 10


## AS 
- As creates an alias or temporary column that can be used for other queries

SELECT name, surfacearea, population,
population / surfacearea AS population_density
FROM country
WHERE population != 0