class TaskIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :tasks, :creator_id
    add_index :tasks, :project_id
    add_index :tasks, :section_id
  end
end
