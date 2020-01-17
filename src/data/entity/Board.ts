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
import { Club } from './Club';
import { Comment } from './Comment';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => Club,
    club => club.boards,
  )
  club: Club;

  @ManyToOne(
    type => User,
    user => user.clubs,
  )
  user: User;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  category: string;

  @Column({ nullable: true })
  text: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(
    type => Comment,
    comment => comment.board,
  )
  comments: Comment[];
}
