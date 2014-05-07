module Api
  class UploadController < ApiController
    def get_upload
      ap get: params
      logger.info "upload"
    end

    def post_upload
      ap post: params
      logger.info "upload"
      file = params[:file].tempfile
      target_file = File.join(Rails.root, "foo.txt")
      FileUtils.cp(file, target_file)
      ap sz: File.size(target_file), name: target_file.to_s
    end

    def put_upload
      ap put: params
      logger.info "upload"
    end
  end
end
