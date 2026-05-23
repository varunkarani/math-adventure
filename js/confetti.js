function launchConfetti(){

  const canvas=
    document.getElementById("confettiCanvas");

  const ctx=
    canvas.getContext("2d");

  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;

  const pieces=[];

  for(let i=0;i<100;i++){

    pieces.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height-canvas.height,
      r:Math.random()*6+2
    });
  }

  let frame=0;

  const interval=setInterval(()=>{

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    pieces.forEach(p=>{

      ctx.beginPath();

      ctx.arc(
        p.x,
        p.y,
        p.r,
        0,
        Math.PI*2
      );

      ctx.fillStyle=
        `hsl(${Math.random()*360},100%,60%)`;

      ctx.fill();

      p.y+=4;
    });

    frame++;

    if(frame>60){

      clearInterval(interval);

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );
    }

  },16);
}