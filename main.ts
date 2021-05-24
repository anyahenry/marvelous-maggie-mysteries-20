namespace SpriteKind {
    export const Currency = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeLifeBy(-1)
    info.player2.changeLifeBy(-1)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (lucy.vy == 0) {
        lucy.vy = -200
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
    tiles.placeOnRandomTile(maggie, assets.tile`myTile3`)
    tiles.placeOnRandomTile(lucy, assets.tile`myTile3`)
    for (let value2 of tiles.getTilesByType(assets.tile`myTile4`)) {
        MyEnemy = sprites.create(assets.tile`myTile5`, SpriteKind.Enemy)
        tiles.placeOnTile(MyEnemy, value2)
        MyEnemy.follow(maggie, 50)
        MyEnemy.follow(lucy, 50)
    }
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (maggie.vy == 0) {
        maggie.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    info.changeLifeBy(-1)
    info.player2.changeLifeBy(-1)
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
let lucy: Sprite = null
let maggie: Sprite = null
maggie = sprites.create(assets.image`maggie`, SpriteKind.Player)
lucy = sprites.create(assets.image`lucy`, SpriteKind.Player)
maggie.ay = 500
lucy.ay = 500
controller.moveSprite(maggie, 100, 0)
controller.player2.moveSprite(lucy, 100, 0)
scene.cameraFollowSprite(maggie)
info.setLife(3)
info.player2.setLife(3)
tiles.setTilemap(tilemap`level7`)
tiles.placeOnRandomTile(maggie, assets.tile`myTile3`)
tiles.placeOnRandomTile(lucy, assets.tile`myTile3`)
