//
// export a util functions to be used in other files
// This function sorts the search results

export const sortResults = (results, sortBy, sortOrder) => {
  const sortedResults = [...results].sort((a, b) => {
    if (sortBy === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    } else if (sortBy === 'website') {
      return sortOrder === 'asc'
        ? a.website.localeCompare(b.website)
        : b.website.localeCompare(a.website);
    } else if (sortBy === 'condition') {
      return sortOrder === 'asc'
        ? a.condition.localeCompare(b.condition)
        : b.condition.localeCompare(a.condition);
    }
  });
  return sortedResults;
};
