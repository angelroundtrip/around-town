puts "Deleting seed data..."
User.destroy_all
Location.destroy_all
Post.destroy_all
Faker::UniqueGenerator.clear


One = User.create(username: "One", password: "admin", email: "email@email.com", first_name: "Angel", home_location: "New York, NY")
Two = User.create(username: "Yakiniku", password: "admin", email: "email2@email.com", first_name: Faker::Name.unique.first_name, home_location: "Tokyo, Japan")
Three = User.create(username: "Soul SK", password: "admin", email: "email3@email.com", first_name: Faker::Name.unique.first_name, home_location: "Seoul, South Korea")
Four = User.create(username: "Dobry", password: "admin", email: "email4@email.com", first_name: Faker::Name.unique.first_name, home_location: "Prague, Czech Republic")
Five = User.create(username: "Ceviche", password: "admin", email: "email5@email.com", first_name: Faker::Name.unique.first_name, home_location: "Lima, Peru")
Six = User.create(username: "West Coast Time", password: "admin", email: "email6@email.com", first_name: Faker::Name.unique.first_name, home_location: "Los Angeles, California")
Seven = User.create(username: "South Side", password: "admin", email: "email7@email.com", first_name: Faker::Name.unique.first_name, home_location: "Chicago, Illinois")
Eight = User.create(username: "Po'boy", password: "admin", email: "email8@email.com", first_name: Faker::Name.unique.first_name, home_location: "New Orleans, Louisiana")
Nine = User.create(username: "Big Tex", password: "admin", email: "email9@email.com", first_name: Faker::Name.unique.first_name, home_location: "Dallas, Texas")
Ten = User.create(username: "Sunshine", password: "admin", email: "email10@email.com", first_name: Faker::Name.unique.first_name, home_location: "Miami, Florida")
# 10.times { 
#   User.create(
#     username: Faker::Games::Zelda.character,
#     password: Faker::Number.number(digits: 5),
#     email: Faker::Internet.email,
#     first_name: Faker::Name.first_name,
#     home_location: Faker::Address.postcode,
#   )
#  }


NY = Location.create(name: "New York, NY")
Tokyo = Location.create(name: "Tokyo, Japan")
Seoul = Location.create(name: "Seoul, South Korea")
Prague = Location.create(name: "Prague, Czech Republic")
Lima = Location.create(name: "Lima, Peru")
LA = Location.create(name: "Los Angeles, California")
Chicago = Location.create(name: "Chicago, Illinois")
NO = Location.create(name: "New Orleans, Louisiana")
TX = Location.create(name: "Dallas, Texas")
FL = Location.create(name: "Miami, Florida")

1000.times { 
  Location.create(
    name: Faker::Address.zip,
  )
 }


Post.create(user_id: One.id, location_id: NY.id, post_content: "There are a few cool food festivals scheduled for this weekend. I'm looking forward to the great weather and great food!")
Post.create(user_id: Two.id, location_id: Tokyo.id, post_content: "Did you know that Shinjuku station is the busiest train station in the world? Shinjuku station and Shinjuku in general are very crowded throughout the day and night.")
Post.create(user_id: Three.id, location_id: Seoul.id, post_content: "Hey everyone! There's a language exchange meetup scheduled for next Thursday in Hongdae.")
Post.create(user_id: Four.id, location_id: Prague.id, post_content: "Náplavka. Saturday. Chill beer and wine tasting happening. Hope to see you all there 😎")
Post.create(user_id: Five.id, location_id: Lima.id, post_content: "A friendly reminder that Mistura is returning this weekend. There will be no shortage of great cuisine and great drinks.")
Post.create(user_id: Six.id, location_id: LA.id, post_content: "Traffic today was out of control. So happy that the weather is so nice and I can ride my bike instead.")
Post.create(user_id: Seven.id, location_id: Chicago.id, post_content: "Spring is here, finally. It was a cold winter.")
Post.create(user_id: Eight.id, location_id: NO.id, post_content: "Jazz Fest is soon! Best time of the year for me.")
Post.create(user_id: Nine.id, location_id: TX.id, post_content: "The Grande Burger at Burger Number 5 was so good. I recommend it to everyone 🍔")
Post.create(user_id: Ten.id, location_id: FL.id, post_content: "High temperatures forecast for the next few days, be careful out there everyone. Remember to hydrate.")
20.times { 
  Post.create(
    user_id: User.pluck(:id).sample,
    location_id: Location.pluck(:id).sample,
    post_content: Faker::Food.description,
  )
 }


puts "Seeding complete!"
