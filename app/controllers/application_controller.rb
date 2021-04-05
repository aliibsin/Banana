class ApplicationController < ActionController::Base

  helper_method :current_user, :sign_in!, :sign_out!, :signged_in?, :require_sign_in

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def sign_in!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def signged_in?
    !!current_user
  end

  def sign_out!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_sign_in
    redirect_to new_session_url unless logged_in?
  end

end