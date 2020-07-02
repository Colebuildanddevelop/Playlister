class Category < ApplicationRecord
    belongs_to :user
    has_many :playlists
    has_many :songs, through: :playlists
    has_many :users, through: :playlists

    validates :name, presence: true
end
