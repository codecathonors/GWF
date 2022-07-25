class NewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
        def index
            news = News.all
            render json: news, status: :ok
        end
    
        def show
            newsSingle = News.find_by!(id: params[:id])
            render json: newsSingle, status: :ok
        end
    
        def create
            newsSingle = News.create!(news_params)
            render json: newsSingle, status: :created
        end
    
        def update
            newsSingle = News.find_by!(id: params[:id])
            newsSingle.update!(news_params)
            render json: newsSingle, status: :accepted
        end
    
        private
    
        def news_params
            params.permit(:text, :title, :date)
        end
    
        def render_not_found
            render json: { error: "Not found"}, status: :not_found
        end
    
        def render_invalid(invalid)
            render json: { errors: invalid.record.errors.full_messages }
        end
    

end
