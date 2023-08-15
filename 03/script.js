const scene = new THREE.Scene()

// Creating a cube
// the argument that goes into BoxGeometry is the Width, Height, Length
const geometry = new THREE.BoxGeometry(1, 1, 1)
// can write the color by either color name, hexadecimal code
const material = new THREE.MeshBasicMaterial({ color: '#ff0000' })
// instantiate the Mesh with the geometry and material variables
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
// PerspectiveCamera takes the arg in the order of `FOV, Aspect Ratio (usually viewport width / viewport height)`
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)