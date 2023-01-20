class FavoriteOutfit < ApplicationRecord
    belongs_to :User
    has_many :outfits through: :User
end
