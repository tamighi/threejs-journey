import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import "./index.css";

import { camera } from "./camera";
import { scene } from "./scene";
import { ghosts } from "./ghosts";

const canvas = document.querySelector("#webgl") as HTMLCanvasElement;

const ctrls = new OrbitControls(camera, canvas);
ctrls.enableDamping = true;

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));

const tick = (t: number) => {
  ctrls.update();
  renderer.setSize(window.innerWidth, window.innerHeight);

  ghosts.forEach((ghost, i) => {
    const ghostAngle = (((i % 2) * 2 - 1) * (t * 0.001)) / (2 + i / 3);

    ghost.position.x = Math.cos(ghostAngle) * (3 + (i % 5));
    ghost.position.z = Math.sin(ghostAngle) * (3 + (i % 5));
    ghost.position.y = Math.abs(
      Math.sin(ghostAngle) + Math.sin(ghostAngle * 2.34),
    );
  });

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

window.requestAnimationFrame(tick);
