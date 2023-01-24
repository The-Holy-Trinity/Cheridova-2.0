require 'rails_helper'

RSpec.describe Outfit, type: :model do
    it "Throws error if outfit does not contain name" do
      dress = Outfit.create(
      top: "Tan Buttondown Shirt",
      bottom: "Tan Lace Skirt",
      shoes: "Tan Strappy Pumps",
      accessories: "None",
      style: "Office Attire",
      image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
      ",
      gender: "female", 
      user_id: 1)
      expect(dress.errors[:name]).to_not be_empty
  end
  it "Throws error if outfit does not contain top" do
    dress = Outfit.create(
      name: "Office5",
      bottom: "Tan Lace Skirt",
      shoes: "Tan Strappy Pumps",
      accessories: "None",
      style: "Office Attire",
      image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
      ",
      gender: "female", 
      user_id: 1)
  end
  it "Throws error if outfit does not contain bottom" do
    dress = Outfit.create(
      name: "Office5",
      top: "Tan Buttondown Shirt",
      shoes: "Tan Strappy Pumps",
      accessories: "None",
      style: "Office Attire",
      image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
      ",
      gender: "female", 
      user_id: 1)
      expect(dress.errors[:bottom]).to_not be_empty
  end
  it "Throws error if outfit does not contain shoes" do
    dress = Outfit.create(
      name: "Office5",
      top: "Tan Buttondown Shirt",
      bottom: "Tan Lace Skirt",
      accessories: "None",
      style: "Office Attire",
      image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
      ",
      gender: "female", 
      user_id: 1)
      expect(dress.errors[:shoes]).to_not be_empty
  end
  it "Throws error if outfit does not contain accessories" do
    dress = Outfit.create(
      name: "Office5",
      top: "Tan Buttondown Shirt",
      bottom: "Tan Lace Skirt",
      shoes: "Tan Strappy Pumps",
      style: "Office Attire",
      image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
      ",
      gender: "female", 
      user_id: 1)
      expect(dress.errors[:accessories]).to_not be_empty
  end
  it "Throws error if outfit does not contain style" do
    dress = Outfit.create(
      name: "Office5",
      top: "Tan Buttondown Shirt",
      bottom: "Tan Lace Skirt",
      shoes: "Tan Strappy Pumps",
      accessories: "None",
      image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
      ",
      gender: "female", 
      user_id: 1)
      expect(dress.errors[:style]).to_not be_empty
  end
  it "Throws error if outfit does not contain image" do
    dress = Outfit.create(
      name: "Office5",
      top: "Tan Buttondown Shirt",
      bottom: "Tan Lace Skirt",
      shoes: "Tan Strappy Pumps",
      accessories: "None",
      style: "Office Attire",
      gender: "female", 
      user_id: 1)
      expect(dress.errors[:image]).to_not be_empty
  end
  it "Throws error if outfit does not contain gender" do
    dress = Outfit.create(
      name: "Office5",
      top: "Tan Buttondown Shirt",
      bottom: "Tan Lace Skirt",
      shoes: "Tan Strappy Pumps",
      accessories: "None",
      style: "Office Attire",
      image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
      ", 
      user_id: 1)
      expect(dress.errors[:gender]).to_not be_empty
  end
  it "Throws error if outfit does not contain user_id" do
    dress = Outfit.create(
      name: "Office5",
      top: "Tan Buttondown Shirt",
      bottom: "Tan Lace Skirt",
      shoes: "Tan Strappy Pumps",
      accessories: "None",
      style: "Office Attire",
      image: "https://www.stitchfix.com/women/blog/wp-content/uploads/2016/08/07_12_SUM16_Aug-Blog-Fall-Workwear-Guide_08W1_v1_0007_SQ-1-592x592.jpg
      ",
      gender: "female")
      expect(dress.errors[:user_id]).to_not be_empty
  end
end
