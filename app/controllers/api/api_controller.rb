module Api
  class ApiController < ApplicationController
    before_filter :require_authentication

    def require_authentication
      token = cookies[:auth_token]
      ap token: token

      valid = token == 'xxx123'
      unless valid
        valid = authenticate_with_http_basic do |username, password|
          password == 'password'
        end
      end

      ap valid: valid

      unless valid
        render json: { error_code: :unauthorized }, status: :unauthorized
      end
    end
  end
end
