class CreateLists < ActiveRecord::Migration[7.0]
  def change
    create_table :lists do |t|
      t.string :author
      t.string :first
      t.string :second
      t.string :third
      t.string :fourth
      t.string :fifth
      t.text :comment
      t.references :user, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
