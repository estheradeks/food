import {Injectable, NotFoundException} from '@nestjs/common';

import { Food } from './food.models'
@Injectable()
export class FoodsService{
  private foods: Food[] = [];

  insertFood(title: string, price: number) {
      const foodId = Math.random().toString();
      const newFood = new Food(foodId, title, price);
      this.foods.push(newFood);
      return foodId;
  }
  getFoods() {
      return [...this.foods];
  }

 getSingleFood(foodId: string) {
     const food = this.findFood(foodId)[0];
     return {...food};
 }
 updateFood(foodId: string, title: string, price: number){
    const [food, index] = this.findFood(foodId);
    const updatedFood  = {...food};
    if (title) {
        updatedFood.title = title;
    }
    if (price) {
        updatedFood.price = price;
    }
    this.foods[index] = updatedFood;
 }
 deleteFood(foodId: string){
    const index = this.findFood(foodId)[1];
    this.foods.splice(index, 1);
}
 private findFood(id: string): [Food, number]{
    const foodIndex = this.foods.findIndex(food => food.id === id);
    const food = this.foods[foodIndex]
    if (!food){
        throw new NotFoundException('could not find food.');
    }
    return [food, foodIndex];
 }
}