let OBJLoader = require('three-obj-loader')
let MTLLoader = require('three-mtl-loader')
let THREE = require('three')
OBJLoader(THREE)

class ObjectManager {
  constructor () {
    this.objLoader = new THREE.OBJLoader()
    this.mtlLoader = new MTLLoader()
    this.mtlLoader.crossOrigin = true
  }
  loadObj (object) {
    return new Promise(resolve => {
      this.mtlLoader.load(require(`../../static/objects/${object.mtlPath}`), material => {
        material.setTexturePath = `../../static/objects/`
        material.preload()
        this.objLoader.load(require(`../../static/objects/${object.objPath}`), obj => {
          // obj.scale.set(200, 200, 200)
          resolve(obj)
        })
      })
    })
  }
}

export let objectManager = new ObjectManager()
