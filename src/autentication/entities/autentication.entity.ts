import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  @Entity('autentication')
export class Autentication {
    @PrimaryGeneratedColumn()
    id: number;
}
