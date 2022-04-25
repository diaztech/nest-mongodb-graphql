import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')    // Handles anything with slash users
export class UsersController {
    constructor(private usersService: UsersService) {

    }
    @Get()

    // getUsers(): any {
    //     return this.usersService.findAll();
    // }

    // getUsers(@Query('name') name: string): any {
    //     return this.usersService.findAll(name);
    // }

    getUsers(@Query('name') name?: string): User[] {
        return this.usersService.findAll(name);
    }

    @Get(':id')

    // getUserById(@Param('id') id: string): any {     // Parsing url parameters
    //     // return {
    //     //     id: Number(id)
    //     // }
    //     return this.usersService.findById(Number(id))
    // }

    getUserById(@Param('id') id: string): any {     // Parsing url parameters
        const user = this.usersService.findById(Number(id))
        if (!user) {    // Validation
            throw new NotFoundException()   
        }
        return this.usersService;
    }

    @Post()
    createUser(@Body() body: CreateUserDto): any {
        return this.usersService.createUser(body);
    }
}
