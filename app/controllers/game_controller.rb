class GameController < ApplicationController
  def home
    @questions = Question.all
  end

  def score
  end

end
