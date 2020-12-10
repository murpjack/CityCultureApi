/**
 * Example Activity.
 */
export const mockActivity = {
    _id: 3999,
    approvalStatus: "NOT_APPROVED",
    name: "New Activity",
    description: "You can do it.",
    priceRating: 5,
    telephone: "01234567890",
    theme: 2,
    coords: [52.420183, -1.557578],
    foodMenuUrl: "site.com/url/stuff",
    hasGlutenFreeOptions: true,
    hasVeganOptions: true,
    hasWheelchairAccess: true,
    hasBabyChangingFacilities: true,
    activityLevel: 0
};

/**
 * Duplicate Activity.
 */
export const duplicateActivity = {
    _id: 1,
    approvalStatus: "APPROVED",
    name: "Allesley Pitch and Putt",
    description: "Set in well-maintained parkland. Allesley offers a great day out for the family.",
    priceRating: 0,
    telephone: "01234567890",
    theme: 1,
    coords: [52.420184, -1.557579],
    foodMenuUrl: "site.com/url",
    hasGlutenFreeOptions: true,
    hasVeganOptions: true,
    hasWheelchairAccess: true,
    hasBabyChangingFacilities: true,
    activityLevel: 0
};

/**
 * Existing Activity with updates.
 */
export const updatedActivity = {
    _id: 1,
    approvalStatus: "NOT_APPROVED",
    name: "A Different Pitch and Putt",
    description: "Set in well-maintained parkland. Allesley offers a great day out for the family.",
    priceRating: 2,
    telephone: "01234567890",
    theme: 3,
    coords: [52.420183, -1.557578],
    foodMenuUrl: "site.com/url/new",
    hasGlutenFreeOptions: false,
    hasVeganOptions: true,
    hasWheelchairAccess: true,
    hasBabyChangingFacilities: true,
    activityLevel: 2
};

// export default { mockActivity, duplicateActivity, updatedActivity };