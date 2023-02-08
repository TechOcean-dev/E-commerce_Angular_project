import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../servers/product.service';
import {faTrash, faPenSquare, faEdit} from '@fortawesome/free-solid-svg-icons'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class SellerProductListComponent implements OnInit {
  Productlist: any
  ProductDeleteAlert = false
  DeleteIcon = faTrash
  UpdateIcon = faEdit
  constructor(private product: ProductService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.Product_List()
  }

  ProductDelete(id: number) {
    this.product.product_delete(id).subscribe((result) => {
      if (result) {
        this.ProductDeleteAlert = true
        this.modalService.dismissAll()
        this.Product_List()
      }

      setTimeout(() => this.ProductDeleteAlert = false
        , 7000);
    })
  }

  ProductUpdate(id: number) {
    // this.product.product_update(id).subscribe((result) => {
    //   console.warn("Before = ", result)
    //   if (result) {
    //     this.ProductDeleteAlert = true
    //     this.Product_List()
    //   }

    //   setTimeout(() => this.ProductDeleteAlert = false
    //     , 7000);
    // })
  }

	ConfirmUpdate(content: any) {
		this.modalService.open(content, { centered: true });
	}
  ConfirmDelete(content: any) {
		this.modalService.open(content, { centered: true });
	}

  Product_List() {
    this.product.productlist().subscribe((result) => {
      this.Productlist = result
    })
  }

}
