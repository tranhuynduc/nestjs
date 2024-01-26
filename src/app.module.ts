import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CatsController } from './modules/cats/cats.controlller';
import { CatsService } from './modules/cats/cats.service';
import { CatsModule } from './modules/cats/cats.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({ isGlobal: true}),
    CatsModule
  ]
  // controllers: [CatsController],
  // providers: [CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats')
  }
}
