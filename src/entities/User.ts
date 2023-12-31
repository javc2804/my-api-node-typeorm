import {
    Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,
    UpdateDateColumn, BaseEntity
} from 'typeorm'

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

    @Column({
        unique: true
    })
    email: string

    @Column()
    lastname: string

    @Column({
        default: true
    })
    active: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAd: Date
}