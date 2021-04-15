class Task < ApplicationRecord

  validates :name, :creator_id, presence: true
  validates :done, inclusion: { in: [ true, false ] }
  validates :priority, inclusion: { in: [ "high", "medium", "low" ] }



end
