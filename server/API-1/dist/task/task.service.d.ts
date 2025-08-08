import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
export declare class TaskService {
    private readonly dataBaseService;
    constructor(dataBaseService: DatabaseService);
    create(createTaskDto: Prisma.TaskCreateInput): Promise<{
        taskName: string;
        taskText: string;
        status: import("generated/prisma").$Enums.Values;
        creationDate: Date;
        id: number;
    }>;
    findAll(): Promise<{
        taskName: string;
        taskText: string;
        status: import("generated/prisma").$Enums.Values;
        creationDate: Date;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        taskName: string;
        taskText: string;
        status: import("generated/prisma").$Enums.Values;
        creationDate: Date;
        id: number;
    } | null>;
    update(id: number, updateTaskDto: Prisma.TaskUpdateInput): Promise<{
        taskName: string;
        taskText: string;
        status: import("generated/prisma").$Enums.Values;
        creationDate: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        taskName: string;
        taskText: string;
        status: import("generated/prisma").$Enums.Values;
        creationDate: Date;
        id: number;
    }>;
}
