import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['source']
  copy(){
    // event.preventDefault() is another HTML DOM method that strips the element of all functionality so you're starting from scratch. 
    // (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
    event.preventDefault()

    // .select() is an HTML DOM method (https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select)
    // Its as if you double clicked the element's contents with your cursor
    this.sourceTarget.select()

    // document.execCommand() is another HTML DOM method (https://www.w3schools.com/jsref/met_document_execcommand.asp)
    // It essentially lets you highjack the user's computer and execute a command
    document.execCommand("copy")
  }
}
