import { Component , OnInit} from '@angular/core';
import { OrderService } from './order.service';
import { IOrder } from './order';

@Component({
    selector : 'lerp-order-list',
    templateUrl:'./order-list.component.html'
})

export class OrderListComponent implements OnInit{

title = 'Order List';
filteredOrders : any;//IOrder[] = [];
listFilter='';

constructor(private orderService : OrderService){

}

ngOnInit(): void{
    this.orderService.getOrder(12).subscribe({
        next : orders => this.filteredOrders = orders
})}

}