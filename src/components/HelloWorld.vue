<template>
  <div class="hello" id="house">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
import * as THREE from 'three'
import { objectManager } from '../utils/objectManager'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    init () {
      const TextureLoader = new THREE.TextureLoader()
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0xff3300)
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

      objectManager.loadObj({
        mtlPath: 'Apartment.mtl',
        objPath: 'Apartment.obj'
      }).then(object => {
        TextureLoader.load(require('../../static/objects/Apartment_BaseColor.png'), texture => {
          object.children[0].material.map = texture
          object.position.set(0, -10, -10)
          object.scale.set(2, 1, 1)
          this.scene.add(object)
        })
      })

      var geometry = new THREE.BoxGeometry(1, 1, 1)
      var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} )
      var mesh = new THREE.Mesh(geometry, material)
      this.scene.add(mesh)

      const light = new THREE.DirectionalLight(0xFFFFFF, 1)
      light.position.set(3, 0, 3)
      this.scene.add(light)

      this.camera.position.z = 5
      this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
      this.renderer.setSize(500, 500)
      document.getElementById('house').appendChild(this.renderer.domElement)
    },
    render () {
      requestAnimationFrame(this.render)
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
</style>
