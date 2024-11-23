import * as THREE from "three";
import {
  castleBrickBroken06Arm1kWebp,
  castleBrickBroken06Diff1kWebp,
  castleBrickBroken06NorGl1kWebp,
  coastSandRocks02Arm1kWebp,
  coastSandRocks02Diff1kWebp,
  coastSandRocks02Disp1kWebp,
  coastSandRocks02NorGl1kWebp,
  doorAlphaWebp,
  doorAmbientOcclusionWebp,
  doorColorWebp,
  doorHeightWebp,
  doorMetalnessWebp,
  doorNormalWebp,
  doorRoughnessWebp,
  floorAlphaWebp,
  leavesForestGroundArm1kWebp,
  leavesForestGroundDiff1kWebp,
  leavesForestGroundNorGl1kWebp,
  plasteredStoneWallArm1kWebp,
  plasteredStoneWallDiff1kWebp,
  plasteredStoneWallNorGl1kWebp,
  roofSlates02Arm1kWebp,
  roofSlates02Diff1kWebp,
  roofSlates02NorGl1kWebp,
} from "./assets";

const textureLoader = new THREE.TextureLoader();

// Floor
export const floorAlphaTexture = textureLoader.load(floorAlphaWebp);
export const floorColorTexture = textureLoader.load(coastSandRocks02Diff1kWebp);
export const floorARMTexture = textureLoader.load(coastSandRocks02Arm1kWebp);
export const floorNormalTexture = textureLoader.load(
  coastSandRocks02NorGl1kWebp,
);
export const floorDisplacementTexture = textureLoader.load(
  coastSandRocks02Disp1kWebp,
);

[
  floorColorTexture,
  floorARMTexture,
  floorNormalTexture,
  floorDisplacementTexture,
].forEach((texture) => {
  texture.repeat.set(8, 8);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
});

floorColorTexture.colorSpace = THREE.SRGBColorSpace;

// Walls
export const wallNormalTexture = textureLoader.load(
  castleBrickBroken06NorGl1kWebp,
);
export const wallColorTexture = textureLoader.load(
  castleBrickBroken06Diff1kWebp,
);
export const wallARMTexture = textureLoader.load(castleBrickBroken06Arm1kWebp);

wallColorTexture.colorSpace = THREE.SRGBColorSpace;

// Roofs
export const roofNormalTexture = textureLoader.load(roofSlates02NorGl1kWebp);
export const roofColorTexture = textureLoader.load(roofSlates02Diff1kWebp);
export const roofARMTexture = textureLoader.load(roofSlates02Arm1kWebp);

[roofNormalTexture, roofColorTexture, roofARMTexture].forEach((texture) => {
  texture.repeat.set(3, 1);
  texture.wrapS = THREE.RepeatWrapping;
});

roofColorTexture.colorSpace = THREE.SRGBColorSpace;

// Bushs
export const bushNormalTexture = textureLoader.load(
  leavesForestGroundNorGl1kWebp,
);
export const bushColorTexture = textureLoader.load(
  leavesForestGroundDiff1kWebp,
);
export const bushARMTexture = textureLoader.load(leavesForestGroundArm1kWebp);

[bushNormalTexture, bushColorTexture, bushARMTexture].forEach((texture) => {
  texture.repeat.set(2, 1);
  texture.wrapS = THREE.RepeatWrapping;
});

bushColorTexture.colorSpace = THREE.SRGBColorSpace;

// Graves
export const graveNormalTexture = textureLoader.load(
  plasteredStoneWallNorGl1kWebp,
);
export const graveColorTexture = textureLoader.load(
  plasteredStoneWallDiff1kWebp,
);
export const graveARMTexture = textureLoader.load(plasteredStoneWallArm1kWebp);

[graveNormalTexture, graveColorTexture, graveARMTexture].forEach((texture) => {
  texture.repeat.set(0.3, 0.4);
});

graveColorTexture.colorSpace = THREE.SRGBColorSpace;

// door

export const doorColorTexture = textureLoader.load(doorColorWebp);
export const doorAlphaTexture = textureLoader.load(doorAlphaWebp);
export const doorAmbientOcclusionTexture = textureLoader.load(
  doorAmbientOcclusionWebp,
);
export const doorHeightTexture = textureLoader.load(doorHeightWebp);
export const doorNormalTexture = textureLoader.load(doorNormalWebp);
export const doorMetalnessTexture = textureLoader.load(doorMetalnessWebp);
export const doorRoughnessTexture = textureLoader.load(doorRoughnessWebp);

doorColorTexture.colorSpace = THREE.SRGBColorSpace;
