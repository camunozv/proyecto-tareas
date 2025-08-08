import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private users;
    findAll(role?: "DOCTOR" | "LAWYER" | "ENGINEER"): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    createUser(createUserDto: CreateUserDto): {
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
