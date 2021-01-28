# Hotwire Rails Demo: Chat

# Hello Stimulus Tutorial
[link](https://stimulus.hotwire.dev/handbook/hello-stimulus)
1. `home.html.erb`
```
  <div data-controller="hello">
    <input data-hello-target="name" type="text">
    <button data-action="click->hello#greet">Button</button>
  </div>
```

2. `hello_controller.js`
```
import { Controller } from 'stimulus'
export default class extends  Controller {
  action(){
    ...
  }
  get getter(){
    // this: idunno 
    // nameTarget: the first matching element
    // value: the value of the nameTarget
    return this.nameTarget.value
  }
}
```
3. Run Through
You activate a click event on an element. It calls the hello#greet action. The input you typed was marked as a data target for the hello-controller. Subsequently the input is used as a parameter for the greet action for the hello-controller. 
