import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import {
  TCategoriesIds,
  TColors,
  TCurrency,
  TSizes,
} from 'src/common/interfaces.common';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  id: number;
  @Prop({ required: true })
  firstName: string;
  @Prop({ required: true })
  lastName: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: false, default: [] })
  cart: TCartItem[];
  @Prop({ required: false, default: [] })
  productsBought: IProduct[];
}

export const UserSchema = SchemaFactory.createForClass(User);

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cart: TCartItem[];
  productsBought: IProduct[];
}

export interface IProduct {
  id: number;
  name: string;
  slug: string;
  price: IPrice[];
  description: string;
  images: IImage[];
  categoryId: TCategoriesIds[];
  colors: TColors[];
  sizes: TSizes[];
  reviews: number;
  reviewAverage: number;
}

export type TCartItem = Pick<
  IProduct,
  'id' | 'name' | 'slug' | 'price' | 'images'
>;

export interface IPrice {
  basePrice: number;
  salePrice: number;
  currency: TCurrency;
}

export interface IImage {
  image: string;
  color: TColors;
  isDefault: boolean;
}
