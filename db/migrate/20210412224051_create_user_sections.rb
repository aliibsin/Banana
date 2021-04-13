class CreateUserSections < ActiveRecord::Migration[5.2]
  def change
    create_table :user_sections do |t|
      t.integer :user_id, null: false
      t.integer :section_id, null: false

      t.timestamps
    end

    add_index :user_sections, :user_id
    add_index :user_sections, :section_id
  end
end
