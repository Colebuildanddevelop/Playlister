# mod4-project

A User should be able to...

- search through a large library of songs (spotify api, open whyd)
- create playlist - see other users playlist - give "claps" to other users playlist
- add a song(s) to their own playlist - show most liked playlist
- add a playlist to a category (working out, house party, bbq, edm concert, songs for karaoke, etc)
- create their own categories to start a competition

Models:

    - User
        - has many Playlist
        - has many Songs, through Playlist
        - has many Categories
        - has many likes
        {
          username: string,
          password: string,

        }


    - Playlist
       - has many Songs
       - has many likes
       - belongs to Category
       - belongs to User
       {
         title: string,
         user_id: integer,
         category_id: integer,

       }

    - Like
      - belongs_to User
      - belongs_to Playlist

      {
          user_id: integer,
          playlist_id: integer
      }


    - Song
      - belongs to Playlist

      {
        name: string,
        artist: string,
        genre: string,
        playlist_id: integer,

      }

    - Category
      - belongs_to User
      - has many Playlists
      - has many Songs, through Playlist
      - has many Users, through Playlist * (for category leader boards)

      {
        name: string,

      }
