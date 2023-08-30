import { Controller, Delete, Get, Post, Param, Put, Patch, Body, Query } from '@nestjs/common';


/*
@Controller('bicycle') 은 URL의 Entry point(엔트리 포인트)를
컨트롤한다. 
컨트롤러에 u어플리케이션의 기본 라우터가 된다.
*/
@Controller('bicycle')
export class BicycleController {

  @Get()
  getBicycle(){
    return "this will return Bicycle";
  }

  @Get('search')
  search(@Query('search') search: string){
    return "We are searching";
  }

  // :id가 위에 있으면 아래에 있는 GET 라우터들이 작동하지 않는다.
  @Get(':id')
  getOne(@Param('id') no: string){
    return `this will return id Bicycle ${no}`;
  }

  @Post()
  create(@Body() getData){
    return getData;
  }

  @Delete('/:id')
  delete(@Param('id') no: String){
    return `this will delete a bicycle..`;
  }

  // 일부만 업데이트 할 때 사용한다.
  @Patch('/:id')
  patch(@Param('id') no: String, @Body() getData){
    return {
      updateData: no,
      ...getData
    };
  }

}
