export function extractPrices(priceHtml: string): { regularPrice: number | null; salePrice: number | null } {
  const regularPriceMatch = priceHtml.match(/<del>.*?([\d,.]+).*?<\/del>/);
  const salePriceMatch = priceHtml.match(/<ins>.*?([\d,.]+).*?<\/ins>/);

  const regularPrice = regularPriceMatch ? parseFloat(regularPriceMatch[1].replace(',', '')) : null;
  const salePrice = salePriceMatch ? parseFloat(salePriceMatch[1].replace(',', '')) : null;

  return { regularPrice, salePrice };
}
