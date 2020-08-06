import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    name: string;

    @Column('text')
    description: string;

    @Column()
    isDone: boolean;
}
