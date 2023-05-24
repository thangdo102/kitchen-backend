import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 500 })
  slug: string

  @Column('text')
  image: string

  @Column('text')
  recipe: string
}
