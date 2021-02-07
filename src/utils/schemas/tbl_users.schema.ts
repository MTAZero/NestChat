import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type tblUserDocument = tbl_user & Document;

@Schema()
export class tbl_user {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(tbl_user);
