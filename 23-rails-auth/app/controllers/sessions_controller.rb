class SessionsController < ApplicationController
	before_action :authorized, except: [:new, :create]
	before_action :current_user, except: [:new, :create]
	
	def new
	end

	def create
		# here we need to sign the user in
		@user = User.find_by(username: params[:username])

		if @user && @user.authenticate(params[:password])
			# success
			session[:user_id] = @user.id
			redirect_to @user
		else
			# error
			# user typed in wrong password, username doesn't exist
			# todo: add specific error messages
			if @user == nil
				flash[:message] = "User could not be found."
			else
				flash[:message] = "Wrong password."
			end
			redirect_to home_path
		end
	end

	def destroy
		session[:user_id] = nil
		flash[:message] = "Successfully logged out."
		redirect_to home_path
	end
end
