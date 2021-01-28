import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["name", "output"]

  greet(){
    // .textContent is a DOM property (https://www.w3schools.com/jsref/prop_node_textcontent.asp)
    // outputTarget was defined in your home.html.erb file as data-hello-target="output" then retrieved with static targets = ['output']
    this.outputTarget.textContent = `Hello, ${this.name}`
  }
  
  get name(){
    return this.nameTarget.value
  }
}

