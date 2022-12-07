
function main() {
  var kanvas = document.getElementById("kanvas");

  // Initialize the GL context
  const gl = kanvas.getContext("webgl");

  //-----------------------------------VERTICES----------------------------------//

  var vertices = [
    // Face A       // Red
    -0.3, -0.3, -0.3, 0.992, 0.855, 0.223, 0, 0, -1,    // Index:  0    
    0.3, -0.3, -0.3, 0.992, 0.855, 0.223, 0, 0, -1,    // Index:  1
    0.3, 0.3, -0.3, 0.992, 0.855, 0.223, 0, 0, -1,    // Index:  2
    -0.3, 0.3, -0.3, 0.992, 0.855, 0.223, 0, 0, -1,   // Index:  3
    // Face B       // Yellow
    -0.3, -0.3, 0.3, 0.977, 0.184, 0.707, 0, 0, 1,    // Index:  4
    0.3, -0.3, 0.3, 0.977, 0.184, 0.707, 0, 0, 1,   // Index:  5
    0.3, 0.3, 0.3, 0.977, 0.184, 0.707, 0, 0, 1,   // Index:  6
    -0.3, 0.3, 0.3, 0.977, 0.184, 0.707, 0, 0, 1,  // Index:  7
    // Face C       // Green
    -0.3, -0.3, -0.3, 0, 1, 0, -1, 0, 0,    // Index:  8
    -0.3, 0.3, -0.3, 0, 1, 0, -1, 0, 0,   // Index:  9
    -0.3, 0.3, 0.3, 0, 1, 0, -1, 0, 0,  // Index: 10
    -0.3, -0.3, 0.3, 0, 1, 0, -1, 0, 0,    // Index: 11
    // Face D       // Blue
    0.3, -0.3, -0.3, 0, 0, 1, 1, 0, 0,   // Index: 12
    0.3, 0.3, -0.3, 0, 0, 1, 1, 0, 0,    // Index: 13
    0.3, 0.3, 0.3, 0, 0, 1, 1, 0, 0,    // Index: 14
    0.3, -0.3, 0.3, 0, 0, 1, 1, 0, 0,   // Index: 15
    // Face E       // Orange
    -0.3, -0.3, -0.3, 1, 0.5, 0, 0, -1, 0,  // Index: 16
    -0.3, -0.3, 0.3, 1, 0.5, 0, 0, -1, 0,  // Index: 17
    0.3, -0.3, 0.3, 1, 0.5, 0, 0, -1, 0,  // Index: 18
    0.3, -0.3, -0.3, 1, 0.5, 0, 0, -1, 0,  // Index: 19
    // Face F       // White
    -0.3, 0.3, -0.3, 1, 1, 1, 0, -1, 0,    // Index: 20
    -0.3, 0.3, 0.3, 1, 1, 1, 0, -1, 0,    // Index: 21
    0.3, 0.3, 0.3, 1, 1, 1, 0, -1, 0,    // Index: 22
    0.3, 0.3, -0.3, 1, 1, 1, 0, -1, 0,     // Index: 23
    // //Kuning 0 kecil normal
    // - 0.5, 0.7, 0.0, 0.992, 0.855, 0.223, //24
    // -0.5, 0.2, 0.0, 0.992, 0.855, 0.223, //25
    // -0.3, 0.2, 0.0, 0.992, 0.855, 0.223, //26
    // -0.3, 0.7, 0.0, 0.992, 0.855, 0.223, //27

    // //Kuning 0 besar normal
    // -0.7, 0.9, 0.0, 0.992, 0.855, 0.223, //28
    // -0.7, 0.0, 0.0, 0.992, 0.855, 0.223,  //29
    // -0.1, 0.0, 0.0, 0.992, 0.855, 0.223, //30
    // -0.1, 0.9, 0.0, 0.992, 0.855, 0.223, //31

    // //Putih 0 atas dalam
    // -0.7, 0.9, -1.0, 1.0, 1.0, 1.0, //31
    // -0.6, 0.95, -1.0, 1.0, 1.0, 1.0, //33
    // 0.0, 0.95, -1.0, 1.0, 1.0, 1.0, //34
    // -0.1, 0.9, -1.0, 1.0, 1.0, 1.0, //35

    // //Putih 0 Kanan Atas dalam
    // 0.0, 0.95, -1.0, 1.0, 1.0, 1.0, //36
    // 0.0, 0.9, -1.0, 1.0, 1.0, 1.0, //37
    // -0.1, 0.9, 0.0, 1.0, 1.0, 1.0, //38

    // //Putih 0 Kanan Bawah dalam
    // -0.1, 0.0, 0.0, 1.0, 1.0, 1.0, //39
    // 0.0, 0.1, -1.0, 1.0, 1.0, 1.0, //40
    // 0.0, 0.2, -1.0, 1.0, 1.0, 1.0, //41

    // //Kuning 9 normal
    // -0.4, 0.0, 0.0, 0.992, 0.855, 0.223, //42
    // -0.4, -0.2, 0.0, 0.992, 0.855, 0.223, //43
    // 0.5, -0.2, 0.0, 0.992, 0.855, 0.223, //44
    // 0.5, 0.9, 0.0, 0.992, 0.855, 0.223, //45
    // -0.1, 0.9, 0.0, 0.992, 0.855, 0.223, //46
    // //Kuning 9 normal bentuk kotak kecil normal
    // -0.1, 0.20, 0.0, 0.992, 0.855, 0.223,//47
    // 0.2, 0.20, 0.0, 0.992, 0.855, 0.223, //48
    // 0.2, 0.0, 0.0, 0.992, 0.855, 0.223, //49
    // -0.1, 0.0, 0.0, 0.992, 0.855, 0.223, //50

    // //Kuning 9 kecil tengah normal
    // 0.04, 0.75, 0.0, 0.992, 0.855, 0.223, //51
    // 0.34, 0.75, 0.0, 0.992, 0.855, 0.223, //52
    // 0.34, 0.35, 0.0, 0.992, 0.855, 0.223, //53
    // 0.04, 0.35, 0.0, 0.992, 0.855, 0.223, //54

    // //Pink 9 Kiri luar-dalam
    // 0.04, 0.75, 0, 0, 0.977, 0.184, 0.707, //55
    // 0.01, 0.65, 0.5, 0.977, 0.184, 0.707, //56
    // 0.01, 0.25, 0.5, 0.977, 0.184, 0.707, //57
    // 0.04, 0.35, 0.0, 0.977, 0.184, 0.707, //58

    // //Pink 9 Kanan luar-dalam
    // 0.34, 0.75, 0.0, 0.977, 0.184, 0.707, //59
    // 0.30, 0.65, 0.5, 0.977, 0.184, 0.707, //60
    // 0.30, 0.25, 0.5, 0.977, 0.184, 0.707, //61
    // 0.34, 0.35, 0.0, 0.977, 0.184, 0.707, //61

    // //Pink 9 atas luar-dalam
    // 0.04, 0.75, 0, 0, 0.977, 0.184, 0.707, //62
    // 0.01, 0.65, 0.5, 0.977, 0.184, 0.707, //63
    // 0.30, 0.65, 0.5, 0.977, 0.184, 0.707, //64
    // 0.34, 0.75, 0.0, 0.977, 0.184, 0.707, //65

    // //Pink 9 bawah luar-dalam
    // 0.04, 0.35, 0.0, 0.977, 0.184, 0.707, //66
    // 0.01, 0.25, 0.5, 0.977, 0.184, 0.707, //67
    // 0.30, 0.25, 0.5, 0.977, 0.184, 0.707, //68
    // 0.34, 0.35, 0.0, 0.977, 0.184, 0.707, //69

    // //Pink T atas dalam
    // -0.7, -0.1, 0.5, 0.992, 0.855, 0.223, //70
    // -0.7, -0.3, 0.5, 0.977, 0.184, 0.707, //71
    // 0.0, -0.1, 0.5, 0.977, 0.184, 0.707, //72
    // 0.0, -0.3, 0.5, 0.977, 0.184, 0.707, //73

    // //Pink T bawah dalam
    // -0.47, -0.1, 0.5, 0.977, 0.184, 0.707, //74
    // -0.47, -0.8, 0.5, 0.977, 0.184, 0.707, //75
    // -0.23, -0.8, 0.5, 0.977, 0.184, 0.707, //76
    // -0.23, -0.1, 0.5, 0.977, 0.184, 0.707, //77

    // //Putih T atas luar
    // -0.75, -0.2, 1.0, 1.0, 1.0, 1.0, //78
    // -0.75, -0.4, 1.0, 1.0, 1.0, 1.0, //79
    // -0.05, -0.2, 1.0, 1.0, 1.0, 1.0, //80
    // -0.05, -0.4, 1.0, 1.0, 1.0, 1.0, //81

    // //Putih T bawah luar
    // -0.52, -0.2, 1.0, 1.0, 1.0, 1.0, //82
    // -0.52, -0.9, 1.0, 1.0, 1.0, 1.0, //83
    // -0.28, -0.9, 1.0, 1.0, 1.0, 1.0, //84
    // -0.28, -0.2, 1.0, 1.0, 1.0, 1.0, //85

    // //Putih T garis kanan atas luar-dalam
    // 0.0, -0.3, 0.5, 1.0, 1.0, 1.0, //86
    // -0.05, -0.4, 1.0, 1.0, 1.0, 1.0, //87
    // -0.05, -0.2, 1.0, 1.0, 1.0, 1.0, //88
    // 0.0, -0.1, 0.5, 1.0, 1.0, 1.0, //89

    // //Putih T garis kiri atas luar-dalam
    // -0.75, -0.2, 1.0, 1.0, 1.0, 1.0, //90
    // -0.7, -0.1, 0.5, 1.0, 1.0, 1.0, //91
    // -0.7, -0.3, 0.5, 1.0, 1.0, 1.0, //92
    // -0.75, -0.4, 1.0, 1.0, 1.0, 1.0, //93

    // //Putih T garis bawah luar-dalam
    // -0.28, -0.9, 1.0, 1.0, 1.0, 1.0, //94
    // -0.23, -0.8, 0.5, 1.0, 1.0, 1.0, //95
    // -0.23, -0.8, 0.5, 1.0, 1.0, 1.0, //96
    // -0.28, -0.9, 1.0, 1.0, 1.0, 1.0, //97

    // //Kuning A kiri dalam
    // 0.20, -0.1, 1.0, 0.992, 0.855, 0.223, //98
    // -0.05, -0.9, 1.0, 0.992, 0.855, 0.223, //99
    // 0.45, -0.1, 1.0, 0.992, 0.855, 0.223, //100

    // //Kuning A kiri luar
    // 0.20, -0.1, 1.0, 0.992, 0.855, 0.223, //101
    // 0.75, -0.9, 1.0, 0.992, 0.855, 0.223, //102
    // 0.45, -0.1, 1.0, 0.992, 0.855, 0.223, //103

    // //Kuning A kanan-tengah
    // -0.05, -0.9, 1.0, 0.992, 0.855, 0.223, //104
    // 0.3, -0.9, 1.0, 0.992, 0.855, 0.223, //105
    // 0.1, -0.5, 1.0, 0.992, 0.855, 0.223, //106
    // -0.1, -0.5, 1.0, 0.992, 0.855, 0.223, //107

    // //Kuning A kanan-bawah
    // 0.75, -0.9, 1.0, 0.992, 0.855, 0.223, //108
    // 0.4, -0.9, 1.0, 0.992, 0.855, 0.223, //109
    // 0.5, -0.5, 1.0, 0.992, 0.855, 0.223, //110
    // 0.5, -0.5, 1.0, 0.992, 0.855, 0.223, //111

    // //Kuning A tengah
    // 0.1, -0.6, 1.0, 0.992, 0.855, 0.223, //112
    // 0.5, -0.6, 1.0, 0.992, 0.855, 0.223, //113
    // 0.4, -0.9, 1.0, 0.992, 0.855, 0.223, //114

    // //Pink A kiri dalam
    // 0.25, -0.05, 1.0, 0.992, 0.855, 0.223, //115
    // 0.0, -0.9, 1.0, 0.992, 0.855, 0.223, //116
    // 0.55, -0.05, 1.0, 0.992, 0.855, 0.223, //117

    // //Pink A kanan
    // 0.25, -0.05, 1.0, 0.977, 0.184, 0.707, //118
    // 0.8, -0.9, 1.0, 0.977, 0.184, 0.707, //119
    // 0.55, -0.05, 1.0, 0.977, 0.184, 0.707, //120

    // //Pink A kiri bawah
    // 0.00, -0.9, 1.0, 0.977, 0.184, 0.707, //121
    // 0.3, -0.9, 1.0, 0.977, 0.184, 0.707, //122
    // 0.3, -0.4, 1.0, 0.977, 0.184, 0.707, //123
    // -0.05, -0.4, 1.0, 0.977, 0.184, 0.707, //124

    // //Pink A bawah kanan
    // 0.8, -0.9, 1.0, 0.977, 0.184, 0.707, //125
    // 0.4, -0.9, 1.0, 0.977, 0.184, 0.707, //126
    // 0.6, -0.5, 1.0, 0.977, 0.184, 0.707, //127
    // 0.6, -0.5, 1.0, 0.977, 0.184, 0.707, //128

    // //Pink A tengah
    // 0.3, -0.6, 1.0, 0.977, 0.184, 0.707, //129
    // 0.6, -0.6, 1.0, 0.977, 0.184, 0.707, //130
    // 0.4, -0.9, 1.0, 0.977, 0.184, 0.707, //131

    // //Pink A kecil kiri atas
    // 0.25, -0.05, 1.0, 0.977, 0.184, 0.707, //132
    // 0.20, -0.1, 1.0, 0.977, 0.184, 0.707, //133
    // 0.25, -0.1, 1.0, 0.977, 0.184, 0.707, //134
  ];

  var indices = [
    0, 1, 2, 0, 2, 3,     // Face A
    4, 5, 6, 4, 6, 7,     // Face B
    8, 9, 10, 8, 10, 11,   // Face C
    12, 13, 14, 12, 14, 15,  // Face D
    16, 17, 18, 16, 18, 19,  // Face E
    20, 21, 22, 20, 22, 23,   // Face F
    // 24, 25, 26, 24, 26, 27,
    // 28, 29, 30, 28, 30, 31,
    // 32, 33, 34, 32, 34, 35,
  ];

  // var vertices = [
  //   // Face A       // Red
  //   -0.3, -0.3, -0.3, 1, 0, 0,    // Index:  0    
  //   0.3, -0.3, -0.3, 1, 0, 0,    // Index:  1
  //   0.3, 0.3, -0.3, 1, 0, 0,    // Index:  2
  //   -0.3, 0.3, -0.3, 1, 0, 0,    // Index:  3
  //   // Face B       // Yellow
  //   -0.3, -0.3, 0.3, 1, 1, 0,    // Index:  4
  //   0.3, -0.3, 0.3, 1, 1, 0,    // Index:  5
  //   0.3, 0.3, 0.3, 1, 1, 0,    // Index:  6
  //   -0.3, 0.3, 0.3, 1, 1, 0,    // Index:  7
  //   // Face C       // Green
  //   -0.3, -0.3, -0.3, 0, 1, 0,    // Index:  8
  //   -0.3, 0.3, -0.3, 0, 1, 0,    // Index:  9
  //   -0.3, 0.3, 0.3, 0, 1, 0,    // Index: 10
  //   -0.3, -0.3, 0.3, 0, 1, 0,    // Index: 11
  //   // Face D       // Blue
  //   0.3, -0.3, -0.3, 0, 0, 1,    // Index: 12
  //   0.3, 0.3, -0.3, 0, 0, 1,    // Index: 13
  //   0.3, 0.3, 0.3, 0, 0, 1,    // Index: 14
  //   0.3, -0.3, 0.3, 0, 0, 1,    // Index: 15
  //   // Face E       // Orange
  //   -0.3, -0.3, -0.3, 1, 0.5, 0,  // Index: 16
  //   -0.3, -0.3, 0.3, 1, 0.5, 0,  // Index: 17
  //   0.3, -0.3, 0.3, 1, 0.5, 0,  // Index: 18
  //   0.3, -0.3, -0.3, 1, 0.5, 0,  // Index: 19
  //   // Face F       // White
  //   -0.3, 0.3, -0.3, 1, 1, 1,    // Index: 20
  //   -0.3, 0.3, 0.3, 1, 1, 1,    // Index: 21
  //   0.3, 0.3, 0.3, 1, 1, 1,    // Index: 22
  //   0.3, 0.3, -0.3, 1, 1, 1     // Index: 23
  // ];
  // var indices = [
  //   0, 1, 2, 0, 2, 3,     // Face A
  //   4, 5, 6, 4, 6, 7,     // Face B
  //   8, 9, 10, 8, 10, 11,   // Face C
  //   12, 13, 14, 12, 14, 15,  // Face D
  //   16, 17, 18, 16, 18, 19,  // Face E
  //   20, 21, 22, 20, 22, 23   // Face F     
  // ];
  var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // Vertex shader
    var vertexShaderCode =  `
    attribute vec3 aPosition;   // Sebelumnya vec2, makanya tidak tergambar kubus :D
    attribute vec3 aColor;
    attribute vec3 aNormal;
    uniform mat4 uModel;
    uniform mat4 uView;
    uniform mat4 uProjection;
    varying vec3 vPosition;
    varying vec3 vColor;
    varying vec3 vNormal;
    void main() {
        gl_Position = uProjection * uView * uModel * vec4(aPosition, 1.0);
        vColor = aColor;
        vNormal = aNormal;
        vPosition = (uModel * vec4(aPosition, 1.0)).xyz;
    }
    `;
    var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject, vertexShaderCode);
    gl.compileShader(vertexShaderObject);   // sampai sini sudah jadi .o

    // Fragment shader
    var fragmentShaderCode = `
    precision mediump float;
    varying vec3 vColor;
    uniform vec3 uLightConstant;        // merepresentasikan warna sumber cahaya
    uniform float uAmbientIntensity;    // merepresentasikan intensitas cahaya sekitar
    varying vec3 vNormal;
    varying vec3 vPosition;             // titik fragmen
    uniform vec3 uLightPosition;        // titik lokasi sumber cahaya
    uniform mat3 uNormalModel;
    void main() {
        vec3 ambient = uLightConstant * uAmbientIntensity;
        vec3 lightRay = vPosition - uLightPosition;
        vec3 normalizedLight = normalize(-lightRay);
        vec3 normalizedNormal = normalize(uNormalModel * vNormal);
        float cosTheta = dot(normalizedNormal, normalizedLight);
        vec3 diffuse = vec3(1.0, 1.0, 1.0);
        if (cosTheta > 0.0) {
            float diffuseIntensity = cosTheta;
            diffuse = uLightConstant * diffuseIntensity;
        }
        vec3 phong = ambient + diffuse;
        gl_FragColor = vec4(phong * vColor, 1.0);
    }
    `;
    var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
    gl.compileShader(fragmentShaderObject);   // sampai sini sudah jadi .o

    var shaderProgram = gl.createProgram(); // wadah dari executable (.exe)
    gl.attachShader(shaderProgram, vertexShaderObject);
    gl.attachShader(shaderProgram, fragmentShaderObject);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    // Variabel lokal
    var theta = 0.0;
    var freeze = false;
    var horizontalSpeed = 0.0;
    var verticalSpeed = 0.0;
    var horizontalDelta = 0.0;
    var verticalDelta = 0.0;

    // Variabel pointer ke GLSL
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    // View
    var cameraX = 0.0;
    var cameraZ = 5.0;
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var view = glMatrix.mat4.create();
    glMatrix.mat4.lookAt(
        view,
        [cameraX, 0.0, cameraZ],    // the location of the eye or the camera
        [cameraX, 0.0, -10],        // the point where the camera look at
        [0.0, 1.0, 0.0]
    );
    // Projection
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    var perspective = glMatrix.mat4.create();
    glMatrix.mat4.perspective(perspective, Math.PI/3, 1.0, 0.5, 10.0);

    // Kita mengajari GPU bagaimana caranya mengoleksi
    //  nilai posisi dari ARRAY_BUFFER
    //  untuk setiap verteks yang sedang diproses
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        3 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);
    var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
    gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        6 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aNormal);

    // Untuk pencahayaan dan pembayangan
    var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
    var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
    gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]);   // warna sumber cahaya: oranye
    gl.uniform1f(uAmbientIntensity, 1.0);               // intensitas cahaya: 40%
    var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
    gl.uniform3fv(uLightPosition, [2.0, 0.0, 0.0]);
    var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");

    // // Grafika interaktif
    // // Tetikus
    // function onMouseClick(event) {
    //     freeze = !freeze;
    // }
    // document.addEventListener("click", onMouseClick);
    // // Papan ketuk
    // function onKeydown(event) {
    //     if (event.keyCode == 32) freeze = !freeze;  // spasi
    //     // Gerakan horizontal: a ke kiri, d ke kanan
    //     if (event.keyCode == 65) {  // a
    //         horizontalSpeed = -0.01;
    //     } else if (event.keyCode == 68) {   // d
    //         horizontalSpeed = 0.01;
    //     }
    //     // Gerakan vertikal: w ke atas, s ke bawah
    //     if (event.keyCode == 87) {  // w
    //         verticalSpeed = -0.01;
    //     } else if (event.keyCode == 83) {   // s
    //         verticalSpeed = 0.01;
    //     }
    // }
    // function onKeyup(event) {
    //     if (event.keyCode == 32) freeze = !freeze;
    //     if (event.keyCode == 65 || event.keyCode == 68) horizontalSpeed = 0.0;
    //     if (event.keyCode == 87 || event.keyCode == 83) verticalSpeed = 0.0;
    // }
    // document.addEventListener("keydown", onKeydown);
    // document.addEventListener("keyup", onKeyup);

    function render() {
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.19,      0.1,    0.01,    1.0);  // Hitam
        //            Merah     Hijau   Biru    Transparansi
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        if (!freeze) {
            theta += 0.01;
        }
        horizontalDelta += horizontalSpeed;
        verticalDelta -= verticalSpeed;
        var model = glMatrix.mat4.create(); // Membuat matriks identitas
        glMatrix.mat4.translate(
            model, model, [horizontalDelta, verticalDelta, 0.0]
        );
        glMatrix.mat4.rotateX(
            model, model, theta
        );
        glMatrix.mat4.rotateY(
            model, model, theta
        );
        glMatrix.mat4.rotateZ(
            model, model, theta
        );
        gl.uniformMatrix4fv(uModel, false, model);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);
        var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
window.onload = main;
  // Catatan Tambahan:
  // 1. Mengubah hexadecimal menjadi RGB adalah dengan menggunakan fitur konversi
  // pada laman https://www.webfx.com/web-design/hex-to-rgb/ lalu membagi nilai tiap komponen dengan 256
  // 2. Untuk kombinasi warna dalam hexadecimal dicari pada laman https://colorhunt.co/palettes/yellow