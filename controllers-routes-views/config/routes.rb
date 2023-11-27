Rails.application.routes.draw do
  # HTTP verb, url(location), hashrocket(=>), controller, method
  get '/greeter' => 'home#greeter'
  get '/joke' => 'home#joke'
  get '/golf' => 'home#golf'
  get '/landing' => 'home#landing'
  root to: 'home#landing'
end
