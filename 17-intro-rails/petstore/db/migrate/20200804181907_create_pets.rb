class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :num_legs
      t.string :species

      t.timestamps
    end
  end
end
