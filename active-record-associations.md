# Active Record Associations

- has_many belongs_to relationship
- foreign key connects the two tables
- foreign key lives on the belongs_to table
- foreign key data is the primary key of the table you are connecting to

## Setup
`rails new associations -d postgresql -T`
`cd associations `
`rails db:create`


## Create Models
Cohort model:
`rails g model Cohort name:string year:string`
`rails db:migrate`

Student model:
`rails g model Student name:string cohort_id:integer`
`rails db:migrate`

## Setting Up Relationship in Models

Cohort: app/models/cohort.rb
```ruby 
class Cohort < ApplicationRecord
  has_many :students
end

```

Student: app/models/student.rb
```ruby
class Student < ApplicationRecord
  belongs_to :cohort
end
```


## Interacting with the Data

Cohort Data:
`rails c`

```ruby
Cohort.create name:'Alpha', year:'2021'
Cohort.create name:'Delta', year:'2021'
Cohort.create name:'Golf', year:'2023'
```

Student Data:
```ruby
alpha21 = Cohort.find(1)
alpha21.students.create name:'Elyse'

delta21 = Cohort.find(2)
delta21.students.create name:'Charlean'

golf23 = Cohort.find(3)
golf23.students.create name:'Alex'
golf23.students.create name:'Christopher'
golf23.students.create name:'Derek'
```