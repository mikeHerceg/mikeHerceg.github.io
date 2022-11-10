import * as Three from 'three';

export const setupThreeJS = () =>{
    // Camera & Canvas
    const canvas = document.querySelector('#canvas');
    if (!canvas) return;
    console.log(canvas)
    const scene =  new Three.Scene();
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
        console.log(color)
        const geo = new Three.SphereGeometry(.25,24,24);
        const mat =  new Three.MeshStandardMaterial({color});
        const star = new Three.Mesh(geo, mat);

        const [x,y,z] = Array(3).fill(null).map(() => Three.MathUtils.randFloatSpread(200))
        star.position.set(x,y,z);
        scene.add(star)
    }
    Array(400).fill(null).forEach((item,i)=>{
        console.log(i)
          if( i % 2  === 0){
            return addStar(0xffffff);
          } 
          if( i % 5  === 0){
            return addStar(0xfaf1b5);
          }
            addStar(0xb5f6fa);   
    });
    
    //Actions

    const animate = () =>{
        requestAnimationFrame( animate );

       

        renderer.render(scene, camera);
    }
    animate();
}