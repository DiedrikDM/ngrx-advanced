 

import { DataStateService } from '../../../core/services/base-data.service';
import { Injectable } from '@angular/core';
import { UrlEndPointEnum } from 'src/app/models/url-endpoint.model';
import { BaseDataStructureResponse } from 'src/app/models/base-data-response.model';
import { BaseApiService } from 'src/app/core/services/base-api.service';

@Injectable()
export class ProductsService extends DataStateService<Product> {

    constructor(protected baseApi: BaseApiService<Product>) {
        super(baseApi, UrlEndPointEnum.PRODUCTS_URL);
    }
}

export interface Product extends BaseDataStructureResponse {
    name: string;
    description: string;
    price: number;
}