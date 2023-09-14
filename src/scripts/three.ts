import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import Stats from 'three/addons/libs/stats.module.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
})
const container = document.getElementById('container')
renderer.setPixelRatio(window.devicePixelRatio)
if (container !== null) {
  const responsiveWidth = Math.min(window.innerWidth, 600)
  const responsiveHeight = Math.min(window.innerHeight, 400)
  renderer.setSize(responsiveWidth, responsiveHeight, true)
}
function init3d(renderer: THREE.WebGLRenderer): void {
  let mixer: THREE.AnimationMixer
  const clock = new THREE.Clock()
  const container = document.getElementById('container')

  const stats = new Stats()

  if (container !== null) {
    container.appendChild(renderer.domElement)
  }

  const pmremGenerator = new THREE.PMREMGenerator(renderer)

  const scene = new THREE.Scene()
  // scene.background = new THREE.Color(0xbfe3dd)
  scene.environment = pmremGenerator.fromScene(
    new RoomEnvironment(renderer),
    0.04
  ).texture

  const camera = new THREE.PerspectiveCamera(40, 800 / 600, 1, 100)
  camera.position.set(5, 2, 8)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 0.5, 0)
  controls.update()
  controls.enablePan = false
  controls.enableDamping = true
  controls.enableZoom = false

  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('jsm/libs/draco/gltf/')

  const loader = new GLTFLoader()
  loader.setDRACOLoader(dracoLoader)
  loader.load(
    '/models/glasses.glb',
    function (gltf) {
      const model = gltf.scene
      model.position.set(1, 0, 0)

      model.scale.set(0.3, 0.3, 0.3)

      scene.add(model)

      mixer = new THREE.AnimationMixer(model)

      animate()
    },
    undefined,
    function (e) {
      console.error(e)
    }
  )

  /*   window.onresize = function () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
  } */

  window.onresize = function () {
    if (container !== null) {
      const newWidth = Math.min(container.clientWidth, 600)
      const newHeight = Math.min(container.clientHeight, 400)
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight, true)
    } else {
      const newWidth = Math.min(window.innerWidth, 600)
      const newHeight = Math.min(window.innerHeight, 400)
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight, true)
    }
  }

  function animate(): void {
    requestAnimationFrame(animate)

    const delta = clock.getDelta()
    scene.rotation.y += 0.005

    mixer.update(delta)

    controls.update()

    stats.update()

    renderer.render(scene, camera)
  }
}

init3d(renderer)
document.addEventListener('astro:after-swap', () => {
  init3d(renderer)
})
