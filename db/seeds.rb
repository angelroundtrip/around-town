User.create(username: "admin", password: "password", email: "email@email.com", first_name: "admin", home_location: "New York, NY")
User.create(username: "admin2", password: "password2", email: "email2@email.com", first_name: "admin", home_location: "Seoul, South Korea")

Location.create(name: "Tokyo, Japan")
Location.create(name: "Buenos Aires, Argentina")

Post.create(user_id: 1, location_id: 1, post_content: "This is a new post!")
Post.create(user_id: 2, location_id: 2, post_content: "This is another post!")

puts "Seeding complete!"