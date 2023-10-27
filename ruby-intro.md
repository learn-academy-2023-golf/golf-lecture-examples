# Ruby Intro 10/26/2023

- MINASWAN - Matz is nice and so we are nice
- Dynamic language, dynamically typed language - when you create a variable you don't have to say what data type it is and you can change the data later on
- Interpreted - line by line processing
- Open-source - free and available for anyone to use or modify
- Scripting language - logical operations and evaluations, no user interface
- OOP - object-oriented programming, everything is a class, everything we interact with is an instance of a class

### Data Types
- Integer - whole numbers, can perform math
- Float - partial number
- String - single quotes
- Boolean
  - Equality operator ==
  - Relational
  - Negation !=
  - Logical && ||
- Nil

```ruby
➜  golf-lecture-examples git:(ruby) ✗ ruby -v
ruby 3.2.0 (2022-12-25 revision a528908271) [arm64-darwin23]
➜  golf-lecture-examples git:(ruby) ✗ rvm -v
rvm 1.29.12 (latest) by Michal Papis, Piotr Kuczynski, Wayne E. Seguin [https://rvm.io]
➜  golf-lecture-examples git:(ruby) ✗ irb
 :001 > exit
➜  golf-lecture-examples git:(ruby) ✗ irb
 :001 > ls
 => nil 
 :002 > exit
➜  golf-lecture-examples git:(ruby) ✗ irb
 :001 > 4 + 4
 => 8 
 :002 > 8 / 4
 => 2 
 :003 > 4 - 2
 => 2 
 :004 > 4 * 3
 => 12 
 :005 > 4 ** 3
 => 64 
 :006 > 5 % 2
 => 1 
 :007 > 5 / 3
 => 1 
 :008 > 5.0 / 3
 => 1.6666666666666667 
 :009 > 'hello'
 => "hello" 
 :010 > "hey y'all"
 => "hey y'all" 
 :011 > 5 == 3 + 2
 => true 
 :012 > '9' == 9
 => false 
 :013 > 5 > 3
 => true 
 :014 > 4 < 7
 => true 
 :015 > 4 <= 0
 => false 
 :016 > 3 >= 9
 => false 
 :017 > 5 != 5
 => false 
 :018 > 'hi' == 'hi' && 3 == 4
 => false 
 :019 > 'hi' == 'hi' && 3 == 3
 => true 
 :020 > 'hi' == 'hi' || 3 == 4
 => true 
 :021 > nil
 => nil 
 :022 > my_name = 'Sarah'
 => "Sarah" 
 :023 > my_name
 => "Sarah" 
 :024 > "hello my name is #{my_name}"
 => "hello my name is Sarah" 
 :025 > my_name = 'sarah'
 => "sarah" 
 :026 > my_name
 => "sarah" 
 :027 > my_name.length
 => 5 
 :028 > my_name.upcase
 => "SARAH" 
 :029 > my_name.capitalize
 => "Sarah" 
 :030 > my_name.reverse
 => "haras" 
 :031 > my_name.delete'h'
 => "sara" 
 :032 > my_name.delete('h')
 => "sara" 
 :033 > my_name
 => "sarah" 
 :034 > my_name.include?('s')
 => true 
 :035 > my_name
 => "sarah" 
 :036 > my_name = my_name.upcase
 => "SARAH" 
 :037 > my_name
 => "SARAH" 
 :038 > my_name.reverse
 => "HARAS" 
 :039 > my_name
 => "SARAH" 
 :040 > my_name.reverse!
 => "HARAS" 
 :041 > my_name
 => "HARAS" 
 :042 > my_name.class
 => String 
 :043 > 3.class
 => Integer 
 :044 > 4.0.class
 => Float 
 :045 > true.class
 => TrueClass 
 :046 > false.class
 => FalseClass 
 :047 > nil.class
 => NilClass 
 :048 > '7' == 7
 => false 
 :049 > '7'.to_i
 => 7 
 :050 > 4.to_s
 => "4" 
 :051 > my_nums = [4, 5, 6, 7, 9]
 => [4, 5, 6, 7, 9] 
 :052 > my_nums
 => [4, 5, 6, 7, 9] 
 :053 > my_nums.length
 => 5 
 :054 > my_nums[0]
 => 4 
 :055 > my_nums[-1]
 => 9 
 :056 > my_nums[-3]
 => 6 
 :057 > my_nums.last
 => 9 
 :058 > my_nums.first
 => 4 
 :059 > my_nums.reverse
 => [9, 7, 6, 5, 4] 
 :060 > my_nums.reverse.first
 => 9 
 :061 > my_nums
 => [4, 5, 6, 7, 9] 
 :062 > my_nums.second
(irb):62:in `<main>': undefined method `second' for [4, 5, 6, 7, 9]:Array (NoMethodError)
Did you mean?  send
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/gems/irb-1.8.3/exe/irb:9:in `<top (required)>'
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/bin/irb:25:in `load'
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/bin/irb:25:in `<main>'
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `eval'
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `<main>'
 :063 > my_nums 
 => [4, 5, 6, 7, 9] 
 :064 > my_nums[2]  
 => 6 
 :065 > my_nums[2] = 100
 => 100 
 :066 > my_nums
 => [4, 5, 100, 7, 9] 
 :067 > my_nums << 30
 => [4, 5, 100, 7, 9, 30] 
 :068 > my_nums
 => [4, 5, 100, 7, 9, 30] 
 :069 > my_nums.pop
 => 30 
 :070 > my_nums
 => [4, 5, 100, 7, 9] 
```