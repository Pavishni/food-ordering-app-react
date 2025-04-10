import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const RestaurantCard = (props) => {

    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo } = resData.info;
    return (
        <div className="res-card">
            <div className="res-logo-border">
                <img
                    className="res-logo"
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}
                />
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
}

const resList = [
    {
        "info": {
            "id": "453068",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Express Avenue",
            "areaName": "Royapettah",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "61955",
            "avgRatingString": "4.3",
            "totalRatingsString": "2.8K+",
            "sla": {
                "deliveryTime": 58,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-10 22:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Momo.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Momo.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "66% OFF",
                "subHeader": "UPTO ₹126",
                "headerTypeV2": 12
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8d14e89f-abec-441d-9e89-91b72686f1f8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chennai/chinese-wok-express-avenue-royapettah-rest453068",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "806891",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/6c3e0818-7976-46b0-86f6-493874c7e28b_806891.jpg",
            "locality": "Anna Salai",
            "areaName": "Triplicane",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.2,
            "parentId": "721",
            "avgRatingString": "4.2",
            "totalRatingsString": "1.8K+",
            "sla": {
                "deliveryTime": 42,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-10 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8d14e89f-abec-441d-9e89-91b72686f1f8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chennai/pizza-hut-anna-salai-triplicane-rest806891",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "16543",
            "name": "A2B - Adyar Ananda Bhavan",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/21228890-3c32-48cb-9ce1-4761f2128cfa_16543.jpg",
            "locality": "Purasavakkam",
            "areaName": "Purasaiwakkam",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "Sweets",
                "Chinese"
            ],
            "avgRating": 4.6,
            "parentId": "22",
            "avgRatingString": "4.6",
            "totalRatingsString": "41K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 2.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-10 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Mithai.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "25% OFF",
                "subHeader": "ABOVE ₹2500",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.9",
                    "ratingCount": "3.8K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8d14e89f-abec-441d-9e89-91b72686f1f8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chennai/a2b-adyar-ananda-bhavan-purasavakkam-purasaiwakkam-rest16543",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "708880",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/b0fe2862-f2b2-4d29-998d-1fdb5cfbbf6d_708880.JPG",
            "locality": "Sydenhams Road",
            "areaName": "Periyampet",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Fast Food",
                "Rolls & Wraps"
            ],
            "avgRating": 4.3,
            "parentId": "547",
            "avgRatingString": "4.3",
            "totalRatingsString": "3.4K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 0.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "0.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-11 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹89"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8d14e89f-abec-441d-9e89-91b72686f1f8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chennai/kfc-sydenhams-road-periyampet-rest708880",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "37629",
            "name": "Shree Mithai",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/24/8dd1f626-41ab-46a6-bbcb-15068ea2cb1a_37629.jpg",
            "locality": "Chetpet",
            "areaName": "Nungambakkam",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Desserts",
                "Street Food",
                "Chaat"
            ],
            "avgRating": 4.7,
            "parentId": "6988",
            "avgRatingString": "4.7",
            "totalRatingsString": "90K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-10 21:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "66% OFF",
                "subHeader": "UPTO ₹126",
                "headerTypeV2": 12
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.5",
                    "ratingCount": "10K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8d14e89f-abec-441d-9e89-91b72686f1f8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chennai/shree-mithai-chetpet-nungambakkam-rest37629",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "14096",
            "name": "Sangeetha Veg Restaurant",
            "cloudinaryImageId": "oodghmivnc6bxnbrvzzw",
            "locality": "Egmore",
            "areaName": "Egmore",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Chinese",
                "South Indian"
            ],
            "avgRating": 4.6,
            "parentId": "1260",
            "avgRatingString": "4.6",
            "totalRatingsString": "60K+",
            "sla": {
                "deliveryTime": 43,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-10 22:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.7",
                    "ratingCount": "1.7K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8d14e89f-abec-441d-9e89-91b72686f1f8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chennai/sangeetha-veg-restaurant-egmore-rest14096",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "33457",
            "name": "Buhari",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/11/bf3eb918-ff7f-4b63-bde6-0cc4caee479b_33457.sss.jpg",
            "locality": "Purasawalkam - Buhari",
            "areaName": "Purasawalkam",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Biryani",
                "Chinese",
                "South Indian",
                "Arabian",
                "Barbecue",
                "Seafood",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "164",
            "avgRatingString": "4.2",
            "totalRatingsString": "73K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-10 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹499",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8d14e89f-abec-441d-9e89-91b72686f1f8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chennai/buhari-buhari-purasawalkam-rest33457",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "14044",
            "name": "Fruit Shop on Greams Road",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/25/ff69726d-dd3e-4ff6-88d4-36b18536ce08_14044.jpg",
            "locality": "Opposite Commissioner Office",
            "areaName": "Egmore",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Juices",
                "Beverages",
                "Desserts"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "401",
            "avgRatingString": "4.5",
            "totalRatingsString": "4.0K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-10 23:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8d14e89f-abec-441d-9e89-91b72686f1f8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chennai/fruit-shop-on-greams-road-opposite-commissioner-office-egmore-rest14044",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "21473",
            "name": "Dindigul Thalappakatti",
            "cloudinaryImageId": "b4oufcrv1ejzlgbz1oyb",
            "locality": "Triplicane",
            "areaName": "Triplicane",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Biryani",
                "Barbecue",
                "South Indian",
                "Chinese",
                "North Indian"
            ],
            "avgRating": 4.3,
            "parentId": "332",
            "avgRatingString": "4.3",
            "totalRatingsString": "16K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-11 03:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹266 OFF",
                "subHeader": "ABOVE ₹849",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 12
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "8.9K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8d14e89f-abec-441d-9e89-91b72686f1f8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chennai/dindigul-thalappakatti-triplicane-rest21473",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "257162",
            "name": "The Brooklyn Creamery - Healthy Ice Cream",
            "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
            "locality": "Mahaveer Colony",
            "areaName": "Vepery",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts",
                "Healthy Food"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "236673",
            "avgRatingString": "4.7",
            "totalRatingsString": "1.1K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-11 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "brand"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "66% OFF",
                "subHeader": "UPTO ₹126",
                "headerTypeV2": 12
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8d14e89f-abec-441d-9e89-91b72686f1f8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chennai/the-brooklyn-creamery-healthy-ice-cream-mahaveer-colony-vepery-rest257162",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "793801",
            "name": "Minus 30",
            "cloudinaryImageId": "84dfb731ca567d0cd955a5f33ffeba3a",
            "locality": "Chennai Corporation Ward - 58",
            "areaName": "Mahaveer Colony EvK sampath",
            "costForTwo": "₹280 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts",
                "Beverages",
                "Fast Food"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "292823",
            "avgRatingString": "4.6",
            "totalRatingsString": "132",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-11 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8d14e89f-abec-441d-9e89-91b72686f1f8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chennai/minus-30-corporation-ward-58-mahaveer-colony-evk-sampath-rest793801",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "312965",
            "name": "Havmor Havfunn Ice Cream",
            "cloudinaryImageId": "49845b494b1e637209b7bd1c7ca184ad",
            "locality": "Comander In Chief Road",
            "areaName": "Egmore",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Ice Cream",
                "Cakes",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "94570",
            "avgRatingString": "4.7",
            "totalRatingsString": "441",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-10 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8d14e89f-abec-441d-9e89-91b72686f1f8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chennai/havmor-havfunn-ice-cream-comander-in-chief-road-egmore-rest312965",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "542182",
            "name": "Wow! Momo",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/19/6c6d010e-90ea-4e6e-b65f-30c0c3155bb8_542182.JPG",
            "locality": "Poonamallee High Road",
            "areaName": "Vepary",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Momos",
                "Chinese",
                "fastfood",
                "Asian",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "1776",
            "avgRatingString": "4.3",
            "totalRatingsString": "1.1K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 0.6,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "0.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-11 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Chinese.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Momo.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Chinese.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Momo.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹166 OFF",
                "subHeader": "ABOVE ₹549",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 12
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8d14e89f-abec-441d-9e89-91b72686f1f8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chennai/wow-momo-poonamallee-high-road-vepary-rest542182",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "573354",
            "name": "Big Bowl",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_573354.JPG",
            "locality": "PAPER MILLS ROAD",
            "areaName": "Perambur",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "434792",
            "avgRatingString": "4.3",
            "totalRatingsString": "1.9K+",
            "sla": {
                "deliveryTime": 67,
                "lastMileTravel": 5.6,
                "serviceability": "SERVICEABLE",
                "slaString": "65-70 mins",
                "lastMileTravelString": "5.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-11 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "66% OFF",
                "subHeader": "UPTO ₹126",
                "headerTypeV2": 12
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8d14e89f-abec-441d-9e89-91b72686f1f8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chennai/big-bowl-paper-mills-road-perambur-rest573354",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "16954",
            "name": "Anjappar",
            "cloudinaryImageId": "ermlkmhocnwlnddxsvnf",
            "locality": "Triplicane",
            "areaName": "Triplicane",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Chettinad",
                "South Indian",
                "Biryani",
                "Chinese"
            ],
            "avgRating": 4.3,
            "parentId": "61",
            "avgRatingString": "4.3",
            "totalRatingsString": "9.3K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-10 23:15:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "66% OFF",
                "subHeader": "UPTO ₹146",
                "headerTypeV2": 12
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.5",
                    "ratingCount": "1.3K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8d14e89f-abec-441d-9e89-91b72686f1f8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chennai/anjappar-triplicane-rest16954",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "76702",
            "name": "The Red Box",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/8/cddcd780-d166-4313-868f-77716620b000_76702.jpg",
            "locality": "Wellington Estate",
            "areaName": "Egmore",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Chinese"
            ],
            "avgRating": 4.3,
            "parentId": "1636",
            "avgRatingString": "4.3",
            "totalRatingsString": "17K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-11 01:40:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Chinese.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Chinese.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹79"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8d14e89f-abec-441d-9e89-91b72686f1f8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chennai/the-red-box-wellington-estate-egmore-rest76702",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "37972",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/a60c9a3e-c095-4cbf-a60d-766ad7c35ee1_37972.JPG",
            "locality": "Anna Salai",
            "areaName": "Royapettah",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "630",
            "avgRatingString": "4.3",
            "totalRatingsString": "30K+",
            "sla": {
                "deliveryTime": 58,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-10 22:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹179"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "6.6K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8d14e89f-abec-441d-9e89-91b72686f1f8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chennai/mcdonalds-anna-salai-royapettah-rest37972",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "18998",
            "name": "Chai Kings",
            "cloudinaryImageId": "ntvnffyvoinl2cqkishv",
            "locality": "Poonamallee High Road",
            "areaName": "Purasawalkam",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Beverages",
                "Snacks",
                "Bakery"
            ],
            "avgRating": 4.6,
            "parentId": "2627",
            "avgRatingString": "4.6",
            "totalRatingsString": "17K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-04-10 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹70"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8d14e89f-abec-441d-9e89-91b72686f1f8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chennai/chai-kings-poonamallee-high-road-purasawalkam-rest18998",
            "type": "WEBLINK"
        }
    }
];

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
}


const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// root.render(heading);

