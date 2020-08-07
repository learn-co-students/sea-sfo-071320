class CowsController < ApplicationController
	# before_action :get_all_farmers, only: [:new, :create]

	def new
		@cow = Cow.new
		@farmers = Farmer.all
	end

	def create
		@cow = Cow.new(cow_params)
		@farmers = Farmer.all

		if @cow.save
			redirect_to cow_path(@cow)
			# redirect_to @cow
		else
			# redirect_to new_cow_path <- don't do this here, we want to make sure data is prefilled
			render :new
		end
	end

	def show
		@cow = Cow.find(params[:id])
	end

	private
	def cow_params
		params.require(:cow).permit(:name, :spots, :farmer_id)
		# params.require(:cow).permit(*args)
	end

	def get_all_farmers 
		@farmers = Farmer.all
	end
end

# params = {
# 	cow: {
# 		name: "hilda",
# 		spots: 20,
# 		farmer_id: 2
# 	}
# }