module Api
  class LoginController < ApiController
    def create
      cookies[:auth_token] = 'xxx123'
      render json: {}, status: :ok
    end

    def delete
      cookies.delete :auth_token
      render json: {}, status: :gone
    end
  end
end
