import {Module} from '@nestjs/common';

import {FoodsController} from './foods.controller';
import {FoodsService} from './food.service';

@Module ({
    controllers: [FoodsController],
    providers: [FoodsService],
})
export class FoodsModule {}