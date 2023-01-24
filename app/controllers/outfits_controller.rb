class OutfitsController < ApplicationController
    def index
        @outfits = Outfit.all
        render json: @outfits
    end
    def create
       outfit = Outfit.create(outfit_params)
        if outfit.valid?
        render json: outfit
        else
        render json: outfit.errors, status: 422
        end
    end
    private
    def outfit_params
        params.require(:outfit).permit(:name, :top, :bottom, :shoes, :accessories, :style, :image, :gender, :user_id)
    end
end
