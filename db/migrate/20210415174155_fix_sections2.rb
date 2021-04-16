class FixSections2 < ActiveRecord::Migration[5.2]
  def change
    add_column :sections, :creator_id, :integer, null: false
  end
end
