import { TaskService } from './task.service';
import { Prisma } from 'generated/prisma';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: Prisma.TaskCreateInput): Promise<{
        taskName: string;
        taskText: string;
        creationDate: Date;
        dueDate: Date;
        id: number;
    }>;
    findAll(): Promise<{
        taskName: string;
        taskText: string;
        creationDate: Date;
        dueDate: Date;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        taskName: string;
        taskText: string;
        creationDate: Date;
        dueDate: Date;
        id: number;
    } | null>;
    update(id: string, updateTaskDto: Prisma.TaskUpdateInput): Promise<{
        taskName: string;
        taskText: string;
        creationDate: Date;
        dueDate: Date;
        id: number;
    }>;
    remove(id: string): Promise<{
        taskName: string;
        taskText: string;
        creationDate: Date;
        dueDate: Date;
        id: number;
    }>;
}
