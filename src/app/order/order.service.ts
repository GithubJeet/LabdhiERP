
import {Injectable, Sanitizer} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {DomSanitizer, SafeUrl} from '@angular/platform-browser'

@Injectable({
    providedIn:'root'
})

export class OrderService{
    
     private orderUrl ='assets/orders.json';
    //private orderUrl ='E:/Jitendra/LERP/src/app/order/orders.json';

    constructor(private http:HttpClient){
    }

    getOrder(id:number){
        return this.http.get(this.orderUrl);
    }

    addOrder(){
        console.log('service - Add Order');
    }

    updateOrder(){
        console.log('service - Update Order');
    }

    deleteOrder(){
        console.log('service - Delete Order');
    }

    // getLink(): SafeUrl{
    //     return this.sanitizer.bypassSecurityTrustUrl(this.orderUrl);
    // }
}