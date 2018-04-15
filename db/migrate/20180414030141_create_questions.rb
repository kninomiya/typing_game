class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.text :character_string
      t.integer  :genre
      t.text :image_path

      t.timestamps
    end
  end
end
