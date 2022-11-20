import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({ type: "integer", default: null })
  parentId: number;

  @Column({ type: "datetime" })
  createdAt: string;

  @ManyToOne(() => MenuItem, (menuItem) => menuItem.parentId)
  @JoinColumn({ name: "parentId" })
  children: MenuItem[];
}
