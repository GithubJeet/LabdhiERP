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

// this.orderService.getOrder(12).subscribe({
//       next : orders => this.filteredOrders = orders
// });

this.orderService.getAllOrders().subscribe(
    (data : IOrder[]) =>
    {
     this.filteredOrders = data    
    });

}

getOrder(order :IOrder){
  console.log('getOrder start ' + JSON.stringify(order));
  this.orderService.getOrder(order.id).subscribe(
    (data : IOrder) =>
    {
        this.orderService.currentOrder = data;      
    });
}

createOrder()
{
  console.log('create order');
  this.orderService.currentOrder = {
      id:null,
      OrderId: '',
      MaterialName: '',
      MaterialQuantity: null,
      OrderDate: Date.now.toString(),
      OrderName: '',
      SiteIncharge:'',
      Unit:''
  }
}

deleteOrder(){
  //this.orderService.deleteOrder();
}

}