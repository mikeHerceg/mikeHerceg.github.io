import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const setupThreeJS = () =>{
    // Camera & Canvas
    const canvas = document.querySelector('#canvas');
    if (!canvas) return;
    console.log(canvas)
    const scene =  new Three.Scene();
    scene.background = null 

    const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer =  new Three.WebGLRenderer({
        canvas,
        alpha: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.setZ(30);
    renderer.render(scene, camera);
    
    // Lights

    const pointLight = new Three.PointLight(0xffffff);
    pointLight.position.set(20, 20, 30);

    const ambientLight = new Three.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);
  
    // Items

    const addStar = (color:number) => {
        const geo = new Three.SphereGeometry(.25,24,24);
        const mat =  new Three.MeshStandardMaterial({color});
        const star = new Three.Mesh(geo, mat);

        const [x,y,z] = Array(3).fill(null).map(() => Three.MathUtils.randFloatSpread(200))
        star.position.set(x,y,z);
        scene.add(star)
    }

    Array(400).fill(null).forEach(()=>addStar(0x20ba93));
    
   
    //Actions
    //const controls = new OrbitControls(camera, renderer.domElement);
    // const lightHelper = new Three.PointLightHelper(pointLight)
    // const gridHelper = new Three.GridHelper(200, 50);
    // scene.add(lightHelper, gridHelper);

    const moveCamera = ()=>{
        const t = document.body.getBoundingClientRect().top;
        camera.position.z = t * -0.05;
    }
    document.body.onscroll = moveCamera;

    const animate = () =>{
        requestAnimationFrame( animate );
        //controls.update();
        renderer.render(scene, camera);
    }
    animate();
}