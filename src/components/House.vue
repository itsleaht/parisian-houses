<template>
  <div id="houseComp">
  </div>
</template>

<script>
import * as THREE from 'three'
import { objectManager } from '../utils/objectManager'
const OrbitControls = require('three-orbit-controls')(THREE)

export default {
  name: 'House',
  methods: {
    init () {
      const TextureLoader = new THREE.TextureLoader()
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000)
      this.controls = new OrbitControls(this.camera)

      this.controls.autoRotate = true
      this.controls.enabled = false

      objectManager.loadObj({
        mtlPath: 'Apartment.mtl',
        objPath: 'Apartment.obj'
      }).then(object => {
        TextureLoader.load(require('../../static/objects/Apartment_BaseColor.png'), texture => {
          object.children[0].material.map = texture
          object.position.set(0, -2, 1)
          object.scale.set(0.7, 0.7, 0.7)
          this.scene.add(object)
          this.object = object
        })
      })

      const light = new THREE.DirectionalLight(0xFFFFFF, 1)
      light.position.set(3, 0, 2)
      this.scene.add(light)

      const light2 = new THREE.DirectionalLight(0xFFFFFF, 1)
      light2.position.set(-3, 0, 2)
      this.scene.add(light2)

      const size = 10
      const divisions = 10
      const gridHelper = new THREE.GridHelper(size, divisions)
      this.scene.add(gridHelper)

      this.camera.position.z = 11
      this.camera.position.y = 5
      this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
      this.renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)
      document.getElementById('houseComp').appendChild(this.renderer.domElement)
    },
    render () {
      requestAnimationFrame(this.render)
      // this.controls.update()
      if (this.object) {
        this.object.rotation.y += 0.001
      }
      this.renderer.render(this.scene, this.camera)
    }
  },
  mounted () {
    this.init()
    this.render()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #houseComp {
    position: relative;
    display: inline-block;
  }
</style>
