// data/coupons.ts
// import { Offer } from '@/types/Offer';

const Coupon = [
  {
    id: 25135790,
    offer_user_id: 1,  // Example user ID
    offer_store_id: 1,  // Example store ID
    offer_added_date: new Date(),  // Replace with actual date if available
    offer_status: 'active',
    offer_type: 'CODE',
    offer_benefit: '18% Off',
    offer_title: '18% Off Everything',
    offer_description: 'Shop and save at bougerv.com by using our staff pick 18% Off BougeRV Promo Code. Helo this is coupon project I am fine how are you',
    offer_code: '**18',
    offer_start_date: new Date(),  // Replace with actual start date if available
    offer_link: 'https://amazon.com/',
    offer_view_count: 50,
  },
  {
    id: 87426351,
    offer_user_id: 1,  // Example user ID
    offer_store_id: 2,  // Example store ID
    offer_added_date: new Date(),  // Replace with actual date if available
    offer_status: 'active',
    offer_type: 'CODE',
    offer_benefit: '25% Off',
    offer_title: '25% Off Your Order',
    offer_description: 'Get a 25% discount on your next purchase at shopwise.com with this exclusive promo code.',
    offer_end_date: new Date('2024-08-15'),
    offer_code: '**25OFF',
    offer_link: 'https://netflix.com/',
    offer_view_count: 30,
  },
  {
    id: 65839274,
    offer_user_id: 1,  // Example user ID
    offer_store_id: 3,  // Example store ID
    offer_added_date: new Date(),  // Replace with actual date if available
    offer_status: 'active',
    offer_type: 'CODE',
    offer_benefit: '10% Off',
    offer_title: '10% Off All Items',
    offer_description: 'Enjoy a 10% discount on all items at fashionhub.com with this promo code.',
    offer_end_date: new Date('2024-12-01'),
    offer_code: '**10OFF',
    offer_link: 'https://aliexpress.com/',
    offer_view_count: 75,
  },
  {
    id: 97263485,
    offer_user_id: 1,  // Example user ID
    offer_store_id: 4,  // Example store ID
    offer_added_date: new Date(),  // Replace with actual date if available
    offer_status: 'active',
    offer_type: 'CODE',
    offer_benefit: '20% Off',
    offer_title: '20% Off First Order',
    offer_description: 'Save 20% on your first order at techgadgets.com with this code.',
    offer_end_date: new Date('2024-11-30'),
    offer_code: '**20FIRST',
    offer_link: 'https://flipkart.com/',
    offer_view_count: 45,
  },
  {
    id: 14387592,
    offer_user_id: 1,  // Example user ID
    offer_store_id: 5,  // Example store ID
    offer_added_date: new Date(),  // Replace with actual date if available
    offer_status: 'active',
    offer_type: 'CODE',
    offer_benefit: '15% Off',
    offer_title: '15% Off Electronics',
    offer_description: 'Get 15% off on all electronics at techstore.com with this discount code.',
    offer_end_date: new Date('2024-10-15'),
    offer_code: '**15ELECTRO',
    offer_link: 'https://myntra.com/',
    offer_view_count: 60,
  },
  {
    id: 25647892,
    offer_user_id: 1,  // Example user ID
    offer_store_id: 6,  // Example store ID
    offer_added_date: new Date(),  // Replace with actual date if available
    offer_status: 'active',
    offer_type: 'CODE',
    offer_benefit: '30% Off',
    offer_title: '30% Off Sitewide',
    offer_description: 'Enjoy 30% off on all purchases at bigdiscounts.com with this promo code.',
    offer_end_date: new Date('2024-08-30'),
    offer_code: '**30SITE',
    offer_link: 'https://bigdiscounts.com/',
    offer_view_count: 20,
  },
  {
    id: 98473125,
    offer_user_id: 1,  // Example user ID
    offer_store_id: 7,  // Example store ID
    offer_added_date: new Date(),  // Replace with actual date if available
    offer_status: 'active',
    offer_type: 'CODE',
    offer_benefit: '5% Off',
    offer_title: '5% Off Your Next Order',
    offer_description: 'Save 5% on your next order at bookdepot.com using this code.',
    offer_end_date: new Date('2024-09-15'),
    offer_code: '**5OFF',
    offer_link: 'https://bookdepot.com/',
    offer_view_count: 90,
  },
  {
    id: 37894562,
    offer_user_id: 1,  // Example user ID
    offer_store_id: 8,  // Example store ID
    offer_added_date: new Date(),  // Replace with actual date if available
    offer_status: 'active',
    offer_type: 'CODE',
    offer_benefit: '40% Off',
    offer_title: '40% Off Clearance Items',
    offer_description: 'Get 40% off on clearance items at shopclearance.com with this promo code.',
    offer_end_date: new Date('2024-08-31'),
    offer_code: '**40CLEAR',
    offer_link: 'https://shopclearance.com/',
    offer_view_count: 15,
  },
  {
    id: 56748932,
    offer_user_id: 1,  // Example user ID
    offer_store_id: 9,  // Example store ID
    offer_added_date: new Date(),  // Replace with actual date if available
    offer_status: 'active',
    offer_type: 'CODE',
    offer_benefit: '12% Off',
    offer_title: '12% Off Orders Over $50',
    offer_description: 'Save 12% on orders over $50 at homegoods.com with this discount code.',
    offer_end_date: new Date('2024-10-05'),
    offer_code: '**12OVER50',
    offer_link: 'https://homegoods.com/',
    offer_view_count: 40,
  },
  {
    id: 15973462,
    offer_user_id: 1,  // Example user ID
    offer_store_id: 10,  // Example store ID
    offer_added_date: new Date(),  // Replace with actual date if available
    offer_status: 'active',
    offer_type: 'CODE',
    offer_benefit: '8% Off',
    offer_title: '8% Off Your Purchase',
    offer_description: 'Enjoy 8% off on your purchase at gadgetsworld.com with this promo code.',
    offer_end_date: new Date('2024-09-25'),
    offer_code: '**8OFF',
    offer_link: 'https://gadgetsworld.com/',
    offer_view_count: 80,
  },
  {
    id: 15973463,
    offer_user_id: 1,  // Example user ID
    offer_store_id: 11,  // Example store ID
    offer_added_date: new Date(),  // Replace with actual date if available
    offer_status: 'active',
    offer_type: 'CODE',
    offer_benefit: '9% Off',
    offer_title: '9% Off Your Purchase',
    offer_description: 'Enjoy 9% off on your purchase at gadgetsworld.com with this promo code.',
    offer_end_date: new Date('2024-09-25'),
    offer_code: '**8OTT',
    offer_link: 'https://gadgetsworld.com/',
    offer_view_count: 80,
  },
  {
    id: 15973466,
    offer_user_id: 1,  // Example user ID
    offer_store_id: 12,  // Example store ID
    offer_added_date: new Date(),  // Replace with actual date if available
    offer_status: 'active',
    offer_type: 'CODE',
    offer_benefit: '28% Off',
    offer_title: '28% Off Your Purchase',
    offer_description: 'Enjoy 28% off on your purchase at gadgetsworld.com with this promo code.',
    offer_end_date: new Date('2024-09-25'),
    offer_code: '**8OVV',
    offer_link: 'https://gadgetsworld.com/',
    offer_view_count: 80,
  }
]

module.exports = { Coupon}