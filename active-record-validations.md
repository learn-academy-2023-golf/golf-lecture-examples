# Active Record Validations 11/9/23 Golf

## Additional Resources
- [Ruby on Rails - Validations](https://guides.rubyonrails.org/active_record_validations.html)

## Plan
- Create a Thanksgiving dinner app, 
- attributes: cooked_before(string), dish(string), late(string), approval(boolean)

## Process
1. Create a rails app locally

2. Create a markdown file to store notes on github repo

3. Generate a rails model
  - $ `rails g model Thanksgiving cooked_before:string dish:string late:string approval:boolean`

4. Red/Green/Refactor process of TDD  
  - create test that is missing an attribute in the spec/models directory
  - see it fail: $ `rspec spec/models/thanksgiving_spec.rb`
  - create the validation for the missing attribute in the app/models directory
  - see the test pass: $ `rspec spec/models/thanksgiving_spec.rb`

## spec/models/thanksgiving_spec.rb
```rb
require 'rails_helper'

RSpec.describe Thanksgiving, type: :model do
  it 'is not valid without cooked_before' do
    dinner = Thanksgiving.create(
      cooked_before: nil,
      dish: 'mac and cheese',
      late: 'yes',
      approval: true
    )
    expect(dinner.errors[:cooked_before]).to_not be_empty
  end
  it 'is not valid without a dish' do
    dinner = Thanksgiving.create(
      cooked_before: 'no',
      dish: nil,
      late: 'no',
      approval: true
    )
    expect(dinner.errors[:dish]).to_not be_empty
  end
  it 'is not valid without a late value' do
    dinner = Thanksgiving.create(
      cooked_before: 'no',
      dish: 'cornbread dressing',
      late: nil,
      approval: true
    )
    # p "dinner.errors: ", dinner.errors
    expect(dinner.errors[:late]).to_not be_empty
  end
  it 'is not valid with a dish that has less than 12 characters' do
    dinner = Thanksgiving.create(
      cooked_before: 'no',
      dish: 'pie',
      late: 'no',
      approval: true
    )
    # p "dinner.errors: ", dinner.errors
    expect(dinner.errors[:dish]).to_not be_empty
  end
end
```

## spec/models/thanksgiving_spec.rb
```rb
class Thanksgiving < ApplicationRecord
  validates :cooked_before, :dish, :late, presence: true
  validates :dish, length: {minimum: 12}
end
```