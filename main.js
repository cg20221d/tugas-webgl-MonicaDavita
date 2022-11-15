
function main() {
  /** @type {HTMLCanvasElement} */
  var kanvas = document.getElementById("kanvas");
  kanvas.width = kanvas.offsetWidth
  kanvas.height = kanvas.offsetWidth
  // Initialize the GL context
  var gl = kanvas.getContext("webgl");
  var vertices=[];

  //-----------------------------------ANGKA 09 KUNING----------------------------------//

  var verticesNumberYellow = [
    //Inner 0
     -0.5, 0.7, -0.5, 0.992, 0.855, 0.223, //0
     -0.5, 0.2, -0.5, 0.992, 0.855, 0.223,
     -0.3, 0.2, -0.5, 0.992, 0.855, 0.223,
     -0.3, 0.7, -0.5, 0.992, 0.855, 0.223, //3

    //Outer 0
    -0.7, 0.9, 0.5, 0.992, 0.855, 0.223, //4
    -0.7, 0.0, 0.5, 0.992, 0.855, 0.223,
    -0.1, 0.0, 0.5, 0.992, 0.855, 0.223,
    -0.1, 0.9, 0.5, 0.992, 0.855, 0.223, //7

    //Outer 9
    -0.4, 0.0, 0.4, 0.992, 0.855, 0.223, //8
    -0.4, -0.2, 0.4, 0.992, 0.855, 0.223,
    0.5, -0.2, 0.5, 0.992, 0.855, 0.223,
    0.5, 0.9, 0.5, 0.992, 0.855, 0.223,
    -0.1, 0.9, 0.1, 0.992, 0.855, 0.223, //12

    //Outer 9
    -0.1, 0.20, 0.1, 0.992, 0.855, 0.223, //13
    0.2, 0.20, 0.2, 0.992, 0.855, 0.223, 
    0.2, 0.0, 0.2, 0.992, 0.855, 0.223,
    -0.1, 0.0, 0.1, 0.992, 0.855, 0.223, //16

    //Inner 9
    0.04, 0.75, -0.04, 0.992, 0.855, 0.223, //17
    0.34, 0.75, -0.34, 0.992, 0.855, 0.223,
    0.34, 0.35, -0.34, 0.992, 0.855, 0.223,
    0.04, 0.35, -0.04, 0.992, 0.855, 0.223, //20
  ];

//--------------------------------ANGKA 0 PUTIH----------------------//

var verticesNumberWhite = [
  //Upper 0
  -0.7, 0.9, -0.7, 1, 1, 1, //21
  -0.6, 0.95, -0.6, 1, 1, 1,
  0.0, 0.95, 0.0, 1, 1, 1,
  -0.1, 0.9, -0.1, 1, 1, 1, //24

  //Upper-Right 0
  0.0, 0.95, 0, 1, 1, 1, //25
  0.0, 0.9, 0, 1, 1, 1, //26

  //Lower-Right 0
  -0.1, 0.0, -0.1, 1, 1, 1, //27
  0.0, 0.1, 0, 1, 1, 1,
  0.0, 0.2, 0, 1, 1, 1, //29
];

//--------------------------------ANGKA 9 PINK----------------------//

var verticesNumberPink = [
  //Sisi Kiri 9
  0.04, 0.75, -0.04, 0.977, 0.184, 0.707, //30
  0.01, 0.65, -0.01, 0.977, 0.184, 0.707,
  0.01, 0.25, 0.01, 0.977, 0.184, 0.707,
  0.04, 0.35, 0.04, 0.977, 0.184, 0.707, //33

  //Right 9
  0.34, 0.75, -0.34, 0.977, 0.184, 0.707, //34
  0.30, 0.65, -0.3, 0.977, 0.184, 0.707,
  0.30, 0.25, 0.3, 0.977, 0.184, 0.707,
  0.34, 0.35, 0.34, 0.977, 0.184, 0.707, //37

  //Upper 9
  0.01, 0.65, 0.01, 0.977, 0.184, 0.707, //38
  0.30, 0.65, 0.3, 0.977, 0.184, 0.707, //39

  //Lower 9
  0.01, 0.25, 0.01, 0.977, 0.184, 0.707, //40
  0.30, 0.25, 0.3, 0.977, 0.184, 0.707, //41
];

  //--------------------------------HURUF T PINK / BELAKANG----------------------//
var verticesLetterPink = [
  //Atas T
  -0.7, -0.1, -0.7, 0.977, 0.184, 0.707, //42
  -0.7, -0.3, -0.7, 0.977, 0.184, 0.707,
  0.0, -0.1, 0, 0.977, 0.184, 0.707,
  0.0, -0.3, 0, 0.977, 0.184, 0.707, //45

  //Bawah T
  -0.47, -0.1, -0.47, 0.977, 0.184, 0.707, //46
  -0.47, -0.8, -0.47, 0.977, 0.184, 0.707,
  -0.23, -0.8, -0.23, 0.977, 0.184, 0.707,
  -0.23, -0.1, -0.23, 0.977, 0.184, 0.707, //49
];

//--------------------------------HURUF T PUTIH / DEPAN ----------------------//
var verticesTWhite = [
  //Upper T
  -0.75, -0.2, 0.75, 1, 1, 1, //50
  -0.75, -0.4, 0.75, 1, 1, 1,
  -0.05, -0.2, 0.05, 1, 1, 1,
  -0.05, -0.4, 0.05, 1, 1, 1, //53

  //Lower T
  -0.52, -0.2, 0.52, 1, 1, 1, //54
  -0.52, -0.9, 0.52, 1, 1, 1, 
  -0.28, -0.9, 0.28, 1, 1, 1,
  -0.28, -0.2, 0.28, 1, 1, 1, //57

  //Upper-Right T
  0.0, -0.3, 0, 1, 1, 1, //58
  -0.05, -0.4, 0.05, 1, 1, 1,
  -0.05, -0.2, 0.05, 1, 1, 1,
  0.0, -0.1, 0.0, 1, 1, 1, //61

  //Upper-Left T
  -0.75, -0.2, 0.75, 1, 1, 1, //62
  -0.7, -0.1, 0.7, 1, 1, 1,
  -0.7, -0.3, 0.7, 1, 1, 1,
  -0.75, -0.4, 0.75, 1, 1, 1, //65

  //LOWER SHADOW T
  -0.28, -0.9, 0.28, 1, 1, 1, //66
  -0.23, -0.8, 0.23, 1, 1, 1, //67
];

//--------------------------------HURUF A KUNING / BELAKANG ----------------------//
var verticesAYellow = [
  //Left A
  0.20, -0.1, -0.2, 0.992, 0.855, 0.223, //68
  -0.05, -0.9, -0.05, 0.992, 0.855, 0.223,
  0.45, -0.1, -0.45, 0.992, 0.855, 0.223, //70

  //Right A
  0.20, -0.1, -0.2, 0.992, 0.855, 0.223, //71
  0.75, -0.9, -0.75, 0.992, 0.855, 0.223,
  0.45, -0.1, -0.45, 0.992, 0.855, 0.223, //73

  //Left Bottom A
  -0.05, -0.9, -0.05, 0.992, 0.855, 0.223, //74
  0.3, -0.9, -0.3, 0.992, 0.855, 0.223,
  0.1, -0.5, -0.1, 0.992, 0.855, 0.223,
  -0.1, -0.5, -0.1, 0.992, 0.855, 0.223, //77

  //Left Bottom B
  0.75, -0.9, -0.75, 0.992, 0.855, 0.223, //78
  0.4, -0.9, -0.4, 0.992, 0.855, 0.223,
  0.5, -0.5, -0.5, 0.992, 0.855, 0.223,
  0.5, -0.5, -0.5, 0.992, 0.855, 0.223, //81

];

//--------------------------------HURUF A PINK / DEPAN----------------------//
var verticesAPink = [
  //Left A
  0.25, -0.05, 0.25, 0.977, 0.184, 0.707, //82
  0.0, -0.9, 0, 0.977, 0.184, 0.707,
  0.55, -0.05, 0.55, 0.977, 0.184, 0.707, //84

  //Right A
  0.25, -0.05, 0.25, 0.977, 0.184, 0.707, //85
  0.8, -0.9, 0.8, 0.977, 0.184, 0.707,
  0.55, -0.05, 0.55, 0.977, 0.184, 0.707, //87

  //Left Bottom A
  0.00, -0.9, 0, 0.977, 0.184, 0.707, //88
  0.3, -0.9, 0.3, 0.977, 0.184, 0.707,
  0.3, -0.4, 0.3, 0.977, 0.184, 0.707,
  -0.05, -0.4, 0.05, 0.977, 0.184, 0.707, //91

  //Right Bottom A
  0.8, -0.9, 0.8, 0.977, 0.184, 0.707, //92
  0.4, -0.9, 0.4, 0.977, 0.184, 0.707,
  0.6, -0.5, 0.6, 0.977, 0.184, 0.707,
  0.6, -0.5, 0.6, 0.977, 0.184, 0.707, //95

  //Middle A
  0.3, -0.6, 0.3, 0.977, 0.184, 0.707, //96
  0.6, -0.6, 0.6, 0.977, 0.184, 0.707,
  0.4, -0.9, 0.4, 0.977, 0.184, 0.707, //98

  //A OUTER
  0.25, -0.05, 0.25, 0.977, 0.184, 0.707, //99
  0.20, -0.1, 0.2, 0.977, 0.184, 0.707,
  0.25, -0.1, 0.25, 0.977, 0.184, 0.707, //101
];

vertices = vertices.concat(verticesNumberYellow, verticesNumberWhite, verticesNumberPink, verticesLetterPink, verticesTWhite, verticesAYellow, verticesAPink)

var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)

