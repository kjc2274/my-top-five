class Category < ApplicationRecord
    has_many :lists, dependent: :destroy
end
