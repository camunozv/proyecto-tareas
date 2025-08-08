import { CreateUserDto } from "./create-user.dto";
import { PartialType } from "@nestjs/mapped-types";

// We define here the updated version of the previous type s.t
// all its fields are optional, making it suitable for update operations
export class UpdateUserDto extends PartialType(CreateUserDto) {

}