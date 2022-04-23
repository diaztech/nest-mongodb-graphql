import { Injectable } from '@nestjs/common';

//Querying Logic
@Injectable()
export class UsersService {
    private users: any = [{id: 0}]

    findAll() {
        return this.users;
    }

    findById(userId: number) {
        return this.users.find(user => user.id === userId);
    }

    // createUser(name: string) {
    //     const newUser = {id: Date.now(), name};
    //     this.users.push(newUser);
    //     return newUser;
    // }
    createUser(createUserDto: CreateUserDto) {
        const newUser = {id: Date.now(), name: createUserDto.name};
        this.users.push(newUser);
        return newUser;
    }
}
