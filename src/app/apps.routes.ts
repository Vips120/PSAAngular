import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { About3Component } from './about3/about3.component';
import { ProductComponent } from './product/product.component';
import { AuthGuard } from './authguard/auth';
export const routes: Routes = [
    {
        path: "",
        loadChildren:"./contact/contact.module#ContactModule"
    },
    {
    path: "home",
        component: HomeComponent,
    canActivate: [AuthGuard]
},
{
    path: "about",
    component: AboutComponent,
    children: [{
        path: "about1",
        component: About1Component
    },
        {
            path: "about2",
            component: About2Component
        },
        {
            path: "about3",
            component: About3Component
        }
    ]
    },
    {
        path: "productdetails/:id",
        component: ProductComponent
    },
    {
        path: "contact",
        loadChildren:"./contact/contact.module#ContactModule"
    }
];