class ApplicationController < ActionController::Base
  include CorsHelper

  protect_from_forgery

  before_filter :cors_preflight_check
  after_filter :cors_set_access_control_headers
end
