class UserSection < ApplicationRecord

  validates :user_id, :section_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :section,
    foreign_key: :section_id,
    class_name: :Section

end
