
export interface ProductsProps {
    id?: number;
    title: string;
    productCode: string;
    image: string;
    price: string;
    description: string;
    specs: {dimensions: string, capacity: string };
    features: string [];
    stock: number;
}