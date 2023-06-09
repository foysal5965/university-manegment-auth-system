import { IUser } from "./user.interface"
import { User } from "./user.model"
import config from "../../../config"
import { generateUserId } from "./user.utils"

const createUser=async (user: IUser): Promise<IUser | null>=>{
    const id=await generateUserId()
    user.id = id//last work
    //default password
    if(!user.password){
        user.password= config.defaultUserPassword as string
    }
    const createdUser= await User.create(user)
    if (!createdUser){
        throw new Error('failed to create user')
    }
    return createdUser
}

export const UserService= {
    createUser
    
}