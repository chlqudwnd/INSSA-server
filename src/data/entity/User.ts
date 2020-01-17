import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Club } from './Club';
import { Comment } from './Comment';
@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  password: string;

  @Column({
    nullable: false,
    unique: true,
  })
  phone: string;

  @Column({
    nullable: false,
  })
  address: string;

  @Column({
    nullable: false,
  })
  gender: string;

  @Column({
    nullable: false,
  })
  birth: Date;

  @Column({
    nullable: true,
  })
  type: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(
    type => Club,
    club => club.user,
  )
  clubs: Club[];

  @OneToMany(
    type => Comment,
    comment => comment.user,
  )
  comments: Comment[];
}
