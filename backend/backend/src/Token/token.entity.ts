import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Token {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  accesstoken: string;

  @Column()
  refreshtoken: string;
  // Add other fields as needed
}
