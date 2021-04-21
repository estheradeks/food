import {Body, Controller, Post, Get, Param, Patch, Delete} from '@nestjs/common';
import { identity } from 'rxjs';

import {FoodsService} from './food.service'
@Controller('foods')
export class FoodsController {
    constructor(private readonly foodsService: FoodsService) {}

    @Post()
    addProduct(@Body('title') foodTitle: string, @Body('price') foodPrice: number): any {
        const generatedId = this.foodsService.insertFood(foodTitle, foodPrice);
        return {id : generatedId};

    }
    @Get()
    getAllFoods(){
        return this.foodsService.getFoods();
    }
    @Get(':id')
    getFood(@Param('id') foodId: string){
        return this.foodsService.getSingleFood(foodId);
    }
     @Patch(':id')
     updateFood(
         @Param('id') foodId: string, 
         @Body('title') foodTitle: string, 
         @Body('price') foodPrice: number,) 
         {
this.foodsService.updateFood(foodId, foodTitle, foodPrice);
   return null;
         }
    @Delete(':id')
    removeFood(@Param('id') foodId: string,){
        this.foodsService.deleteFood(foodId);
        return null;
    }

}