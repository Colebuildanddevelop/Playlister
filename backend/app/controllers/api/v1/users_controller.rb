class Api::V1::UsersController < ApplicationController
  skip_before_action :logged_in?, only: [:create]
  
  # Sign Up
  def create
    user = User.new(user_params)

    if user.valid?
      user.save
      render json: {user: UserSerializer.new(user)}, status: :created
    else
      render json: {error: "Failed to create a user"}, status: :not_acceptable
    end
  end

  def destroy
    if params[:id] == @user.id.to_s
      @user.destroy
      render json: {"success": "user account has been deleted"}
    else 
      render json: {"error": "only the owner of the account can delete"}
    end
  end

  def show
    user = User.find(params[:id])
    serialized_playlists = user.playlists.map do |p| 
      {
        id: p.id,
        title: p.title,
        songs: p.songs,
        created_by: User.find(p.user_id).username,
        category: Category.find(p.category_id).name,
        likes: p.likes.length
      }
    end
    user_serialized = {
      playlists: serialized_playlists
    }
    render json: user_serialized
  end

  private

  def user_params
    params.permit(:username, :password)
  end
end
