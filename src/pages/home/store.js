import {makeAutoObservable} from "mobx";
import {createContext} from "react";

class Store {
    // state
    selectedMenu = 'friend'

    constructor() {
        makeAutoObservable(this)
    }

    // actions
    setSelectedMenu(value) {
        this.selectedMenu = value
    }

}

const store = new Store()
const context = createContext(store);

export {store,context}