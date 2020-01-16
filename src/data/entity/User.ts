import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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
