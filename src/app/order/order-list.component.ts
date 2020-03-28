import { Component , OnInit} from '@angular/core';
import  {Routes, RouterModule, Router} from '@angular/router';
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

constructor(private orderService : OrderService ,private router: Router){
}

ngOnInit(): void{

// this.orderService.getOrder(12).subscribe({
//       next : orders => this.filteredOrders = orders
// });

this.getAllOrders();

}

getAllOrders()
{
  this.orderService.getAllOrders().subscribe(
    (data : IOrder[]) =>
    {
     this.filteredOrders = data    
    });
}

editOrder(order :IOrder){
  console.log('getOrder start ' + JSON.stringify(order));
  this.orderService.getOrder(order.id).subscribe(
    (data : IOrder) =>
    {
        this.orderService.currentOrder = data;
        this.router.navigate(['/order',{id : order.id}]);      
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

deleteOrder(id: number){
  this.orderService.deleteOrder(id).subscribe(
    (data : IOrder) =>
    {
      this.getAllOrders();
    }  
  );
}

}