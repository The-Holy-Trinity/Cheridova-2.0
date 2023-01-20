class CreateOutfits < ActiveRecord::Migration[7.0]
  def change
    create_table :outfits do |t|
      t.string :name
      t.string :top
      t.string :bottom
      t.string :shoes
      t.string :accessories
      t.string :style
      t.integer :user_id

      t.timestamps
    end
  end
end
