// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var Global = require("Global");
cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel: {
            default: null,
            type: cc.Label
        }      
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        // cc.log(GlobalScore)
        // console.log("GlobalScore:"+GlobalScore)
        // console.log('GlobalScore:'+Global.GlobalScore)
        this.scoreLabel.string =  Global.GlobalScore*10
        // console.log(this.scoreLabel.node)
        // 计时器将每隔 1s 后执行。
        this.schedule(function () {    
            cc.director.loadScene("jiguang");
        }, 4);        
    },

    // update (dt) {},
   
});
