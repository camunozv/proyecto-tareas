import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';


// Decorators are predefined funcitons that run in behind
@Controller('users') // this is the default rout we'll have
export class UsersController {

    // We can also modify this in order to find by certain user features
    @Get() // GET: /users or get users by certain parameter
    findAll(@Query('role') role?: 'ENGINEER' | 'LAWYER' | 'DOCTOR') {
        return [];
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
    findById(@Param('id') id: string) {
        return { id }
    }

    // This is how we read the body of the request
    @Post()
    createNewUser(@Body() user : {}) {
        return user;
    }

    @Patch(':id')
    updateUser(@Param() id : string, @Body() updateNewUser : {} ) {
        return { id , ...updateNewUser}
    }

    @Delete(':id')
    deleteUser(@Param() id : string) {
        return {id}
    }
}
