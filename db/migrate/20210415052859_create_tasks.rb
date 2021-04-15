class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.text :description
      t.datetime :due_date
      t.string :priority
      t.boolean :done, null: false
      t.integer :creator_id, null: false
      t.integer :project_id
      t.integer :section_id

      t.timestamps
    end
  end
end
