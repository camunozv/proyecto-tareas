import { TaskService } from './task.service';
import { Prisma } from 'generated/prisma';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: Prisma.TaskCreateInput): Promise<{
        id: number;
        taskName: string;
        taskText: string;
        creationDate: Date;
    }>;
    findAll(): Promise<{
        id: number;
        taskName: string;
        taskText: string;
        creationDate: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        taskName: string;
        taskText: string;
        creationDate: Date;
    } | null>;
    update(id: string, updateTaskDto: Prisma.TaskUpdateInput): Promise<{
        id: number;
        taskName: string;
        taskText: string;
        creationDate: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        taskName: string;
        taskText: string;
        creationDate: Date;
    }>;
}
