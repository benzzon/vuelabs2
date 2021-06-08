var app = new Vue({
    el: '#app',
    data: {
     brand: 'Vue Mastery',
     product: 'Socks',
     //image: './assets/vmSocks-green-onWhite.jpg',
     selectedVariant: 0,
     //inStock: true,
     someRef: 'http://www.benzzon.se',
     onSale: false,
     details: ["80% cotton", "20% polyester", "Gender-neutral"],
     variants: [
       { variantId: 2234,
         variantColor: "green",
         variantImage: "./assets/vmSocks-green-onWhite.jpg",
         variantQuantity: 1000
       },
       {
         variantId: 2235,
         variantColor: "blue",
         variantImage: "./assets/vmSocks-blue-onWhite.jpg",
         variantQuantity: 0
       }],
      cart: 0
     },
     methods: {
       addToCart: function () {
         this.cart += 1
       },
       updateProduct: function (index) {
         this.selectedVariant = index;
         // console.log(index);
       },
       removeFromCart: function () {
         this.cart -= 1;
       }
     },
     computed: {
       title() {
         return this.brand + ' ' + this.product
       },
       image() {
         return this.variants[this.selectedVariant].variantImage
       },
       inStock() {
        return this.variants[this.selectedVariant].variantQuantity
       },
       someThing() {
        if (this.onSale) {
          return this.brand + ' ' + this.product + ' are on sale!'
        } 
          return  this.brand + ' ' + this.product + ' are not on sale'
        }
     }
   })
   