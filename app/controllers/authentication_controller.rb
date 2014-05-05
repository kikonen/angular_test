class AuthenticationController < ApplicationController
  def create
    cookies[:auth_token] = 'xxx123'
    # @see http://stackoverflow.com/questions/9362910/rails-warning-cant-verify-csrf-token-authenticity-for-json-devise-requests
    response.headers['X-CSRF-Token'] = form_authenticity_token
    render json: {}, status: :ok
  end

  def delete
    cookies.delete :auth_token
    render json: {}, status: :gone
  end
end
