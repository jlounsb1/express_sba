//creating simple build dummy data
// Got it to work and populate a page, now I should think more in depth about the things I want to include
//name
//important gear
//price
//comments
//playstyle
//purpose

const builds = [
    {
        Id:1,
        name:"Frost Blades Trickster",
        Purpose: "clear",
        Style:"melee ish",
        gear: "good Imperial Claw, headhunter, Lightning Coil",
        comments: "I love me some ice zoom zoom"
    },
    {
        Id:2,
        name:"RF Jugg",
        Purpose: "clear",
        Style:"Walking Simulator",
        gear: "All rares and your fine",
        comments: "Boring but one of the tankiest builds in the game"
    },
    {
        id:2,
        name:"Flicker Strike Trickster",
        Purpose: "clear",
        Style:"melee zooms",
        gear: "ephermeral edge corrupted with resolute technique, headhunter, evasion chestpiece",
        comments: "Uses Chaos innoculation, so needs to get es all over to be viable."

    }
]

module.exports = builds;