import * as i6 from "@dimforge/rapier3d-compat";
import * as i3 from "@recast-navigation/core";
import * as i4 from "@recast-navigation/three";
import * as i5 from "three/addons/controls/OrbitControls.js";
import * as i2 from "three/addons/environments/RoomEnvironment.js";
import * as i1 from "three/addons/loaders/GLTFLoader.js";
import * as i0 from "three";

const ALL = {};

globalThis.shadow$bridge = function(name) {
  const ret = ALL[name];
  if (ret == undefined) {
    throw new Error("Dependency: " + name + " not provided by external JS!");
  } else {
    return ret;
  }
};

ALL["@dimforge/rapier3d-compat"] = i6;

ALL["@recast-navigation/core"] = {
  Crowd: i3.Crowd,
  init: i3.init
};

ALL["@recast-navigation/three"] = {
  threeToSoloNavMesh: i4.threeToSoloNavMesh,
  NavMeshHelper: i4.NavMeshHelper
};

ALL["three/addons/controls/OrbitControls.js"] = {
  OrbitControls: i5.OrbitControls
};

ALL["three/addons/environments/RoomEnvironment.js"] = {
  RoomEnvironment: i2.RoomEnvironment
};

ALL["three/addons/loaders/GLTFLoader.js"] = {
  GLTFLoader: i1.GLTFLoader
};

ALL["three"] = {
  WebGLRenderer: i0.WebGLRenderer,
  MeshBasicMaterial: i0.MeshBasicMaterial,
  Quaternion: i0.Quaternion,
  BufferAttribute: i0.BufferAttribute,
  LineSegments: i0.LineSegments,
  Vector3: i0.Vector3,
  ACESFilmicToneMapping: i0.ACESFilmicToneMapping,
  PMREMGenerator: i0.PMREMGenerator,
  CapsuleGeometry: i0.CapsuleGeometry,
  Clock: i0.Clock,
  BufferGeometry: i0.BufferGeometry,
  Euler: i0.Euler,
  Box3: i0.Box3,
  Scene: i0.Scene,
  LineBasicMaterial: i0.LineBasicMaterial,
  Color: i0.Color,
  Mesh: i0.Mesh,
  PerspectiveCamera: i0.PerspectiveCamera
};
