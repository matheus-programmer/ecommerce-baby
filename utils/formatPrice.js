/**
 * Formata o preço para o formato brasileiro (R$ 00,00)
 * @param {number} price - O preço a ser formatado
 * @returns {string} Preço formatado
 */
export function formatPrice(price) {
  if (typeof price !== "number" || isNaN(price)) {
      console.error("O valor fornecido para formatPrice não é um número válido:", price);
      return "R$ 0,00";
  }
  return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
  }).format(price);
}

/**
* Calcula o preço com desconto
* @param {number} price - Preço original
* @param {number} discountPercentage - Percentual de desconto
* @returns {number} Preço com desconto aplicado
*/
export function calculateDiscountPrice(price, discountPercentage) {
  if (typeof price !== "number" || typeof discountPercentage !== "number") {
      console.error("Os valores fornecidos para calculateDiscountPrice não são números válidos:", {
          price,
          discountPercentage,
      });
      return price;
  }
  if (!price || !discountPercentage || discountPercentage <= 0) return price;
  return price - price * (discountPercentage / 100);
}

/**
* Formata o preço com desconto
* @param {number} price - Preço original
* @param {number} discountPercentage - Percentual de desconto
* @returns {string} Preço com desconto formatado
*/
export function formatDiscountPrice(price, discountPercentage) {
  const discountedPrice = calculateDiscountPrice(price, discountPercentage);
  return formatPrice(discountedPrice);
}