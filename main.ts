namespace SpriteKind {
    export const left_paddle = SpriteKind.create()
    export const make_rightpaddle = SpriteKind.create()
    export const rightpaddle = SpriteKind.create()
}
function make_leftpaddle () {
    mySprite = sprites.create(img`
        8 8 
        8 8 
        8 8 
        8 8 
        8 8 
        8 8 
        8 8 
        8 8 
        8 8 
        8 8 
        `, SpriteKind.left_paddle)
    controller.moveSprite(mySprite, 0, 150)
    mySprite.left = 0
    mySprite.setFlag(SpriteFlag.StayInScreen, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.left_paddle, function (sprite, otherSprite) {
    sprite.vx = 100
    info.changeScoreBy(1)
})
function make_ball () {
    ball = sprites.create(img`
        . . f f f f f . . 
        . f d d d d d f . 
        f d d 1 1 d d d f 
        f d 1 1 d d d d f 
        f d 1 d d d d d f 
        f d d d d d d d f 
        f d d d d d d d f 
        . f d d d d d f . 
        . . f f f f f . . 
        `, SpriteKind.Player)
    ball.setVelocity(100, 100)
    ball.setFlag(SpriteFlag.BounceOnWall, true)
    ball.y = randint(0, 120)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.rightpaddle, function (sprite, otherSprite) {
    sprite.vx = -100
    info.player2.changeScoreBy(1)
})
function make_rightpaddle () {
    mySprite = sprites.create(img`
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        2 2 
        `, SpriteKind.rightpaddle)
    controller.player2.moveSprite(mySprite, 0, 150)
    mySprite.right = 160
    mySprite.setFlag(SpriteFlag.StayInScreen, true)
}
let ball: Sprite = null
let mySprite: Sprite = null
make_ball()
make_leftpaddle()
make_rightpaddle()
