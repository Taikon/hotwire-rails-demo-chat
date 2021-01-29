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


4. Targets: A `target` is like `id` tags that you used to use in jQuery. You need to retrieve them using `static targets = []` similar to how you'd need to retrieve them in jQuery with `querySelector()`. 
* Instead of defining the name of the retrieved target yourself as in jQuery, Stimulus does it for you. 
* So `var messages = querySelector("#messages")` in jQuery would instead be done by Stimulus, and you would only need to call `messagesTarget` 
* Remember you still have to tag the target: `data-controllername-target="messagers"`.

```
/home.html.erb
  <input data-hello-target="name" type="text">
  <p data-hello-target="output"></p>

/hello_controller.js
  static targets = ["name", "output"]

  nameTarget.value
  ...
  this.outputTarget
```
* When Stimulus loads your controller class, it looks for target name strings in a static array called targets. For each target name in the array, Stimulus adds three new properties to your controller. Here, our "source" target name becomes the following properties:

```
  this.sourceTarget evaluates to the first source target in your controller’s scope. If there is no source target, accessing the property throws an error.
  this.sourceTargets evaluates to an array of all source targets in the controller’s scope.
  this.hasSourceTarget evaluates to true if there is a source target or false if not.
```


5. Actions
```
  method()   - Any method name will work
  connect()  - But, like connect(), are special
```


6. Events
```
  click->
  submit->
  change->
```















