# Ruby Hashes 10/30/2023

# Hashes are a collection of data

# Very similar to a JavaScript object, key kalue pairs

# golf_candy = {greg: 'Reeses', corey: 'Peanutbutter taffy', sean: 'Starburst', patsy: 'Sour patch'}

# p golf_candy
# --> {:greg=>"Reeses", :corey=>"Peanutbutter taffy", :sean=>"Starburst", :patsy=>"Sour patch"}

# symbols - data type, unique identifier
# Prior to Ruby 1.9 this was a symbol --> :greg

# => Hash rocket

# golf_costumes = Hash.new
# p golf_costumes
# --> {}

# get a single value
# p golf_candy[:greg]
# --> "Reeses"

# update the value
# golf_candy[:greg] = "Reese's"

# p golf_candy
# --> {:greg=>"Reese's", :corey=>"Peanutbutter taffy", :sean=>"Starburst", :patsy=>"Sour patch"}


# golf_candy = {greg: 'Reeses', corey: 'Peanutbutter taffy', sean: 'Starburst', patsy: 'Sour patch'}

# p golf_candy

# golf_candy[:jeffrey] = 'Skittles'

# p golf_candy
# --> {:greg=>"Reeses", :corey=>"Peanutbutter taffy", :sean=>"Starburst", :patsy=>"Sour patch", :jeffrey=>"Skittles"}

# golf_candy.delete(:greg)

# p golf_candy
# --> {:corey=>"Peanutbutter taffy", :sean=>"Starburst", :patsy=>"Sour patch"}

# Duck Typing - if the method can work it probably will

# Enumerable - arrays, ranges, 1..10 'a'..'z', hashes


golf_candy = {greg: 'Reeses', corey: 'Peanutbutter taffy', sean: 'Starburst', patsy: 'Sour patch'}

# each takes a block
# block in Ruby - code that passed to a method that defines the outcome of the method, do/end


# golf_candy.each do |key, value|
#   p key
# end

# :greg
# :corey
# :sean
# :patsy

# golf_candy.each do |key, value|
#   p value
# end

# "Reeses"
# "Peanutbutter taffy"
# "Starburst"
# "Sour patch"

# golf_candy.each do |key, value|
#   p "#{key}'s favorite candy is #{value}"
# end

# "greg's favorite candy is Reeses"
# "corey's favorite candy is Peanutbutter taffy"
# "sean's favorite candy is Starburst"
# "patsy's favorite candy is Sour patch"

# golf_candy.each do |key, value|
#   p "#{key.capitalize}'s favorite candy is #{value}"
# end

# "Greg's favorite candy is Reeses"
# "Corey's favorite candy is Peanutbutter taffy"
# "Sean's favorite candy is Starburst"
# "Patsy's favorite candy is Sour patch"


# stringified_output = golf_candy.map do |key, value|
#   "#{key.capitalize}'s favorite candy is #{value}"
# end

# p stringified_output
# --> ["Greg's favorite candy is Reeses", "Corey's favorite candy is Peanutbutter taffy", "Sean's favorite candy is Starburst", "Patsy's favorite candy is Sour patch"]

# def golf_candy_stringified_output
#   golf_candy.map do |key, value|
#     "#{key.capitalize}'s favorite candy is #{value}"
#   end
# end

# p golf_candy_stringified_output
# --> variable or method `golf_candy'


def golf_candy_stringified_output(hash)
  hash.map do |key, value|
    "#{key.capitalize}'s favorite candy is #{value}"
  end
end

p golf_candy_stringified_output(golf_candy)
# --> ["Greg's favorite candy is Reeses", "Corey's favorite candy is Peanutbutter taffy", "Sean's favorite candy is Starburst", "Patsy's favorite candy is Sour patch"]