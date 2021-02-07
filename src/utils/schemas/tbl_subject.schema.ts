import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type tbl_Subject_Document = tbl_subject & Document;

@Schema()
export class tbl_subject {
  @Prop()
  name: string;

  @Prop()
  teacher: string;
}

export const tbl_subject_schema = SchemaFactory.createForClass(tbl_subject);
