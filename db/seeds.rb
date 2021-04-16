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

testProject = Project.create!(name: "TestProject", description: "I am a test project", creator_id: 1)
testProject = Project.create!(name: "TestProject2", description: "I am another test project", creator_id: 1)
testProject = Project.create!(name: "TestProject3", description: "I am the end of projects", creator_id: 1)

testSection = Section.create!({name: "TestSection1", creator_id: 1, project_id: 1})
testSection = Section.create!({name: "TestSection2", creator_id: 1, project_id: 1})
testSection = Section.create!({name: "TestSection3", creator_id: 1, project_id: 1})

testTask = Task.create!({
  name: "TestTask",
  description: "I am a test task",
  due_date: "2021-04-16",
  priority: "high",
  done: false,
  creator_id: 1,
  project_id: 1,
  section_id: 1
})

testTask = Task.create!({
  name: "Another TestTask",
  description: "I am another test task",
  due_date: "2021-04-16",
  priority: "high",
  done: false,
  creator_id: 1,
  project_id: 1,
  section_id: 1
})

testTask = Task.create!({
  name: "Last TestTask",
  description: "I am the last test task",
  due_date: "2021-04-16",
  priority: "medium",
  done: false,
  creator_id: 1,
  project_id: 1,
  section_id: 2
})

testTask = Task.create!({
  name: "Unique Task",
  description: "I am a test task",
  done: false,
  creator_id: 1
})
