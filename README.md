# For Assignment 4 / OnlineClothingShop through REST API

## Notes:

**databaseName:**
> clothingShopApi

- folder "uploadedItemImages" is where the item images will be uploaded ( see multerFileUpload.js:6 )
- folder "uploadedItemImages" is created if not exists on running server

- On posting users, following names are required to pass user information:
    ```
    userFname,userLname,username,password
    ```

- On adding items, following names are required to pass item information:
    ```
    itemName,itemPrice,itemImage,itemDescription
    ```

## Quick Codes

**start server**
> npm start

**make migration file**
> npm run migrate:make "filename"

**run migration file**
> npm run migrate:run  