var vertexShaderCode 
  = `
    attribute vec3 aPosition;  
    attribute vec3 aColor;
    uniform mat4 uModel;
    uniform mat4 uView;
    uniform mat4 uProjection;
    varying vec3 vColor;
    void main() {
        gl_Position = uProjection * uView * uModel * vec4(aPosition, 1.0);
        vColor = aColor;
  }`
var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER)
  gl.shaderSource(vertexShaderObject, vertexShaderCode)
  gl.compileShader(vertexShaderObject)

var fragmentShaderCode = `
  precision mediump float;
  varying vec3 vColor;
  void main() {
      gl_FragColor = vec4(vColor, 1.0);
  }
  `

  var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER)
  gl.shaderSource(fragmentShaderObject, fragmentShaderCode)
  gl.compileShader(fragmentShaderObject)

  var shaderProgram = gl.createProgram()
  gl.attachShader(shaderProgram, vertexShaderObject)
  gl.attachShader(shaderProgram, fragmentShaderObject)
  gl.linkProgram(shaderProgram)
  gl.useProgram(shaderProgram)

 // camera

    // Variabel lokal
    var thetaX = 0.0, thetaY = 0.0;
    var freeze = false;
    var horizontalSpeed = 0.0;
    var verticalSpeed = 0.0;
    var horizontalDelta = 0.0;
    var verticalDelta = 0.0;

    // Variabel pointer ke GLSL
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    // View
    var cameraX = 0.0;
    var cameraZ = 7.5;
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var view = glMatrix.mat4.create();
    glMatrix.mat4.lookAt(
        view,
        [cameraX, -1.0, cameraZ],    // the location of the eye or the camera
        [cameraX, -1.0, 0],        // the point where the camera look at
        [0.0, 1.0, 0.0]
    );
    // Projection
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    var perspective = glMatrix.mat4.create();
    glMatrix.mat4.perspective(perspective, 75*Math.PI/180, 1.0, 0.5, 50.0);


    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 
        6 * Float32Array.BYTES_PER_ELEMENT, 
        0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 
        6 * Float32Array.BYTES_PER_ELEMENT, 
        3 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

