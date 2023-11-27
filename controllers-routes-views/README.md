# Rails Controllers Routes and Views

- MVC: Model View Controller

  - Model: Database layer
  - Views: What a user can see
  - Controllers: Coordinates the interaction between the user, views, and model
  - Routes: How a usesr gets somewhere

## Controller
- Collects data from database and calls on view


controller called by the route
route is the path that is given in the url

`$ rails g controller Home`

```ruby
# app/controllers/home_controller.rb
  def greeter 
    render html: 'Hi Golf 2023!!'
  end
```

## Routes
- Add route in this order:
HTTP verb, url(location), hashrocket(=>), controller, method

```ruby
get '/greeter' => 'home#greeter'
```

## URL
URL Uniform Resource Locator

## ERB
ERB: Embedded Ruby - views that can have Ruby values in them


- Call the url location as a get request
- The controller file and method is then called based on the route
- When naming conventions for controller method and view match, Rails will automatically call the view

```ruby
<%= @golf_cohort %>
```