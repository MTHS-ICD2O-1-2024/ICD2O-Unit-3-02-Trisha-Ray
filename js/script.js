// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function calculateVolumeOfPyramid () {
  // input
  const length = parseFloat(document.getElementById('length').value);
  const width = parseFloat(document.getElementById('width').value);
  const height = parseFloat(document.getElementById('height').value);

  // process
  const volumeOfPyramid = [(abase + bbase) / 2] * height

  // output
  document.getElementById('area').innerHTML = 'Volume is: ' + areaOfTrapizoid + ' mm²'
}