// Grafika interaktif
    // Tetikus
    function onMouseClick(event) {
      freeze = !freeze;
  }
  document.addEventListener("click", onMouseClick);
  // Papan ketuk
  function onKeydown(event) {
      if (event.keyCode == 32) freeze = !freeze;  // spasi
      // Gerakan horizontal: a/left ke kiri, d/right ke kanan
      if (event.keyCode == 65 || event.keyCode == 37) {  // a
          thetaY += 0.05;
      } else if (event.keyCode == 68 || event.keyCode == 39) {   // d
          thetaY -= 0.05;
      }
      // Gerakan vertikal: w/up ke atas, s/down ke bawah
      if (event.keyCode == 87 || event.keyCode == 38) {  // w
          thetaX -= 0.05;
      } else if (event.keyCode == 83 || event.keyCode == 40) {   // s
          thetaX += 0.05;
      }
  }
  function onKeyup(event) {
      if (event.keyCode == 32) freeze = !freeze;
  }

  document.addEventListener("keydown", onKeydown);
  document.addEventListener("keyup", onKeyup);
  
  var isGoingRight = true, isScaling = true
  var scaleX = 4, scaleY = 4, scaleZ = 4
  function render() {
      gl.enable(gl.DEPTH_TEST);
      //            Merah     Hijau   Biru    Transparansi
      gl.clearColor(0.0625, 0.0273, 0.125, 1.0);  //SOFT BLACK
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      horizontalDelta += horizontalSpeed;
      verticalDelta -= verticalSpeed;
      // console.log(theta, horizontalDelta, verticalDelta, horizontalSpeed, verticalSpeed)
      var model = glMatrix.mat4.create(); // Membuat matriks identitas
      glMatrix.mat4.translate(
          model, model, [horizontalDelta, 0.0, 0.0]
      );
      glMatrix.mat4.scale(
          model, model, [4, 4, 4]
      );
      glMatrix.mat4.rotateX(
          model, model, 0
      );
      glMatrix.mat4.rotateY(
          model, model, 0
      );
      glMatrix.mat4.rotateZ(
          model, model, 0
      );

      // Number Yellow 09
      gl.uniformMatrix4fv(uModel, false, model);
      gl.uniformMatrix4fv(uView, false, view);
      gl.uniformMatrix4fv(uProjection, false, perspective);
      //0
      gl.drawArrays(gl.LINE_LOOP, 0, 4);
      gl.drawArrays(gl.LINE_LOOP, 4, 4);
      //9
      gl.drawArrays(gl.LINE_STRIP, 8, 5);
      gl.drawArrays(gl.LINE_STRIP, 13, 4);
      gl.drawArrays(gl.LINE_LOOP, 17, 4);


      // 0 WHITE
      var model_svn = glMatrix.mat4.create(); // Membuat matriks identitas
      glMatrix.mat4.translate(
          model_svn, model_svn, [-0.5, 0.0, 0.0]
      );
      glMatrix.mat4.scale(
          model_svn, model_svn, [scaleX, scaleY, scaleZ]
      );
      glMatrix.mat4.rotateX(
          model_svn, model_svn, 0
      );
      glMatrix.mat4.rotateY(
          model_svn, model_svn, 0
      );
      glMatrix.mat4.rotateZ(
          model_svn, model_svn, 0
      );
      gl.uniformMatrix4fv(uModel, false, model_svn);
      gl.uniformMatrix4fv(uView, false, view);
      gl.uniformMatrix4fv(uProjection, false, perspective);
      gl.drawArrays(gl.LINE_STRIP, 21, 4);
      gl.drawArrays(gl.LINES, 25, 2);
      gl.drawArrays(gl.LINE_STRIP, 27, 3);


      //9 PINK
      var model_e = glMatrix.mat4.create(); // Membuat matriks identitas
      glMatrix.mat4.translate(
          model_e, model_e, [0, 0, 0]
      );
      glMatrix.mat4.scale(
          model_e, model_e, [1.2, 1.2, 1.2]
      );
      glMatrix.mat4.rotateX(
          model_e, model_e, 0
      );
      glMatrix.mat4.rotateY(
          model_e, model_e, thetaY
      );
      glMatrix.mat4.rotateZ(
          model_e, model_e, 0
      );
      gl.uniformMatrix4fv(uModel, false, model_e);
      gl.uniformMatrix4fv(uView, false, view);
      gl.uniformMatrix4fv(uProjection, false, perspective);
      gl.drawArrays(gl.LINE_STRIP, 30, 4);
      gl.drawArrays(gl.LINE_STRIP, 34, 4);
      gl.drawArrays(gl.LINES, 38, 2);
      gl.drawArrays(gl.LINES, 40, 2);

      // T
      var model_t = glMatrix.mat4.create(); // Membuat matriks identitas
      glMatrix.mat4.translate(
          model_t, model_t, [0, 0, 0]
      );
      glMatrix.mat4.scale(
          model_t, model_t, [4, 4, 4]
      );
      glMatrix.mat4.rotateX(
          model_t, model_t, thetaX
      );
      glMatrix.mat4.rotateY(
          model_t, model_t, 0
      );
      glMatrix.mat4.rotateZ(
          model_t, model_t, 0
      );
      gl.uniformMatrix4fv(uModel, false, model_t);
      gl.uniformMatrix4fv(uView, false, view);
      gl.uniformMatrix4fv(uProjection, false, perspective);
      gl.drawArrays(gl.TRIANGLE_STRIP, 42, 4);
      gl.drawArrays(gl.TRIANGLE_FAN, 46, 4);
      gl.drawArrays(gl.TRIANGLE_STRIP, 50, 4);
      gl.drawArrays(gl.TRIANGLE_FAN, 54, 4);
      gl.drawArrays(gl.LINES, 58, 4);
      gl.drawArrays(gl.LINES, 62, 2);
      gl.drawArrays(gl.LINES, 66, 2);

      // A
      var model_a = glMatrix.mat4.create(); // Membuat matriks identitas
      glMatrix.mat4.translate(
          model_a, model_a, [0, 0, 0]
      );
      glMatrix.mat4.scale(
          model_a, model_a, [4, 4, 4]
      );
      glMatrix.mat4.rotateX(
          model_a, model_a, thetaX
      );
      glMatrix.mat4.rotateY(
          model_a, model_a, 0
      );
      glMatrix.mat4.rotateZ(
          model_a, model_a, 0
      );
      gl.uniformMatrix4fv(uModel, false, model_a);
      gl.uniformMatrix4fv(uView, false, view);
      gl.uniformMatrix4fv(uProjection, false, perspective);
      gl.drawArrays(gl.TRIANGLE_STRIP, 68, 3);
      gl.drawArrays(gl.TRIANGLE_STRIP, 71, 3);
      gl.drawArrays(gl.TRIANGLE_STRIP, 74, 3);
      gl.drawArrays(gl.TRIANGLE_STRIP, 77, 3);
      gl.drawArrays(gl.TRIANGLE_STRIP, 80, 3);
      gl.drawArrays(gl.TRIANGLE_STRIP, 83, 3);
      gl.drawArrays(gl.TRIANGLE_STRIP, 86, 3);
      gl.drawArrays(gl.TRIANGLE_STRIP, 90, 3);
      gl.drawArrays(gl.TRIANGLES, 94, 3);
      gl.drawArrays(gl.TRIANGLE_STRIP, 97, 3);

      requestAnimationFrame(render);

      if (!freeze) {
          if(model[12]>=3.5 && isGoingRight) isGoingRight = false
          else if(model[12] <= -1.5) isGoingRight = true
          if(isGoingRight){
              horizontalDelta+=0.0247
          }
          else {
              horizontalDelta-=0.0247
          }

          if(scaleX>=4) isScaling = false
          else if(scaleX<=3) isScaling = true
          if(isScaling){
              scaleX+=0.01
              scaleY+=0.01
              scaleZ+=0.01
          }
          else if(!isScaling) {
              scaleX-=0.01
              scaleY-=0.01
              scaleZ-=0.01
          }
      }
  }
  requestAnimationFrame(render);
  console.log(gl.getError())
}

window.onload = main;

// Catatan Tambahan:
// 1. Mengubah hexadecimal menjadi RGB adalah dengan menggunakan fitur konversi
// pada laman https://www.webfx.com/web-design/hex-to-rgb/ lalu membagi nilai tiap komponen dengan 256
// 2. Untuk kombinasi warna dalam hexadecimal dicari pada laman https://colorhunt.co/palettes/yellow
// 3. Tidak banyak yang diubah dari koordinat karena pada tugas pertama sudah berbentuk 3D