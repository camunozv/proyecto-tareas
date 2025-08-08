import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';


// Decorators are predefined funcitons that run in behind
@Controller('users') // this is the default rout we'll have
export class UsersController {

    constructor(private readonly usersService: UsersService) {

    }

    // We can also modify this in order to find by certain user features
    @Get() // GET: /users or get users by certain parameter
    findAll(@Query('role') role?: 'ENGINEER' | 'LAWYER' | 'DOCTOR') {
        if (role) {
            return this.usersService.findAll(role);
        }
        return this.usersService.findAll();
    }

    // The order does matter here, since every method is called
    // in a waterfall way, the find by id method will read
    // everything after the users/ as an id, if we want this method to be
    // executed, then we should declare it first
    /*@Get('intern')
    findAllInterns() {
        return ['intern 1']
    }*/

    @Get(':id') // GET: /users/:id
    findById(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }

    // This is how we read the body of the request
    @Post()
    createNewUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
        return this.usersService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.deleteUser(id);
    }
}
