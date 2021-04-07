# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


demoUser = User.create!(username: "DemoUser", email:"demoEmail@banana.com", password: "demopassword", about_me: "Please use this account for demo purposes")

demoUser = User.create!(username: "GreenBanana", email:"greenBanana@banana.com", password: "greenBanana")
demoUser = User.create!(username: "YellowBanana", email:"yellowBanana@banana.com", password: "yellowBanana")
demoUser = User.create!(username: "BrownBanana", email:"brownBanana@banana.com", password: "brownBanana")




