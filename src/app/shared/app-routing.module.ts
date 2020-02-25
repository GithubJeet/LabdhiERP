import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { OrderComponent } from '../order/order.component';
import { OrderListComponent } from '../order/order-list.component';
import { WelcomeComponent} from '../home/welcome.component';

const routes: Routes =[
    {path:'order' , component: OrderComponent},
    {path:'orderList',component:OrderListComponent},
    {path:'welcome', component:WelcomeComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}

export const routingComponents=[OrderComponent,OrderListComponent,WelcomeComponent]