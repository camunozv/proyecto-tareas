import { IsEmail, IsEnum, IsString, IsNotEmpty } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["DOCTOR", "LAWYER", "ENGINEER"],
        {
            "message": "Invalid role entered"
        }
    )
    role: "DOCTOR" | "LAWYER" | "ENGINEER";
}