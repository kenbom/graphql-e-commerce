const { v4: uuid } = require("uuid");

exports.Mutation = {
    addCategory: (parent, { input }, { db }) => {

        const { name } = input;

        const newCategory = {
            id: uuid(),
            name,
        };

        db.categories.push(newCategory);

        return newCategory;

    },

    addProduct: (parent, { input }, { db }) => {
        const {
            name,
            description,
            image,
            quantity,
            price,
            onSale,
            categoryId,
        } = input;

        const newProduct = {
            id: uuid(),
            name,
            description,
            image,
            quantity,
            price,
            onSale,
            categoryId,
        };

        db.products.push(newProduct);

        return newProduct;
    },

    addReview: (parent, { input }, { db }) => {
        const {
            date,
            title,
            comment,
            rating,
            productId,
        } = input;

        const newReview = {
            id: uuid(),
            date,
            title,
            comment,
            rating,
            productId,
        }

        db.reviews.push(newReview);

        return newReview;
    },

    deleteCategory: (parent, { id }, { db }) => {
        db.categories = db.categories.filter((category) => { category.id !== id });
        db.products = db.products.map((product) => {
            if(product.categoryId === id) return { 
                ...product,
                categoryId:null,
            }
            else return product
        })
        return true;
    },

    deleteProduct: (parent, { id }, { db }) => {
        db.products = db.products.filter((product) =>  product.id !== id );
        db.reviews = db.reviews.filter((review) => review.productId !== id)
        // 以下まちがってる！dbデータをよく見るとreviewのproducuIdは必要が無い。カテゴリーと違ってreviewからは１対１
        // db.reviews = db.reviews.map((review) => {
        //     if(review.productId === id) return { 
        //         ...review,
        //         productId:null,
        //     }
        //     else return review
        return true;
    },

    deleteReview: (parent, {id}, {db}) => {
        db.reviews = db.reviews.filter((review) => review.id !== id);
        return true;
    },

    updateCategory: (parent, {id, input}, {db}) => {
        const index = db.categories.findIndex((category) => category.id === id);
        if(index === -1) return null;
        db.categories[index] = {
            ...db.categories[index],
            ...input,
        };
        return db.categories[index];

        // 以下最初のトライ(間違い)
    //     let indexNum = findindex(db.categories.id === id);
    //     const updatedCategory = (indexNum) => {
    //         db.categories(indexNum)={
    //         ...category,
    //         ...input,
    //     }
     },

     updateProduct: (parent, {id, input}, {db}) => {
        const index = db.products.findIndex((product) => product.id === id);
        if(index === -1) return null;
        db.products[index] = {
            ...db.products[index],
            ...input,
        };
        return db.products[index];
     },

     updateReview: (parent, {id, input}, {db}) => {
        const index = db.reviews.findIndex((reviews) => review.id === id);
        if(index === -1) return null;
        db.reviews[index] = {
            ...db.reviews[index],
            ...input,
        };
        return db.reviews[index];
     },
}
