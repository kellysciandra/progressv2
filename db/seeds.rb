# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Language.create(name: "Javascript", avatar: "https://images.app.goo.gl/Eg1X7XACTLw7TGLM6")
Language.create(name: "Ruby", avatar: "https://images.app.goo.gl/LDcpfKSJEEwiFiR47")

User.create(name: "Kelly")

Task.create(content: "Work on this...", reference: "some link", language_id: 1)
Task.create(content: "Get some practice doing this...", reference: "some link", language_id: 2)