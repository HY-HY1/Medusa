export interface CartItem {
    id: string;
    created_at: string;
    updated_at: string;
    cart_id: string;
    order_id: string | null;
    swap_id: string | null;
    claim_order_id: string | null;
    original_item_id: string | null;
    order_edit_id: string | null;
    title: string;
    description: string;
    thumbnail: string;
    is_return: boolean;
    is_giftcard: boolean;
    should_merge: boolean;
    allow_discounts: boolean;
    has_shipping: boolean;
    unit_price: number;
    variant_id: string;
    quantity: number;
    fulfilled_quantity: number | null;
    returned_quantity: number | null;
    shipped_quantity: number | null;
    metadata: any; // Adjust this to match the actual metadata structure
    adjustments: any[]; // Adjust this to match the actual adjustments structure
    tax_lines: {
      rate: number;
      name: string;
      code: string;
      item_id: string;
    }[];
    variant: {
      id: string;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
      title: string;
      product_id: string;
      sku: string | null;
      barcode: string | null;
      ean: string;
      upc: string | null;
      variant_rank: number;
      inventory_quantity: number;
      allow_backorder: boolean;
      manage_inventory: boolean;
      hs_code: string | null;
      origin_country: string | null;
      mid_code: string | null;
      material: string;
      weight: number;
      length: number;
      height: number;
      width: number;
      metadata: any; // Adjust this to match the actual metadata structure
      product: {
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
        weight: number | null;
        length: number | null;
        height: number | null;
        width: number | null;
        hs_code: string | null;
        origin_country: string | null;
        mid_code: string | null;
        material: string | null;
        collection_id: string;
        type_id: string | null;
        discountable: boolean;
        external_id: string | null;
        metadata: any; // Adjust this to match the actual metadata structure
        profiles: any[]; // Adjust this to match the actual profiles structure
        profile: any; // Adjust this to match the actual profile structure
        profile_id: string;
      };
    };
    subtotal: number;
    discount_total: number;
    total: number;
    original_total: number;
    original_tax_total: number;
    tax_total: number;
    raw_discount_total: number;
  }
  
export interface CartData {
    object: string;
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    email: string | null;
    billing_address_id: string | null;
    shipping_address_id: string | null;
    region_id: string;
    customer_id: string | null;
    payment_id: string | null;
    type: string;
    completed_at: string | null;
    payment_authorized_at: string | null;
    idempotency_key: string | null;
    context: {
      ip: string;
      user_agent: string;
    };
    metadata: any; // Adjust this to match the actual metadata structure
    sales_channel_id: string;
    billing_address: any; // Adjust this to match the actual billing_address structure
    discounts: any[]; // Adjust this to match the actual discounts structure
    gift_cards: any[]; // Adjust this to match the actual gift_cards structure
    items: CartItem[];
    payment: any; // Adjust this to match the actual payment structure
    payment_sessions: any[]; // Adjust this to match the actual payment_sessions structure
    region: {
      id: string;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
      name: string;
      currency_code: string;
      tax_rate: number;
      tax_code: string | null;
      gift_cards_taxable: boolean;
      automatic_taxes: boolean;
      tax_provider_id: string | null;
      metadata: any; // Adjust this to match the actual metadata structure
      countries: {
        id: number;
        iso_2: string;
        iso_3: string;
        num_code: number;
        name: string;
        display_name: string;
        region_id: string;
      }[];
      payment_providers: {
        id: string;
        is_installed: boolean;
      }[];
      tax_rates: any[]; // Adjust this to match the actual tax_rates structure
    };
    sales_channel: {
      id: string;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
      name: string;
      description: string;
      is_disabled: boolean;
      metadata: any; // Adjust this to match the actual metadata structure
    };
    shipping_address: any; // Adjust this to match the actual shipping_address structure
    shipping_methods: any[]; // Adjust this to match the actual shipping_methods structure
    subtotal: number;
    discount_total: number;
    item_tax_total: number;
    shipping_total: number;
    shipping_tax_total: number;
    tax_total: number;
    gift_card_total: number;
    gift_card_tax_total: number;
    total: number;
  }
  
  