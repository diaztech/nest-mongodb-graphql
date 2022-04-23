import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')    // Handles anything with slash users
export class UsersController {
    constructor(private usersService: UsersService) {

    }
    @Get()
    getUsers(): any {
        return this.usersService.findAll();
    }
    @Get(':id')
    //Because it's always parsing a url it's going to be a string
    getUserById(@Param('id') id: string): any {     // Parsing url parameters
        // return {
        //     id: Number(id)
        // }
        return this.usersService.findById(Number(id))
    }
    @Post()
    createUser(@Body() body: CreateUserDto): any {
        return this.usersService.createUser(body.name);
    }
}
