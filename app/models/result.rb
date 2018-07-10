class Result < ApplicationRecord
  default_scope -> { order(score: :desc)}
end
