import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TaskService {

  constructor(private readonly dataBaseService : DatabaseService) {

  }
   
  async create(createTaskDto: Prisma.TaskCreateInput) {
    return this.dataBaseService.task.create({
      data : createTaskDto
    });
  }

  async findAll() {
    return this.dataBaseService.task.findMany();
  }

  async findOne(id: number) {
    return this.dataBaseService.task.findUnique({
      where: {
        id,
      }
    });
  }

  async update(id: number, updateTaskDto: Prisma.TaskUpdateInput) {
    return this.dataBaseService.task.update({
      where: { id },
      data: updateTaskDto
    });
  }

  async remove(id: number) {
    return this.dataBaseService.task.delete({
      where: {
        id,
      }
    });
  }
}
