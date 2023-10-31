# Ruby Classes
  # Getters and Setters

  # Setters: special methods that allows to update our object 
    # Data that is passed in as a parameter is stored in an instance variable

  # Getters: special methods that allows us to get our data that is stored in an instance variable

# class DisneyPlus
#   def set_media_data(title_parameter, actor_parameter)
#     @title = title_parameter
#     @actor = actor_parameter
#   end 

#   def get_title
#     @title
#   end

#   def get_actor
#     @actor
#   end
# end

# p DisneyPlus.new # #<DisneyPlus:0x00000001258a03b0>

# loki = DisneyPlus.new 
# loki.set_media_data('Loki', 'Tom Hiddleston')
# p loki # #<DisneyPlus:0x00000001060daff0 @title="Loki", @actor="Tom Hiddleston">
# p loki.get_title # "Loki"


# ahsoka = DisneyPlus.new 
# ahsoka.set_media_data('Ahsoka', 'Rosario Dawson')
# p ahsoka # #<DisneyPlus:0x000000012d0b2e98 @title="Ahsoka", @actor="Rosario Dawson">
# p ahsoka.get_actor # "Rosario Dawson"


#_________________
# Initialize method is called by the .new method that sets the object with specific data passed in as the argument
# class DisneyPlus
#   def initialize(title_parameter, actor_parameter)
#     @title = title_parameter
#     @actor = actor_parameter
#     @watched = false
#   end 

#   def get_title
#     @title
#   end

#   def get_actor
#     @actor
#   end

#   def has_watched 
#     @watched = true
#   end

#   def show_data
#     if @watched 
#       "You have watched the show #{@title} starring #{@actor}"
#     else
#       "You have not watched the show #{@title} starring #{@actor}"
#     end
#   end
# end

# loki = DisneyPlus.new('Loki', 'Tom Hiddleston')
# p loki # #<DisneyPlus:0x00000001060daff0 @title="Loki", @actor="Tom Hiddleston">
# p loki.get_title # "Loki"


# ahsoka = DisneyPlus.new('Ahsoka', 'Rosario Dawson')
# p ahsoka # #<DisneyPlus:0x000000012d0b2e98 @title="Ahsoka", @actor="Rosario Dawson", @watched=false>
# p ahsoka.get_actor # "Rosario Dawson"
# p ahsoka.show_data # "You have not watched the show Ahsoka starring Rosario Dawson"
# ahsoka.has_watched 
# p ahsoka # #<DisneyPlus:0x0000000146891da8 @title="Ahsoka", @actor="Rosario Dawson", @watched=true>
# p ahsoka.show_data # "You have watched the show Ahsoka starring Rosario Dawson"


#____________________
# Attribute Accessor:
  # defined by attr_accessor followed by the symbol of the instance variable
  # creates a getter and a setter method for that instance variable

class DisneyPlus
  attr_accessor :title, :actor, :watched

  def initialize(title_parameter, actor_parameter)
    @title = title_parameter
    @actor = actor_parameter
    @watched = false
  end 

  # def get_title
  #   @title
  # end

  # def get_actor
  #   @actor
  # end

  # def has_watched 
  #   @watched = true
  # end

  def show_data
    if @watched 
      "You have watched the show #{@title} starring #{@actor}"
    else
      "You have not watched the show #{@title} starring #{@actor}"
    end
  end
end

loki = DisneyPlus.new('Loki', 'Tom Hiddleston')
p loki # #<DisneyPlus:0x00000001060daff0 @title="Loki", @actor="Tom Hiddleston">
p loki.title # "Loki"


ahsoka = DisneyPlus.new('Ahsoka', 'Rosario Dawson')
p ahsoka # #<DisneyPlus:0x000000012d0b2e98 @title="Ahsoka", @actor="Rosario Dawson", @watched=false>
p ahsoka.actor # "Rosario Dawson"
ahsoka.actor = "Someone else"
p ahsoka.show_data # "You have not watched the show Ahsoka starring Rosario Dawson"
ahsoka.watched = true 
p ahsoka # #<DisneyPlus:0x0000000146891da8 @title="Ahsoka", @actor="Rosario Dawson", @watched=true>
p ahsoka.show_data # "You have watched the show Ahsoka starring Rosario Dawson"