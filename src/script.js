import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import Earthjpg from "../static/2k_earth_daymap.jpg";
import mercury from "../static/mercury.jpg";
import neptune from "../static/neptune.jpg";
import mars from "../static/mars.jpg";
import jupiter from "../static/jupiter.jpg";
import saturn from "../static/saturn.jpg";
import uranus from "../static/uranus.jpg";
import venus from "../static/venus.jpg";
import ring from "../static/ring.png";


// import sun from "../static/sun.jpg";
import sunjpg from "../static/sun.jpg";
// Debug
const gui = new dat.GUI();

//noice
// let noise = new SimplexNoise(),


// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Objects
const geometry = new THREE.BoxGeometry();

// Materials

const material = new THREE.MeshBasicMaterial();
material.transparent = true;
//material.color = new THREE.Color(0xffff00);

// Mesh
const sphere = new THREE.Mesh(geometry, material);

//noice
// noise = new SimplexNoise(); TH

// +
// Lights

// const pointLight = new THREE.PointLight(0xffffff, 0.9);
// pointLight.position.x = 2;
// pointLight.position.y = 3;
// pointLight.position.z = 4;
// scene.add(pointLight);
let ambientPointLight = new THREE.AmbientLight("#ffffff", 1);
ambientPointLight.position.set(0, 20, 20);
scene.add(ambientPointLight);

gui.add(ambientPointLight, "intensity", 0, 1);
// gui.add(ambientPointLight.position, "x", -10, 10).name("Xlight");
// gui.add(ambientPointLight.position, "y", -10, 10).name("Ylight");
// gui.add(ambientPointLight.position, "z", -10, 10).name("Zlight");

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

scene.background = new THREE.Color(0x111111);
/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.01,
  1000
);

// camera.position.x = 0;
// camera.position.y = 0;
// camera.position.z = 2;
camera.position.set(10, -10, 4);

scene.add(camera);

gui.add(camera.position, "x", -10, 10);
gui.add(camera.position, "y", -10, 10);
gui.add(camera.position, "z", -10, 10);


/**
 * Renderer
 */
 const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

//Nucleus
// const icosahedronGeometry = new THREE.IcosahedronGeometry(30, 10);
// const lambertMaterial=new THREE.MeshLambertMaterial({color:0xffffff});
// const nucleus = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
// scene.add(nucleus); // Add the nucleus to the scene

const loader = new THREE.TextureLoader();
const textureSphereBg = loader.load("https://i.ibb.co/4gHcRZD/bg3-je3ddz.jpg");
const Earth=loader.load(Earthjpg);
const suns=loader.load(sunjpg);
const mercurys=loader.load(mercury);
const neptunes=loader.load(neptune);
const marss=loader.load(mars);
const jupiters=loader.load(jupiter);
const saturns=loader.load(saturn);
const uranuss=loader.load(uranus);
const venuss=loader.load(venus);
const rings=loader.load(ring);

const texturenucleus = loader.load("https://i.ibb.co/hcN2qXk/star-nc8wkw.jpg");
const textureStar = loader.load("https://i.ibb.co/ZKsdYSz/p1-g3zb2a.png");
const texture1 = loader.load("https://i.ibb.co/F8by6wW/p2-b3gnym.png");
const texture2 = loader.load("https://i.ibb.co/yYS2yx5/p3-ttfn70.png");
const texture4 = loader.load("https://i.ibb.co/yWfKkHh/p4-avirap.png");

texturenucleus.anisotropy = 16;

let spherg = new THREE.IcosahedronGeometry(60, 10);
let materials = new THREE.MeshPhongMaterial({ map: Earth,side: THREE.DoubleSide,transparent: true,opacity: 1});
let sphered = new THREE.Mesh(spherg, materials);
sphered.position.set(0, 2, -26);
gui.add(sphered.position, "x", -100, 100).name("earthx");
gui.add(sphered.position, "y", -100, 100).name("earthy");
gui.add(sphered.position, "z", -100, 100).name("earthz");
sphered.scale.set(2,2,2)
scene.add(sphered);

let sun = new THREE.IcosahedronGeometry(40, 10);

let sunmaterials = new THREE.MeshPhongMaterial({ map: suns,side: THREE.DoubleSide,transparent: true,opacity: 1});
let sunsphered = new THREE.Mesh(sun, sunmaterials);
sunsphered.position.set(1, 2, 2);
gui.add(sunsphered.position, "x", -100, 100).name("Xsun");
gui.add(sunsphered.position, "y", -100, 100).name("Ysun");
gui.add(sunsphered.position, "z", -100, 100).name("Zsun");
sunsphered.scale.set(0.1, 0.1, 0.1);
scene.add(sunsphered);



//mercury

