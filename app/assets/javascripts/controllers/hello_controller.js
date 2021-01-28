import { Controller } from 'stimulus'

export default class extends Controller {
  // connect(){
  //   console.log("harro", this.element)
  // }
  // sayhi(){
  //   console.log("hi", this.element)
  // }
  static targets = ["name", "output"]

  // greet(){
  //   const element = this.nameTarget
  //   const name = element.value
  //   console.log(`Hi ${name}`)
  // }
  greet(){
    // console.log(`Hi ${this.name}`)
    this.outputTarget.textContent = `Hello, ${this.name}`
  }
  
  get name(){
    return this.nameTarget.value
  }
}

