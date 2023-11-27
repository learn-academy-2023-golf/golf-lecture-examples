# Params
Setup controller:
```ruby
# app/controllers/home_controller.rb

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

```

Setup Routes:
```ruby
# config/routes.rb
Rails.application.routes.draw do
  get '/food/:fav_food' => 'home#food'
  get '/order/:number/:item' => 'home#order'
end

```

Setup View:
```html
<h1>We like FOOD!!</h1>
<h3>My current favorite food is <%= @my_fav_food %>!</h3>
```

Visit URL: http://localhost:3000/order/40/turkey
- values after /order can be changed in URL


When Route is not expecting param, you can also use a query in the url:
http://localhost:3000/food?fav_food=tacos