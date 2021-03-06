var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 46, 138, 138, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.player = new Player();
        this.addChild( this.player );
        this.player.setPosition( new cc.Point( 400, 300 ) );
        this.player.scheduleUpdate();
        this.addKeyboardHandlers();
        return true;
    },
    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
    },
 
    onKeyDown: function( keyCode, event ) {
        if ( this.state == GameLayer.STATES.FRONT ) {
            this.state = GameLayer.STATES.STARTED;
             // <--- some code to tell the player to start falling (TO BE ADDED LATER)
        } 
        if ( this.state == GameLayer.STATES.STARTED ) {
            this.player.jump();
        }
        this.player.start();
    },
 
    onKeyUp: function( keyCode, event ) {
    }
});

GameLayer.STATES = {
    FRONT: 1,
    STARTED: 2
};
    
    var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});