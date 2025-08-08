import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(role?: 'ENGINEER' | 'LAWYER' | 'DOCTOR'): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    findById(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    createNewUser(createUserDto: CreateUserDto): {
        name: string;
        email: string;
        role: "DOCTOR" | "LAWYER" | "ENGINEER";
        id: number;
    };
    updateUser(id: number, updateUserDto: UpdateUserDto): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    deleteUser(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
}
