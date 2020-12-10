/**
 * Example diner.
 */
export const mockDiner = {
    _id: 2999,
    approvalStatus: "NOT_APPROVED",
    name: "place",
    description: "Can do things",
    priceRating: 1,
    telephone: "012234567890",
    theme: 2,
    coords: [52.407836, -1.509859],
    foodMenuUrl: "url.com",
    hasGlutenFreeOptions: true,
    hasVeganOptions: false,
    hasWheelchairAccess: true,
    hasBabyChangingFacilities: true
};

/**
 * Duplicate user.
 */
export const duplicateDiner = {
    _id: 1,
    approvalStatus: "APPROVED",
    name: "Cosy Club",
    description: "Coventry Cosy Club is a glorious celebration of different styles.",
    priceRating: 0,
    telephone: "01234567890",
    theme: 0,
    coords: [52.407837, -1.509850],
    foodMenuUrl: "site.com/url",
    hasGlutenFreeOptions: true,
    hasVeganOptions: true,
    hasWheelchairAccess: true,
    hasBabyChangingFacilities: true
};

/**
 * Existing user with updates.
 */
export const updatedDiner = {
    _id: 1,
    approvalStatus: "NOT_APPROVED",
    name: "The Cosy Club",
    description: "Coventry Cosy Club is a glorious celebration of different styles.",
    priceRating: 0,
    telephone: "01234567891",
    theme: 0,
    coords: [52.407837, -1.509850],
    foodMenuUrl: "site.com/url",
    hasGlutenFreeOptions: false,
    hasVeganOptions: false,
    hasWheelchairAccess: true,
    hasBabyChangingFacilities: true
};

export default { mockDiner, duplicateDiner, updatedDiner };