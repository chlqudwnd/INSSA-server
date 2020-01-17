import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from './User';
import { Hobby } from './Hobby';
import { Board } from './Board';

@Entity()
export class Club extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => User,
    user => user.clubs,
  )
  user: User;

  @ManyToOne(
    type => Hobby,
    hobby => hobby.clubs,
  )
  hobby: Hobby;

  @Column({
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    nullable: false,
  })
  max: number;

  @Column({
    nullable: true,
  })
  field: string;

  @Column({
    nullable: false,
  })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(
    type => Board,
    board => board.club,
  )
  boards: Board[];
}
