import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { Prisma } from 'generated/prisma';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post() // Verified
  create(@Body() createTaskDto: Prisma.TaskCreateInput) {
    return this.taskService.create(createTaskDto);
  }

  @Get() // Verified
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id') // Verified
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @Patch(':id') // Verified
  update(@Param('id') id: string, @Body() updateTaskDto: Prisma.TaskUpdateInput) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id') 
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
