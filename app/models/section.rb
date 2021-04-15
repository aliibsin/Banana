class Section < ApplicationRecord

  validates :name, :project_id, presence: true

  belongs_to :project,
    foreign_key: :project_id,
    class_name: :Project

  
  has_many :tasks,
    foreign_key: :section_id,
    class_name: :Task


end
