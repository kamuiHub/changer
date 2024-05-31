//import * as THREE from " build/three.module.js";
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



//Create a Three.JS Scene
const scene = new THREE.Scene();

//create a new camera with positions and angles
//const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


//Keep the 3D object on a global variable so we can access it later
let object;

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

//Load the file
loader.load(
  `model/dog/dog.glb`,
  function (gltf) {
    //If the file is loaded, add it to the scene
    object = gltf.scene;
    object.scale.set(2.3, 2.3, 2.3);
    scene.add(object);
  }
);

let container = document.getElementById("container3D");

//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); //Alpha: true allows for the transparent background
//renderer.setPixelRatio(window.devicePixelRatio)
renderer.outputEncoding = THREE.sRGBEncoding
renderer.setPixelRatio(window.devicePixelRatio)

renderer.setSize(container.offsetWidth, container.offsetHeight);
//Add the renderer to the DOM
container.appendChild(renderer.domElement);

const target = new THREE.Vector3(-0.5, 1.2, 0)
const initialCameraPosition = new THREE.Vector3(
  20 * Math.sin(0.2 * Math.PI),
  10,
  20 * Math.cos(0.2 * Math.PI)
)

// 640 -> 240
// 8   -> 6
const scale = container.offsetHeight * 0.005 + 4.8
const camera = new THREE.OrthographicCamera(
  -scale,
  scale,
  scale,
  -scale,
  0.01,
  50000
)
camera.position.copy(initialCameraPosition)
camera.lookAt(target)

//Set how far the camera will be from the 3D model
//camera.position.z = 10;

//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 3); // (color, intensity)
topLight.position.set(500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

//OrbitControls allow the camera to move around the scene
//This adds controls to the camera, so we can rotate / zoom it with the mouse
const controls = new OrbitControls(camera, renderer.domElement)
controls.autoRotate = true
controls.target = target

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

//Render the scene
let req = null
let frame = 0
function animate() {
  req = requestAnimationFrame(animate)

  frame = frame <= 100 ? frame + 1 : frame

  if (frame <= 100) {
    const p = initialCameraPosition
    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

    camera.position.y = 10
    camera.position.x =
      p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
    camera.position.z =
      p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
    camera.lookAt(target)
  } else {
    controls.update()
  }

  renderer.render(scene, camera)
}


//Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  camera.aspect = container.offsetWidth / container.offsetHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.offsetWidth, container.offsetHeight);
});

//Start the 3D rendering
animate();
