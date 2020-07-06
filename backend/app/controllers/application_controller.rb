class ApplicationController < ActionController::API

    before_action :logged_in?

    @user = nil

    def encode_token(payload)
        JWT.encode(payload, "se042020")
        # JWT.encode(payload, "se042020", "HS256")
    end

    def logged_in?
        # byebug

        begin
            headers = request.headers["Authorization"]
            token = headers.split(" ")[1]
            user_id = JWT.decode(token, "se042020")[0]["user_id"]
            @user = User.find(user_id)
        rescue 
            @user = nil
        # ensure
            #always runs with an error or without
        end

        render json: {error: "Please Login"} unless @user
        
    end
end
