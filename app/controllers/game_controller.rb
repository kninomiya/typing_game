class GameController < ApplicationController
  def home
    @questions = Question.all
    @results = Result.all
    @current_user ||= User.find_by(id: session[:name])
  end

  # def create
  #     # @results = Result.all
  #
  #   # リクエストパラメータを取得
  #   score = params[:score]
  #   user_id = param[:user_id]
  #   # @user = User.find_by(id: session[:user_id])
  #   # user_id = @user
  #
  #   # Resultsクラス(resultテーブル用のモデル)のcreateメソッドを実行・DB上のresultテーブルにレコードを新規登録
  #   result = Result.create({:user_id => user_id, :score => score });
  #
  #   respond_to do |format|
  #     format.json {
  #       render :json => { status: "ok", result: result.attributes }
  #     } # ここを修正してます
  #   end
  # end

end
