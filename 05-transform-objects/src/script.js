import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

// creating a Group for the 3 methods; position, scale and rotation (or quarternion)
const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
// remember to add the group to the scene!
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube2.position.x = -2
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cube3.position.x = 2
group.add(cube3)

// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)

// // changing the position of the obj coords
// // mesh.position.x = 0.7
// // mesh.position.y = -0.6
// // mesh.position.z = 1
// mesh.position.set(0.7, -0.6, 1)

// // changing the scale of the obj
// // mesh.scale.x = 2
// // mesh.scale.y = 0.5
// // mesh.scale.z = 0.5
// mesh.scale.set(2, 0.5, 0.5)

// // rotation
// // must change the order FIRST before changing the rotation
// mesh.rotation.reorder('YXZ')
// // this is changing the rotation on the specified axis
// // Math.PI will change the rotation by half
// mesh.rotation.y = Math.PI * 0.25
// mesh.rotation.x = Math.PI * 0.25

// scene.add(mesh)

// // this get the distance from the center of the scene and the objects center
// console.log(mesh.position.length())
// // will take the vector length `mesh.position.length()` and change it to 1
// mesh.position.normalize()

// Axes Helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// the target of the lookAt() method must be a vector3, you can create a new one as done below, or use the mesh.position as the arg for the lookAt() method
// camera.lookAt(new THREE.Vector3(x, y, z))
// will set the camera to look at the position that is set, in this case the position of the mesh
// camera.lookAt(mesh.position)

// distance between camera and the object
// console.log(mesh.position.distanceTo(camera.position))
// variable changes have to be done before the renderer

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)