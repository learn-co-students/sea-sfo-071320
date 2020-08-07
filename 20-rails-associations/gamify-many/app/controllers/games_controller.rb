class GamesController < ApplicationController
	before_action :find_game, only: [:show, :edit, :destroy, :update]

	def index
		@games = Game.all
	end

	def show
		# @game = Game.find(params[:id])
	end

	def edit
	end

	def new
		@game = Game.new
	end

	def create
		@game = Game.new(game_params)

		if @game.save
			redirect_to @game
		else
			render :new
		end
	end

	def update
		if @game.update(game_params)
			redirect_to @game
		else
			render :edit
		end
	end

	def destroy
		# @game = Game.find(params[:id])
		@game.destroy

		redirect_to games_path
	end

	private
	def game_params
		params.require(:game).permit(:title, :image_url, :description)
	end

	def find_game
		@game = Game.find(params[:id])
	end
end
