import { Controller } from 'stimulus'

export default class extends Controller {
  static values = { url: String }
  
  connect() {
    console.log("content-loader loaded")
    this.load()
  }

  load() {
    fetch(this.urlValue)
      .then(response => response.text())
      .then(html => this.element.innerHTML = html)
  }
}
/*
fetch() fetches the data from the URL you supply 
  (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
  Typically you'd use fetch to retrieve JSON from an API
 */
