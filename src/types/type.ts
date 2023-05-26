import { Dispatch, SetStateAction } from "react";

export interface IMember {
  id: number;
  name: string;
  location: string;
  work_exprerience: string[];
  stack: string[];
  profile_image: string;
}

export type WithoutNullableKeys<Type> = {
  [Key in keyof Type]-?: WithoutNullableKeys<NonNullable<Type[Key]>>;
};

export type userProfile = {
  email: string;
  first_name: string;
  last_name: string;
  github_profile: string | null;
  twitter_profile: string | null;
  linkedin_profile: string | null;
  portfolio_url: string | null;
  profile_pic_url: string | null;
  id: number;
};

export interface ITechie {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  years_of_experience: number;
  bio: string;
  phone_number: string;
  github_profile: string;
  twitter_profile: string;
  linkedin_profile: string;
  portfolio_url: string;
  profile_pic_url: string;
  skills: ISkill[];
  tags: ITag[];
  created_at: string;
  is_active: boolean;
}

export interface ISkill {
  id: number;
  name: string;
}

export interface ITag extends ISkill {}

export interface NavbarProps {
  isOpen: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

// New user signup form types
export type TNewUserFields = Record<
  | "email"
  | "phone"
  | "portfolio"
  | "languages"
  | "experience_yrs"
  | "experience_summary"
  | "twitter_handle"
  | "linkedin_profile"
  | "working",
  string
>;
