## GET /wishlists
Description: Show all user's wishlist products

Response:

- Status: 200
- Body:

```json
[
 [
  {
    "id": 1,
    "ProductId": 1,
    "UserId": 3,
    "createdAt": "2021-10-19T08:43:46.000Z",
    "updatedAt": "2021-10-19T08:43:46.000Z",
    "Product": {
      "id": 1,
      "brand_name": "HALE",
      "product_name": "Honey, I Dew",
      "size": "85 ml",
      "bpom_number": "NA18201204813",
      "description": "A mildly acidic (pH: 5.00-6.00) sulfate-free cleanser that thoroughly removes impurities without irritating the skin; with honey extract and glycerin as hydrators, making the skin feel soft and supple",
      "how_to_use": "Rub the gel cleanser between your hands with water to lather into a gentle foam. Massage onto wet face, and then rinse with water",
      "ingredients_list": "Aqua, Sodium Methyl Cocoyl Taurate, Cocamidopropyl Betaine, Glycerin, Hydroxyethylcellulose, Honey Extract, Poly Acrylate Crospolymer, Citric Acid, Phenoxyethanol, Caprylhydroxamic Acid, Methylpropanediol, Imidazolidinyl Urea, Disodium EDTA",
      "image_URL": "https://cdn.shopify.com/s/files/1/2588/0486/products/fb829e3d-733d-4020-86bf-65169ade9ef7_900x.jpg?v=1611050671",
      "marketplace_URL": "https://shopee.co.id/hale.id",
      "social_media_URL": "https://www.instagram.com/think.hale/",
      "CategoryId": 1,
      "createdAt": "2021-10-19T06:43:42.656Z",
      "updatedAt": "2021-10-19T06:43:42.656Z"
    }
    .
    .
    .
  },
]
```
---

## POST /wishlists/:productId
Description: Add new wishlist

Request:

- Params:

  - productId: "integer"

- Data:

```json
{
  "id": "string"
}
```

Response:

- Status: 201
- Body:

```json
{
  "id": 1,
  "UserId": 3,
  "ProductId": 1,
  "updatedAt": "2021-10-19T09:05:01.405Z",
  "createdAt": "2021-10-19T09:05:01.405Z"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Product is not found"
}
```
---

## DELETE /wishlists/:id
Description: Delete wishlist by its ID

Request:

- Params:
    - id: "integer"

Response:

- Status: 200
- Body:

```json
{
  "message": "Wishlist has successfully been deleted"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data Wishlist is not found"
}
```
---
## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```
---