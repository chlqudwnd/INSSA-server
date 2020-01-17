import {
  BaseEntity,
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Club } from './Club';
import { Comment } from './Comment';
import { Hobby } from './Hobby';
@Entity()
export class User extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, unique: true })
  phone: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  gender: string;

  @Column({ nullable: false })
  birth: Date;

  @Column({ nullable: true })
  type: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(
    type => Club,
    club => club.host,
  )
  ownedClubs: Club[];

  @OneToMany(
    type => Comment,
    comment => comment.user,
  )
  comments: Comment[];

  @ManyToMany(
    type => Hobby,
    hobby => hobby.id,
  )
  @JoinTable()
  hobbys: Hobby[];

  @ManyToMany(
    type => Club,
    club => club.id,
  )
  clubs: Club[];
}
