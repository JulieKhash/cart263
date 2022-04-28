// loading
const textureLoader = new THREE.TextureLoader();
const normalTexture = textureLoader.load("/textures/normalMap.png");

const gui = new dat.GUI();

// canvas
const canvas = document.querySelector("canvas.webgl");

// scene
const scene = new THREE.Scene();

// objects
const geometry = new THREE.SphereGeometry(0.5, 64, 64);
// const geometry = new THREE.PlaneGeometry(1, 1.5);

// materials
const material = new THREE.MeshStandardMaterial({
  metalness: 20,
  roughness: 0.7,
  side: THREE.DoubleSide,
});
//reference to our loaded texture
material.normalMap = normalTexture;
material.color = new THREE.Color(0x0039e6);

// mesh
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

console.log(mesh);

//////////////////// lights

// light 1
const pointLight = new THREE.PointLight(0x002db3, 0.7);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

// light 2
const pointLight2 = new THREE.PointLight(0xff1a1a, 2);
// positons for x, y,z (by default)
pointLight2.position.set(0.1, -0.2, -3);
pointLight2.intensity = 1.7;
scene.add(pointLight2);

// adding a folder that extends its content
const light1 = gui.addFolder(`Light 1`);

// controls panel for y postions (minimun, maximum, and step)
light1.add(pointLight2.position, `y`).min(-3).max(3).step(0.01);
light1.add(pointLight2.position, `x`).min(-6).max(6).step(0.01);
light1.add(pointLight2.position, `z`).min(-3).max(3).step(0.01);
light1.add(pointLight2, `intensity`).min(0).max(10).step(0.01);

// shows a ligth refernce point in the scene
const pointLightHelper = new THREE.PointLightHelper(pointLight2, 0.3);
scene.add(pointLightHelper);

// light 3
const pointLight3 = new THREE.PointLight(0xff1a1a, 2);
// positons for x, y,z (by default)
pointLight3.position.set(0.1, -0.2, -3);
pointLight3.intensity = 1.7;
scene.add(pointLight3);

const light2 = gui.addFolder(`Light 2`);

// controls panel for y postions (minimun, maximum, and step)
light2.add(pointLight3.position, `y`).min(-3).max(3).step(0.01);
light2.add(pointLight3.position, `x`).min(-6).max(6).step(0.01);
light2.add(pointLight3.position, `z`).min(-3).max(3).step(0.01);
light2.add(pointLight3, `intensity`).min(0).max(10).step(0.01);

// object to change the color property of light 2
const light2Color = {
  color: 0xff1a1a,
};

light2.addColor(light2Color, `color`).onChange(() => {
  pointLight3.color.set(light2Color.color);
});

// shows a ligth refernce point in the scene
const pointLightHelper2 = new THREE.PointLightHelper(pointLight3, 0.3);
scene.add(pointLightHelper2);

// browser window resize
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener(`resize`, () => {
  // update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  //update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  //update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);

// controls
const controls = new THREE.OrbitControls(camera, canvas);
controls.enableDamping = true;

// animate

document.addEventListener(`mousemove`, mouseMove);

let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;

const windowX = window.innerWidth / 2;
const windowY = window.innerHeight / 2;

function mouseMove(event) {
  mouseX = event.clientX - windowX;
  mouseY = event.clientY - windowY;
  // console.log(mouseY);
}

const updateSphere = (event) => {
  mesh.position.y = window.scrollY * -0.001;
};

window.addEventListener(`scroll`, updateSphere);

const clock = new THREE.Clock();

const tick = () => {
  targetX = mouseX * 0.001;
  targetY = mouseY * 0.001;

  const elapsedTime = clock.getElapsedTime();
  mesh.rotation.y = 0.5 * elapsedTime;
  mesh.rotation.x = 0.5 * elapsedTime;

  // mesh.rotation.x += 0.5 * (targetX - mesh.rotation.y);
  // mesh.rotation.y += 0.5 * (targetX - mesh.rotation.y);
  // mesh.rotation.z += -0.05 * (targetY - mesh.rotation.x);
  // update orbital OrbitControl
  controls.update();

  // render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
