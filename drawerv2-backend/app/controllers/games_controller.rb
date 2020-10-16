class GamesController < ApplicationController
    def index
        games = Game.all
        render json: games, include: [:cards, :players]
    end
end
