import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['slide']
  static values = { index: Number }

  // initialize() {
    // element.getAttribute(attributeName) returns the value of the specified attribute on the element 
    //   (https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)
    // parseInt() will parse a string for digits and returns the result as integers
    //   (https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
    // this.index = parseInt(this.element.getAttribute("data-index"))
    // console.log(this.indexValue)
    // console.log(typeof this.indexValue)
    // this.showCurrentSlide()
  // }

  next() {
    this.indexValue++
  }

  previous() {
    this.indexValue--
  }

  // valueValueChanged() is a callback defined by stimulus (https://stimulus.hotwire.dev/reference/values#change-callbacks)
  indexValueChanged() {
    this.showCurrentSlide()
  }

  showCurrentSlide(){
    // Array.forEach(current_element, index_in_array)
    // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
    this.slideTargets.forEach((element, index) => {
      // HTMLElement.hidden = true will set element as hidden 
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden
      // element.hidden = index != this.index
      element.hidden = index != this.indexValue
    })
  }
}
