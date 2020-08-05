class DishesController < ApplicationController
	def index
		@dishes = Dish.all
	end

	def new
		@dish = Dish.new
		render 'new'
	end

	def create
		# @dish = Dish.new(name: params[:dish][:name])
		@dish = Dish.new(dish_params)

		if @dish.save
			# success
			# redirect to show page for this dish
			redirect_to dishes_path
		else
			# @dish.errors.full_messages
			# something went wrong
			# re render new page
			render 'new'
		end
	end

	# Generally any successful get action will use render and any successful patch/post/delete will use redirect. We will likely use a redirect with a get when there is an error and we might use render with a unsuccessful patch/post/delete.

	private
	def dish_params
		params.require(:dish).permit(:name, :cost, :size, :extra_cheese)
	end
end

# params = {
# 	dish: {
# 		name: "salami",
# 		cost: "20",
# 		size: "L"
# 	}
# }

# params[:dish]

# my_super_cool_hash = {name: params[:dish][:name], cost: params[:dish][:cost]}
# Dish.new(my_super_cool_hash)
# Dish.new(params[:dish])
