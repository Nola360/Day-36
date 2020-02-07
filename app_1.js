const singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: 'James' });
    return object;
  }


  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();


// Can not have more than one instance
const instanceA = singleton.getInstance();
const instanceB = singleton.getInstance();

console.log(instanceA === instanceB); // Logs true 
console.log(instanceA); // Logs object key value pair