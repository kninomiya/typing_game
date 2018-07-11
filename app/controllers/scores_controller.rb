class ScoresController < ApplicationController
  protect_from_forgery
  before_action :authenticate_user!

  def create
    # リクエストパラメータを取得
    score = params[:score]
    user_id = current_user.name

    # Resultsクラス(resultテーブル用のモデル)のcreateメソッドを実行・DB上のresultテーブルにレコードを新規登録
    result = Result.create({:user_id => user_id, :score => score });

    respond_to do |format|
      format.json {
        render :json => { status: "ok", result: result.attributes }
      } # ここを修正してます
    end
  end

  def index
    @results = Result.all
  end
end
