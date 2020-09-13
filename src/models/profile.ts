import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("profiles")
export default class Profile {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  gender: string;

  @Column()
  photo: string;
}
