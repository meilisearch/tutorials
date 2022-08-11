class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.text :ingredients, null: false
      t.text :directions, null: false
      t.string :diet, null: false

      t.timestamps
    end
  end
end
