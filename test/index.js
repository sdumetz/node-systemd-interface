'use strict';
const assert = require('assert');
const Systemd = require("../lib");

(function(){
  var systemd = new Systemd();
  systemd._exec = function(p){
    if(p == "is-active hello") return "world\n";
  }
  systemd.isActive("hello",function(err,r){
    assert(!err);
    assert.equal(r,"world");
  })
})()