let mercurygeometry=new THREE.IcosahedronGeometry(20,10)
let mercurymaterials=new THREE.MeshPhongMaterial({map:mercurys,side:THREE.DoubleSide,transparent:true,opacity:1})
let mercurysphered=new THREE.Mesh(mercurygeometry,mercurymaterials)
mercurysphered.position.set(0,2,-10)
mercurysphered.scale.set(0.1,0.1,0.1)
gui.add(mercurysphered.position, "x", -100, 100).name("Xmercury");
gui.add(mercurysphered.position, "y", -100, 100).name("Ymercury");
gui.add(mercurysphered.position, "z", -100, 100).name("Zmercury");

scene.add(mercurysphered);

//venus
 let venusgeometry=new THREE.IcosahedronGeometry(20,10)
  let venusmaterials=new THREE.MeshPhongMaterial({map:venuss,side:THREE.DoubleSide,transparent:true,opacity:1})
  let venussphered=new THREE.Mesh(venusgeometry,venusmaterials)
  venussphered.position.set(0,2.3,-17)
  venussphered.scale.set(0.1,0.1,0.1)
  gui.add(venussphered.position, "x", -100, 100).name("Xvenus");
  gui.add(venussphered.position, "y", -100, 100).name("Yvenus");
  gui.add(venussphered.position, "z", -100, 100).name("Zvenus");
  scene.add(venussphered);

  //mars
  let marsgeometry=new THREE.IcosahedronGeometry(20,10)
  let marsmaterials=new THREE.MeshPhongMaterial({map:marss,side:THREE.DoubleSide,transparent:true,opacity:1}) 
  let marssphered=new THREE.Mesh(marsgeometry,marsmaterials)
  marssphered.position.set(0,2,-35)
  marssphered.scale.set(0.1,0.1,0.1)
  gui.add(marssphered.position, "x", -100, 100).name("Xmars");
  gui.add(marssphered.position, "y", -100, 100).name("Ymars");
  gui.add(marssphered.position, "z", -100, 100).name("Zmars");
scene.add(marssphered);

//jupiter
let jupitergeometry=new THREE.IcosahedronGeometry(20,10)
let jupitermaterials=new THREE.MeshPhongMaterial({map:jupiters,side:THREE.DoubleSide,transparent:true,opacity:1})
let jupitersphered=new THREE.Mesh(jupitergeometry,jupitermaterials)
jupitersphered.position.set(0,2,-50)
jupitersphered.scale.set(0.1,0.1,0.1)
gui.add(jupitersphered.position, "x", -100, 100).name("Xjupiter");
gui.add(jupitersphered.position, "y", -100, 100).name("Yjupiter");
gui.add(jupitersphered.position, "z", -100, 100).name("Zjupiter");
scene.add(jupitersphered);  

//uranus
let uranusgeometry=new THREE.IcosahedronGeometry(20,10)
let uranusmaterials=new THREE.MeshPhongMaterial({map:uranuss,side:THREE.DoubleSide,transparent:true,opacity:1})
let uranussphered=new THREE.Mesh(uranusgeometry,uranusmaterials)
uranussphered.position.set(0,2,-80)
uranussphered.scale.set(0.1,0.1,0.1)
gui.add(uranussphered.position, "x", -100, 100).name("Xuranus");
gui.add(uranussphered.position, "y", -100, 100).name("Yuranus");
gui.add(uranussphered.position, "z", -100, 100).name("Zuranus");
scene.add(uranussphered);

// neptune
let neptunegeometry=new THREE.IcosahedronGeometry(20,10)
let neptunematerials=new THREE.MeshPhongMaterial({map:neptunes,side:THREE.DoubleSide,transparent:true,opacity:1})
let neptunesphered=new THREE.Mesh(neptunegeometry,neptunematerials)
neptunesphered.position.set(0,2,-100)
neptunesphered.scale.set(0.1,0.1,0.1)
gui.add(neptunesphered.position, "x", -100, 100).name("Xneptune");
gui.add(neptunesphered.position, "y", -100, 100).name("Yneptune");
gui.add(neptunesphered.position, "z", -100, 100).name("Zneptune");
scene.add(neptunesphered);

//saturn
let saturngeometry=new THREE.IcosahedronGeometry(20,10)
let saturnmaterials=new THREE.MeshPhongMaterial({map:saturns,side:THREE.DoubleSide,transparent:true,opacity:1})
let saturnsphered=new THREE.Mesh(saturngeometry,saturnmaterials)
saturnsphered.position.set(0,2,-65)
saturnsphered.scale.set(0.1,0.1,0.1)
gui.add(saturnsphered.position, "x", -100, 100).name("Xsaturn");
gui.add(saturnsphered.position, "y", -100, 100).name("Ysaturn");
gui.add(saturnsphered.position, "z", -100, 100).name("Zsaturn");
scene.add(saturnsphered);

