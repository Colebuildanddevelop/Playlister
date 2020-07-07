class Api::V1::LikesController < ApplicationController
    def create
        # if user has not liked this playlist
        like = Playlist.find(params[:playlist_id]).likes.find {|like| like.user_id == @user.id }
        if !like
            Like.create(user_id: @user.id, playlist_id: params[:playlist_id])
            render json: {"message": "liked playlist"}
        else
            like.destroy
            render json: {"message": "unliked playlist"}
        end
    end
end
