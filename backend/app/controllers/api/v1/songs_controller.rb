class Api::V1::SongsController < ApplicationController

    def index 
        render json: Song.all
    end 

    def show 
        render json: Song.find(params[:id])
    end

    def create 
        playlist = Playlist.find(params[:playlist_id])
        if playlist.user_id === @user.id
            song_created = Song.create(
                name: params[:name],
                artist: params[:artist],
                genre: params[:genre],
                video_id: params[:video_id],
                playlist_id: params[:playlist_id]
            )
            render json: song_created
        else 
            render json: {"error": "You can only add songs to playlist that you own"}
        end
    end

    def destroy 
        song_to_delete = Song.find(params[:id])
        playlist = Playlist.find(song_to_delete.playlist_id)
        if playlist.user_id == @user.id
            song_to_delete.destroy
            render json: {"success": "song was deleted"}
        else
           render json: {"error": "Only the user who owns the playlist can remove songs"} 
        end
    end
end
