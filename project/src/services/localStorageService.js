class LocalStorageService {
    constructor(key = "cartItems") {
      this.KEY = key;
    }
  
    get() {
      const storedValue = localStorage.getItem(this.KEY);
      return storedValue ? JSON.parse(storedValue) : [];
    }
  
    set(value) {
      localStorage.setItem(this.KEY, JSON.stringify(value));
    }
  
    hasItem(value) {
      return this.get().some((item) => item.title === value.title);
    }
  
    deleteAllValues() {
      this.set([]);
    }
  }
  
  export default LocalStorageService;
  