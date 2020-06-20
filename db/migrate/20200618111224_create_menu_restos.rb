class CreateMenuRestos < ActiveRecord::Migration[6.0]
  def change
    create_table :menu_restos do |t|
      t.belongs_to :menu, index:true
      t.belongs_to :resto, index:true
      
      t.timestamps
    end
  end
end
