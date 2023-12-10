/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
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
