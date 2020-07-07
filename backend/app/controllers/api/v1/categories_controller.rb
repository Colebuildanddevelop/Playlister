class Api::V1::CategoriesController < ApplicationController

    def index
        render json: Category.all, include: :playlists
        
    end
    
    def show
        category = Category.find(params[:id])
        serialized_category = {
            name: category.name,
            user_id: category.user_id,
            playlists: category.playlists.map do |p|
                {
                id: p.id,
                title: p.title,
                songs: p.songs,
                created_by: User.find(p.user_id).username,
                category: Category.find(p.category_id).name,
                likes: p.likes.length
                }
            end
        }
        render json: serialized_category
    end

    def create 
        category_created = Category.create(
            name: params[:name],
            user_id: @user.id
        )
        render json: category_created
    end

    def destroy 
        category_to_delete = Category.find(params[:id])
        if category_to_delete.user_id == @user.id
            category_to_delete.destroy
            render json: {"success": "playlist was deleted"}
        else 
            render json: {"error": "You must have created the category to delete it"}
        end 
    end

end
