## GET /categories
Description: Show all categories

Response:

- Status: 200
- Body:

```json
[
  {
    "id": 1,
    "name": "Cleanser",
    "createdAt": "2021-10-19T06:43:42.645Z",
    "updatedAt": "2021-10-19T06:43:42.645Z",
    "Products": [
        {
          "id": 5,
          "brand_name": "GENTLE HOUR",
          "product_name": "CLEAN START Hydrating Jelly Cleanser",
          "size": "100 ml",
          "bpom_number": "NA18191235185",
          "description": "This pH-balanced formula washes away city dirt and grime without irritating your skin. Made with moisture-retaining Hyaluronic Acid and soothing chamomile, it hydrates and calms skin as it cleanses.",
          "how_to_use": "Squeeze a small amount into palms. Gently massage onto wet face and neck. Rinse thoroughly with tepid water and pat dry.",
          "ingredients_list": "Aqua, Lauryl Glucoside, Glycerin, Sodium Methyl Cocoyl Taurate, Sodium Lauryl Sulfoacetate, Cocamidopropyl Hydroxysultaine, Sodium PCA, Opuntia Ficus Indica Stem Extract, Sodium Hyaluronate, Camellia Sinensis Leaf Extract, Chamomilla Recutita Matricaria Flower Extract, Dipotassium Glycyrrhizate, Aloe Barbadensis Leaf Extract, Panthenol, Actinidia Polygama Fruit Extract, Butylene Glycol, Polyglyceryl 4 Caprate, Disodium EDTA, Acrylates C10 30 Alkyl Acrylate Crosspolymer, Sodium Chloride, Sodium Sulfate, Potassium Sorbate, Sorbic Acid, Sodium Benzoate, Citric Acid, Disodium Phosphate, Sodium Hydroxide, Phenoxyethanol, Triethylene Glycol",
          "image_URL": "https://www.gentlehour.com/images/product/20200724_092123_phpa143.tmp_resized.png",
          "marketplace_URL": "https://shopee.co.id/gentlehour",
          "social_media_URL": "https://www.instagram.com/gentlehourofficial/",
          "CategoryId": 1,
          "createdAt": "2021-10-19T06:43:42.656Z",
          "updatedAt": "2021-10-19T06:43:42.656Z"
        },
        {
          "id": 4,
          "brand_name": "TRUE to SKIN",
          "product_name": "Matcha Oat Gentle Cleanser",
          "size": "100 ml",
          "bpom_number": "NA18211202096",
          "description": "pH-balanced facial cleanser with a gel texture. This gentle cleanser contains good ingredients such as Oat, Heart Leaf, Collagen and Real Green Tea Leaves which are able to gently clean dirt, such as (dirt, air pollution, oil build-up on the face and residue from make-up) and soothe the face without making the skin feel dry.",
          "how_to_use": "Pour enough cleanser into the palm of the hand. Massage gently on a wet face, then rinse with water until clean.",
          "ingredients_list": "Water, Potassium Cocoyl Hydrolyzed Collagen, Glycerin, Acrylates Copolymer, Cocamidopropyl Betaine, Potassium Cocoyl Glycinate, Butylene Glycol, Decyl Glucoside, PEG-120 Methyl Glucose Dioleate, Pentylene Glycol, Xanthan Gum, Avena Sativa (Oat) Kernel Extract, Panthenol, Glycyrrhiza Glabra (Licorice) Leaf Extract, Triethanolamine, Clitoria Ternatea Flower Extract, 1,2-Hexanediol, Houttuynia Cordata Extract, Sodium Hyaluronate, Ethylhexylglycerin, Cinnamomum Zeylanicum Bark Extract, Capryloyl Glycine, Sarcosine, Citrus Junos Seed Extract, Citrus Unshiu Peel Extract, Actinidia Chinensis (Kiwi) Seed, (Salicylic Acid 0.01%), Fragaria Chiloensis (Strawberry) Fruit Extract, Vitis Vinifera (Grape) Seed Extract, Vitis Vinifera (Grape) Skin Extract, Vitis Vinifera (Grape) Leaf Extract, Garcinia Mangostana Peel Extract, Propanediol, Sodium Hydroxide, Dipotassium Glycyrrhizate, Chlorphenesin, Allantoin, Disodium EDTA, Camellia Sinensis Leaf",
          "image_URL": "https://lh3.googleusercontent.com/-Gh5ZjJc4EOc/YQNWImQWoUI/AAAAAAAADsI/SGVE539sa-QgichzmCN-2reSsE62SkwRwCNcBGAsYHQ/s1600/1627608764131437-0.png",
          "marketplace_URL": "https://shopee.co.id/truetoskin",
          "social_media_URL": "https://www.instagram.com/truetoskinofficial",
          "CategoryId": 1,
          "createdAt": "2021-10-19T06:43:42.656Z",
          "updatedAt": "2021-10-19T06:43:42.656Z"
        },
        .
        .
        .
      ]
  .
  .
  .
  }
]
```
---

## GET /categories/:id
Description: Show one category by its ID 

