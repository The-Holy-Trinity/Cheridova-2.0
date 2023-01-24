class Outfit < ApplicationRecord
    belongs_to :user
    has_many :favorite_outfits
end
