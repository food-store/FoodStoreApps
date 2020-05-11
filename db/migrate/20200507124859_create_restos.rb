class CreateRestos < ActiveRecord::Migration[6.0]
  def change
    create_table :restos do |t|
      t.string :name
      t.string :description
      t.string :adress
      t.integer :star

      t.timestamps
    end
  end
end
