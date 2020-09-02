class Api::V1::AnimalsController < ApplicationController
  # GET /animals
  def index
    animals = Animal.all
    render json: animals
  end

  # GET /animals/:id
  def show
    animal = Animal.find(params[:id])
    render json: animal
  end

  # POST /animals
  def create
    animal = Animal.new(animal_params)

    if animal.save
      render json: animal
    else
      render json: { error: "Something went wrong" }
    end
  end

  # PATCH /animals/:id
  def update
    animal = Animal.find(params[:id])

    if animal.update(animal_params)
      render json: animal
    else
      render json: { error: "Something went wrong" }
    end
  end

  # DELETE /animals/:id
  def destroy
    animal = Animal.find(params[:id])
    animal.destroy
    render json: { message: "Successfully deleted animal" }
  end

  # NEW and EDIT are now handled by our JS/HTML frontend

  private

  def animal_params
    params.require(:animal).permit(:name, :gender, :species_id)
  end
end
