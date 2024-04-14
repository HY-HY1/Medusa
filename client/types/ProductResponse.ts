// ProductResponse.ts

export interface ProductResponse {
    products: Product;
}


export interface Product {
    products?: string;
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    title: string;
    subtitle: string | null;
    description: string;
    handle: string;
    is_giftcard: boolean;
    status: string;
    thumbnail: string;
    weight: number;
    length: number | null;
    height: number | null;
    width: number | null;
    hs_code: string | null;
    origin_country: string | null;
    mid_code: string | null;
    material: string | null;
    type_id: string | null;
    discountable: boolean;
    external_id: string | null;
    metadata: any; // You can replace 'any' with a more specific type if you know the structure
    collection: Collection;
    collection_id: string;
    images: Image[];
    options: Option[];
    profiles: Profile[];
    profile_id: string;
    tags: string[];
    type: string | null;
    variants: Variant[];
}

export interface Collection {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    title: string;
    handle: string;
    metadata: any; // You can replace 'any' with a more specific type if you know the structure
}

export interface Image {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    url: string;
    metadata: any; // You can replace 'any' with a more specific type if you know the structure
}

export interface Option {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    title: string;
    product_id: string;
    metadata: any; // You can replace 'any' with a more specific type if you know the structure
    values: OptionValue[];
}

export interface OptionValue {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    value: string;
    option_id: string;
    variant_id: string;
    metadata: any; // You can replace 'any' with a more specific type if you know the structure
}

export interface Profile {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    name: string;
    type: string;
    metadata: any; // You can replace 'any' with a more specific type if you know the structure
}

export interface Variant {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    title: string;
    product_id: string;
    sku: string | null;
    barcode: string | null;
    ean: string | null;
    upc: string | null;
    variant_rank: number;
    inventory_quantity: number;
    allow_backorder: boolean;
    manage_inventory: boolean;
    hs_code: string | null;
    origin_country: string | null;
    mid_code: string | null;
    material: string | null;
    weight: number | null;
    length: number | null;
    height: number | null;
    width: number | null;
    metadata: any; // You can replace 'any' with a more specific type if you know the structure
    options: OptionValue[];
    prices: Price[];
    original_price: number | null;
    calculated_price: number | null;
    original_price_incl_tax: number | null;
    calculated_price_incl_tax: number | null;
    original_tax: number | null;
    calculated_tax: number | null;
    tax_rates: any[]; // You can replace 'any' with a more specific type if you know the structure
}

export interface Price {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    currency_code: string;
    amount: number;
    min_quantity: number | null;
    max_quantity: number | null;
    price_list_id: string | null;
    region_id: string | null;
    price_list: any; // You can replace 'any' with a more specific type if you know the structure
    variant_id: string;
}
