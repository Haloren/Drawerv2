class CardsController < ApplicationController
    def index
        cards = Card.all
        render json: cards
    end

    def create
        game = Game.first
        # byebug
        card = game.cards.new(card_params)
        if card.save
            render json: card
        else
            render json: {message: card.errors.full_messages.to_sentence}
        end
    end

    private
    def card_params
        params.require(:card).permit(:content, :game_id)
    end
end
