class ReservationsController < ApplicationController
	def new
		@reservation = Reservation.new
	end

	def create
		@reservation = Reservation.new(reservation_params)

		if @reservation.save
			# success
			flash[:message] = "Successfully create new reservation"
			redirect_to @reservation.customer
			# redirect_to @reservation
		else
			# error
			# render :new
			flash[:error] = @reservation.errors.full_messages
			redirect_to new_reservation_path
		end
	end

	def show
	end

	private
	def reservation_params
		params.require(:reservation).permit(:date, :party_size, :customer_id, :restaurant_id)
	end
end

# params = {
# 	reservation: {
# 		date: '',
# 		party_size: 6,
# 		customer_id: 1,
# 		restaurant_id: 4
# 	}
# }