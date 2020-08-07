class CreateGamesPlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :games_players do |t|
      # t.references :game, null: false, foreign_key: true
      # t.references :player, null: false, foreign_key: true
      # t.integer :game_id
      # t.integer :player_id

      t.belongs_to :game
      t.belongs_to :player

      t.timestamps
    end
  end
end
