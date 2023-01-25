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

    def destroy
        outfit = Outfit.find(params[:id])
        if outfit.destroy
          render json: outfit
        else
          render json: outfit.errors, status: unproccessable_entity
        end
    end
    
    def update
        outfit = Outfit.find(params[:id])
        outfit.update(outfit_params)
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
