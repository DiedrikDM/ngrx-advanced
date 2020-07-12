import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';


const routerOptions: ExtraOptions = {
  // enableTracing: true,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 32],
};

const routes: Routes = [
    {
      path: 'products',
      loadChildren: () => import('./features/products/products-handler.module').then(m => m.ProductsHandlerModule),
      canActivate: [AuthGuard]
    },
    {
      path: '404',
      loadChildren:() =>import('./features/not-found/not-found.module').then(m => m.NotFoundModule) ,
    },
    {
      path: 'forbidden',
      loadChildren:() =>import('./features/forbidden/forbidden.module').then(m => m.ForbiddenModule) ,
    },
    {
      path: 'login',
      loadChildren:() =>import('./features/auth/auth.module').then(m => m.AuthModule) ,
      pathMatch: 'full',
    },
    {
      path: 'user',
      loadChildren:() =>import('./features/user-settings/user-settings.module').then(m => m.UserSettingsModule) ,
      pathMatch: 'full',
    },
    {
      path: 'home',
      loadChildren:() =>import('./features/landing-page/landing-page.module').then(m => m.LandingPageModule) ,
      pathMatch: 'full',
    },
    {
      path: "**",
      pathMatch: "full",
      redirectTo:'/404'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes , routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
