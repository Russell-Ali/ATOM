// Imports

import "../dist/styles.css";
import * as THREE from "three/build/three.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import { TimelineMax } from "gsap/gsap-core";
//End of Imports

//Necessary Variables
const tl = new TimelineMax({ repeat: -1 });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  500
);
const gltfLoader = new GLTFLoader();
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
  antialias: true,
  alpha: true,
});
var lamp = new THREE.DirectionalLight(lightCLr, 3);
let atom;
let atomPosition;
var lightCLr = "0xfdfffc";
// End of Necessary Variables
document.querySelector(".git").addEventListener("mouseover", mouseOver);
document.querySelector(".git").addEventListener("mouseout", mouseOut);
function mouseOver() {
  document.querySelector(".git").style.fill = "#00d4f5";
}
function mouseOut() {
  document.querySelector(".git").style.fill = "#fdfffc";
}

//Settings for Variables
camera.position.set(0, 0, 24);
gltfLoader.load("../dist/assets/atom.glb", (gltf) => {
  scene.add(gltf.scene);
  atom = gltf.scene;
  atomPosition = atom.position.set(8, -1, 0);
  tl.from(atomPosition, {
    y: "+=1.4",
    ease: "power1.inOut",
    duration: 1.4,
  }).from(atomPosition, { y: "-=1.4", ease: "power1.inOut", duration: 1.4 });
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.render(scene, camera);
lamp.position.set(12, 20, 0);

//End of Settings for Variables

//Add to the Scene

scene.add(lamp);
//End of Add to the Scene

//Functions

function animate() {
  requestAnimationFrame(animate);
  renderer.update;
  atom.rotation.x += 0.02;
  atom.rotation.z += 0.01;
  renderer.render(scene, camera);
}
animate();

//End of Functions

//HOT module DO NOT TOUCH1
if (module.hot) {
  module.hot.accept();
}
//HOT module DO NOT TOUCH!
