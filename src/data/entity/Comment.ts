import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';
import { Board } from './Board';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => User,
    user => user.comments,
  )
  user: User;

  @ManyToOne(
    type => Board,
    board => board.comments,
  )
  board: Board;

  @Column({
    nullable: false,
  })
  text: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
