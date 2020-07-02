class User < ApplicationRecord
    has_many :playlists
    has_many :songs, through: :playlists
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
    # has_secure_password
end
