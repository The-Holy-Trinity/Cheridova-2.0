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
    top: "Tan Ribbed Button Collared Shirt with Blue Quilt Jacket",
    bottom: "Olive Grean Jeans",
    shoes: "Black Boots With Tan Sole",
    accessories: "None",
    style: "Date Night",
    image: "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/11/21-08-18_Set_B_M_SIT_v3_1x1-scaled.jpeg",
    gender: "Male"
},
{
  name: "DateNight2",
  top: "White Sweater Tee with Blue Chino Jacket",
  bottom: "Black Jeans",
  shoes: "White Canas Tennis Shoes",
  accessories: "None",
  style: "Date Night",
  image: "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/11/21-08-18_Set_B_M_SIT_v2_1x1-scaled.jpeg",
  gender: "Male"
},
{
  name: "DateNight3",
  top: "Grey Sweater with Olive Lightweight Jacket",
  bottom: "Dark Jeans",
  shoes: "Brown Leather Canvas Shoes",
  accessories: "None",
  style: "Date Night",
  image: "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/10/21-07-14_Set_B_M_SIT_RACK_v3_1x1-scaled.jpeg",
  gender: "Male"
},
{
  name: "DateNight4",
  top: "Plaid Multicolored Shirt",
  bottom: "Brown Jeans",
  shoes: "Grey Fabric Loafers",
  accessories: "None",
  style: "Date Night",
  image: "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/03/20-05-28_SET_R_M_OLD_V16-scaled.jpeg",
  gender: "Male"
},
{
  name: "DateNight5",
  top: "Seafoam Button Down Shirt",
  bottom: "Brown Slacks",
  shoes: "Grey Fabric Loafers",
  accessories: "None",
  style: "Date Night",
  image: "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/12/21-08-20_Set_A_M_SLD_GRID_v3_1x1-scaled.jpeg",
  gender: "Male"
},
{
  name: "Casual1",
  top: "Tan hoodie with Aztec Print Flannel",
  bottom: "Olive Green Jeans",
  shoes: "Tan Loafer Boots",
  accessories: "None",
  style: "Casual",
  image: "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/05/20-11-16_Set_2_M_OLD_V6_1x1-592x592.jpeg",
  gender: "Male"
},
{
  name: "Casual2",
  top: "Multi Print Shirt",
  bottom: "Light Blue Chinos",
  shoes: "Tan Canvas Shoes",
  accessories: "None",
  style: "Casual",
  image: "https://www.stitchfix.com/men/blog/wp-content/uploads/2022/07/21-05-12_Set_3_M_OLD_v8_1x1-592x592.jpeg",
  gender: "Male"
},
{
  name: "Casual3",
  top: "Blue Long Sleeve Shirt with Cream Knit Sweater",
  bottom: "Olive Khaki Pants",
  shoes: "Tan Leather Boots",
  accessories: "None",
  style: "Casual",
  image: "https://www.stitchfix.com/men/blog/wp-content/uploads/2022/08/14082204-flatten-08e09fdd2591d1a3f60b4123fa224cc9-592x592.png",
  gender: "Male"
},
{
  name: "Casual4",
  top: "Blue/White Print Collared Short Sleeve Shirt",
  bottom: "Tan Drawstring Pants",
  shoes: "Sherbet Leather Canvas Shoes",
  accessories: "None",
  style: "Casual",
  image: "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/10/20-04-08_SET_R_M_OLD_V07_1x1-scaled.jpeg",
  gender: "Male"
},
{
  name: "Casual5",
  top: "Grey Sweater",
  bottom: "Light Peach Jeans",
  shoes: "Green Canvas",
  accessories: "None",
  style: "Casual",
  image: "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/10/20-07-10_Set_2_M_OLD_v10_1x1-scaled.jpeg",
  gender: "Male"
},
{
  name: "Formal1",
  top: "Striped Blue Button down with Blue Blazer",
  bottom: "Blue Slacks",
  shoes: "None",
  accessories: "None",
  style: "Formal",
  image: "https://i.pinimg.com/564x/16/2c/e0/162ce02477ab86f08af59460ebf1aaa4.jpg",
  gender: "Male"
},
{
  name: "Formal2",
  top: "Blue/White Striped Shirt with Blue Blazer",
  bottom: "Grey Slacks",
  shoes: "Blue Oxford Loafers",
  accessories: "Blue watch, grey scarf",
  style: "Formal",
  image: "https://www.shutterstock.com/image-photo/set-mans-fashion-accessories-600w-393334606.jpg",
  gender: "Male"
},
{
  name: "Formal3",
  top: "Blue Button down Shirt with Grey Blazer",
  bottom: "Dark Blue Slacks",
  shoes: "Black Oxfords",
  accessories: "Black belt, Gold watch",
  style: "Formal",
  image: "https://www.shutterstock.com/image-photo/suit-jacket-pants-blue-shirt-600w-1302016903.jpg",
  gender: "Male"
},
{
  name: "Formal4",
  top: "Light Blue buttondown Shirt and Blue Print Blazer",
  bottom: "Grey Slacks",
  shoes: "White Tennis Shoes",
  accessories: "Straw hat, Black belt, Blue bowtie, Watch, and Sunglasses",
  style: "Formal",
  image: "https://www.shutterstock.com/image-photo/mens-fashion-blue-suits-clothing-600w-1546096856.jpg",
  gender: "Male"
},
{
  name: "Formal5",
  top: "Light Blue button down shirt with Grey Blazer",
  bottom: "Grey Slacks",
  shoes: "Brown Oxford Loafers",
  accessories: "Brown Belt",
  style: "Formal",
  image: "https://www.shutterstock.com/image-photo/mens-fashion-gray-suit-tie-600w-1725552727.jpg",
  gender: "Male"
},
{
  name: "Office1",
  top: "White shirt with Grey Blazer",
  bottom: "Dark Blue Slacks",
  shoes: "Grey Oxfords",
  accessories: "None",
  style: "Office Attire",
  image: "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/10/21-06-16_Set_B_M_SIT_RACK_v1_1x1-scaled.jpeg",
  gender: "Male"
},
{
  name: "Office2",
  top: "Light Blue Shirt with Orange Vest",
  bottom: "Grey Slacks",
  shoes: "Grey Oxfords",
  accessories: "None",
  style: "Office Attire",
  image: "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/10/21-06-16_Set_B_M_SIT_RACK_v4_1x1-scaled.jpeg",
  gender: "Male"
},
{
  name: "Office3",
  top: "Olive Shirt with Blue Zippered Jacket",
  bottom: "Black Jeans",
  shoes: "",
  accessories: "None",
  style: "Office Attire",
  image: "https://www.stitchfix.com/men/blog/wp-content/uploads/2021/10/21-06-16_Set_B_M_SIT_RACK_v3_1x1-scaled.jpeg",
  gender: "Male"
},
{
  name: "Office4",
  top: "Light Blue Jean Shirt",
  bottom: "Tan Slacks",
  shoes: "Olive Suede Boots",
  accessories: "None",
  style: "Office Attire",
  image: "https://www.stitchfix.com/men/blog/wp-content/uploads/2022/04/22-02-15_Set_A_M_OLD_v7_1x1-1024x1024.jpeg",
  gender: "Male"
},
{
  name: "Office5",
  top: "Grey Buttondown Shirt with Grey Blazer",
  bottom: "Dark Blue Slacks",
  shoes: "Brown Oxford Boots",
  accessories: "None",
  style: "Office Attire",
  image: "https://www.stitchfix.com/men/blog/wp-content/uploads/2022/04/21-08-17_Set_A_M_OLD_v1_1x1-1024x1024.jpeg",
  gender: "Male"
},
{
    name: "DateNight1",
    top: "Coral Sweater",
    bottom: "Coral Skirt",
    shoes: "Sherbert Slides",
    accessories: "None",
    style: "Date night",
    image: "https://www.stitchfix.com/women/blog/wp-content/uploads/19-07-01_Set_4_W_OLD_v2-592x592.jpg",
    gender: "Female"
},
{
  name: "DateNight2",
  top: "Red Shirt",
  bottom: "Black/White Polkadot Skirt",
  shoes: "Red Suede Pumps",
  accessories: "None",
  style: "Date night",
  image: "https://www.stitchfix.com/women/blog/wp-content/uploads/20-01-27_Set_3_W_SIT_v2_1x1-scaled.jpeg",
  gender: "Female"
},
{
  name: "DateNight3",
  top: "Yellow Blouse",
  bottom: "White Jeans",
  shoes: "Red Pumps",
  accessories: "None",
  style: "Date night",
  image: "https://www.stitchfix.com/women/blog/wp-content/uploads/20-01-29_Set_3_W_SIT_v1_1x1.jpeg",
  gender: "Female"
},
{
  name: "DateNight4",
  top: "Multi Color Blouse with Salmon Pullover Sweater",
  bottom: "Light Blue Jeans",
  shoes: "Light Blue Pumps",
  accessories: "None",
  style: "Date night",
  image: "https://www.stitchfix.com/women/blog/wp-content/uploads/20-01-21_SET_1_W_OLD_v7_BG-scaled.jpeg",
  gender: "Female"
},
{
  name: "DateNight5",
  top: "Black Quarter Sleeve Sweater",
  bottom: "Pink Plaid Slacks",
  shoes: "Nude/Blak Flats",
  accessories: "Black Purse",
  style: "Date night",
  image: "https://www.stitchfix.com/women/blog/wp-content/uploads/21-01-20_SET_2_W_OLD_V9_1x1-scaled.jpeg",
  gender: "Female"
},
{
  name: "Casual1",
  top: "Black/White Striped V-neck Tee",
  bottom: "Jeans",
  shoes: "Red Pumps",
  accessories: "Black Purse",
  style: "Casual",
  image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2015/07/2015_07_10_Stylist_Summer-Tips_0091-592x592.jpg",
  gender: "Female"
},
{
  name: "Casual2",
  top: "Purple Scallop Edge Top",
  bottom: "Tan Pants",
  shoes: "Leopard Print Flats",
  accessories: "Silver Bracelet",
  style: "Casual",
  image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/03/2015_05_22_0040-592x592.jpg",
  gender: "Female"
},
{
  name: "Casual3",
  top: "Grey/White Striped Shirt with Pink Sweater",
  bottom: "Grey Print Jeans with Floral Print",
  shoes: "Tennis Shoes",
  accessories: "None",
  style: "Casual",
  image: "https://www.stitchfix.com/women/blog/wp-content/uploads/20-01-22_SET_1_W_OLD_v8-scaled.jpeg",
  gender: "Female"
},
{
  name: "Casual4",
  top: "Pink Tank with Floral Print Sweater",
  bottom: "Tan Jogging Pants",
  shoes: "Tan Slides with Silver Jewels",
  accessories: "None",
  style: "Casual",
  image: "https://www.stitchfix.com/women/blog/wp-content/uploads/20-01-23_SET_1_W_OLD_v1-scaled.jpeg",
  gender: "Female"
},
{
  name: "Casual5",
  top: "Striped Top with White pullover Sweater",
  bottom: "Olive Green Skirt",
  shoes: "Camo Print Flats",
  accessories: "None",
  style: "Casual",
  image: "https://www.stitchfix.com/women/blog/wp-content/uploads/20-09-17_Set_1_W_OLD_v2_1x1-scaled.jpeg",
  gender: "Female"
},
{
  name: "Formal1",
  top: "Blue Sequined Dress",
  bottom: "Blue Sequined Dress",
  shoes: "None",
  accessories: "None",
  style: "Formal",
  image: "https://seezona.imgix.net/ed/15/ed159a569d8f42efbf3870e4ccb68cee_m.png?auto=format&fit=fill&q=90&bg=F7F7F7&ar=300%3A365&ixlib=react-9.5.2&w=1600",
  gender: "Female"
},
{
  name: "Formal2",
  top: "Blush Colore Empire Dress",
  bottom: "Blush Colore Empire Dress",
  shoes: "None",
  accessories: "None",
  style: "Formal",
  image: "https://n.nordstrommedia.com/id/sr3/4baa3f72-f4b9-4ff1-a89c-b54b229b0dd5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
  gender: "Female"
},
{
  name: "Formal3",
  top: "Red Ruffle Dress",
  bottom: "Red Ruffle Dress",
  shoes: "Clear Strappy Heels",
  accessories: "White Earrings",
  style: "Formal",
  image: "https://n.nordstrommedia.com/id/sr3/0c67d797-45bd-4110-bf56-790ca959246a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
  gender: "Female"
},
{
  name: "Formal4",
  top: "Black Ruffle Dress",
  bottom: "Black Ruffle Dress",
  shoes: "Black Strappy Heels",
  accessories: "Diamond Earrings",
  style: "Formal",
  image: "https://n.nordstrommedia.com/id/sr3/ccb4870a-6c73-4abb-8303-b65bbb2c4a3c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
  gender: "Female"
},
{
  name: "Formal5",
  top: "Red Peplum Dress",
  bottom: "Red Peplum Dress",
  shoes: "Multi Colored Pumps",
  accessories: "Red Earring",
  style: "Formal",
  image: "https://n.nordstrommedia.com/id/sr3/cb275339-77c6-4749-bb5c-c367144b39d5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
  gender: "Female"
},
{
  name: "Office1",
  top: "Fuschia Blouse",
  bottom: "Black Lace Skirt",
  shoes: "Black Pumps",
  accessories: "Black Coat",
  style: "Office Attire",
  image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2014/12/Holiday-pieces-repurposed-for-work-3.jpg",
  gender: "Female"
},
{
  name: "Office2",
  top: "Black Mesh Top with Black Blazer",
  bottom: "Black Leather Skirt",
  shoes: "Black Knee Boots",
  accessories: "Gold Cuff Bracelet",
  style: "Office Attire",
  image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/4dbf95a350ff0d3226daea8cd802a539.jpg",
  gender: "Female"
},
{
  name: "Office3",
  top: "White Collared shirt with Grey sweater Blazer",
  bottom: "Houndstooth Pants",
  shoes: "Black Pumps",
  accessories: "Black Rim Glasses",
  style: "Office Attire",
  image: "https://www.stitchfix.com/women/blog/wp-content/uploads/233328eb067830631be1484966b5628e.jpg",
  gender: "Female"
},
{
  name: "Office4",
  top: "White Turtle Neck with Black Cami",
  bottom: "Grey Skirt",
  shoes: "None",
  accessories: "Silver bracelet",
  style: "Office Attire",
  image: "https://www.stitchfix.com/women/blog/wp-content/uploads/Business-Casual-Wardrobe.jpg",
  gender: "Female"
},
{
  name: "Office5",
  top: "Tan Buttondown Shirt",
  bottom: "Tan Lace Skirt",
  shoes: "Tan Strappy Pumps",
  accessories: "None",
  style: "Office Attire",
  image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
  ",
  gender: "Female"
}

]
outfit_seeds.each do |outfit|
  user.outfits.create(outfit)
  p "creating: #{outfit}"
end

