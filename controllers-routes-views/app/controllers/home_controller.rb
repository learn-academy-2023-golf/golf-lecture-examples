class HomeController < ApplicationController
  def greeter 
    render html: 'Hi Golf 2023!!'
  end

  def joke 
    render html: 'Two SQL tables are sitting at a bar, a query walks in and asks, may I join you?'
  end

  def golf 
    @golf_cohort = 'The amazing people of Golf 2023!'
    @students = ['Michael', 'Patsy', 'Eric', 'Derek', 'Jeffrey']
  end

  def landing 
    
  end
end
