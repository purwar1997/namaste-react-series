import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurant: {
    id: '98999',
    name: 'Pizza Hut',
    city: 'Noida 1',
    slugs: {
      restaurant: 'pizza-hut-north-eye-mall-sector-50',
      city: 'noida-1',
    },
    uniqueId: '0c9fc884-6c86-465c-b0cc-86a1a04ededf',
    cloudinaryImageId: '2b4f62d606d1b2bfba9ba9e5386fabb7',
    locality: 'North Eye Mall',
    areaName: 'Sector 72',
    costForTwo: '35000',
    costForTwoMessage: '₹350 for two',
    cuisines: ['Pizzas'],
    avgRating: 3.6,
    feeDetails: {
      restaurantId: '98999',
      fees: [
        {
          name: 'distance',
          fee: 3800,
        },
        {
          name: 'time',
        },
        {
          name: 'special',
        },
      ],
      totalFee: 3800,
      icon: 'v1648635511/Delivery_fee_new_cjxumu',
      message: '2.2 kms | ₹38 Delivery fee will apply',
    },
    parentId: '721',
    avgRatingString: '3.6',
    totalRatingsString: '1K+ ratings',
    sla: {
      restaurantId: '98999',
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      lastMileTravel: 2.2,
      serviceability: 'SERVICEABLE',
      stressFactor: 0.7094384,
      rainMode: 'RAIN_MODE_NONE',
      longDistance: 'LONG_DISTANCE_NOT_LONG_DISTANCE',
      zoneId: 2829,
      slaString: '25 MINS',
      lastMileTravelString: '2.2 km',
      iconType: 'ICON_TYPE_EMPTY',
    },
    availability: {
      nextCloseTime: '2023-09-14 01:00:00',
      visibility: true,
      opened: true,
      restaurantClosedMeta: {},
    },
    aggregatedDiscountInfo: {
      header: '50% off',
      shortDescriptionList: [
        {
          meta: '50% off | Use SWIGGYIT',
          discountType: 'Percentage',
          operationType: 'RESTAURANT',
        },
        {
          discountType: 'Percentage',
          operationType: 'RESTAURANT',
        },
      ],
      descriptionList: [
        {
          meta: '50% off up to ₹100 | Use code SWIGGYIT',
          discountType: 'Percentage',
          operationType: 'RESTAURANT',
        },
        {
          meta: '20% off up to ₹100 | Above ₹249',
          discountType: 'Percentage',
          operationType: 'RESTAURANT',
        },
      ],
      visible: true,
    },
    badges: {},
    slugString: 'pizza-hut-north-eye-mall-sector-50',
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
          'Pizza hut at shop no 3&4,Ground& Mez,Floor, central lobby at block c, north eyemall plotno GH-01/A SECTOR-74 Noida, DADRI Tehsil-1 , Gautamm Buuddha Nafar (uttar pradesh) 201301',
      },
      {
        title: 'Cuisines',
        message: 'Pizzas',
      },
    ],
    logo: 'rng/md/carousel/production/cztbor82z4wcxssgnaje',
    totalRatings: 1000,
    aggregatedDiscountInfoV2: {
      header: '50% off',
      shortDescriptionList: [
        {
          meta: '50% off | Use SWIGGYIT',
          discountType: 'Percentage',
          operationType: 'RESTAURANT',
        },
        {
          discountType: 'Percentage',
          operationType: 'RESTAURANT',
        },
      ],
      descriptionList: [
        {
          meta: '50% off up to ₹100 | Use code SWIGGYIT',
          discountType: 'Percentage',
          operationType: 'RESTAURANT',
        },
        {
          meta: '20% off up to ₹100 | Above ₹249',
          discountType: 'Percentage',
          operationType: 'RESTAURANT',
        },
      ],
      couponDetailsCta: 'View coupon details',
    },
    type: 'F',
    headerBanner: {
      url: 'swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/98999',
    },
    expectationNotifiers: [
      {
        text: '2.2 kms | ₹38 Delivery fee will apply',
        icon: {
          imageId: 'v1648635511/Delivery_fee_new_cjxumu',
        },
        popup: {
          cta: {},
        },
        type: 'DISTANCE_FEE_NON_FOOD_LM',
        enrichedText: '<b>2.2 kms</b> | ₹38 Delivery fee will apply',
        halfCardPopup: {
          halfCardPopupHeader: {},
        },
      },
    ],
    generalPurposeInfoListV2: [
      {
        cta: {
          info: {
            recordings: {},
          },
          linkCta: {},
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
    cartOrderabilityNudgeBanner: {
      parameters: {},
      presentation: {},
    },
    latLong: '28.5718911,77.3885293',
  },
  items: [
    {
      menuItem: {
        id: '114792578',
        name: 'Super Value Deal : 2 Medium Veg Pizzas starting at Rs 649 (Save Upto 41%).',
        category: 'One Plus One Medium @649',
        description: 'Serves 1 | Choose any 2 of your Favorite Veg Medium Pizza',
        imageId: '2d34f1c2c669eab6821dd0ee068590e4',
        inStock: 1,
        isVeg: 1,
        variants: {},
        variantsV2: {
          variantGroups: [
            {
              groupId: '27019079',
              name: 'Choose 1st Pizza',
              variations: [
                {
                  name: 'Margherita',
                  price: 324.5,
                  default: 1,
                  id: '85823367',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27019081',
                    variationId: '85823384',
                  },
                },
                {
                  name: 'Schezwan Margherita',
                  price: 324.5,
                  id: '85823368',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27019081',
                    variationId: '85823384',
                  },
                },
                {
                  name: 'Corn & Cheese',
                  price: 324.5,
                  id: '85823369',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27019081',
                    variationId: '85823384',
                  },
                },
                {
                  name: 'Veggie Feast',
                  price: 324.5,
                  id: '85823370',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27019081',
                    variationId: '85823384',
                  },
                },
                {
                  name: 'Spiced Paneer',
                  price: 324.5,
                  id: '85823371',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27019081',
                    variationId: '85823384',
                  },
                },
                {
                  name: 'Mexican Fiesta',
                  price: 374.5,
                  id: '85823372',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27019081',
                    variationId: '85823384',
                  },
                },
                {
                  name: 'Cheezy Mushroom Magic',
                  price: 374.5,
                  id: '85823373',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27019081',
                    variationId: '85823384',
                  },
                },
                {
                  name: 'Tandoori Paneer',
                  price: 374.5,
                  id: '85823374',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27019081',
                    variationId: '85823384',
                  },
                },
                {
                  name: 'Contry Feast',
                  price: 374.5,
                  id: '85823375',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27019081',
                    variationId: '85823384',
                  },
                },
                {
                  name: 'Farmers Pick',
                  price: 374.5,
                  id: '94172102',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27019081',
                    variationId: '85823384',
                  },
                },
                {
                  name: 'Ultimate Tandoori Veggie',
                  price: 374.5,
                  id: '85823376',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27019081',
                    variationId: '85823384',
                  },
                },
                {
                  name: 'Mazedar Makhni Paneer',
                  price: 374.5,
                  id: '85823378',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27019081',
                    variationId: '85823384',
                  },
                },
                {
                  name: 'Awesome American Cheesy',
                  price: 374.5,
                  id: '85823380',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27019081',
                    variationId: '85823384',
                  },
                },
                {
                  name: 'Veggie Supreme',
                  price: 374.5,
                  id: '85823382',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27019081',
                    variationId: '85823384',
                  },
                },
                {
                  name: 'Veg Exotica',
                  price: 374.5,
                  id: '94172103',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27019081',
                    variationId: '85823384',
                  },
                },
              ],
            },
            {
              groupId: '27019081',
              name: 'Choose 2nd Pizza',
              variations: [
                {
                  name: 'Margherita',
                  price: 324.5,
                  default: 1,
                  id: '85823384',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Schezwan Margherita',
                  price: 324.5,
                  id: '85823386',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Corn & Cheese',
                  price: 324.5,
                  id: '85823389',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Veggie Feast',
                  price: 324.5,
                  id: '85823392',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Spiced Paneer',
                  price: 324.5,
                  id: '85823395',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Mexican Fiesta',
                  price: 374.5,
                  id: '85823398',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Cheezy Mushroom Magic',
                  price: 374.5,
                  id: '85823401',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Tandoori Paneer',
                  price: 374.5,
                  id: '85823404',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Contry Feast',
                  price: 374.5,
                  id: '85823407',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Ultimate Tandoori Veggie',
                  price: 374.5,
                  id: '85823409',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Mazedar Makhni Paneer',
                  price: 374.5,
                  id: '85823411',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Farmers Pick',
                  price: 374.5,
                  id: '94172104',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Awesome American Cheesy',
                  price: 374.5,
                  id: '85823413',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Veggie Supreme',
                  price: 374.5,
                  id: '85823415',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Veg Exotica',
                  price: 374.5,
                  id: '94172105',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
              ],
            },
          ],
          pricingModels: [
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823367',
                },
                {
                  groupId: '27019081',
                  variationId: '85823384',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823367',
                },
                {
                  groupId: '27019081',
                  variationId: '85823386',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823367',
                },
                {
                  groupId: '27019081',
                  variationId: '85823389',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823367',
                },
                {
                  groupId: '27019081',
                  variationId: '85823392',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823367',
                },
                {
                  groupId: '27019081',
                  variationId: '85823395',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823367',
                },
                {
                  groupId: '27019081',
                  variationId: '85823398',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823367',
                },
                {
                  groupId: '27019081',
                  variationId: '85823401',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823367',
                },
                {
                  groupId: '27019081',
                  variationId: '85823404',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823367',
                },
                {
                  groupId: '27019081',
                  variationId: '85823407',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823367',
                },
                {
                  groupId: '27019081',
                  variationId: '85823409',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823367',
                },
                {
                  groupId: '27019081',
                  variationId: '85823411',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823367',
                },
                {
                  groupId: '27019081',
                  variationId: '94172104',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823367',
                },
                {
                  groupId: '27019081',
                  variationId: '85823413',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823367',
                },
                {
                  groupId: '27019081',
                  variationId: '85823415',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823367',
                },
                {
                  groupId: '27019081',
                  variationId: '94172105',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823368',
                },
                {
                  groupId: '27019081',
                  variationId: '85823384',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823368',
                },
                {
                  groupId: '27019081',
                  variationId: '85823386',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823368',
                },
                {
                  groupId: '27019081',
                  variationId: '85823389',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823368',
                },
                {
                  groupId: '27019081',
                  variationId: '85823392',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823368',
                },
                {
                  groupId: '27019081',
                  variationId: '85823395',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823368',
                },
                {
                  groupId: '27019081',
                  variationId: '85823398',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823368',
                },
                {
                  groupId: '27019081',
                  variationId: '85823401',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823368',
                },
                {
                  groupId: '27019081',
                  variationId: '85823404',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823368',
                },
                {
                  groupId: '27019081',
                  variationId: '85823407',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823368',
                },
                {
                  groupId: '27019081',
                  variationId: '85823409',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823368',
                },
                {
                  groupId: '27019081',
                  variationId: '85823411',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823368',
                },
                {
                  groupId: '27019081',
                  variationId: '94172104',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823368',
                },
                {
                  groupId: '27019081',
                  variationId: '85823413',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823368',
                },
                {
                  groupId: '27019081',
                  variationId: '85823415',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823368',
                },
                {
                  groupId: '27019081',
                  variationId: '94172105',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823369',
                },
                {
                  groupId: '27019081',
                  variationId: '85823384',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823369',
                },
                {
                  groupId: '27019081',
                  variationId: '85823386',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823369',
                },
                {
                  groupId: '27019081',
                  variationId: '85823389',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823369',
                },
                {
                  groupId: '27019081',
                  variationId: '85823392',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823369',
                },
                {
                  groupId: '27019081',
                  variationId: '85823395',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823369',
                },
                {
                  groupId: '27019081',
                  variationId: '85823398',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823369',
                },
                {
                  groupId: '27019081',
                  variationId: '85823401',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823369',
                },
                {
                  groupId: '27019081',
                  variationId: '85823404',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823369',
                },
                {
                  groupId: '27019081',
                  variationId: '85823407',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823369',
                },
                {
                  groupId: '27019081',
                  variationId: '85823409',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823369',
                },
                {
                  groupId: '27019081',
                  variationId: '85823411',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823369',
                },
                {
                  groupId: '27019081',
                  variationId: '94172104',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823369',
                },
                {
                  groupId: '27019081',
                  variationId: '85823413',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823369',
                },
                {
                  groupId: '27019081',
                  variationId: '85823415',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823369',
                },
                {
                  groupId: '27019081',
                  variationId: '94172105',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823370',
                },
                {
                  groupId: '27019081',
                  variationId: '85823384',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823370',
                },
                {
                  groupId: '27019081',
                  variationId: '85823386',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823370',
                },
                {
                  groupId: '27019081',
                  variationId: '85823389',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823370',
                },
                {
                  groupId: '27019081',
                  variationId: '85823392',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823370',
                },
                {
                  groupId: '27019081',
                  variationId: '85823395',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823370',
                },
                {
                  groupId: '27019081',
                  variationId: '85823398',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823370',
                },
                {
                  groupId: '27019081',
                  variationId: '85823401',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823370',
                },
                {
                  groupId: '27019081',
                  variationId: '85823404',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823370',
                },
                {
                  groupId: '27019081',
                  variationId: '85823407',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823370',
                },
                {
                  groupId: '27019081',
                  variationId: '85823409',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823370',
                },
                {
                  groupId: '27019081',
                  variationId: '85823411',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823370',
                },
                {
                  groupId: '27019081',
                  variationId: '94172104',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823370',
                },
                {
                  groupId: '27019081',
                  variationId: '85823413',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823370',
                },
                {
                  groupId: '27019081',
                  variationId: '85823415',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823370',
                },
                {
                  groupId: '27019081',
                  variationId: '94172105',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823371',
                },
                {
                  groupId: '27019081',
                  variationId: '85823384',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823371',
                },
                {
                  groupId: '27019081',
                  variationId: '85823386',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823371',
                },
                {
                  groupId: '27019081',
                  variationId: '85823389',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823371',
                },
                {
                  groupId: '27019081',
                  variationId: '85823392',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823371',
                },
                {
                  groupId: '27019081',
                  variationId: '85823395',
                },
              ],
              price: 64900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823371',
                },
                {
                  groupId: '27019081',
                  variationId: '85823398',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823371',
                },
                {
                  groupId: '27019081',
                  variationId: '85823401',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823371',
                },
                {
                  groupId: '27019081',
                  variationId: '85823404',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823371',
                },
                {
                  groupId: '27019081',
                  variationId: '85823407',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823371',
                },
                {
                  groupId: '27019081',
                  variationId: '85823409',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823371',
                },
                {
                  groupId: '27019081',
                  variationId: '85823411',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823371',
                },
                {
                  groupId: '27019081',
                  variationId: '94172104',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823371',
                },
                {
                  groupId: '27019081',
                  variationId: '85823413',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823371',
                },
                {
                  groupId: '27019081',
                  variationId: '85823415',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823371',
                },
                {
                  groupId: '27019081',
                  variationId: '94172105',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823372',
                },
                {
                  groupId: '27019081',
                  variationId: '85823384',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823372',
                },
                {
                  groupId: '27019081',
                  variationId: '85823386',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823372',
                },
                {
                  groupId: '27019081',
                  variationId: '85823389',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823372',
                },
                {
                  groupId: '27019081',
                  variationId: '85823392',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823372',
                },
                {
                  groupId: '27019081',
                  variationId: '85823395',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823372',
                },
                {
                  groupId: '27019081',
                  variationId: '85823398',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823372',
                },
                {
                  groupId: '27019081',
                  variationId: '85823401',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823372',
                },
                {
                  groupId: '27019081',
                  variationId: '85823404',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823372',
                },
                {
                  groupId: '27019081',
                  variationId: '85823407',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823372',
                },
                {
                  groupId: '27019081',
                  variationId: '85823409',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823372',
                },
                {
                  groupId: '27019081',
                  variationId: '85823411',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823372',
                },
                {
                  groupId: '27019081',
                  variationId: '94172104',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823372',
                },
                {
                  groupId: '27019081',
                  variationId: '85823413',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823372',
                },
                {
                  groupId: '27019081',
                  variationId: '85823415',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823372',
                },
                {
                  groupId: '27019081',
                  variationId: '94172105',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823373',
                },
                {
                  groupId: '27019081',
                  variationId: '85823384',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823373',
                },
                {
                  groupId: '27019081',
                  variationId: '85823386',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823373',
                },
                {
                  groupId: '27019081',
                  variationId: '85823389',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823373',
                },
                {
                  groupId: '27019081',
                  variationId: '85823392',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823373',
                },
                {
                  groupId: '27019081',
                  variationId: '85823395',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823373',
                },
                {
                  groupId: '27019081',
                  variationId: '85823398',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823373',
                },
                {
                  groupId: '27019081',
                  variationId: '85823401',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823373',
                },
                {
                  groupId: '27019081',
                  variationId: '85823404',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823373',
                },
                {
                  groupId: '27019081',
                  variationId: '85823407',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823373',
                },
                {
                  groupId: '27019081',
                  variationId: '85823409',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823373',
                },
                {
                  groupId: '27019081',
                  variationId: '85823411',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823373',
                },
                {
                  groupId: '27019081',
                  variationId: '94172104',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823373',
                },
                {
                  groupId: '27019081',
                  variationId: '85823413',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823373',
                },
                {
                  groupId: '27019081',
                  variationId: '85823415',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823373',
                },
                {
                  groupId: '27019081',
                  variationId: '94172105',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823374',
                },
                {
                  groupId: '27019081',
                  variationId: '85823384',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823374',
                },
                {
                  groupId: '27019081',
                  variationId: '85823386',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823374',
                },
                {
                  groupId: '27019081',
                  variationId: '85823389',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823374',
                },
                {
                  groupId: '27019081',
                  variationId: '85823392',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823374',
                },
                {
                  groupId: '27019081',
                  variationId: '85823395',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823374',
                },
                {
                  groupId: '27019081',
                  variationId: '85823398',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823374',
                },
                {
                  groupId: '27019081',
                  variationId: '85823401',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823374',
                },
                {
                  groupId: '27019081',
                  variationId: '85823404',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823374',
                },
                {
                  groupId: '27019081',
                  variationId: '85823407',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823374',
                },
                {
                  groupId: '27019081',
                  variationId: '85823409',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823374',
                },
                {
                  groupId: '27019081',
                  variationId: '85823411',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823374',
                },
                {
                  groupId: '27019081',
                  variationId: '94172104',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823374',
                },
                {
                  groupId: '27019081',
                  variationId: '85823413',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823374',
                },
                {
                  groupId: '27019081',
                  variationId: '85823415',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823374',
                },
                {
                  groupId: '27019081',
                  variationId: '94172105',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823375',
                },
                {
                  groupId: '27019081',
                  variationId: '85823384',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823375',
                },
                {
                  groupId: '27019081',
                  variationId: '85823386',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823375',
                },
                {
                  groupId: '27019081',
                  variationId: '85823389',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823375',
                },
                {
                  groupId: '27019081',
                  variationId: '85823392',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823375',
                },
                {
                  groupId: '27019081',
                  variationId: '85823395',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823375',
                },
                {
                  groupId: '27019081',
                  variationId: '85823398',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823375',
                },
                {
                  groupId: '27019081',
                  variationId: '85823401',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823375',
                },
                {
                  groupId: '27019081',
                  variationId: '85823404',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823375',
                },
                {
                  groupId: '27019081',
                  variationId: '85823407',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823375',
                },
                {
                  groupId: '27019081',
                  variationId: '85823409',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823375',
                },
                {
                  groupId: '27019081',
                  variationId: '85823411',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823375',
                },
                {
                  groupId: '27019081',
                  variationId: '94172104',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823375',
                },
                {
                  groupId: '27019081',
                  variationId: '85823413',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823375',
                },
                {
                  groupId: '27019081',
                  variationId: '85823415',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823375',
                },
                {
                  groupId: '27019081',
                  variationId: '94172105',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172102',
                },
                {
                  groupId: '27019081',
                  variationId: '85823384',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172102',
                },
                {
                  groupId: '27019081',
                  variationId: '85823386',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172102',
                },
                {
                  groupId: '27019081',
                  variationId: '85823389',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172102',
                },
                {
                  groupId: '27019081',
                  variationId: '85823392',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172102',
                },
                {
                  groupId: '27019081',
                  variationId: '85823395',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172102',
                },
                {
                  groupId: '27019081',
                  variationId: '85823398',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172102',
                },
                {
                  groupId: '27019081',
                  variationId: '85823401',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172102',
                },
                {
                  groupId: '27019081',
                  variationId: '85823404',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172102',
                },
                {
                  groupId: '27019081',
                  variationId: '85823407',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172102',
                },
                {
                  groupId: '27019081',
                  variationId: '85823409',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172102',
                },
                {
                  groupId: '27019081',
                  variationId: '85823411',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172102',
                },
                {
                  groupId: '27019081',
                  variationId: '94172104',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172102',
                },
                {
                  groupId: '27019081',
                  variationId: '85823413',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172102',
                },
                {
                  groupId: '27019081',
                  variationId: '85823415',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172102',
                },
                {
                  groupId: '27019081',
                  variationId: '94172105',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823376',
                },
                {
                  groupId: '27019081',
                  variationId: '85823384',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823376',
                },
                {
                  groupId: '27019081',
                  variationId: '85823386',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823376',
                },
                {
                  groupId: '27019081',
                  variationId: '85823389',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823376',
                },
                {
                  groupId: '27019081',
                  variationId: '85823392',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823376',
                },
                {
                  groupId: '27019081',
                  variationId: '85823395',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823376',
                },
                {
                  groupId: '27019081',
                  variationId: '85823398',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823376',
                },
                {
                  groupId: '27019081',
                  variationId: '85823401',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823376',
                },
                {
                  groupId: '27019081',
                  variationId: '85823404',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823376',
                },
                {
                  groupId: '27019081',
                  variationId: '85823407',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823376',
                },
                {
                  groupId: '27019081',
                  variationId: '85823409',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823376',
                },
                {
                  groupId: '27019081',
                  variationId: '85823411',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823376',
                },
                {
                  groupId: '27019081',
                  variationId: '94172104',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823376',
                },
                {
                  groupId: '27019081',
                  variationId: '85823413',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823376',
                },
                {
                  groupId: '27019081',
                  variationId: '85823415',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823376',
                },
                {
                  groupId: '27019081',
                  variationId: '94172105',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823378',
                },
                {
                  groupId: '27019081',
                  variationId: '85823384',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823378',
                },
                {
                  groupId: '27019081',
                  variationId: '85823386',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823378',
                },
                {
                  groupId: '27019081',
                  variationId: '85823389',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823378',
                },
                {
                  groupId: '27019081',
                  variationId: '85823392',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823378',
                },
                {
                  groupId: '27019081',
                  variationId: '85823395',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823378',
                },
                {
                  groupId: '27019081',
                  variationId: '85823398',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823378',
                },
                {
                  groupId: '27019081',
                  variationId: '85823401',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823378',
                },
                {
                  groupId: '27019081',
                  variationId: '85823404',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823378',
                },
                {
                  groupId: '27019081',
                  variationId: '85823407',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823378',
                },
                {
                  groupId: '27019081',
                  variationId: '85823409',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823378',
                },
                {
                  groupId: '27019081',
                  variationId: '85823411',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823378',
                },
                {
                  groupId: '27019081',
                  variationId: '94172104',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823378',
                },
                {
                  groupId: '27019081',
                  variationId: '85823413',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823378',
                },
                {
                  groupId: '27019081',
                  variationId: '85823415',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823378',
                },
                {
                  groupId: '27019081',
                  variationId: '94172105',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823380',
                },
                {
                  groupId: '27019081',
                  variationId: '85823384',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823380',
                },
                {
                  groupId: '27019081',
                  variationId: '85823386',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823380',
                },
                {
                  groupId: '27019081',
                  variationId: '85823389',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823380',
                },
                {
                  groupId: '27019081',
                  variationId: '85823392',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823380',
                },
                {
                  groupId: '27019081',
                  variationId: '85823395',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823380',
                },
                {
                  groupId: '27019081',
                  variationId: '85823398',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823380',
                },
                {
                  groupId: '27019081',
                  variationId: '85823401',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823380',
                },
                {
                  groupId: '27019081',
                  variationId: '85823404',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823380',
                },
                {
                  groupId: '27019081',
                  variationId: '85823407',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823380',
                },
                {
                  groupId: '27019081',
                  variationId: '85823409',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823380',
                },
                {
                  groupId: '27019081',
                  variationId: '85823411',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823380',
                },
                {
                  groupId: '27019081',
                  variationId: '94172104',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823380',
                },
                {
                  groupId: '27019081',
                  variationId: '85823413',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823380',
                },
                {
                  groupId: '27019081',
                  variationId: '85823415',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823380',
                },
                {
                  groupId: '27019081',
                  variationId: '94172105',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823382',
                },
                {
                  groupId: '27019081',
                  variationId: '85823384',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823382',
                },
                {
                  groupId: '27019081',
                  variationId: '85823386',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823382',
                },
                {
                  groupId: '27019081',
                  variationId: '85823389',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823382',
                },
                {
                  groupId: '27019081',
                  variationId: '85823392',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823382',
                },
                {
                  groupId: '27019081',
                  variationId: '85823395',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823382',
                },
                {
                  groupId: '27019081',
                  variationId: '85823398',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823382',
                },
                {
                  groupId: '27019081',
                  variationId: '85823401',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823382',
                },
                {
                  groupId: '27019081',
                  variationId: '85823404',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823382',
                },
                {
                  groupId: '27019081',
                  variationId: '85823407',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823382',
                },
                {
                  groupId: '27019081',
                  variationId: '85823409',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823382',
                },
                {
                  groupId: '27019081',
                  variationId: '85823411',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823382',
                },
                {
                  groupId: '27019081',
                  variationId: '94172104',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823382',
                },
                {
                  groupId: '27019081',
                  variationId: '85823413',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823382',
                },
                {
                  groupId: '27019081',
                  variationId: '85823415',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '85823382',
                },
                {
                  groupId: '27019081',
                  variationId: '94172105',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172103',
                },
                {
                  groupId: '27019081',
                  variationId: '85823384',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172103',
                },
                {
                  groupId: '27019081',
                  variationId: '85823386',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172103',
                },
                {
                  groupId: '27019081',
                  variationId: '85823389',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172103',
                },
                {
                  groupId: '27019081',
                  variationId: '85823392',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172103',
                },
                {
                  groupId: '27019081',
                  variationId: '85823395',
                },
              ],
              price: 69900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172103',
                },
                {
                  groupId: '27019081',
                  variationId: '85823398',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172103',
                },
                {
                  groupId: '27019081',
                  variationId: '85823401',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172103',
                },
                {
                  groupId: '27019081',
                  variationId: '85823404',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172103',
                },
                {
                  groupId: '27019081',
                  variationId: '85823407',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172103',
                },
                {
                  groupId: '27019081',
                  variationId: '85823409',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172103',
                },
                {
                  groupId: '27019081',
                  variationId: '85823411',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172103',
                },
                {
                  groupId: '27019081',
                  variationId: '94172104',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172103',
                },
                {
                  groupId: '27019081',
                  variationId: '85823413',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172103',
                },
                {
                  groupId: '27019081',
                  variationId: '85823415',
                },
              ],
              price: 74900,
            },
            {
              variations: [
                {
                  groupId: '27019079',
                  variationId: '94172103',
                },
                {
                  groupId: '27019081',
                  variationId: '94172105',
                },
              ],
              price: 74900,
            },
          ],
        },
        itemAttribute: {
          vegClassifier: 'VEG',
          portionSize: 'Serves 1',
        },
        defaultPrice: 64900,
        ribbon: {
          text: 'Bestseller',
          textColor: '#ffffff',
          topBackgroundColor: '#d53d4c',
          bottomBackgroundColor: '#b02331',
        },
        itemBadge: {},
        badgesV2: {},
        isBestseller: true,
      },
      quantity: 1,
    },
    {
      menuItem: {
        id: '113501611',
        name: 'Schezwan Margherita - New',
        category: 'Your Mood Your Pizza : New Pizza Launches',
        description:
          'Serves 1 | Your very own Margherita, now with a spicy twist! Loaded with our signature spicy schezwan sauce & 100% mozzarella cheese',
        imageId: '0e7df98b7cffdb0b88856464014ad2ff',
        inStock: 1,
        isVeg: 1,
        variants: {},
        variantsV2: {
          variantGroups: [
            {
              groupId: '26866132',
              name: 'Size',
              variations: [
                {
                  name: 'Personal',
                  default: 1,
                  id: '85209899',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '26866133',
                    variationId: '85209901',
                  },
                },
                {
                  name: 'Medium',
                  id: '85209900',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '26866133',
                    variationId: '85209904',
                  },
                },
              ],
            },
            {
              groupId: '26866133',
              name: 'Base',
              variations: [
                {
                  name: 'Pan',
                  price: 219,
                  default: 1,
                  id: '85209901',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'San Francisco Style',
                  price: 219,
                  id: '85209902',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Stuffed Crust - Cheese Maxx',
                  price: 294,
                  id: '85209903',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Pan',
                  price: 409,
                  id: '85209904',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'San Francisco Style',
                  price: 409,
                  id: '85209905',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Stuffed Crust - Cheese Maxx',
                  price: 508,
                  id: '85209907',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
              ],
            },
          ],
          pricingModels: [
            {
              variations: [
                {
                  groupId: '26866132',
                  variationId: '85209899',
                },
                {
                  groupId: '26866133',
                  variationId: '85209901',
                },
              ],
              price: 21900,
              addonCombinations: [
                {
                  groupId: '87736718',
                  addonId: '74244207',
                },
                {
                  groupId: '87736718',
                  addonId: '74244208',
                },
                {
                  groupId: '87736718',
                  addonId: '94931425',
                },
                {
                  groupId: '87736718',
                  addonId: '74244210',
                },
                {
                  groupId: '87736718',
                  addonId: '74244211',
                },
                {
                  groupId: '87736718',
                  addonId: '74244212',
                },
                {
                  groupId: '87736718',
                  addonId: '74244213',
                },
                {
                  groupId: '87736718',
                  addonId: '74244214',
                },
                {
                  groupId: '87736718',
                  addonId: '74244215',
                },
                {
                  groupId: '87736718',
                  addonId: '74244216',
                },
                {
                  groupId: '87736718',
                  addonId: '74244217',
                },
                {
                  groupId: '87736718',
                  addonId: '74244218',
                },
                {
                  groupId: '87736718',
                  addonId: '74244219',
                },
                {
                  groupId: '87736713',
                  addonId: '74244200',
                },
                {
                  groupId: '87736713',
                  addonId: '97877721',
                },
                {
                  groupId: '87736713',
                  addonId: '97877722',
                },
                {
                  groupId: '87736713',
                  addonId: '97877723',
                },
                {
                  groupId: '87736713',
                  addonId: '97877724',
                },
                {
                  groupId: '87736713',
                  addonId: '97877725',
                },
              ],
            },
            {
              variations: [
                {
                  groupId: '26866132',
                  variationId: '85209899',
                },
                {
                  groupId: '26866133',
                  variationId: '85209902',
                },
              ],
              price: 21900,
              addonCombinations: [
                {
                  groupId: '87736718',
                  addonId: '74244207',
                },
                {
                  groupId: '87736718',
                  addonId: '74244208',
                },
                {
                  groupId: '87736718',
                  addonId: '94931425',
                },
                {
                  groupId: '87736718',
                  addonId: '74244210',
                },
                {
                  groupId: '87736718',
                  addonId: '74244211',
                },
                {
                  groupId: '87736718',
                  addonId: '74244212',
                },
                {
                  groupId: '87736718',
                  addonId: '74244213',
                },
                {
                  groupId: '87736718',
                  addonId: '74244214',
                },
                {
                  groupId: '87736718',
                  addonId: '74244215',
                },
                {
                  groupId: '87736718',
                  addonId: '74244216',
                },
                {
                  groupId: '87736718',
                  addonId: '74244217',
                },
                {
                  groupId: '87736718',
                  addonId: '74244218',
                },
                {
                  groupId: '87736718',
                  addonId: '74244219',
                },
                {
                  groupId: '87736713',
                  addonId: '74244200',
                },
                {
                  groupId: '87736713',
                  addonId: '97877721',
                },
                {
                  groupId: '87736713',
                  addonId: '97877722',
                },
                {
                  groupId: '87736713',
                  addonId: '97877723',
                },
                {
                  groupId: '87736713',
                  addonId: '97877724',
                },
                {
                  groupId: '87736713',
                  addonId: '97877725',
                },
              ],
            },
            {
              variations: [
                {
                  groupId: '26866132',
                  variationId: '85209899',
                },
                {
                  groupId: '26866133',
                  variationId: '85209903',
                },
              ],
              price: 29400,
              addonCombinations: [
                {
                  groupId: '87736718',
                  addonId: '74244207',
                },
                {
                  groupId: '87736718',
                  addonId: '74244208',
                },
                {
                  groupId: '87736718',
                  addonId: '94931425',
                },
                {
                  groupId: '87736718',
                  addonId: '74244210',
                },
                {
                  groupId: '87736718',
                  addonId: '74244211',
                },
                {
                  groupId: '87736718',
                  addonId: '74244212',
                },
                {
                  groupId: '87736718',
                  addonId: '74244213',
                },
                {
                  groupId: '87736718',
                  addonId: '74244214',
                },
                {
                  groupId: '87736718',
                  addonId: '74244215',
                },
                {
                  groupId: '87736718',
                  addonId: '74244216',
                },
                {
                  groupId: '87736718',
                  addonId: '74244217',
                },
                {
                  groupId: '87736718',
                  addonId: '74244218',
                },
                {
                  groupId: '87736718',
                  addonId: '74244219',
                },
                {
                  groupId: '87736713',
                  addonId: '74244200',
                },
                {
                  groupId: '87736713',
                  addonId: '97877721',
                },
                {
                  groupId: '87736713',
                  addonId: '97877722',
                },
                {
                  groupId: '87736713',
                  addonId: '97877723',
                },
                {
                  groupId: '87736713',
                  addonId: '97877724',
                },
                {
                  groupId: '87736713',
                  addonId: '97877725',
                },
              ],
            },
            {
              variations: [
                {
                  groupId: '26866132',
                  variationId: '85209900',
                },
                {
                  groupId: '26866133',
                  variationId: '85209904',
                },
              ],
              price: 40900,
              addonCombinations: [
                {
                  groupId: '87736714',
                  addonId: '74244228',
                },
                {
                  groupId: '87736714',
                  addonId: '74244229',
                },
                {
                  groupId: '87736714',
                  addonId: '94931426',
                },
                {
                  groupId: '87736714',
                  addonId: '74244231',
                },
                {
                  groupId: '87736714',
                  addonId: '74244232',
                },
                {
                  groupId: '87736714',
                  addonId: '74244233',
                },
                {
                  groupId: '87736714',
                  addonId: '74244234',
                },
                {
                  groupId: '87736714',
                  addonId: '74244235',
                },
                {
                  groupId: '87736714',
                  addonId: '74244236',
                },
                {
                  groupId: '87736714',
                  addonId: '74244237',
                },
                {
                  groupId: '87736714',
                  addonId: '74244238',
                },
                {
                  groupId: '87736714',
                  addonId: '74244239',
                },
                {
                  groupId: '87736714',
                  addonId: '74244240',
                },
                {
                  groupId: '87736713',
                  addonId: '74244200',
                },
                {
                  groupId: '87736713',
                  addonId: '97877721',
                },
                {
                  groupId: '87736713',
                  addonId: '97877722',
                },
                {
                  groupId: '87736713',
                  addonId: '97877723',
                },
                {
                  groupId: '87736713',
                  addonId: '97877724',
                },
                {
                  groupId: '87736713',
                  addonId: '97877725',
                },
              ],
            },
            {
              variations: [
                {
                  groupId: '26866132',
                  variationId: '85209900',
                },
                {
                  groupId: '26866133',
                  variationId: '85209905',
                },
              ],
              price: 40900,
              addonCombinations: [
                {
                  groupId: '87736714',
                  addonId: '74244228',
                },
                {
                  groupId: '87736714',
                  addonId: '74244229',
                },
                {
                  groupId: '87736714',
                  addonId: '94931426',
                },
                {
                  groupId: '87736714',
                  addonId: '74244231',
                },
                {
                  groupId: '87736714',
                  addonId: '74244232',
                },
                {
                  groupId: '87736714',
                  addonId: '74244233',
                },
                {
                  groupId: '87736714',
                  addonId: '74244234',
                },
                {
                  groupId: '87736714',
                  addonId: '74244235',
                },
                {
                  groupId: '87736714',
                  addonId: '74244236',
                },
                {
                  groupId: '87736714',
                  addonId: '74244237',
                },
                {
                  groupId: '87736714',
                  addonId: '74244238',
                },
                {
                  groupId: '87736714',
                  addonId: '74244239',
                },
                {
                  groupId: '87736714',
                  addonId: '74244240',
                },
                {
                  groupId: '87736713',
                  addonId: '74244200',
                },
                {
                  groupId: '87736713',
                  addonId: '97877721',
                },
                {
                  groupId: '87736713',
                  addonId: '97877722',
                },
                {
                  groupId: '87736713',
                  addonId: '97877723',
                },
                {
                  groupId: '87736713',
                  addonId: '97877724',
                },
                {
                  groupId: '87736713',
                  addonId: '97877725',
                },
              ],
            },
            {
              variations: [
                {
                  groupId: '26866132',
                  variationId: '85209900',
                },
                {
                  groupId: '26866133',
                  variationId: '85209907',
                },
              ],
              price: 50800,
              addonCombinations: [
                {
                  groupId: '87736714',
                  addonId: '74244228',
                },
                {
                  groupId: '87736714',
                  addonId: '74244229',
                },
                {
                  groupId: '87736714',
                  addonId: '94931426',
                },
                {
                  groupId: '87736714',
                  addonId: '74244231',
                },
                {
                  groupId: '87736714',
                  addonId: '74244232',
                },
                {
                  groupId: '87736714',
                  addonId: '74244233',
                },
                {
                  groupId: '87736714',
                  addonId: '74244234',
                },
                {
                  groupId: '87736714',
                  addonId: '74244235',
                },
                {
                  groupId: '87736714',
                  addonId: '74244236',
                },
                {
                  groupId: '87736714',
                  addonId: '74244237',
                },
                {
                  groupId: '87736714',
                  addonId: '74244238',
                },
                {
                  groupId: '87736714',
                  addonId: '74244239',
                },
                {
                  groupId: '87736714',
                  addonId: '74244240',
                },
                {
                  groupId: '87736713',
                  addonId: '74244200',
                },
                {
                  groupId: '87736713',
                  addonId: '97877721',
                },
                {
                  groupId: '87736713',
                  addonId: '97877722',
                },
                {
                  groupId: '87736713',
                  addonId: '97877723',
                },
                {
                  groupId: '87736713',
                  addonId: '97877724',
                },
                {
                  groupId: '87736713',
                  addonId: '97877725',
                },
              ],
            },
          ],
        },
        addons: [
          {
            groupId: '87736713',
            groupName: 'Add Ons',
            choices: [
              {
                id: '74244200',
                name: 'Pepsi Pet Bottle',
                price: 5700,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '97877721',
                name: 'Classic BreadStix : Flat Rs 20 Off',
                price: 9900,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '97877722',
                name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                price: 13900,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '97877723',
                name: 'Creamy BreadStix : Flat Rs 20 Off',
                price: 14900,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '97877724',
                name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                price: 10900,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '97877725',
                name: 'Choco Volcano : Flat Rs 20 Off',
                price: 10900,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
            ],
            maxAddons: 6,
            maxFreeAddons: -1,
          },
          {
            groupId: '87736714',
            groupName: 'Toppings.',
            choices: [
              {
                id: '74244228',
                name: 'Cheese',
                price: 8500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244229',
                name: 'Black Olives',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '94931426',
                name: 'Baby Corn',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244231',
                name: 'Capsicum',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244232',
                name: 'Herbed Veggies',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244233',
                name: 'Jalapeno',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244234',
                name: 'Mushroom',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244235',
                name: 'Onion',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244236',
                name: 'Paneer',
                price: 7500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244237',
                name: 'Red Paprika',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244238',
                name: 'Red Capsicum',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244239',
                name: 'Sweet Corn',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244240',
                name: 'Tomato',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
            ],
            maxAddons: 2,
            maxFreeAddons: -1,
          },
          {
            groupId: '87736718',
            groupName: 'Toppings',
            choices: [
              {
                id: '74244207',
                name: 'Cheese',
                price: 6500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244208',
                name: 'Black Olives',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '94931425',
                name: 'Baby Corn',
                price: 4500,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244210',
                name: 'Capsicum',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244211',
                name: 'Herbed Veggies',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244212',
                name: 'Jalapeno',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244213',
                name: 'Mushroom',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244214',
                name: 'Onion',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244215',
                name: 'Paneer',
                price: 5500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244216',
                name: 'Red Paprika',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244217',
                name: 'Red Capsicum',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244218',
                name: 'Sweet Corn',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244219',
                name: 'Tomato',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
            ],
            maxAddons: 2,
            maxFreeAddons: -1,
          },
        ],
        itemAttribute: {
          vegClassifier: 'VEG',
          portionSize: 'Serves 1',
        },
        defaultPrice: 21900,
        ribbon: {},
        type: 'ITEM',
        offerTags: [
          {
            title: '50% OFF',
            subTitle: 'USE SWIGGYIT',
            textColor: '#DB6742',
            backgroundColor: '#FAE8E3',
          },
        ],
        itemBadge: {},
        badgesV2: {},
        ratings: {
          aggregatedRating: {},
        },
      },
      quantity: 3,
    },
    {
      menuItem: {
        id: '114792512',
        name: 'Mazedar Makhni Paneer - New',
        category: 'Your Mood Your Pizza : New Pizza Launches',
        description:
          'Serves 1 | A treat for all makhni lovers. Spiced paneer, onion, juicy red bell peppers with our new flavourful makhni sauce, topped with 100% mozzarella cheese and buttery spice sprinkle',
        imageId: 'bf62afee565475fb92a204206321a41c',
        inStock: 1,
        isVeg: 1,
        variants: {},
        variantsV2: {
          variantGroups: [
            {
              groupId: '27018887',
              name: 'Size',
              variations: [
                {
                  name: 'Personal',
                  default: 1,
                  id: '85822303',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27018889',
                    variationId: '85822307',
                  },
                },
                {
                  name: 'Medium',
                  id: '85822304',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27018889',
                    variationId: '85822312',
                  },
                },
              ],
            },
            {
              groupId: '27018889',
              name: 'Base',
              variations: [
                {
                  name: 'Pan',
                  price: 379,
                  default: 1,
                  id: '85822307',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'San Francisco Style',
                  price: 379,
                  id: '85822308',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Stuffed Crust - Cheese Maxx',
                  price: 454,
                  id: '85822310',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Pan',
                  price: 639,
                  id: '85822312',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'San Francisco Style',
                  price: 639,
                  id: '85822315',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Stuffed Crust - Cheese Maxx',
                  price: 738,
                  id: '85822317',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
              ],
            },
          ],
          pricingModels: [
            {
              variations: [
                {
                  groupId: '27018887',
                  variationId: '85822303',
                },
                {
                  groupId: '27018889',
                  variationId: '85822307',
                },
              ],
              price: 37900,
              addonCombinations: [
                {
                  groupId: '87949532',
                  addonId: '74244207',
                },
                {
                  groupId: '87949532',
                  addonId: '74244208',
                },
                {
                  groupId: '87949532',
                  addonId: '94931425',
                },
                {
                  groupId: '87949532',
                  addonId: '74244210',
                },
                {
                  groupId: '87949532',
                  addonId: '74244211',
                },
                {
                  groupId: '87949532',
                  addonId: '74244212',
                },
                {
                  groupId: '87949532',
                  addonId: '74244213',
                },
                {
                  groupId: '87949532',
                  addonId: '74244214',
                },
                {
                  groupId: '87949532',
                  addonId: '74244215',
                },
                {
                  groupId: '87949532',
                  addonId: '74244216',
                },
                {
                  groupId: '87949532',
                  addonId: '74244217',
                },
                {
                  groupId: '87949532',
                  addonId: '74244218',
                },
                {
                  groupId: '87949532',
                  addonId: '74244219',
                },
                {
                  groupId: '87949525',
                  addonId: '74244200',
                },
                {
                  groupId: '87949525',
                  addonId: '97877721',
                },
                {
                  groupId: '87949525',
                  addonId: '97877722',
                },
                {
                  groupId: '87949525',
                  addonId: '97877723',
                },
                {
                  groupId: '87949525',
                  addonId: '97877724',
                },
                {
                  groupId: '87949525',
                  addonId: '97877725',
                },
              ],
            },
            {
              variations: [
                {
                  groupId: '27018887',
                  variationId: '85822303',
                },
                {
                  groupId: '27018889',
                  variationId: '85822308',
                },
              ],
              price: 37900,
              addonCombinations: [
                {
                  groupId: '87949532',
                  addonId: '74244207',
                },
                {
                  groupId: '87949532',
                  addonId: '74244208',
                },
                {
                  groupId: '87949532',
                  addonId: '94931425',
                },
                {
                  groupId: '87949532',
                  addonId: '74244210',
                },
                {
                  groupId: '87949532',
                  addonId: '74244211',
                },
                {
                  groupId: '87949532',
                  addonId: '74244212',
                },
                {
                  groupId: '87949532',
                  addonId: '74244213',
                },
                {
                  groupId: '87949532',
                  addonId: '74244214',
                },
                {
                  groupId: '87949532',
                  addonId: '74244215',
                },
                {
                  groupId: '87949532',
                  addonId: '74244216',
                },
                {
                  groupId: '87949532',
                  addonId: '74244217',
                },
                {
                  groupId: '87949532',
                  addonId: '74244218',
                },
                {
                  groupId: '87949532',
                  addonId: '74244219',
                },
                {
                  groupId: '87949525',
                  addonId: '74244200',
                },
                {
                  groupId: '87949525',
                  addonId: '97877721',
                },
                {
                  groupId: '87949525',
                  addonId: '97877722',
                },
                {
                  groupId: '87949525',
                  addonId: '97877723',
                },
                {
                  groupId: '87949525',
                  addonId: '97877724',
                },
                {
                  groupId: '87949525',
                  addonId: '97877725',
                },
              ],
            },
            {
              variations: [
                {
                  groupId: '27018887',
                  variationId: '85822303',
                },
                {
                  groupId: '27018889',
                  variationId: '85822310',
                },
              ],
              price: 45400,
              addonCombinations: [
                {
                  groupId: '87949532',
                  addonId: '74244207',
                },
                {
                  groupId: '87949532',
                  addonId: '74244208',
                },
                {
                  groupId: '87949532',
                  addonId: '94931425',
                },
                {
                  groupId: '87949532',
                  addonId: '74244210',
                },
                {
                  groupId: '87949532',
                  addonId: '74244211',
                },
                {
                  groupId: '87949532',
                  addonId: '74244212',
                },
                {
                  groupId: '87949532',
                  addonId: '74244213',
                },
                {
                  groupId: '87949532',
                  addonId: '74244214',
                },
                {
                  groupId: '87949532',
                  addonId: '74244215',
                },
                {
                  groupId: '87949532',
                  addonId: '74244216',
                },
                {
                  groupId: '87949532',
                  addonId: '74244217',
                },
                {
                  groupId: '87949532',
                  addonId: '74244218',
                },
                {
                  groupId: '87949532',
                  addonId: '74244219',
                },
                {
                  groupId: '87949525',
                  addonId: '74244200',
                },
                {
                  groupId: '87949525',
                  addonId: '97877721',
                },
                {
                  groupId: '87949525',
                  addonId: '97877722',
                },
                {
                  groupId: '87949525',
                  addonId: '97877723',
                },
                {
                  groupId: '87949525',
                  addonId: '97877724',
                },
                {
                  groupId: '87949525',
                  addonId: '97877725',
                },
              ],
            },
            {
              variations: [
                {
                  groupId: '27018887',
                  variationId: '85822304',
                },
                {
                  groupId: '27018889',
                  variationId: '85822312',
                },
              ],
              price: 63900,
              addonCombinations: [
                {
                  groupId: '87949528',
                  addonId: '74244228',
                },
                {
                  groupId: '87949528',
                  addonId: '74244229',
                },
                {
                  groupId: '87949528',
                  addonId: '94931426',
                },
                {
                  groupId: '87949528',
                  addonId: '74244231',
                },
                {
                  groupId: '87949528',
                  addonId: '74244232',
                },
                {
                  groupId: '87949528',
                  addonId: '74244233',
                },
                {
                  groupId: '87949528',
                  addonId: '74244234',
                },
                {
                  groupId: '87949528',
                  addonId: '74244235',
                },
                {
                  groupId: '87949528',
                  addonId: '74244236',
                },
                {
                  groupId: '87949528',
                  addonId: '74244237',
                },
                {
                  groupId: '87949528',
                  addonId: '74244238',
                },
                {
                  groupId: '87949528',
                  addonId: '74244239',
                },
                {
                  groupId: '87949528',
                  addonId: '74244240',
                },
                {
                  groupId: '87949525',
                  addonId: '74244200',
                },
                {
                  groupId: '87949525',
                  addonId: '97877721',
                },
                {
                  groupId: '87949525',
                  addonId: '97877722',
                },
                {
                  groupId: '87949525',
                  addonId: '97877723',
                },
                {
                  groupId: '87949525',
                  addonId: '97877724',
                },
                {
                  groupId: '87949525',
                  addonId: '97877725',
                },
              ],
            },
            {
              variations: [
                {
                  groupId: '27018887',
                  variationId: '85822304',
                },
                {
                  groupId: '27018889',
                  variationId: '85822315',
                },
              ],
              price: 63900,
              addonCombinations: [
                {
                  groupId: '87949528',
                  addonId: '74244228',
                },
                {
                  groupId: '87949528',
                  addonId: '74244229',
                },
                {
                  groupId: '87949528',
                  addonId: '94931426',
                },
                {
                  groupId: '87949528',
                  addonId: '74244231',
                },
                {
                  groupId: '87949528',
                  addonId: '74244232',
                },
                {
                  groupId: '87949528',
                  addonId: '74244233',
                },
                {
                  groupId: '87949528',
                  addonId: '74244234',
                },
                {
                  groupId: '87949528',
                  addonId: '74244235',
                },
                {
                  groupId: '87949528',
                  addonId: '74244236',
                },
                {
                  groupId: '87949528',
                  addonId: '74244237',
                },
                {
                  groupId: '87949528',
                  addonId: '74244238',
                },
                {
                  groupId: '87949528',
                  addonId: '74244239',
                },
                {
                  groupId: '87949528',
                  addonId: '74244240',
                },
                {
                  groupId: '87949525',
                  addonId: '74244200',
                },
                {
                  groupId: '87949525',
                  addonId: '97877721',
                },
                {
                  groupId: '87949525',
                  addonId: '97877722',
                },
                {
                  groupId: '87949525',
                  addonId: '97877723',
                },
                {
                  groupId: '87949525',
                  addonId: '97877724',
                },
                {
                  groupId: '87949525',
                  addonId: '97877725',
                },
              ],
            },
            {
              variations: [
                {
                  groupId: '27018887',
                  variationId: '85822304',
                },
                {
                  groupId: '27018889',
                  variationId: '85822317',
                },
              ],
              price: 73800,
              addonCombinations: [
                {
                  groupId: '87949528',
                  addonId: '74244228',
                },
                {
                  groupId: '87949528',
                  addonId: '74244229',
                },
                {
                  groupId: '87949528',
                  addonId: '94931426',
                },
                {
                  groupId: '87949528',
                  addonId: '74244231',
                },
                {
                  groupId: '87949528',
                  addonId: '74244232',
                },
                {
                  groupId: '87949528',
                  addonId: '74244233',
                },
                {
                  groupId: '87949528',
                  addonId: '74244234',
                },
                {
                  groupId: '87949528',
                  addonId: '74244235',
                },
                {
                  groupId: '87949528',
                  addonId: '74244236',
                },
                {
                  groupId: '87949528',
                  addonId: '74244237',
                },
                {
                  groupId: '87949528',
                  addonId: '74244238',
                },
                {
                  groupId: '87949528',
                  addonId: '74244239',
                },
                {
                  groupId: '87949528',
                  addonId: '74244240',
                },
                {
                  groupId: '87949525',
                  addonId: '74244200',
                },
                {
                  groupId: '87949525',
                  addonId: '97877721',
                },
                {
                  groupId: '87949525',
                  addonId: '97877722',
                },
                {
                  groupId: '87949525',
                  addonId: '97877723',
                },
                {
                  groupId: '87949525',
                  addonId: '97877724',
                },
                {
                  groupId: '87949525',
                  addonId: '97877725',
                },
              ],
            },
          ],
        },
        addons: [
          {
            groupId: '87949525',
            groupName: 'Add Ons',
            choices: [
              {
                id: '74244200',
                name: 'Pepsi Pet Bottle',
                price: 5700,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '97877721',
                name: 'Classic BreadStix : Flat Rs 20 Off',
                price: 9900,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '97877722',
                name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                price: 13900,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '97877723',
                name: 'Creamy BreadStix : Flat Rs 20 Off',
                price: 14900,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '97877724',
                name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                price: 10900,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '97877725',
                name: 'Choco Volcano : Flat Rs 20 Off',
                price: 10900,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
            ],
            maxAddons: 6,
            maxFreeAddons: -1,
          },
          {
            groupId: '87949532',
            groupName: 'Toppings',
            choices: [
              {
                id: '74244207',
                name: 'Cheese',
                price: 6500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244208',
                name: 'Black Olives',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '94931425',
                name: 'Baby Corn',
                price: 4500,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244210',
                name: 'Capsicum',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244211',
                name: 'Herbed Veggies',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244212',
                name: 'Jalapeno',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244213',
                name: 'Mushroom',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244214',
                name: 'Onion',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244215',
                name: 'Paneer',
                price: 5500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244216',
                name: 'Red Paprika',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244217',
                name: 'Red Capsicum',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244218',
                name: 'Sweet Corn',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244219',
                name: 'Tomato',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
            ],
            maxAddons: 2,
            maxFreeAddons: -1,
          },
          {
            groupId: '87949528',
            groupName: 'Toppings.',
            choices: [
              {
                id: '74244228',
                name: 'Cheese',
                price: 8500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244229',
                name: 'Black Olives',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '94931426',
                name: 'Baby Corn',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244231',
                name: 'Capsicum',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244232',
                name: 'Herbed Veggies',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244233',
                name: 'Jalapeno',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244234',
                name: 'Mushroom',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244235',
                name: 'Onion',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244236',
                name: 'Paneer',
                price: 7500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244237',
                name: 'Red Paprika',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244238',
                name: 'Red Capsicum',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244239',
                name: 'Sweet Corn',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244240',
                name: 'Tomato',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
            ],
            maxAddons: 2,
            maxFreeAddons: -1,
          },
        ],
        itemAttribute: {
          vegClassifier: 'VEG',
          portionSize: 'Serves 1',
        },
        defaultPrice: 37900,
        ribbon: {},
        offerTags: [
          {
            title: '50% OFF',
            subTitle: 'USE SWIGGYIT',
            textColor: '#DB6742',
            backgroundColor: '#FAE8E3',
          },
        ],
        itemBadge: {},
        badgesV2: {},
      },
      quantity: 2,
    },
    {
      menuItem: {
        id: '114792500',
        name: 'Mexican Fiesta - New',
        category: 'Your Mood Your Pizza : New Pizza Launches',
        description:
          'Serves 1 | Flavourful mix of red capsicum, green capsicum, jalapeno, onion, black olives, sweet corn and 100% mozzarella Cheese with a signature spice sprinkle & our flavourful pan sauce.  | [Carbohydrate: 70g, Protein: 23.7g, Energy: 550.1 Kcal, Cholesterol: 22mg]',
        imageId: '0c4c12819d98a35144e3f08451ae64f3',
        inStock: 1,
        isVeg: 1,
        variants: {},
        variantsV2: {
          variantGroups: [
            {
              groupId: '27018866',
              name: 'Size',
              variations: [
                {
                  name: 'Personal',
                  default: 1,
                  id: '85822204',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27018867',
                    variationId: '85822206',
                  },
                },
                {
                  name: 'Medium',
                  id: '85822205',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                  dependantVariation: {
                    groupId: '27018867',
                    variationId: '85822209',
                  },
                },
              ],
            },
            {
              groupId: '27018867',
              name: 'Base',
              variations: [
                {
                  name: 'Pan',
                  price: 319,
                  default: 1,
                  id: '85822206',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'San Francisco Style',
                  price: 319,
                  id: '85822207',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Stuffed Crust - Cheese Maxx',
                  price: 394,
                  id: '85822208',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Pan',
                  price: 569,
                  id: '85822209',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'San Francisco Style',
                  price: 569,
                  id: '85822210',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  name: 'Stuffed Crust - Cheese Maxx',
                  price: 668,
                  id: '85822211',
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
              ],
            },
          ],
          pricingModels: [
            {
              variations: [
                {
                  groupId: '27018866',
                  variationId: '85822204',
                },
                {
                  groupId: '27018867',
                  variationId: '85822206',
                },
              ],
              price: 31900,
              addonCombinations: [
                {
                  groupId: '87949500',
                  addonId: '74244207',
                },
                {
                  groupId: '87949500',
                  addonId: '74244208',
                },
                {
                  groupId: '87949500',
                  addonId: '94931425',
                },
                {
                  groupId: '87949500',
                  addonId: '74244210',
                },
                {
                  groupId: '87949500',
                  addonId: '74244211',
                },
                {
                  groupId: '87949500',
                  addonId: '74244212',
                },
                {
                  groupId: '87949500',
                  addonId: '74244213',
                },
                {
                  groupId: '87949500',
                  addonId: '74244214',
                },
                {
                  groupId: '87949500',
                  addonId: '74244215',
                },
                {
                  groupId: '87949500',
                  addonId: '74244216',
                },
                {
                  groupId: '87949500',
                  addonId: '74244217',
                },
                {
                  groupId: '87949500',
                  addonId: '74244218',
                },
                {
                  groupId: '87949500',
                  addonId: '74244219',
                },
                {
                  groupId: '87949496',
                  addonId: '74244200',
                },
                {
                  groupId: '87949496',
                  addonId: '97877721',
                },
                {
                  groupId: '87949496',
                  addonId: '97877722',
                },
                {
                  groupId: '87949496',
                  addonId: '97877723',
                },
                {
                  groupId: '87949496',
                  addonId: '97877724',
                },
                {
                  groupId: '87949496',
                  addonId: '97877725',
                },
              ],
            },
            {
              variations: [
                {
                  groupId: '27018866',
                  variationId: '85822204',
                },
                {
                  groupId: '27018867',
                  variationId: '85822207',
                },
              ],
              price: 31900,
              addonCombinations: [
                {
                  groupId: '87949500',
                  addonId: '74244207',
                },
                {
                  groupId: '87949500',
                  addonId: '74244208',
                },
                {
                  groupId: '87949500',
                  addonId: '94931425',
                },
                {
                  groupId: '87949500',
                  addonId: '74244210',
                },
                {
                  groupId: '87949500',
                  addonId: '74244211',
                },
                {
                  groupId: '87949500',
                  addonId: '74244212',
                },
                {
                  groupId: '87949500',
                  addonId: '74244213',
                },
                {
                  groupId: '87949500',
                  addonId: '74244214',
                },
                {
                  groupId: '87949500',
                  addonId: '74244215',
                },
                {
                  groupId: '87949500',
                  addonId: '74244216',
                },
                {
                  groupId: '87949500',
                  addonId: '74244217',
                },
                {
                  groupId: '87949500',
                  addonId: '74244218',
                },
                {
                  groupId: '87949500',
                  addonId: '74244219',
                },
                {
                  groupId: '87949496',
                  addonId: '74244200',
                },
                {
                  groupId: '87949496',
                  addonId: '97877721',
                },
                {
                  groupId: '87949496',
                  addonId: '97877722',
                },
                {
                  groupId: '87949496',
                  addonId: '97877723',
                },
                {
                  groupId: '87949496',
                  addonId: '97877724',
                },
                {
                  groupId: '87949496',
                  addonId: '97877725',
                },
              ],
            },
            {
              variations: [
                {
                  groupId: '27018866',
                  variationId: '85822204',
                },
                {
                  groupId: '27018867',
                  variationId: '85822208',
                },
              ],
              price: 39400,
              addonCombinations: [
                {
                  groupId: '87949500',
                  addonId: '74244207',
                },
                {
                  groupId: '87949500',
                  addonId: '74244208',
                },
                {
                  groupId: '87949500',
                  addonId: '94931425',
                },
                {
                  groupId: '87949500',
                  addonId: '74244210',
                },
                {
                  groupId: '87949500',
                  addonId: '74244211',
                },
                {
                  groupId: '87949500',
                  addonId: '74244212',
                },
                {
                  groupId: '87949500',
                  addonId: '74244213',
                },
                {
                  groupId: '87949500',
                  addonId: '74244214',
                },
                {
                  groupId: '87949500',
                  addonId: '74244215',
                },
                {
                  groupId: '87949500',
                  addonId: '74244216',
                },
                {
                  groupId: '87949500',
                  addonId: '74244217',
                },
                {
                  groupId: '87949500',
                  addonId: '74244218',
                },
                {
                  groupId: '87949500',
                  addonId: '74244219',
                },
                {
                  groupId: '87949496',
                  addonId: '74244200',
                },
                {
                  groupId: '87949496',
                  addonId: '97877721',
                },
                {
                  groupId: '87949496',
                  addonId: '97877722',
                },
                {
                  groupId: '87949496',
                  addonId: '97877723',
                },
                {
                  groupId: '87949496',
                  addonId: '97877724',
                },
                {
                  groupId: '87949496',
                  addonId: '97877725',
                },
              ],
            },
            {
              variations: [
                {
                  groupId: '27018866',
                  variationId: '85822205',
                },
                {
                  groupId: '27018867',
                  variationId: '85822209',
                },
              ],
              price: 56900,
              addonCombinations: [
                {
                  groupId: '87949498',
                  addonId: '74244228',
                },
                {
                  groupId: '87949498',
                  addonId: '74244229',
                },
                {
                  groupId: '87949498',
                  addonId: '94931426',
                },
                {
                  groupId: '87949498',
                  addonId: '74244231',
                },
                {
                  groupId: '87949498',
                  addonId: '74244232',
                },
                {
                  groupId: '87949498',
                  addonId: '74244233',
                },
                {
                  groupId: '87949498',
                  addonId: '74244234',
                },
                {
                  groupId: '87949498',
                  addonId: '74244235',
                },
                {
                  groupId: '87949498',
                  addonId: '74244236',
                },
                {
                  groupId: '87949498',
                  addonId: '74244237',
                },
                {
                  groupId: '87949498',
                  addonId: '74244238',
                },
                {
                  groupId: '87949498',
                  addonId: '74244239',
                },
                {
                  groupId: '87949498',
                  addonId: '74244240',
                },
                {
                  groupId: '87949496',
                  addonId: '74244200',
                },
                {
                  groupId: '87949496',
                  addonId: '97877721',
                },
                {
                  groupId: '87949496',
                  addonId: '97877722',
                },
                {
                  groupId: '87949496',
                  addonId: '97877723',
                },
                {
                  groupId: '87949496',
                  addonId: '97877724',
                },
                {
                  groupId: '87949496',
                  addonId: '97877725',
                },
              ],
            },
            {
              variations: [
                {
                  groupId: '27018866',
                  variationId: '85822205',
                },
                {
                  groupId: '27018867',
                  variationId: '85822210',
                },
              ],
              price: 56900,
              addonCombinations: [
                {
                  groupId: '87949498',
                  addonId: '74244228',
                },
                {
                  groupId: '87949498',
                  addonId: '74244229',
                },
                {
                  groupId: '87949498',
                  addonId: '94931426',
                },
                {
                  groupId: '87949498',
                  addonId: '74244231',
                },
                {
                  groupId: '87949498',
                  addonId: '74244232',
                },
                {
                  groupId: '87949498',
                  addonId: '74244233',
                },
                {
                  groupId: '87949498',
                  addonId: '74244234',
                },
                {
                  groupId: '87949498',
                  addonId: '74244235',
                },
                {
                  groupId: '87949498',
                  addonId: '74244236',
                },
                {
                  groupId: '87949498',
                  addonId: '74244237',
                },
                {
                  groupId: '87949498',
                  addonId: '74244238',
                },
                {
                  groupId: '87949498',
                  addonId: '74244239',
                },
                {
                  groupId: '87949498',
                  addonId: '74244240',
                },
                {
                  groupId: '87949496',
                  addonId: '74244200',
                },
                {
                  groupId: '87949496',
                  addonId: '97877721',
                },
                {
                  groupId: '87949496',
                  addonId: '97877722',
                },
                {
                  groupId: '87949496',
                  addonId: '97877723',
                },
                {
                  groupId: '87949496',
                  addonId: '97877724',
                },
                {
                  groupId: '87949496',
                  addonId: '97877725',
                },
              ],
            },
            {
              variations: [
                {
                  groupId: '27018866',
                  variationId: '85822205',
                },
                {
                  groupId: '27018867',
                  variationId: '85822211',
                },
              ],
              price: 66800,
              addonCombinations: [
                {
                  groupId: '87949498',
                  addonId: '74244228',
                },
                {
                  groupId: '87949498',
                  addonId: '74244229',
                },
                {
                  groupId: '87949498',
                  addonId: '94931426',
                },
                {
                  groupId: '87949498',
                  addonId: '74244231',
                },
                {
                  groupId: '87949498',
                  addonId: '74244232',
                },
                {
                  groupId: '87949498',
                  addonId: '74244233',
                },
                {
                  groupId: '87949498',
                  addonId: '74244234',
                },
                {
                  groupId: '87949498',
                  addonId: '74244235',
                },
                {
                  groupId: '87949498',
                  addonId: '74244236',
                },
                {
                  groupId: '87949498',
                  addonId: '74244237',
                },
                {
                  groupId: '87949498',
                  addonId: '74244238',
                },
                {
                  groupId: '87949498',
                  addonId: '74244239',
                },
                {
                  groupId: '87949498',
                  addonId: '74244240',
                },
                {
                  groupId: '87949496',
                  addonId: '74244200',
                },
                {
                  groupId: '87949496',
                  addonId: '97877721',
                },
                {
                  groupId: '87949496',
                  addonId: '97877722',
                },
                {
                  groupId: '87949496',
                  addonId: '97877723',
                },
                {
                  groupId: '87949496',
                  addonId: '97877724',
                },
                {
                  groupId: '87949496',
                  addonId: '97877725',
                },
              ],
            },
          ],
        },
        addons: [
          {
            groupId: '87949496',
            groupName: 'Add Ons',
            choices: [
              {
                id: '74244200',
                name: 'Pepsi Pet Bottle',
                price: 5700,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '97877721',
                name: 'Classic BreadStix : Flat Rs 20 Off',
                price: 9900,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '97877722',
                name: 'Cheese Garlic Bread : Flat Rs 20 Off',
                price: 13900,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '97877723',
                name: 'Creamy BreadStix : Flat Rs 20 Off',
                price: 14900,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '97877724',
                name: 'Zesty Paneer Pocket : Flat Rs 20 Off',
                price: 10900,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '97877725',
                name: 'Choco Volcano : Flat Rs 20 Off',
                price: 10900,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
            ],
            maxAddons: 6,
            maxFreeAddons: -1,
          },
          {
            groupId: '87949498',
            groupName: 'Toppings.',
            choices: [
              {
                id: '74244228',
                name: 'Cheese',
                price: 8500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244229',
                name: 'Black Olives',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '94931426',
                name: 'Baby Corn',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244231',
                name: 'Capsicum',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244232',
                name: 'Herbed Veggies',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244233',
                name: 'Jalapeno',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244234',
                name: 'Mushroom',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244235',
                name: 'Onion',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244236',
                name: 'Paneer',
                price: 7500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244237',
                name: 'Red Paprika',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244238',
                name: 'Red Capsicum',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244239',
                name: 'Sweet Corn',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244240',
                name: 'Tomato',
                price: 7000,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
            ],
            maxAddons: 2,
            maxFreeAddons: -1,
          },
          {
            groupId: '87949500',
            groupName: 'Toppings',
            choices: [
              {
                id: '74244207',
                name: 'Cheese',
                price: 6500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244208',
                name: 'Black Olives',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '94931425',
                name: 'Baby Corn',
                price: 4500,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244210',
                name: 'Capsicum',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244211',
                name: 'Herbed Veggies',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244212',
                name: 'Jalapeno',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244213',
                name: 'Mushroom',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244214',
                name: 'Onion',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244215',
                name: 'Paneer',
                price: 5500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244216',
                name: 'Red Paprika',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244217',
                name: 'Red Capsicum',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244218',
                name: 'Sweet Corn',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
              {
                id: '74244219',
                name: 'Tomato',
                price: 4500,
                inStock: 1,
                isVeg: 1,
                isEnabled: 1,
              },
            ],
            maxAddons: 2,
            maxFreeAddons: -1,
          },
        ],
        itemAttribute: {
          vegClassifier: 'VEG',
          portionSize: 'Serves 1',
        },
        defaultPrice: 31900,
        ribbon: {},
        type: 'ITEM',
        offerTags: [
          {
            title: '50% OFF',
            subTitle: 'USE SWIGGYIT',
            textColor: '#DB6742',
            backgroundColor: '#FAE8E3',
          },
        ],
        itemBadge: {},
        badgesV2: {},
        ratings: {
          aggregatedRating: {
            rating: '3.6',
            ratingCount: '7 ratings',
            ratingCountV2: '7',
          },
        },
      },
      quantity: 2,
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
