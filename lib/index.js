'use strict';
const exec = require("child_process").exec;

class Systemd{
  constructor(){
  }
  isActive(name,callback){
    this._exec("is-active "+name,(error,stdout,stderr)=>{
      callback(error,stdout.replace("\n",""));
    })
  }
  _exec(p,cb){
    exec("systemctl "+p,cb);
  }
}
module.exports = Systemd;
