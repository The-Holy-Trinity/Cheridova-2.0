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
  describe "POST /create" do
    it "creates an outfit" do
        User.create(
        email: "test@example.com", 
        password: "password", 
        password_confirmation: "password")
        user = User.first

        outfit_params = {outfit: {
          name: "Office5",
          top: "Tan Buttondown Shirt",
          bottom: "Tan Lace Skirt",
          shoes: "Tan Strappy Pumps",
          accessories: "None",
          style: "Office Attire",
          image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
          ",
          gender: "female",
          user_id: user.id
        }}

      post '/outfits', params: outfit_params
      expect(response).to have_http_status(200)

      outfit = Outfit.first
      expect(outfit.name).to eq "Office5"
    end
    it "cannot create an outfit without a name" do
      User.create(
        email: "test@example.com", 
        password: "password", 
        password_confirmation: "password")
        user = User.first

        outfit_params = {outfit: {
          top: "Tan Buttondown Shirt",
          bottom: "Tan Lace Skirt",
          shoes: "Tan Strappy Pumps",
          accessories: "None",
          style: "Office Attire",
          image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
          ",
          gender: "female",
          user_id: user.id
        }}

      post '/outfits', params: outfit_params
      expect(response).to have_http_status(422)  
      json_response = JSON.parse(response.body)
      expect(json_response['name']).to include "can't be blank"
    end
    it "cannot create an outfit without a top" do
      User.create(
        email: "test@example.com", 
        password: "password", 
        password_confirmation: "password")
        user = User.first

        outfit_params = {outfit: {
          name: "Office5",
          bottom: "Tan Lace Skirt",
          shoes: "Tan Strappy Pumps",
          accessories: "None",
          style: "Office Attire",
          image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
          ",
          gender: "female",
          user_id: user.id
        }}

      post '/outfits', params: outfit_params
      expect(response).to have_http_status(422)  
      json_response = JSON.parse(response.body)
      expect(json_response['top']).to include "can't be blank"
    end
    it "cannot create an outfit without a bottom" do
      User.create(
        email: "test@example.com", 
        password: "password", 
        password_confirmation: "password")
        user = User.first

        outfit_params = {outfit: {
          name: "Office5",
          top: "Tan Buttondown Shirt",
          shoes: "Tan Strappy Pumps",
          accessories: "None",
          style: "Office Attire",
          image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
          ",
          gender: "female",
          user_id: user.id
        }}

      post '/outfits', params: outfit_params
      expect(response).to have_http_status(422)  
      json_response = JSON.parse(response.body)
      expect(json_response['bottom']).to include "can't be blank"
    end
    it "cannot create an outfit without shoes" do
      User.create(
        email: "test@example.com", 
        password: "password", 
        password_confirmation: "password")
        user = User.first

        outfit_params = {outfit: {
          name: "Office5",
          top: "Tan Buttondown Shirt",
          bottom: "Tan Lace Skirt",
          accessories: "None",
          style: "Office Attire",
          image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
          ",
          gender: "female",
          user_id: user.id
        }}

      post '/outfits', params: outfit_params
      expect(response).to have_http_status(422)  
      json_response = JSON.parse(response.body)
      expect(json_response['shoes']).to include "can't be blank"
    end
    it "cannot create an outfit without accessories" do
      User.create(
        email: "test@example.com", 
        password: "password", 
        password_confirmation: "password")
        user = User.first

        outfit_params = {outfit: {
          name: "Office5",
          top: "Tan Buttondown Shirt",
          bottom: "Tan Lace Skirt",
          shoes: "Tan Strappy Pumps",
          style: "Office Attire",
          image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
          ",
          gender: "female",
          user_id: user.id
        }}

      post '/outfits', params: outfit_params
      expect(response).to have_http_status(422)  
      json_response = JSON.parse(response.body)
      expect(json_response['accessories']).to include "can't be blank"
    end
    it "cannot create an outfit without a style" do
      User.create(
        email: "test@example.com", 
        password: "password", 
        password_confirmation: "password")
        user = User.first

        outfit_params = {outfit: {
          name: "Office5",
          top: "Tan Buttondown Shirt",
          bottom: "Tan Lace Skirt",
          shoes: "Tan Strappy Pumps",
          accessories: "None",
          image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
          ",
          gender: "female",
          user_id: user.id
        }}

      post '/outfits', params: outfit_params
      expect(response).to have_http_status(422)  
      json_response = JSON.parse(response.body)
      expect(json_response['style']).to include "can't be blank"
    end
    it "cannot create an outfit without an image" do
      User.create(
        email: "test@example.com", 
        password: "password", 
        password_confirmation: "password")
        user = User.first

        outfit_params = {outfit: {
          name: "Office5",
          top: "Tan Buttondown Shirt",
          bottom: "Tan Lace Skirt",
          shoes: "Tan Strappy Pumps",
          accessories: "None",
          style: "Office Attire",
          gender: "female",
          user_id: user.id
        }}

      post '/outfits', params: outfit_params
      expect(response).to have_http_status(422)  
      json_response = JSON.parse(response.body)
      expect(json_response['image']).to include "can't be blank"
    end
    it "cannot create an outfit without a gender" do
      User.create(
        email: "test@example.com", 
        password: "password", 
        password_confirmation: "password")
        user = User.first

        outfit_params = {outfit: {
          name: "Office5",
          top: "Tan Buttondown Shirt",
          bottom: "Tan Lace Skirt",
          shoes: "Tan Strappy Pumps",
          accessories: "None",
          style: "Office Attire",
          image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
          ",
          user_id: user.id
        }}

      post '/outfits', params: outfit_params
      expect(response).to have_http_status(422)  
      json_response = JSON.parse(response.body)
      expect(json_response['gender']).to include "can't be blank"
    end
    it "cannot create an outfit without a user id" do
      User.create(
        email: "test@example.com", 
        password: "password", 
        password_confirmation: "password")
        user = User.first

        outfit_params = {outfit: {
          name: "Office5",
          top: "Tan Buttondown Shirt",
          bottom: "Tan Lace Skirt",
          shoes: "Tan Strappy Pumps",
          accessories: "None",
          style: "Office Attire",
          image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
          ",
          gender: "female"
        }}

      post '/outfits', params: outfit_params
      expect(response).to have_http_status(422)  
      json_response = JSON.parse(response.body)
      expect(json_response['user_id']).to include "can't be blank"
    end
end
describe "DESTROY /delete" do
  it "deletes an outfit" do
    user = User.create(
      email: "test@example.com", 
      password: "password", 
      password_confirmation: "password")
      outfit = user.outfits.create(
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
    expect do 
      delete outfit_url(outfit)
    end.to change(Outfit, :count).by(-1)
  end
end
end
