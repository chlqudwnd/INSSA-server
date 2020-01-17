import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm';
import { Club } from './Club';
import { User } from './User';

@Entity()
export class Hobby extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  name: string;

  @OneToMany(
    type => Club,
    club => club.hobby,
  )
  clubs: Club[];

  @ManyToMany(
    type => User,
    user => user.id,
  )
  users: User[];
}
