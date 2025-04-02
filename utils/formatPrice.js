/**
 * Formata o preço para o formato brasileiro (R$ 00,00)
 * @param {number} price - O preço a ser formatado
 * @returns {string} Preço formatado
 */
export function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  }
  
  /**
   * Calcula o preço com desconto
   * @param {number} price - Preço original
   * @param {number} discountPercentage - Percentual de desconto
   * @returns {number} Preço com desconto aplicado
   */
  export function calculateDiscountPrice(price, discountPercentage) {
    if (!price || !discountPercentage) return price;
    return price - (price * (discountPercentage / 100));
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