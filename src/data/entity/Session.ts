import { BaseEntity, Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './User';
@Entity()
export class Session extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(
    type => User,
    user => user.id,
    { cascade: true, nullable: false },
  )
  @JoinColumn()
  user: User;
}
