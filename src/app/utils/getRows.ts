export const getRows = <T>(items: T[], itemsPerRow = 3): T[][] => {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += itemsPerRow) {
    rows.push(items.slice(i, i + itemsPerRow));
  }
  return rows;
};
