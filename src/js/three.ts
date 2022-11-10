import * as Three from 'three';
import galaxy from '../assets/galaxy-bg.jpg';

export const setupThreeJS = () =>{
    // Camera & Canvas
    const canvas = document.querySelector('#canvas');
    if (!canvas) return;
    console.log(canvas)
    const scene =  new Three.Scene();
    scene.background = new Three.TextureLoader().load(galaxy);

    const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer =  new Three.WebGLRenderer({
        canvas,
    
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.setZ(30);
    renderer.render(scene, camera);
    
    // Lights

    const pointLight = new Three.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

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

    Array(400).fill(null).forEach(()=>addStar(0xffffff));
    
   
    //Actions

    const moveCamera = ()=>{
        const t = document.body.getBoundingClientRect().top;
        camera.position.z = t * -0.05;
    }
    document.body.onscroll = moveCamera;

    const animate = () =>{
        requestAnimationFrame( animate );
        renderer.render(scene, camera);
    }
    animate();
}