class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.blob :image
      t.integer :gerne
      t.text :image_path

      t.timestamps
    end
  end
end
