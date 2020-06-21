class CreateMenus < ActiveRecord::Migration[6.0]
  def change
    create_table :menus do |t|
      t.string :category
      t.string :name
      t.string :description
      t.integer :price
      t.integer :duration

      t.timestamps
    end
  end
end
