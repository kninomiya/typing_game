class GameController < ApplicationController
  def index
    @questions = Question.all
  end
end
