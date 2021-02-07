export class tbl_user_dto {
    readonly name: string;
    readonly age: number;
    readonly email: string;

    constructor(entity: any){
        this.name = entity.name;
        this.age = entity.age;
        this.email = entity.email;
    }
  }
  