//saturn ring
let saturnringgeometry=new THREE.RingGeometry(15,20,22)
let saturnringmaterials=new THREE.MeshPhongMaterial({map:rings,side:THREE.DoubleSide,transparent:true,opacity:1})
let saturnringsphered=new THREE.Mesh(saturnringgeometry,saturnringmaterials)
saturnringsphered.position.set(0,2,-65)
saturnringsphered.scale.set(0.1,0.1,0.1)
gui.add(saturnringsphered.position, "x", -100, 100).name("Xsaturnring");
gui.add(saturnringsphered.position, "y", -100, 100).name("Ysaturnring");
gui.add(saturnringsphered.position, "z", -100, 100).name("Zsaturnring");
scene.add(saturnringsphered);







scene.background = new THREE.Color(0x000000);

textureSphereBg.anisotropy = 16;


let geometrySphereBg = new THREE.SphereBufferGeometry(150, 40, 40);
// gui.add(sphered.position, "x", -10, 10);
let materialSphereBg = new THREE.MeshBasicMaterial({
//  side:THREE.DoubleSide,
  side: THREE.BackSide,
  // color: 0xff00ff,
  map: textureSphereBg,
});
const sphereBg = new THREE.Mesh(geometrySphereBg, materialSphereBg);
scene.add(sphereBg);

 /*    Moving Stars   */
 let starsGeometry = new THREE.Geometry();

 for (let i = 0; i < 50; i++) {
     let particleStar = randomPointSphere(150); 

     particleStar.velocity = THREE.MathUtils.randInt(400, 500);

     particleStar.startX = particleStar.x;
     particleStar.startY = particleStar.y;
     particleStar.startZ = particleStar.z;

     starsGeometry.vertices.push(particleStar);
 }
 let starsMaterial = new THREE.PointsMaterial({
     size: 5,
     color: "#ffffff",
     transparent: true,
     opacity: 0.8,
     map: textureStar,
     blending: THREE.AdditiveBlending,
 });
 starsMaterial.depthWrite = false;  
 const stars = new THREE.Points(starsGeometry, starsMaterial);
 scene.add(stars);


//star

const starmaterial = new THREE.MeshPhongMaterial({ map: textureStar });
function createStars(texture, size, total) {
  let pointGeometry = new THREE.Geometry();
  let PointMaterial = new THREE.PointsMaterial({
    size,
    map: texture,
    blending: THREE.AdditiveBlending,
 
  });

  for (let i = 0; i < total; i++) {
    let radius = THREE.MathUtils.randInt(149, 70); 
    let particles = randomPointSphere(radius);
    pointGeometry.vertices.push(particles);

  }
    return new THREE.Points(pointGeometry, PointMaterial);
}

scene.add(createStars(texture1, 15, 20));   
scene.add(createStars(texture2, 5, 5));
scene.add(createStars(texture4, 7, 5));

function randomPointSphere (radius) {
  let theta = 2 * Math.PI * Math.random();
  let phi = Math.acos(2 * Math.random() - 1);
  let dx = 0 + (radius * Math.sin(phi) * Math.cos(theta));
  let dy = 0 + (radius * Math.sin(phi) * Math.sin(theta));
  let dz = 0 + (radius * Math.cos(phi));
  return new THREE.Vector3(dx, dy, dz);
}



/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();


   //Stars  Animation
   stars.geometry.vertices.forEach(function (v) {
    v.x += (0 - v.x) / v.velocity;
    v.y += (0 - v.y) / v.velocity;
    v.z += (0 - v.z) / v.velocity;

    v.velocity -= 0.3;

    if (v.x <= 5 && v.x >= -5 && v.z <= 5 && v.z >= -5) {
        v.x = v.startX;
        v.y = v.startY;
        v.z = v.startZ;
        v.velocity = THREE.MathUtils.randInt(50, 300);
    }

    stars.geometry.verticesNeedUpdate = false;

});

    //Nucleus Animation
    sphered.geometry.vertices.forEach(function (v) {
      let time = Date.now();
      v.normalize();
  //     let distance = sphered.geometry.parameters.radius + noise.noise3D(
  //         v.x + time * 0.0005,
  //         v.y + time * 0.0003,
  //         v.z + time * 0.0008
  //     ) * blobScale;
  //     v.multiplyScalar(distance);
   })
  sphered.geometry.verticesNeedUpdate = false;
  sphered.geometry.normalsNeedUpdate = false;
  sphered.geometry.computeVertexNormals();
  sphered.geometry.computeFaceNormals();
  //sphered.rotation.y += 0.002;

  // Update objects
  // sphere.rotation.y = 0.5 * elapsedTime;
  // sphere.rotation.x = 0.5 * elapsedTime;
  // sphere.rotation.z = 0.5 * elapsedTime;

  //Sphere Beckground Animation
  // sphereBg.rotation.x += 0.002;
  // sphereBg.rotation.y += 0.002;
  // sphereBg.rotation.z += 0.002;
  // Update Orbital Controls
  // controls.update()

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
