# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Game.delete_all
Game.create

Player.delete_all
Player.create(name: "Zero Cool", game_id: Game.first.id)
Player.create(name: "Cereal", game_id: Game.first.id)
Player.create(name: "Crash Override", game_id: Game.first.id)
Player.create(name: "Acid Burn", game_id: Game.first.id)

Card.delete_all
words = [
    'Hot Dog',
    'Scream',
    'Crane',
    'Drop',
    'Hackers',
    'Blade',
    'Phantom',
    'Garbage',
    'bridge',
    'bone',
    'grapes',
    'bell',
    'jellyfish',
    'bunny',
    'truck',
    'grass',
    'door',
    'monkey',
    'spider',
    'ears',
    'bowl',
    'bracelet',
    'alligator',
    'bat',
    'lollipop',
    'moon',
    'orange',
    'bike',
    'airplane',
    'pen',
    'inchworm',
    'seashell',
    'rocket',
    'cloud',
    'carrot',
    'turtle',
    'pencil',
    'horse',
    'dinosaur',
    'head',
    'ant',
    'cupcake',
    'leaf',
    'snail',
    'baby',
    'balloon',
    'bus',
    'cherry',
    'robot'
]
words.each do |word|
    Card.create(content: word, game_id: Game.first.id)
end
