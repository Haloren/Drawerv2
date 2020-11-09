class PlayersController < ApplicationController
    def index
        players = Player.all #players = Player.order(:name)
        render json: players
    end

    def show
        player = Player.find_by(id: params[:id])
        render json: player
    end

    def create
        game = Game.first
        # byebug
        player = game.players.new(player_params)
        if player.save
            # byebug
             render json: player
        else
             render json: {message: player.errors.full_messages.to_sentence}
        end
    end

    def destroy
        player = Player.all.find_by(id: params[:id])
        if player
            player.destroy
            render json: {message: "Mess with the best, die like the rest"}
        else
            render json: {message: "Delete Failed"}
        end
    end

    private
    def player_params
        params.require(:player).permit(:name, :game_id)
    end
end
