export async function getAllProducts(){
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        return products;
    } catch (error) {
        return error;
    }
}

export async function getProductsByCategory(category:string){
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const products = await response.json();
        return products;
    } catch (error) {
        return error;
    }
}

export async function getCategories(){
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const products = await response.json();
        return products;
    } catch (error) {
        return error;
    }
}