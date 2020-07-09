class Api::V1::PlaylistsController < ApplicationController

    def index 
        playlists = Playlist.all
        serialized_playlist = playlists.map do |p| 
          {
            id: p.id,
            title: p.title,
            songs: p.songs,
            created_by: User.find(p.user_id).username,
            category: Category.find(p.category_id).name,
            likes: p.likes.length
          }
        end
        render json: serialized_playlist
    end

    def show 
      render json: Playlist.find(params[:id])
    end

    def create
        playlist_created = Playlist.create(
            title: params[:title],
            user_id: @user.id,
            category_id: params[:category_id]
        )
        render json: playlist_created
    end

    def destroy 
        playlist_to_delete = Playlist.find(params[:id])
        if playlist_to_delete.user_id == @user.id
            playlist_to_delete.destroy
            render json: {"success": "playlist was deleted"}
        else 
            render json: {"error": "You must have created the playlist to delete it"} 
        end
    end

    def update
        playlist_to_update = Playlist.find(params[:id])
        if playlist_to_update.user_id == @user.id 
            playlist_to_update.update(
              title: params[:title],
              # category_id: params[:category_id],
              user_id: @user.id
            )
            render json: playlist_to_update
        else 
            render json: {"error": "You must have created the playlist to edit it"} 
        end
    end

end
