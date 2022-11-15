
function main() {
  var kanvas = document.getElementById("kanvas");

  // Initialize the GL context
  const gl = kanvas.getContext("webgl");

  //-----------------------------------ANGKA 09 KUNING----------------------------------//

  var verticesNumberYellow = [
    //Inner 0
     -0.5, 0.7, -0.5,
     -0.5, 0.2, -0.5,
     -0.3, 0.2, -0.5,
     -0.3, 0.7, -0.5,

    //Outer 0
    -0.7, 0.9, 0.5,
    -0.7, 0.0, 0.5, 
    -0.1, 0.0, 0.5, 
    -0.1, 0.9, 0.5,

    //Outer 9
    -0.4, 0.0, 0.4,
    -0.4, -0.2, 0.4,
    0.5, -0.2, 0.5,
    0.5, 0.9, 0.5,
    -0.1, 0.9, 0.1,
    //Outer 9
    -0.1, 0.20, 0.1,
    0.2, 0.20, 0.2,
    0.2, 0.0, 0.2,
    -0.1, 0.0, 0.1,

    //Inner 9
    0.04, 0.75, -0.04,
    0.34, 0.75, -0.34,
    0.34, 0.35, -0.34,
    0.04, 0.35, -0.04,
  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesNumberYellow), gl.STATIC_DRAW);

  //vertex shader
  var vertexShaderCodeNumberYellow = `
    attribute vec3 aPosition;
    void main() { 
      float x = aPosition.x;
      float y = aPosition.y;
      float z = aPosition.z;
      gl_PointSize = 10.0;
      gl_Position = vec4(x, y, z, 1.0);
    }
    `;

  var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject, vertexShaderCodeNumberYellow);
  gl.compileShader(vertexShaderObject);   //sampai sini jadi file .o

  //fragment shader
  var fragmentShaderCodeNumberYellow = `
    void main() {
      precision mediump float;
      float r = 0.992;
      float g = 0.855;
      float b = 0.223;
      float a = 1.0;
      gl_FragColor = vec4(r, g, b, a);
    }
    `;

  var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShaderObject, fragmentShaderCodeNumberYellow);
  gl.compileShader(fragmentShaderObject);   //sampai sini jadi file .o

  var shaderProgram = gl.createProgram(); //wadah executeable shadernya nanti (.exe)
  gl.attachShader(shaderProgram, vertexShaderObject);
  gl.attachShader(shaderProgram, fragmentShaderObject);

  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  // Mengajari GPU bagaimana caranya mengoleksi nilai posisi dari ARRAY_BUFFER
  // Untuk setiap verteks yang sedang diproses

  var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(aPosition);

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }

  gl.clearColor(0.0625, 0.0273, 0.125, 1.0);  //SOFT BLACK
  //dari kiri ke kanan Red --> Green --> Blue --> Transparansi

  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);

  //0
  gl.drawArrays(gl.LINE_LOOP, 0, 4);
  gl.drawArrays(gl.LINE_LOOP, 4, 4);

  //9
  gl.drawArrays(gl.LINE_STRIP, 8, 5);
  gl.drawArrays(gl.LINE_STRIP, 13, 4);
  gl.drawArrays(gl.LINE_LOOP, 17, 4);

  //--------------------------------ANGKA 0 PUTIH----------------------//

  var verticesNumberWhite = [
    //Upper 0
    -0.7, 0.9, -0.7,
    -0.6, 0.95, -0.6,
    0.0, 0.95, 0.0,
    -0.1, 0.9, -0.1,

    //Upper-Right 0
    0.0, 0.95, 0,
    0.0, 0.9, 0,

    //Lower-Right 0
    -0.1, 0.0, -0.1,
    0.0, 0.1, 0,
    0.0, 0.2, 0,
  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesNumberWhite), gl.STATIC_DRAW);

  //vertex shader
  var vertexShaderCodeNumberWhite = `
    attribute vec3 bPosition;
    void main() { 
      float x = bPosition.x;
      float y = bPosition.y;
      float z = bPosition.z;
      gl_PointSize = 10.0;
      gl_Position = vec4(x, y, z, 1.0);
    }
    `;

  var vertexShaderObject2 = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject2, vertexShaderCodeNumberWhite);
  gl.compileShader(vertexShaderObject2);   //sampai sini jadi file .o

  //fragment shader
  var fragmentShaderCodeNumberWhite = `
    void main() {
      precision mediump float;
      float r = 1.0;
      float g = 1.0;
      float b = 1.0;
      float a = 1.0;
      gl_FragColor = vec4(r, g, b, a);
    }
    `;

  var fragmentShaderObject2 = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShaderObject2, fragmentShaderCodeNumberWhite);
  gl.compileShader(fragmentShaderObject2);   //sampai sini jadi file .o

  var shaderProgram2 = gl.createProgram(); //wadah executeable shadernya nanti (.exe)
  gl.attachShader(shaderProgram2, vertexShaderObject2);
  gl.attachShader(shaderProgram2, fragmentShaderObject2);

  gl.linkProgram(shaderProgram2);
  gl.useProgram(shaderProgram2);

  // Mengajari GPU bagaimana caranya mengoleksi nilai posisi dari ARRAY_BUFFER
  // Untuk setiap verteks yang sedang diproses

  var bPosition = gl.getAttribLocation(shaderProgram2, "bPosition");
  gl.vertexAttribPointer(bPosition, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(bPosition);

  //WHITE 0
  gl.drawArrays(gl.LINE_STRIP, 0, 4);
  gl.drawArrays(gl.LINES, 4, 2);
  gl.drawArrays(gl.LINE_STRIP, 6, 3);

  //--------------------------------ANGKA 9 PINK----------------------//

  var verticesNumberPink = [
    //Sisi Kiri 9
    0.04, 0.75, -0.04,
    0.01, 0.65, -0.01,
    0.01, 0.25, 0.01,
    0.04, 0.35, 0.04,

    //Right 9
    0.34, 0.75, -0.34,
    0.30, 0.65, -0.3,
    0.30, 0.25, 0.3,
    0.34, 0.35, 0.34,

    //Upper 9
    0.01, 0.65, 0.01,
    0.30, 0.65, 0.3,

    //Lower 9
    0.01, 0.25, 0.01,
    0.30, 0.25, 0.3,
  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesNumberPink), gl.STATIC_DRAW);

  //vertex shader
  var vertexShaderCodeNumberPink = `
    attribute vec3 cPosition;
    void main() { 
      float x = cPosition.x;
      float y = cPosition.y;
      float z = cPosition.z;
      gl_PointSize = 10.0;
      gl_Position = vec4(x, y, z, 1.0);
    }
    `;

  var vertexShaderObject3 = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject3, vertexShaderCodeNumberPink);
  gl.compileShader(vertexShaderObject3);   //sampai sini jadi file .o

  //fragment shader
  var fragmentShaderCodeNumberPink = `
    void main() {
      precision mediump float;
      float r = 0.977;
      float g = 0.184;
      float b = 0.707;
      float a = 1.0;
      gl_FragColor = vec4(r, g, b, a);
    }
    `;

  var fragmentShaderObject3 = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShaderObject3, fragmentShaderCodeNumberPink);
  gl.compileShader(fragmentShaderObject3);   //sampai sini jadi file .o

  var shaderProgram3 = gl.createProgram(); //wadah executeable shadernya nanti (.exe)
  gl.attachShader(shaderProgram3, vertexShaderObject3);
  gl.attachShader(shaderProgram3, fragmentShaderObject3);

  gl.linkProgram(shaderProgram3);
  gl.useProgram(shaderProgram3);

  // Mengajari GPU bagaimana caranya mengoleksi nilai posisi dari ARRAY_BUFFER
  // Untuk setiap verteks yang sedang diproses

  var cPosition = gl.getAttribLocation(shaderProgram3, "cPosition");
  gl.vertexAttribPointer(cPosition, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(cPosition);

  //PINK 9
  gl.drawArrays(gl.LINE_STRIP, 0, 4);
  gl.drawArrays(gl.LINE_STRIP, 4, 4);
  gl.drawArrays(gl.LINES, 8, 2);
  gl.drawArrays(gl.LINES, 10, 2);

  //--------------------------------HURUF T PINK / BELAKANG----------------------//

  var verticesLetterPink = [

    //Atas T
    -0.7, -0.1, -0.7,
    -0.7, -0.3, -0.7,
    0.0, -0.1, 0,
    0.0, -0.3, 0,

    //Bawah T
    -0.47, -0.1, -0.47,
    -0.47, -0.8, -0.47,
    -0.23, -0.8, -0.23,
    -0.23, -0.1, -0.23,


  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesLetterPink), gl.STATIC_DRAW);

  //vertex shader
  var vertexShaderCodeLetterPink = `
    attribute vec3 dPosition;
    void main() { 
      float x = dPosition.x;
      float y = dPosition.y;
      float z = dPosition.z;
      gl_PointSize = 10.0;
      gl_Position = vec4(x, y, z, 1.0);
    }
    `;

  var vertexShaderObject4 = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject4, vertexShaderCodeLetterPink);
  gl.compileShader(vertexShaderObject4);   //sampai sini jadi file .o

  //fragment shader
  var fragmentShaderCodeLetterPink = `
    void main() {
      precision mediump float;
      float r = 0.977;
      float g = 0.184;
      float b = 0.707;
      float a = 1.0;
      gl_FragColor = vec4(r, g, b, a);
    }
    `;

  var fragmentShaderObject4 = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShaderObject4, fragmentShaderCodeLetterPink);
  gl.compileShader(fragmentShaderObject4);   //sampai sini jadi file .o

  var shaderProgram4 = gl.createProgram(); //wadah executeable shadernya nanti (.exe)
  gl.attachShader(shaderProgram4, vertexShaderObject4);
  gl.attachShader(shaderProgram4, fragmentShaderObject4);

  gl.linkProgram(shaderProgram4);
  gl.useProgram(shaderProgram4);

  // Mengajari GPU bagaimana caranya mengoleksi nilai posisi dari ARRAY_BUFFER
  // Untuk setiap verteks yang sedang diproses

  var dPosition = gl.getAttribLocation(shaderProgram4, "dPosition");
  gl.vertexAttribPointer(dPosition, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(dPosition);

  //PINK T
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
  // gl.drawArrays(gl.LINES, 8, 2);
  // gl.drawArrays(gl.LINES, 10, 2);


  //--------------------------------HURUF T PUTIH / DEPAN ----------------------//

  var verticesTWhite = [

    //Upper T
    -0.75, -0.2, 0.75,
    -0.75, -0.4, 0.75,
    -0.05, -0.2, 0.05,
    -0.05, -0.4, 0.05,

    //Lower T
    -0.52, -0.2, 0.52,
    -0.52, -0.9, 0.52,
    -0.28, -0.9, 0.28,
    -0.28, -0.2, 0.28,

    //Upper-Right T
    0.0, -0.3, 0,
    -0.05, -0.4, 0.05,
    -0.05, -0.2, 0.05,
    0.0, -0.1, 0.0,

    //Upper-Left T
    -0.75, -0.2, 0.75,
    -0.7, -0.1, 0.7,
    -0.7, -0.3, 0.7,
    -0.75, -0.4, 0.75,

    //LOWER SHADOW T
    -0.28, -0.9, 0.28,
    -0.23, -0.8, 0.23,
  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesTWhite), gl.STATIC_DRAW);

  //vertex shader
  var vertexShaderCodeTWhite = `
    attribute vec3 ePosition;
    void main() { 
      float x = ePosition.x;
      float y = ePosition.y;
      float z = ePosition.z;
      gl_PointSize = 10.0;
      gl_Position = vec4(x, y, z, 1.0);
    }
    `;

  var vertexShaderObject5 = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject5, vertexShaderCodeTWhite);
  gl.compileShader(vertexShaderObject5);   //sampai sini jadi file .o

  //fragment shader
  var fragmentShaderCodeTWhite = `
    void main() {
      precision mediump float;
      float r = 1.0;
      float g = 1.0;
      float b = 1.0;
      float a = 1.0;
      gl_FragColor = vec4(r, g, b, a);
    }
    `;

  var fragmentShaderObject5 = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShaderObject5, fragmentShaderCodeTWhite);
  gl.compileShader(fragmentShaderObject5);   //sampai sini jadi file .o

  var shaderProgram5 = gl.createProgram(); //wadah executeable shadernya nanti (.exe)
  gl.attachShader(shaderProgram5, vertexShaderObject5);
  gl.attachShader(shaderProgram5, fragmentShaderObject5);

  gl.linkProgram(shaderProgram5);
  gl.useProgram(shaderProgram5);

  // Mengajari GPU bagaimana caranya mengoleksi nilai posisi dari ARRAY_BUFFER
  // Untuk setiap verteks yang sedang diproses

  var ePosition = gl.getAttribLocation(shaderProgram5, "ePosition");
  gl.vertexAttribPointer(ePosition, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(ePosition);

  //WHITE  T
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
  gl.drawArrays(gl.LINES, 8, 4);
  gl.drawArrays(gl.LINES, 12, 2);
  gl.drawArrays(gl.LINES, 16, 2);

  //--------------------------------HURUF A KUNING / BELAKANG ----------------------//

  var verticesAYellow = [
    //Left A
    0.20, -0.1, -0.2,
    -0.05, -0.9, -0.05,
    0.45, -0.1, -0.45,

    //Right A
    0.20, -0.1, -0.2,
    0.75, -0.9, -0.75,
    0.45, -0.1, -0.45,

    //Left Bottom A
    -0.05, -0.9, -0.05,
    0.3, -0.9, -0.3,
    0.1, -0.5, -0.1,
    -0.1, -0.5, -0.1,

    //Left Bottom B
    0.75, -0.9, -0.75,
    0.4, -0.9, -0.4,
    0.5, -0.5, -0.5,
    0.5, -0.5, -0.5,

    //Middle A
    0.1, -0.6, -0.1,
    0.5, -0.6, -0.5,
    0.4, -0.9 -0.4,

  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesAYellow), gl.STATIC_DRAW);

  //vertex shader
  var vertexShaderCodeAYellow = `
    attribute vec3 fPosition;
    void main() { 
      float x = fPosition.x;
      float y = fPosition.y;
      float z = fPosition.z;
      gl_PointSize = 10.0;
      gl_Position = vec4(x, y, z, 1.0);
    }
    `;

  var vertexShaderObject6 = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject6, vertexShaderCodeAYellow);
  gl.compileShader(vertexShaderObject6);   //sampai sini jadi file .o

  //fragment shader
  var fragmentShaderCodeAYellow = `
    void main() {
      precision mediump float;
      float r = 0.992;
      float g = 0.855;
      float b = 0.223;
      float a = 1.0;
      gl_FragColor = vec4(r, g, b, a);
    }
    `;

  var fragmentShaderObject6 = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShaderObject6, fragmentShaderCodeAYellow);
  gl.compileShader(fragmentShaderObject6);   //sampai sini jadi file .o

  var shaderProgram6 = gl.createProgram(); //wadah executeable shadernya nanti (.exe)
  gl.attachShader(shaderProgram6, vertexShaderObject6);
  gl.attachShader(shaderProgram6, fragmentShaderObject6);

  gl.linkProgram(shaderProgram6);
  gl.useProgram(shaderProgram6);

  // Mengajari GPU bagaimana caranya mengoleksi nilai posisi dari ARRAY_BUFFER
  // Untuk setiap verteks yang sedang diproses

  var fPosition = gl.getAttribLocation(shaderProgram6, "fPosition");
  gl.vertexAttribPointer(fPosition, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(fPosition);

  //YELLOW A
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);
  gl.drawArrays(gl.TRIANGLE_STRIP, 3, 3);
  gl.drawArrays(gl.TRIANGLE_STRIP, 6, 3);
  gl.drawArrays(gl.TRIANGLE_STRIP, 10, 3);
 

  //--------------------------------HURUF A PINK / DEPAN----------------------//

  var verticesAPink = [
    //Left A
    0.25, -0.05, 0.25,
    0.0, -0.9, 0,
    0.55, -0.05, 0.55,

    //Right A
    0.25, -0.05, 0.25,
    0.8, -0.9, 0.8,
    0.55, -0.05, 0.55,

    //Left Bottom A
    0.00, -0.9, 0,
    0.3, -0.9, 0.3,
    0.3, -0.4, 0.3,
    -0.05, -0.4, 0.05,

    //Right Bottom A
    0.8, -0.9, 0.8,
    0.4, -0.9, 0.4,
    0.6, -0.5, 0.6,
    0.6, -0.5, 0.6,

    //Middle A
    0.3, -0.6, 0.3,
    0.6, -0.6, 0.6,
    0.4, -0.9, 0.4,

    //A OUTER
    0.25, -0.05, 0.25,
    0.20, -0.1, 0.2,
    0.25, -0.1, 0.25,
  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesAPink), gl.STATIC_DRAW);

  //vertex shader
  var vertexShaderCodeAPink = `
    attribute vec3 gPosition;
    void main() { 
      float x = gPosition.x;
      float y = gPosition.y;
      float z = gPosition.z;
      gl_PointSize = 10.0;
      gl_Position = vec4(x, y, z, 1.0);
    }
    `;

  var vertexShaderObject7 = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject7, vertexShaderCodeAPink);
  gl.compileShader(vertexShaderObject7);   //sampai sini jadi file .o

  //fragment shader
  var fragmentShaderCodeAPink = `
    void main() {
      precision mediump float;
      float r = 0.977;
      float g = 0.184;
      float b = 0.707;
      float a = 1.0;
      gl_FragColor = vec4(r, g, b, a);
    }
    `;

  var fragmentShaderObject7 = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShaderObject7, fragmentShaderCodeAPink);
  gl.compileShader(fragmentShaderObject7);   //sampai sini jadi file .o

  var shaderProgram7 = gl.createProgram(); //wadah executeable shadernya nanti (.exe)
  gl.attachShader(shaderProgram7, vertexShaderObject7);
  gl.attachShader(shaderProgram7, fragmentShaderObject7);

  gl.linkProgram(shaderProgram7);
  gl.useProgram(shaderProgram7);

  // Mengajari GPU bagaimana caranya mengoleksi nilai posisi dari ARRAY_BUFFER
  // Untuk setiap verteks yang sedang diproses

  var gPosition = gl.getAttribLocation(shaderProgram7, "gPosition");
  gl.vertexAttribPointer(gPosition, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(gPosition);

  //PINK A
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);
  gl.drawArrays(gl.TRIANGLE_STRIP, 3, 3);
  gl.drawArrays(gl.TRIANGLE_STRIP, 6, 3);
  gl.drawArrays(gl.TRIANGLE_STRIP, 10, 3);
  gl.drawArrays(gl.TRIANGLES, 14, 3);
  gl.drawArrays(gl.TRIANGLE_STRIP, 17, 3);
}

window.onload = main;

// Catatan Tambahan:
// 1. Mengubah hexadecimal menjadi RGB adalah dengan menggunakan fitur konversi
// pada laman https://www.webfx.com/web-design/hex-to-rgb/ lalu membagi nilai tiap komponen dengan 256
// 2. Untuk kombinasi warna dalam hexadecimal dicari pada laman https://colorhunt.co/palettes/yellow
// 3. Tidak banyak yang diubah dari koordinat karena pada tugas pertama sudah berbentuk 3D