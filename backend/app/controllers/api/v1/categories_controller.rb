class Api::V1::CategoriesController < ApplicationController

    def index
        render json: Category.all
    end
    
    def show
        render json: Category.find(params[:id])
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
