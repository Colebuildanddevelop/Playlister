class Playlist < ApplicationRecord
    has_many :songs
    has_many :likes
    belongs_to :category
    belongs_to :user 
end
