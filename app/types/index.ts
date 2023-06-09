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

export interface ICountry {
    value: string;
    label: string;
    flag: string;
    region: string;
    latlng: [number, number];
}