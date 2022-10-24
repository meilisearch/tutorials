# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Deletes existing recipes, useful if you seed several times
Recipe.destroy_all

# Creates 1000 fake recipes
1000.times do
    Recipe.create!(
        title: "#{Faker::Food.dish} by #{Faker::Name.unique.name}",
        ingredients: "#{Faker::Food.ingredient}, #{Faker::Food.ingredient}, #{Faker::Food.ingredient}",
        directions: Faker::Food.description,
        diet: ['omnivore', 'pescetarian', 'vegetarian', 'vegan'].sample
    )
end 

# Displays the following message in the console once the seeding is done
puts 'Recipes created'
