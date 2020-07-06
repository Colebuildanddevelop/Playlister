require 'faker'

User.destroy_all
Playlist.destroy_all
Song.destroy_all
Like.destroy_all
Category.destroy_all

u1 = User.create!(
  username: Faker::Creature::Animal.name,
  password: "123"
)
u2 = User.create!(
    username: Faker::Creature::Animal.name,
    password: "123"
  )
u3 = User.create!(
    username: Faker::Creature::Animal.name,
    password: "123"
  )

users = [u1, u2, u3]

c1 = Category.create!(name: "Movie Scores", user_id:users.sample.id)
c2 = Category.create!(name: "Karaoke", user_id:users.sample.id)
c3 = Category.create!(name: "EDM Festival", user_id:users.sample.id)
categories = [c1, c2, c3]
  
p1 = Playlist.create!(
  title: Faker::Music.genre,
  user_id: users.sample.id,
  category_id: categories.sample.id
)

p2 = Playlist.create!(
  title: Faker::Music.genre,
  user_id: users.sample.id,
  category_id: categories.sample.id
)

p3 = Playlist.create!(
  title: Faker::Music.genre,
  user_id: users.sample.id,
  category_id: categories.sample.id
)

playlists = [p1, p2, p3]

10.times do 
    # name = Faker::Music
    Song.create!(
      name: Faker::Music.band,
      artist: Faker::Music.band,
      genre: Faker::Music.genre,
      video_id: "XoOaUb0gBuw",
      playlist_id: playlists.sample.id
    )
end

10.times do 
  Like.create!(
    user_id: users.sample.id,
    playlist_id: playlists.sample.id
  )
end