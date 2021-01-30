Rails.application.routes.draw do
  # Stimulus hello tutorial
  get "hellos/home"
  get "hellos/copy"
  get "hellos/slideshow"
  get "hellos/content"
  get "hellos/posts"

  # Hotwire example
  resources :rooms do
    resources :messages
  end

  root to: "rooms#index"
end
