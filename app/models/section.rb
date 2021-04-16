class Section < ApplicationRecord

  validates :name, presence: true

  # belongs_to :project,
  #   foreign_key: :project_id,
  #   class_name: :Project,
  #   optional: true

  belongs_to :user,
    foreign_key: :creator_id,
    class_name: :User

  
  has_many :tasks,
    foreign_key: :section_id,
    class_name: :Task


end
