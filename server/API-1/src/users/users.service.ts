import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

// This decorator attaches metadata to this class that allows it to be
// managed by nest
@Injectable()
export class UsersService {

    // Since we arent connecting to a database yet, we'll use a mock array
    // Data base interaction should be here
    private users = [
        {
            "id": 1,
            "name": 'John Doe',
            "email": "jhonDoe@mail.com",
            "role": "ENGINEER"
        },
        {
            "id": 2,
            "name": 'Jane Doe',
            "email": "janeDoe@mail.com",
            "role": "LAWYER"
        },
        {
            "id": 3,
            "name": 'Jack Doe',
            "email": "jackDoe@mail.com",
            "role": "DOCTOR"
        }
    ];

    // We name the methods after the routes we have in the controller
    findAll(role?: "DOCTOR" | "LAWYER" | "ENGINEER") {
        // Filter is a high order method for arrays
        if (role) {
            const myRolesArray =  this.users.filter(user => user.role == role)

            if (myRolesArray.length === 0) {
                throw new NotFoundException("User with such role not found!")
            }

            return myRolesArray
        }
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);

        // We added some http validation
        if (!user) {
            throw new NotFoundException("No user found with id " + id);
        }
        return user;
    }

    createUser(createUserDto: CreateUserDto) {

        const usersByIdOrder = [...this.users].sort((a, b) => b.id - a.id);

        const newUser = {
            "id": usersByIdOrder[0].id + 1,
            ...createUserDto
        }

        this.users.push(newUser)

        return newUser;
    }

    updateUser(id: number, updateUserDto: UpdateUserDto) {

        this.users = this.users.map(user => {
            if (user.id == id) {
                return { ...user, ...updateUserDto }
            }
            return user
        })

        return this.findOne(id);
    }

    deleteUser(id: number) {

        const userToDelete = this.findOne(id);

        this.users = this.users.filter(user => user.id !== id);

        return userToDelete;
    }

}
