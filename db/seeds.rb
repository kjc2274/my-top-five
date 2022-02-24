# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Category.destroy_all

Category.create(title: "Movies", description: "", image: "");
Category.create(title: "Books", description: "", image: "");
Category.create(title: "Foods", description: "", image: "");
Category.create(title: "Songs", description: "", image: "");
Category.create(title: "TV Shows", description: "", image: "");
Category.create(title: "Dream Destinations", description: "", image: "");
Category.create(title: "Athletes", description: "", image: "");
Category.create(title: "Artists", description: "", image: "");
Category.create(title: "Vacation Spots", description: "", image: "");

p "#{Category.all.count} categories created"