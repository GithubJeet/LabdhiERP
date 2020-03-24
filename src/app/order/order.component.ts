import { Component,OnInit } from '@angular/core';
import {OrderService} from './order.service';
import {IOrder} from './order';

@Component({
    selector: 'lerp-order',
    // template:`
    // <h1>Order Component</h1>`
    templateUrl:'./order.component.html'
    })

export class OrderComponent implements OnInit {
    
    pageTitle:string = 'Order Form';
    order: IOrder | undefined;

    constructor(private orderService:OrderService){
    }

    ngOnInit():void{
        // this.orderService.getOrder(12).subscribe({
        //     next: orders => this.order  = orders[0]
        //     //next: orders => (console.log('All' + JSON.stringify(orders[0])))
        // });
    }

    createOrUpdateOrder(order : IOrder){
      console.log(JSON.stringify(order));
        if (order.id ==null)
          { 
            console.log('create order');
            this.orderService.addOrder(order).subscribe(
                (data) => {
                  this.orderService.getAllOrders();
                });
          }
        else
          {
            console.log('update order');
            this.orderService.updateOrder(order).subscribe(
              (data) => {
                this.orderService.getAllOrders();
              });
          }  
        }
}