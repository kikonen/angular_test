class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :cors_preflight_check
  after_filter :cors_set_access_control_headers

  # For all responses in this controller, return the CORS access control headers.
  def cors_set_access_control_headers
    headers['Access-Control-Allow-Origin'] = cors_origin
    headers['Access-Control-Allow-Credentials'] = 'true'
    headers['Access-Control-Allow-Methods'] = 'POST, GET, DELETE, PUT, PATCH, OPTIONS'
    headers['Access-Control-Max-Age'] = "1728000"
  end

  # If this is a preflight OPTIONS request, then short-circuit the
  # request, return only the necessary headers and return an empty
  # text/plain.
  def cors_preflight_check
    headers['Access-Control-Allow-Origin'] = cors_origin
    headers['Access-Control-Allow-Credentials'] = 'true'
    headers['Access-Control-Allow-Methods'] = 'POST, GET, DELETE, PUT, PATCH, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, Authorization, Content-Type'
    headers['Access-Control-Max-Age'] = '1728000'
  end

  def cors_origin
    request.headers['HTTP_ORIGIN']
  end

  def options
    head :ok
  end
end
