import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class CreateUserDto {
    @Field(() => ID)
    id: string;
    @Field()
    readonly name: string;
    @Field(() => Int)
    readonly age: number;
    @Field()
    readonly breed: string;
}