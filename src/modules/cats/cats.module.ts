import { Module } from "@nestjs/common";
import { CatsController } from "./cats.controlller";
import { CatsService } from "./cats.service";

@Module({
  imports: [
  ],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsModule]
})

export class CatsModule {}