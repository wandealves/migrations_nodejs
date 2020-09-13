import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn
} from "typeorm";
import Profile from "./profile";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  profile_id: string;

  @OneToOne(type => Profile)
  @JoinColumn({ name: "profile_id" })
  profile: Profile;
}
