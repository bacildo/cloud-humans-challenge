import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IPastExperience,IInternetTest } from "../interface"

@Entity()
export class ProApplication {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  age!: number;

  @Column({ nullable: false })
  education_level!: string;

  @Column({ nullable: false })
  past_experiences!: IPastExperience;

  @Column({ nullable: false })
  internet_test!: IInternetTest;

  @Column({ nullable: false })
  writing_score!: number;

  @Column({ nullable: true })
  referral_code!: string;
}
