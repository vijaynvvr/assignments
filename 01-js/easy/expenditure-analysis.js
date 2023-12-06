/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
    let result = transactions.reduce((acc, curr) => {
        // if (!acc.hasOwnProperty(curr['category'])) 
        if (!(curr['category'] in acc))
            acc[curr['category']] = 0;
        acc[curr['category']] += curr['price'];
        return acc;
    }, {});
    result = Object.keys(result).map(key => {
        return {category: key, totalSpent: result[key]};
    });
    return result;
}

module.exports = calculateTotalSpentByCategory;
