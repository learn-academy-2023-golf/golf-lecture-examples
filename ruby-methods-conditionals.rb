# Ruby Methods and Conditionals

#____________
# Methods: 
# def greeter
#   # Ruby uses implicit return which returns the last line of every method unless we say otherwise
#   'Hello world!'
# end

# # We can invoke our method and see the result by using p
# p greeter # "Hello world!"


# In Ruby, we do not need to use parenthesis for parameters and arguments
def greeter name
  "Hello #{name}!"
end

p greeter "Jacob" # "Hello Jacob!"


def multiply(num1, num2)
  num1 * num2
end

p multiply(3, 7) # 21
p multiply(4, 77) # 308
p multiply(600000, 50) # 30000000

# Parenthesis are best practice if you are using more than one argument and parameter

#______________
# Condtionals:

def greater_num(num1, num2)
  if num1 > num2 
    "#{num1} is greater"
  elsif num1 < num2 
    "#{num2} is greater"
  else
    "#{num1} and #{num2} are equal"
  end
end

p greater_num(42, 555) # "555" is greater"
p greater_num(7, 2) # "7 is greater"
p greater_num(9, 9) # "9 and 9 are equal"


#_________
# Getting User Input

# gets is a method that stops the execution of the program and waits for user input and hit enter


# p 'What is my name?'
# my_name = gets
# p my_name # "Elyse\n"

# # .chomp will remove the line break characters \n
# p 'What is your name?'
# your_name = gets.chomp
# p your_name
# p "Thank you for being awesome #{your_name}!"


puts 'Please enter your name:'
user_name = gets.chomp 
p user_name 
puts 'Please enter your age:'
user_age = gets.chomp.to_i 
p user_age 

p user_age.class # string

def can_you_vote(name, age)
  if age >= 18
    "Hi #{name}, #{age} is old enough to vote"
  else 
    "Hi #{name}, #{age} is not old enough to vote"
  end
end

p can_you_vote(user_name, user_age)

