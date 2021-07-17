import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core'
import { Product } from '../product.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnChanges {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    constructor() {
        console.log('Constructor!')
    }

    ngOnChanges(changes: any) {
        console.log('ngOnChange!')
        console.log(changes)
    }

    addCart() {
        console.log('Añadir al carrito!');
        this.productClicked.emit(this.product.id);
    }
}