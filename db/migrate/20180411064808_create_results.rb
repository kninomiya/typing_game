class CreateResults < ActiveRecord::Migration[5.1]
  def change
    create_table :results do |t|
      t.string  :user_id
      t.integer  :score

      t.timestamps
    end
  end
end
