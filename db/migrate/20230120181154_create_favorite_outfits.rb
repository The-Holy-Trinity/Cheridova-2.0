class CreateFavoriteOutfits < ActiveRecord::Migration[7.0]
  def change
    create_table :favorite_outfits do |t|
      t.integer :outfit_id
      t.integer :user_id

      t.timestamps
    end
  end
end
