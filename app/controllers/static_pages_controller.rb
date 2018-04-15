class StaticPagesController < ApplicationController
  def home
    @questions = Question.all
  end

  def score
  end

  def authentication
  end

end
