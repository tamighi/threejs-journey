import * as THREE from "three";
import {
  floorAlphaTexture,
  floorARMTexture,
  floorColorTexture,
  floorDisplacementTexture,
  floorNormalTexture,
  graveARMTexture,
  graveColorTexture,
  graveNormalTexture,
} from "./textures";

const FLOOR_SIZE = 20;

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(FLOOR_SIZE, FLOOR_SIZE, 100, 100),
  new THREE.MeshStandardMaterial({
    alphaMap: floorAlphaTexture,
    transparent: true,
    map: floorColorTexture,
    aoMap: floorARMTexture,
    roughnessMap: floorARMTexture,
    metalnessMap: floorARMTexture,
    normalMap: floorNormalTexture,
    displacementMap: floorDisplacementTexture,
    displacementScale: 0.3,
    displacementBias: -0.2,
  }),
);

const rotationMatrix = new THREE.Matrix4().makeRotationX(-Math.PI / 2);
floor.geometry.applyMatrix4(rotationMatrix);
floor.receiveShadow = true;

const GRAVE_HEIGHT = 0.8;
const graves = new THREE.Group();

const graveGeometry = new THREE.BoxGeometry(0.6, GRAVE_HEIGHT, 0.2);
const graveMaterial = new THREE.MeshStandardMaterial({
  map: graveColorTexture,
  aoMap: graveARMTexture,
  roughnessMap: graveARMTexture,
  metalnessMap: graveARMTexture,
  normalMap: graveNormalTexture,
});

for (let i = 0; i < 30; i++) {
  const grave = new THREE.Mesh(graveGeometry, graveMaterial);

  const angle = Math.random() * Math.PI * 2;
  const radius = 3 + (Math.random() * FLOOR_SIZE) / 4;

  const x = Math.sin(angle) * radius;
  const y = GRAVE_HEIGHT / 2 - 0.1;
  const z = Math.cos(angle) * radius;

  grave.position.set(x, y, z);
  grave.rotation.x = (Math.random() - 0.5) * 0.4;
  grave.rotation.y = (Math.random() - 0.5) * 0.4;

  grave.castShadow = true;

  graves.add(grave);
}

floor.add(graves);

export { floor };
