Rails.application.routes.draw do
  get '/food/:fav_food' => 'home#food'
  get '/order/:number/:item' => 'home#order'
end
