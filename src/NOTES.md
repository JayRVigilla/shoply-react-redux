**COMPONENT DESIGN**
App
|--Navigation         : NavBar on all pages
|--Routes             : all Route components
  |--Product          :
  |--Home
      |--ProductList
          |-ProductCard         :
Prodcut Card - on home page: product name and +/- buttons



**ROUTES**
Home(product cards with +/- buttons) => /
individual products => /products/product-id
cart 
  (list of items in cart 
  with quantities and +/- buttons) => /cart



**PRODUCT JSON**
  {
    "products": {
    "47314fa1-ae56-4eae-80be-af6691145951": {
      "name": ,
      "price": ,
      "description":,
      "image_url":
    },{},...
    }

    
**Step 1**
~~Make a page that displays these items in a single list, each with an “add to cart” and “remove from cart” button.~~

Allow users to add and remove products to the cart.

You should display the total of all items in the cart as users add and remove items from the cart. Note that users should be able to add more than one of the same product to their cart!

~~You should be storing the cart state in Redux as well as the complete product inventory (to do this, you should import the JSON file into your rootReducer file). At a minimum, make sure your state object these two keys in it!~~

Make sure your action creators and reducers have tests before moving on!

Make sure you have styled this page nicely before moving on!


cart:{
  product:{...data, count:number in cart},
  product:{...},...
}