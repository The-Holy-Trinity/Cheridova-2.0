class AddImageColoumnToOutfitAgain < ActiveRecord::Migration[7.0]
  def change
    add_column :outfits, :image, :text
  end
end
