<template>
  <div id="house">
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
      this.scene.background = new THREE.Color(0xff3300)
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
          object.position.set(0, -4, 0)
          object.scale.set(0.5, 0.5, 0.25)
          this.scene.add(object)
        })
      })

      const light = new THREE.DirectionalLight(0xFFFFFF, 1)
      light.position.set(3, 0, 3)
      this.scene.add(light)

      this.camera.position.z = 5
      this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      document.getElementById('house').appendChild(this.renderer.domElement)
    },
    render () {
      requestAnimationFrame(this.render)
      this.controls.update()
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/deep/ canvas {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
