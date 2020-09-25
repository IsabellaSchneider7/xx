function level1 () {
    for (let index = 0; index < 4; index++) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 . . . . . . . . . . 
            . . . . f 1 . . . . . . . . . . 
            . . . 4 1 1 1 . . . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 f . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . . . 4 . 4 . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, randint(0, 100), 50)
        pause(2000)
        if (player2.overlapsWith(projectile)) {
            game.over(false)
        } else {
            info.changeScoreBy(1)
        }
    }
}
function level2 () {
    for (let index = 0; index < 4; index++) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 . . . . . . . . . . 
            . . . . f 1 . . . . . . . . . . 
            . . . 4 1 1 1 . . . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 f . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . . . 4 . 4 . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, randint(0, 100), 50)
        pause(200)
    }
}
let projectile: Sprite = null
let player2: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999995999999999999999999999999999999999999999999999999999999999999111111199999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999995999999999999999999111111199999999999999999999999999999999991111111119999999999999999999999999999999999999999999999999999999999
    9999999999111111111111119999999999999999999999999991111111119999999999999999999999999999999911111111111991111111999999999999999999999999999999999999999999999999
    9999991111111111111111111999999999999999999999999911111111111999999999999999999999999999999911111111111111111111199999999999999999999999999999999999999999999999
    9999911111111111111111111991555555555999999999999111111551111111111111199999999999999911111111111111111111111111119999999999999999999999999999999999999999999999
    9999911111555111111111111155555555555559999991111111155111111111111111119999999999999111111111111111111111111111119999999999999999999999999999999999999999999999
    9999911111111555511111111555555555555555999911111115511111111111111111111999999999999111111111111111111111111111119999999999999999999999999999999999999999999999
    9999911111111111155511115555555555555555599911111551111111111111111111111999999999999111111111111111111111111111119999999999999999999999999999999999999999999999
    9999911111111111111111155555555555555555559911115111111111111111111111111999999999999111111111111111111111111111119999999999999999999999999999999999999999999999
    9999911111111111111111155555555555555555559911111111111111111111111111111999999999999111111111111111111111111111119999999999999999999999999999999999999999999999
    9999911111111111111111555555555555555555555911111111111111111111111111111999999999999111111111111111111111111111119999999999999999999999999999999999999999999999
    9999991111111111111191555555555555555555555911111111111111111111111111111999999999999111111111111111111111111111199999999999999999999999999999999999999999999999
    9999999911111111111991555555555555555555555911111111111111111111111111111999999999999911111111111111111111111111999999999999999999999999999999999999999999999999
    9999999991111111119999555555555555555555555991111111111111199991111111119999999999999999111111111111111111119999999999999999999999999999999999999999999999999999
    9999999999111111199999555555555555555555555999991111199999999999111111199999999999999999911111119911111111199999999999999999999999999999999999999999999999999999
    9999999999999999999999555555555555555555555999999555555555999999999999999999999999999999999999999991111111999999999999999999999999999999999999999999999999999999
    9999999995555555599999555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999955555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999955555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999995555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999955555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999555555555999999999999599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999959999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999959999999999999999999999999999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999995999999999999999999999999999999995999999999999999999999999999999999dd999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999955999999999999999999999999999999999959999999999999999999999999999999dddd99999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999599999999999999999999999999999999999999999999999999999999999999999999dddd99999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999995999999999999999959999999999999999999999999999999999999999999999999999ddddd9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999995999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999995999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999995999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999995999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999995999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999599999999999999999999999999999999999999999999999999ddddddd9999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999599999999999999999999999999999999999999999999999999ddddddd9999999999999999999999999999999999999999999999999999999999dddddddddd99
    dd999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd99999999999999999999999999999999999999999999999999999999ddddddddddddd
    ddddd999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9999999999999999999999999999999999999999999999999999999dddddddddddddd
    dddddd99999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9999999999999999999999999999999999999999999999999999999dddddddddddddd
    ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9999999999999999999999999999999999999999999999999999999dddddddddddddd
    ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd999999999999999999999999999999999999999999999999ddddddddddddddddddddd
    ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd99999999999999999999999999999999999999999999999dddddddddddddddddddddd
    ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddd999999999999999999999999999999999999999999999ddddddddddddddddddddddd
    ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddd999999999999999999999999999999999999999999999ddddddddddddddddddddddd
    ddddddd999999999999999999999999999999999ddd9999999999999999999999999999999999999999ddddddddd999999999999999999999999999999999999999999999ddeeeeeeeeeeeeedddddddd
    ddddddd999999999999999999999999999999ddddddd999999999999999999999999999999999999999dddddddddd9999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeddddddd
    ddddddd9999999999999999999999999999ddddddddd999999999999999999999999999999999999999dddddddddd9999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeedddddd
    ddddddd99999999999999999999999999dddddddddddd99999999999999999999999999999999999999ddddddddddd9999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddd
    ddddddd9999999999999999999999999ddddddddddddd9999999999999999999999999999999999999dddddddddddd9eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddd
    ddddddd999999999999999999999999dddddddddddddd999999999999999999999999999999999999ddddddddddddd9eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddd
    ddddddd99999999999e999999999999dddddddddddddd999999999999999999999999999999999999dddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddd
    ddddddd99999eeeeeeee99999999999dddddddddddddd999999999999999999999999dd999999999ddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddd
    ddddddd99eeeeeeeeeee99999999999ddddddddddddddd9999999999999999999999ddddddd9999dddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddd
    dddddddeeeeeeeeeeeee9999999999dddddddddddddddd999999999999999999999dddddddddd99dddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddd
    dddddddeeeeeeeeeeeee9999999999dddddddddddddddd999999999999999999999dddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddd
    dddddddeeeeeeeeeeeeee999999999dddddddddddddddd999999999999999999999dddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddd
    dddddeeeeeeeeeeeeeeee999999999dddddddddddddddd99999999999999999999dddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddd
    ddddeeeeeeeeeeeeeeeee999999ddddddddddddddddddd99999999999999999999dddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddd
    ddddeeeeeeeeeeeeeeeeeddddddddddddddddddddddddd99ddd999999999999999dddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddd
    dddeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddd99dddd99999999999999dddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddd
    dddeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddd9999999999999ddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddd
    ddeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddd999999999999ddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddd
    ddeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddd99999999999dddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddd
    deeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddd99999999999ddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddd
    deeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddd99999999999dddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddd
    deeeeeeeeeeeeeeeeeeeeddddddddddddeeeeedddddddddddddddd99999999999ddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddd
    eeeeeeeeeeeeeeeeeeeeeedddddddddddeeeeeeedddddddddddddd99999999999dddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeddddddddddeeeeeeeedddddddddddddd9999999999ddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeedddddddeeeeeeeeeeedddddddddddddddddddddd9ddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeddddeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
info.setScore(0)
player2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 . . . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . . . 5 3 3 . . . . . . . . 
    . . . . . 3 3 3 . . . . . . . . 
    . . . . . 3 3 3 . . . . . . . . 
    . . . 3 7 7 7 7 7 3 . . . . . . 
    . . 3 . 7 7 7 7 7 . 3 . . . . . 
    . . 3 . 7 7 7 7 7 . 3 . . . . . 
    . . 3 . 7 7 7 7 7 . 3 . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . . 8 8 . 8 8 . . . . . . . 
    . . . . 8 8 . 8 8 . . . . . . . 
    . . . . 8 8 . 8 8 . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player2, 100, 0)
player2.setPosition(78, 87)
player2.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(25)
level1()
if (info.score() > 4) {
    level2()
}
game.onUpdateInterval(500, function () {
    if (true) {
    	
    }
})
