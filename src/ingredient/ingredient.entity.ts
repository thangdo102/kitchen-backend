import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 500 })
  recipe: string

  @Column()
  recipeId: number

  @Column('text')
  image: string

  @Column('text')
  ingredients: string

  @Column('text')
  instruction: string

  @Column('text')
  slug: string
}
