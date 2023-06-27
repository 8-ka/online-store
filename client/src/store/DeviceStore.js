import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Smartphone'},
            {id: 2, name: 'Fridge'},
        ]

        this._brands = [
            {id: 1, brand: "Samsung"},
            {id: 2, brand: "Apple"},
        ]

        this._devices = [
            {id: 1, name: "Iphone 12 Pro", price: 25000, rating: 5, img: ''},
            {id: 2, name: "Iphone 2 Pro", price: 5000, rating: 3, img: ''}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }
}