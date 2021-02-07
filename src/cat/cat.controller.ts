import { Controller, Get } from '@nestjs/common';

@Controller('cat')
export class CatController {

    @Get()
    getListCat(): any {
        return "List cats: [] "
    }

}
