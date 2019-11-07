class Api::V1::UsersController < ApplicationController
    
    def index
        @users = User.all
        render json: users, status: 200
    end 

    def show 
        render json: @user, status: 200
    end 

    def create
        user = User.new(user_params)
        if user.save 
            render json: user, status: 201
        else
            render json: {message: "Error, please re-enter"}, status: 400
        end 
    end
    
    private

    def user_params
        params.permit(:name)
    end

    def set_user
        @user = User.find(params[:id])
    end 
end
