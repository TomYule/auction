import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products =[
      new Product(1, "第一个商品", 1.99, 3.5, "这是第1个产品", ["电子产品","test"] ),
      new Product(2,"第二个商品",1.99,3.5,"这是第2个产品",["test"]),
      new Product(3,"第三个商品",1.99,3.5,"这是第3个产品",["test"]),
      new Product(4,"第四个商品",1.99,3.5,"这是第4个产品",["test","test"]),
      new Product(5,"第五个商品",1.99,3.5,"这是第5个产品",["test","test"]),
      new Product(6,"第六个商品",1.99,3.5,"这是第6个产品",["test","test"])
    ]
    this.products.push(new Product(7,"第七个商品",1.99,3.5,"这是第7个产品",["test","test"]));
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public ratin: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
