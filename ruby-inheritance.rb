# Ruby Inheritance

# class DisneyPlus 
#   attr_accessor :title, :actor, :watched
#   def initialize(title_parameter, actor_parameter)
#     @title = title_parameter
#     @actor = actor_parameter
#     @watched = false
#   end

#   def get_show_data
#     if @watched
#       "You have watched the show #{@title} starring #{@actor}"
#     else
#       "You have not watched the show #{@title} starring #{@actor}"
#     end
#   end
# end

# Inheritance: allows classes to have relationships with each other
  # Superclass: common behaviors in shared class
    # - has attributes that are common to subclasses
    # - passess info to the subclass

  # Subclass: has attributes specific to itself
  

# Superclass:
class StreamingApp
  attr_accessor :title, :genre, :run_time, :language, :consumed_media
  def initialize(title, genre, run_time, language)
    @title = title 
    @genre = genre 
    @run_time = run_time
    @language = language
    @consumed_media = false
  end

  def get_media_data
    if @consumed_media 
      "You have consumed the media #{@title} that is #{@run_time} in #{@language}.  It's genre is #{@genre}."
    else 
      "You have not consumed the media #{@title} that is #{@run_time} in #{@language}.  It's genre is #{@genre}."
    end
  end
end

# ashoka = StreamingApp.new('Ashoka', 'Sci-fi', '45 min', 'English')
# p ashoka # #<StreamingApp:0x0000000146155c38 @title="Ashoka", @genre="Sci-fi", @run_time="45 min", @language="English", @consumed_media=false>


class YouTube < StreamingApp
  # Initialize method in the subclass invokes the super method
  def initialize(title, genre, run_time, language, creator)
    # super() calls on the superclass' initialize method and borrows the parameters in the initialize method
    super(title, genre, run_time, language)
    # create instance variable for ONLY the unique attributes
    @creator = creator
  end
end

react_props = YouTube.new('Practice React with Tic Tac Toe', 'Educational', '32 min', 'english', 'Anya Kubow')
p react_props # #<YouTube:0x0000000121902d98 @title="Practice React with Tic Tac Toe", @genre="Educational", @run_time="32 min", @language="english", @consumed_media=false, @creator="Anya Kubow">

p react_props.get_media_data # "You have not consumed the media Practice React with Tic Tac Toe that is 32 min in english.  It's genre is Educational."

react_props.consumed_media = true
p react_props.get_media_data # "You have consumed the media Practice React with Tic Tac Toe that is 32 min in english.  It's genre is Educational."


class Spotify < StreamingApp
  def initialize(title, genre, run_time, language, album, artist)
    super(title, genre, run_time, language)
    @album = album
    @artist = artist
  end

  def get_spotify_info
    get_media_data + "This song was created by #{@artist} and is part of the #{@album} album"
  end
end

rap = Spotify.new('Larry Bird', 'Rap', '2 min', 'English', 'Croptober', 'Money Man')
p rap # #<Spotify:0x00000001428a2d00 @title="Larry Bird", @genre="Rap", @run_time="2 min", @language="English", @consumed_media=false, @album="Croptober", @artist="Money Man">
p rap.get_spotify_info # "You have not consumed the media Larry Bird that is 2 min in English.  It's genre is Rap.This song was created by Money Man and is part of the Croptober album"