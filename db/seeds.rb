User.create(username: "admin", password: "admin", email: "email@email.com", first_name: "admin", home_location: "New York, NY")
User.create(username: "admin2", password: "admin2", email: "email2@email.com", first_name: "admin2", home_location: "Tokyo, Japan")

Location.create(name: "New York, NY")
Location.create(name: "Tokyo, Japan")

Post.create(user_id: 1, location_id: 1, post_content: "This is the first post!")
Post.create(user_id: 2, location_id: 2, post_content: "This is the second post!")

puts "Seeding complete!"