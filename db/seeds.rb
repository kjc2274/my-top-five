# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Category.destroy_all

Category.create(title: "Actors", description: "Tell us about your favorite actors to see on screen. You would pay to watch these men and women read the phonebook (those still exist, right?), and probably shed a tear or two!", image: "https://www.pinclipart.com/picdir/middle/121-1217708_free-download-dramatic-acting-clipart.png");
Category.create(title: "Artists", description: "Art is one of the greatest things we can share with each other! Share the artists that speak to you, or maybe the ones that you feel deserve more recognition. Feel free to tell us what it is you enjoy about these artists as well!", image: "https://images.freeimages.com/images/large-previews/d3f/artist-palette-1172463.jpg");
Category.create(title: "Books", description: "What are your very favorite reads? Share the literary works that you hold closest to your heart!", image: "https://images.freeimages.com/images/small-previews/2a0/open-book-1417491.jpg");
Category.create(title: "Dream Destinations", description: "If you could go anywhere in the world, where would it be? What is your travel bucket-list?", image: "https://images.all-free-download.com/images/graphiclarge/slovakia_landscape_vista_265470.jpg");
Category.create(title: "Favorite Foods", description: "Yum!", image: "https://p.kindpng.com/picc/s/777-7776612_steak-clipart-main-dish-dish-of-food-clipart.png");
Category.create(title: "Movies", description: "This can be a tough one! With so many great films from so many different genres, how can one choose five favorites! Well too bad! Do it anyway!", image: "https://img.favpng.com/11/17/17/film-reel-cinema-clip-art-png-favpng-jtCW4ywUnC8VBXHmswd34kL1v.jpg");
Category.create(title: "Songs", description: "These are the songs you have listened to a hundred times, and will listen to a thousand more!", image: "https://cdn.pixabay.com/photo/2021/06/03/00/06/sheet-music-6305620__480.jpg");
Category.create(title: "TV Shows", description: "Do you like sitcoms? Dramas? Dramedies? Tell us about your favorite TV shows, the ones worth watching from start to finish!", image: "https://img.freepik.com/free-photo/still-life-with-retro-old-red-tv_1150-19439.jpg?size=626&ext=jpg");
Category.create(title: "Video Games", description: "Video games have come a long way in a very short time! For some of us, however, our favorite games might not be the biggest or most impressive. What are your favorite video games to play?", image: "https://st3.depositphotos.com/1010652/14828/v/600/depositphotos_148283389-stock-illustration-video-game-seamless-background.jpg");

p "#{Category.all.count} categories created"