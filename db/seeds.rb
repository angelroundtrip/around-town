# puts "Deleting seed data..."
# User.destroy_all
# Location.destroy_all
# Post.destroy_all
# Faker::UniqueGenerator.clear


Zero = User.create(username: "Zero", password: "admin", email: "email@email.com", first_name: "Angel", home_location: "New York, NY")
Oni = User.create(username: "Oni", password: "admin2", email: "email2@email.com", first_name: Faker::Name.first_name, home_location: "Tokyo, Japan")
# 25.times { 
#   User.create(
#     username: Faker::Games::Zelda.unique.character,
#     password: Faker::Number.unique.number(digits: 5),
#     email: Faker::Internet.unique.email,
#     first_name: Faker::Name.unique.first_name,
#     home_location: Faker::Address.zip,
#   )
#  }

#  25.times { 
#   User.create(
#     username: Faker::JapaneseMedia::StudioGhibli.unique.character,
#     password: Faker::Number.unique.number(digits: 5),
#     email: Faker::Internet.unique.email,
#     first_name: Faker::Name.unique.first_name,
#     home_location: Faker::Address.zip,
#   )
#  }


NY = Location.create(name: "New York, NY")
Tokyo = Location.create(name: "Tokyo, Japan")
Seoul = Location.create(name: "Seoul, South Korea")
1000.times { 
  Location.create(
    name: Faker::Address.zip,
  )
 }


Post.create(user_id: Zero.id, location_id: NY.id, post_content: "There are a few cool food festivals scheduled for this weekend. I'm looking forward to the great weather and great food!")
Post.create(user_id: Oni.id, location_id: Tokyo.id, post_content: "Did you know that Shinjuku station is the busiest train station in the world? Shinjuku station and Shinjuku in general are very crowded throughout the day and night.")
# 50.times { 
#   Post.create(
#     user_id: User.pluck(:id).sample,
#     location_id: Location.pluck(:id).sample,
#     post_content: Faker::TvShows::Simpsons.unique.quote,
#   )
#  }


puts "Seeding complete!"
