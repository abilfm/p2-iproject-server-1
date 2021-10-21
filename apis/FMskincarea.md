# FMSKINCAREA

A community website that contains a range of local skincare products that do not contain alcohol, synthetic fragrances, essential oils and have an official distribution license from BPOM for gentle skincare users.

---

## Models:

_Category_

```
- name : string, required
```

_User_

```
- email : string, unique, required
- password : string, required
- username : string, required
- phone_number : string, required
- address : string, required
```

_Product_

```
- brand_name : string, required
- product_name : string, required
- bpom_number : string, required
- description : text, required
- how_to_use : text, required
- ingredients_list : text, required
- image_URL : string, required
- marketplace_URL : string, required
- social_media_URL : string, required
- CategoryId : integer, required
```

_Message_
```
- name : string, required
- email : string, required
- subject : string, required
- message : text, required
```

_Wishlist_
```
- ProductId : integer, required
- UserId : integer, required
```

---

## Associations :
>### **One-To-Many**
>- Categories and Product = **One-To-Many**

>### **Many-To-Many**
>- User and Product through Wishlist = **Many-To-Many**
---

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`

- `GET /messages`
- `POST /messages`
- `DELETE /messages/:id`

- `GET /categories`
- `GET /categories/:id`

- `GET /products`
- `GET /products/:id`
- `POST /products`
- `PUT /products/:id`
- `DELETE /products/:id`

- `GET /wishlist`
- `POST /wishlist/:productId`
- `DELETE /wishlist/:id`

---