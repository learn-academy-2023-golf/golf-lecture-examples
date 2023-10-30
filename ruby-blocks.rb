# Ruby Blocks

# Iteration: process of repeating something over and over until a condition is met
  # For loops
  # map

#_________________
# While
  # Set a start point and end point

num = 1
while num <= 10
  p num 
  # num += 1
  num = num + 1
end

num = 10
while num >= 1 
  p num 
  num -= 1
end

#_________________
# Methods
  # methods can take an anonymous function which is called a BLOCK
  # Blocks can be defined two ways
    # do and end
    # {}

5.times do 
  p 'hello world'
end

5.times { p 'hello world' }

num = 10 
num.times do 
  p 'Hello Golf'
end

#_________________
# Each

nums = [3, 4, 5, 6, 7]

nums.each do |value|
  p value * 3
end

#_________________
# Ranges
p 1..10

my_range =  1..10
my_range.each do |value|
  p value + 5
end

letter_range = 'a'..'f'
letter_range.each do |value|
  p value
end

p my_range.to_a
p letter_range.to_a

#_________________
# Map: returns and array of the same length

nums = 1..10

mapped = nums.map do |num|
  num * 3
end

p mapped

mapped = nums.map { |num| num * 3 }

p mapped


whats_even = nums.map do |num|
  if num.even? 
    'even'
  else
    num
  end
end

p whats_even # [1, "even", 3, "even", 5, "even", 7, "even", 9, "even"]


def even_or_odd array 
  array.map do |num| 
    if num.even? 
      'even'
    elsif num.odd?
      'odd'
    else 
      'huh?'
    end
  end
end

p even_or_odd 1..10 # ["odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd", "even"]

#_________________
# Select: return a subset - built in if statement

def only_evens array 
  array.select do |value|
    value.even?
  end
end

p only_evens 1..10 # [2, 4, 6, 8, 10]

#_________________
# Make it Mutate
names = ['Jacob', 'Jerrod', 'Franz', 'Markayel', 'Enrique']

upcased_names = names.map! do |name|
  name.upcase
end

p names # ["JACOB", "JERROD", "FRANZ", "MARKAYEL", "ENRIQUE"]
p upcased_names # ["JACOB", "JERROD", "FRANZ", "MARKAYEL", "ENRIQUE"]