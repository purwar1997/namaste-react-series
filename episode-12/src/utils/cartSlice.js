import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurant: {
    id: '596007',
    name: 'Big Bowl',
    city: 'Noida 1',
    slugs: {
      restaurant: 'big-bowl-company-golf-course-golf-course',
      city: 'noida-1',
    },
    uniqueId: 'fdb85b43-44af-46d1-8c9c-29bed9fc2c3c',
    cloudinaryImageId: '992f217c2f122c0d8fc385855ca30722',
    locality: 'Tulip Mall',
    areaName: 'Sector 48',
    costForTwo: '25000',
    costForTwoMessage: '₹250 for two',
    cuisines: ['North Indian', 'Chinese'],
    avgRating: 3.8,
    feeDetails: {
      restaurantId: '596007',
      fees: [
        {
          name: 'distance',
          fee: 5300,
        },
        {
          name: 'time',
        },
        {
          name: 'special',
        },
      ],
      totalFee: 5300,
      title: 'Delivery Charge',
      amount: '5300',
    },
    parentId: '434792',
    avgRatingString: '3.8',
    totalRatingsString: '100+ ratings',
    sla: {
      restaurantId: '596007',
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      lastMileTravel: 5.8,
      serviceability: 'SERVICEABLE',
      stressFactor: 0.6399017,
      rainMode: 'RAIN_MODE_NONE',
      longDistance: 'LONG_DISTANCE_NOT_LONG_DISTANCE',
      zoneId: 2831,
      slaString: '31 MINS',
      lastMileTravelString: '5.8 km',
      iconType: 'ICON_TYPE_EMPTY',
    },
    availability: {
      nextCloseTime: '2023-09-11 01:00:00',
      visibility: true,
      opened: true,
      restaurantClosedMeta: {},
    },
    aggregatedDiscountInfo: {
      header: '60% off',
      shortDescriptionList: [
        {
          meta: '60% off | Use TRYNEW',
          discountType: 'Percentage',
          operationType: 'RESTAURANT',
        },
        {
          meta: 'Flat ₹125 off on orders above ₹399',
          discountType: 'Flat',
          operationType: 'RESTAURANT',
        },
      ],
      descriptionList: [
        {
          meta: '60% off up to ₹120 | Use code TRYNEW',
          discountType: 'Percentage',
          operationType: 'RESTAURANT',
        },
        {
          meta: 'Flat ₹125 off on orders above ₹399 | Use code WEEKENDS',
          discountType: 'Flat',
          operationType: 'RESTAURANT',
        },
      ],
      visible: true,
    },
    badges: {},
    slugString: 'big-bowl-company-golf-course-golf-course',
    multiOutlet: true,
    isOpen: true,
    labels: [
      {
        title: 'Timings',
        message: 'null',
      },
      {
        title: 'Address',
        message:
          'Shop No- F-9 & F-10, First Floor, Tulip Malls, Plot No- B-156A, Sector- 46, Noida, NOIDA CITY ZONE-2, Gautam Buddha Nagar , Uttar Pradesh',
      },
      {
        title: 'Cuisines',
        message: 'North Indian,Chinese',
      },
    ],
    totalRatings: 100,
    aggregatedDiscountInfoV2: {
      header: '60% off',
      shortDescriptionList: [
        {
          meta: '60% off | Use TRYNEW',
          discountType: 'Percentage',
          operationType: 'RESTAURANT',
        },
        {
          meta: 'Flat ₹125 off on orders above ₹399',
          discountType: 'Flat',
          operationType: 'RESTAURANT',
        },
      ],
      descriptionList: [
        {
          meta: '60% off up to ₹120 | Use code TRYNEW',
          discountType: 'Percentage',
          operationType: 'RESTAURANT',
        },
        {
          meta: 'Flat ₹125 off on orders above ₹399 | Use code WEEKENDS',
          discountType: 'Flat',
          operationType: 'RESTAURANT',
        },
      ],
      couponDetailsCta: 'View coupon details',
    },
    type: 'F',
    nudgeBanners: [
      {
        minValue: 279,
        maxValue: 399,
        priority: 84,
        couponCode: 'WEEKENDS',
        discountInfo: {
          discountType: 'Flat',
          value: 125,
        },
        lockedMessage: 'Add items worth ₹<amount> to save ₹125 | Code WEEKENDS',
        unlockedMessage: 'WEEKENDS Coupon Unlocked! Use it to save ₹125',
        logoCtx: {},
      },
      {
        minValue: 420,
        maxValue: 600,
        priority: 85,
        couponCode: 'PARTY',
        discountInfo: {
          discountType: 'Percentage',
          value: 25,
        },
        lockedMessage: 'Add items worth ₹<amount> to unlock flat 25% off | Code PARTY',
        unlockedMessage: 'PARTY Coupon Unlocked! Use it to save flat 25% off',
        logoCtx: {},
      },
    ],
    headerBanner: {
      url: 'swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/596007',
    },
    expectationNotifiers: [
      {
        icon: {},
        popup: {
          cta: {},
        },
        type: 'DISTANCE_FEE_NON_FOOD_LM',
        halfCardPopup: {
          halfCardPopupHeader: {},
        },
      },
    ],
    ratingSlab: 'RATING_SLAB_4',
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    hasBestsellerItems: true,
    hasGuiltfreeItems: true,
    cartOrderabilityNudgeBanner: {
      parameters: {},
      presentation: {},
    },
    latLong: '28.549166,77.362825',
  },
  items: [
    {
      menuItem: {
        id: '113294801',
        name: 'Classic Fried Chicken Leg with Pepsi and Fries',
        category: 'Newly Launched',
        imageId: 'a49e063e3eeb400b2f4bfc8b549ac583',
        inStock: 1,
        variants: {},
        variantsV2: {
          variantGroups: [
            {
              groupId: '30848863',
              name: 'Quantity',
              variations: [
                {
                  name: '3 Pcs',
                  price: 410,
                  default: 1,
                  id: '95851032',
                  inStock: 1,
                  isEnabled: 1,
                },
                {
                  name: '5+1 Pcs',
                  price: 645,
                  id: '95851033',
                  inStock: 1,
                  isEnabled: 1,
                },
              ],
            },
          ],
          pricingModels: [
            {
              variations: [
                {
                  groupId: '30848863',
                  variationId: '95851032',
                },
              ],
              price: 41000,
            },
            {
              variations: [
                {
                  groupId: '30848863',
                  variationId: '95851033',
                },
              ],
              price: 64500,
            },
          ],
        },
        itemAttribute: {
          vegClassifier: 'NONVEG',
        },
        defaultPrice: 41000,
        ribbon: {},
        type: 'ITEM',
        itemBadge: {},
        badgesV2: {},
        ratings: {
          aggregatedRating: {
            rating: '2.0',
            ratingCount: '5 ratings',
            ratingCountV2: '5',
          },
        },
      },
      quantity: 3,
    },
    {
      menuItem: {
        id: '113294802',
        name: 'Peri Peri Fried Chicken Leg with Coke, Sauce and Dips',
        category: 'Newly Launched',
        imageId: 'a49e063e3eeb400b2f4bfc8b549ac583',
        inStock: 1,
        variants: {},
        variantsV2: {
          variantGroups: [
            {
              groupId: '30848867',
              name: 'Quantity',
              variations: [
                {
                  name: '3 Pcs',
                  price: 410,
                  default: 1,
                  id: '95851040',
                  inStock: 1,
                  isEnabled: 1,
                },
                {
                  name: '5+1 Pcs',
                  price: 645,
                  id: '95851041',
                  inStock: 1,
                  isEnabled: 1,
                },
              ],
            },
          ],
          pricingModels: [
            {
              variations: [
                {
                  groupId: '30848867',
                  variationId: '95851040',
                },
              ],
              price: 41000,
            },
            {
              variations: [
                {
                  groupId: '30848867',
                  variationId: '95851041',
                },
              ],
              price: 64500,
            },
          ],
        },
        itemAttribute: {
          vegClassifier: 'NONVEG',
        },
        defaultPrice: 41000,
        ribbon: {},
        type: 'ITEM',
        itemBadge: {},
        badgesV2: {},
        ratings: {
          aggregatedRating: {},
        },
      },
      quantity: 2,
    },
    {
      menuItem: {
        id: '97164412',
        name: 'Classic Fries',
        category: 'Sides',
        description: 'Long and crispy fries made from high quality potatoes. ',
        imageId: '28498b0977b638158a9f6342f95e5be0',
        inStock: 1,
        isVeg: 1,
        price: 13900,
        variants: {},
        variantsV2: {},
        addons: [
          {
            groupId: '103654066',
            groupName: 'Add Ons',
            choices: [
              {
                id: '96664445',
                name: 'Sweet Chilli Mayo Dip',
                price: 3000,
                inStock: 1,
                isEnabled: 1,
              },
              {
                id: '96664446',
                name: 'Chipotle Mayo Dip ',
                price: 3000,
                inStock: 1,
                isEnabled: 1,
              },
              {
                id: '96664444',
                name: 'Classic Mayo Dip ',
                price: 3000,
                inStock: 1,
                isEnabled: 1,
              },
              {
                id: '96664447',
                name: 'Tandoori Mayo Dip',
                price: 3000,
                inStock: 1,
                isEnabled: 1,
              },
            ],
            maxAddons: 4,
            maxFreeAddons: -1,
          },
        ],
        itemAttribute: {
          vegClassifier: 'VEG',
        },
        ribbon: {},
        type: 'ITEM',
        itemBadge: {},
        badgesV2: {},
        ratings: {
          aggregatedRating: {
            rating: '4.2',
            ratingCount: '212 ratings',
            ratingCountV2: '212',
          },
        },
      },
      quantity: 1,
    },
    {
      menuItem: {
        id: '109948878',
        name: 'Chicken Spring Roll (8pcs)',
        category: 'Spring Rolls',
        imageId: '76173e411b1f14d504d840027ecfb9e1',
        inStock: 1,
        price: 24500,
        variants: {},
        variantsV2: {},
        addons: [
          {
            groupId: '103654060',
            groupName: 'Add Ons',
            choices: [
              {
                id: '96664427',
                name: 'Momo Chutney',
                price: 3000,
                inStock: 1,
                isEnabled: 1,
              },
              {
                id: '96664426',
                name: 'Classic Mayo Dip',
                price: 3000,
                inStock: 1,
                isEnabled: 1,
              },
            ],
            maxAddons: 2,
            maxFreeAddons: -1,
          },
        ],
        itemAttribute: {
          vegClassifier: 'NONVEG',
        },
        ribbon: {},
        type: 'ITEM',
        itemBadge: {},
        badgesV2: {},
        ratings: {
          aggregatedRating: {
            rating: '3.4',
            ratingCount: '15 ratings',
            ratingCountV2: '15',
          },
        },
      },
      quantity: 4,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { menuItem, restaurant } = action.payload;

      if (state.items.length === 0) {
        state.restaurant = restaurant;
      }

      const cartItem = state.items.find(item => item.menuItem.id === menuItem.id);
      const index = state.items.findIndex(item => item.menuItem.id === menuItem.id);

      if (cartItem) {
        state.items.splice(index, 1, { ...cartItem, quantity: cartItem.quantity + 1 });
      } else {
        state.items.push({ menuItem, quantity: 1 });
      }
    },

    removeFromCart(state, action) {
      const itemId = action.payload;
      const cartItem = state.items.find(item => item.menuItem.id === itemId);
      const index = state.items.findIndex(item => item.menuItem.id === itemId);

      if (cartItem.quantity > 1) {
        state.items.splice(index, 1, { ...cartItem, quantity: cartItem.quantity - 1 });
      } else {
        state.items.splice(index, 1);
      }

      if (state.items.length === 0) {
        state.restaurant = null;
      }
    },

    clearCart(state) {
      state.items.length = 0;
      state.restaurant = null;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
