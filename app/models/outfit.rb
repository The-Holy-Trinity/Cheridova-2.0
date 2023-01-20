class Outfit < ApplicationRecord
    belongs_to :User
    has_many :favorite_outfits through: :User
end
