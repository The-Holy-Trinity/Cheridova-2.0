require 'rails_helper'

RSpec.describe "Outfits", type: :request do
  describe "GET /index" do
    it "gets a list of outfits" do
      user = User.create(
      email: "test@example.com", 
      password: "password", 
      password_confirmation: "password")
      user.outfits.create(
        name: "Office5",
        top: "Tan Buttondown Shirt",
        bottom: "Tan Lace Skirt",
        shoes: "Tan Strappy Pumps",
        accessories: "None",
        style: "Office Attire",
        image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
        ",
        gender: "female"
      )

      get '/outfits' 

      outfit = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(outfit.length).to eq 1
    end
  end
end