Request:

- Params:
    - id: "integer"

Response:

- Status: 200
- Body:

```json
[
  {
    "id": 1,
    "name": "Cleanser",
    "createdAt": "2021-10-19T06:43:42.645Z",
    "updatedAt": "2021-10-19T06:43:42.645Z",
    "Products": [
        {
          "id": 5,
          "brand_name": "GENTLE HOUR",
          "product_name": "CLEAN START Hydrating Jelly Cleanser",
          "size": "100 ml",
          "bpom_number": "NA18191235185",
          "description": "This pH-balanced formula washes away city dirt and grime without irritating your skin. Made with moisture-retaining Hyaluronic Acid and soothing chamomile, it hydrates and calms skin as it cleanses.",
          "how_to_use": "Squeeze a small amount into palms. Gently massage onto wet face and neck. Rinse thoroughly with tepid water and pat dry.",
          "ingredients_list": "Aqua, Lauryl Glucoside, Glycerin, Sodium Methyl Cocoyl Taurate, Sodium Lauryl Sulfoacetate, Cocamidopropyl Hydroxysultaine, Sodium PCA, Opuntia Ficus Indica Stem Extract, Sodium Hyaluronate, Camellia Sinensis Leaf Extract, Chamomilla Recutita Matricaria Flower Extract, Dipotassium Glycyrrhizate, Aloe Barbadensis Leaf Extract, Panthenol, Actinidia Polygama Fruit Extract, Butylene Glycol, Polyglyceryl 4 Caprate, Disodium EDTA, Acrylates C10 30 Alkyl Acrylate Crosspolymer, Sodium Chloride, Sodium Sulfate, Potassium Sorbate, Sorbic Acid, Sodium Benzoate, Citric Acid, Disodium Phosphate, Sodium Hydroxide, Phenoxyethanol, Triethylene Glycol",
          "image_URL": "https://www.gentlehour.com/images/product/20200724_092123_phpa143.tmp_resized.png",
          "marketplace_URL": "https://shopee.co.id/gentlehour",
          "social_media_URL": "https://www.instagram.com/gentlehourofficial/",
          "CategoryId": 1,
          "createdAt": "2021-10-19T06:43:42.656Z",
          "updatedAt": "2021-10-19T06:43:42.656Z"
        },
        {
          "id": 4,
          "brand_name": "TRUE to SKIN",
          "product_name": "Matcha Oat Gentle Cleanser",
          "size": "100 ml",
          "bpom_number": "NA18211202096",
          "description": "pH-balanced facial cleanser with a gel texture. This gentle cleanser contains good ingredients such as Oat, Heart Leaf, Collagen and Real Green Tea Leaves which are able to gently clean dirt, such as (dirt, air pollution, oil build-up on the face and residue from make-up) and soothe the face without making the skin feel dry.",
          "how_to_use": "Pour enough cleanser into the palm of the hand. Massage gently on a wet face, then rinse with water until clean.",
          "ingredients_list": "Water, Potassium Cocoyl Hydrolyzed Collagen, Glycerin, Acrylates Copolymer, Cocamidopropyl Betaine, Potassium Cocoyl Glycinate, Butylene Glycol, Decyl Glucoside, PEG-120 Methyl Glucose Dioleate, Pentylene Glycol, Xanthan Gum, Avena Sativa (Oat) Kernel Extract, Panthenol, Glycyrrhiza Glabra (Licorice) Leaf Extract, Triethanolamine, Clitoria Ternatea Flower Extract, 1,2-Hexanediol, Houttuynia Cordata Extract, Sodium Hyaluronate, Ethylhexylglycerin, Cinnamomum Zeylanicum Bark Extract, Capryloyl Glycine, Sarcosine, Citrus Junos Seed Extract, Citrus Unshiu Peel Extract, Actinidia Chinensis (Kiwi) Seed, (Salicylic Acid 0.01%), Fragaria Chiloensis (Strawberry) Fruit Extract, Vitis Vinifera (Grape) Seed Extract, Vitis Vinifera (Grape) Skin Extract, Vitis Vinifera (Grape) Leaf Extract, Garcinia Mangostana Peel Extract, Propanediol, Sodium Hydroxide, Dipotassium Glycyrrhizate, Chlorphenesin, Allantoin, Disodium EDTA, Camellia Sinensis Leaf",
          "image_URL": "https://lh3.googleusercontent.com/-Gh5ZjJc4EOc/YQNWImQWoUI/AAAAAAAADsI/SGVE539sa-QgichzmCN-2reSsE62SkwRwCNcBGAsYHQ/s1600/1627608764131437-0.png",
          "marketplace_URL": "https://shopee.co.id/truetoskin",
          "social_media_URL": "https://www.instagram.com/truetoskinofficial",
          "CategoryId": 1,
          "createdAt": "2021-10-19T06:43:42.656Z",
          "updatedAt": "2021-10-19T06:43:42.656Z"
        },
        .
        .
        .
      ]
  }
]
```

_Response (404 - Not Found)_

```json
{
  "message": "Category is not found"
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