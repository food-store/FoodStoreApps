class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :date
      t.string :hour
      t.string :message
      t.string :status
      t.belongs_to :client, index:true
      t.belongs_to :resto, index:true

      t.timestamps
    end
  end
end
