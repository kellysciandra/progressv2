class Api::V1::LanguagesController < ApplicationController

    def index
        @languages = Language.all
        
        render json: @languages, status: 200
    end 

    def show 
        @language = Language.find(params[:id])

        render json: @language, status: 200
    end 

    def create
        @language = Language.create(language_params)
        
        if @language.save 
            render json: @language, status: 201
        else 
            render json: {message: "Error, please try again"}, status: 400
        end 
    end 

    def update
        if @language.update(language_params)
            render json: @language, status: 200
        else 
            render json: {message: "Error, please try again"}, status: 400
        end 
    end

    def destroy
        @language.destroy
        render json: {message: "You have become a master"},  status: 400
    end 

    private

    def language_params
        params.permit(:name, :avatar)
    end

    def set_language
        @language = Language.find(params[:id])
    end 
end
