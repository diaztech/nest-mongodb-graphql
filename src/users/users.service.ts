import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

//Querying Logic
@Injectable()
export class UsersService {
    // private users: any = [{id: 0}]
    private users: User[] = [
        { id: 0, name: 'Marius'}, 
        { id: 1, name: 'Marius' },
        { id: 2, name: 'Dustin' }
    ]
    usersService: any;

    findAll(name?: string): User[] {    // optional name of type string
        if (name) {
            return this.users.filter(user => user.name === name)
        }
        // return this.users;
    }

    findById(userId: number): User {
        return this.users.find(user => user.id === userId);
    }

    // createUser(name: string) {
    //     const newUser = {id: Date.now(), name};
    //     this.users.push(newUser);
    //     return newUser;
    // }

    createUser(body: CreateUserDto): User {     // body of type CreateUserDto
        return this.usersService.createUser(body);
    }
}
