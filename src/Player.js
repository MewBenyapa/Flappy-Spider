var Player = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/SpiderMan.png' );
        this.vy = 15;
    },
    
    update: function( dt ) {
        var pos = this.setPosition();
        this.setPosition( new cc.Point( pos.x, pos.y + this.vy ) );
        this.vy += -1;
    }
});

Player.G = -1;
Player.STARTING_VELOCITY = 15;