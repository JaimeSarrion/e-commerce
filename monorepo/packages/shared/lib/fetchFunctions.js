"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = exports.getProductsByCategory = exports.getAllProducts = void 0;
function getAllProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://fakestoreapi.com/products');
            const products = yield response.json();
            return products;
        }
        catch (error) {
            return error;
        }
    });
}
exports.getAllProducts = getAllProducts;
function getProductsByCategory(category) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://fakestoreapi.com/products/category/${category}`);
            const products = yield response.json();
            return products;
        }
        catch (error) {
            return error;
        }
    });
}
exports.getProductsByCategory = getProductsByCategory;
function getCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://fakestoreapi.com/products/categories');
            const products = yield response.json();
            return products;
        }
        catch (error) {
            return error;
        }
    });
}
exports.getCategories = getCategories;
//# sourceMappingURL=fetchFunctions.js.map