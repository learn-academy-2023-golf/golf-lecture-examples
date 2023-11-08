# Active Record Migrations

## Setup
`rails new rails-migrations -d postgresql -T`
`cd rails-migrations`
`rails db:create`
`rails g model BandMember name:string instrument:string`
`rails db:migrate`

## Add Data to BandMember
`rails c`
```ruby
BandMember.create name:'Elyse', instrument:'Lead singer'
BandMember.create name:'Corey', instrument:'Trombone'
BandMember.create name:'Greg', instrument:'Cowbell'
BandMember.create name:'Franz', instrument:'Trumpet'
BandMember.create name:'Alex', instrument:'Piano'
```

## Create Migration File to Modify BandMember Model
`rails generate migration add_column_pay_to_band_member`

Created a migration file

```ruby
class AddColumnPayToBandMember < ActiveRecord::Migration[7.0]
  def change
    add_column :band_members, :pay, :integer
  end
end
```

`rails db:migrate`


## Rename Column
Create a migration file 
`rails generate migration change_name_of_pay_to_hourly_pay`

Update migration file:
```ruby
class ChangeNameOfPayToHourlyPay < ActiveRecord::Migration[7.0]
  def change
    rename_column :band_members, :pay, :hourly_pay
  end
end
```

`rails db:migrate`


## Update Data
`rails c`
```ruby
corey = BandMember.find(2)
corey.update hourly_pay:400


greg = BandMember.find(3)
greg.update hourly_pay:999
```


## Update Data Type Using Migrations
`rails g migration change_data_type_of_pay_to_float`

```ruby
class ChangeDataTypeOfPayToFloat < ActiveRecord::Migration[7.0]
  def change
    change_column :band_members, :hourly_pay, :float
  end
end

```

`rails db:migrate`

** Important Note **
Do not modify a migration file after it has been migrated and is reflected in the schema!