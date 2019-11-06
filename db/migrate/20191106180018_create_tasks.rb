class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :content
      t.string :reference
      t.integer :language_id
      t.timestamps
    end
  end
end
