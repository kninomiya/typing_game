module UsersHelper
  def show
    @user = User.find(params[:id])
  end


end
