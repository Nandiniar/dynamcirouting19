import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },{
        path :'login',
        component:LoginComponent
    },{
        path:'profile',
        component:ProfileComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:"user/:id/:name",
    component: UsercomponentComponent

    },
    {
        path:'**',
        component:PageNotFoundComponent
    }

];
