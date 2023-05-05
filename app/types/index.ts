import { User } from "@prisma/client";
import { IconType } from "react-icons";

export type SafeUser = Omit<User, 'hashedPassword' | 'createdAt' | 'updatedAt' | 'emailVerified'> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
}

export interface ICategory {
    icon: IconType;
    label: string;
    description: string;
}