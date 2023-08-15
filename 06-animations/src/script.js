import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Time
// should be a let since this variable will change
// let time = Date.now()

// Clock
// const clock = new THREE.Clock()

// gsap library
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 })

// Animations
const tick = () => {
    // Clock
    // const elaspedTime = clock.getElapsedTime()
    // console.log(elaspedTime)

    // updates the object using the position, rotaion or scale
    // mesh.rotation.y = Math.sin(elaspedTime)
    // mesh.rotation.x = Math.cos(elaspedTime)
    // mesh.position.y = Math.sin(elaspedTime)
    // mesh.position.x = Math.cos(elaspedTime)
    // mesh.scale.y = Math.sin(elaspedTime)
    // mesh.scale.x = Math.cos(elaspedTime)
    // camera.position.y = Math.sin(elaspedTime)
    // camera.position.x = Math.cos(elaspedTime)
    // camera.lookAt(mesh.position)

    // to update the object 1 revolution per second
    // Math.PI is half of a revolution, multiply by 2 to allow it to change 1 revolution
    // mesh.rotation.y = elapsedTime * Math.PI * 2

    // Render
    renderer.render(scene, camera)

    // tick function will be updated each second based on your frame rate
    window.requestAnimationFrame(tick)
}
tick()

// const tick = () => {
//     // console.log('tick')

//     // time
//     // date.now() is used to get the current timestamp
//     const currentTime = Date.now()
//     // deltaTime will is the difference between currentTime and time
//     const deltaTime = currentTime - time
//     time = currentTime

//     // the numbers loading in the console on the DOM will be smaller if you have a higher framerate
//     console.log(deltaTime)
//     // console.log(time)

//     // update the object
//     // higher framerate will render the object faster
//     // change the number to be smaller for slower animation and larger for a faster animation
//     // using the deltaTime will make sure that the animation is the same across all devices regardless of the FrameRate
//     mesh.rotation.y += 0.002 * deltaTime

//     // render the object after each change to the object
//     renderer.render(scene, camera)

//     // just pass in the tick parameter, no need to call the function
//     // the ticks will be updated each second based on your frame rate; in this case 60
//     window.requestAnimationFrame(tick)
// }
// tick()