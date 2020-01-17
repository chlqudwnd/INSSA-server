import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { User } from './User';
import { Category } from './Category';

@Entity()
export class Club {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    nullable: false,
  })
  phone: string;

  @Column({
    nullable: false,
  })
  address: string;

  @Column({
    nullable: false,
  })
  hobbyNum: number;

  @Column({
    nullable: false,
  })
  gender: string;

  @Column({
    nullable: false,
  })
  birth: Date;

  @Column({
    nullable: false,
  })
  type: string;
}
