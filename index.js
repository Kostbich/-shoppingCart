// Создание объекта Корзины
const shoppingCart = {
  items: [],
  total: 0,

  // Метод добавления товара
  addItem: function(name, price, quantity) {
    this.items.push({ name, price, quantity });
    this.calculateTotal();
  },

  // Метод удаления товара
  removeItem: function(name) {
    this.items = this.items.filter(item => item.name !== name);
    this.calculateTotal();
  },

  // Метод обновления количества товара
  updateQuantity: function(name, newQuantity) {
    this.items.forEach(item => {
      if (item.name === name) {
        item.quantity = newQuantity;
      }
    });
    this.calculateTotal();
  },

  // Метод расчёта общей стоимости
  calculateTotal: function() {
    this.total = this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  // Метод очистки корзины
  clearCart: function() {
    this.items = [];
    this.total = 0;
  }
};

