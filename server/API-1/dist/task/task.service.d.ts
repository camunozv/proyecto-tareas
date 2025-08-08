import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
export declare class TaskService {
    private readonly dataBaseService;
    constructor(dataBaseService: DatabaseService);
    create(createTaskDto: Prisma.TaskCreateInput): Promise<{
        id: number;
        taskName: string;
        taskText: string;
        creationDate: Date;
        dueDate: Date;
    }>;
    findAll(): Promise<{
        id: number;
        taskName: string;
        taskText: string;
        creationDate: Date;
        dueDate: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        taskName: string;
        taskText: string;
        creationDate: Date;
        dueDate: Date;
    } | null>;
    update(id: number, updateTaskDto: Prisma.TaskUpdateInput): Promise<{
        id: number;
        taskName: string;
        taskText: string;
        creationDate: Date;
        dueDate: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        taskName: string;
        taskText: string;
        creationDate: Date;
        dueDate: Date;
    }>;
}
