class Project < ApplicationRecord

  validates :name, :creator_id, presence: true

  belongs_to :user,
  foreign_key: :creator_id,
  class_name: :User


end
