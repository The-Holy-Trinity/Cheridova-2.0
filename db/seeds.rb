# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user = User.where(email: "test@example.com").first_or_create(password: "password", password_confirmation: "password")

outfit_seeds = [
  {
    name: "DateNight1",
    top: "",
    bottom: "",
    shoes: "",
    accessories: "",
    style: "Date night",
    image: "",
    gender: ""
},
{
  name: "DateNight2",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Date night",
  image: "",
  gender: ""
},
{
  name: "DateNight3",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Date night",
  image: "",
  gender: ""
},
{
  name: "DateNight4",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Date night",
  image: "",
  gender: ""
},
{
  name: "DateNight5",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Date night",
  image: "",
  gender: ""
},
{
  name: "Casual1",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Casual",
  image: "",
  gender: ""
},
{
  name: "Casual2",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Casual",
  image: "",
  gender: ""
},
{
  name: "Casual3",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Casual",
  image: "",
  gender: ""
},
{
  name: "Casual4",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Casual",
  image: "",
  gender: ""
},
{
  name: "Casual5",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Casual",
  image: "",
  gender: ""
},
{
  name: "Formal1",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Formal",
  image: "",
  gender: ""
},
{
  name: "Formal2",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Formal",
  image: "",
  gender: ""
},
{
  name: "Formal3",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Formal",
  image: "",
  gender: ""
},
{
  name: "Formal4",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Formal",
  image: "",
  gender: ""
},
{
  name: "Formal5",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Formal",
  image: "",
  gender: ""
},
{
  name: "Office1",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Office Attire",
  image: "",
  gender: ""
},
{
  name: "Office2",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Office Attire",
  image: "",
  gender: ""
},
{
  name: "Office3",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Office Attire",
  image: "",
  gender: ""
},
{
  name: "Office4",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Office Attire",
  image: "",
  gender: ""
},
{
  name: "Office5",
  top: "",
  bottom: "",
  shoes: "",
  accessories: "",
  style: "Office Attire",
  image: "",
  gender: ""
}

]


end