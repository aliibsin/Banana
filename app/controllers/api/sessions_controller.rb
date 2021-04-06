class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      sign_in!(@user)
      render "api/users/show"
    else
      render json: ["Invalid email/password combination"], status: 422
    end
  end

  def destroy
    sign_out!
    render json: ["Logout Successful"]
  end

end
