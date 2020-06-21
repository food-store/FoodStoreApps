class RestosController < ApplicationController
  def index
    @restaurants = Resto.all
  end

  def show
    @restaurant = Resto.find(params[:id])
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

end
