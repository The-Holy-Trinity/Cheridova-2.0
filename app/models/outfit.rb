class Outfit < ApplicationRecord
    belongs_to :user
    has_many :favorite_outfits
    validates :name, :top, :bottom, :shoes, :accessories, :style, :gender, :image, :user_id, presence: true
end
