class AddNewColoumnToOutfitForGenders < ActiveRecord::Migration[7.0]
  def change
    add_column :outfits, :gender, :string
  end
end
