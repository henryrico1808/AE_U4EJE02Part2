import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product;
 //siempre que venga de un modulo o servicio siempre ira en el constructor
  constructor(private apiProducts: ProductosService,
              private route: ActivatedRoute) { 

    this.route.paramMap.subscribe(
      (params) => {
        this.apiProducts.getProductById(params.get('id'))
          .subscribe(
            (product_result)=>{
              this.product = product_result.data;
              console.log(this.product);
            },
            (err)=>{
              this.product = err;
            }
          );
      },
      () => {}
    );

    
  }

  ngOnInit() {
  }

}
