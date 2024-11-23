import * as THREE from "three";
import {
  bushARMTexture,
  bushColorTexture,
  bushNormalTexture,
  doorAlphaTexture,
  doorAmbientOcclusionTexture,
  doorColorTexture,
  doorHeightTexture,
  doorMetalnessTexture,
  doorNormalTexture,
  doorRoughnessTexture,
  roofARMTexture,
  roofColorTexture,
  roofNormalTexture,
  wallARMTexture,
  wallColorTexture,
  wallNormalTexture,
} from "./textures";

const HOUSE_WIDTH = 4;

const house = new THREE.Group();

// Walls

const WALL_HEIGHT = 2.5;

const walls = new THREE.Mesh(
  new THREE.BoxGeometry(HOUSE_WIDTH, WALL_HEIGHT, 4),
  new THREE.MeshStandardMaterial({
    map: wallColorTexture,
    aoMap: wallARMTexture,
    roughnessMap: wallARMTexture,
    metalnessMap: wallARMTexture,
    normalMap: wallNormalTexture,
  }),
);

walls.position.y += WALL_HEIGHT / 2;
walls.castShadow = true;
walls.receiveShadow = true;

house.add(walls);

// Door

const DOOR_HEIGHT = 2.2;

const door = new THREE.Mesh(
  new THREE.PlaneGeometry(2.2, DOOR_HEIGHT, 100, 100),
  new THREE.MeshStandardMaterial({
    map: doorColorTexture,
    transparent: true,
    alphaMap: doorAlphaTexture,
    aoMap: doorAmbientOcclusionTexture,
    displacementMap: doorHeightTexture,
    displacementScale: 0.15,
    displacementBias: -0.04,
    normalMap: doorNormalTexture,
    metalnessMap: doorMetalnessTexture,
    roughnessMap: doorRoughnessTexture,
  }),
);
door.position.z += HOUSE_WIDTH / 2 + 0.01;
door.position.y = DOOR_HEIGHT / 2 - WALL_HEIGHT / 2 - 0.1; // Alpha;
walls.add(door);

const doorLight = new THREE.PointLight("#ff7d46", 5);
doorLight.position.set(0, DOOR_HEIGHT / 2, HOUSE_WIDTH / 2 + 0.5);
walls.add(doorLight);

// Roof

const ROOF_HEIGHT = 1.5;

const roof = new THREE.Mesh(
  new THREE.ConeGeometry(3.5, ROOF_HEIGHT, 4),
  new THREE.MeshStandardMaterial({
    map: roofColorTexture,
    aoMap: roofARMTexture,
    roughnessMap: roofARMTexture,
    metalnessMap: roofARMTexture,
    normalMap: roofNormalTexture,
  }),
);

roof.position.y += WALL_HEIGHT + ROOF_HEIGHT / 2;
roof.rotation.y += Math.PI / 4;
roof.castShadow = true;

house.add(roof);

// Bushes

const bushGeometry = new THREE.SphereGeometry(1, 16, 16);
const bushMaterial = new THREE.MeshStandardMaterial({
  color: "#ccffcc",
  map: bushColorTexture,
  aoMap: bushARMTexture,
  roughnessMap: bushARMTexture,
  metalnessMap: bushARMTexture,
  normalMap: bushNormalTexture,
});

const createBush = (scale: number) => {
  const bush = new THREE.Mesh(bushGeometry, bushMaterial);
  bush.scale.set(scale, scale, scale);
  bush.rotation.x = -0.75;

  return bush;
};

const bush1 = createBush(0.5);
bush1.position.set(0.8, 0.2, HOUSE_WIDTH / 2 + 0.2);

const bush2 = createBush(0.25);
bush2.position.set(1.4, 0.1, HOUSE_WIDTH / 2 + 0.1);

const bush3 = createBush(0.4);
bush3.position.set(-0.8, 0.1, HOUSE_WIDTH / 2 + 0.2);

const bush4 = createBush(0.15);
bush4.position.set(-1, 0.05, HOUSE_WIDTH / 2 + 0.6);

house.add(bush1, bush2, bush3, bush4);

export { house, walls, roof };
