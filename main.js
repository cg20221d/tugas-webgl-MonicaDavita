
function main() {
  var kanvas = document.getElementById("kanvas");

  // Initialize the GL context
  const gl = kanvas.getContext("webgl");

  //-----------------------------------ANGKA 09 KUNING----------------------------------//

  var verticesNumberYellow = [
    //Inner 0
    -0.5, 0.7,
    -0.5, 0.2,
    -0.3, 0.2,
    -0.3, 0.7,

    //Outer 0
    -0.7, 0.9,
    -0.7, 0.0,
    -0.1, 0.0,
    -0.1, 0.9,

    //Outer 9
    -0.4, 0.0,
    -0.4, -0.2,
    0.5, -0.2,
    0.5, 0.9,
    -0.1, 0.9,
    //Outer 9
    -0.1, 0.20,
    0.2, 0.20,
    0.2, 0.0,
    -0.1, 0.0,

    //Inner 9
    0.04, 0.75,
    0.34, 0.75,
    0.34, 0.35,
    0.04, 0.35,
  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesNumberYellow), gl.STATIC_DRAW);

  //vertex shader
  var vertexShaderCodeNumberYellow = `
    attribute vec2 aPosition;
    void main() { 
      float x = aPosition.x;
      float y = aPosition.y;
      gl_PointSize = 10.0;
      gl_Position = vec4(x, y, 0.0, 1.0);
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
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(aPosition);

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }

  // Set clear color to black, fully opaque
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
    -0.7, 0.9,
    -0.6, 0.95,
    0.0, 0.95,
    -0.1, 0.9,

    //Upper-Right 0
    0.0, 0.95,
    0.0, 0.9,

    //Lower-Right 0
    -0.1, 0.0,
    0.0, 0.1,
    0.0, 0.2,
  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesNumberWhite), gl.STATIC_DRAW);

  //vertex shader
  var vertexShaderCodeNumberWhite = `
    attribute vec2 bPosition;
    void main() { 
      float x = bPosition.x;
      float y = bPosition.y;
      gl_PointSize = 10.0;
      gl_Position = vec4(x, y, 0.0, 1.0);
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
  gl.vertexAttribPointer(bPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(bPosition);

  //WHITE 0
  gl.drawArrays(gl.LINE_STRIP, 0, 4);
  gl.drawArrays(gl.LINES, 4, 2);
  gl.drawArrays(gl.LINE_STRIP, 6, 3);

  //--------------------------------ANGKA 9 PINK----------------------//

  var verticesNumberPink = [
    //Left 9
    0.04, 0.75,
    0.01, 0.65,
    0.01, 0.25,
    0.04, 0.35,

    //Right 9
    0.34, 0.75,
    0.30, 0.65,
    0.30, 0.25,
    0.34, 0.35,

    //Upper 9
    0.01, 0.65,
    0.30, 0.65,

    //Lower 9
    0.01, 0.25,
    0.30, 0.25,
  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesNumberPink), gl.STATIC_DRAW);

  //vertex shader
  var vertexShaderCodeNumberPink = `
    attribute vec2 cPosition;
    void main() { 
      float x = cPosition.x;
      float y = cPosition.y;
      gl_PointSize = 10.0;
      gl_Position = vec4(x, y, 0.0, 1.0);
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
  gl.vertexAttribPointer(cPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(cPosition);

  //PINK 9
  gl.drawArrays(gl.LINE_STRIP, 0, 4);
  gl.drawArrays(gl.LINE_STRIP, 4, 4);
  gl.drawArrays(gl.LINES, 8, 2);
  gl.drawArrays(gl.LINES, 10, 2);

  //--------------------------------HURUF T PINK----------------------//

  var verticesLetterPink = [

    //Upper T
    -0.7, -0.1,
    -0.7, -0.3,
    0.0, -0.1,
    0.0, -0.3,

    //Lower T
    -0.47, -0.1,
    -0.47, -0.8,
    -0.23, -0.8,
    -0.23, -0.1,


  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesLetterPink), gl.STATIC_DRAW);

  //vertex shader
  var vertexShaderCodeLetterPink = `
    attribute vec2 dPosition;
    void main() { 
      float x = dPosition.x;
      float y = dPosition.y;
      gl_PointSize = 10.0;
      gl_Position = vec4(x, y, 0.0, 1.0);
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
  gl.vertexAttribPointer(dPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(dPosition);

  //PINK T
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
  // gl.drawArrays(gl.LINES, 8, 2);
  // gl.drawArrays(gl.LINES, 10, 2);


  //--------------------------------HURUF T PUTIH----------------------//

  var verticesTWhite = [

    //Upper T
    -0.75, -0.2,
    -0.75, -0.4,
    -0.05, -0.2,
    -0.05, -0.4,

    //Lower T
    -0.52, -0.2,
    -0.52, -0.9,
    -0.28, -0.9,
    -0.28, -0.2,

    //Upper-Right T
    0.0, -0.3,
    -0.05, -0.4,
    -0.05, -0.2,
    0.0, -0.1,

    //Upper-Left T
    -0.75, -0.2,
    -0.7, -0.1,
    -0.7, -0.3,
    -0.75, -0.4,

    //LOWER SHADOW T
    -0.28, -0.9,
    -0.23, -0.8,
  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesTWhite), gl.STATIC_DRAW);

  //vertex shader
  var vertexShaderCodeTWhite = `
    attribute vec2 ePosition;
    void main() { 
      float x = ePosition.x;
      float y = ePosition.y;
      gl_PointSize = 10.0;
      gl_Position = vec4(x, y, 0.0, 1.0);
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
  gl.vertexAttribPointer(ePosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(ePosition);

  //WHITE  T
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
  gl.drawArrays(gl.LINES, 8, 4);
  gl.drawArrays(gl.LINES, 12, 2);
  gl.drawArrays(gl.LINES, 16, 2);

  //--------------------------------HURUF A KUNING----------------------//

  var verticesAYellow = [
    //Left A
    0.20, -0.1,
    -0.05, -0.9,
    0.45, -0.1,

    //Right A
    0.20, -0.1,
    0.75, -0.9,
    0.45, -0.1,

    //Left Bottom A
    -0.05, -0.9,
    0.3, -0.9,
    0.1, -0.5,
    -0.1, -0.5,

    //Left Bottom B
    0.75, -0.9,
    0.4, -0.9,
    0.5, -0.5,
    0.5, -0.5,

    //Middle A
    0.1, -0.6,
    0.5, -0.6,
    0.4, -0.9

  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesAYellow), gl.STATIC_DRAW);

  //vertex shader
  var vertexShaderCodeAYellow = `
    attribute vec2 fPosition;
    void main() { 
      float x = fPosition.x;
      float y = fPosition.y;
      gl_PointSize = 10.0;
      gl_Position = vec4(x, y, 0.0, 1.0);
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
  gl.vertexAttribPointer(fPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(fPosition);

  //YELLOW A
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);
  gl.drawArrays(gl.TRIANGLE_STRIP, 3, 3);
  gl.drawArrays(gl.TRIANGLE_STRIP, 6, 3);
  gl.drawArrays(gl.TRIANGLE_STRIP, 10, 3);
  gl.drawArrays(gl.TRIANGLES, 14, 3);

  //--------------------------------HURUF A PINK----------------------//

  var verticesAPink = [
    //Left A
    0.25, -0.05,
    0.0, -0.9,
    0.55, -0.05,

    //Right A
    0.25, -0.05,
    0.8, -0.9,
    0.55, -0.05,

    //Left Bottom A
    0.00, -0.9,
    0.3, -0.9,
    0.3, -0.4,
    -0.05, -0.4,

    //Right Bottom A
    0.8, -0.9,
    0.4, -0.9,
    0.6, -0.5,
    0.6, -0.5,

    //Middle A
    0.3, -0.6,
    0.6, -0.6,
    0.4, -0.9,

    //A OUTER
    0.25, -0.05,
    0.20, -0.1,
    0.25, -0.1
  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesAPink), gl.STATIC_DRAW);

  //vertex shader
  var vertexShaderCodeAPink = `
    attribute vec2 gPosition;
    void main() { 
      float x = gPosition.x;
      float y = gPosition.y;
      gl_PointSize = 10.0;
      gl_Position = vec4(x, y, 0.0, 1.0);
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
  gl.vertexAttribPointer(gPosition, 2, gl.FLOAT, false, 0, 0);
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
