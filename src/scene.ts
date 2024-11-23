import * as THREE from "three";

import { floor } from "./floor";
import { house } from "./house";
import { ghosts } from "./ghosts";
import { Sky } from "three/examples/jsm/Addons.js";

const scene = new THREE.Scene();

scene.add(floor);
scene.add(house);
scene.add(...ghosts);

// lights
const ambiantLight = new THREE.AmbientLight("#86cdff", 0.5);
scene.add(ambiantLight);

const directionalLight = new THREE.DirectionalLight("#86cdff", 1.5);
directionalLight.position.set(3, 2, -8);
directionalLight.castShadow = true;

directionalLight.shadow.mapSize.width = 256;
directionalLight.shadow.mapSize.height = 256;
directionalLight.shadow.camera.top = 8;
directionalLight.shadow.camera.right = 8;
directionalLight.shadow.camera.bottom = -8;
directionalLight.shadow.camera.left = -8;
directionalLight.shadow.camera.near = 1;
directionalLight.shadow.camera.far = 20;

scene.add(directionalLight);

const sky = new Sky();
sky.scale.set(100, 100, 100);

sky.material.uniforms.turbidity.value = 10;
sky.material.uniforms.rayleigh.value = 3;
sky.material.uniforms.mieCoefficient.value = 0.1;
sky.material.uniforms.mieDirectionalG.value = 0.95;
sky.material.uniforms.sunPosition.value.set(0.3, -0.038, -0.95);

scene.add(sky);

scene.fog = new THREE.FogExp2("#04343f", 0.1);

export { scene };
