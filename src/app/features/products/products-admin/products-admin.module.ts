import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductsAdminRoutingModule } from './products-admin-routing.module';
import { ProductsAdminShellComponent } from './products-admin-shell.component';
import { ProductAdminDetailsComponent } from './product-admin-details/product-admin-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsAdminEffects } from './products-admin-api.effect';
import { ProductsService } from '../services/products-data.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsAdminRoutingModule,
    EffectsModule.forFeature([ProductsAdminEffects]),
    SharedModule,
  ],
  declarations: [ProductsAdminShellComponent , ProductAdminDetailsComponent , AddProductComponent],
  entryComponents: [],
  providers:[ProductsService]
})
export class ProductsAdminModule { }

