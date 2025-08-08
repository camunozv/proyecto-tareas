"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
let UsersService = class UsersService {
    users = [
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
    findAll(role) {
        if (role) {
            const myRolesArray = this.users.filter(user => user.role == role);
            if (myRolesArray.length === 0) {
                throw new common_2.NotFoundException("User with such role not found!");
            }
            return myRolesArray;
        }
        return this.users;
    }
    findOne(id) {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new common_2.NotFoundException("No user found with id " + id);
        }
        return user;
    }
    createUser(createUserDto) {
        const usersByIdOrder = [...this.users].sort((a, b) => b.id - a.id);
        const newUser = {
            "id": usersByIdOrder[0].id + 1,
            ...createUserDto
        };
        this.users.push(newUser);
        return newUser;
    }
    updateUser(id, updateUserDto) {
        this.users = this.users.map(user => {
            if (user.id == id) {
                return { ...user, ...updateUserDto };
            }
            return user;
        });
        return this.findOne(id);
    }
    deleteUser(id) {
        const userToDelete = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return userToDelete;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map