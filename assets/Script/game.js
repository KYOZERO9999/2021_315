// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// 寄存成绩的全局变量文件
var Global = require("Global");
cc.Class({
    extends: cc.Component,

    properties: {
        // 当前处在第几关
        step:1,
        // 总关卡数
        totalSteps:15,
        // 成绩
        score:0,
        // 游戏页当前是否有道具
        hasItem:0,
        // 剩余时间
        timeLeft:60,
        // 正确声音
        coinSound: {
            default: null,
            type: cc.AudioClip
        },
        //错误声音
        wrongSound: {
            default: null,
            type: cc.AudioClip
        },
        //左侧选我按钮
        btnMe1: {
            default: null,
            type: cc.Node
        },
        //右侧选我按钮
        btnMe2: {
            default: null,
            type: cc.Node
        },
        //倒计时label 
        timelabel: {
            default: null,
            type: cc.Label
        },  
        pic11: {
            default: null,
            type: cc.Prefab
        },
        pic12: {
            default: null,
            type: cc.Prefab
        },
        pic21: {
            default: null,
            type: cc.Prefab
        },
        pic22: {
            default: null,
            type: cc.Prefab
        },
        pic31: {
            default: null,
            type: cc.Prefab
        },
        pic32: {
            default: null,
            type: cc.Prefab
        },
        pic41: {
            default: null,
            type: cc.Prefab
        },
        pic42: {
            default: null,
            type: cc.Prefab
        },
        pic51: {
            default: null,
            type: cc.Prefab
        },
        pic52: {
            default: null,
            type: cc.Prefab
        },
        pic61: {
            default: null,
            type: cc.Prefab
        },
        pic62: {
            default: null,
            type: cc.Prefab
        },
        pic71: {
            default: null,
            type: cc.Prefab
        },
        pic72: {
            default: null,
            type: cc.Prefab
        },
        pic81: {
            default: null,
            type: cc.Prefab
        },
        pic82: {
            default: null,
            type: cc.Prefab
        },
        pic91: {
            default: null,
            type: cc.Prefab
        },
        pic92: {
            default: null,
            type: cc.Prefab
        },
        pic101: {
            default: null,
            type: cc.Prefab
        },
        pic102: {
            default: null,
            type: cc.Prefab
        },              
        pic111: {
            default: null,
            type: cc.Prefab
        },
        pic112: {
            default: null,
            type: cc.Prefab
        }, 
        pic121: {
            default: null,
            type: cc.Prefab
        },
        pic122: {
            default: null,
            type: cc.Prefab
        },
        pic131: {
            default: null,
            type: cc.Prefab
        },
        pic132: {
            default: null,
            type: cc.Prefab
        },
        pic141: {
            default: null,
            type: cc.Prefab
        },
        pic142: {
            default: null,
            type: cc.Prefab
        },
        pic151: {
            default: null,
            type: cc.Prefab
        },
        pic152: {
            default: null,
            type: cc.Prefab
        },           
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.step = 1;
        this.score = 0;
        Global.GlobalScore = 0;
        this.schedule(function() {
            // 这里的 this 指向 component
            this.fnChangeTime()
        }, 1);
    },
    onbtnMe1Tap:function(params) {
        console.log('step:'+this.step)
        if (this.step == 1||this.step == 3||this.step == 5||this.step == 7||this.step == 8||this.step == 9||this.step == 12||this.step == 15) {
            cc.audioEngine.play(this.coinSound, false, 0.3);
            this.score++;
            Global.GlobalScore = this.score
            // console.log('step:'+this.step)
        }
        else{
            cc.audioEngine.play(this.wrongSound, false, 0.3);
        }
        if (this.step == this.totalSteps) {
            cc.director.loadScene("end");
        }        
        this.itemNode1.destroy();
        this.itemNode2.destroy();
        this.step++;
        this.hasItem = 0;
        // console.log('GlobalScore'+Global.GlobalScore)
    },
    onbtnMe2Tap:function(params) {
        console.log('step:'+this.step)
        if (this.step == 2||this.step == 4||this.step == 6||this.step == 10||this.step == 11||this.step == 13||this.step == 14) {
            cc.audioEngine.play(this.coinSound, false, 0.3);
            this.score++;
            Global.GlobalScore = this.score
        }
        else{
            cc.audioEngine.play(this.wrongSound, false, 0.3);
        }
        if (this.step == this.totalSteps) {
            cc.director.loadScene("end");
        }        
        this.itemNode1.destroy();
        this.itemNode2.destroy();
        this.step++;
        this.hasItem = 0;
        // console.log('score'+this.score)
    },    
    update (dt) {
        if (this.step <= this.totalSteps) {
            if (this.hasItem == 0) {
                 this.creatItem()
             }
         }
    },
    creatItem:function(params){
        this.hasItem = 1;
        switch(this.step) {
            case 1:
                this.itemNode1 = cc.instantiate(this.pic11);
                this.itemNode2 = cc.instantiate(this.pic12);
                break;
            case 2:
                this.itemNode1 = cc.instantiate(this.pic21);
                this.itemNode2 = cc.instantiate(this.pic22);
                break;
            case 3:
                this.itemNode1 = cc.instantiate(this.pic31);
                this.itemNode2 = cc.instantiate(this.pic32);
                break;
            case 4:
                this.itemNode1 = cc.instantiate(this.pic41);
                this.itemNode2 = cc.instantiate(this.pic42);
                break;
            case 5:    
                this.itemNode1 = cc.instantiate(this.pic51);
                this.itemNode2 = cc.instantiate(this.pic52);
                break;
            case 6:
                this.itemNode1 = cc.instantiate(this.pic61);
                this.itemNode2 = cc.instantiate(this.pic62);
                break;
            case 7:
                this.itemNode1 = cc.instantiate(this.pic71);
                this.itemNode2 = cc.instantiate(this.pic72);
                break;
            case 8:
                this.itemNode1 = cc.instantiate(this.pic81);
                this.itemNode2 = cc.instantiate(this.pic82);
                break;
            case 9:
                this.itemNode1 = cc.instantiate(this.pic91);
                this.itemNode2 = cc.instantiate(this.pic92);
                break;
            case 10:
                this.itemNode1 = cc.instantiate(this.pic101);
                this.itemNode2 = cc.instantiate(this.pic102);
                break; 
            case 11:
                this.itemNode1 = cc.instantiate(this.pic111);
                this.itemNode2 = cc.instantiate(this.pic112);
                break;
            case 12:
                this.itemNode1 = cc.instantiate(this.pic121);
                this.itemNode2 = cc.instantiate(this.pic122);
                break; 
            case 13:
                this.itemNode1 = cc.instantiate(this.pic131);
                this.itemNode2 = cc.instantiate(this.pic132);
                break; 
            case 14:
                this.itemNode1 = cc.instantiate(this.pic141);
                this.itemNode2 = cc.instantiate(this.pic142);
                break;           
            case 15:
                this.itemNode1 = cc.instantiate(this.pic151);
                this.itemNode2 = cc.instantiate(this.pic152);
                break;                                                                                  
        }
        this.node.addChild(this.itemNode1)
        this.itemNode1.x = -156
        this.itemNode1.y = 83
        this.node.addChild(this.itemNode2)
        this.itemNode2.x = 172
        this.itemNode2.y = 83    
    },
    fnChangeTime:function(params){
        if (this.timeLeft > 0) {
            this.timeLeft--
            this.timelabel.string =  this.timeLeft
        }else{
            cc.director.loadScene("end");
        }
        
    }
    
});
