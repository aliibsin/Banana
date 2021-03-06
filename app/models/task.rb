class Task < ApplicationRecord

  validates :name, :creator_id, presence: true
  validates :done, inclusion: { in: [ true, false ] }

  belongs_to :user,
    foreign_key: :creator_id,
    class_name: :User

  belongs_to :section,
    foreign_key: :section_id,
    class_name: :Section,
    optional: true

  belongs_to :project,
    foreign_key: :project_id,
    class_name: :Project,
    optional: true

end
