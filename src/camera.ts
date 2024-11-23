import * as THREE from "three";

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
camera.position.x = 4;
camera.position.y = 2;
camera.position.z = 5;

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

export { camera };
