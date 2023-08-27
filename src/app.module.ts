import { Module } from '@nestjs/common';
import { BicycleController } from './bicycle/bicycle.controller';
import { BicycleService } from './bicycle/bicycle.service';

// 데코레이터
// 클래스에 함수 기능을 추가할 수 있다.
// 클래스 위의 함수 기능이라고 할 수 있다.
@Module({
  imports: [],
  controllers: [BicycleController],
  providers: [BicycleService],
})
/*
AppModule 에서는 컨트롤러에 생성되는 모든 
모듈을 불러온다.
*/
export class AppModule {}
