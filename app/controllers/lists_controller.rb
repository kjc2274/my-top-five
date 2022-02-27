class ListsController < ApplicationController
  before_action :set_list, only: %i[ show update destroy ]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /lists
  def index
    @category = Category.find(params[:category_id])
    @lists = @category.lists

    render json: @lists, include: :user
  end

  # GET /users/:user_id/lists
  def get_user_lists
    @user = User.find(params[:user_id])
    @lists = @user.lists

    render json: @lists, include: :category
  end

  # GET /lists/1
  def show
    render json: @list, include: :user
  end

  # POST /lists
  def create
    @list = List.new(list_params)
    @list.user = @current_user
    @list.category_id = params[:category_id]

    if @list.save
      render json: @list, status: :created
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /lists/1
  def update
    if @list.update(list_params)
      render json: @list
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /lists/1
  def destroy
    @list.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_list
      @list = List.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def list_params
      params.require(:list).permit(:author, :first, :second, :third, :fourth, :fifth, :comment, :user_id, :category_id)
    end
end
