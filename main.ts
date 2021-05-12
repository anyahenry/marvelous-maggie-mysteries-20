namespace SpriteKind {
    export const Currency = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeLifeBy(-1)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MaggieLucy.vy == 0) {
        MaggieLucy.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    startNextLevel()
    music.magicWand.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false)
})
function startNextLevel () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    currentLevel += 1
    if (currentLevel == 1) {
        scene.setBackgroundColor(9)
        tiles.setTilemap(tilemap`level1`)
    } else if (currentLevel == 2) {
        scene.setBackgroundColor(6)
        tiles.setTilemap(tilemap`level2`)
    } else if (currentLevel == 3) {
        scene.setBackgroundColor(8)
        tiles.setTilemap(tilemap`level3`)
    } else if (currentLevel == 4) {
        scene.setBackgroundColor(5)
        tiles.setTilemap(tilemap`level4`)
    } else if (currentLevel == 5) {
        scene.setBackgroundColor(10)
        tiles.setTilemap(tilemap`level5`)
    } else {
        game.over(true)
    }
    tiles.placeOnRandomTile(MaggieLucy, assets.tile`myTile3`)
    for (let value2 of tiles.getTilesByType(assets.tile`myTile4`)) {
        MyEnemy = sprites.create(assets.tile`myTile5`, SpriteKind.Enemy)
        tiles.placeOnTile(MyEnemy, value2)
        MyEnemy.follow(MaggieLucy, 50)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (sprite.bottom == otherSprite.y) {
        sprite.vy = -100
    } else {
        info.changeLifeBy(-1)
    }
})
let MyEnemy: Sprite = null
let currentLevel = 0
let MaggieLucy: Sprite = null
MaggieLucy = sprites.create(img`
    8 8 8 8 8 8 8 1 1 4 4 4 4 4 4 4 
    8 6 6 6 6 6 8 1 1 4 5 5 5 5 5 4 
    6 8 5 5 5 8 6 1 1 5 4 b b b 4 5 
    6 5 f 5 f 5 6 1 1 5 b f b f b 5 
    6 2 5 5 5 2 6 1 1 5 2 b b b 2 5 
    6 5 2 2 2 5 6 1 1 5 b 2 2 2 b 5 
    6 5 5 5 5 5 6 1 1 5 b b b b b 5 
    8 9 5 5 5 9 8 1 1 4 5 b b b 5 4 
    8 9 8 8 8 9 8 1 1 4 5 4 4 4 5 4 
    8 9 9 9 9 9 8 1 1 b 5 5 5 5 5 b 
    8 9 9 9 9 9 8 1 1 b 5 5 5 5 5 b 
    8 9 9 9 9 9 8 1 1 b 5 5 5 5 5 b 
    8 6 6 6 6 6 8 1 1 b 4 4 4 4 4 b 
    9 9 9 9 9 9 9 1 1 5 5 5 5 5 5 5 
    9 9 9 9 9 9 9 1 1 5 5 5 5 5 5 5 
    6 6 6 6 6 6 6 1 1 4 4 4 4 4 4 4 
    `, SpriteKind.Player)
MaggieLucy.ay = 500
controller.moveSprite(MaggieLucy, 100, 0)
scene.cameraFollowSprite(MaggieLucy)
info.setLife(3)
tiles.setTilemap(tilemap`level7`)
tiles.placeOnRandomTile(MaggieLucy, assets.tile`myTile3`)
