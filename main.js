// 0. globalize
let scene, camera, renderer, cube;

function init() {
  // 1. Initialize
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75, // degree
    window.innerWidth / window.innerHeight, // aspect ratio (width of element / height of element)
    0.1, // near
    1000 // far
  );

  // 2. Renderer
  // initialize renderer - webgl
  
  renderer = new THREE.WebGLRenderer({ antialias: true });

  // Set size of renderer
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  // 3. Box Geometry Object
  const geometry = new THREE.BoxGeometry(1,1,1); // depth width height
  const texture = new THREE.TextureLoader().load('textures/crate.gif');
  const material = new THREE.MeshBasicMaterial({ map: texture });
  // const material = new THREE.MeshBasicMaterial({color: 0x04232});
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  
  camera.position.z = 5;
}


// function - animate
function animate() {
  // create loop for renderer
  requestAnimationFrame(animate);

  // loop rotate
  cube.rotation.x += 0.01; // speed
  cube.rotation.y += 0.01; // speed

  renderer.render(scene, camera);
}

// function - resize
function onWindowResize() {
  // set camera frustum ratio
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();