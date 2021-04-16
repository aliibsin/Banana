class FixSections < ActiveRecord::Migration[5.2]
  def change
    remove_column :sections, :project_id
    add_column :sections, :project_id, :integer
    add_index :sections, :project_id
  end
end
