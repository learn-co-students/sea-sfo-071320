class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :species
      t.integer :number_of_legs
      t.string :size
      t.string :grumpiness
      t.string :description
      t.string :image_url

      t.timestamps
    end
  end
end
