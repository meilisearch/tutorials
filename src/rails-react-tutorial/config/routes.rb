Rails.application.routes.draw do
  # Maps requests to the root of the application to the index action of the 'Recipes controller'
  root "recipes#index"
end
