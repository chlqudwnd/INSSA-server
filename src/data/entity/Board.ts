import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';
import { Club } from './Club';

@Entity()
export class Board {
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

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: false,
  })
  category: string;

  @Column({
    nullable: true,
  })
  text: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
