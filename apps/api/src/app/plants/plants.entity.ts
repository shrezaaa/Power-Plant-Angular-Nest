import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Plants')
export class Plants extends BaseEntity {
  @PrimaryGeneratedColumn()
  PlantID: number;

  @Column()
  PlantName:string

  @Column({ nullable: true, type: 'float' })
  Lat: number;

  @Column({ nullable: true, type: 'float' })
  Lang: number;

  @Column({ nullable: true })
  NormalProduction: number;

  @Column({ nullable: true })
  RealProduction: number;

  @Column({ nullable: true })
  Address: string;

  @Column({ nullable: true })
  Phone: string;

  @Column({ nullable: true })
  Description: string;

  @Column({ default: true })
  IsActive: boolean;
}