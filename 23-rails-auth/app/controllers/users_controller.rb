class UsersController < ApplicationController
  before_action :authorized, except: [:new, :create]
  before_action :current_user, except: [:new, :create]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:user_id] = @user.id # logging in our user
      redirect_to @user
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to signup_path
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:username, :name, :password, :password_confirmation)
  end
end
