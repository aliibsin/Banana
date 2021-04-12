class Section < ApplicationRecord

  validates :name, :project_id, presence: true

  belongs_to :project,
  foreign_key: :project_id,
  class_name: :Project

end
