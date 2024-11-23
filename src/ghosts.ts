import * as THREE from "three";

const ghost1 = new THREE.PointLight("#8800ff", 6);
const ghost2 = new THREE.PointLight("#ff0088", 6);
const ghost3 = new THREE.PointLight("#ff0000", 6);

export const ghosts = [ghost1, ghost2, ghost3];

ghosts.forEach((ghost) => {
  ghost.castShadow = true;
  ghost.shadow.mapSize.width = 256;
  ghost.shadow.mapSize.height = 256;
  ghost.shadow.camera.far = 10;
});
