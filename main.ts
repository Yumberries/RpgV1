/**
 * Player Name: Beolfred
 */
function Create_Character (Class: string) {
    if (Class == "Warrior") {
        _Player = sprites.create(assets.image`Warrior`, SpriteKind.Player)
        controller.moveSprite(_Player)
        Make_Player_Stats(1, 1, 1, 1, 1, "Beolfred")
    } else if (Class == "Sorcerer") {
        _Player = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        controller.moveSprite(_Player)
        Make_Player_Stats(1, 1, 1, 1, 1, "Beolfred")
    } else if (Class == "Ranger") {
        _Player = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        controller.moveSprite(_Player)
        Make_Player_Stats(1, 1, 1, 1, 1, "Beolfred")
    }
}
function Show_Skill_Tree () {
	
}
function Make_Player_Stats (Armor_Modifier: number, Defense_Modifier: number, Magic_Modifier: number, Strength_Modifier: number, Agility_Modifier: number, Name: string) {
    myEntity = rpg.character("Beolfred")
    rpg.setStat(rpg.equipment("Leather Armor"), "Armor Modifier", rpg.StatKind.Stat, 4)
    rpg.addToInventory(rpg.character("Beolfred"), rpg.item("Leather Armor"))
    rpg.setValue(rpg.character("Beolfred"), rpg.EntityValue.Level, 1)
    rpg.setValue(rpg.character("Beolfred"), rpg.EntityValue.Health, randint(6, 12))
    rpg.setStats(
    rpg.character("Beolfred"),
    rpg.StatKind.Stat,
    rpg._statShadow("Defense", rpg.getStat(rpg.equipment("Leather Armor"), "Armor Modifier", rpg.StatKind.Stat) + Defense_Modifier),
    rpg._statShadow("Magic", randint(1, 3) + Magic_Modifier),
    rpg._statShadow("Strength", randint(2, 6) + Strength_Modifier),
    rpg._statShadow("Agility", randint(2, 6) + Agility_Modifier)
    )
    rpg.showDisplay(myEntity, rpg.ScreenRegion.TopLeft, rpg.DisplayType.Stats)
}
let myEntity: rpg.Entity = null
let _Player: Sprite = null
rpg.setMenuFrame(img`
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    9 9 5 5 5 1 1 1 1 1 5 5 5 9 9 
    9 5 5 1 1 1 1 1 1 1 1 1 5 5 9 
    9 5 1 1 1 1 1 1 1 1 1 1 1 5 9 
    9 5 1 1 1 1 1 1 1 1 1 1 1 5 9 
    9 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
    9 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
    9 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
    9 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
    9 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
    9 5 1 1 1 1 1 1 1 1 1 1 1 5 9 
    9 5 1 1 1 1 1 1 1 1 1 1 1 5 9 
    9 5 5 1 1 1 1 1 1 1 1 1 5 5 9 
    9 9 5 5 5 1 1 1 1 1 5 5 5 9 9 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    `)
rpg.showMenu([
"Warrior",
"Sorcerer",
"Ranger"
], rpg.ScreenRegion.Bottom)
if (rpg.getMenuSelectionString() == "Warrior") {
    Create_Character("Warrior")
} else if (rpg.getMenuSelectionString() == "Sorcerer") {
    Create_Character("Sorcerer")
} else if (rpg.getMenuSelectionString() == "Ranger") {
    Create_Character("Ranger")
}
rpg.closeMenu()
