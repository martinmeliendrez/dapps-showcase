import { useSyncExternalStore } from "react"
import { store } from "./store"

// useSyncExternalStore takes three arguments:
// - A subscription function to listen for changes in the external store (store.subscribe).
// - A function to get the current value of the store (store.value).
// - An initial value for the store (store.value).

export const useSyncProviders = () =>
  useSyncExternalStore(store.subscribe, store.value, store.value)