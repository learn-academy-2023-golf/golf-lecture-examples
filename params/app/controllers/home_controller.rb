class HomeController < ApplicationController
  def food 
    @my_fav_food = params[:fav_food]
  end

  def order 
    @food_order_quantity = params[:number]
    @food_item = params[:item]
    if @food_order_quantity.to_i > 100 
      @quantity = 'a ton of food'
    else
      @quantity = @food_order_quantity
    end
  end
end
