import { observable, action } from "mobx";

class ExampleStore {
    @observable hello = "";
 
    @action.bound
    setHello(hello) {
      this.hello = hello;
    } 
   
  }
  
  export default ExampleStore;
  