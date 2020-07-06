class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :artist
      t.string :genre
      t.string :video_id
      t.integer :playlist_id

      t.timestamps
    end
  end
end
