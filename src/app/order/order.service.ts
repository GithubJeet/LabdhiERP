import {Injectable, Sanitizer} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IOrder} from './order';
import { isFormattedError } from '@angular/compiler';
import { Observable } from 'rxjs';
// import {DomSanitizer, SafeUrl} from '@angular/platform-browser'

const headerOption= {
    headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
    providedIn:'root'
})

export class OrderService{
    
    //private orderUrl ='assets/orders.json';
    private orderUrl ='http://localhost:3000/Order';
    //order : IOrder | undefined;

    currentOrder : IOrder = {
        id :null,
        SiteIncharge: '',
        OrderId:'',
        OrderDate:'',
        MaterialName:'',
        MaterialQuantity:null,
        Unit:'',
        OrderName:''
    }

    constructor(private http:HttpClient){
    }

    getAllOrders():Observable<IOrder[]>{
        console.log('get all orders - service');
        return this.http.get<IOrder[]>(this.orderUrl,headerOption);
    }

    getOrder(id:number):Observable<IOrder>{
        return this.http.get<IOrder>(this.orderUrl+ '/'+ id,headerOption);
    }

    addOrder(order : IOrder):Observable<IOrder>{
        console.log('service - Add Order started');
        return this.http.post<IOrder>(this.orderUrl,order,headerOption);
    }

    updateOrder(order :IOrder): Observable<IOrder>{
        console.log('service - Update Order');
        return this.http.put<IOrder>(this.orderUrl + '/' + order.id, order ,headerOption);
    }

    deleteOrder(id : number): Observable<IOrder>{
        console.log('service - Delete Order');
        return this.http.delete<IOrder>(this.orderUrl + '/' +  id , headerOption);
    }

    // getLink(): SafeUrl{
    //     return this.sanitizer.bypassSecurityTrustUrl(this.orderUrl);
    // }
}