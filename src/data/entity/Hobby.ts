import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Club } from './Club';

@Entity()
export class Hobby extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    unique: true,
  })
  name: string;

  @OneToMany(
    type => Club,
    club => club.hobby,
  )
  clubs: Club[];
}
