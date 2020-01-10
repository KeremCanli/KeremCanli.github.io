$(document).ready(function () {
    var emojis = [{
        code: [0x1F600],
        groupID: 1,
        name: "Grinning Face"
    }, {
        code: [0x1F603],
        groupID: 1,
        name: "Grinning Face With Big Eyes"
    }, {
        code: [0x1F604],
        groupID: 1,
        name: "Grinning Face With Smiling Eyes"
    }, {
        code: [0x1F601],
        groupID: 1,
        name: "Beaming Face With Smiling Eyes"
    }, {
        code: [0x1F606],
        groupID: 1,
        name: "Grinning Squinting Face"
    }, {
        code: [0x1F605],
        groupID: 1,
        name: "Grinning Face With Sweat"
    }, {
        code: [0x1F923],
        groupID: 1,
        name: "Rolling on the Floor Laughing"
    }, {
        code: [0x1F602],
        groupID: 1,
        name: "Face With Tears of Joy"
    }, {
        code: [0x1F642],
        groupID: 1,
        name: "Slightly Smiling Face"
    }, {
        code: [0x1F643],
        groupID: 1,
        name: "Upside-Down Face"
    }, {
        code: [0x1F609],
        groupID: 1,
        name: "Winking Face"
    }, {
        code: [0x1F60A],
        groupID: 1,
        name: "Smiling Face With Smiling Eyes"
    }, {
        code: [0x1F607],
        groupID: 1,
        name: "Smiling Face With Halo"
    }, {
        code: [0x1F970],
        groupID: 1,
        name: "Smiling Face With Hearts"
    }, {
        code: [0x1F60D],
        groupID: 1,
        name: "Smiling Face With Heart-Eyes"
    }, {
        code: [0x1F929],
        groupID: 2,
        name: "Star-Struck"
    }, {
        code: [0x1F618],
        groupID: 1,
        name: "Face Blowing a Kiss"
    }, {
        code: [0x1F617],
        groupID: 1,
        name: "Kissing Face"
    }, {
        code: [0x263A],
        groupID: 1,
        name: "Smiling Face"
    }, {
        code: [0x1F61A],
        groupID: 1,
        name: "Kissing Face With Closed Eyes"
    }, {
        code: [0x1F619],
        groupID: 1,
        name: "Kissing Face With Smiling Eyes"
    }, {
        code: [0x1F60B],
        groupID: 1,
        name: "Face Savoring Food"
    }, {
        code: [0x1F61B],
        groupID: 1,
        name: "Face With Tongue"
    }, {
        code: [0x1F61C],
        groupID: 1,
        name: "Winking Face With Tongue"
    }, {
        code: [0x1F92A],
        groupID: 1,
        name: "Zany Face"
    }, {
        code: [0x1F61D],
        groupID: 1,
        name: "Squinting Face With Tongue"
    }, {
        code: [0x1F911],
        groupID: 1,
        name: "Money-Mouth Face"
    }, {
        code: [0x1F917],
        groupID: 1,
        name: "Hugging Face"
    }, {
        code: [0x1F92D],
        groupID: 1,
        name: "Face With Hand Over Mouth"
    }, {
        code: [0x1F92B],
        groupID: 1,
        name: "Shushing Face"
    }, {
        code: [0x1F914],
        groupID: 1,
        name: "Thinking Face"
    }, {
        code: [0x1F910],
        groupID: 1,
        name: "Zipper-Mouth Face"
    }, {
        code: [0x1F928],
        groupID: 1,
        name: "Face With Raised Eyebrow"
    }, {
        code: [0x1F610],
        groupID: 1,
        name: "Neutral Face"
    }, {
        code: [0x1F611],
        groupID: 1,
        name: "Expressionless Face"
    }, {
        code: [0x1F636],
        groupID: 1,
        name: "Face Without Mouth"
    }, {
        code: [0x1F60F],
        groupID: 1,
        name: "Smirking Face"
    }, {
        code: [0x1F612],
        groupID: 1,
        name: "Unamused Face"
    }, {
        code: [0x1F644],
        groupID: 1,
        name: "Face With Rolling Eyes"
    }, {
        code: [0x1F62C],
        groupID: 1,
        name: "Grimacing Face"
    }, {
        code: [0x1F925],
        groupID: 1,
        name: "Lying Face"
    }, {
        code: [0x1F60C],
        groupID: 1,
        name: "Relieved Face"
    }, {
        code: [0x1F614],
        groupID: 6,
        name: "Pensive Face"
    }, {
        code: [0x1F62A],
        groupID: 1,
        name: "Sleepy Face"
    }, {
        code: [0x1F924],
        groupID: 1,
        name: "Drooling Face"
    }, {
        code: [0x1F634],
        groupID: 1,
        name: "Sleeping Face"
    }, {
        code: [0x1F637],
        groupID: 1,
        name: "Face With Medical Mask"
    }, {
        code: [0x1F912],
        groupID: 6,
        name: "Face With Thermometer"
    }, {
        code: [0x1F915],
        groupID: 1,
        name: "Face With Head-Bandage"
    }, {
        code: [0x1F922],
        groupID: 1,
        name: "Nauseated Face"
    }, {
        code: [0x1F92E],
        groupID: 1,
        name: "Face Vomiting"
    }, {
        code: [0x1F927],
        groupID: 1,
        name: "Sneezing Face"
    }, {
        code: [0x1F975],
        groupID: 1,
        name: "Hot Face"
    }, {
        code: [0x1F976],
        groupID: 1,
        name: "Cold Face"
    }, {
        code: [0x1F974],
        groupID: 1,
        name: "Woozy Face"
    }, {
        code: [0x1F635],
        groupID: 2,
        name: "Dizzy Face"
    }, {
        code: [0x1F92F],
        groupID: 1,
        name: "Exploding Head"
    }, {
        code: [0x1F920],
        groupID: 2,
        name: "Cowboy Hat Face"
    }, {
        code: [0x1F973],
        groupID: 1,
        name: "Partying Face"
    }, {
        code: [0x1F60E],
        groupID: 2,
        name: "Smiling Face With Sunglasses"
    }, {
        code: [0x1F913],
        groupID: 1,
        name: "Nerd Face"
    }, {
        code: [0x1F9D0],
        groupID: 1,
        name: "Face With Monocle"
    }, {
        code: [0x1F615],
        groupID: 1,
        name: "Confused Face"
    }, {
        code: [0x1F61F],
        groupID: 1,
        name: "Worried Face"
    }, {
        code: [0x1F641],
        groupID: 1,
        name: "Slightly Frowning Face"
    }, {
        code: [0x2639],
        groupID: 1,
        name: "Frowning Face"
    }, {
        code: [0x1F62E],
        groupID: 1,
        name: "Face With Open Mouth"
    }, {
        code: [0x1F62F],
        groupID: 1,
        name: "Hushed Face"
    }, {
        code: [0x1F632],
        groupID: 1,
        name: "Astonished Face"
    }, {
        code: [0x1F633],
        groupID: 1,
        name: "Flushed Face"
    }, {
        code: [0x1F97A],
        groupID: 1,
        name: "Pleading Face"
    }, {
        code: [0x1F626],
        groupID: 1,
        name: "Frowning Face With Open Mouth"
    }, {
        code: [0x1F627],
        groupID: 1,
        name: "Anguished Face"
    }, {
        code: [0x1F628],
        groupID: 1,
        name: "Fearful Face"
    }, {
        code: [0x1F630],
        groupID: 1,
        name: "Anxious Face With Sweat"
    }, {
        code: [0x1F625],
        groupID: 1,
        name: "Sad but Relieved Face"
    }, {
        code: [0x1F622],
        groupID: 1,
        name: "Crying Face"
    }, {
        code: [0x1F62D],
        groupID: 1,
        name: "Loudly Crying Face"
    }, {
        code: [0x1F631],
        groupID: 1,
        name: "Face Screaming in Fear"
    }, {
        code: [0x1F616],
        groupID: 1,
        name: "Confounded Face"
    }, {
        code: [0x1F623],
        groupID: 1,
        name: "Persevering Face"
    }, {
        code: [0x1F61E],
        groupID: 1,
        name: "Disappointed Face"
    }, {
        code: [0x1F613],
        groupID: 1,
        name: "Downcast Face With Sweat"
    }, {
        code: [0x1F629],
        groupID: 1,
        name: "Weary Face"
    }, {
        code: [0x1F62B],
        groupID: 1,
        name: "Tired Face"
    }, /*{
        code: [0x1F971],
        groupID: null,
        name: "Yawning Face"
    },*/ {
        code: [0x1F624],
        groupID: 1,
        name: "Face With Steam From Nose"
    }, {
        code: [0x1F621],
        groupID: 1,
        name: "Pouting Face"
    }, {
        code: [0x1F620],
        groupID: 1,
        name: "Angry Face"
    }, {
        code: [0x1F92C],
        groupID: 1,
        name: "Face With Symbols on Mouth"
    }, {
        code: [0x1F608],
        groupID: 1,
        name: "Smiling Face With Horns"
    }, {
        code: [0x1F47F],
        groupID: 1,
        name: "Angry Face With Horns"
    }, {
        code: [0x1F480],
        groupID: 1,
        name: "Skull"
    }, {
        code: [0x2620],
        groupID: 1,
        name: "Skull and Crossbones"
    }, {
        code: [0x1F4A9],
        groupID: 1,
        name: "Pile of Poo"
    }, {
        code: [0x1F921],
        groupID: 1,
        name: "Clown Face"
    }, {
        code: [0x1F479],
        groupID: 1,
        name: "Ogre"
    }, {
        code: [0x1F47A],
        groupID: 1,
        name: "Goblin"
    }, {
        code: [0x1F47B],
        groupID: 1,
        name: "Ghost"
    }, {
        code: [0x1F47D],
        groupID: 1,
        name: "Alien"
    }, {
        code: [0x1F47E],
        groupID: 1,
        name: "Alien Monster"
    }, {
        code: [0x1F916],
        groupID: 1,
        name: "Robot"
    }, {
        code: [0x1F63A],
        groupID: 2,
        name: "Grinning Cat"
    }, {
        code: [0x1F638],
        groupID: 2,
        name: "Grinning Cat With Smiling Eyes"
    }, {
        code: [0x1F639],
        groupID: 2,
        name: "Cat With Tears of Joy"
    }, {
        code: [0x1F63B],
        groupID: 2,
        name: "Smiling Cat With Heart-Eyes"
    }, {
        code: [0x1F63C],
        groupID: 2,
        name: "Cat With Wry Smile"
    }, {
        code: [0x1F63D],
        groupID: 2,
        name: "Kissing Cat"
    }, {
        code: [0x1F640],
        groupID: 2,
        name: "Weary Cat"
    }, {
        code: [0x1F63F],
        groupID: 2,
        name: "Crying Cat"
    }, {
        code: [0x1F63E],
        groupID: 2,
        name: "Pouting Cat"
    }, {
        code: [0x1F648],
        groupID: 2,
        name: "See-No-Evil Monkey"
    }, {
        code: [0x1F649],
        groupID: 2,
        name: "Hear-No-Evil Monkey"
    }, {
        code: [0x1F64A],
        groupID: 2,
        name: "Speak-No-Evil Monkey"
    }, {
        code: [0x1F48B],
        groupID: 1,
        name: "Kiss Mark"
    }, {
        code: [0x1F48C],
        groupID: 6,
        name: "Love Letter"
    }, {
        code: [0x1F498],
        groupID: 7,
        name: "Heart With Arrow"
    }, {
        code: [0x1F49D],
        groupID: 7,
        name: "Heart With Ribbon"
    }, {
        code: [0x1F496],
        groupID: 7,
        name: "Sparkling Heart"
    }, {
        code: [0x1F497],
        groupID: 7,
        name: "Growing Heart"
    }, {
        code: [0x1F493],
        groupID: 7,
        name: "Beating Heart"
    }, {
        code: [0x1F49E],
        groupID: 7,
        name: "Revolving Hearts"
    }, {
        code: [0x1F495],
        groupID: 7,
        name: "Two Hearts"
    }, {
        code: [0x1F49F],
        groupID: 7,
        name: "Heart Decoration"
    }, {
        code: [0x2763],
        groupID: 7,
        name: "Heart Exclamation"
    }, {
        code: [0x1F494],
        groupID: 7,
        name: "Broken Heart"
    }, {
        code: [0x2764],
        groupID: 7,
        name: "Red Heart"
    }, {
        code: [0x1F9E1],
        groupID: 7,
        name: "Orange Heart"
    }, {
        code: [0x1F49B],
        groupID: 7,
        name: "Yellow Heart"
    }, {
        code: [0x1F49A],
        groupID: 7,
        name: "Green Heart"
    }, {
        code: [0x1F499],
        groupID: 7,
        name: "Blue Heart"
    }, {
        code: [0x1F49C],
        groupID: 7,
        name: "Purple Heart"
    }, /*{
        code: [0x1F90E],
        groupID: null,
        name: "Brown Heart"
    },*/ {
        code: [0x1F5A4],
        groupID: 7,
        name: "Black Heart"
    }, /*{
        code: [0x1F90D],
        groupID: null,
        name: "White Heart"
    },*/ {
        code: [0x1F4AF],
        groupID: 7,
        name: "Hundred Points"
    }, {
        code: [0x1F4A2],
        groupID: 7,
        name: "Anger Symbol"
    }, {
        code: [0x1F4A5],
        groupID: 2,
        name: "Collision"
    }, {
        code: [0x1F4AB],
        groupID: 2,
        name: "Dizzy"
    }, {
        code: [0x1F4A6],
        groupID: 2,
        name: "Sweat Droplets"
    }, {
        code: [0x1F4A8],
        groupID: 2,
        name: "Dashing Away"
    }, {
        code: [0x1F573],
        groupID: 6,
        name: "Hole"
    }, {
        code: [0x1F4A3],
        groupID: 6,
        name: "Bomb"
    }, {
        code: [0x1F4AC],
        groupID: 7,
        name: "Speech Balloon"
    }, {
        code: [0x1F441, 0x200D, 0x1F5E8],
        groupID: 7,
        name: "Eye in Speech Bubble"
    }, /*{
        code: [0x1F5E8],
        groupID: null,
        name: "Left Speech Bubble"
    },*/ {
        code: [0x1F5EF],
        groupID: 7,
        name: "Right Anger Bubble"
    }, {
        code: [0x1F4AD],
        groupID: 7,
        name: "Thought Balloon"
    }, {
        code: [0x1F4A4],
        groupID: 7,
        name: "Zzz"
    }, {
        code: [0x1F44B],
        groupID: 1,
        name: "Waving Hand"
    }, /*{
        code: [0x1F44B, 0x1F3FB],
        groupID: 1,
        name: "Waving Hand: Light Skin Tone"
    }, {
        code: [0x1F44B, 0x1F3FC],
        groupID: 1,
        name: "Waving Hand: Medium-Light Skin Tone"
    }, {
        code: [0x1F44B, 0x1F3FD],
        groupID: 1,
        name: "Waving Hand: Medium Skin Tone"
    }, {
        code: [0x1F44B, 0x1F3FE],
        groupID: 1,
        name: "Waving Hand: Medium-Dark Skin Tone"
    }, {
        code: [0x1F44B, 0x1F3FF],
        groupID: 1,
        name: "Waving Hand: Dark Skin Tone"
    },*/ {
        code: [0x1F91A],
        groupID: 1,
        name: "Raised Back of Hand"
    }, /*{
        code: [0x1F91A, 0x1F3FB],
        groupID: 1,
        name: "Raised Back of Hand: Light Skin Tone"
    }, {
        code: [0x1F91A, 0x1F3FC],
        groupID: 1,
        name: "Raised Back of Hand: Medium-Light Skin Tone"
    }, {
        code: [0x1F91A, 0x1F3FD],
        groupID: 1,
        name: "Raised Back of Hand: Medium Skin Tone"
    }, {
        code: [0x1F91A, 0x1F3FE],
        groupID: 1,
        name: "Raised Back of Hand: Medium-Dark Skin Tone"
    }, {
        code: [0x1F91A, 0x1F3FF],
        groupID: 1,
        name: "Raised Back of Hand: Dark Skin Tone"
    },*/ {
        code: [0x1F590],
        groupID: 1,
        name: "Hand With Fingers Splayed"
    }, /*{
        code: [0x1F590, 0x1F3FB],
        groupID: 1,
        name: "Hand With Fingers Splayed: Light Skin Tone"
    }, {
        code: [0x1F590, 0x1F3FC],
        groupID: 1,
        name: "Hand With Fingers Splayed: Medium-Light Skin Tone"
    }, {
        code: [0x1F590, 0x1F3FD],
        groupID: 1,
        name: "Hand With Fingers Splayed: Medium Skin Tone"
    }, {
        code: [0x1F590, 0x1F3FE],
        groupID: 1,
        name: "Hand With Fingers Splayed: Medium-Dark Skin Tone"
    }, {
        code: [0x1F590, 0x1F3FF],
        groupID: 1,
        name: "Hand With Fingers Splayed: Dark Skin Tone"
    },*/ {
        code: [0x270B],
        groupID: 1,
        name: "Raised Hand"
    }, /*{
        code: [0x270B, 0x1F3FB],
        groupID: 1,
        name: "Raised Hand: Light Skin Tone"
    }, {
        code: [0x270B, 0x1F3FC],
        groupID: 1,
        name: "Raised Hand: Medium-Light Skin Tone"
    }, {
        code: [0x270B, 0x1F3FD],
        groupID: 1,
        name: "Raised Hand: Medium Skin Tone"
    }, {
        code: [0x270B, 0x1F3FE],
        groupID: 1,
        name: "Raised Hand: Medium-Dark Skin Tone"
    }, {
        code: [0x270B, 0x1F3FF],
        groupID: 1,
        name: "Raised Hand: Dark Skin Tone"
    },*/ {
        code: [0x1F596],
        groupID: 1,
        name: "Vulcan Salute"
    }, /*{
        code: [0x1F596, 0x1F3FB],
        groupID: 1,
        name: "Vulcan Salute: Light Skin Tone"
    }, {
        code: [0x1F596, 0x1F3FC],
        groupID: 1,
        name: "Vulcan Salute: Medium-Light Skin Tone"
    }, {
        code: [0x1F596, 0x1F3FD],
        groupID: 1,
        name: "Vulcan Salute: Medium Skin Tone"
    }, {
        code: [0x1F596, 0x1F3FE],
        groupID: 1,
        name: "Vulcan Salute: Medium-Dark Skin Tone"
    }, {
        code: [0x1F596, 0x1F3FF],
        groupID: 1,
        name: "Vulcan Salute: Dark Skin Tone"
    },*/ {
        code: [0x1F44C],
        groupID: 1,
        name: "OK Hand"
    }, /*{
        code: [0x1F44C, 0x1F3FB],
        groupID: 1,
        name: "OK Hand: Light Skin Tone"
    }, {
        code: [0x1F44C, 0x1F3FC],
        groupID: 1,
        name: "OK Hand: Medium-Light Skin Tone"
    }, {
        code: [0x1F44C, 0x1F3FD],
        groupID: 1,
        name: "OK Hand: Medium Skin Tone"
    }, {
        code: [0x1F44C, 0x1F3FE],
        groupID: 1,
        name: "OK Hand: Medium-Dark Skin Tone"
    }, {
        code: [0x1F44C, 0x1F3FF],
        groupID: 1,
        name: "OK Hand: Dark Skin Tone"
    }, {
        code: [0x1F90F],
        groupID: null,
        name: "Pinching Hand"
    }, {
        code: [0x1F90F, 0x1F3FB],
        groupID: null,
        name: "Pinching Hand: Light Skin Tone"
    }, {
        code: [0x1F90F, 0x1F3FC],
        groupID: null,
        name: "Pinching Hand: Medium-Light Skin Tone"
    }, {
        code: [0x1F90F, 0x1F3FD],
        groupID: null,
        name: "Pinching Hand: Medium Skin Tone"
    }, {
        code: [0x1F90F, 0x1F3FE],
        groupID: null,
        name: "Pinching Hand: Medium-Dark Skin Tone"
    }, {
        code: [0x1F90F, 0x1F3FF],
        groupID: null,
        name: "Pinching Hand: Dark Skin Tone"
    },*/ {
        code: [0x270C],
        groupID: 1,
        name: "Victory Hand"
    }, /*{
        code: [0x270C, 0x1F3FB],
        groupID: 1,
        name: "Victory Hand: Light Skin Tone"
    }, {
        code: [0x270C, 0x1F3FC],
        groupID: 1,
        name: "Victory Hand: Medium-Light Skin Tone"
    }, {
        code: [0x270C, 0x1F3FD],
        groupID: 1,
        name: "Victory Hand: Medium Skin Tone"
    }, {
        code: [0x270C, 0x1F3FE],
        groupID: 1,
        name: "Victory Hand: Medium-Dark Skin Tone"
    }, {
        code: [0x270C, 0x1F3FF],
        groupID: 1,
        name: "Victory Hand: Dark Skin Tone"
    },*/ {
        code: [0x1F91E],
        groupID: 1,
        name: "Crossed Fingers"
    }, /*{
        code: [0x1F91E, 0x1F3FB],
        groupID: 1,
        name: "Crossed Fingers: Light Skin Tone"
    }, {
        code: [0x1F91E, 0x1F3FC],
        groupID: 1,
        name: "Crossed Fingers: Medium-Light Skin Tone"
    }, {
        code: [0x1F91E, 0x1F3FD],
        groupID: 1,
        name: "Crossed Fingers: Medium Skin Tone"
    }, {
        code: [0x1F91E, 0x1F3FE],
        groupID: 1,
        name: "Crossed Fingers: Medium-Dark Skin Tone"
    }, {
        code: [0x1F91E, 0x1F3FF],
        groupID: 1,
        name: "Crossed Fingers: Dark Skin Tone"
    },*/ {
        code: [0x1F91F],
        groupID: 1,
        name: "Love-You Gesture"
    }, /*{
        code: [0x1F91F, 0x1F3FB],
        groupID: 1,
        name: "Love-You Gesture: Light Skin Tone"
    }, {
        code: [0x1F91F, 0x1F3FC],
        groupID: 1,
        name: "Love-You Gesture: Medium-Light Skin Tone"
    }, {
        code: [0x1F91F, 0x1F3FD],
        groupID: 1,
        name: "Love-You Gesture: Medium Skin Tone"
    }, {
        code: [0x1F91F, 0x1F3FE],
        groupID: 1,
        name: "Love-You Gesture: Medium-Dark Skin Tone"
    }, {
        code: [0x1F91F, 0x1F3FF],
        groupID: 1,
        name: "Love-You Gesture: Dark Skin Tone"
    },*/ {
        code: [0x1F918],
        groupID: 1,
        name: "Sign of the Horns"
    }, /*{
        code: [0x1F918, 0x1F3FB],
        groupID: 1,
        name: "Sign of the Horns: Light Skin Tone"
    }, {
        code: [0x1F918, 0x1F3FC],
        groupID: 1,
        name: "Sign of the Horns: Medium-Light Skin Tone"
    }, {
        code: [0x1F918, 0x1F3FD],
        groupID: 1,
        name: "Sign of the Horns: Medium Skin Tone"
    }, {
        code: [0x1F918, 0x1F3FE],
        groupID: 1,
        name: "Sign of the Horns: Medium-Dark Skin Tone"
    }, {
        code: [0x1F918, 0x1F3FF],
        groupID: 1,
        name: "Sign of the Horns: Dark Skin Tone"
    },*/ {
        code: [0x1F919],
        groupID: 1,
        name: "Call Me Hand"
    }, /*{
        code: [0x1F919, 0x1F3FB],
        groupID: 1,
        name: "Call Me Hand: Light Skin Tone"
    }, {
        code: [0x1F919, 0x1F3FC],
        groupID: 1,
        name: "Call Me Hand: Medium-Light Skin Tone"
    }, {
        code: [0x1F919, 0x1F3FD],
        groupID: 1,
        name: "Call Me Hand: Medium Skin Tone"
    }, {
        code: [0x1F919, 0x1F3FE],
        groupID: 1,
        name: "Call Me Hand: Medium-Dark Skin Tone"
    }, {
        code: [0x1F919, 0x1F3FF],
        groupID: 1,
        name: "Call Me Hand: Dark Skin Tone"
    },*/ {
        code: [0x1F448],
        groupID: 1,
        name: "Backhand Index Pointing Left"
    }, /*{
        code: [0x1F448, 0x1F3FB],
        groupID: 1,
        name: "Backhand Index Pointing Left: Light Skin Tone"
    }, {
        code: [0x1F448, 0x1F3FC],
        groupID: 1,
        name: "Backhand Index Pointing Left: Medium-Light Skin Tone"
    }, {
        code: [0x1F448, 0x1F3FD],
        groupID: 1,
        name: "Backhand Index Pointing Left: Medium Skin Tone"
    }, {
        code: [0x1F448, 0x1F3FE],
        groupID: 1,
        name: "Backhand Index Pointing Left: Medium-Dark Skin Tone"
    }, {
        code: [0x1F448, 0x1F3FF],
        groupID: 1,
        name: "Backhand Index Pointing Left: Dark Skin Tone"
    },*/ {
        code: [0x1F449],
        groupID: 1,
        name: "Backhand Index Pointing Right"
    }, /*{
        code: [0x1F449, 0x1F3FB],
        groupID: 1,
        name: "Backhand Index Pointing Right: Light Skin Tone"
    }, {
        code: [0x1F449, 0x1F3FC],
        groupID: 1,
        name: "Backhand Index Pointing Right: Medium-Light Skin Tone"
    }, {
        code: [0x1F449, 0x1F3FD],
        groupID: 1,
        name: "Backhand Index Pointing Right: Medium Skin Tone"
    }, {
        code: [0x1F449, 0x1F3FE],
        groupID: 1,
        name: "Backhand Index Pointing Right: Medium-Dark Skin Tone"
    }, {
        code: [0x1F449, 0x1F3FF],
        groupID: 1,
        name: "Backhand Index Pointing Right: Dark Skin Tone"
    },*/ {
        code: [0x1F446],
        groupID: 1,
        name: "Backhand Index Pointing Up"
    }, /*{
        code: [0x1F446, 0x1F3FB],
        groupID: 1,
        name: "Backhand Index Pointing Up: Light Skin Tone"
    }, {
        code: [0x1F446, 0x1F3FC],
        groupID: 1,
        name: "Backhand Index Pointing Up: Medium-Light Skin Tone"
    }, {
        code: [0x1F446, 0x1F3FD],
        groupID: 1,
        name: "Backhand Index Pointing Up: Medium Skin Tone"
    }, {
        code: [0x1F446, 0x1F3FE],
        groupID: 1,
        name: "Backhand Index Pointing Up: Medium-Dark Skin Tone"
    }, {
        code: [0x1F446, 0x1F3FF],
        groupID: 1,
        name: "Backhand Index Pointing Up: Dark Skin Tone"
    },*/ {
        code: [0x1F595],
        groupID: 1,
        name: "Middle Finger"
    }, /*{
        code: [0x1F595, 0x1F3FB],
        groupID: 1,
        name: "Middle Finger: Light Skin Tone"
    }, {
        code: [0x1F595, 0x1F3FC],
        groupID: 1,
        name: "Middle Finger: Medium-Light Skin Tone"
    }, {
        code: [0x1F595, 0x1F3FD],
        groupID: 1,
        name: "Middle Finger: Medium Skin Tone"
    }, {
        code: [0x1F595, 0x1F3FE],
        groupID: 1,
        name: "Middle Finger: Medium-Dark Skin Tone"
    }, {
        code: [0x1F595, 0x1F3FF],
        groupID: 1,
        name: "Middle Finger: Dark Skin Tone"
    },*/ {
        code: [0x1F447],
        groupID: 1,
        name: "Backhand Index Pointing Down"
    }, /*{
        code: [0x1F447, 0x1F3FB],
        groupID: 1,
        name: "Backhand Index Pointing Down: Light Skin Tone"
    }, {
        code: [0x1F447, 0x1F3FC],
        groupID: 1,
        name: "Backhand Index Pointing Down: Medium-Light Skin Tone"
    }, {
        code: [0x1F447, 0x1F3FD],
        groupID: 1,
        name: "Backhand Index Pointing Down: Medium Skin Tone"
    }, {
        code: [0x1F447, 0x1F3FE],
        groupID: 1,
        name: "Backhand Index Pointing Down: Medium-Dark Skin Tone"
    }, {
        code: [0x1F447, 0x1F3FF],
        groupID: 1,
        name: "Backhand Index Pointing Down: Dark Skin Tone"
    },*/ {
        code: [0x261D],
        groupID: 1,
        name: "Index Pointing Up"
    }, /*{
        code: [0x261D, 0x1F3FB],
        groupID: 1,
        name: "Index Pointing Up: Light Skin Tone"
    }, {
        code: [0x261D, 0x1F3FC],
        groupID: 1,
        name: "Index Pointing Up: Medium-Light Skin Tone"
    }, {
        code: [0x261D, 0x1F3FD],
        groupID: 1,
        name: "Index Pointing Up: Medium Skin Tone"
    }, {
        code: [0x261D, 0x1F3FE],
        groupID: 1,
        name: "Index Pointing Up: Medium-Dark Skin Tone"
    }, {
        code: [0x261D, 0x1F3FF],
        groupID: 1,
        name: "Index Pointing Up: Dark Skin Tone"
    },*/ {
        code: [0x1F44D],
        groupID: 1,
        name: "Thumbs Up"
    }, /*{
        code: [0x1F44D, 0x1F3FB],
        groupID: 1,
        name: "Thumbs Up: Light Skin Tone"
    }, {
        code: [0x1F44D, 0x1F3FC],
        groupID: 1,
        name: "Thumbs Up: Medium-Light Skin Tone"
    }, {
        code: [0x1F44D, 0x1F3FD],
        groupID: 1,
        name: "Thumbs Up: Medium Skin Tone"
    }, {
        code: [0x1F44D, 0x1F3FE],
        groupID: 1,
        name: "Thumbs Up: Medium-Dark Skin Tone"
    }, {
        code: [0x1F44D, 0x1F3FF],
        groupID: 1,
        name: "Thumbs Up: Dark Skin Tone"
    },*/ {
        code: [0x1F44E],
        groupID: 1,
        name: "Thumbs Down"
    }, /*{
        code: [0x1F44E, 0x1F3FB],
        groupID: 1,
        name: "Thumbs Down: Light Skin Tone"
    }, {
        code: [0x1F44E, 0x1F3FC],
        groupID: 1,
        name: "Thumbs Down: Medium-Light Skin Tone"
    }, {
        code: [0x1F44E, 0x1F3FD],
        groupID: 1,
        name: "Thumbs Down: Medium Skin Tone"
    }, {
        code: [0x1F44E, 0x1F3FE],
        groupID: 1,
        name: "Thumbs Down: Medium-Dark Skin Tone"
    }, {
        code: [0x1F44E, 0x1F3FF],
        groupID: 1,
        name: "Thumbs Down: Dark Skin Tone"
    },*/ {
        code: [0x270A],
        groupID: 1,
        name: "Raised Fist"
    }, /*{
        code: [0x270A, 0x1F3FB],
        groupID: 1,
        name: "Raised Fist: Light Skin Tone"
    }, {
        code: [0x270A, 0x1F3FC],
        groupID: 1,
        name: "Raised Fist: Medium-Light Skin Tone"
    }, {
        code: [0x270A, 0x1F3FD],
        groupID: 1,
        name: "Raised Fist: Medium Skin Tone"
    }, {
        code: [0x270A, 0x1F3FE],
        groupID: 1,
        name: "Raised Fist: Medium-Dark Skin Tone"
    }, {
        code: [0x270A, 0x1F3FF],
        groupID: 1,
        name: "Raised Fist: Dark Skin Tone"
    },*/ {
        code: [0x1F44A],
        groupID: 1,
        name: "Oncoming Fist"
    }, /*{
        code: [0x1F44A, 0x1F3FB],
        groupID: 1,
        name: "Oncoming Fist: Light Skin Tone"
    }, {
        code: [0x1F44A, 0x1F3FC],
        groupID: 1,
        name: "Oncoming Fist: Medium-Light Skin Tone"
    }, {
        code: [0x1F44A, 0x1F3FD],
        groupID: 1,
        name: "Oncoming Fist: Medium Skin Tone"
    }, {
        code: [0x1F44A, 0x1F3FE],
        groupID: 1,
        name: "Oncoming Fist: Medium-Dark Skin Tone"
    }, {
        code: [0x1F44A, 0x1F3FF],
        groupID: 1,
        name: "Oncoming Fist: Dark Skin Tone"
    },*/ {
        code: [0x1F91B],
        groupID: 1,
        name: "Left-Facing Fist"
    }, /*{
        code: [0x1F91B, 0x1F3FB],
        groupID: 1,
        name: "Left-Facing Fist: Light Skin Tone"
    }, {
        code: [0x1F91B, 0x1F3FC],
        groupID: 1,
        name: "Left-Facing Fist: Medium-Light Skin Tone"
    }, {
        code: [0x1F91B, 0x1F3FD],
        groupID: 1,
        name: "Left-Facing Fist: Medium Skin Tone"
    }, {
        code: [0x1F91B, 0x1F3FE],
        groupID: 1,
        name: "Left-Facing Fist: Medium-Dark Skin Tone"
    }, {
        code: [0x1F91B, 0x1F3FF],
        groupID: 1,
        name: "Left-Facing Fist: Dark Skin Tone"
    },*/ {
        code: [0x1F91C],
        groupID: 1,
        name: "Right-Facing Fist"
    }, /*{
        code: [0x1F91C, 0x1F3FB],
        groupID: 1,
        name: "Right-Facing Fist: Light Skin Tone"
    }, {
        code: [0x1F91C, 0x1F3FC],
        groupID: 1,
        name: "Right-Facing Fist: Medium-Light Skin Tone"
    }, {
        code: [0x1F91C, 0x1F3FD],
        groupID: 1,
        name: "Right-Facing Fist: Medium Skin Tone"
    }, {
        code: [0x1F91C, 0x1F3FE],
        groupID: 1,
        name: "Right-Facing Fist: Medium-Dark Skin Tone"
    }, {
        code: [0x1F91C, 0x1F3FF],
        groupID: 1,
        name: "Right-Facing Fist: Dark Skin Tone"
    },*/ {
        code: [0x1F44F],
        groupID: 1,
        name: "Clapping Hands"
    }, /*{
        code: [0x1F44F, 0x1F3FB],
        groupID: 1,
        name: "Clapping Hands: Light Skin Tone"
    }, {
        code: [0x1F44F, 0x1F3FC],
        groupID: 1,
        name: "Clapping Hands: Medium-Light Skin Tone"
    }, {
        code: [0x1F44F, 0x1F3FD],
        groupID: 1,
        name: "Clapping Hands: Medium Skin Tone"
    }, {
        code: [0x1F44F, 0x1F3FE],
        groupID: 1,
        name: "Clapping Hands: Medium-Dark Skin Tone"
    }, {
        code: [0x1F44F, 0x1F3FF],
        groupID: 1,
        name: "Clapping Hands: Dark Skin Tone"
    },*/ {
        code: [0x1F64C],
        groupID: 1,
        name: "Raising Hands"
    }, /*{
        code: [0x1F64C, 0x1F3FB],
        groupID: 1,
        name: "Raising Hands: Light Skin Tone"
    }, {
        code: [0x1F64C, 0x1F3FC],
        groupID: 1,
        name: "Raising Hands: Medium-Light Skin Tone"
    }, {
        code: [0x1F64C, 0x1F3FD],
        groupID: 1,
        name: "Raising Hands: Medium Skin Tone"
    }, {
        code: [0x1F64C, 0x1F3FE],
        groupID: 1,
        name: "Raising Hands: Medium-Dark Skin Tone"
    }, {
        code: [0x1F64C, 0x1F3FF],
        groupID: 1,
        name: "Raising Hands: Dark Skin Tone"
    },*/ {
        code: [0x1F450],
        groupID: 1,
        name: "Open Hands"
    }, /*{
        code: [0x1F450, 0x1F3FB],
        groupID: 1,
        name: "Open Hands: Light Skin Tone"
    }, {
        code: [0x1F450, 0x1F3FC],
        groupID: 1,
        name: "Open Hands: Medium-Light Skin Tone"
    }, {
        code: [0x1F450, 0x1F3FD],
        groupID: 1,
        name: "Open Hands: Medium Skin Tone"
    }, {
        code: [0x1F450, 0x1F3FE],
        groupID: 1,
        name: "Open Hands: Medium-Dark Skin Tone"
    }, {
        code: [0x1F450, 0x1F3FF],
        groupID: 1,
        name: "Open Hands: Dark Skin Tone"
    },*/ {
        code: [0x1F932],
        groupID: 1,
        name: "Palms Up Together"
    }, /*{
        code: [0x1F932, 0x1F3FB],
        groupID: 1,
        name: "Palms Up Together: Light Skin Tone"
    }, {
        code: [0x1F932, 0x1F3FC],
        groupID: 1,
        name: "Palms Up Together: Medium-Light Skin Tone"
    }, {
        code: [0x1F932, 0x1F3FD],
        groupID: 1,
        name: "Palms Up Together: Medium Skin Tone"
    }, {
        code: [0x1F932, 0x1F3FE],
        groupID: 1,
        name: "Palms Up Together: Medium-Dark Skin Tone"
    }, {
        code: [0x1F932, 0x1F3FF],
        groupID: 1,
        name: "Palms Up Together: Dark Skin Tone"
    },*/ {
        code: [0x1F64F],
        groupID: 1,
        name: "Folded Hands"
    }, /*{
        code: [0x1F64F, 0x1F3FB],
        groupID: 1,
        name: "Folded Hands: Light Skin Tone"
    }, {
        code: [0x1F64F, 0x1F3FC],
        groupID: 1,
        name: "Folded Hands: Medium-Light Skin Tone"
    }, {
        code: [0x1F64F, 0x1F3FD],
        groupID: 1,
        name: "Folded Hands: Medium Skin Tone"
    }, {
        code: [0x1F64F, 0x1F3FE],
        groupID: 1,
        name: "Folded Hands: Medium-Dark Skin Tone"
    }, {
        code: [0x1F64F, 0x1F3FF],
        groupID: 1,
        name: "Folded Hands: Dark Skin Tone"
    },*/ {
        code: [0x270D],
        groupID: 1,
        name: "Writing Hand"
    }, /*{
        code: [0x270D, 0x1F3FB],
        groupID: 1,
        name: "Writing Hand: Light Skin Tone"
    }, {
        code: [0x270D, 0x1F3FC],
        groupID: 1,
        name: "Writing Hand: Medium-Light Skin Tone"
    }, {
        code: [0x270D, 0x1F3FD],
        groupID: 1,
        name: "Writing Hand: Medium Skin Tone"
    }, {
        code: [0x270D, 0x1F3FE],
        groupID: 1,
        name: "Writing Hand: Medium-Dark Skin Tone"
    }, {
        code: [0x270D, 0x1F3FF],
        groupID: 1,
        name: "Writing Hand: Dark Skin Tone"
    },*/ {
        code: [0x1F485],
        groupID: 1,
        name: "Nail Polish"
    }, /*{
        code: [0x1F485, 0x1F3FB],
        groupID: 1,
        name: "Nail Polish: Light Skin Tone"
    }, {
        code: [0x1F485, 0x1F3FC],
        groupID: 1,
        name: "Nail Polish: Medium-Light Skin Tone"
    }, {
        code: [0x1F485, 0x1F3FD],
        groupID: 1,
        name: "Nail Polish: Medium Skin Tone"
    }, {
        code: [0x1F485, 0x1F3FE],
        groupID: 1,
        name: "Nail Polish: Medium-Dark Skin Tone"
    }, {
        code: [0x1F485, 0x1F3FF],
        groupID: 1,
        name: "Nail Polish: Dark Skin Tone"
    },*/ {
        code: [0x1F91D],
        groupID: 1,
        name: "Handshake"
    }, /*{
        code: [0x1F91D, 0x1F3FB],
        groupID: 1,
        name: "Handshake, Type-1-2"
    }, {
        code: [0x1F91D, 0x1F3FC],
        groupID: 1,
        name: "Handshake, Type-3"
    }, {
        code: [0x1F91D, 0x1F3FD],
        groupID: 1,
        name: "Handshake, Type-4"
    }, {
        code: [0x1F91D, 0x1F3FE],
        groupID: 1,
        name: "Handshake, Type-5"
    }, {
        code: [0x1F91D, 0x1F3FF],
        groupID: 1,
        name: "Handshake, Type-6"
    },*/ {
        code: [0x1F933],
        groupID: 1,
        name: "Selfie"
    }, /*{
        code: [0x1F933, 0x1F3FB],
        groupID: 1,
        name: "Selfie: Light Skin Tone"
    }, {
        code: [0x1F933, 0x1F3FC],
        groupID: 1,
        name: "Selfie: Medium-Light Skin Tone"
    }, {
        code: [0x1F933, 0x1F3FD],
        groupID: 1,
        name: "Selfie: Medium Skin Tone"
    }, {
        code: [0x1F933, 0x1F3FE],
        groupID: 1,
        name: "Selfie: Medium-Dark Skin Tone"
    }, {
        code: [0x1F933, 0x1F3FF],
        groupID: 1,
        name: "Selfie: Dark Skin Tone"
    },*/ {
        code: [0x1F4AA],
        groupID: 1,
        name: "Flexed Biceps"
    }, /*{
        code: [0x1F4AA, 0x1F3FB],
        groupID: 1,
        name: "Flexed Biceps: Light Skin Tone"
    }, {
        code: [0x1F4AA, 0x1F3FC],
        groupID: 1,
        name: "Flexed Biceps: Medium-Light Skin Tone"
    }, {
        code: [0x1F4AA, 0x1F3FD],
        groupID: 1,
        name: "Flexed Biceps: Medium Skin Tone"
    }, {
        code: [0x1F4AA, 0x1F3FE],
        groupID: 1,
        name: "Flexed Biceps: Medium-Dark Skin Tone"
    }, {
        code: [0x1F4AA, 0x1F3FF],
        groupID: 1,
        name: "Flexed Biceps: Dark Skin Tone"
    }, {
        code: [0x1F9BE],
        groupID: null,
        name: "Mechanical Arm"
    }, {
        code: [0x1F9BF],
        groupID: 1,
        name: "Mechanical Leg"
    },*/ {
        code: [0x1F9B5],
        groupID: 1,
        name: "Leg"
    }, /*{
        code: [0x1F9B5, 0x1F3FB],
        groupID: 1,
        name: "Leg: Light Skin Tone"
    }, {
        code: [0x1F9B5, 0x1F3FC],
        groupID: 1,
        name: "Leg: Medium-Light Skin Tone"
    }, {
        code: [0x1F9B5, 0x1F3FD],
        groupID: 1,
        name: "Leg: Medium Skin Tone"
    }, {
        code: [0x1F9B5, 0x1F3FE],
        groupID: 1,
        name: "Leg: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9B5, 0x1F3FF],
        groupID: 1,
        name: "Leg: Dark Skin Tone"
    },*/ {
        code: [0x1F9B6],
        groupID: 1,
        name: "Foot"
    }, /*{
        code: [0x1F9B6, 0x1F3FB],
        groupID: 1,
        name: "Foot: Light Skin Tone"
    }, {
        code: [0x1F9B6, 0x1F3FC],
        groupID: 1,
        name: "Foot: Medium-Light Skin Tone"
    }, {
        code: [0x1F9B6, 0x1F3FD],
        groupID: 1,
        name: "Foot: Medium Skin Tone"
    }, {
        code: [0x1F9B6, 0x1F3FE],
        groupID: 1,
        name: "Foot: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9B6, 0x1F3FF],
        groupID: 1,
        name: "Foot: Dark Skin Tone"
    },*/ {
        code: [0x1F442],
        groupID: 1,
        name: "Ear"
    }, /*{
        code: [0x1F442, 0x1F3FB],
        groupID: 1,
        name: "Ear: Light Skin Tone"
    }, {
        code: [0x1F442, 0x1F3FC],
        groupID: 1,
        name: "Ear: Medium-Light Skin Tone"
    }, {
        code: [0x1F442, 0x1F3FD],
        groupID: 1,
        name: "Ear: Medium Skin Tone"
    }, {
        code: [0x1F442, 0x1F3FE],
        groupID: 1,
        name: "Ear: Medium-Dark Skin Tone"
    }, {
        code: [0x1F442, 0x1F3FF],
        groupID: 1,
        name: "Ear: Dark Skin Tone"
    }, {
        code: [0x1F9BB],
        groupID: 1,
        name: "Ear With Hearing Aid"
    }, {
        code: [0x1F9BB, 0x1F3FB],
        groupID: 1,
        name: "Ear With Hearing Aid: Light Skin Tone"
    }, {
        code: [0x1F9BB, 0x1F3FC],
        groupID: 1,
        name: "Ear With Hearing Aid: Medium-Light Skin Tone"
    }, {
        code: [0x1F9BB, 0x1F3FD],
        groupID: 1,
        name: "Ear With Hearing Aid: Medium Skin Tone"
    }, {
        code: [0x1F9BB, 0x1F3FE],
        groupID: 1,
        name: "Ear With Hearing Aid: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9BB, 0x1F3FF],
        groupID: 1,
        name: "Ear With Hearing Aid: Dark Skin Tone"
    },*/ {
        code: [0x1F443],
        groupID: 1,
        name: "Nose"
    }, /*{
        code: [0x1F443, 0x1F3FB],
        groupID: 1,
        name: "Nose: Light Skin Tone"
    }, {
        code: [0x1F443, 0x1F3FC],
        groupID: 1,
        name: "Nose: Medium-Light Skin Tone"
    }, {
        code: [0x1F443, 0x1F3FD],
        groupID: 1,
        name: "Nose: Medium Skin Tone"
    }, {
        code: [0x1F443, 0x1F3FE],
        groupID: 1,
        name: "Nose: Medium-Dark Skin Tone"
    }, {
        code: [0x1F443, 0x1F3FF],
        groupID: 1,
        name: "Nose: Dark Skin Tone"
    },*/ {
        code: [0x1F9E0],
        groupID: 1,
        name: "Brain"
    }, {
        code: [0x1F9B7],
        groupID: 1,
        name: "Tooth"
    }, {
        code: [0x1F9B4],
        groupID: 1,
        name: "Bone"
    }, {
        code: [0x1F440],
        groupID: 1,
        name: "Eyes"
    }, {
        code: [0x1F441],
        groupID: 1,
        name: "Eye"
    }, {
        code: [0x1F445],
        groupID: 1,
        name: "Tongue"
    }, {
        code: [0x1F444],
        groupID: 1,
        name: "Mouth"
    }, {
        code: [0x1F476],
        groupID: 1,
        name: "Baby"
    }, /*{
        code: [0x1F476, 0x1F3FB],
        groupID: 1,
        name: "Baby: Light Skin Tone"
    }, {
        code: [0x1F476, 0x1F3FC],
        groupID: 1,
        name: "Baby: Medium-Light Skin Tone"
    }, {
        code: [0x1F476, 0x1F3FD],
        groupID: 1,
        name: "Baby: Medium Skin Tone"
    }, {
        code: [0x1F476, 0x1F3FE],
        groupID: 1,
        name: "Baby: Medium-Dark Skin Tone"
    }, {
        code: [0x1F476, 0x1F3FF],
        groupID: 1,
        name: "Baby: Dark Skin Tone"
    },*/ {
        code: [0x1F9D2],
        groupID: 1,
        name: "Child"
    }, /*{
        code: [0x1F9D2, 0x1F3FB],
        groupID: 1,
        name: "Child: Light Skin Tone"
    }, {
        code: [0x1F9D2, 0x1F3FC],
        groupID: 1,
        name: "Child: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D2, 0x1F3FD],
        groupID: 1,
        name: "Child: Medium Skin Tone"
    }, {
        code: [0x1F9D2, 0x1F3FE],
        groupID: 1,
        name: "Child: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D2, 0x1F3FF],
        groupID: 1,
        name: "Child: Dark Skin Tone"
    },*/ {
        code: [0x1F466],
        groupID: 1,
        name: "Boy"
    }, /*{
        code: [0x1F466, 0x1F3FB],
        groupID: 1,
        name: "Boy: Light Skin Tone"
    }, {
        code: [0x1F466, 0x1F3FC],
        groupID: 1,
        name: "Boy: Medium-Light Skin Tone"
    }, {
        code: [0x1F466, 0x1F3FD],
        groupID: 1,
        name: "Boy: Medium Skin Tone"
    }, {
        code: [0x1F466, 0x1F3FE],
        groupID: 1,
        name: "Boy: Medium-Dark Skin Tone"
    }, {
        code: [0x1F466, 0x1F3FF],
        groupID: 1,
        name: "Boy: Dark Skin Tone"
    },*/ {
        code: [0x1F467],
        groupID: 1,
        name: "Girl"
    }, /*{
        code: [0x1F467, 0x1F3FB],
        groupID: 1,
        name: "Girl: Light Skin Tone"
    }, {
        code: [0x1F467, 0x1F3FC],
        groupID: 1,
        name: "Girl: Medium-Light Skin Tone"
    }, {
        code: [0x1F467, 0x1F3FD],
        groupID: 1,
        name: "Girl: Medium Skin Tone"
    }, {
        code: [0x1F467, 0x1F3FE],
        groupID: 1,
        name: "Girl: Medium-Dark Skin Tone"
    }, {
        code: [0x1F467, 0x1F3FF],
        groupID: 1,
        name: "Girl: Dark Skin Tone"
    },*/ {
        code: [0x1F9D1],
        groupID: 1,
        name: "Person"
    }, /*{
        code: [0x1F9D1, 0x1F3FB],
        groupID: 1,
        name: "Person: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC],
        groupID: 1,
        name: "Person: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD],
        groupID: 1,
        name: "Person: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE],
        groupID: 1,
        name: "Person: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF],
        groupID: 1,
        name: "Person: Dark Skin Tone"
    },*/ {
        code: [0x1F471],
        groupID: 1,
        name: "Person: Blond Hair"
    }, /*{
        code: [0x1F471, 0x1F3FB],
        groupID: 1,
        name: "Person: Light Skin Tone, Blond Hair"
    }, {
        code: [0x1F471, 0x1F3FC],
        groupID: 1,
        name: "Person: Medium-Light Skin Tone, Blond Hair"
    }, {
        code: [0x1F471, 0x1F3FD],
        groupID: 1,
        name: "Person: Medium Skin Tone, Blond Hair"
    }, {
        code: [0x1F471, 0x1F3FE],
        groupID: 1,
        name: "Person: Medium-Dark Skin Tone, Blond Hair"
    }, {
        code: [0x1F471, 0x1F3FF],
        groupID: 1,
        name: "Person: Dark Skin Tone, Blond Hair"
    },*/ {
        code: [0x1F468],
        groupID: 1,
        name: "Man"
    }, /*{
        code: [0x1F468, 0x1F3FB],
        groupID: 1,
        name: "Man: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC],
        groupID: 1,
        name: "Man: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD],
        groupID: 1,
        name: "Man: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE],
        groupID: 1,
        name: "Man: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF],
        groupID: 1,
        name: "Man: Dark Skin Tone"
    },*/ {
        code: [0x1F9D4],
        groupID: 2,
        name: "Man: Beard"
    }, /*{
        code: [0x1F9D4, 0x1F3FB],
        groupID: 2,
        name: "Man: Light Skin Tone, Beard"
    }, {
        code: [0x1F9D4, 0x1F3FC],
        groupID: 2,
        name: "Man: Medium-Light Skin Tone, Beard"
    }, {
        code: [0x1F9D4, 0x1F3FD],
        groupID: 2,
        name: "Man: Medium Skin Tone, Beard"
    }, {
        code: [0x1F9D4, 0x1F3FE],
        groupID: 2,
        name: "Man: Medium-Dark Skin Tone, Beard"
    }, {
        code: [0x1F9D4, 0x1F3FF],
        groupID: 2,
        name: "Man: Dark Skin Tone, Beard"
    },*/ {
        code: [0x1F468, 0x200D, 0x1F9B0],
        groupID: 1,
        name: "Man: Red Hair"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F9B0],
        groupID: 1,
        name: "Man: Light Skin Tone, Red Hair"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F9B0],
        groupID: 1,
        name: "Man: Medium-Light Skin Tone, Red Hair"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F9B0],
        groupID: 1,
        name: "Man: Medium Skin Tone, Red Hair"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F9B0],
        groupID: 1,
        name: "Man: Medium-Dark Skin Tone, Red Hair"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F9B0],
        groupID: 1,
        name: "Man: Dark Skin Tone, Red Hair"
    },*/ {
        code: [0x1F468, 0x200D, 0x1F9B1],
        groupID: 1,
        name: "Man: Curly Hair"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F9B1],
        groupID: 1,
        name: "Man: Light Skin Tone, Curly Hair"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F9B1],
        groupID: 1,
        name: "Man: Medium-Light Skin Tone, Curly Hair"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F9B1],
        groupID: 1,
        name: "Man: Medium Skin Tone, Curly Hair"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F9B1],
        groupID: 1,
        name: "Man: Medium-Dark Skin Tone, Curly Hair"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F9B1],
        groupID: 1,
        name: "Man: Dark Skin Tone, Curly Hair"
    },*/ {
        code: [0x1F468, 0x200D, 0x1F9B3],
        groupID: 1,
        name: "Man: White Hair"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F9B3],
        groupID: 1,
        name: "Man: Light Skin Tone, White Hair"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F9B3],
        groupID: 1,
        name: "Man: Medium-Light Skin Tone, White Hair"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F9B3],
        groupID: 1,
        name: "Man: Medium Skin Tone, White Hair"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F9B3],
        groupID: 1,
        name: "Man: Medium-Dark Skin Tone, White Hair"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F9B3],
        groupID: 1,
        name: "Man: Dark Skin Tone, White Hair"
    },*/ {
        code: [0x1F468, 0x200D, 0x1F9B2],
        groupID: 1,
        name: "Man: Bald"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F9B2],
        groupID: 1,
        name: "Man: Light Skin Tone, Bald"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F9B2],
        groupID: 1,
        name: "Man: Medium-Light Skin Tone, Bald"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F9B2],
        groupID: 1,
        name: "Man: Medium Skin Tone, Bald"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F9B2],
        groupID: 1,
        name: "Man: Medium-Dark Skin Tone, Bald"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F9B2],
        groupID: 1,
        name: "Man: Dark Skin Tone, Bald"
    },*/ {
        code: [0x1F469],
        groupID: 1,
        name: "Woman"
    }, /*{
        code: [0x1F469, 0x1F3FB],
        groupID: 1,
        name: "Woman: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC],
        groupID: 1,
        name: "Woman: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD],
        groupID: 1,
        name: "Woman: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE],
        groupID: 1,
        name: "Woman: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF],
        groupID: 1,
        name: "Woman: Dark Skin Tone"
    },*/ {
        code: [0x1F469, 0x200D, 0x1F9B0],
        groupID: 1,
        name: "Woman: Red Hair"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F9B0],
        groupID: 1,
        name: "Woman: Light Skin Tone, Red Hair"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F9B0],
        groupID: 1,
        name: "Woman: Medium-Light Skin Tone, Red Hair"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F9B0],
        groupID: 1,
        name: "Woman: Medium Skin Tone, Red Hair"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F9B0],
        groupID: 1,
        name: "Woman: Medium-Dark Skin Tone, Red Hair"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F9B0],
        groupID: 1,
        name: "Woman: Dark Skin Tone, Red Hair"
    },*/ {
        code: [0x1F9D1, 0x200D, 0x1F9B0],
        groupID: 1,
        name: "Person: Red Hair"
    }, /*{
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F9B0],
        groupID: 1,
        name: "Person: Light Skin Tone, Red Hair"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F9B0],
        groupID: 1,
        name: "Person: Medium-Light Skin Tone, Red Hair"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F9B0],
        groupID: 1,
        name: "Person: Medium Skin Tone, Red Hair"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F9B0],
        groupID: 1,
        name: "Person: Medium-Dark Skin Tone, Red Hair"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F9B0],
        groupID: 1,
        name: "Person: Dark Skin Tone, Red Hair"
    },*/ {
        code: [0x1F469, 0x200D, 0x1F9B1],
        groupID: 1,
        name: "Woman: Curly Hair"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F9B1],
        groupID: 1,
        name: "Woman: Light Skin Tone, Curly Hair"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F9B1],
        groupID: 1,
        name: "Woman: Medium-Light Skin Tone, Curly Hair"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F9B1],
        groupID: 1,
        name: "Woman: Medium Skin Tone, Curly Hair"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F9B1],
        groupID: 1,
        name: "Woman: Medium-Dark Skin Tone, Curly Hair"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F9B1],
        groupID: 1,
        name: "Woman: Dark Skin Tone, Curly Hair"
    },*/ {
        code: [0x1F9D1, 0x200D, 0x1F9B1],
        groupID: 1,
        name: "Person: Curly Hair"
    }, /*{
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F9B1],
        groupID: 1,
        name: "Person: Light Skin Tone, Curly Hair"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F9B1],
        groupID: 1,
        name: "Person: Medium-Light Skin Tone, Curly Hair"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F9B1],
        groupID: 1,
        name: "Person: Medium Skin Tone, Curly Hair"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F9B1],
        groupID: 1,
        name: "Person: Medium-Dark Skin Tone, Curly Hair"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F9B1],
        groupID: 1,
        name: "Person: Dark Skin Tone, Curly Hair"
    },*/ {
        code: [0x1F469, 0x200D, 0x1F9B3],
        groupID: 1,
        name: "Woman: White Hair"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F9B3],
        groupID: 1,
        name: "Woman: Light Skin Tone, White Hair"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F9B3],
        groupID: 1,
        name: "Woman: Medium-Light Skin Tone, White Hair"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F9B3],
        groupID: 1,
        name: "Woman: Medium Skin Tone, White Hair"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F9B3],
        groupID: 1,
        name: "Woman: Medium-Dark Skin Tone, White Hair"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F9B3],
        groupID: 1,
        name: "Woman: Dark Skin Tone, White Hair"
    },*/ {
        code: [0x1F9D1, 0x200D, 0x1F9B3],
        groupID: 1,
        name: "Person: White Hair"
    }, /*{
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F9B3],
        groupID: 1,
        name: "Person: Light Skin Tone, White Hair"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F9B3],
        groupID: 1,
        name: "Person: Medium-Light Skin Tone, White Hair"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F9B3],
        groupID: 1,
        name: "Person: Medium Skin Tone, White Hair"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F9B3],
        groupID: 1,
        name: "Person: Medium-Dark Skin Tone, White Hair"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F9B3],
        groupID: 1,
        name: "Person: Dark Skin Tone, White Hair"
    },*/ {
        code: [0x1F469, 0x200D, 0x1F9B2],
        groupID: 1,
        name: "Woman: Bald"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F9B2],
        groupID: 1,
        name: "Woman: Light Skin Tone, Bald"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F9B2],
        groupID: 1,
        name: "Woman: Medium-Light Skin Tone, Bald"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F9B2],
        groupID: 1,
        name: "Woman: Medium Skin Tone, Bald"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F9B2],
        groupID: 1,
        name: "Woman: Medium-Dark Skin Tone, Bald"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F9B2],
        groupID: 1,
        name: "Woman: Dark Skin Tone, Bald"
    },*/ {
        code: [0x1F9D1, 0x200D, 0x1F9B2],
        groupID: 1,
        name: "Person: Bald"
    }, /*{
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F9B2],
        groupID: 1,
        name: "Person: Light Skin Tone, Bald"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F9B2],
        groupID: 1,
        name: "Person: Medium-Light Skin Tone, Bald"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F9B2],
        groupID: 1,
        name: "Person: Medium Skin Tone, Bald"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F9B2],
        groupID: 1,
        name: "Person: Medium-Dark Skin Tone, Bald"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F9B2],
        groupID: 1,
        name: "Person: Dark Skin Tone, Bald"
    },*/ {
        code: [0x1F471, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman: Blond Hair"
    }, /*{
        code: [0x1F471, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman: Light Skin Tone, Blond Hair"
    }, {
        code: [0x1F471, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman: Medium-Light Skin Tone, Blond Hair"
    }, {
        code: [0x1F471, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman: Medium Skin Tone, Blond Hair"
    }, {
        code: [0x1F471, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman: Medium-Dark Skin Tone, Blond Hair"
    }, {
        code: [0x1F471, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman: Dark Skin Tone, Blond Hair"
    },*/ {
        code: [0x1F471, 0x200D, 0x2642],
        groupID: 1,
        name: "Man: Blond Hair"
    }, /*{
        code: [0x1F471, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man: Light Skin Tone, Blond Hair"
    }, {
        code: [0x1F471, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man: Medium-Light Skin Tone, Blond Hair"
    }, {
        code: [0x1F471, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man: Medium Skin Tone, Blond Hair"
    }, {
        code: [0x1F471, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man: Medium-Dark Skin Tone, Blond Hair"
    }, {
        code: [0x1F471, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man: Dark Skin Tone, Blond Hair"
    },*/ {
        code: [0x1F9D3],
        groupID: 1,
        name: "Older Person"
    }, /*{
        code: [0x1F9D3, 0x1F3FB],
        groupID: 1,
        name: "Older Person: Light Skin Tone"
    }, {
        code: [0x1F9D3, 0x1F3FC],
        groupID: 1,
        name: "Older Person: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D3, 0x1F3FD],
        groupID: 1,
        name: "Older Person: Medium Skin Tone"
    }, {
        code: [0x1F9D3, 0x1F3FE],
        groupID: 1,
        name: "Older Person: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D3, 0x1F3FF],
        groupID: 1,
        name: "Older Person: Dark Skin Tone"
    },*/ {
        code: [0x1F474],
        groupID: 1,
        name: "Old Man"
    }, /*{
        code: [0x1F474, 0x1F3FB],
        groupID: 1,
        name: "Old Man: Light Skin Tone"
    }, {
        code: [0x1F474, 0x1F3FC],
        groupID: 1,
        name: "Old Man: Medium-Light Skin Tone"
    }, {
        code: [0x1F474, 0x1F3FD],
        groupID: 1,
        name: "Old Man: Medium Skin Tone"
    }, {
        code: [0x1F474, 0x1F3FE],
        groupID: 1,
        name: "Old Man: Medium-Dark Skin Tone"
    }, {
        code: [0x1F474, 0x1F3FF],
        groupID: 1,
        name: "Old Man: Dark Skin Tone"
    },*/ {
        code: [0x1F475],
        groupID: 1,
        name: "Old Woman"
    }, /*{
        code: [0x1F475, 0x1F3FB],
        groupID: 1,
        name: "Old Woman: Light Skin Tone"
    }, {
        code: [0x1F475, 0x1F3FC],
        groupID: 1,
        name: "Old Woman: Medium-Light Skin Tone"
    }, {
        code: [0x1F475, 0x1F3FD],
        groupID: 1,
        name: "Old Woman: Medium Skin Tone"
    }, {
        code: [0x1F475, 0x1F3FE],
        groupID: 1,
        name: "Old Woman: Medium-Dark Skin Tone"
    }, {
        code: [0x1F475, 0x1F3FF],
        groupID: 1,
        name: "Old Woman: Dark Skin Tone"
    },*/ {
        code: [0x1F64D],
        groupID: 1,
        name: "Person Frowning"
    }, /*{
        code: [0x1F64D, 0x1F3FB],
        groupID: 1,
        name: "Person Frowning: Light Skin Tone"
    }, {
        code: [0x1F64D, 0x1F3FC],
        groupID: 1,
        name: "Person Frowning: Medium-Light Skin Tone"
    }, {
        code: [0x1F64D, 0x1F3FD],
        groupID: 1,
        name: "Person Frowning: Medium Skin Tone"
    }, {
        code: [0x1F64D, 0x1F3FE],
        groupID: 1,
        name: "Person Frowning: Medium-Dark Skin Tone"
    }, {
        code: [0x1F64D, 0x1F3FF],
        groupID: 1,
        name: "Person Frowning: Dark Skin Tone"
    },*/ {
        code: [0x1F64D, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Frowning"
    }, /*{
        code: [0x1F64D, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Frowning: Light Skin Tone"
    }, {
        code: [0x1F64D, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Frowning: Medium-Light Skin Tone"
    }, {
        code: [0x1F64D, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Frowning: Medium Skin Tone"
    }, {
        code: [0x1F64D, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Frowning: Medium-Dark Skin Tone"
    }, {
        code: [0x1F64D, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Frowning: Dark Skin Tone"
    },*/ {
        code: [0x1F64D, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Frowning"
    }, /*{
        code: [0x1F64D, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Frowning: Light Skin Tone"
    }, {
        code: [0x1F64D, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Frowning: Medium-Light Skin Tone"
    }, {
        code: [0x1F64D, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Frowning: Medium Skin Tone"
    }, {
        code: [0x1F64D, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Frowning: Medium-Dark Skin Tone"
    }, {
        code: [0x1F64D, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Frowning: Dark Skin Tone"
    },*/ {
        code: [0x1F64E],
        groupID: 1,
        name: "Person Pouting"
    }, /*{
        code: [0x1F64E, 0x1F3FB],
        groupID: 1,
        name: "Person Pouting: Light Skin Tone"
    }, {
        code: [0x1F64E, 0x1F3FC],
        groupID: 1,
        name: "Person Pouting: Medium-Light Skin Tone"
    }, {
        code: [0x1F64E, 0x1F3FD],
        groupID: 1,
        name: "Person Pouting: Medium Skin Tone"
    }, {
        code: [0x1F64E, 0x1F3FE],
        groupID: 1,
        name: "Person Pouting: Medium-Dark Skin Tone"
    }, {
        code: [0x1F64E, 0x1F3FF],
        groupID: 1,
        name: "Person Pouting: Dark Skin Tone"
    },*/ {
        code: [0x1F64E, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Pouting"
    }, /*{
        code: [0x1F64E, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Pouting: Light Skin Tone"
    }, {
        code: [0x1F64E, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Pouting: Medium-Light Skin Tone"
    }, {
        code: [0x1F64E, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Pouting: Medium Skin Tone"
    }, {
        code: [0x1F64E, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Pouting: Medium-Dark Skin Tone"
    }, {
        code: [0x1F64E, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Pouting: Dark Skin Tone"
    },*/ {
        code: [0x1F64E, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Pouting"
    }, /*{
        code: [0x1F64E, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Pouting: Light Skin Tone"
    }, {
        code: [0x1F64E, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Pouting: Medium-Light Skin Tone"
    }, {
        code: [0x1F64E, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Pouting: Medium Skin Tone"
    }, {
        code: [0x1F64E, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Pouting: Medium-Dark Skin Tone"
    }, {
        code: [0x1F64E, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Pouting: Dark Skin Tone"
    },*/ {
        code: [0x1F645],
        groupID: 1,
        name: "Person Gesturing No"
    }, /*{
        code: [0x1F645, 0x1F3FB],
        groupID: 1,
        name: "Person Gesturing No: Light Skin Tone"
    }, {
        code: [0x1F645, 0x1F3FC],
        groupID: 1,
        name: "Person Gesturing No: Medium-Light Skin Tone"
    }, {
        code: [0x1F645, 0x1F3FD],
        groupID: 1,
        name: "Person Gesturing No: Medium Skin Tone"
    }, {
        code: [0x1F645, 0x1F3FE],
        groupID: 1,
        name: "Person Gesturing No: Medium-Dark Skin Tone"
    }, {
        code: [0x1F645, 0x1F3FF],
        groupID: 1,
        name: "Person Gesturing No: Dark Skin Tone"
    },*/ {
        code: [0x1F645, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Gesturing No"
    }, /*{
        code: [0x1F645, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Gesturing No: Light Skin Tone"
    }, {
        code: [0x1F645, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Gesturing No: Medium-Light Skin Tone"
    }, {
        code: [0x1F645, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Gesturing No: Medium Skin Tone"
    }, {
        code: [0x1F645, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Gesturing No: Medium-Dark Skin Tone"
    }, {
        code: [0x1F645, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Gesturing No: Dark Skin Tone"
    },*/ {
        code: [0x1F645, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Gesturing No"
    }, /*{
        code: [0x1F645, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Gesturing No: Light Skin Tone"
    }, {
        code: [0x1F645, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Gesturing No: Medium-Light Skin Tone"
    }, {
        code: [0x1F645, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Gesturing No: Medium Skin Tone"
    }, {
        code: [0x1F645, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Gesturing No: Medium-Dark Skin Tone"
    }, {
        code: [0x1F645, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Gesturing No: Dark Skin Tone"
    },*/ {
        code: [0x1F646],
        groupID: 1,
        name: "Person Gesturing OK"
    }, /*{
        code: [0x1F646, 0x1F3FB],
        groupID: 1,
        name: "Person Gesturing OK: Light Skin Tone"
    }, {
        code: [0x1F646, 0x1F3FC],
        groupID: 1,
        name: "Person Gesturing OK: Medium-Light Skin Tone"
    }, {
        code: [0x1F646, 0x1F3FD],
        groupID: 1,
        name: "Person Gesturing OK: Medium Skin Tone"
    }, {
        code: [0x1F646, 0x1F3FE],
        groupID: 1,
        name: "Person Gesturing OK: Medium-Dark Skin Tone"
    }, {
        code: [0x1F646, 0x1F3FF],
        groupID: 1,
        name: "Person Gesturing OK: Dark Skin Tone"
    },*/ {
        code: [0x1F646, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Gesturing OK"
    }, /*{
        code: [0x1F646, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Gesturing OK: Light Skin Tone"
    }, {
        code: [0x1F646, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Gesturing OK: Medium-Light Skin Tone"
    }, {
        code: [0x1F646, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Gesturing OK: Medium Skin Tone"
    }, {
        code: [0x1F646, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Gesturing OK: Medium-Dark Skin Tone"
    }, {
        code: [0x1F646, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Gesturing OK: Dark Skin Tone"
    },*/ {
        code: [0x1F646, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Gesturing OK"
    }, /*{
        code: [0x1F646, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Gesturing OK: Light Skin Tone"
    }, {
        code: [0x1F646, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Gesturing OK: Medium-Light Skin Tone"
    }, {
        code: [0x1F646, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Gesturing OK: Medium Skin Tone"
    }, {
        code: [0x1F646, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Gesturing OK: Medium-Dark Skin Tone"
    }, {
        code: [0x1F646, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Gesturing OK: Dark Skin Tone"
    },*/ {
        code: [0x1F481],
        groupID: 1,
        name: "Person Tipping Hand"
    }, /*{
        code: [0x1F481, 0x1F3FB],
        groupID: 1,
        name: "Person Tipping Hand: Light Skin Tone"
    }, {
        code: [0x1F481, 0x1F3FC],
        groupID: 1,
        name: "Person Tipping Hand: Medium-Light Skin Tone"
    }, {
        code: [0x1F481, 0x1F3FD],
        groupID: 1,
        name: "Person Tipping Hand: Medium Skin Tone"
    }, {
        code: [0x1F481, 0x1F3FE],
        groupID: 1,
        name: "Person Tipping Hand: Medium-Dark Skin Tone"
    }, {
        code: [0x1F481, 0x1F3FF],
        groupID: 1,
        name: "Person Tipping Hand: Dark Skin Tone"
    },*/ {
        code: [0x1F481, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Tipping Hand"
    }, /*{
        code: [0x1F481, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Tipping Hand: Light Skin Tone"
    }, {
        code: [0x1F481, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Tipping Hand: Medium-Light Skin Tone"
    }, {
        code: [0x1F481, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Tipping Hand: Medium Skin Tone"
    }, {
        code: [0x1F481, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Tipping Hand: Medium-Dark Skin Tone"
    }, {
        code: [0x1F481, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Tipping Hand: Dark Skin Tone"
    },*/ {
        code: [0x1F481, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Tipping Hand"
    }, /*{
        code: [0x1F481, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Tipping Hand: Light Skin Tone"
    }, {
        code: [0x1F481, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Tipping Hand: Medium-Light Skin Tone"
    }, {
        code: [0x1F481, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Tipping Hand: Medium Skin Tone"
    }, {
        code: [0x1F481, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Tipping Hand: Medium-Dark Skin Tone"
    }, {
        code: [0x1F481, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Tipping Hand: Dark Skin Tone"
    },*/ {
        code: [0x1F64B],
        groupID: 1,
        name: "Person Raising Hand"
    }, /*{
        code: [0x1F64B, 0x1F3FB],
        groupID: 1,
        name: "Person Raising Hand: Light Skin Tone"
    }, {
        code: [0x1F64B, 0x1F3FC],
        groupID: 1,
        name: "Person Raising Hand: Medium-Light Skin Tone"
    }, {
        code: [0x1F64B, 0x1F3FD],
        groupID: 1,
        name: "Person Raising Hand: Medium Skin Tone"
    }, {
        code: [0x1F64B, 0x1F3FE],
        groupID: 1,
        name: "Person Raising Hand: Medium-Dark Skin Tone"
    }, {
        code: [0x1F64B, 0x1F3FF],
        groupID: 1,
        name: "Person Raising Hand: Dark Skin Tone"
    },*/ {
        code: [0x1F64B, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Raising Hand"
    }, /*{
        code: [0x1F64B, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Raising Hand: Light Skin Tone"
    }, {
        code: [0x1F64B, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Raising Hand: Medium-Light Skin Tone"
    }, {
        code: [0x1F64B, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Raising Hand: Medium Skin Tone"
    }, {
        code: [0x1F64B, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Raising Hand: Medium-Dark Skin Tone"
    }, {
        code: [0x1F64B, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Raising Hand: Dark Skin Tone"
    },*/ {
        code: [0x1F64B, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Raising Hand"
    }, /*{
        code: [0x1F64B, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Raising Hand: Light Skin Tone"
    }, {
        code: [0x1F64B, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Raising Hand: Medium-Light Skin Tone"
    }, {
        code: [0x1F64B, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Raising Hand: Medium Skin Tone"
    }, {
        code: [0x1F64B, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Raising Hand: Medium-Dark Skin Tone"
    }, {
        code: [0x1F64B, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Raising Hand: Dark Skin Tone"
    }, {
        code: [0x1F9CF],
        groupID: 1,
        name: "Deaf Person"
    }, {
        code: [0x1F9CF, 0x1F3FB],
        groupID: 1,
        name: "Deaf Person: Light Skin Tone"
    }, {
        code: [0x1F9CF, 0x1F3FC],
        groupID: 1,
        name: "Deaf Person: Medium-Light Skin Tone"
    }, {
        code: [0x1F9CF, 0x1F3FD],
        groupID: 1,
        name: "Deaf Person: Medium Skin Tone"
    }, {
        code: [0x1F9CF, 0x1F3FE],
        groupID: 1,
        name: "Deaf Person: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9CF, 0x1F3FF],
        groupID: 1,
        name: "Deaf Person: Dark Skin Tone"
    }, {
        code: [0x1F9CF, 0x200D, 0x2642],
        groupID: 1,
        name: "Deaf Man"
    }, {
        code: [0x1F9CF, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Deaf Man: Light Skin Tone"
    }, {
        code: [0x1F9CF, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Deaf Man: Medium-Light Skin Tone"
    }, {
        code: [0x1F9CF, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Deaf Man: Medium Skin Tone"
    }, {
        code: [0x1F9CF, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Deaf Man: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9CF, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Deaf Man: Dark Skin Tone"
    }, {
        code: [0x1F9CF, 0x200D, 0x2640],
        groupID: 1,
        name: "Deaf Woman"
    }, {
        code: [0x1F9CF, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Deaf Woman: Light Skin Tone"
    }, {
        code: [0x1F9CF, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Deaf Woman: Medium-Light Skin Tone"
    }, {
        code: [0x1F9CF, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Deaf Woman: Medium Skin Tone"
    }, {
        code: [0x1F9CF, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Deaf Woman: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9CF, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Deaf Woman: Dark Skin Tone"
    },*/ {
        code: [0x1F647],
        groupID: 1,
        name: "Person Bowing"
    }, /*{
        code: [0x1F647, 0x1F3FB],
        groupID: 1,
        name: "Person Bowing: Light Skin Tone"
    }, {
        code: [0x1F647, 0x1F3FC],
        groupID: 1,
        name: "Person Bowing: Medium-Light Skin Tone"
    }, {
        code: [0x1F647, 0x1F3FD],
        groupID: 1,
        name: "Person Bowing: Medium Skin Tone"
    }, {
        code: [0x1F647, 0x1F3FE],
        groupID: 1,
        name: "Person Bowing: Medium-Dark Skin Tone"
    }, {
        code: [0x1F647, 0x1F3FF],
        groupID: 1,
        name: "Person Bowing: Dark Skin Tone"
    },*/ {
        code: [0x1F647, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Bowing"
    }, /*{
        code: [0x1F647, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Bowing: Light Skin Tone"
    }, {
        code: [0x1F647, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Bowing: Medium-Light Skin Tone"
    }, {
        code: [0x1F647, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Bowing: Medium Skin Tone"
    }, {
        code: [0x1F647, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Bowing: Medium-Dark Skin Tone"
    }, {
        code: [0x1F647, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Bowing: Dark Skin Tone"
    },*/ {
        code: [0x1F647, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Bowing"
    }, /*{
        code: [0x1F647, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Bowing: Light Skin Tone"
    }, {
        code: [0x1F647, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Bowing: Medium-Light Skin Tone"
    }, {
        code: [0x1F647, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Bowing: Medium Skin Tone"
    }, {
        code: [0x1F647, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Bowing: Medium-Dark Skin Tone"
    }, {
        code: [0x1F647, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Bowing: Dark Skin Tone"
    },*/ {
        code: [0x1F926],
        groupID: 1,
        name: "Person Facepalming"
    }, /*{
        code: [0x1F926, 0x1F3FB],
        groupID: 1,
        name: "Person Facepalming: Light Skin Tone"
    }, {
        code: [0x1F926, 0x1F3FC],
        groupID: 1,
        name: "Person Facepalming: Medium-Light Skin Tone"
    }, {
        code: [0x1F926, 0x1F3FD],
        groupID: 1,
        name: "Person Facepalming: Medium Skin Tone"
    }, {
        code: [0x1F926, 0x1F3FE],
        groupID: 1,
        name: "Person Facepalming: Medium-Dark Skin Tone"
    }, {
        code: [0x1F926, 0x1F3FF],
        groupID: 1,
        name: "Person Facepalming: Dark Skin Tone"
    },*/ {
        code: [0x1F926, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Facepalming"
    }, /*{
        code: [0x1F926, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Facepalming: Light Skin Tone"
    }, {
        code: [0x1F926, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Facepalming: Medium-Light Skin Tone"
    }, {
        code: [0x1F926, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Facepalming: Medium Skin Tone"
    }, {
        code: [0x1F926, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Facepalming: Medium-Dark Skin Tone"
    }, {
        code: [0x1F926, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Facepalming: Dark Skin Tone"
    },*/ {
        code: [0x1F926, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Facepalming"
    }, /*{
        code: [0x1F926, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Facepalming: Light Skin Tone"
    }, {
        code: [0x1F926, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Facepalming: Medium-Light Skin Tone"
    }, {
        code: [0x1F926, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Facepalming: Medium Skin Tone"
    }, {
        code: [0x1F926, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Facepalming: Medium-Dark Skin Tone"
    }, {
        code: [0x1F926, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Facepalming: Dark Skin Tone"
    },*/ {
        code: [0x1F937],
        groupID: 1,
        name: "Person Shrugging"
    }, /*{
        code: [0x1F937, 0x1F3FB],
        groupID: 1,
        name: "Person Shrugging: Light Skin Tone"
    }, {
        code: [0x1F937, 0x1F3FC],
        groupID: 1,
        name: "Person Shrugging: Medium-Light Skin Tone"
    }, {
        code: [0x1F937, 0x1F3FD],
        groupID: 1,
        name: "Person Shrugging: Medium Skin Tone"
    }, {
        code: [0x1F937, 0x1F3FE],
        groupID: 1,
        name: "Person Shrugging: Medium-Dark Skin Tone"
    }, {
        code: [0x1F937, 0x1F3FF],
        groupID: 1,
        name: "Person Shrugging: Dark Skin Tone"
    },*/ {
        code: [0x1F937, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Shrugging"
    }, /*{
        code: [0x1F937, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Shrugging: Light Skin Tone"
    }, {
        code: [0x1F937, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Shrugging: Medium-Light Skin Tone"
    }, {
        code: [0x1F937, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Shrugging: Medium Skin Tone"
    }, {
        code: [0x1F937, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Shrugging: Medium-Dark Skin Tone"
    }, {
        code: [0x1F937, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Shrugging: Dark Skin Tone"
    },*/ {
        code: [0x1F937, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Shrugging"
    }, /*{
        code: [0x1F937, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Shrugging: Light Skin Tone"
    }, {
        code: [0x1F937, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Shrugging: Medium-Light Skin Tone"
    }, {
        code: [0x1F937, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Shrugging: Medium Skin Tone"
    }, {
        code: [0x1F937, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Shrugging: Medium-Dark Skin Tone"
    }, {
        code: [0x1F937, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Shrugging: Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x200D, 0x2695],
        groupID: null,
        name: "Health Worker"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x2695],
        groupID: null,
        name: "Health Worker: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x2695],
        groupID: null,
        name: "Health Worker: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x2695],
        groupID: null,
        name: "Health Worker: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x2695],
        groupID: null,
        name: "Health Worker: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x2695],
        groupID: null,
        name: "Health Worker: Dark Skin Tone"
    },*/ {
        code: [0x1F468, 0x200D, 0x2695],
        groupID: 1,
        name: "Man Health Worker"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x2695],
        groupID: 1,
        name: "Man Health Worker: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x2695],
        groupID: 1,
        name: "Man Health Worker: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x2695],
        groupID: 1,
        name: "Man Health Worker: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x2695],
        groupID: 1,
        name: "Man Health Worker: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x2695],
        groupID: 1,
        name: "Man Health Worker: Dark Skin Tone"
    },*/ {
        code: [0x1F469, 0x200D, 0x2695],
        groupID: 1,
        name: "Woman Health Worker"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x2695],
        groupID: 1,
        name: "Woman Health Worker: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x2695],
        groupID: 1,
        name: "Woman Health Worker: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x2695],
        groupID: 1,
        name: "Woman Health Worker: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x2695],
        groupID: 1,
        name: "Woman Health Worker: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x2695],
        groupID: 1,
        name: "Woman Health Worker: Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x200D, 0x1F393],
        groupID: null,
        name: "Student"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F393],
        groupID: null,
        name: "Student: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F393],
        groupID: null,
        name: "Student: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F393],
        groupID: null,
        name: "Student: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F393],
        groupID: null,
        name: "Student: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F393],
        groupID: null,
        name: "Student: Dark Skin Tone"
    },*/ {
        code: [0x1F468, 0x200D, 0x1F393],
        groupID: 1,
        name: "Man Student"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F393],
        groupID: 1,
        name: "Man Student: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F393],
        groupID: 1,
        name: "Man Student: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F393],
        groupID: 1,
        name: "Man Student: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F393],
        groupID: 1,
        name: "Man Student: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F393],
        groupID: 1,
        name: "Man Student: Dark Skin Tone"
    },*/ {
        code: [0x1F469, 0x200D, 0x1F393],
        groupID: 1,
        name: "Woman Student"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F393],
        groupID: 1,
        name: "Woman Student: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F393],
        groupID: 1,
        name: "Woman Student: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F393],
        groupID: 1,
        name: "Woman Student: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F393],
        groupID: 1,
        name: "Woman Student: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F393],
        groupID: 1,
        name: "Woman Student: Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x200D, 0x1F3EB],
        groupID: null,
        name: "Teacher"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F3EB],
        groupID: null,
        name: "Teacher: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F3EB],
        groupID: null,
        name: "Teacher: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F3EB],
        groupID: null,
        name: "Teacher: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F3EB],
        groupID: null,
        name: "Teacher: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F3EB],
        groupID: null,
        name: "Teacher: Dark Skin Tone"
    },*/ {
        code: [0x1F468, 0x200D, 0x1F3EB],
        groupID: 1,
        name: "Man Teacher"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F3EB],
        groupID: 1,
        name: "Man Teacher: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F3EB],
        groupID: 1,
        name: "Man Teacher: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F3EB],
        groupID: 1,
        name: "Man Teacher: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F3EB],
        groupID: 1,
        name: "Man Teacher: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F3EB],
        groupID: 1,
        name: "Man Teacher: Dark Skin Tone"
    },*/ {
        code: [0x1F469, 0x200D, 0x1F3EB],
        groupID: 1,
        name: "Woman Teacher"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F3EB],
        groupID: 1,
        name: "Woman Teacher: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F3EB],
        groupID: 1,
        name: "Woman Teacher: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F3EB],
        groupID: 1,
        name: "Woman Teacher: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F3EB],
        groupID: 1,
        name: "Woman Teacher: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F3EB],
        groupID: 1,
        name: "Woman Teacher: Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x200D, 0x2696],
        groupID: null,
        name: "Judge"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x2696],
        groupID: null,
        name: "Judge: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x2696],
        groupID: null,
        name: "Judge: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x2696],
        groupID: null,
        name: "Judge: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x2696],
        groupID: null,
        name: "Judge: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x2696],
        groupID: null,
        name: "Judge: Dark Skin Tone"
    },*/ {
        code: [0x1F468, 0x200D, 0x2696],
        groupID: 1,
        name: "Man Judge"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x2696],
        groupID: 1,
        name: "Man Judge: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x2696],
        groupID: 1,
        name: "Man Judge: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x2696],
        groupID: 1,
        name: "Man Judge: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x2696],
        groupID: 1,
        name: "Man Judge: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x2696],
        groupID: 1,
        name: "Man Judge: Dark Skin Tone"
    },*/ {
        code: [0x1F469, 0x200D, 0x2696],
        groupID: 1,
        name: "Woman Judge"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x2696],
        groupID: 1,
        name: "Woman Judge: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x2696],
        groupID: 1,
        name: "Woman Judge: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x2696],
        groupID: 1,
        name: "Woman Judge: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x2696],
        groupID: 1,
        name: "Woman Judge: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x2696],
        groupID: 1,
        name: "Woman Judge: Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x200D, 0x1F33E],
        groupID: null,
        name: "Farmer"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F33E],
        groupID: null,
        name: "Farmer: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F33E],
        groupID: null,
        name: "Farmer: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F33E],
        groupID: null,
        name: "Farmer: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F33E],
        groupID: null,
        name: "Farmer: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F33E],
        groupID: null,
        name: "Farmer: Dark Skin Tone"
    },*/ {
        code: [0x1F468, 0x200D, 0x1F33E],
        groupID: 1,
        name: "Man Farmer"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F33E],
        groupID: 1,
        name: "Man Farmer: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F33E],
        groupID: 1,
        name: "Man Farmer: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F33E],
        groupID: 1,
        name: "Man Farmer: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F33E],
        groupID: 1,
        name: "Man Farmer: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F33E],
        groupID: 1,
        name: "Man Farmer: Dark Skin Tone"
    },*/ {
        code: [0x1F469, 0x200D, 0x1F33E],
        groupID: 1,
        name: "Woman Farmer"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F33E],
        groupID: 1,
        name: "Woman Farmer: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F33E],
        groupID: 1,
        name: "Woman Farmer: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F33E],
        groupID: 1,
        name: "Woman Farmer: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F33E],
        groupID: 1,
        name: "Woman Farmer: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F33E],
        groupID: 1,
        name: "Woman Farmer: Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x200D, 0x1F373],
        groupID: null,
        name: "Cook"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F373],
        groupID: null,
        name: "Cook: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F373],
        groupID: null,
        name: "Cook: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F373],
        groupID: null,
        name: "Cook: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F373],
        groupID: null,
        name: "Cook: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F373],
        groupID: null,
        name: "Cook: Dark Skin Tone"
    },*/ {
        code: [0x1F468, 0x200D, 0x1F373],
        groupID: 1,
        name: "Man Cook"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F373],
        groupID: 1,
        name: "Man Cook: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F373],
        groupID: 1,
        name: "Man Cook: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F373],
        groupID: 1,
        name: "Man Cook: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F373],
        groupID: 1,
        name: "Man Cook: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F373],
        groupID: 1,
        name: "Man Cook: Dark Skin Tone"
    },*/ {
        code: [0x1F469, 0x200D, 0x1F373],
        groupID: 1,
        name: "Woman Cook"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F373],
        groupID: 1,
        name: "Woman Cook: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F373],
        groupID: 1,
        name: "Woman Cook: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F373],
        groupID: 1,
        name: "Woman Cook: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F373],
        groupID: 1,
        name: "Woman Cook: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F373],
        groupID: 1,
        name: "Woman Cook: Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x200D, 0x1F527],
        groupID: null,
        name: "Mechanic"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F527],
        groupID: null,
        name: "Mechanic: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F527],
        groupID: null,
        name: "Mechanic: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F527],
        groupID: null,
        name: "Mechanic: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F527],
        groupID: null,
        name: "Mechanic: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F527],
        groupID: null,
        name: "Mechanic: Dark Skin Tone"
    },*/ {
        code: [0x1F468, 0x200D, 0x1F527],
        groupID: 1,
        name: "Man Mechanic"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F527],
        groupID: 1,
        name: "Man Mechanic: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F527],
        groupID: 1,
        name: "Man Mechanic: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F527],
        groupID: 1,
        name: "Man Mechanic: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F527],
        groupID: 1,
        name: "Man Mechanic: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F527],
        groupID: 1,
        name: "Man Mechanic: Dark Skin Tone"
    },*/ {
        code: [0x1F469, 0x200D, 0x1F527],
        groupID: 1,
        name: "Woman Mechanic"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F527],
        groupID: 1,
        name: "Woman Mechanic: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F527],
        groupID: 1,
        name: "Woman Mechanic: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F527],
        groupID: 1,
        name: "Woman Mechanic: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F527],
        groupID: 1,
        name: "Woman Mechanic: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F527],
        groupID: 1,
        name: "Woman Mechanic: Dark Skin Tone"
    },*/ {
        code: [0x1F9D1, 0x200D, 0x1F3ED],
        groupID: 5,
        name: "Factory Worker"
    }, /*{
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F3ED],
        groupID: 5,
        name: "Factory Worker: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F3ED],
        groupID: 5,
        name: "Factory Worker: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F3ED],
        groupID: 5,
        name: "Factory Worker: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F3ED],
        groupID: 5,
        name: "Factory Worker: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F3ED],
        groupID: 5,
        name: "Factory Worker: Dark Skin Tone"
    },*/ {
        code: [0x1F468, 0x200D, 0x1F3ED],
        groupID: 5,
        name: "Man Factory Worker"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F3ED],
        groupID: 5,
        name: "Man Factory Worker: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F3ED],
        groupID: 5,
        name: "Man Factory Worker: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F3ED],
        groupID: 5,
        name: "Man Factory Worker: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F3ED],
        groupID: 5,
        name: "Man Factory Worker: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F3ED],
        groupID: 5,
        name: "Man Factory Worker: Dark Skin Tone"
    },*/ {
        code: [0x1F469, 0x200D, 0x1F3ED],
        groupID: 5,
        name: "Woman Factory Worker"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F3ED],
        groupID: 5,
        name: "Woman Factory Worker: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F3ED],
        groupID: 5,
        name: "Woman Factory Worker: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F3ED],
        groupID: 5,
        name: "Woman Factory Worker: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F3ED],
        groupID: 5,
        name: "Woman Factory Worker: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F3ED],
        groupID: 5,
        name: "Woman Factory Worker: Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x200D, 0x1F4BC],
        groupID: null,
        name: "Office Worker"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F4BC],
        groupID: null,
        name: "Office Worker: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F4BC],
        groupID: null,
        name: "Office Worker: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F4BC],
        groupID: null,
        name: "Office Worker: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F4BC],
        groupID: null,
        name: "Office Worker: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F4BC],
        groupID: null,
        name: "Office Worker: Dark Skin Tone"
    },*/ {
        code: [0x1F468, 0x200D, 0x1F4BC],
        groupID: 1,
        name: "Man Office Worker"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F4BC],
        groupID: 1,
        name: "Man Office Worker: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F4BC],
        groupID: 1,
        name: "Man Office Worker: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F4BC],
        groupID: 1,
        name: "Man Office Worker: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F4BC],
        groupID: 1,
        name: "Man Office Worker: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F4BC],
        groupID: 1,
        name: "Man Office Worker: Dark Skin Tone"
    },*/ {
        code: [0x1F469, 0x200D, 0x1F4BC],
        groupID: 1,
        name: "Woman Office Worker"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F4BC],
        groupID: 1,
        name: "Woman Office Worker: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F4BC],
        groupID: 1,
        name: "Woman Office Worker: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F4BC],
        groupID: 1,
        name: "Woman Office Worker: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F4BC],
        groupID: 1,
        name: "Woman Office Worker: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F4BC],
        groupID: 1,
        name: "Woman Office Worker: Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x200D, 0x1F52C],
        groupID: null,
        name: "Scientist"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F52C],
        groupID: null,
        name: "Scientist: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F52C],
        groupID: null,
        name: "Scientist: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F52C],
        groupID: null,
        name: "Scientist: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F52C],
        groupID: null,
        name: "Scientist: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F52C],
        groupID: null,
        name: "Scientist: Dark Skin Tone"
    },*/ {
        code: [0x1F468, 0x200D, 0x1F52C],
        groupID: 1,
        name: "Man Scientist"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F52C],
        groupID: 1,
        name: "Man Scientist: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F52C],
        groupID: 1,
        name: "Man Scientist: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F52C],
        groupID: 1,
        name: "Man Scientist: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F52C],
        groupID: 1,
        name: "Man Scientist: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F52C],
        groupID: 1,
        name: "Man Scientist: Dark Skin Tone"
    },*/ {
        code: [0x1F469, 0x200D, 0x1F52C],
        groupID: 1,
        name: "Woman Scientist"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F52C],
        groupID: 1,
        name: "Woman Scientist: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F52C],
        groupID: 1,
        name: "Woman Scientist: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F52C],
        groupID: 1,
        name: "Woman Scientist: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F52C],
        groupID: 1,
        name: "Woman Scientist: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F52C],
        groupID: 1,
        name: "Woman Scientist: Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x200D, 0x1F4BB],
        groupID: null,
        name: "Technologist"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F4BB],
        groupID: null,
        name: "Technologist: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F4BB],
        groupID: null,
        name: "Technologist: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F4BB],
        groupID: null,
        name: "Technologist: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F4BB],
        groupID: null,
        name: "Technologist: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F4BB],
        groupID: null,
        name: "Technologist: Dark Skin Tone"
    },*/ {
        code: [0x1F468, 0x200D, 0x1F4BB],
        groupID: 1,
        name: "Man Technologist"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F4BB],
        groupID: 1,
        name: "Man Technologist: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F4BB],
        groupID: 1,
        name: "Man Technologist: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F4BB],
        groupID: 1,
        name: "Man Technologist: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F4BB],
        groupID: 1,
        name: "Man Technologist: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F4BB],
        groupID: 1,
        name: "Man Technologist: Dark Skin Tone"
    },*/ {
        code: [0x1F469, 0x200D, 0x1F4BB],
        groupID: 1,
        name: "Woman Technologist"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F4BB],
        groupID: 1,
        name: "Woman Technologist: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F4BB],
        groupID: 1,
        name: "Woman Technologist: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F4BB],
        groupID: 1,
        name: "Woman Technologist: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F4BB],
        groupID: 1,
        name: "Woman Technologist: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F4BB],
        groupID: 1,
        name: "Woman Technologist: Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x200D, 0x1F3A4],
        groupID: null,
        name: "Singer"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F3A4],
        groupID: null,
        name: "Singer: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F3A4],
        groupID: null,
        name: "Singer: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F3A4],
        groupID: null,
        name: "Singer: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F3A4],
        groupID: null,
        name: "Singer: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F3A4],
        groupID: null,
        name: "Singer: Dark Skin Tone"
    },*/ {
        code: [0x1F468, 0x200D, 0x1F3A4],
        groupID: 1,
        name: "Man Singer"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F3A4],
        groupID: 1,
        name: "Man Singer: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F3A4],
        groupID: 1,
        name: "Man Singer: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F3A4],
        groupID: 1,
        name: "Man Singer: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F3A4],
        groupID: 1,
        name: "Man Singer: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F3A4],
        groupID: 1,
        name: "Man Singer: Dark Skin Tone"
    },*/ {
        code: [0x1F469, 0x200D, 0x1F3A4],
        groupID: 1,
        name: "Woman Singer"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F3A4],
        groupID: 1,
        name: "Woman Singer: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F3A4],
        groupID: 1,
        name: "Woman Singer: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F3A4],
        groupID: 1,
        name: "Woman Singer: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F3A4],
        groupID: 1,
        name: "Woman Singer: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F3A4],
        groupID: 1,
        name: "Woman Singer: Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x200D, 0x1F3A8],
        groupID: null,
        name: "Artist"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F3A8],
        groupID: null,
        name: "Artist: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F3A8],
        groupID: null,
        name: "Artist: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F3A8],
        groupID: null,
        name: "Artist: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F3A8],
        groupID: null,
        name: "Artist: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F3A8],
        groupID: null,
        name: "Artist: Dark Skin Tone"
    },*/ {
        code: [0x1F468, 0x200D, 0x1F3A8],
        groupID: 1,
        name: "Man Artist"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F3A8],
        groupID: 1,
        name: "Man Artist: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F3A8],
        groupID: 1,
        name: "Man Artist: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F3A8],
        groupID: 1,
        name: "Man Artist: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F3A8],
        groupID: 1,
        name: "Man Artist: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F3A8],
        groupID: 1,
        name: "Man Artist: Dark Skin Tone"
    },*/ {
        code: [0x1F469, 0x200D, 0x1F3A8],
        groupID: 1,
        name: "Woman Artist"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F3A8],
        groupID: 1,
        name: "Woman Artist: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F3A8],
        groupID: 1,
        name: "Woman Artist: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F3A8],
        groupID: 1,
        name: "Woman Artist: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F3A8],
        groupID: 1,
        name: "Woman Artist: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F3A8],
        groupID: 1,
        name: "Woman Artist: Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x200D, 0x2708],
        groupID: null,
        name: "Pilot"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x2708],
        groupID: null,
        name: "Pilot: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x2708],
        groupID: null,
        name: "Pilot: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x2708],
        groupID: null,
        name: "Pilot: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x2708],
        groupID: null,
        name: "Pilot: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x2708],
        groupID: null,
        name: "Pilot: Dark Skin Tone"
    },*/ {
        code: [0x1F468, 0x200D, 0x2708],
        groupID: 1,
        name: "Man Pilot"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x2708],
        groupID: 1,
        name: "Man Pilot: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x2708],
        groupID: 1,
        name: "Man Pilot: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x2708],
        groupID: 1,
        name: "Man Pilot: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x2708],
        groupID: 1,
        name: "Man Pilot: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x2708],
        groupID: 1,
        name: "Man Pilot: Dark Skin Tone"
    },*/ {
        code: [0x1F469, 0x200D, 0x2708],
        groupID: 1,
        name: "Woman Pilot"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x2708],
        groupID: 1,
        name: "Woman Pilot: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x2708],
        groupID: 1,
        name: "Woman Pilot: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x2708],
        groupID: 1,
        name: "Woman Pilot: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x2708],
        groupID: 1,
        name: "Woman Pilot: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x2708],
        groupID: 1,
        name: "Woman Pilot: Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x200D, 0x1F680],
        groupID: null,
        name: "Astronaut"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F680],
        groupID: null,
        name: "Astronaut: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F680],
        groupID: null,
        name: "Astronaut: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F680],
        groupID: null,
        name: "Astronaut: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F680],
        groupID: null,
        name: "Astronaut: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F680],
        groupID: null,
        name: "Astronaut: Dark Skin Tone"
    },*/ {
        code: [0x1F468, 0x200D, 0x1F680],
        groupID: 1,
        name: "Man Astronaut"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F680],
        groupID: 1,
        name: "Man Astronaut: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F680],
        groupID: 1,
        name: "Man Astronaut: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F680],
        groupID: 1,
        name: "Man Astronaut: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F680],
        groupID: 1,
        name: "Man Astronaut: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F680],
        groupID: 1,
        name: "Man Astronaut: Dark Skin Tone"
    },*/ {
        code: [0x1F469, 0x200D, 0x1F680],
        groupID: 1,
        name: "Woman Astronaut"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F680],
        groupID: 1,
        name: "Woman Astronaut: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F680],
        groupID: 1,
        name: "Woman Astronaut: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F680],
        groupID: 1,
        name: "Woman Astronaut: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F680],
        groupID: 1,
        name: "Woman Astronaut: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F680],
        groupID: 1,
        name: "Woman Astronaut: Dark Skin Tone"
    },*/ {
        code: [0x1F9D1, 0x200D, 0x1F692],
        groupID: 2,
        name: "Firefighter"
    }, /*{
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F692],
        groupID: 2,
        name: "Firefighter: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F692],
        groupID: 2,
        name: "Firefighter: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F692],
        groupID: 2,
        name: "Firefighter: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F692],
        groupID: 2,
        name: "Firefighter: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F692],
        groupID: 2,
        name: "Firefighter: Dark Skin Tone"
    },*/ {
        code: [0x1F468, 0x200D, 0x1F692],
        groupID: 2,
        name: "Man Firefighter"
    }, /*{
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F692],
        groupID: 2,
        name: "Man Firefighter: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F692],
        groupID: 2,
        name: "Man Firefighter: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F692],
        groupID: 2,
        name: "Man Firefighter: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F692],
        groupID: 2,
        name: "Man Firefighter: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F692],
        groupID: 2,
        name: "Man Firefighter: Dark Skin Tone"
    },*/ {
        code: [0x1F469, 0x200D, 0x1F692],
        groupID: 2,
        name: "Woman Firefighter"
    }, /*{
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F692],
        groupID: 2,
        name: "Woman Firefighter: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F692],
        groupID: 2,
        name: "Woman Firefighter: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F692],
        groupID: 2,
        name: "Woman Firefighter: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F692],
        groupID: 2,
        name: "Woman Firefighter: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F692],
        groupID: 2,
        name: "Woman Firefighter: Dark Skin Tone"
    },*/ {
        code: [0x1F46E],
        groupID: 1,
        name: "Police Officer"
    }, /*{
        code: [0x1F46E, 0x1F3FB],
        groupID: 1,
        name: "Police Officer: Light Skin Tone"
    }, {
        code: [0x1F46E, 0x1F3FC],
        groupID: 1,
        name: "Police Officer: Medium-Light Skin Tone"
    }, {
        code: [0x1F46E, 0x1F3FD],
        groupID: 1,
        name: "Police Officer: Medium Skin Tone"
    }, {
        code: [0x1F46E, 0x1F3FE],
        groupID: 1,
        name: "Police Officer: Medium-Dark Skin Tone"
    }, {
        code: [0x1F46E, 0x1F3FF],
        groupID: 1,
        name: "Police Officer: Dark Skin Tone"
    },*/ {
        code: [0x1F46E, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Police Officer"
    }, /*{
        code: [0x1F46E, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Police Officer: Light Skin Tone"
    }, {
        code: [0x1F46E, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Police Officer: Medium-Light Skin Tone"
    }, {
        code: [0x1F46E, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Police Officer: Medium Skin Tone"
    }, {
        code: [0x1F46E, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Police Officer: Medium-Dark Skin Tone"
    }, {
        code: [0x1F46E, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Police Officer: Dark Skin Tone"
    },*/ {
        code: [0x1F46E, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Police Officer"
    }, /*{
        code: [0x1F46E, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Police Officer: Light Skin Tone"
    }, {
        code: [0x1F46E, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Police Officer: Medium-Light Skin Tone"
    }, {
        code: [0x1F46E, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Police Officer: Medium Skin Tone"
    }, {
        code: [0x1F46E, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Police Officer: Medium-Dark Skin Tone"
    }, {
        code: [0x1F46E, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Police Officer: Dark Skin Tone"
    },*/ {
        code: [0x1F575],
        groupID: 1,
        name: "Detective"
    }, /*{
        code: [0x1F575, 0x1F3FB],
        groupID: 1,
        name: "Detective: Light Skin Tone"
    }, {
        code: [0x1F575, 0x1F3FC],
        groupID: 1,
        name: "Detective: Medium-Light Skin Tone"
    }, {
        code: [0x1F575, 0x1F3FD],
        groupID: 1,
        name: "Detective: Medium Skin Tone"
    }, {
        code: [0x1F575, 0x1F3FE],
        groupID: 1,
        name: "Detective: Medium-Dark Skin Tone"
    }, {
        code: [0x1F575, 0x1F3FF],
        groupID: 1,
        name: "Detective: Dark Skin Tone"
    },*/ {
        code: [0x1F575, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Detective"
    }, /*{
        code: [0x1F575, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Detective: Light Skin Tone"
    }, {
        code: [0x1F575, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Detective: Medium-Light Skin Tone"
    }, {
        code: [0x1F575, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Detective: Medium Skin Tone"
    }, {
        code: [0x1F575, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Detective: Medium-Dark Skin Tone"
    }, {
        code: [0x1F575, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Detective: Dark Skin Tone"
    },*/ {
        code: [0x1F575, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Detective"
    }, /*{
        code: [0x1F575, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Detective: Light Skin Tone"
    }, {
        code: [0x1F575, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Detective: Medium-Light Skin Tone"
    }, {
        code: [0x1F575, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Detective: Medium Skin Tone"
    }, {
        code: [0x1F575, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Detective: Medium-Dark Skin Tone"
    }, {
        code: [0x1F575, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Detective: Dark Skin Tone"
    },*/ {
        code: [0x1F482],
        groupID: 1,
        name: "Guard"
    }, /*{
        code: [0x1F482, 0x1F3FB],
        groupID: 1,
        name: "Guard: Light Skin Tone"
    }, {
        code: [0x1F482, 0x1F3FC],
        groupID: 1,
        name: "Guard: Medium-Light Skin Tone"
    }, {
        code: [0x1F482, 0x1F3FD],
        groupID: 1,
        name: "Guard: Medium Skin Tone"
    }, {
        code: [0x1F482, 0x1F3FE],
        groupID: 1,
        name: "Guard: Medium-Dark Skin Tone"
    }, {
        code: [0x1F482, 0x1F3FF],
        groupID: 1,
        name: "Guard: Dark Skin Tone"
    },*/ {
        code: [0x1F482, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Guard"
    }, /*{
        code: [0x1F482, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Guard: Light Skin Tone"
    }, {
        code: [0x1F482, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Guard: Medium-Light Skin Tone"
    }, {
        code: [0x1F482, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Guard: Medium Skin Tone"
    }, {
        code: [0x1F482, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Guard: Medium-Dark Skin Tone"
    }, {
        code: [0x1F482, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Guard: Dark Skin Tone"
    },*/ {
        code: [0x1F482, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Guard"
    }, /*{
        code: [0x1F482, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Guard: Light Skin Tone"
    }, {
        code: [0x1F482, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Guard: Medium-Light Skin Tone"
    }, {
        code: [0x1F482, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Guard: Medium Skin Tone"
    }, {
        code: [0x1F482, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Guard: Medium-Dark Skin Tone"
    }, {
        code: [0x1F482, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Guard: Dark Skin Tone"
    },*/ {
        code: [0x1F477],
        groupID: 5,
        name: "Construction Worker"
    }, /*{
        code: [0x1F477, 0x1F3FB],
        groupID: 5,
        name: "Construction Worker: Light Skin Tone"
    }, {
        code: [0x1F477, 0x1F3FC],
        groupID: 5,
        name: "Construction Worker: Medium-Light Skin Tone"
    }, {
        code: [0x1F477, 0x1F3FD],
        groupID: 5,
        name: "Construction Worker: Medium Skin Tone"
    }, {
        code: [0x1F477, 0x1F3FE],
        groupID: 5,
        name: "Construction Worker: Medium-Dark Skin Tone"
    }, {
        code: [0x1F477, 0x1F3FF],
        groupID: 5,
        name: "Construction Worker: Dark Skin Tone"
    },*/ {
        code: [0x1F477, 0x200D, 0x2642],
        groupID: 5,
        name: "Man Construction Worker"
    }, /*{
        code: [0x1F477, 0x1F3FB, 0x200D, 0x2642],
        groupID: 5,
        name: "Man Construction Worker: Light Skin Tone"
    }, {
        code: [0x1F477, 0x1F3FC, 0x200D, 0x2642],
        groupID: 5,
        name: "Man Construction Worker: Medium-Light Skin Tone"
    }, {
        code: [0x1F477, 0x1F3FD, 0x200D, 0x2642],
        groupID: 5,
        name: "Man Construction Worker: Medium Skin Tone"
    }, {
        code: [0x1F477, 0x1F3FE, 0x200D, 0x2642],
        groupID: 5,
        name: "Man Construction Worker: Medium-Dark Skin Tone"
    }, {
        code: [0x1F477, 0x1F3FF, 0x200D, 0x2642],
        groupID: 5,
        name: "Man Construction Worker: Dark Skin Tone"
    },*/ {
        code: [0x1F477, 0x200D, 0x2640],
        groupID: 5,
        name: "Woman Construction Worker"
    }, /*{
        code: [0x1F477, 0x1F3FB, 0x200D, 0x2640],
        groupID: 5,
        name: "Woman Construction Worker: Light Skin Tone"
    }, {
        code: [0x1F477, 0x1F3FC, 0x200D, 0x2640],
        groupID: 5,
        name: "Woman Construction Worker: Medium-Light Skin Tone"
    }, {
        code: [0x1F477, 0x1F3FD, 0x200D, 0x2640],
        groupID: 5,
        name: "Woman Construction Worker: Medium Skin Tone"
    }, {
        code: [0x1F477, 0x1F3FE, 0x200D, 0x2640],
        groupID: 5,
        name: "Woman Construction Worker: Medium-Dark Skin Tone"
    }, {
        code: [0x1F477, 0x1F3FF, 0x200D, 0x2640],
        groupID: 5,
        name: "Woman Construction Worker: Dark Skin Tone"
    },*/ {
        code: [0x1F934],
        groupID: 1,
        name: "Prince"
    }, /*{
        code: [0x1F934, 0x1F3FB],
        groupID: 1,
        name: "Prince: Light Skin Tone"
    }, {
        code: [0x1F934, 0x1F3FC],
        groupID: 1,
        name: "Prince: Medium-Light Skin Tone"
    }, {
        code: [0x1F934, 0x1F3FD],
        groupID: 1,
        name: "Prince: Medium Skin Tone"
    }, {
        code: [0x1F934, 0x1F3FE],
        groupID: 1,
        name: "Prince: Medium-Dark Skin Tone"
    }, {
        code: [0x1F934, 0x1F3FF],
        groupID: 1,
        name: "Prince: Dark Skin Tone"
    },*/ {
        code: [0x1F478],
        groupID: 1,
        name: "Princess"
    }, /*{
        code: [0x1F478, 0x1F3FB],
        groupID: 1,
        name: "Princess: Light Skin Tone"
    }, {
        code: [0x1F478, 0x1F3FC],
        groupID: 1,
        name: "Princess: Medium-Light Skin Tone"
    }, {
        code: [0x1F478, 0x1F3FD],
        groupID: 1,
        name: "Princess: Medium Skin Tone"
    }, {
        code: [0x1F478, 0x1F3FE],
        groupID: 1,
        name: "Princess: Medium-Dark Skin Tone"
    }, {
        code: [0x1F478, 0x1F3FF],
        groupID: 1,
        name: "Princess: Dark Skin Tone"
    },*/ {
        code: [0x1F473],
        groupID: 1,
        name: "Person Wearing Turban"
    }, /*{
        code: [0x1F473, 0x1F3FB],
        groupID: 1,
        name: "Person Wearing Turban: Light Skin Tone"
    }, {
        code: [0x1F473, 0x1F3FC],
        groupID: 1,
        name: "Person Wearing Turban: Medium-Light Skin Tone"
    }, {
        code: [0x1F473, 0x1F3FD],
        groupID: 1,
        name: "Person Wearing Turban: Medium Skin Tone"
    }, {
        code: [0x1F473, 0x1F3FE],
        groupID: 1,
        name: "Person Wearing Turban: Medium-Dark Skin Tone"
    }, {
        code: [0x1F473, 0x1F3FF],
        groupID: 1,
        name: "Person Wearing Turban: Dark Skin Tone"
    },*/ {
        code: [0x1F473, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Wearing Turban"
    }, /*{
        code: [0x1F473, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Wearing Turban: Light Skin Tone"
    }, {
        code: [0x1F473, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Wearing Turban: Medium-Light Skin Tone"
    }, {
        code: [0x1F473, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Wearing Turban: Medium Skin Tone"
    }, {
        code: [0x1F473, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Wearing Turban: Medium-Dark Skin Tone"
    }, {
        code: [0x1F473, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Wearing Turban: Dark Skin Tone"
    },*/ {
        code: [0x1F473, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Wearing Turban"
    }, /*{
        code: [0x1F473, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Wearing Turban: Light Skin Tone"
    }, {
        code: [0x1F473, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Wearing Turban: Medium-Light Skin Tone"
    }, {
        code: [0x1F473, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Wearing Turban: Medium Skin Tone"
    }, {
        code: [0x1F473, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Wearing Turban: Medium-Dark Skin Tone"
    }, {
        code: [0x1F473, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Wearing Turban: Dark Skin Tone"
    },*/ {
        code: [0x1F472],
        groupID: 1,
        name: "Man With Skullcap"
    }, /*{
        code: [0x1F472, 0x1F3FB],
        groupID: 1,
        name: "Man With Skullcap: Light Skin Tone"
    }, {
        code: [0x1F472, 0x1F3FC],
        groupID: 1,
        name: "Man With Skullcap: Medium-Light Skin Tone"
    }, {
        code: [0x1F472, 0x1F3FD],
        groupID: 1,
        name: "Man With Skullcap: Medium Skin Tone"
    }, {
        code: [0x1F472, 0x1F3FE],
        groupID: 1,
        name: "Man With Skullcap: Medium-Dark Skin Tone"
    }, {
        code: [0x1F472, 0x1F3FF],
        groupID: 1,
        name: "Man With Skullcap: Dark Skin Tone"
    },*/ {
        code: [0x1F9D5],
        groupID: 1,
        name: "Woman With Headscarf"
    }, /*{
        code: [0x1F9D5, 0x1F3FB],
        groupID: 1,
        name: "Woman With Headscarf: Light Skin Tone"
    }, {
        code: [0x1F9D5, 0x1F3FC],
        groupID: 1,
        name: "Woman With Headscarf: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D5, 0x1F3FD],
        groupID: 1,
        name: "Woman With Headscarf: Medium Skin Tone"
    }, {
        code: [0x1F9D5, 0x1F3FE],
        groupID: 1,
        name: "Woman With Headscarf: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D5, 0x1F3FF],
        groupID: 1,
        name: "Woman With Headscarf: Dark Skin Tone"
    },*/ {
        code: [0x1F935],
        groupID: 1,
        name: "Man in Tuxedo"
    }, /*{
        code: [0x1F935, 0x1F3FB],
        groupID: 1,
        name: "Man in Tuxedo: Light Skin Tone"
    }, {
        code: [0x1F935, 0x1F3FC],
        groupID: 1,
        name: "Man in Tuxedo: Medium-Light Skin Tone"
    }, {
        code: [0x1F935, 0x1F3FD],
        groupID: 1,
        name: "Man in Tuxedo: Medium Skin Tone"
    }, {
        code: [0x1F935, 0x1F3FE],
        groupID: 1,
        name: "Man in Tuxedo: Medium-Dark Skin Tone"
    }, {
        code: [0x1F935, 0x1F3FF],
        groupID: 1,
        name: "Man in Tuxedo: Dark Skin Tone"
    },*/ {
        code: [0x1F470],
        groupID: 1,
        name: "Bride With Veil"
    }, /*{
        code: [0x1F470, 0x1F3FB],
        groupID: 1,
        name: "Bride With Veil: Light Skin Tone"
    }, {
        code: [0x1F470, 0x1F3FC],
        groupID: 1,
        name: "Bride With Veil: Medium-Light Skin Tone"
    }, {
        code: [0x1F470, 0x1F3FD],
        groupID: 1,
        name: "Bride With Veil: Medium Skin Tone"
    }, {
        code: [0x1F470, 0x1F3FE],
        groupID: 1,
        name: "Bride With Veil: Medium-Dark Skin Tone"
    }, {
        code: [0x1F470, 0x1F3FF],
        groupID: 1,
        name: "Bride With Veil: Dark Skin Tone"
    },*/ {
        code: [0x1F930],
        groupID: 1,
        name: "Pregnant Woman"
    }, /*{
        code: [0x1F930, 0x1F3FB],
        groupID: 1,
        name: "Pregnant Woman: Light Skin Tone"
    }, {
        code: [0x1F930, 0x1F3FC],
        groupID: 1,
        name: "Pregnant Woman: Medium-Light Skin Tone"
    }, {
        code: [0x1F930, 0x1F3FD],
        groupID: 1,
        name: "Pregnant Woman: Medium Skin Tone"
    }, {
        code: [0x1F930, 0x1F3FE],
        groupID: 1,
        name: "Pregnant Woman: Medium-Dark Skin Tone"
    }, {
        code: [0x1F930, 0x1F3FF],
        groupID: 1,
        name: "Pregnant Woman: Dark Skin Tone"
    },*/ {
        code: [0x1F931],
        groupID: 1,
        name: "Breast-Feeding"
    }, /*{
        code: [0x1F931, 0x1F3FB],
        groupID: 1,
        name: "Breast-Feeding: Light Skin Tone"
    }, {
        code: [0x1F931, 0x1F3FC],
        groupID: 1,
        name: "Breast-Feeding: Medium-Light Skin Tone"
    }, {
        code: [0x1F931, 0x1F3FD],
        groupID: 1,
        name: "Breast-Feeding: Medium Skin Tone"
    }, {
        code: [0x1F931, 0x1F3FE],
        groupID: 1,
        name: "Breast-Feeding: Medium-Dark Skin Tone"
    }, {
        code: [0x1F931, 0x1F3FF],
        groupID: 1,
        name: "Breast-Feeding: Dark Skin Tone"
    },*/ {
        code: [0x1F47C],
        groupID: 1,
        name: "Baby Angel"
    }, /*{
        code: [0x1F47C, 0x1F3FB],
        groupID: 1,
        name: "Baby Angel: Light Skin Tone"
    }, {
        code: [0x1F47C, 0x1F3FC],
        groupID: 1,
        name: "Baby Angel: Medium-Light Skin Tone"
    }, {
        code: [0x1F47C, 0x1F3FD],
        groupID: 1,
        name: "Baby Angel: Medium Skin Tone"
    }, {
        code: [0x1F47C, 0x1F3FE],
        groupID: 1,
        name: "Baby Angel: Medium-Dark Skin Tone"
    }, {
        code: [0x1F47C, 0x1F3FF],
        groupID: 1,
        name: "Baby Angel: Dark Skin Tone"
    },*/ {
        code: [0x1F385],
        groupID: 1,
        name: "Santa Claus"
    }, /*{
        code: [0x1F385, 0x1F3FB],
        groupID: 1,
        name: "Santa Claus: Light Skin Tone"
    }, {
        code: [0x1F385, 0x1F3FC],
        groupID: 1,
        name: "Santa Claus: Medium-Light Skin Tone"
    }, {
        code: [0x1F385, 0x1F3FD],
        groupID: 1,
        name: "Santa Claus: Medium Skin Tone"
    }, {
        code: [0x1F385, 0x1F3FE],
        groupID: 1,
        name: "Santa Claus: Medium-Dark Skin Tone"
    }, {
        code: [0x1F385, 0x1F3FF],
        groupID: 1,
        name: "Santa Claus: Dark Skin Tone"
    },*/ {
        code: [0x1F936],
        groupID: 1,
        name: "Mrs. Claus"
    }, /*{
        code: [0x1F936, 0x1F3FB],
        groupID: 1,
        name: "Mrs. Claus: Light Skin Tone"
    }, {
        code: [0x1F936, 0x1F3FC],
        groupID: 1,
        name: "Mrs. Claus: Medium-Light Skin Tone"
    }, {
        code: [0x1F936, 0x1F3FD],
        groupID: 1,
        name: "Mrs. Claus: Medium Skin Tone"
    }, {
        code: [0x1F936, 0x1F3FE],
        groupID: 1,
        name: "Mrs. Claus: Medium-Dark Skin Tone"
    }, {
        code: [0x1F936, 0x1F3FF],
        groupID: 1,
        name: "Mrs. Claus: Dark Skin Tone"
    },*/ {
        code: [0x1F9B8],
        groupID: 1,
        name: "Superhero"
    }, /*{
        code: [0x1F9B8, 0x1F3FB],
        groupID: 1,
        name: "Superhero: Light Skin Tone"
    }, {
        code: [0x1F9B8, 0x1F3FC],
        groupID: 1,
        name: "Superhero: Medium-Light Skin Tone"
    }, {
        code: [0x1F9B8, 0x1F3FD],
        groupID: 1,
        name: "Superhero: Medium Skin Tone"
    }, {
        code: [0x1F9B8, 0x1F3FE],
        groupID: 1,
        name: "Superhero: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9B8, 0x1F3FF],
        groupID: 1,
        name: "Superhero: Dark Skin Tone"
    },*/ {
        code: [0x1F9B8, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Superhero"
    }, /*{
        code: [0x1F9B8, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Superhero: Light Skin Tone"
    }, {
        code: [0x1F9B8, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Superhero: Medium-Light Skin Tone"
    }, {
        code: [0x1F9B8, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Superhero: Medium Skin Tone"
    }, {
        code: [0x1F9B8, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Superhero: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9B8, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Superhero: Dark Skin Tone"
    },*/ {
        code: [0x1F9B8, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Superhero"
    }, /*{
        code: [0x1F9B8, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Superhero: Light Skin Tone"
    }, {
        code: [0x1F9B8, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Superhero: Medium-Light Skin Tone"
    }, {
        code: [0x1F9B8, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Superhero: Medium Skin Tone"
    }, {
        code: [0x1F9B8, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Superhero: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9B8, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Superhero: Dark Skin Tone"
    },*/ {
        code: [0x1F9B9],
        groupID: 1,
        name: "Supervillain"
    }, /*{
        code: [0x1F9B9, 0x1F3FB],
        groupID: 1,
        name: "Supervillain: Light Skin Tone"
    }, {
        code: [0x1F9B9, 0x1F3FC],
        groupID: 1,
        name: "Supervillain: Medium-Light Skin Tone"
    }, {
        code: [0x1F9B9, 0x1F3FD],
        groupID: 1,
        name: "Supervillain: Medium Skin Tone"
    }, {
        code: [0x1F9B9, 0x1F3FE],
        groupID: 1,
        name: "Supervillain: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9B9, 0x1F3FF],
        groupID: 1,
        name: "Supervillain: Dark Skin Tone"
    },*/ {
        code: [0x1F9B9, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Supervillain"
    }, /*{
        code: [0x1F9B9, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Supervillain: Light Skin Tone"
    }, {
        code: [0x1F9B9, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Supervillain: Medium-Light Skin Tone"
    }, {
        code: [0x1F9B9, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Supervillain: Medium Skin Tone"
    }, {
        code: [0x1F9B9, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Supervillain: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9B9, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Supervillain: Dark Skin Tone"
    },*/ {
        code: [0x1F9B9, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Supervillain"
    }, /*{
        code: [0x1F9B9, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Supervillain: Light Skin Tone"
    }, {
        code: [0x1F9B9, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Supervillain: Medium-Light Skin Tone"
    }, {
        code: [0x1F9B9, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Supervillain: Medium Skin Tone"
    }, {
        code: [0x1F9B9, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Supervillain: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9B9, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Supervillain: Dark Skin Tone"
    },*/ {
        code: [0x1F9D9],
        groupID: 1,
        name: "Mage"
    }, /*{
        code: [0x1F9D9, 0x1F3FB],
        groupID: 1,
        name: "Mage: Light Skin Tone"
    }, {
        code: [0x1F9D9, 0x1F3FC],
        groupID: 1,
        name: "Mage: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D9, 0x1F3FD],
        groupID: 1,
        name: "Mage: Medium Skin Tone"
    }, {
        code: [0x1F9D9, 0x1F3FE],
        groupID: 1,
        name: "Mage: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D9, 0x1F3FF],
        groupID: 1,
        name: "Mage: Dark Skin Tone"
    },*/ {
        code: [0x1F9D9, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Mage"
    }, /*{
        code: [0x1F9D9, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Mage: Light Skin Tone"
    }, {
        code: [0x1F9D9, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Mage: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D9, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Mage: Medium Skin Tone"
    }, {
        code: [0x1F9D9, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Mage: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D9, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Mage: Dark Skin Tone"
    },*/ {
        code: [0x1F9D9, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Mage"
    }, /*{
        code: [0x1F9D9, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Mage: Light Skin Tone"
    }, {
        code: [0x1F9D9, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Mage: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D9, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Mage: Medium Skin Tone"
    }, {
        code: [0x1F9D9, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Mage: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D9, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Mage: Dark Skin Tone"
    },*/ {
        code: [0x1F9DA],
        groupID: 1,
        name: "Fairy"
    }, /*{
        code: [0x1F9DA, 0x1F3FB],
        groupID: 1,
        name: "Fairy: Light Skin Tone"
    }, {
        code: [0x1F9DA, 0x1F3FC],
        groupID: 1,
        name: "Fairy: Medium-Light Skin Tone"
    }, {
        code: [0x1F9DA, 0x1F3FD],
        groupID: 1,
        name: "Fairy: Medium Skin Tone"
    }, {
        code: [0x1F9DA, 0x1F3FE],
        groupID: 1,
        name: "Fairy: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9DA, 0x1F3FF],
        groupID: 1,
        name: "Fairy: Dark Skin Tone"
    },*/ {
        code: [0x1F9DA, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Fairy"
    }, /*{
        code: [0x1F9DA, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Fairy: Light Skin Tone"
    }, {
        code: [0x1F9DA, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Fairy: Medium-Light Skin Tone"
    }, {
        code: [0x1F9DA, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Fairy: Medium Skin Tone"
    }, {
        code: [0x1F9DA, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Fairy: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9DA, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Fairy: Dark Skin Tone"
    },*/ {
        code: [0x1F9DA, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Fairy"
    }, /*{
        code: [0x1F9DA, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Fairy: Light Skin Tone"
    }, {
        code: [0x1F9DA, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Fairy: Medium-Light Skin Tone"
    }, {
        code: [0x1F9DA, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Fairy: Medium Skin Tone"
    }, {
        code: [0x1F9DA, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Fairy: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9DA, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Fairy: Dark Skin Tone"
    },*/ {
        code: [0x1F9DB],
        groupID: 1,
        name: "Vampire"
    }, /*{
        code: [0x1F9DB, 0x1F3FB],
        groupID: 1,
        name: "Vampire: Light Skin Tone"
    }, {
        code: [0x1F9DB, 0x1F3FC],
        groupID: 1,
        name: "Vampire: Medium-Light Skin Tone"
    }, {
        code: [0x1F9DB, 0x1F3FD],
        groupID: 1,
        name: "Vampire: Medium Skin Tone"
    }, {
        code: [0x1F9DB, 0x1F3FE],
        groupID: 1,
        name: "Vampire: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9DB, 0x1F3FF],
        groupID: 1,
        name: "Vampire: Dark Skin Tone"
    },*/ {
        code: [0x1F9DB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Vampire"
    }, /*{
        code: [0x1F9DB, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Vampire: Light Skin Tone"
    }, {
        code: [0x1F9DB, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Vampire: Medium-Light Skin Tone"
    }, {
        code: [0x1F9DB, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Vampire: Medium Skin Tone"
    }, {
        code: [0x1F9DB, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Vampire: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9DB, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Vampire: Dark Skin Tone"
    },*/ {
        code: [0x1F9DB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Vampire"
    }, /*{
        code: [0x1F9DB, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Vampire: Light Skin Tone"
    }, {
        code: [0x1F9DB, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Vampire: Medium-Light Skin Tone"
    }, {
        code: [0x1F9DB, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Vampire: Medium Skin Tone"
    }, {
        code: [0x1F9DB, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Vampire: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9DB, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Vampire: Dark Skin Tone"
    },*/ {
        code: [0x1F9DC],
        groupID: 1,
        name: "Merperson"
    }, /*{
        code: [0x1F9DC, 0x1F3FB],
        groupID: 1,
        name: "Merperson: Light Skin Tone"
    }, {
        code: [0x1F9DC, 0x1F3FC],
        groupID: 1,
        name: "Merperson: Medium-Light Skin Tone"
    }, {
        code: [0x1F9DC, 0x1F3FD],
        groupID: 1,
        name: "Merperson: Medium Skin Tone"
    }, {
        code: [0x1F9DC, 0x1F3FE],
        groupID: 1,
        name: "Merperson: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9DC, 0x1F3FF],
        groupID: 1,
        name: "Merperson: Dark Skin Tone"
    },*/ {
        code: [0x1F9DC, 0x200D, 0x2642],
        groupID: 1,
        name: "Merman"
    }, /*{
        code: [0x1F9DC, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Merman: Light Skin Tone"
    }, {
        code: [0x1F9DC, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Merman: Medium-Light Skin Tone"
    }, {
        code: [0x1F9DC, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Merman: Medium Skin Tone"
    }, {
        code: [0x1F9DC, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Merman: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9DC, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Merman: Dark Skin Tone"
    },*/ {
        code: [0x1F9DC, 0x200D, 0x2640],
        groupID: 1,
        name: "Mermaid"
    }, /*{
        code: [0x1F9DC, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Mermaid: Light Skin Tone"
    }, {
        code: [0x1F9DC, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Mermaid: Medium-Light Skin Tone"
    }, {
        code: [0x1F9DC, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Mermaid: Medium Skin Tone"
    }, {
        code: [0x1F9DC, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Mermaid: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9DC, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Mermaid: Dark Skin Tone"
    },*/ {
        code: [0x1F9DD],
        groupID: 1,
        name: "Elf"
    }, /*{
        code: [0x1F9DD, 0x1F3FB],
        groupID: 1,
        name: "Elf: Light Skin Tone"
    }, {
        code: [0x1F9DD, 0x1F3FC],
        groupID: 1,
        name: "Elf: Medium-Light Skin Tone"
    }, {
        code: [0x1F9DD, 0x1F3FD],
        groupID: 1,
        name: "Elf: Medium Skin Tone"
    }, {
        code: [0x1F9DD, 0x1F3FE],
        groupID: 1,
        name: "Elf: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9DD, 0x1F3FF],
        groupID: 1,
        name: "Elf: Dark Skin Tone"
    },*/ {
        code: [0x1F9DD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Elf"
    }, /*{
        code: [0x1F9DD, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Elf: Light Skin Tone"
    }, {
        code: [0x1F9DD, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Elf: Medium-Light Skin Tone"
    }, {
        code: [0x1F9DD, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Elf: Medium Skin Tone"
    }, {
        code: [0x1F9DD, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Elf: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9DD, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Elf: Dark Skin Tone"
    },*/ {
        code: [0x1F9DD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Elf"
    }, /*{
        code: [0x1F9DD, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Elf: Light Skin Tone"
    }, {
        code: [0x1F9DD, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Elf: Medium-Light Skin Tone"
    }, {
        code: [0x1F9DD, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Elf: Medium Skin Tone"
    }, {
        code: [0x1F9DD, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Elf: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9DD, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Elf: Dark Skin Tone"
    },*/ {
        code: [0x1F9DE],
        groupID: 1,
        name: "Genie"
    }, {
        code: [0x1F9DE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Genie"
    }, {
        code: [0x1F9DE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Genie"
    }, {
        code: [0x1F9DF],
        groupID: 1,
        name: "Zombie"
    }, {
        code: [0x1F9DF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Zombie"
    }, {
        code: [0x1F9DF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Zombie"
    }, {
        code: [0x1F486],
        groupID: 1,
        name: "Person Getting Massage"
    }, /*{
        code: [0x1F486, 0x1F3FB],
        groupID: 1,
        name: "Person Getting Massage: Light Skin Tone"
    }, {
        code: [0x1F486, 0x1F3FC],
        groupID: 1,
        name: "Person Getting Massage: Medium-Light Skin Tone"
    }, {
        code: [0x1F486, 0x1F3FD],
        groupID: 1,
        name: "Person Getting Massage: Medium Skin Tone"
    }, {
        code: [0x1F486, 0x1F3FE],
        groupID: 1,
        name: "Person Getting Massage: Medium-Dark Skin Tone"
    }, {
        code: [0x1F486, 0x1F3FF],
        groupID: 1,
        name: "Person Getting Massage: Dark Skin Tone"
    },*/ {
        code: [0x1F486, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Getting Massage"
    }, /*{
        code: [0x1F486, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Getting Massage: Light Skin Tone"
    }, {
        code: [0x1F486, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Getting Massage: Medium-Light Skin Tone"
    }, {
        code: [0x1F486, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Getting Massage: Medium Skin Tone"
    }, {
        code: [0x1F486, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Getting Massage: Medium-Dark Skin Tone"
    }, {
        code: [0x1F486, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Getting Massage: Dark Skin Tone"
    },*/ {
        code: [0x1F486, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Getting Massage"
    }, /*{
        code: [0x1F486, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Getting Massage: Light Skin Tone"
    }, {
        code: [0x1F486, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Getting Massage: Medium-Light Skin Tone"
    }, {
        code: [0x1F486, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Getting Massage: Medium Skin Tone"
    }, {
        code: [0x1F486, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Getting Massage: Medium-Dark Skin Tone"
    }, {
        code: [0x1F486, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Getting Massage: Dark Skin Tone"
    },*/ {
        code: [0x1F487],
        groupID: 1,
        name: "Person Getting Haircut"
    }, /*{
        code: [0x1F487, 0x1F3FB],
        groupID: 1,
        name: "Person Getting Haircut: Light Skin Tone"
    }, {
        code: [0x1F487, 0x1F3FC],
        groupID: 1,
        name: "Person Getting Haircut: Medium-Light Skin Tone"
    }, {
        code: [0x1F487, 0x1F3FD],
        groupID: 1,
        name: "Person Getting Haircut: Medium Skin Tone"
    }, {
        code: [0x1F487, 0x1F3FE],
        groupID: 1,
        name: "Person Getting Haircut: Medium-Dark Skin Tone"
    }, {
        code: [0x1F487, 0x1F3FF],
        groupID: 1,
        name: "Person Getting Haircut: Dark Skin Tone"
    },*/ {
        code: [0x1F487, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Getting Haircut"
    }, /*{
        code: [0x1F487, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Getting Haircut: Light Skin Tone"
    }, {
        code: [0x1F487, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Getting Haircut: Medium-Light Skin Tone"
    }, {
        code: [0x1F487, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Getting Haircut: Medium Skin Tone"
    }, {
        code: [0x1F487, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Getting Haircut: Medium-Dark Skin Tone"
    }, {
        code: [0x1F487, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Getting Haircut: Dark Skin Tone"
    },*/ {
        code: [0x1F487, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Getting Haircut"
    }, /*{
        code: [0x1F487, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Getting Haircut: Light Skin Tone"
    }, {
        code: [0x1F487, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Getting Haircut: Medium-Light Skin Tone"
    }, {
        code: [0x1F487, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Getting Haircut: Medium Skin Tone"
    }, {
        code: [0x1F487, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Getting Haircut: Medium-Dark Skin Tone"
    }, {
        code: [0x1F487, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Getting Haircut: Dark Skin Tone"
    },*/ {
        code: [0x1F6B6],
        groupID: 1,
        name: "Person Walking"
    }, /*{
        code: [0x1F6B6, 0x1F3FB],
        groupID: 1,
        name: "Person Walking: Light Skin Tone"
    }, {
        code: [0x1F6B6, 0x1F3FC],
        groupID: 1,
        name: "Person Walking: Medium-Light Skin Tone"
    }, {
        code: [0x1F6B6, 0x1F3FD],
        groupID: 1,
        name: "Person Walking: Medium Skin Tone"
    }, {
        code: [0x1F6B6, 0x1F3FE],
        groupID: 1,
        name: "Person Walking: Medium-Dark Skin Tone"
    }, {
        code: [0x1F6B6, 0x1F3FF],
        groupID: 1,
        name: "Person Walking: Dark Skin Tone"
    },*/ {
        code: [0x1F6B6, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Walking"
    }, /*{
        code: [0x1F6B6, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Walking: Light Skin Tone"
    }, {
        code: [0x1F6B6, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Walking: Medium-Light Skin Tone"
    }, {
        code: [0x1F6B6, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Walking: Medium Skin Tone"
    }, {
        code: [0x1F6B6, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Walking: Medium-Dark Skin Tone"
    }, {
        code: [0x1F6B6, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Walking: Dark Skin Tone"
    },*/ {
        code: [0x1F6B6, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Walking"
    }, /*{
        code: [0x1F6B6, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Walking: Light Skin Tone"
    }, {
        code: [0x1F6B6, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Walking: Medium-Light Skin Tone"
    }, {
        code: [0x1F6B6, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Walking: Medium Skin Tone"
    }, {
        code: [0x1F6B6, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Walking: Medium-Dark Skin Tone"
    }, {
        code: [0x1F6B6, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Walking: Dark Skin Tone"
    }, {
        code: [0x1F9CD],
        groupID: 1,
        name: "Person Standing"
    }, {
        code: [0x1F9CD, 0x1F3FB],
        groupID: 1,
        name: "Person Standing: Light Skin Tone"
    }, {
        code: [0x1F9CD, 0x1F3FC],
        groupID: 1,
        name: "Person Standing: Medium-Light Skin Tone"
    }, {
        code: [0x1F9CD, 0x1F3FD],
        groupID: 1,
        name: "Person Standing: Medium Skin Tone"
    }, {
        code: [0x1F9CD, 0x1F3FE],
        groupID: 1,
        name: "Person Standing: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9CD, 0x1F3FF],
        groupID: 1,
        name: "Person Standing: Dark Skin Tone"
    }, {
        code: [0x1F9CD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Standing"
    }, {
        code: [0x1F9CD, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Standing: Light Skin Tone"
    }, {
        code: [0x1F9CD, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Standing: Medium-Light Skin Tone"
    }, {
        code: [0x1F9CD, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Standing: Medium Skin Tone"
    }, {
        code: [0x1F9CD, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Standing: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9CD, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Standing: Dark Skin Tone"
    }, {
        code: [0x1F9CD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Standing"
    }, {
        code: [0x1F9CD, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Standing: Light Skin Tone"
    }, {
        code: [0x1F9CD, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Standing: Medium-Light Skin Tone"
    }, {
        code: [0x1F9CD, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Standing: Medium Skin Tone"
    }, {
        code: [0x1F9CD, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Standing: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9CD, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Standing: Dark Skin Tone"
    }, {
        code: [0x1F9CE],
        groupID: 1,
        name: "Person Kneeling"
    }, {
        code: [0x1F9CE, 0x1F3FB],
        groupID: 1,
        name: "Person Kneeling: Light Skin Tone"
    }, {
        code: [0x1F9CE, 0x1F3FC],
        groupID: 1,
        name: "Person Kneeling: Medium-Light Skin Tone"
    }, {
        code: [0x1F9CE, 0x1F3FD],
        groupID: 1,
        name: "Person Kneeling: Medium Skin Tone"
    }, {
        code: [0x1F9CE, 0x1F3FE],
        groupID: 1,
        name: "Person Kneeling: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9CE, 0x1F3FF],
        groupID: 1,
        name: "Person Kneeling: Dark Skin Tone"
    }, {
        code: [0x1F9CE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Kneeling"
    }, {
        code: [0x1F9CE, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Kneeling: Light Skin Tone"
    }, {
        code: [0x1F9CE, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Kneeling: Medium-Light Skin Tone"
    }, {
        code: [0x1F9CE, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Kneeling: Medium Skin Tone"
    }, {
        code: [0x1F9CE, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Kneeling: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9CE, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Kneeling: Dark Skin Tone"
    }, {
        code: [0x1F9CE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Kneeling"
    }, {
        code: [0x1F9CE, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Kneeling: Light Skin Tone"
    }, {
        code: [0x1F9CE, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Kneeling: Medium-Light Skin Tone"
    }, {
        code: [0x1F9CE, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Kneeling: Medium Skin Tone"
    }, {
        code: [0x1F9CE, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Kneeling: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9CE, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Kneeling: Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x200D, 0x1F9AF],
        groupID: 1,
        name: "Person With Probing Cane"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F9AF],
        groupID: 1,
        name: "Person With Probing Cane: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F9AF],
        groupID: 1,
        name: "Person With Probing Cane: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F9AF],
        groupID: 1,
        name: "Person With Probing Cane: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F9AF],
        groupID: 1,
        name: "Person With Probing Cane: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F9AF],
        groupID: 1,
        name: "Person With Probing Cane: Dark Skin Tone"
    }, {
        code: [0x1F468, 0x200D, 0x1F9AF],
        groupID: 1,
        name: "Man With Probing Cane"
    }, {
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F9AF],
        groupID: 1,
        name: "Man With Probing Cane: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F9AF],
        groupID: 1,
        name: "Man With Probing Cane: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F9AF],
        groupID: 1,
        name: "Man With Probing Cane: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F9AF],
        groupID: 1,
        name: "Man With Probing Cane: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F9AF],
        groupID: 1,
        name: "Man With Probing Cane: Dark Skin Tone"
    }, {
        code: [0x1F469, 0x200D, 0x1F9AF],
        groupID: 1,
        name: "Woman With Probing Cane"
    }, {
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F9AF],
        groupID: 1,
        name: "Woman With Probing Cane: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F9AF],
        groupID: 1,
        name: "Woman With Probing Cane: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F9AF],
        groupID: 1,
        name: "Woman With Probing Cane: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F9AF],
        groupID: 1,
        name: "Woman With Probing Cane: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F9AF],
        groupID: 1,
        name: "Woman With Probing Cane: Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x200D, 0x1F9BC],
        groupID: 1,
        name: "Person in Motorized Wheelchair"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F9BC],
        groupID: 1,
        name: "Person in Motorized Wheelchair: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F9BC],
        groupID: 1,
        name: "Person in Motorized Wheelchair: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F9BC],
        groupID: 1,
        name: "Person in Motorized Wheelchair: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F9BC],
        groupID: 1,
        name: "Person in Motorized Wheelchair: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F9BC],
        groupID: 1,
        name: "Person in Motorized Wheelchair: Dark Skin Tone"
    }, {
        code: [0x1F468, 0x200D, 0x1F9BC],
        groupID: 1,
        name: "Man in Motorized Wheelchair"
    }, {
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F9BC],
        groupID: 1,
        name: "Man in Motorized Wheelchair: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F9BC],
        groupID: 1,
        name: "Man in Motorized Wheelchair: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F9BC],
        groupID: 1,
        name: "Man in Motorized Wheelchair: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F9BC],
        groupID: 1,
        name: "Man in Motorized Wheelchair: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F9BC],
        groupID: 1,
        name: "Man in Motorized Wheelchair: Dark Skin Tone"
    }, {
        code: [0x1F469, 0x200D, 0x1F9BC],
        groupID: 1,
        name: "Woman in Motorized Wheelchair"
    }, {
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F9BC],
        groupID: 1,
        name: "Woman in Motorized Wheelchair: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F9BC],
        groupID: 1,
        name: "Woman in Motorized Wheelchair: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F9BC],
        groupID: 1,
        name: "Woman in Motorized Wheelchair: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F9BC],
        groupID: 1,
        name: "Woman in Motorized Wheelchair: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F9BC],
        groupID: 1,
        name: "Woman in Motorized Wheelchair: Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x200D, 0x1F9BD],
        groupID: 1,
        name: "Person in Manual Wheelchair"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F9BD],
        groupID: 1,
        name: "Person in Manual Wheelchair: Light Skin Ton"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F9BD],
        groupID: 1,
        name: "Person in Manual Wheelchair: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F9BD],
        groupID: 1,
        name: "Person in Manual Wheelchair: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F9BD],
        groupID: 1,
        name: "Person in Manual Wheelchair: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F9BD],
        groupID: 1,
        name: "Person in Manual Wheelchair: Dark Skin Tone"
    }, {
        code: [0x1F468, 0x200D, 0x1F9BD],
        groupID: 1,
        name: "Man in Manual Wheelchair"
    }, {
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F9BD],
        groupID: 1,
        name: "Man in Manual Wheelchair: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F9BD],
        groupID: 1,
        name: "Man in Manual Wheelchair: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F9BD],
        groupID: 1,
        name: "Man in Manual Wheelchair: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F9BD],
        groupID: 1,
        name: "Man in Manual Wheelchair: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F9BD],
        groupID: 1,
        name: "Man in Manual Wheelchair: Dark Skin Tone"
    }, {
        code: [0x1F469, 0x200D, 0x1F9BD],
        groupID: 1,
        name: "Woman in Manual Wheelchair"
    }, {
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F9BD],
        groupID: 1,
        name: "Woman in Manual Wheelchair: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F9BD],
        groupID: 1,
        name: "Woman in Manual Wheelchair: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F9BD],
        groupID: 1,
        name: "Woman in Manual Wheelchair: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F9BD],
        groupID: 1,
        name: "Woman in Manual Wheelchair: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F9BD],
        groupID: 1,
        name: "Woman in Manual Wheelchair: Dark Skin Tone"
    },*/ {
        code: [0x1F3C3],
        groupID: 1,
        name: "Person Running"
    }, /*{
        code: [0x1F3C3, 0x1F3FB],
        groupID: 1,
        name: "Person Running: Light Skin Tone"
    }, {
        code: [0x1F3C3, 0x1F3FC],
        groupID: 1,
        name: "Person Running: Medium-Light Skin Tone"
    }, {
        code: [0x1F3C3, 0x1F3FD],
        groupID: 1,
        name: "Person Running: Medium Skin Tone"
    }, {
        code: [0x1F3C3, 0x1F3FE],
        groupID: 1,
        name: "Person Running: Medium-Dark Skin Tone"
    }, {
        code: [0x1F3C3, 0x1F3FF],
        groupID: 1,
        name: "Person Running: Dark Skin Tone"
    },*/ {
        code: [0x1F3C3, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Running"
    }, /*{
        code: [0x1F3C3, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Running: Light Skin Tone"
    }, {
        code: [0x1F3C3, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Running: Medium-Light Skin Tone"
    }, {
        code: [0x1F3C3, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Running: Medium Skin Tone"
    }, {
        code: [0x1F3C3, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Running: Medium-Dark Skin Tone"
    }, {
        code: [0x1F3C3, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man Running: Dark Skin Tone"
    },*/ {
        code: [0x1F3C3, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Running"
    }, /*{
        code: [0x1F3C3, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Running: Light Skin Tone"
    }, {
        code: [0x1F3C3, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Running: Medium-Light Skin Tone"
    }, {
        code: [0x1F3C3, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Running: Medium Skin Tone"
    }, {
        code: [0x1F3C3, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Running: Medium-Dark Skin Tone"
    }, {
        code: [0x1F3C3, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman Running: Dark Skin Tone"
    },*/ {
        code: [0x1F483],
        groupID: 1,
        name: "Woman Dancing"
    }, /*{
        code: [0x1F483, 0x1F3FB],
        groupID: 1,
        name: "Woman Dancing: Light Skin Tone"
    }, {
        code: [0x1F483, 0x1F3FC],
        groupID: 1,
        name: "Woman Dancing: Medium-Light Skin Tone"
    }, {
        code: [0x1F483, 0x1F3FD],
        groupID: 1,
        name: "Woman Dancing: Medium Skin Tone"
    }, {
        code: [0x1F483, 0x1F3FE],
        groupID: 1,
        name: "Woman Dancing: Medium-Dark Skin Tone"
    }, {
        code: [0x1F483, 0x1F3FF],
        groupID: 1,
        name: "Woman Dancing: Dark Skin Tone"
    },*/ {
        code: [0x1F57A],
        groupID: 1,
        name: "Man Dancing"
    }, /*{
        code: [0x1F57A, 0x1F3FB],
        groupID: 1,
        name: "Man Dancing: Light Skin Tone"
    }, {
        code: [0x1F57A, 0x1F3FC],
        groupID: 1,
        name: "Man Dancing: Medium-Light Skin Tone"
    }, {
        code: [0x1F57A, 0x1F3FD],
        groupID: 1,
        name: "Man Dancing: Medium Skin Tone"
    }, {
        code: [0x1F57A, 0x1F3FE],
        groupID: 1,
        name: "Man Dancing: Medium-Dark Skin Tone"
    }, {
        code: [0x1F57A, 0x1F3FF],
        groupID: 1,
        name: "Man Dancing: Dark Skin Tone"
    },*/ {
        code: [0x1F574],
        groupID: 4,
        name: "Man in Suit Levitating"
    }, /*{
        code: [0x1F574, 0x1F3FB],
        groupID: 4,
        name: "Man in Suit Levitating: Light Skin Tone"
    }, {
        code: [0x1F574, 0x1F3FC],
        groupID: 4,
        name: "Man in Suit Levitating: Medium-Light Skin Tone"
    }, {
        code: [0x1F574, 0x1F3FD],
        groupID: 4,
        name: "Man in Suit Levitating: Medium Skin Tone"
    }, {
        code: [0x1F574, 0x1F3FE],
        groupID: 4,
        name: "Man in Suit Levitating: Medium-Dark Skin Tone"
    }, {
        code: [0x1F574, 0x1F3FF],
        groupID: 4,
        name: "Man in Suit Levitating: Dark Skin Tone"
    },*/ {
        code: [0x1F46F],
        groupID: 1,
        name: "People With Bunny Ears"
    }, {
        code: [0x1F46F, 0x200D, 0x2642],
        groupID: 1,
        name: "Men With Bunny Ears"
    }, {
        code: [0x1F46F, 0x200D, 0x2640],
        groupID: 1,
        name: "Women With Bunny Ears"
    }, {
        code: [0x1F9D6],
        groupID: 1,
        name: "Person in Steamy Room"
    }, /*{
        code: [0x1F9D6, 0x1F3FB],
        groupID: 1,
        name: "Person in Steamy Room: Light Skin Tone"
    }, {
        code: [0x1F9D6, 0x1F3FC],
        groupID: 1,
        name: "Person in Steamy Room: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D6, 0x1F3FD],
        groupID: 1,
        name: "Person in Steamy Room: Medium Skin Tone"
    }, {
        code: [0x1F9D6, 0x1F3FE],
        groupID: 1,
        name: "Person in Steamy Room: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D6, 0x1F3FF],
        groupID: 1,
        name: "Person in Steamy Room: Dark Skin Tone"
    },*/ {
        code: [0x1F9D6, 0x200D, 0x2642],
        groupID: 1,
        name: "Man in Steamy Room"
    }, /*{
        code: [0x1F9D6, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Man in Steamy Room: Light Skin Tone"
    }, {
        code: [0x1F9D6, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Man in Steamy Room: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D6, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Man in Steamy Room: Medium Skin Tone"
    }, {
        code: [0x1F9D6, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Man in Steamy Room: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D6, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Man in Steamy Room: Dark Skin Tone"
    },*/ {
        code: [0x1F9D6, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman in Steamy Room"
    }, /*{
        code: [0x1F9D6, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman in Steamy Room: Light Skin Tone"
    }, {
        code: [0x1F9D6, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman in Steamy Room: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D6, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman in Steamy Room: Medium Skin Tone"
    }, {
        code: [0x1F9D6, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman in Steamy Room: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D6, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Woman in Steamy Room: Dark Skin Tone"
    },*/ {
        code: [0x1F9D7],
        groupID: 4,
        name: "Person Climbing"
    }, /*{
        code: [0x1F9D7, 0x1F3FB],
        groupID: 4,
        name: "Person Climbing: Light Skin Tone"
    }, {
        code: [0x1F9D7, 0x1F3FC],
        groupID: 4,
        name: "Person Climbing: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D7, 0x1F3FD],
        groupID: 4,
        name: "Person Climbing: Medium Skin Tone"
    }, {
        code: [0x1F9D7, 0x1F3FE],
        groupID: 4,
        name: "Person Climbing: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D7, 0x1F3FF],
        groupID: 4,
        name: "Person Climbing: Dark Skin Tone"
    },*/ {
        code: [0x1F9D7, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Climbing"
    }, /*{
        code: [0x1F9D7, 0x1F3FB, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Climbing: Light Skin Tone"
    }, {
        code: [0x1F9D7, 0x1F3FC, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Climbing: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D7, 0x1F3FD, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Climbing: Medium Skin Tone"
    }, {
        code: [0x1F9D7, 0x1F3FE, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Climbing: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D7, 0x1F3FF, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Climbing: Dark Skin Tone"
    },*/ {
        code: [0x1F9D7, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Climbing"
    }, /*{
        code: [0x1F9D7, 0x1F3FB, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Climbing: Light Skin Tone"
    }, {
        code: [0x1F9D7, 0x1F3FC, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Climbing: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D7, 0x1F3FD, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Climbing: Medium Skin Tone"
    }, {
        code: [0x1F9D7, 0x1F3FE, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Climbing: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D7, 0x1F3FF, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Climbing: Dark Skin Tone"
    },*/ {
        code: [0x1F93A],
        groupID: 1,
        name: "Person Fencing"
    }, {
        code: [0x1F3C7],
        groupID: 4,
        name: "Horse Racing"
    }, /*{
        code: [0x1F3C7, 0x1F3FB],
        groupID: 4,
        name: "Horse Racing: Light Skin Tone"
    }, {
        code: [0x1F3C7, 0x1F3FC],
        groupID: 4,
        name: "Horse Racing: Medium-Light Skin Tone"
    }, {
        code: [0x1F3C7, 0x1F3FD],
        groupID: 4,
        name: "Horse Racing: Medium Skin Tone"
    }, {
        code: [0x1F3C7, 0x1F3FE],
        groupID: 4,
        name: "Horse Racing: Medium-Dark Skin Tone"
    }, {
        code: [0x1F3C7, 0x1F3FF],
        groupID: 4,
        name: "Horse Racing: Dark Skin Tone"
    },*/ {
        code: [0x26F7],
        groupID: 4,
        name: "Skier"
    }, {
        code: [0x1F3C2],
        groupID: 4,
        name: "Snowboarder"
    }, /*{
        code: [0x1F3C2, 0x1F3FB],
        groupID: 4,
        name: "Snowboarder: Light Skin Tone"
    }, {
        code: [0x1F3C2, 0x1F3FC],
        groupID: 4,
        name: "Snowboarder: Medium-Light Skin Tone"
    }, {
        code: [0x1F3C2, 0x1F3FD],
        groupID: 4,
        name: "Snowboarder: Medium Skin Tone"
    }, {
        code: [0x1F3C2, 0x1F3FE],
        groupID: 4,
        name: "Snowboarder: Medium-Dark Skin Tone"
    }, {
        code: [0x1F3C2, 0x1F3FF],
        groupID: 4,
        name: "Snowboarder: Dark Skin Tone"
    },*/ {
        code: [0x1F3CC],
        groupID: 4,
        name: "Person Golfing"
    }, /*{
        code: [0x1F3CC, 0x1F3FB],
        groupID: 4,
        name: "Person Golfing: Light Skin Tone"
    }, {
        code: [0x1F3CC, 0x1F3FC],
        groupID: 4,
        name: "Person Golfing: Medium-Light Skin Tone"
    }, {
        code: [0x1F3CC, 0x1F3FD],
        groupID: 4,
        name: "Person Golfing: Medium Skin Tone"
    }, {
        code: [0x1F3CC, 0x1F3FE],
        groupID: 4,
        name: "Person Golfing: Medium-Dark Skin Tone"
    }, {
        code: [0x1F3CC, 0x1F3FF],
        groupID: 4,
        name: "Person Golfing: Dark Skin Tone"
    },*/ {
        code: [0x1F3CC, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Golfing"
    }, /*{
        code: [0x1F3CC, 0x1F3FB, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Golfing: Light Skin Tone"
    }, {
        code: [0x1F3CC, 0x1F3FC, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Golfing: Medium-Light Skin Tone"
    }, {
        code: [0x1F3CC, 0x1F3FD, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Golfing: Medium Skin Tone"
    }, {
        code: [0x1F3CC, 0x1F3FE, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Golfing: Medium-Dark Skin Tone"
    }, {
        code: [0x1F3CC, 0x1F3FF, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Golfing: Dark Skin Tone"
    },*/ {
        code: [0x1F3CC, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Golfing"
    }, /*{
        code: [0x1F3CC, 0x1F3FB, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Golfing: Light Skin Tone"
    }, {
        code: [0x1F3CC, 0x1F3FC, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Golfing: Medium-Light Skin Tone"
    }, {
        code: [0x1F3CC, 0x1F3FD, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Golfing: Medium Skin Tone"
    }, {
        code: [0x1F3CC, 0x1F3FE, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Golfing: Medium-Dark Skin Tone"
    }, {
        code: [0x1F3CC, 0x1F3FF, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Golfing: Dark Skin Tone"
    },*/ {
        code: [0x1F3C4],
        groupID: 4,
        name: "Person Surfing"
    }, /*{
        code: [0x1F3C4, 0x1F3FB],
        groupID: 4,
        name: "Person Surfing: Light Skin Tone"
    }, {
        code: [0x1F3C4, 0x1F3FC],
        groupID: 4,
        name: "Person Surfing: Medium-Light Skin Tone"
    }, {
        code: [0x1F3C4, 0x1F3FD],
        groupID: 4,
        name: "Person Surfing: Medium Skin Tone"
    }, {
        code: [0x1F3C4, 0x1F3FE],
        groupID: 4,
        name: "Person Surfing: Medium-Dark Skin Tone"
    }, {
        code: [0x1F3C4, 0x1F3FF],
        groupID: 4,
        name: "Person Surfing: Dark Skin Tone"
    },*/ {
        code: [0x1F3C4, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Surfing"
    }, /*{
        code: [0x1F3C4, 0x1F3FB, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Surfing: Light Skin Tone"
    }, {
        code: [0x1F3C4, 0x1F3FC, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Surfing: Medium-Light Skin Tone"
    }, {
        code: [0x1F3C4, 0x1F3FD, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Surfing: Medium Skin Tone"
    }, {
        code: [0x1F3C4, 0x1F3FE, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Surfing: Medium-Dark Skin Tone"
    }, {
        code: [0x1F3C4, 0x1F3FF, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Surfing: Dark Skin Tone"
    },*/ {
        code: [0x1F3C4, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Surfing"
    }, /*{
        code: [0x1F3C4, 0x1F3FB, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Surfing: Light Skin Tone"
    }, {
        code: [0x1F3C4, 0x1F3FC, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Surfing: Medium-Light Skin Tone"
    }, {
        code: [0x1F3C4, 0x1F3FD, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Surfing: Medium Skin Tone"
    }, {
        code: [0x1F3C4, 0x1F3FE, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Surfing: Medium-Dark Skin Tone"
    }, {
        code: [0x1F3C4, 0x1F3FF, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Surfing: Dark Skin Tone"
    },*/ {
        code: [0x1F6A3],
        groupID: 5,
        name: "Person Rowing Boat"
    }, /*{
        code: [0x1F6A3, 0x1F3FB],
        groupID: 5,
        name: "Person Rowing Boat: Light Skin Tone"
    }, {
        code: [0x1F6A3, 0x1F3FC],
        groupID: 5,
        name: "Person Rowing Boat: Medium-Light Skin Tone"
    }, {
        code: [0x1F6A3, 0x1F3FD],
        groupID: 5,
        name: "Person Rowing Boat: Medium Skin Tone"
    }, {
        code: [0x1F6A3, 0x1F3FE],
        groupID: 5,
        name: "Person Rowing Boat: Medium-Dark Skin Tone"
    }, {
        code: [0x1F6A3, 0x1F3FF],
        groupID: 5,
        name: "Person Rowing Boat: Dark Skin Tone"
    },*/ {
        code: [0x1F6A3, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Rowing Boat"
    }, /*{
        code: [0x1F6A3, 0x1F3FB, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Rowing Boat: Light Skin Tone"
    }, {
        code: [0x1F6A3, 0x1F3FC, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Rowing Boat: Medium-Light Skin Tone"
    }, {
        code: [0x1F6A3, 0x1F3FD, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Rowing Boat: Medium Skin Tone"
    }, {
        code: [0x1F6A3, 0x1F3FE, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Rowing Boat: Medium-Dark Skin Tone"
    }, {
        code: [0x1F6A3, 0x1F3FF, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Rowing Boat: Dark Skin Tone"
    },*/ {
        code: [0x1F6A3, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Rowing Boat"
    }, /*{
        code: [0x1F6A3, 0x1F3FB, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Rowing Boat: Light Skin Tone"
    }, {
        code: [0x1F6A3, 0x1F3FC, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Rowing Boat: Medium-Light Skin Tone"
    }, {
        code: [0x1F6A3, 0x1F3FD, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Rowing Boat: Medium Skin Tone"
    }, {
        code: [0x1F6A3, 0x1F3FE, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Rowing Boat: Medium-Dark Skin Tone"
    }, {
        code: [0x1F6A3, 0x1F3FF, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Rowing Boat: Dark Skin Tone"
    },*/ {
        code: [0x1F3CA],
        groupID: 4,
        name: "Person Swimming"
    }, /*{
        code: [0x1F3CA, 0x1F3FB],
        groupID: 4,
        name: "Person Swimming: Light Skin Tone"
    }, {
        code: [0x1F3CA, 0x1F3FC],
        groupID: 4,
        name: "Person Swimming: Medium-Light Skin Tone"
    }, {
        code: [0x1F3CA, 0x1F3FD],
        groupID: 4,
        name: "Person Swimming: Medium Skin Tone"
    }, {
        code: [0x1F3CA, 0x1F3FE],
        groupID: 4,
        name: "Person Swimming: Medium-Dark Skin Tone"
    }, {
        code: [0x1F3CA, 0x1F3FF],
        groupID: 4,
        name: "Person Swimming: Dark Skin Tone"
    },*/ {
        code: [0x1F3CA, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Swimming"
    }, /*{
        code: [0x1F3CA, 0x1F3FB, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Swimming: Light Skin Tone"
    }, {
        code: [0x1F3CA, 0x1F3FC, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Swimming: Medium-Light Skin Tone"
    }, {
        code: [0x1F3CA, 0x1F3FD, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Swimming: Medium Skin Tone"
    }, {
        code: [0x1F3CA, 0x1F3FE, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Swimming: Medium-Dark Skin Tone"
    }, {
        code: [0x1F3CA, 0x1F3FF, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Swimming: Dark Skin Tone"
    },*/ {
        code: [0x1F3CA, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Swimming"
    }, /*{
        code: [0x1F3CA, 0x1F3FB, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Swimming: Light Skin Tone"
    }, {
        code: [0x1F3CA, 0x1F3FC, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Swimming: Medium-Light Skin Tone"
    }, {
        code: [0x1F3CA, 0x1F3FD, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Swimming: Medium Skin Tone"
    }, {
        code: [0x1F3CA, 0x1F3FE, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Swimming: Medium-Dark Skin Tone"
    }, {
        code: [0x1F3CA, 0x1F3FF, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Swimming: Dark Skin Tone"
    },*/ {
        code: [0x26F9],
        groupID: 4,
        name: "Person Bouncing Ball"
    }, /*{
        code: [0x26F9, 0x1F3FB],
        groupID: 4,
        name: "Person Bouncing Ball: Light Skin Tone"
    }, {
        code: [0x26F9, 0x1F3FC],
        groupID: 4,
        name: "Person Bouncing Ball: Medium-Light Skin Tone"
    }, {
        code: [0x26F9, 0x1F3FD],
        groupID: 4,
        name: "Person Bouncing Ball: Medium Skin Tone"
    }, {
        code: [0x26F9, 0x1F3FE],
        groupID: 4,
        name: "Person Bouncing Ball: Medium-Dark Skin Tone"
    }, {
        code: [0x26F9, 0x1F3FF],
        groupID: 4,
        name: "Person Bouncing Ball: Dark Skin Tone"
    },*/ {
        code: [0x26F9, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Bouncing Ball"
    }, /*{
        code: [0x26F9, 0x1F3FB, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Bouncing Ball: Light Skin Tone"
    }, {
        code: [0x26F9, 0x1F3FC, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Bouncing Ball: Medium-Light Skin Tone"
    }, {
        code: [0x26F9, 0x1F3FD, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Bouncing Ball: Medium Skin Tone"
    }, {
        code: [0x26F9, 0x1F3FE, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Bouncing Ball: Medium-Dark Skin Tone"
    }, {
        code: [0x26F9, 0x1F3FF, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Bouncing Ball: Dark Skin Tone"
    },*/ {
        code: [0x26F9, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Bouncing Ball"
    }, /*{
        code: [0x26F9, 0x1F3FB, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Bouncing Ball: Light Skin Tone"
    }, {
        code: [0x26F9, 0x1F3FC, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Bouncing Ball: Medium-Light Skin Tone"
    }, {
        code: [0x26F9, 0x1F3FD, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Bouncing Ball: Medium Skin Tone"
    }, {
        code: [0x26F9, 0x1F3FE, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Bouncing Ball: Medium-Dark Skin Tone"
    }, {
        code: [0x26F9, 0x1F3FF, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Bouncing Ball: Dark Skin Tone"
    },*/ {
        code: [0x1F3CB],
        groupID: 4,
        name: "Person Lifting Weights"
    }, /*{
        code: [0x1F3CB, 0x1F3FB],
        groupID: 4,
        name: "Person Lifting Weights: Light Skin Tone"
    }, {
        code: [0x1F3CB, 0x1F3FC],
        groupID: 4,
        name: "Person Lifting Weights: Medium-Light Skin Tone"
    }, {
        code: [0x1F3CB, 0x1F3FD],
        groupID: 4,
        name: "Person Lifting Weights: Medium Skin Tone"
    }, {
        code: [0x1F3CB, 0x1F3FE],
        groupID: 4,
        name: "Person Lifting Weights: Medium-Dark Skin Tone"
    }, {
        code: [0x1F3CB, 0x1F3FF],
        groupID: 4,
        name: "Person Lifting Weights: Dark Skin Tone"
    },*/ {
        code: [0x1F3CB, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Lifting Weights"
    }, /*{
        code: [0x1F3CB, 0x1F3FB, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Lifting Weights: Light Skin Tone"
    }, {
        code: [0x1F3CB, 0x1F3FC, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Lifting Weights: Medium-Light Skin Tone"
    }, {
        code: [0x1F3CB, 0x1F3FD, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Lifting Weights: Medium Skin Tone"
    }, {
        code: [0x1F3CB, 0x1F3FE, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Lifting Weights: Medium-Dark Skin Tone"
    }, {
        code: [0x1F3CB, 0x1F3FF, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Lifting Weights: Dark Skin Tone"
    },*/ {
        code: [0x1F3CB, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Lifting Weights"
    }, /*{
        code: [0x1F3CB, 0x1F3FB, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Lifting Weights: Light Skin Tone"
    }, {
        code: [0x1F3CB, 0x1F3FC, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Lifting Weights: Medium-Light Skin Tone"
    }, {
        code: [0x1F3CB, 0x1F3FD, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Lifting Weights: Medium Skin Tone"
    }, {
        code: [0x1F3CB, 0x1F3FE, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Lifting Weights: Medium-Dark Skin Tone"
    }, {
        code: [0x1F3CB, 0x1F3FF, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Lifting Weights: Dark Skin Tone"
    },*/ {
        code: [0x1F6B4],
        groupID: 4,
        name: "Person Biking"
    }, /*{
        code: [0x1F6B4, 0x1F3FB],
        groupID: 4,
        name: "Person Biking: Light Skin Tone"
    }, {
        code: [0x1F6B4, 0x1F3FC],
        groupID: 4,
        name: "Person Biking: Medium-Light Skin Tone"
    }, {
        code: [0x1F6B4, 0x1F3FD],
        groupID: 4,
        name: "Person Biking: Medium Skin Tone"
    }, {
        code: [0x1F6B4, 0x1F3FE],
        groupID: 4,
        name: "Person Biking: Medium-Dark Skin Tone"
    }, {
        code: [0x1F6B4, 0x1F3FF],
        groupID: 4,
        name: "Person Biking: Dark Skin Tone"
    },*/ {
        code: [0x1F6B4, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Biking"
    }, /*{
        code: [0x1F6B4, 0x1F3FB, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Biking: Light Skin Tone"
    }, {
        code: [0x1F6B4, 0x1F3FC, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Biking: Medium-Light Skin Tone"
    }, {
        code: [0x1F6B4, 0x1F3FD, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Biking: Medium Skin Tone"
    }, {
        code: [0x1F6B4, 0x1F3FE, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Biking: Medium-Dark Skin Tone"
    }, {
        code: [0x1F6B4, 0x1F3FF, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Biking: Dark Skin Tone"
    },*/ {
        code: [0x1F6B4, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Biking"
    }, /*{
        code: [0x1F6B4, 0x1F3FB, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Biking: Light Skin Tone"
    }, {
        code: [0x1F6B4, 0x1F3FC, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Biking: Medium-Light Skin Tone"
    }, {
        code: [0x1F6B4, 0x1F3FD, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Biking: Medium Skin Tone"
    }, {
        code: [0x1F6B4, 0x1F3FE, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Biking: Medium-Dark Skin Tone"
    }, {
        code: [0x1F6B4, 0x1F3FF, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Biking: Dark Skin Tone"
    },*/ {
        code: [0x1F6B5],
        groupID: 5,
        name: "Person Mountain Biking"
    }, /*{
        code: [0x1F6B5, 0x1F3FB],
        groupID: 5,
        name: "Person Mountain Biking: Light Skin Tone"
    }, {
        code: [0x1F6B5, 0x1F3FC],
        groupID: 5,
        name: "Person Mountain Biking: Medium-Light Skin Tone"
    }, {
        code: [0x1F6B5, 0x1F3FD],
        groupID: 5,
        name: "Person Mountain Biking: Medium Skin Tone"
    }, {
        code: [0x1F6B5, 0x1F3FE],
        groupID: 5,
        name: "Person Mountain Biking: Medium-Dark Skin Tone"
    }, {
        code: [0x1F6B5, 0x1F3FF],
        groupID: 5,
        name: "Person Mountain Biking: Dark Skin Tone"
    },*/ {
        code: [0x1F6B5, 0x200D, 0x2642],
        groupID: 5,
        name: "Man Mountain Biking"
    }, /*{
        code: [0x1F6B5, 0x1F3FB, 0x200D, 0x2642],
        groupID: 5,
        name: "Man Mountain Biking: Light Skin Tone"
    }, {
        code: [0x1F6B5, 0x1F3FC, 0x200D, 0x2642],
        groupID: 5,
        name: "Man Mountain Biking: Medium-Light Skin Tone"
    }, {
        code: [0x1F6B5, 0x1F3FD, 0x200D, 0x2642],
        groupID: 5,
        name: "Man Mountain Biking: Medium Skin Tone"
    }, {
        code: [0x1F6B5, 0x1F3FE, 0x200D, 0x2642],
        groupID: 5,
        name: "Man Mountain Biking: Medium-Dark Skin Tone"
    }, {
        code: [0x1F6B5, 0x1F3FF, 0x200D, 0x2642],
        groupID: 5,
        name: "Man Mountain Biking: Dark Skin Tone"
    },*/ {
        code: [0x1F6B5, 0x200D, 0x2640],
        groupID: 5,
        name: "Woman Mountain Biking"
    }, /*{
        code: [0x1F6B5, 0x1F3FB, 0x200D, 0x2640],
        groupID: 5,
        name: "Woman Mountain Biking: Light Skin Tone"
    }, {
        code: [0x1F6B5, 0x1F3FC, 0x200D, 0x2640],
        groupID: 5,
        name: "Woman Mountain Biking: Medium-Light Skin Tone"
    }, {
        code: [0x1F6B5, 0x1F3FD, 0x200D, 0x2640],
        groupID: 5,
        name: "Woman Mountain Biking: Medium Skin Tone"
    }, {
        code: [0x1F6B5, 0x1F3FE, 0x200D, 0x2640],
        groupID: 5,
        name: "Woman Mountain Biking: Medium-Dark Skin Tone"
    }, {
        code: [0x1F6B5, 0x1F3FF, 0x200D, 0x2640],
        groupID: 5,
        name: "Woman Mountain Biking: Dark Skin Tone"
    },*/ {
        code: [0x1F938],
        groupID: 4,
        name: "Person Cartwheeling"
    }, /*{
        code: [0x1F938, 0x1F3FB],
        groupID: 4,
        name: "Person Cartwheeling: Light Skin Tone"
    }, {
        code: [0x1F938, 0x1F3FC],
        groupID: 4,
        name: "Person Cartwheeling: Medium-Light Skin Tone"
    }, {
        code: [0x1F938, 0x1F3FD],
        groupID: 4,
        name: "Person Cartwheeling: Medium Skin Tone"
    }, {
        code: [0x1F938, 0x1F3FE],
        groupID: 4,
        name: "Person Cartwheeling: Medium-Dark Skin Tone"
    }, {
        code: [0x1F938, 0x1F3FF],
        groupID: 4,
        name: "Person Cartwheeling: Dark Skin Tone"
    },*/ {
        code: [0x1F938, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Cartwheeling"
    }, /*{
        code: [0x1F938, 0x1F3FB, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Cartwheeling: Light Skin Tone"
    }, {
        code: [0x1F938, 0x1F3FC, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Cartwheeling: Medium-Light Skin Tone"
    }, {
        code: [0x1F938, 0x1F3FD, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Cartwheeling: Medium Skin Tone"
    }, {
        code: [0x1F938, 0x1F3FE, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Cartwheeling: Medium-Dark Skin Tone"
    }, {
        code: [0x1F938, 0x1F3FF, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Cartwheeling: Dark Skin Tone"
    },*/ {
        code: [0x1F938, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Cartwheeling"
    }, /*{
        code: [0x1F938, 0x1F3FB, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Cartwheeling: Light Skin Tone"
    }, {
        code: [0x1F938, 0x1F3FC, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Cartwheeling: Medium-Light Skin Tone"
    }, {
        code: [0x1F938, 0x1F3FD, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Cartwheeling: Medium Skin Tone"
    }, {
        code: [0x1F938, 0x1F3FE, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Cartwheeling: Medium-Dark Skin Tone"
    }, {
        code: [0x1F938, 0x1F3FF, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Cartwheeling: Dark Skin Tone"
    },*/ {
        code: [0x1F93C],
        groupID: 4,
        name: "People Wrestling"
    }, {
        code: [0x1F93C, 0x200D, 0x2642],
        groupID: 4,
        name: "Men Wrestling"
    }, /*{
        code: [0x1F93C, 0x1F3FB, 0x200D, 0x2642],
        groupID: 4,
        name: "Men Wrestling, Type-1-2"
    }, {
        code: [0x1F93C, 0x1F3FC, 0x200D, 0x2642],
        groupID: 4,
        name: "Men Wrestling, Type-3"
    }, {
        code: [0x1F93C, 0x1F3FD, 0x200D, 0x2642],
        groupID: 4,
        name: "Men Wrestling, Type-4"
    }, {
        code: [0x1F93C, 0x1F3FE, 0x200D, 0x2642],
        groupID: 4,
        name: "Men Wrestling, Type-5"
    }, {
        code: [0x1F93C, 0x1F3FF, 0x200D, 0x2642],
        groupID: 4,
        name: "Men Wrestling, Type-6"
    },*/ {
        code: [0x1F93C, 0x200D, 0x2640],
        groupID: 4,
        name: "Women Wrestling"
    }, /*{
        code: [0x1F93C, 0x1F3FB, 0x200D, 0x2640],
        groupID: 4,
        name: "Women Wrestling, Type-1-2"
    }, {
        code: [0x1F93C, 0x1F3FC, 0x200D, 0x2640],
        groupID: 4,
        name: "Women Wrestling, Type-3"
    }, {
        code: [0x1F93C, 0x1F3FD, 0x200D, 0x2640],
        groupID: 4,
        name: "Women Wrestling, Type-4"
    }, {
        code: [0x1F93C, 0x1F3FE, 0x200D, 0x2640],
        groupID: 4,
        name: "Women Wrestling, Type-5"
    }, {
        code: [0x1F93C, 0x1F3FF, 0x200D, 0x2640],
        groupID: 4,
        name: "Women Wrestling, Type-6"
    },*/ {
        code: [0x1F93D],
        groupID: 4,
        name: "Person Playing Water Polo"
    }, /*{
        code: [0x1F93D, 0x1F3FB],
        groupID: 4,
        name: "Person Playing Water Polo: Light Skin Tone"
    }, {
        code: [0x1F93D, 0x1F3FC],
        groupID: 4,
        name: "Person Playing Water Polo: Medium-Light Skin Tone"
    }, {
        code: [0x1F93D, 0x1F3FD],
        groupID: 4,
        name: "Person Playing Water Polo: Medium Skin Tone"
    }, {
        code: [0x1F93D, 0x1F3FE],
        groupID: 4,
        name: "Person Playing Water Polo: Medium-Dark Skin Tone"
    }, {
        code: [0x1F93D, 0x1F3FF],
        groupID: 4,
        name: "Person Playing Water Polo: Dark Skin Tone"
    },*/ {
        code: [0x1F93D, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Playing Water Polo"
    }, /*{
        code: [0x1F93D, 0x1F3FB, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Playing Water Polo: Light Skin Tone"
    }, {
        code: [0x1F93D, 0x1F3FC, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Playing Water Polo: Medium-Light Skin Tone"
    }, {
        code: [0x1F93D, 0x1F3FD, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Playing Water Polo: Medium Skin Tone"
    }, {
        code: [0x1F93D, 0x1F3FE, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Playing Water Polo: Medium-Dark Skin Tone"
    }, {
        code: [0x1F93D, 0x1F3FF, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Playing Water Polo: Dark Skin Tone"
    },*/ {
        code: [0x1F93D, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Playing Water Polo"
    }, /*{
        code: [0x1F93D, 0x1F3FB, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Playing Water Polo: Light Skin Tone"
    }, {
        code: [0x1F93D, 0x1F3FC, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Playing Water Polo: Medium-Light Skin Tone"
    }, {
        code: [0x1F93D, 0x1F3FD, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Playing Water Polo: Medium Skin Tone"
    }, {
        code: [0x1F93D, 0x1F3FE, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Playing Water Polo: Medium-Dark Skin Tone"
    }, {
        code: [0x1F93D, 0x1F3FF, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Playing Water Polo: Dark Skin Tone"
    },*/ {
        code: [0x1F93E],
        groupID: 4,
        name: "Person Playing Handball"
    }, /*{
        code: [0x1F93E, 0x1F3FB],
        groupID: 4,
        name: "Person Playing Handball: Light Skin Tone"
    }, {
        code: [0x1F93E, 0x1F3FC],
        groupID: 4,
        name: "Person Playing Handball: Medium-Light Skin Tone"
    }, {
        code: [0x1F93E, 0x1F3FD],
        groupID: 4,
        name: "Person Playing Handball: Medium Skin Tone"
    }, {
        code: [0x1F93E, 0x1F3FE],
        groupID: 4,
        name: "Person Playing Handball: Medium-Dark Skin Tone"
    }, {
        code: [0x1F93E, 0x1F3FF],
        groupID: 4,
        name: "Person Playing Handball: Dark Skin Tone"
    },*/ {
        code: [0x1F93E, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Playing Handball"
    }, /*{
        code: [0x1F93E, 0x1F3FB, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Playing Handball: Light Skin Tone"
    }, {
        code: [0x1F93E, 0x1F3FC, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Playing Handball: Medium-Light Skin Tone"
    }, {
        code: [0x1F93E, 0x1F3FD, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Playing Handball: Medium Skin Tone"
    }, {
        code: [0x1F93E, 0x1F3FE, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Playing Handball: Medium-Dark Skin Tone"
    }, {
        code: [0x1F93E, 0x1F3FF, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Playing Handball: Dark Skin Tone"
    },*/ {
        code: [0x1F93E, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Playing Handball"
    }, /*{
        code: [0x1F93E, 0x1F3FB, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Playing Handball: Light Skin Tone"
    }, {
        code: [0x1F93E, 0x1F3FC, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Playing Handball: Medium-Light Skin Tone"
    }, {
        code: [0x1F93E, 0x1F3FD, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Playing Handball: Medium Skin Tone"
    }, {
        code: [0x1F93E, 0x1F3FE, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Playing Handball: Medium-Dark Skin Tone"
    }, {
        code: [0x1F93E, 0x1F3FF, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Playing Handball: Dark Skin Tone"
    },*/ {
        code: [0x1F939],
        groupID: 4,
        name: "Person Juggling"
    }, /*{
        code: [0x1F939, 0x1F3FB],
        groupID: 4,
        name: "Person Juggling: Light Skin Tone"
    }, {
        code: [0x1F939, 0x1F3FC],
        groupID: 4,
        name: "Person Juggling: Medium-Light Skin Tone"
    }, {
        code: [0x1F939, 0x1F3FD],
        groupID: 4,
        name: "Person Juggling: Medium Skin Tone"
    }, {
        code: [0x1F939, 0x1F3FE],
        groupID: 4,
        name: "Person Juggling: Medium-Dark Skin Tone"
    }, {
        code: [0x1F939, 0x1F3FF],
        groupID: 4,
        name: "Person Juggling: Dark Skin Tone"
    },*/ {
        code: [0x1F939, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Juggling"
    }, /*{
        code: [0x1F939, 0x1F3FB, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Juggling: Light Skin Tone"
    }, {
        code: [0x1F939, 0x1F3FC, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Juggling: Medium-Light Skin Tone"
    }, {
        code: [0x1F939, 0x1F3FD, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Juggling: Medium Skin Tone"
    }, {
        code: [0x1F939, 0x1F3FE, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Juggling: Medium-Dark Skin Tone"
    }, {
        code: [0x1F939, 0x1F3FF, 0x200D, 0x2642],
        groupID: 4,
        name: "Man Juggling: Dark Skin Tone"
    },*/ {
        code: [0x1F939, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Juggling"
    }, /*{
        code: [0x1F939, 0x1F3FB, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Juggling: Light Skin Tone"
    }, {
        code: [0x1F939, 0x1F3FC, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Juggling: Medium-Light Skin Tone"
    }, {
        code: [0x1F939, 0x1F3FD, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Juggling: Medium Skin Tone"
    }, {
        code: [0x1F939, 0x1F3FE, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Juggling: Medium-Dark Skin Tone"
    }, {
        code: [0x1F939, 0x1F3FF, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman Juggling: Dark Skin Tone"
    },*/ {
        code: [0x1F9D8],
        groupID: 4,
        name: "Person in Lotus Position"
    }, /*{
        code: [0x1F9D8, 0x1F3FB],
        groupID: 4,
        name: "Person in Lotus Position: Light Skin Tone"
    }, {
        code: [0x1F9D8, 0x1F3FC],
        groupID: 4,
        name: "Person in Lotus Position: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D8, 0x1F3FD],
        groupID: 4,
        name: "Person in Lotus Position: Medium Skin Tone"
    }, {
        code: [0x1F9D8, 0x1F3FE],
        groupID: 4,
        name: "Person in Lotus Position: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D8, 0x1F3FF],
        groupID: 4,
        name: "Person in Lotus Position: Dark Skin Tone"
    },*/ {
        code: [0x1F9D8, 0x200D, 0x2642],
        groupID: 4,
        name: "Man in Lotus Position"
    }, /*{
        code: [0x1F9D8, 0x1F3FB, 0x200D, 0x2642],
        groupID: 4,
        name: "Man in Lotus Position: Light Skin Tone"
    }, {
        code: [0x1F9D8, 0x1F3FC, 0x200D, 0x2642],
        groupID: 4,
        name: "Man in Lotus Position: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D8, 0x1F3FD, 0x200D, 0x2642],
        groupID: 4,
        name: "Man in Lotus Position: Medium Skin Tone"
    }, {
        code: [0x1F9D8, 0x1F3FE, 0x200D, 0x2642],
        groupID: 4,
        name: "Man in Lotus Position: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D8, 0x1F3FF, 0x200D, 0x2642],
        groupID: 4,
        name: "Man in Lotus Position: Dark Skin Tone"
    },*/ {
        code: [0x1F9D8, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman in Lotus Position"
    }, /*{
        code: [0x1F9D8, 0x1F3FB, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman in Lotus Position: Light Skin Tone"
    }, {
        code: [0x1F9D8, 0x1F3FC, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman in Lotus Position: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D8, 0x1F3FD, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman in Lotus Position: Medium Skin Tone"
    }, {
        code: [0x1F9D8, 0x1F3FE, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman in Lotus Position: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D8, 0x1F3FF, 0x200D, 0x2640],
        groupID: 4,
        name: "Woman in Lotus Position: Dark Skin Tone"
    },*/ {
        code: [0x1F46F, 0x200D, 0x2642],
        groupID: 1,
        name: "Men With Bunny Ears Partying"
    }, /*{
        code: [0x1F46F, 0x1F3FB, 0x200D, 0x2642],
        groupID: 1,
        name: "Men With Bunny Ears Partying, Type-1-2"
    }, {
        code: [0x1F46F, 0x1F3FC, 0x200D, 0x2642],
        groupID: 1,
        name: "Men With Bunny Ears Partying, Type-3"
    }, {
        code: [0x1F46F, 0x1F3FD, 0x200D, 0x2642],
        groupID: 1,
        name: "Men With Bunny Ears Partying, Type-4"
    }, {
        code: [0x1F46F, 0x1F3FE, 0x200D, 0x2642],
        groupID: 1,
        name: "Men With Bunny Ears Partying, Type-5"
    }, {
        code: [0x1F46F, 0x1F3FF, 0x200D, 0x2642],
        groupID: 1,
        name: "Men With Bunny Ears Partying, Type-6"
    },*/ {
        code: [0x1F46F, 0x200D, 0x2640],
        groupID: 1,
        name: "Women With Bunny Ears Partying"
    }, /*{
        code: [0x1F46F, 0x1F3FB, 0x200D, 0x2640],
        groupID: 1,
        name: "Women With Bunny Ears Partying, Type-1-2"
    }, {
        code: [0x1F46F, 0x1F3FC, 0x200D, 0x2640],
        groupID: 1,
        name: "Women With Bunny Ears Partying, Type-3"
    }, {
        code: [0x1F46F, 0x1F3FD, 0x200D, 0x2640],
        groupID: 1,
        name: "Women With Bunny Ears Partying, Type-4"
    }, {
        code: [0x1F46F, 0x1F3FE, 0x200D, 0x2640],
        groupID: 1,
        name: "Women With Bunny Ears Partying, Type-5"
    }, {
        code: [0x1F46F, 0x1F3FF, 0x200D, 0x2640],
        groupID: 1,
        name: "Women With Bunny Ears Partying, Type-6"
    },*/ {
        code: [0x1F6C0],
        groupID: 6,
        name: "Person Taking Bath"
    }, /*{
        code: [0x1F6C0, 0x1F3FB],
        groupID: 6,
        name: "Person Taking Bath: Light Skin Tone"
    }, {
        code: [0x1F6C0, 0x1F3FC],
        groupID: 6,
        name: "Person Taking Bath: Medium-Light Skin Tone"
    }, {
        code: [0x1F6C0, 0x1F3FD],
        groupID: 6,
        name: "Person Taking Bath: Medium Skin Tone"
    }, {
        code: [0x1F6C0, 0x1F3FE],
        groupID: 6,
        name: "Person Taking Bath: Medium-Dark Skin Tone"
    }, {
        code: [0x1F6C0, 0x1F3FF],
        groupID: 6,
        name: "Person Taking Bath: Dark Skin Tone"
    },*/ {
        code: [0x1F6CC],
        groupID: 6,
        name: "Person in Bed"
    }, /*{
        code: [0x1F6CC, 0x1F3FB],
        groupID: 6,
        name: "Person in Bed: Light Skin Tone"
    }, {
        code: [0x1F6CC, 0x1F3FC],
        groupID: 6,
        name: "Person in Bed: Medium-Light Skin Tone"
    }, {
        code: [0x1F6CC, 0x1F3FD],
        groupID: 6,
        name: "Person in Bed: Medium Skin Tone"
    }, {
        code: [0x1F6CC, 0x1F3FE],
        groupID: 6,
        name: "Person in Bed: Medium-Dark Skin Tone"
    }, {
        code: [0x1F6CC, 0x1F3FF],
        groupID: 6,
        name: "Person in Bed: Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x200D, 0x1F91D, 0x200D, 0x1F9D1],
        groupID: null,
        name: "People Holding Hands"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FB],
        groupID: null,
        name: "People Holding Hands: Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FC],
        groupID: null,
        name: "People Holding Hands: Light Skin Tone, Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FD],
        groupID: null,
        name: "People Holding Hands: Light Skin Tone, Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FE],
        groupID: null,
        name: "People Holding Hands: Light Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FF],
        groupID: null,
        name: "People Holding Hands: Light Skin Tone, Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FB],
        groupID: null,
        name: "People Holding Hands: Medium-Light Skin Tone, Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FC],
        groupID: null,
        name: "People Holding Hands: Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FD],
        groupID: null,
        name: "People Holding Hands: Medium-Light Skin Tone, Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FE],
        groupID: null,
        name: "People Holding Hands: Medium-Light Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FF],
        groupID: null,
        name: "People Holding Hands: Medium-Light Skin Tone, Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FB],
        groupID: null,
        name: "People Holding Hands: Medium Skin Tone, Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FC],
        groupID: null,
        name: "People Holding Hands: Medium Skin Tone, Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FD],
        groupID: null,
        name: "People Holding Hands: Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FE],
        groupID: null,
        name: "People Holding Hands: Medium Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FF],
        groupID: null,
        name: "People Holding Hands: Medium Skin Tone, Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FB],
        groupID: null,
        name: "People Holding Hands: Medium-Dark Skin Tone, Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FC],
        groupID: null,
        name: "People Holding Hands: Medium-Dark Skin Tone, Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FD],
        groupID: null,
        name: "People Holding Hands: Medium-Dark Skin Tone, Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FE],
        groupID: null,
        name: "People Holding Hands: Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FF],
        groupID: null,
        name: "People Holding Hands: Medium-Dark Skin Tone, Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FB],
        groupID: null,
        name: "People Holding Hands: Dark Skin Tone, Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FC],
        groupID: null,
        name: "People Holding Hands: Dark Skin Tone, Medium-Light Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FD],
        groupID: null,
        name: "People Holding Hands: Dark Skin Tone, Medium Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FE],
        groupID: null,
        name: "People Holding Hands: Dark Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: [0x1F9D1, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FF],
        groupID: null,
        name: "People Holding Hands: Dark Skin Tone"
    },*/ {
        code: [0x1F46D],
        groupID: 1,
        name: "Women Holding Hands"
    }, /*{
        code: [0x1F46D, 0x1F3FB],
        groupID: 1,
        name: "Women Holding Hands: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FC],
        groupID: 1,
        name: "Women Holding Hands: Light Skin Tone, Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FD],
        groupID: 1,
        name: "Women Holding Hands: Light Skin Tone, Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FE],
        groupID: 1,
        name: "Women Holding Hands: Light Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, "0x1F3FB", 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FF],
        groupID: 1,
        name: "Women Holding Hands: Light Skin Tone, Dark Skin Tone"
    }, {
        code: [0x1F46D, 0x1F3FC],
        groupID: 1,
        name: "Women Holding Hands: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FB],
        groupID: 1,
        name: "Women Holding Hands: Medium-Light Skin Tone, Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FD],
        groupID: 1,
        name: "Women Holding Hands: Medium-Light Skin Tone, Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FE],
        groupID: 1,
        name: "Women Holding Hands: Medium-Light Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FF],
        groupID: 1,
        name: "Women Holding Hands: Medium-Light Skin Tone, Dark Skin Tone"
    }, {
        code: [0x1F46D, 0x1F3FD],
        groupID: 1,
        name: "Women Holding Hands: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FB],
        groupID: 1,
        name: "Women Holding Hands: Medium Skin Tone, Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FC],
        groupID: 1,
        name: "Women Holding Hands: Medium Skin Tone, Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FE],
        groupID: 1,
        name: "Women Holding Hands: Medium Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FF],
        groupID: 1,
        name: "Women Holding Hands: Medium Skin Tone, Dark Skin Tone"
    }, {
        code: [0x1F46D, 0x1F3FE],
        groupID: 1,
        name: "Women Holding Hands: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FB],
        groupID: 1,
        name: "Women Holding Hands: Medium-Dark Skin Tone, Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FC],
        groupID: 1,
        name: "Women Holding Hands: Medium-Dark Skin Tone, Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FD],
        groupID: 1,
        name: "Women Holding Hands: Medium-Dark Skin Tone, Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FF],
        groupID: 1,
        name: "Women Holding Hands: Medium-Dark Skin Tone, Dark Skin Tone"
    }, {
        code: [0x1F46D, 0x1F3FF],
        groupID: 1,
        name: "Women Holding Hands: Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FB],
        groupID: 1,
        name: "Women Holding Hands: Dark Skin Tone, Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FC],
        groupID: 1,
        name: "Women Holding Hands: Dark Skin Tone, Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FD],
        groupID: 1,
        name: "Women Holding Hands: Dark Skin Tone, Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FE],
        groupID: 1,
        name: "Women Holding Hands: Dark Skin Tone, Medium-Dark Skin Tone"
    },*/ {
        code: [0x1F46B],
        groupID: 1,
        name: "Woman and Man Holding Hands"
    }, /*{
        code: [0x1F46B, 0x1F3FB],
        groupID: 1,
        name: "Woman and Man Holding Hands: Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FC],
        groupID: 1,
        name: "Woman and Man Holding Hands: Light Skin Tone, Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FD],
        groupID: 1,
        name: "Woman and Man Holding Hands: Light Skin Tone, Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FE],
        groupID: 1,
        name: "Woman and Man Holding Hands: Light Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FF],
        groupID: 1,
        name: "Woman and Man Holding Hands: Light Skin Tone, Dark Skin Tone"
    }, {
        code: [0x1F46B, 0x1F3FC],
        groupID: 1,
        name: "Woman and Man Holding Hands: Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FB],
        groupID: 1,
        name: "Woman and Man Holding Hands: Medium-Light Skin Tone, Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FD],
        groupID: 1,
        name: "Woman and Man Holding Hands: Medium-Light Skin Tone, Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FE],
        groupID: 1,
        name: "Woman and Man Holding Hands: Medium-Light Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FF],
        groupID: 1,
        name: "Woman and Man Holding Hands: Medium-Light Skin Tone, Dark Skin Tone"
    }, {
        code: [0x1F46B, 0x1F3FD],
        groupID: 1,
        name: "Woman and Man Holding Hands: Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FB],
        groupID: 1,
        name: "Woman and Man Holding Hands: Medium Skin Tone, Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FC],
        groupID: 1,
        name: "Woman and Man Holding Hands: Medium Skin Tone, Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FE],
        groupID: 1,
        name: "Woman and Man Holding Hands: Medium Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FF],
        groupID: 1,
        name: "Woman and Man Holding Hands: Medium Skin Tone, Dark Skin Tone"
    }, {
        code: [0x1F46B, 0x1F3FE],
        groupID: 1,
        name: "Woman and Man Holding Hands: Medium-Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FB],
        groupID: 1,
        name: "Woman and Man Holding Hands: Medium-Dark Skin Tone, Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FC],
        groupID: 1,
        name: "Woman and Man Holding Hands: Medium-Dark Skin Tone, Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FD],
        groupID: 1,
        name: "Woman and Man Holding Hands: Medium-Dark Skin Tone, Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FF],
        groupID: 1,
        name: "Woman and Man Holding Hands: Medium-Dark Skin Tone, Dark Skin Tone"
    }, {
        code: [0x1F46B, 0x1F3FF],
        groupID: 1,
        name: "Woman and Man Holding Hands: Dark Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FB],
        groupID: 1,
        name: "Woman and Man Holding Hands: Dark Skin Tone, Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FC],
        groupID: 1,
        name: "Woman and Man Holding Hands: Dark Skin Tone, Medium-Light Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FD],
        groupID: 1,
        name: "Woman and Man Holding Hands: Dark Skin Tone, Medium Skin Tone"
    }, {
        code: [0x1F469, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FE],
        groupID: 1,
        name: "Woman and Man Holding Hands: Dark Skin Tone, Medium-Dark Skin Tone"
    },*/ {
        code: [0x1F46C],
        groupID: 1,
        name: "Men Holding Hands"
    }, /*{
        code: [0x1F46C, 0x1F3FB],
        groupID: 1,
        name: "Men Holding Hands: Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FC],
        groupID: 1,
        name: "Men Holding Hands: Light Skin Tone, Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FD],
        groupID: 1,
        name: "Men Holding Hands: Light Skin Tone, Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FE],
        groupID: 1,
        name: "Men Holding Hands: Light Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FF],
        groupID: 1,
        name: "Men Holding Hands: Light Skin Tone, Dark Skin Tone"
    }, {
        code: [0x1F46C, 0x1F3FC],
        groupID: 1,
        name: "Men Holding Hands: Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FB],
        groupID: 1,
        name: "Men Holding Hands: Medium-Light Skin Tone, Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FD],
        groupID: 1,
        name: "Men Holding Hands: Medium-Light Skin Tone, Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FE],
        groupID: 1,
        name: "Men Holding Hands: Medium-Light Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FF],
        groupID: 1,
        name: "Men Holding Hands: Medium-Light Skin Tone, Dark Skin Tone"
    }, {
        code: [0x1F46C, 0x1F3FD],
        groupID: 1,
        name: "Men Holding Hands: Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FB],
        groupID: 1,
        name: "Men Holding Hands: Medium Skin Tone, Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FC],
        groupID: 1,
        name: "Men Holding Hands: Medium Skin Tone, Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FE],
        groupID: 1,
        name: "Men Holding Hands: Medium Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FF],
        groupID: 1,
        name: "Men Holding Hands: Medium Skin Tone, Dark Skin Tone"
    }, {
        code: [0x1F46C, 0x1F3FE],
        groupID: 1,
        name: "Men Holding Hands: Medium-Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FB],
        groupID: 1,
        name: "Men Holding Hands: Medium-Dark Skin Tone, Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FC],
        groupID: 1,
        name: "Men Holding Hands: Medium-Dark Skin Tone, Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FD],
        groupID: 1,
        name: "Men Holding Hands: Medium-Dark Skin Tone, Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FF],
        groupID: 1,
        name: "Men Holding Hands: Medium-Dark Skin Tone, Dark Skin Tone"
    }, {
        code: [0x1F46C, 0x1F3FF],
        groupID: 1,
        name: "Men Holding Hands: Dark Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FB],
        groupID: 1,
        name: "Men Holding Hands: Dark Skin Tone, Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FC],
        groupID: 1,
        name: "Men Holding Hands: Dark Skin Tone, Medium-Light Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FD],
        groupID: 1,
        name: "Men Holding Hands: Dark Skin Tone, Medium Skin Tone"
    }, {
        code: [0x1F468, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FE],
        groupID: 1,
        name: "Men Holding Hands: Dark Skin Tone, Medium-Dark Skin Tone"
    },*/ {
        code: [0x1F48F],
        groupID: 1,
        name: "Kiss"
    }, {
        code: [0x1F469, 0x200D, 0x2764, 0x200D, 0x1F48B, 0x200D, 0x1F468],
        groupID: 1,
        name: "Kiss: Woman, Man"
    }, {
        code: [0x1F468, 0x200D, 0x2764, 0x200D, 0x1F48B, 0x200D, 0x1F468],
        groupID: 1,
        name: "Kiss: Man, Man"
    }, {
        code: [0x1F469, 0x200D, 0x2764, 0x200D, 0x1F48B, 0x200D, 0x1F469],
        groupID: 1,
        name: "Kiss: Woman, Woman"
    }, {
        code: [0x1F491],
        groupID: 1,
        name: "Couple With Heart"
    }, {
        code: [0x1F469, 0x200D, 0x2764, 0x200D, 0x1F468],
        groupID: 1,
        name: "Couple With Heart: Woman, Man"
    }, {
        code: [0x1F468, 0x200D, 0x2764, 0x200D, 0x1F468],
        groupID: 1,
        name: "Couple With Heart: Man, Man"
    }, {
        code: [0x1F469, 0x200D, 0x2764, 0x200D, 0x1F469],
        groupID: 1,
        name: "Couple With Heart: Woman, Woman"
    }, /*{
        code: [0x1F46A],
        groupID: null,
        name: "Family"
    },*/ {
        code: [0x1F468, 0x200D, 0x1F469, 0x200D, 0x1F466],
        groupID: 1,
        name: "Family: Man, Woman, Boy"
    }, {
        code: [0x1F468, 0x200D, 0x1F469, 0x200D, 0x1F467],
        groupID: 1,
        name: "Family: Man, Woman, Girl"
    }, {
        code: [0x1F468, 0x200D, 0x1F469, 0x200D, 0x1F467, 0x200D, 0x1F466],
        groupID: 1,
        name: "Family: Man, Woman, Girl, Boy"
    }, {
        code: [0x1F468, 0x200D, 0x1F469, 0x200D, 0x1F466, 0x200D, 0x1F466],
        groupID: 1,
        name: "Family: Man, Woman, Boy, Boy"
    }, {
        code: [0x1F468, 0x200D, 0x1F469, 0x200D, 0x1F467, 0x200D, 0x1F467],
        groupID: 1,
        name: "Family: Man, Woman, Girl, Girl"
    }, {
        code: [0x1F468, 0x200D, 0x1F468, 0x200D, 0x1F466],
        groupID: 1,
        name: "Family: Man, Man, Boy"
    }, {
        code: [0x1F468, 0x200D, 0x1F468, 0x200D, 0x1F467],
        groupID: 1,
        name: "Family: Man, Man, Girl"
    }, {
        code: [0x1F468, 0x200D, 0x1F468, 0x200D, 0x1F467, 0x200D, 0x1F466],
        groupID: 1,
        name: "Family: Man, Man, Girl, Boy"
    }, {
        code: [0x1F468, 0x200D, 0x1F468, 0x200D, 0x1F466, 0x200D, 0x1F466],
        groupID: 1,
        name: "Family: Man, Man, Boy, Boy"
    }, {
        code: [0x1F468, 0x200D, 0x1F468, 0x200D, 0x1F467, 0x200D, 0x1F467],
        groupID: 1,
        name: "Family: Man, Man, Girl, Girl"
    }, {
        code: [0x1F469, 0x200D, 0x1F469, 0x200D, 0x1F466],
        groupID: 1,
        name: "Family: Woman, Woman, Boy"
    }, {
        code: [0x1F469, 0x200D, 0x1F469, 0x200D, 0x1F467],
        groupID: 1,
        name: "Family: Woman, Woman, Girl"
    }, {
        code: [0x1F469, 0x200D, 0x1F469, 0x200D, 0x1F467, 0x200D, 0x1F466],
        groupID: 1,
        name: "Family: Woman, Woman, Girl, Boy"
    }, {
        code: [0x1F469, 0x200D, 0x1F469, 0x200D, 0x1F466, 0x200D, 0x1F466],
        groupID: 1,
        name: "Family: Woman, Woman, Boy, Boy"
    }, {
        code: [0x1F469, 0x200D, 0x1F469, 0x200D, 0x1F467, 0x200D, 0x1F467],
        groupID: 1,
        name: "Family: Woman, Woman, Girl, Girl"
    }, {
        code: [0x1F468, 0x200D, 0x1F466],
        groupID: 1,
        name: "Family: Man, Boy"
    }, {
        code: [0x1F468, 0x200D, 0x1F466, 0x200D, 0x1F466],
        groupID: 1,
        name: "Family: Man, Boy, Boy"
    }, {
        code: [0x1F468, 0x200D, 0x1F467],
        groupID: 1,
        name: "Family: Man, Girl"
    }, {
        code: [0x1F468, 0x200D, 0x1F467, 0x200D, 0x1F466],
        groupID: 1,
        name: "Family: Man, Girl, Boy"
    }, {
        code: [0x1F468, 0x200D, 0x1F467, 0x200D, 0x1F467],
        groupID: 1,
        name: "Family: Man, Girl, Girl"
    }, {
        code: [0x1F469, 0x200D, 0x1F466],
        groupID: 1,
        name: "Family: Woman, Boy"
    }, {
        code: [0x1F469, 0x200D, 0x1F466, 0x200D, 0x1F466],
        groupID: 1,
        name: "Family: Woman, Boy, Boy"
    }, {
        code: [0x1F469, 0x200D, 0x1F467],
        groupID: 1,
        name: "Family: Woman, Girl"
    }, {
        code: [0x1F469, 0x200D, 0x1F467, 0x200D, 0x1F466],
        groupID: 1,
        name: "Family: Woman, Girl, Boy"
    }, {
        code: [0x1F469, 0x200D, 0x1F467, 0x200D, 0x1F467],
        groupID: 1,
        name: "Family: Woman, Girl, Girl"
    }, {
        code: [0x1F5E3],
        groupID: 1,
        name: "Speaking Head"
    }, {
        code: [0x1F464],
        groupID: 5,
        name: "Bust in Silhouette"
    }, {
        code: [0x1F465],
        groupID: 5,
        name: "Busts in Silhouette"
    }, {
        code: [0x1F463],
        groupID: 1,
        name: "Footprints"
    }, /*{
        code: [0x1F3FB],
        groupID: null,
        name: "Light Skin Tone"
    }, {
        code: [0x1F3FC],
        groupID: null,
        name: "Medium-Light Skin Tone"
    }, {
        code: [0x1F3FD],
        groupID: null,
        name: "Medium Skin Tone"
    }, {
        code: [0x1F3FE],
        groupID: null,
        name: "Medium-Dark Skin Tone"
    }, {
        code: [0x1F3FF],
        groupID: null,
        name: "Dark Skin Tone"
    }, {
        code: [0x1F9B0],
        groupID: null,
        name: "Red Hair"
    }, {
        code: [0x1F9B1],
        groupID: null,
        name: "Curly Hair"
    }, {
        code: [0x1F9B3],
        groupID: null,
        name: "White Hair"
    }, {
        code: [0x1F9B2],
        groupID: null,
        name: "Bald"
    },*/ {
        code: [0x1F435],
        groupID: 2,
        name: "Monkey Face"
    }, {
        code: [0x1F412],
        groupID: 2,
        name: "Monkey"
    }, {
        code: [0x1F98D],
        groupID: 2,
        name: "Gorilla"
    }, /*{
        code: [0x1F9A7],
        groupID: null,
        name: "Orangutan"
    },*/ {
        code: [0x1F436],
        groupID: 2,
        name: "Dog Face"
    }, {
        code: [0x1F415],
        groupID: 2,
        name: "Dog"
    }, /*{
        code: [0x1F9AE],
        groupID: 2,
        name: "Guide Dog"
    }, {
        code: [0x1F415, 0x200D, 0x1F9BA],
        groupID: 2,
        name: "Service Dog"
    },*/ {
        code: [0x1F429],
        groupID: 2,
        name: "Poodle"
    }, {
        code: [0x1F43A],
        groupID: 2,
        name: "Wolf"
    }, {
        code: [0x1F98A],
        groupID: 2,
        name: "Fox"
    }, {
        code: [0x1F99D],
        groupID: 2,
        name: "Raccoon"
    }, {
        code: [0x1F431],
        groupID: 2,
        name: "Cat Face"
    }, {
        code: [0x1F408],
        groupID: 2,
        name: "Cat"
    }, {
        code: [0x1F981],
        groupID: 2,
        name: "Lion"
    }, {
        code: [0x1F42F],
        groupID: 2,
        name: "Tiger Face"
    }, {
        code: [0x1F405],
        groupID: 2,
        name: "Tiger"
    }, {
        code: [0x1F406],
        groupID: 7,
        name: "Leopard"
    }, {
        code: [0x1F434],
        groupID: 2,
        name: "Horse Face"
    }, {
        code: [0x1F40E],
        groupID: 2,
        name: "Horse"
    }, {
        code: [0x1F984],
        groupID: 2,
        name: "Unicorn"
    }, {
        code: [0x1F993],
        groupID: 2,
        name: "Zebra"
    }, {
        code: [0x1F98C],
        groupID: 2,
        name: "Deer"
    }, {
        code: [0x1F42E],
        groupID: 2,
        name: "Cow Face"
    }, {
        code: [0x1F402],
        groupID: 2,
        name: "Ox"
    }, {
        code: [0x1F403],
        groupID: 2,
        name: "Water Buffalo"
    }, {
        code: [0x1F404],
        groupID: 2,
        name: "Cow"
    }, {
        code: [0x1F437],
        groupID: 2,
        name: "Pig Face"
    }, {
        code: [0x1F416],
        groupID: 2,
        name: "Pig"
    }, {
        code: [0x1F417],
        groupID: 2,
        name: "Boar"
    }, {
        code: [0x1F43D],
        groupID: 2,
        name: "Pig Nose"
    }, {
        code: [0x1F40F],
        groupID: 2,
        name: "Ram"
    }, {
        code: [0x1F411],
        groupID: 2,
        name: "Ewe"
    }, {
        code: [0x1F410],
        groupID: 2,
        name: "Goat"
    }, {
        code: [0x1F42A],
        groupID: 2,
        name: "Camel"
    }, {
        code: [0x1F42B],
        groupID: 2,
        name: "Two-Hump Camel"
    }, {
        code: [0x1F999],
        groupID: 2,
        name: "Llama"
    }, {
        code: [0x1F992],
        groupID: 2,
        name: "Giraffe"
    }, {
        code: [0x1F418],
        groupID: 2,
        name: "Elephant"
    }, {
        code: [0x1F98F],
        groupID: 2,
        name: "Rhinoceros"
    }, {
        code: [0x1F99B],
        groupID: 2,
        name: "Hippopotamus"
    }, {
        code: [0x1F42D],
        groupID: 2,
        name: "Mouse Face"
    }, {
        code: [0x1F401],
        groupID: 2,
        name: "Mouse"
    }, {
        code: [0x1F400],
        groupID: 2,
        name: "Rat"
    }, {
        code: [0x1F439],
        groupID: 2,
        name: "Hamster"
    }, {
        code: [0x1F430],
        groupID: 2,
        name: "Rabbit Face"
    }, {
        code: [0x1F407],
        groupID: 2,
        name: "Rabbit"
    }, {
        code: [0x1F43F],
        groupID: 2,
        name: "Chipmunk"
    }, {
        code: [0x1F994],
        groupID: 2,
        name: "Hedgehog"
    }, {
        code: [0x1F987],
        groupID: 2,
        name: "Bat"
    }, {
        code: [0x1F43B],
        groupID: 2,
        name: "Bear"
    }, {
        code: [0x1F428],
        groupID: 2,
        name: "Koala"
    }, {
        code: [0x1F43C],
        groupID: 2,
        name: "Panda"
    }, /*{
        code: [0x1F9A5],
        groupID: null,
        name: "Sloth"
    }, {
        code: [0x1F9A6],
        groupID: null,
        name: "Otter"
    }, {
        code: [0x1F9A8],
        groupID: null,
        name: "Skunk"
    },*/ {
        code: [0x1F998],
        groupID: 2,
        name: "Kangaroo"
    }, {
        code: [0x1F9A1],
        groupID: 2,
        name: "Badger"
    }, {
        code: [0x1F43E],
        groupID: 2,
        name: "Paw Prints"
    }, {
        code: [0x1F983],
        groupID: 2,
        name: "Turkey"
    }, {
        code: [0x1F414],
        groupID: 2,
        name: "Chicken"
    }, {
        code: [0x1F413],
        groupID: 2,
        name: "Rooster"
    }, {
        code: [0x1F423],
        groupID: 2,
        name: "Hatching Chick"
    }, {
        code: [0x1F424],
        groupID: 2,
        name: "Baby Chick"
    }, {
        code: [0x1F425],
        groupID: 2,
        name: "Front-Facing Baby Chick"
    }, {
        code: [0x1F426],
        groupID: 2,
        name: "Bird"
    }, {
        code: [0x1F427],
        groupID: 6,
        name: "Penguin"
    }, {
        code: [0x1F54A],
        groupID: 2,
        name: "Dove"
    }, {
        code: [0x1F985],
        groupID: 2,
        name: "Eagle"
    }, {
        code: [0x1F986],
        groupID: 2,
        name: "Duck"
    }, {
        code: [0x1F9A2],
        groupID: 2,
        name: "Swan"
    }, {
        code: [0x1F989],
        groupID: 2,
        name: "Owl"
    }, /*{
        code: [0x1F9A9],
        groupID: null,
        name: "Flamingo"
    },*/ {
        code: [0x1F99A],
        groupID: 2,
        name: "Peacock"
    }, {
        code: [0x1F99C],
        groupID: 2,
        name: "Parrot"
    }, {
        code: [0x1F438],
        groupID: 2,
        name: "Frog"
    }, {
        code: [0x1F40A],
        groupID: 2,
        name: "Crocodile"
    }, {
        code: [0x1F422],
        groupID: 2,
        name: "Turtle"
    }, {
        code: [0x1F98E],
        groupID: 2,
        name: "Lizard"
    }, {
        code: [0x1F40D],
        groupID: 2,
        name: "Snake"
    }, {
        code: [0x1F432],
        groupID: 2,
        name: "Dragon Face"
    }, {
        code: [0x1F409],
        groupID: 2,
        name: "Dragon"
    }, {
        code: [0x1F995],
        groupID: 2,
        name: "Sauropod"
    }, {
        code: [0x1F996],
        groupID: 2,
        name: "T-Rex"
    }, {
        code: [0x1F433],
        groupID: 2,
        name: "Spouting Whale"
    }, {
        code: [0x1F40B],
        groupID: 2,
        name: "Whale"
    }, {
        code: [0x1F42C],
        groupID: 2,
        name: "Dolphin"
    }, {
        code: [0x1F41F],
        groupID: 2,
        name: "Fish"
    }, {
        code: [0x1F420],
        groupID: 2,
        name: "Tropical Fish"
    }, {
        code: [0x1F421],
        groupID: 2,
        name: "Blowfish"
    }, {
        code: [0x1F988],
        groupID: 2,
        name: "Shark"
    }, {
        code: [0x1F419],
        groupID: 2,
        name: "Octopus"
    }, {
        code: [0x1F41A],
        groupID: 2,
        name: "Spiral Shell"
    }, {
        code: [0x1F40C],
        groupID: 2,
        name: "Snail"
    }, {
        code: [0x1F98B],
        groupID: 2,
        name: "Butterfly"
    }, {
        code: [0x1F41B],
        groupID: 2,
        name: "Bug"
    }, {
        code: [0x1F41C],
        groupID: 2,
        name: "Ant"
    }, {
        code: [0x1F41D],
        groupID: 2,
        name: "Honeybee"
    }, {
        code: [0x1F41E],
        groupID: 2,
        name: "Lady Beetle"
    }, {
        code: [0x1F997],
        groupID: 2,
        name: "Cricket"
    }, {
        code: [0x1F577],
        groupID: 2,
        name: "Spider"
    }, {
        code: [0x1F578],
        groupID: 2,
        name: "Spider Web"
    }, {
        code: [0x1F982],
        groupID: 7,
        name: "Scorpion"
    }, {
        code: [0x1F99F],
        groupID: 2,
        name: "Mosquito"
    }, {
        code: [0x1F9A0],
        groupID: 2,
        name: "Microbe"
    }, {
        code: [0x1F490],
        groupID: 2,
        name: "Bouquet"
    }, {
        code: [0x1F338],
        groupID: 2,
        name: "Cherry Blossom"
    }, {
        code: [0x1F4AE],
        groupID: 7,
        name: "White Flower"
    }, {
        code: [0x1F3F5],
        groupID: 2,
        name: "Rosette"
    }, {
        code: [0x1F339],
        groupID: 2,
        name: "Rose"
    }, {
        code: [0x1F940],
        groupID: 2,
        name: "Wilted Flower"
    }, {
        code: [0x1F33A],
        groupID: 2,
        name: "Hibiscus"
    }, {
        code: [0x1F33B],
        groupID: 2,
        name: "Sunflower"
    }, {
        code: [0x1F33C],
        groupID: 2,
        name: "Blossom"
    }, {
        code: [0x1F337],
        groupID: 2,
        name: "Tulip"
    }, {
        code: [0x1F331],
        groupID: 2,
        name: "Seedling"
    }, {
        code: [0x1F332],
        groupID: 2,
        name: "Evergreen Tree"
    }, {
        code: [0x1F333],
        groupID: 2,
        name: "Deciduous Tree"
    }, {
        code: [0x1F334],
        groupID: 2,
        name: "Palm Tree"
    }, {
        code: [0x1F335],
        groupID: 2,
        name: "Cactus"
    }, {
        code: [0x1F33E],
        groupID: 2,
        name: "Sheaf of Rice"
    }, {
        code: [0x1F33F],
        groupID: 2,
        name: "Herb"
    }, {
        code: [0x2618],
        groupID: 2,
        name: "Shamrock"
    }, {
        code: [0x1F340],
        groupID: 2,
        name: "Four Leaf Clover"
    }, {
        code: [0x1F341],
        groupID: 2,
        name: "Maple Leaf"
    }, {
        code: [0x1F342],
        groupID: 2,
        name: "Fallen Leaf"
    }, {
        code: [0x1F343],
        groupID: 2,
        name: "Leaf Fluttering in Wind"
    }, {
        code: [0x1F347],
        groupID: 3,
        name: "Grapes"
    }, {
        code: [0x1F348],
        groupID: 3,
        name: "Melon"
    }, {
        code: [0x1F349],
        groupID: 3,
        name: "Watermelon"
    }, {
        code: [0x1F34A],
        groupID: 3,
        name: "Tangerine"
    }, {
        code: [0x1F34B],
        groupID: 3,
        name: "Lemon"
    }, {
        code: [0x1F34C],
        groupID: 3,
        name: "Banana"
    }, {
        code: [0x1F34D],
        groupID: 3,
        name: "Pineapple"
    }, {
        code: [0x1F96D],
        groupID: 3,
        name: "Mango"
    }, {
        code: [0x1F34E],
        groupID: 3,
        name: "Red Apple"
    }, {
        code: [0x1F34F],
        groupID: 3,
        name: "Green Apple"
    }, {
        code: [0x1F350],
        groupID: 3,
        name: "Pear"
    }, {
        code: [0x1F351],
        groupID: 3,
        name: "Peach"
    }, {
        code: [0x1F352],
        groupID: 3,
        name: "Cherries"
    }, {
        code: [0x1F353],
        groupID: 3,
        name: "Strawberry"
    }, {
        code: [0x1F95D],
        groupID: 3,
        name: "Kiwi Fruit"
    }, {
        code: [0x1F345],
        groupID: 3,
        name: "Tomato"
    }, {
        code: [0x1F965],
        groupID: 3,
        name: "Coconut"
    }, {
        code: [0x1F951],
        groupID: 3,
        name: "Avocado"
    }, {
        code: [0x1F346],
        groupID: 3,
        name: "Eggplant"
    }, {
        code: [0x1F954],
        groupID: 3,
        name: "Potato"
    }, {
        code: [0x1F955],
        groupID: 3,
        name: "Carrot"
    }, {
        code: [0x1F33D],
        groupID: 3,
        name: "Ear of Corn"
    }, {
        code: [0x1F336],
        groupID: 3,
        name: "Hot Pepper"
    }, {
        code: [0x1F952],
        groupID: 3,
        name: "Cucumber"
    }, {
        code: [0x1F96C],
        groupID: 3,
        name: "Leafy Green"
    }, {
        code: [0x1F966],
        groupID: 3,
        name: "Broccoli"
    }, /*{
        code: [0x1F9C4],
        groupID: null,
        name: "Garlic"
    }, {
        code: [0x1F9C5],
        groupID: null,
        name: "Onion"
    },*/ {
        code: [0x1F344],
        groupID: 3,
        name: "Mushroom"
    }, {
        code: [0x1F95C],
        groupID: 3,
        name: "Peanuts"
    }, {
        code: [0x1F330],
        groupID: 3,
        name: "Chestnut"
    }, {
        code: [0x1F35E],
        groupID: 3,
        name: "Bread"
    }, {
        code: [0x1F950],
        groupID: 3,
        name: "Croissant"
    }, {
        code: [0x1F956],
        groupID: 3,
        name: "Baguette Bread"
    }, {
        code: [0x1F968],
        groupID: 3,
        name: "Pretzel"
    }, {
        code: [0x1F96F],
        groupID: 3,
        name: "Bagel"
    }, {
        code: [0x1F95E],
        groupID: 3,
        name: "Pancakes"
    }, /*{
        code: [0x1F9C7],
        groupID: null,
        name: "Waffle"
    },*/ {
        code: [0x1F9C0],
        groupID: 3,
        name: "Cheese Wedge"
    }, {
        code: [0x1F356],
        groupID: 3,
        name: "Meat on Bone"
    }, {
        code: [0x1F357],
        groupID: 3,
        name: "Poultry Leg"
    }, {
        code: [0x1F969],
        groupID: 3,
        name: "Cut of Meat"
    }, {
        code: [0x1F953],
        groupID: 3,
        name: "Bacon"
    }, {
        code: [0x1F354],
        groupID: 3,
        name: "Hamburger"
    }, {
        code: [0x1F35F],
        groupID: 3,
        name: "French Fries"
    }, {
        code: [0x1F355],
        groupID: 3,
        name: "Pizza"
    }, {
        code: [0x1F32D],
        groupID: 3,
        name: "Hot Dog"
    }, {
        code: [0x1F96A],
        groupID: 3,
        name: "Sandwich"
    }, {
        code: [0x1F32E],
        groupID: 3,
        name: "Taco"
    }, {
        code: [0x1F32F],
        groupID: 3,
        name: "Burrito"
    }, {
        code: [0x1F959],
        groupID: 3,
        name: "Stuffed Flatbread"
    }, /*{
        code: [0x1F9C6],
        groupID: null,
        name: "Falafel"
    }, {
        code: [0x1F95A],
        groupID: null,
        name: "Egg"
    },*/ {
        code: [0x1F373],
        groupID: 3,
        name: "Cooking"
    }, {
        code: [0x1F958],
        groupID: 3,
        name: "Shallow Pan of Food"
    }, {
        code: [0x1F372],
        groupID: 3,
        name: "Pot of Food"
    }, {
        code: [0x1F963],
        groupID: 3,
        name: "Bowl With Spoon"
    }, {
        code: [0x1F957],
        groupID: 3,
        name: "Green Salad"
    }, {
        code: [0x1F37F],
        groupID: 3,
        name: "Popcorn"
    }, /*{
        code: [0x1F9C8],
        groupID: null,
        name: "Butter"
    },*/ {
        code: [0x1F9C2],
        groupID: 3,
        name: "Salt"
    }, {
        code: [0x1F96B],
        groupID: 3,
        name: "Canned Food"
    }, {
        code: [0x1F371],
        groupID: 3,
        name: "Bento Box"
    }, {
        code: [0x1F358],
        groupID: 3,
        name: "Rice Cracker"
    }, {
        code: [0x1F359],
        groupID: 3,
        name: "Rice Ball"
    }, {
        code: [0x1F35A],
        groupID: 3,
        name: "Cooked Rice"
    }, {
        code: [0x1F35B],
        groupID: 3,
        name: "Curry Rice"
    }, {
        code: [0x1F35C],
        groupID: 3,
        name: "Steaming Bowl"
    }, {
        code: [0x1F35D],
        groupID: 3,
        name: "Spaghetti"
    }, {
        code: [0x1F360],
        groupID: 3,
        name: "Roasted Sweet Potato"
    }, {
        code: [0x1F362],
        groupID: 3,
        name: "Oden"
    }, {
        code: [0x1F363],
        groupID: 3,
        name: "Sushi"
    }, {
        code: [0x1F364],
        groupID: 3,
        name: "Fried Shrimp"
    }, {
        code: [0x1F365],
        groupID: 3,
        name: "Fish Cake With Swirl"
    }, {
        code: [0x1F96E],
        groupID: 3,
        name: "Moon Cake"
    }, {
        code: [0x1F361],
        groupID: 3,
        name: "Dango"
    }, {
        code: [0x1F95F],
        groupID: 3,
        name: "Dumpling"
    }, {
        code: [0x1F960],
        groupID: 3,
        name: "Fortune Cookie"
    }, {
        code: [0x1F961],
        groupID: 3,
        name: "Takeout Box"
    }, {
        code: [0x1F980],
        groupID: 2,
        name: "Crab"
    }, {
        code: [0x1F99E],
        groupID: 2,
        name: "Lobster"
    }, {
        code: [0x1F990],
        groupID: 2,
        name: "Shrimp"
    }, {
        code: [0x1F991],
        groupID: 2,
        name: "Squid"
    }, /*{
        code: [0x1F93C],
        groupID: null,
        name: "Wrestlers"
    }, {
        code: [0x1F93C, 0x1F3FB],
        groupID: null,
        name: "Wrestlers, Type-1-2"
    }, {
        code: [0x1F93C, 0x1F3FC],
        groupID: null,
        name: "Wrestlers, Type-3"
    }, {
        code: [0x1F93C, 0x1F3FD],
        groupID: null,
        name: "Wrestlers, Type-4"
    }, {
        code: [0x1F93C, 0x1F3FE],
        groupID: null,
        name: "Wrestlers, Type-5"
    }, {
        code: [0x1F93C, 0x1F3FF],
        groupID: null,
        name: "Wrestlers, Type-6"
    }, {
        code: [0x1F9AA],
        groupID: null,
        name: "Oyster"
    },*/ {
        code: [0x1F366],
        groupID: 3,
        name: "Soft Ice Cream"
    }, {
        code: [0x1F367],
        groupID: 3,
        name: "Shaved Ice"
    }, {
        code: [0x1F368],
        groupID: 3,
        name: "Ice Cream"
    }, {
        code: [0x1F369],
        groupID: 3,
        name: "Doughnut"
    }, {
        code: [0x1F36A],
        groupID: 3,
        name: "Cookie"
    }, {
        code: [0x1F382],
        groupID: 3,
        name: "Birthday Cake"
    }, {
        code: [0x1F370],
        groupID: 3,
        name: "Shortcake"
    }, {
        code: [0x1F9C1],
        groupID: 3,
        name: "Cupcake"
    }, {
        code: [0x1F967],
        groupID: 3,
        name: "Pie"
    }, {
        code: [0x1F36B],
        groupID: 3,
        name: "Chocolate Bar"
    }, {
        code: [0x1F36C],
        groupID: 3,
        name: "Candy"
    }, {
        code: [0x1F36D],
        groupID: 3,
        name: "Lollipop"
    }, {
        code: [0x1F36E],
        groupID: 3,
        name: "Custard"
    }, {
        code: [0x1F36F],
        groupID: 3,
        name: "Honey Pot"
    }, {
        code: [0x1F37C],
        groupID: 3,
        name: "Baby Bottle"
    }, {
        code: [0x1F95B],
        groupID: 3,
        name: "Glass of Milk"
    }, {
        code: [0x2615],
        groupID: 3,
        name: "Hot Beverage"
    }, {
        code: [0x1F375],
        groupID: 3,
        name: "Teacup Without Handle"
    }, {
        code: [0x1F376],
        groupID: 3,
        name: "Sake"
    }, {
        code: [0x1F37E],
        groupID: 3,
        name: "Bottle With Popping Cork"
    }, {
        code: [0x1F377],
        groupID: 3,
        name: "Wine Glass"
    }, {
        code: [0x1F378],
        groupID: 3,
        name: "Cocktail Glass"
    }, {
        code: [0x1F379],
        groupID: 3,
        name: "Tropical Drink"
    }, {
        code: [0x1F37A],
        groupID: 3,
        name: "Beer Mug"
    }, {
        code: [0x1F37B],
        groupID: 3,
        name: "Clinking Beer Mugs"
    }, {
        code: [0x1F942],
        groupID: 3,
        name: "Clinking Glasses"
    }, {
        code: [0x1F943],
        groupID: 3,
        name: "Tumbler Glass"
    }, {
        code: [0x1F964],
        groupID: 3,
        name: "Cup With Straw"
    }, /*{
        code: [0x1F9C3],
        groupID: null,
        name: "Beverage Box"
    }, {
        code: [0x1F9C9],
        groupID: null,
        name: "Mate"
    }, {
        code: [0x1F9CA],
        groupID: null,
        name: "Ice"
    },*/ {
        code: [0x1F962],
        groupID: 3,
        name: "Chopsticks"
    }, {
        code: [0x1F37D],
        groupID: 3,
        name: "Fork and Knife With Plate"
    }, {
        code: [0x1F374],
        groupID: 3,
        name: "Fork and Knife"
    }, /*{
        code: [0x1F944],
        groupID: null,
        name: "Spoon"
    },*/ {
        code: [0x1F52A],
        groupID: 6,
        name: "Kitchen Knife"
    }, {
        code: [0x1F3FA],
        groupID: 6,
        name: "Amphora"
    }, {
        code: [0x1F30D],
        groupID: 2,
        name: "Globe Showing Europe-Africa"
    }, {
        code: [0x1F30E],
        groupID: 2,
        name: "Globe Showing Americas"
    }, {
        code: [0x1F30F],
        groupID: 2,
        name: "Globe Showing Asia-Australia"
    }, {
        code: [0x1F310],
        groupID: 2,
        name: "Globe With Meridians"
    }, {
        code: [0x1F5FA],
        groupID: 6,
        name: "World Map"
    }, {
        code: [0x1F5FE],
        groupID: 5,
        name: "Map of Japan"
    }, {
        code: [0x1F9ED],
        groupID: 6,
        name: "Compass"
    }, {
        code: [0x1F3D4],
        groupID: 5,
        name: "Snow-Capped Mountain"
    }, {
        code: [0x26F0],
        groupID: 5,
        name: "Mountain"
    }, {
        code: [0x1F30B],
        groupID: 5,
        name: "Volcano"
    }, {
        code: [0x1F5FB],
        groupID: 5,
        name: "Mount Fuji"
    }, {
        code: [0x1F3D5],
        groupID: 5,
        name: "Camping"
    }, {
        code: [0x1F3D6],
        groupID: 5,
        name: "Beach With Umbrella"
    }, {
        code: [0x1F3DC],
        groupID: 5,
        name: "Desert"
    }, {
        code: [0x1F3DD],
        groupID: 5,
        name: "Desert Island"
    }, {
        code: [0x1F3DE],
        groupID: 5,
        name: "National Park"
    }, {
        code: [0x1F3DF],
        groupID: 5,
        name: "Stadium"
    }, {
        code: [0x1F3DB],
        groupID: 5,
        name: "Classical Building"
    }, {
        code: [0x1F3D7],
        groupID: 5,
        name: "Building Construction"
    }, {
        code: [0x1F9F1],
        groupID: 6,
        name: "Brick"
    }, {
        code: [0x1F3D8],
        groupID: 5,
        name: "Houses"
    }, {
        code: [0x1F3DA],
        groupID: 5,
        name: "Derelict House"
    }, {
        code: [0x1F3E0],
        groupID: 5,
        name: "House"
    }, {
        code: [0x1F3E1],
        groupID: 5,
        name: "House With Garden"
    }, {
        code: [0x1F3E2],
        groupID: 5,
        name: "Office Building"
    }, {
        code: [0x1F3E3],
        groupID: 5,
        name: "Japanese Post Office"
    }, {
        code: [0x1F3E4],
        groupID: 5,
        name: "Post Office"
    }, {
        code: [0x1F3E5],
        groupID: 5,
        name: "Hospital"
    }, {
        code: [0x1F3E6],
        groupID: 5,
        name: "Bank"
    }, {
        code: [0x1F3E8],
        groupID: 5,
        name: "Hotel"
    }, {
        code: [0x1F3E9],
        groupID: 5,
        name: "Love Hotel"
    }, {
        code: [0x1F3EA],
        groupID: 5,
        name: "Convenience Store"
    }, {
        code: [0x1F3EB],
        groupID: 5,
        name: "School"
    }, {
        code: [0x1F3EC],
        groupID: 5,
        name: "Department Store"
    }, {
        code: [0x1F3ED],
        groupID: 5,
        name: "Factory"
    }, {
        code: [0x1F3EF],
        groupID: 5,
        name: "Japanese Castle"
    }, {
        code: [0x1F3F0],
        groupID: 5,
        name: "Castle"
    }, {
        code: [0x1F492],
        groupID: 5,
        name: "Wedding"
    }, {
        code: [0x1F5FC],
        groupID: 5,
        name: "Tokyo Tower"
    }, {
        code: [0x1F5FD],
        groupID: 5,
        name: "Statue of Liberty"
    }, {
        code: [0x26EA],
        groupID: 5,
        name: "Church"
    }, {
        code: [0x1F54C],
        groupID: 5,
        name: "Mosque"
    }, /*{
        code: [0x1F6D5],
        groupID: null,
        name: "Hindu Temple"
    },*/ {
        code: [0x1F54D],
        groupID: 5,
        name: "Synagogue"
    }, {
        code: [0x26E9],
        groupID: 5,
        name: "Shinto Shrine"
    }, {
        code: [0x1F54B],
        groupID: 5,
        name: "Kaaba"
    }, {
        code: [0x26F2],
        groupID: 5,
        name: "Fountain"
    }, {
        code: [0x26FA],
        groupID: 5,
        name: "Tent"
    }, {
        code: [0x1F301],
        groupID: 5,
        name: "Foggy"
    }, {
        code: [0x1F303],
        groupID: 5,
        name: "Night With Stars"
    }, {
        code: [0x1F3D9],
        groupID: 5,
        name: "Cityscape"
    }, {
        code: [0x1F304],
        groupID: 5,
        name: "Sunrise Over Mountains"
    }, {
        code: [0x1F305],
        groupID: 5,
        name: "Sunrise"
    }, {
        code: [0x1F306],
        groupID: 5,
        name: "Cityscape at Dusk"
    }, {
        code: [0x1F307],
        groupID: 5,
        name: "Sunset"
    }, {
        code: [0x1F309],
        groupID: 5,
        name: "Bridge at Night"
    }, {
        code: [0x2668],
        groupID: 7,
        name: "Hot Springs"
    }, {
        code: [0x1F3A0],
        groupID: 5,
        name: "Carousel Horse"
    }, {
        code: [0x1F3A1],
        groupID: 5,
        name: "Ferris Wheel"
    }, {
        code: [0x1F3A2],
        groupID: 5,
        name: "Roller Coaster"
    }, {
        code: [0x1F488],
        groupID: 7,
        name: "Barber Pole"
    }, {
        code: [0x1F3AA],
        groupID: 5,
        name: "Circus Tent"
    }, {
        code: [0x1F682],
        groupID: 5,
        name: "Locomotive"
    }, {
        code: [0x1F683],
        groupID: 5,
        name: "Railway Car"
    }, {
        code: [0x1F684],
        groupID: 5,
        name: "High-Speed Train"
    }, {
        code: [0x1F685],
        groupID: 5,
        name: "Bullet Train"
    }, {
        code: [0x1F686],
        groupID: 5,
        name: "Train"
    }, {
        code: [0x1F687],
        groupID: 5,
        name: "Metro"
    }, {
        code: [0x1F688],
        groupID: 5,
        name: "Light Rail"
    }, {
        code: [0x1F689],
        groupID: 5,
        name: "Station"
    }, {
        code: [0x1F68A],
        groupID: 5,
        name: "Tram"
    }, {
        code: [0x1F69D],
        groupID: 5,
        name: "Monorail"
    }, {
        code: [0x1F69E],
        groupID: 5,
        name: "Mountain Railway"
    }, {
        code: [0x1F68B],
        groupID: 5,
        name: "Tram Car"
    }, {
        code: [0x1F68C],
        groupID: 5,
        name: "Bus"
    }, {
        code: [0x1F68D],
        groupID: 5,
        name: "Oncoming Bus"
    }, {
        code: [0x1F68E],
        groupID: 5,
        name: "Trolleybus"
    }, {
        code: [0x1F690],
        groupID: 5,
        name: "Minibus"
    }, {
        code: [0x1F691],
        groupID: 5,
        name: "Ambulance"
    }, {
        code: [0x1F692],
        groupID: 5,
        name: "Fire Engine"
    }, {
        code: [0x1F693],
        groupID: 5,
        name: "Police Car"
    }, {
        code: [0x1F694],
        groupID: 5,
        name: "Oncoming Police Car"
    }, {
        code: [0x1F695],
        groupID: 5,
        name: "Taxi"
    }, {
        code: [0x1F696],
        groupID: 5,
        name: "Oncoming Taxi"
    }, {
        code: [0x1F697],
        groupID: 5,
        name: "Automobile"
    }, {
        code: [0x1F698],
        groupID: 5,
        name: "Oncoming Automobile"
    }, /*{
        code: [0x1F699],
        groupID: null,
        name: "Sport Utility Vehicle"
    },*/ {
        code: [0x1F69A],
        groupID: 5,
        name: "Delivery Truck"
    }, {
        code: [0x1F69B],
        groupID: 5,
        name: "Articulated Lorry"
    }, {
        code: [0x1F69C],
        groupID: 5,
        name: "Tractor"
    }, {
        code: [0x1F3CE],
        groupID: 5,
        name: "Racing Car"
    }, {
        code: [0x1F3CD],
        groupID: 5,
        name: "Motorcycle"
    }, {
        code: [0x1F6F5],
        groupID: 5,
        name: "Motor Scooter"
    }, /*{
        code: [0x1F9BD],
        groupID: 1,
        name: "Manual Wheelchair"
    }, {
        code: [0x1F9BC],
        groupID: null,
        name: "Motorized Wheelchair"
    }, {
        code: [0x1F6FA],
        groupID: null,
        name: "Auto Rickshaw"
    },*/ {
        code: [0x1F6B2],
        groupID: 5,
        name: "Bicycle"
    }, {
        code: [0x1F6F4],
        groupID: 5,
        name: "Kick Scooter"
    }, {
        code: [0x1F6F9],
        groupID: 4,
        name: "Skateboard"
    }, {
        code: [0x1F68F],
        groupID: 5,
        name: "Bus Stop"
    }, /*{
        code: [0x1F6E3],
        groupID: null,
        name: "Motorway"
    },*/ {
        code: [0x1F6E4],
        groupID: 5,
        name: "Railway Track"
    }, {
        code: [0x1F6E2],
        groupID: 6,
        name: "Oil Drum"
    }, {
        code: [0x26FD],
        groupID: 5,
        name: "Fuel Pump"
    }, {
        code: [0x1F6A8],
        groupID: 5,
        name: "Police Car Light"
    }, {
        code: [0x1F6A5],
        groupID: 5,
        name: "Horizontal Traffic Light"
    }, {
        code: [0x1F6A6],
        groupID: 5,
        name: "Vertical Traffic Light"
    }, {
        code: [0x1F6D1],
        groupID: 7,
        name: "Stop Sign"
    }, {
        code: [0x1F6A7],
        groupID: 5,
        name: "Construction"
    }, {
        code: [0x2693],
        groupID: 5,
        name: "Anchor"
    }, {
        code: [0x26F5],
        groupID: 5,
        name: "Sailboat"
    }, /*{
        code: [0x1F6F6],
        groupID: null,
        name: "Canoe"
    },*/ {
        code: [0x1F6A4],
        groupID: 5,
        name: "Speedboat"
    }, {
        code: [0x1F6F3],
        groupID: 5,
        name: "Passenger Ship"
    }, {
        code: [0x26F4],
        groupID: 5,
        name: "Ferry"
    }, {
        code: [0x1F6E5],
        groupID: 5,
        name: "Motor Boat"
    }, {
        code: [0x1F6A2],
        groupID: 5,
        name: "Ship"
    }, {
        code: [0x2708],
        groupID: 5,
        name: "Airplane"
    }, {
        code: [0x1F6E9],
        groupID: 5,
        name: "Small Airplane"
    }, {
        code: [0x1F6EB],
        groupID: 5,
        name: "Airplane Departure"
    }, {
        code: [0x1F6EC],
        groupID: 5,
        name: "Airplane Arrival"
    }, /*{
        code: [0x1FA82],
        groupID: null,
        name: "Parachute"
    },*/ {
        code: [0x1F4BA],
        groupID: 5,
        name: "Seat"
    }, {
        code: [0x1F681],
        groupID: 5,
        name: "Helicopter"
    }, {
        code: [0x1F69F],
        groupID: 5,
        name: "Suspension Railway"
    }, {
        code: [0x1F6A0],
        groupID: 5,
        name: "Mountain Cableway"
    }, {
        code: [0x1F6A1],
        groupID: 5,
        name: "Aerial Tramway"
    }, {
        code: [0x1F6F0],
        groupID: 5,
        name: "Satellite"
    }, {
        code: [0x1F680],
        groupID: 5,
        name: "Rocket"
    }, {
        code: [0x1F6F8],
        groupID: 5,
        name: "Flying Saucer"
    }, {
        code: [0x1F6CE],
        groupID: 7,
        name: "Bellhop Bell"
    }, {
        code: [0x1F9F3],
        groupID: 6,
        name: "Luggage"
    }, {
        code: [0x231B],
        groupID: 6,
        name: "Hourglass Done"
    }, {
        code: [0x23F3],
        groupID: 6,
        name: "Hourglass Not Done"
    }, {
        code: [0x231A],
        groupID: 6,
        name: "Watch"
    }, {
        code: [0x23F0],
        groupID: 6,
        name: "Alarm Clock"
    }, {
        code: [0x23F1],
        groupID: 6,
        name: "Stopwatch"
    }, {
        code: [0x23F2],
        groupID: 6,
        name: "Timer Clock"
    }, {
        code: [0x1F570],
        groupID: 6,
        name: "Mantelpiece Clock"
    }, {
        code: [0x1F55B],
        groupID: 7,
        name: "Twelve O’Clock"
    }, {
        code: [0x1F567],
        groupID: 7,
        name: "Twelve-Thirty"
    }, {
        code: [0x1F550],
        groupID: 7,
        name: "One O’Clock"
    }, {
        code: [0x1F55C],
        groupID: 7,
        name: "One-Thirty"
    }, {
        code: [0x1F551],
        groupID: 7,
        name: "Two O’Clock"
    }, {
        code: [0x1F55D],
        groupID: 7,
        name: "Two-Thirty"
    }, {
        code: [0x1F552],
        groupID: 7,
        name: "Three O’Clock"
    }, {
        code: [0x1F55E],
        groupID: 7,
        name: "Three-Thirty"
    }, {
        code: [0x1F553],
        groupID: 7,
        name: "Four O’Clock"
    }, {
        code: [0x1F55F],
        groupID: 7,
        name: "Four-Thirty"
    }, {
        code: [0x1F554],
        groupID: 7,
        name: "Five O’Clock"
    }, {
        code: [0x1F560],
        groupID: 7,
        name: "Five-Thirty"
    }, {
        code: [0x1F555],
        groupID: 7,
        name: "Six O’Clock"
    }, {
        code: [0x1F561],
        groupID: 7,
        name: "Six-Thirty"
    }, {
        code: [0x1F556],
        groupID: 7,
        name: "Seven O’Clock"
    }, {
        code: [0x1F562],
        groupID: 7,
        name: "Seven-Thirty"
    }, {
        code: [0x1F557],
        groupID: 7,
        name: "Eight O’Clock"
    }, {
        code: [0x1F563],
        groupID: 7,
        name: "Eight-Thirty"
    }, {
        code: [0x1F558],
        groupID: 7,
        name: "Nine O’Clock"
    }, {
        code: [0x1F564],
        groupID: 7,
        name: "Nine-Thirty"
    }, {
        code: [0x1F559],
        groupID: 7,
        name: "Ten O’Clock"
    }, {
        code: [0x1F565],
        groupID: 7,
        name: "Ten-Thirty"
    }, {
        code: [0x1F55A],
        groupID: 7,
        name: "Eleven O’Clock"
    }, {
        code: [0x1F566],
        groupID: 7,
        name: "Eleven-Thirty"
    }, {
        code: [0x1F311],
        groupID: 2,
        name: "New Moon"
    }, {
        code: [0x1F312],
        groupID: 2,
        name: "Waxing Crescent Moon"
    }, {
        code: [0x1F313],
        groupID: 2,
        name: "First Quarter Moon"
    }, {
        code: [0x1F314],
        groupID: 2,
        name: "Waxing Gibbous Moon"
    }, {
        code: [0x1F315],
        groupID: 2,
        name: "Full Moon"
    }, {
        code: [0x1F316],
        groupID: 2,
        name: "Waning Gibbous Moon"
    }, {
        code: [0x1F317],
        groupID: 2,
        name: "Last Quarter Moon"
    }, {
        code: [0x1F318],
        groupID: 2,
        name: "Waning Crescent Moon"
    }, {
        code: [0x1F319],
        groupID: 2,
        name: "Crescent Moon"
    }, {
        code: [0x1F31A],
        groupID: 2,
        name: "New Moon Face"
    }, {
        code: [0x1F31B],
        groupID: 2,
        name: "First Quarter Moon Face"
    }, {
        code: [0x1F31C],
        groupID: 2,
        name: "Last Quarter Moon Face"
    }, {
        code: [0x1F321],
        groupID: 6,
        name: "Thermometer"
    }, {
        code: [0x2600],
        groupID: 2,
        name: "Sun"
    }, {
        code: [0x1F31D],
        groupID: 2,
        name: "Full Moon Face"
    }, {
        code: [0x1F31E],
        groupID: 2,
        name: "Sun With Face"
    }, /*{
        code: [0x1FA90],
        groupID: 1,
        name: "Ringed Planet"
    },*/ {
        code: [0x2B50],
        groupID: 2,
        name: "Star"
    }, {
        code: [0x1F31F],
        groupID: 2,
        name: "Glowing Star"
    }, {
        code: [0x1F320],
        groupID: 5,
        name: "Shooting Star"
    }, {
        code: [0x1F30C],
        groupID: 5,
        name: "Milky Way"
    }, {
        code: [0x2601],
        groupID: 2,
        name: "Cloud"
    }, {
        code: [0x26C5],
        groupID: 2,
        name: "Sun Behind Cloud"
    }, {
        code: [0x26C8],
        groupID: 2,
        name: "Cloud With Lightning and Rain"
    }, {
        code: [0x1F324],
        groupID: 2,
        name: "Sun Behind Small Cloud"
    }, {
        code: [0x1F325],
        groupID: 2,
        name: "Sun Behind Large Cloud"
    }, {
        code: [0x1F326],
        groupID: 2,
        name: "Sun Behind Rain Cloud"
    }, {
        code: [0x1F327],
        groupID: 2,
        name: "Cloud With Rain"
    }, {
        code: [0x1F328],
        groupID: 2,
        name: "Cloud With Snow"
    }, {
        code: [0x1F329],
        groupID: 2,
        name: "Cloud With Lightning"
    }, {
        code: [0x1F32A],
        groupID: 2,
        name: "Tornado"
    }, {
        code: [0x1F32B],
        groupID: 2,
        name: "Fog"
    }, {
        code: [0x1F32C],
        groupID: 2,
        name: "Wind Face"
    }, {
        code: [0x1F300],
        groupID: 7,
        name: "Cyclone"
    }, {
        code: [0x1F308],
        groupID: 2,
        name: "Rainbow"
    }, {
        code: [0x1F302],
        groupID: 2,
        name: "Closed Umbrella"
    }, {
        code: [0x2602],
        groupID: 2,
        name: "Umbrella"
    }, {
        code: [0x2614],
        groupID: 2,
        name: "Umbrella With Rain Drops"
    }, {
        code: [0x26F1],
        groupID: 6,
        name: "Umbrella on Ground"
    }, {
        code: [0x26A1],
        groupID: 2,
        name: "High Voltage"
    }, {
        code: [0x2744],
        groupID: 2,
        name: "Snowflake"
    }, {
        code: [0x2603],
        groupID: 2,
        name: "Snowman"
    }, {
        code: [0x26C4],
        groupID: 2,
        name: "Snowman Without Snow"
    }, {
        code: [0x2604],
        groupID: 2,
        name: "Comet"
    }, {
        code: [0x1F525],
        groupID: 2,
        name: "Fire"
    }, {
        code: [0x1F4A7],
        groupID: 2,
        name: "Droplet"
    }, {
        code: [0x1F30A],
        groupID: 2,
        name: "Water Wave"
    }, /*{
        code: [0x1F383],
        groupID: null,
        name: "Jack-O-Lantern"
    },*/ {
        code: [0x1F384],
        groupID: 2,
        name: "Christmas Tree"
    }, {
        code: [0x1F386],
        groupID: 5,
        name: "Fireworks"
    }, {
        code: [0x1F387],
        groupID: 7,
        name: "Sparkler"
    }, {
        code: [0x1F9E8],
        groupID: 6,
        name: "Firecracker"
    }, {
        code: [0x2728],
        groupID: 7,
        name: "Sparkles"
    }, {
        code: [0x1F388],
        groupID: 6,
        name: "Balloon"
    }, {
        code: [0x1F389],
        groupID: 6,
        name: "Party Popper"
    }, {
        code: [0x1F38A],
        groupID: 6,
        name: "Confetti Ball"
    }, {
        code: [0x1F38B],
        groupID: 2,
        name: "Tanabata Tree"
    }, /*{
        code: [0x1F38D],
        groupID: null,
        name: "Pine Decoration"
    },*/ {
        code: [0x1F38E],
        groupID: 6,
        name: "Japanese Dolls"
    }, {
        code: [0x1F38F],
        groupID: 6,
        name: "Carp Streamer"
    }, {
        code: [0x1F390],
        groupID: 6,
        name: "Wind Chime"
    }, {
        code: [0x1F391],
        groupID: 5,
        name: "Moon Viewing Ceremony"
    }, {
        code: [0x1F9E7],
        groupID: 6,
        name: "Red Envelope"
    }, {
        code: [0x1F380],
        groupID: 6,
        name: "Ribbon"
    }, {
        code: [0x1F381],
        groupID: 6,
        name: "Wrapped Gift"
    }, {
        code: [0x1F397],
        groupID: 6,
        name: "Reminder Ribbon"
    }, {
        code: [0x1F39F],
        groupID: 4,
        name: "Admission Tickets"
    }, {
        code: [0x1F3AB],
        groupID: 4,
        name: "Ticket"
    }, {
        code: [0x1F396],
        groupID: 4,
        name: "Military Medal"
    }, {
        code: [0x1F3C6],
        groupID: 4,
        name: "Trophy"
    }, {
        code: [0x1F3C5],
        groupID: 4,
        name: "Sports Medal"
    }, {
        code: [0x1F947],
        groupID: 4,
        name: "1st Place Medal"
    }, {
        code: [0x1F948],
        groupID: 4,
        name: "2nd Place Medal"
    }, {
        code: [0x1F949],
        groupID: 4,
        name: "3rd Place Medal"
    }, {
        code: [0x26BD],
        groupID: 4,
        name: "Soccer Ball"
    }, {
        code: [0x26BE],
        groupID: 4,
        name: "Baseball"
    }, {
        code: [0x1F94E],
        groupID: 4,
        name: "Softball"
    }, {
        code: [0x1F3C0],
        groupID: 6,
        name: "Basketball"
    }, {
        code: [0x1F3D0],
        groupID: 4,
        name: "Volleyball"
    }, {
        code: [0x1F3C8],
        groupID: 4,
        name: "American Football"
    }, {
        code: [0x1F3C9],
        groupID: 4,
        name: "Rugby Football"
    }, {
        code: [0x1F3BE],
        groupID: 4,
        name: "Tennis"
    }, {
        code: [0x1F94F],
        groupID: 4,
        name: "Flying Disc"
    }, {
        code: [0x1F3B3],
        groupID: 4,
        name: "Bowling"
    }, {
        code: [0x1F3CF],
        groupID: 4,
        name: "Cricket Game"
    }, {
        code: [0x1F3D1],
        groupID: 4,
        name: "Field Hockey"
    }, {
        code: [0x1F3D2],
        groupID: 4,
        name: "Ice Hockey"
    }, {
        code: [0x1F94D],
        groupID: 4,
        name: "Lacrosse"
    }, {
        code: [0x1F3D3],
        groupID: 4,
        name: "Ping Pong"
    }, {
        code: [0x1F3F8],
        groupID: 4,
        name: "Badminton"
    }, {
        code: [0x1F94A],
        groupID: 4,
        name: "Boxing Glove"
    }, {
        code: [0x1F94B],
        groupID: 4,
        name: "Martial Arts Uniform"
    }, /*{
        code: [0x1F945],
        groupID: null,
        name: "Goal Net"
    },*/ {
        code: [0x26F3],
        groupID: 6,
        name: "Flag in Hole"
    }, {
        code: [0x26F8],
        groupID: 4,
        name: "Ice Skate"
    }, {
        code: [0x1F3A3],
        groupID: 4,
        name: "Fishing Pole"
    }, /*{
        code: [0x1F93F],
        groupID: null,
        name: "Diving Mask"
    },*/ {
        code: [0x1F3BD],
        groupID: 4,
        name: "Running Shirt"
    }, {
        code: [0x1F3BF],
        groupID: 4,
        name: "Skis"
    }, {
        code: [0x1F6F7],
        groupID: 4,
        name: "Sled"
    }, {
        code: [0x1F94C],
        groupID: 4,
        name: "Curling Stone"
    }, {
        code: [0x1F3AF],
        groupID: 4,
        name: "Direct Hit"
    }, /*{
        code: [0x1FA80],
        groupID: null,
        name: "Yo-Yo"
    }, {
        code: [0x1FA81],
        groupID: null,
        name: "Kite"
    },*/ {
        code: [0x1F3B1],
        groupID: 4,
        name: "Pool 8 Ball"
    }, {
        code: [0x1F52E],
        groupID: 6,
        name: "Crystal Ball"
    }, {
        code: [0x1F9FF],
        groupID: 6,
        name: "Nazar Amulet"
    }, {
        code: [0x1F3AE],
        groupID: 4,
        name: "Video Game"
    }, {
        code: [0x1F579],
        groupID: 6,
        name: "Joystick"
    }, {
        code: [0x1F3B0],
        groupID: 4,
        name: "Slot Machine"
    }, {
        code: [0x1F3B2],
        groupID: 4,
        name: "Game Die"
    }, {
        code: [0x1F9E9],
        groupID: 4,
        name: "Puzzle Piece"
    }, {
        code: [0x1F9F8],
        groupID: 6,
        name: "Teddy Bear"
    }, {
        code: [0x2660],
        groupID: 7,
        name: "Spade Suit"
    }, {
        code: [0x2665],
        groupID: 7,
        name: "Heart Suit"
    }, {
        code: [0x2666],
        groupID: 7,
        name: "Diamond Suit"
    }, {
        code: [0x2663],
        groupID: 7,
        name: "Club Suit"
    }, {
        code: [0x265F],
        groupID: 4,
        name: "Chess Pawn"
    }, {
        code: [0x1F0CF],
        groupID: 7,
        name: "Joker"
    }, {
        code: [0x1F004],
        groupID: 7,
        name: "Mahjong Red Dragon"
    }, {
        code: [0x1F3B4],
        groupID: 7,
        name: "Flower Playing Cards"
    }, {
        code: [0x1F3AD],
        groupID: 4,
        name: "Performing Arts"
    }, {
        code: [0x1F5BC],
        groupID: 6,
        name: "Framed Picture"
    }, {
        code: [0x1F3A8],
        groupID: 4,
        name: "Artist Palette"
    }, {
        code: [0x1F9F5],
        groupID: 6,
        name: "Thread"
    }, {
        code: [0x1F9F6],
        groupID: 6,
        name: "Yarn"
    }, {
        code: [0x1F453],
        groupID: 1,
        name: "Glasses"
    }, {
        code: [0x1F576],
        groupID: 2,
        name: "Sunglasses"
    }, {
        code: [0x1F97D],
        groupID: 1,
        name: "Goggles"
    }, {
        code: [0x1F97C],
        groupID: 1,
        name: "Lab Coat"
    }, /*{
        code: [0x1F9BA],
        groupID: null,
        name: "Safety Vest"
    },*/ {
        code: [0x1F454],
        groupID: 1,
        name: "Necktie"
    }, {
        code: [0x1F455],
        groupID: 1,
        name: "T-Shirt"
    }, {
        code: [0x1F456],
        groupID: 1,
        name: "Jeans"
    }, {
        code: [0x1F9E3],
        groupID: 1,
        name: "Scarf"
    }, {
        code: [0x1F9E4],
        groupID: 1,
        name: "Gloves"
    }, {
        code: [0x1F9E5],
        groupID: 1,
        name: "Coat"
    }, {
        code: [0x1F9E6],
        groupID: 1,
        name: "Socks"
    }, {
        code: [0x1F457],
        groupID: 1,
        name: "Dress"
    }, {
        code: [0x1F458],
        groupID: 1,
        name: "Kimono"
    }, /*{
        code: [0x1F97B],
        groupID: null,
        name: "Sari"
    }, {
        code: [0x1FA71],
        groupID: 3,
        name: "One-Piece Swimsuit"
    }, {
        code: [0x1FA72],
        groupID: null,
        name: "Briefs"
    }, {
        code: [0x1FA73],
        groupID: null,
        name: "Shorts"
    },*/ {
        code: [0x1F459],
        groupID: 1,
        name: "Bikini"
    }, {
        code: [0x1F45A],
        groupID: 1,
        name: "Woman’s Clothes"
    }, {
        code: [0x1F45B],
        groupID: 1,
        name: "Purse"
    }, {
        code: [0x1F45C],
        groupID: 1,
        name: "Handbag"
    }, {
        code: [0x1F45D],
        groupID: 1,
        name: "Clutch Bag"
    }, {
        code: [0x1F6CD],
        groupID: 6,
        name: "Shopping Bags"
    }, {
        code: [0x1F392],
        groupID: 1,
        name: "Backpack"
    }, {
        code: [0x1F45E],
        groupID: 1,
        name: "Man’s Shoe"
    }, {
        code: [0x1F45F],
        groupID: 1,
        name: "Running Shoe"
    }, {
        code: [0x1F97E],
        groupID: 1,
        name: "Hiking Boot"
    }, {
        code: [0x1F97F],
        groupID: 1,
        name: "Flat Shoe"
    }, {
        code: [0x1F460],
        groupID: 1,
        name: "High-Heeled Shoe"
    }, {
        code: [0x1F461],
        groupID: 1,
        name: "Woman’s Sandal"
    }, /*{
        code: [0x1FA70],
        groupID: null,
        name: "Ballet Shoes"
    },*/ {
        code: [0x1F462],
        groupID: 1,
        name: "Woman’s Boot"
    }, {
        code: [0x1F451],
        groupID: 1,
        name: "Crown"
    }, {
        code: [0x1F452],
        groupID: 1,
        name: "Woman’s Hat"
    }, {
        code: [0x1F3A9],
        groupID: 1,
        name: "Top Hat"
    }, {
        code: [0x1F393],
        groupID: 1,
        name: "Graduation Cap"
    }, {
        code: [0x1F9E2],
        groupID: 1,
        name: "Billed Cap"
    }, {
        code: [0x26D1],
        groupID: 1,
        name: "Rescue Worker’s Helmet"
    }, {
        code: [0x1F4FF],
        groupID: 6,
        name: "Prayer Beads"
    }, {
        code: [0x1F484],
        groupID: 1,
        name: "Lipstick"
    }, {
        code: [0x1F48D],
        groupID: 1,
        name: "Ring"
    }, {
        code: [0x1F48E],
        groupID: 6,
        name: "Gem Stone"
    }, {
        code: [0x1F507],
        groupID: 7,
        name: "Muted Speaker"
    }, {
        code: [0x1F508],
        groupID: 7,
        name: "Speaker Low Volume"
    }, {
        code: [0x1F509],
        groupID: 7,
        name: "Speaker Medium Volume"
    }, {
        code: [0x1F50A],
        groupID: 7,
        name: "Speaker High Volume"
    }, {
        code: [0x1F4E2],
        groupID: 7,
        name: "Loudspeaker"
    }, {
        code: [0x1F4E3],
        groupID: 7,
        name: "Megaphone"
    }, {
        code: [0x1F4EF],
        groupID: 7,
        name: "Postal Horn"
    }, {
        code: [0x1F514],
        groupID: 7,
        name: "Bell"
    }, {
        code: [0x1F515],
        groupID: 7,
        name: "Bell With Slash"
    }, {
        code: [0x1F3BC],
        groupID: 4,
        name: "Musical Score"
    }, {
        code: [0x1F3B5],
        groupID: 7,
        name: "Musical Note"
    }, {
        code: [0x1F3B6],
        groupID: 7,
        name: "Musical Notes"
    }, {
        code: [0x1F399],
        groupID: 6,
        name: "Studio Microphone"
    }, {
        code: [0x1F39A],
        groupID: 6,
        name: "Level Slider"
    }, {
        code: [0x1F39B],
        groupID: 6,
        name: "Control Knobs"
    }, {
        code: [0x1F3A4],
        groupID: 4,
        name: "Microphone"
    }, {
        code: [0x1F3A7],
        groupID: 4,
        name: "Headphone"
    }, {
        code: [0x1F4FB],
        groupID: 6,
        name: "Radio"
    }, {
        code: [0x1F3B7],
        groupID: 4,
        name: "Saxophone"
    }, {
        code: [0x1F3B8],
        groupID: 4,
        name: "Guitar"
    }, {
        code: [0x1F3B9],
        groupID: 6,
        name: "Musical Keyboard"
    }, {
        code: [0x1F3BA],
        groupID: 4,
        name: "Trumpet"
    }, {
        code: [0x1F3BB],
        groupID: 4,
        name: "Violin"
    }, /*{
        code: [0x1FA95],
        groupID: null,
        name: "Banjo"
    },*/ {
        code: [0x1F941],
        groupID: 4,
        name: "Drum"
    }, {
        code: [0x1F4F1],
        groupID: 6,
        name: "Mobile Phone"
    }, {
        code: [0x1F4F2],
        groupID: 6,
        name: "Mobile Phone With Arrow"
    }, {
        code: [0x260E],
        groupID: 6,
        name: "Telephone"
    }, {
        code: [0x1F4DE],
        groupID: 6,
        name: "Telephone Receiver"
    }, {
        code: [0x1F4DF],
        groupID: 6,
        name: "Pager"
    }, {
        code: [0x1F4E0],
        groupID: 6,
        name: "Fax Machine"
    }, {
        code: [0x1F50B],
        groupID: 6,
        name: "Battery"
    }, {
        code: [0x1F50C],
        groupID: 6,
        name: "Electric Plug"
    }, {
        code: [0x1F4BB],
        groupID: 6,
        name: "Laptop"
    }, {
        code: [0x1F5A5],
        groupID: 6,
        name: "Desktop Computer"
    }, {
        code: [0x1F5A8],
        groupID: 6,
        name: "Printer"
    }, {
        code: [0x2328],
        groupID: 6,
        name: "Keyboard"
    }, {
        code: [0x1F5B1],
        groupID: 6,
        name: "Computer Mouse"
    }, {
        code: [0x1F5B2],
        groupID: 6,
        name: "Trackball"
    }, {
        code: [0x1F4BD],
        groupID: 6,
        name: "Computer Disk"
    }, {
        code: [0x1F4BE],
        groupID: 6,
        name: "Floppy Disk"
    }, {
        code: [0x1F4BF],
        groupID: 6,
        name: "Optical Disk"
    }, {
        code: [0x1F4C0],
        groupID: 6,
        name: "DVD"
    }, {
        code: [0x1F9EE],
        groupID: 6,
        name: "Abacus"
    }, {
        code: [0x1F3A5],
        groupID: 6,
        name: "Movie Camera"
    }, {
        code: [0x1F39E],
        groupID: 6,
        name: "Film Frames"
    }, {
        code: [0x1F4FD],
        groupID: 6,
        name: "Film Projector"
    }, {
        code: [0x1F3AC],
        groupID: 4,
        name: "Clapper Board"
    }, {
        code: [0x1F4FA],
        groupID: 6,
        name: "Television"
    }, {
        code: [0x1F4F7],
        groupID: 6,
        name: "Camera"
    }, {
        code: [0x1F4F8],
        groupID: 6,
        name: "Camera With Flash"
    }, {
        code: [0x1F4F9],
        groupID: 6,
        name: "Video Camera"
    }, {
        code: [0x1F4FC],
        groupID: 6,
        name: "Videocassette"
    }, {
        code: [0x1F50D],
        groupID: 6,
        name: "Magnifying Glass Tilted Left"
    }, {
        code: [0x1F50E],
        groupID: 6,
        name: "Magnifying Glass Tilted Right"
    }, {
        code: [0x1F56F],
        groupID: 6,
        name: "Candle"
    }, {
        code: [0x1F4A1],
        groupID: 6,
        name: "Light Bulb"
    }, {
        code: [0x1F526],
        groupID: 6,
        name: "Flashlight"
    }, {
        code: [0x1F3EE],
        groupID: 6,
        name: "Red Paper Lantern"
    }, /*{
        code: [0x1FA94],
        groupID: null,
        name: "Diya Lamp"
    },*/ {
        code: [0x1F4D4],
        groupID: 6,
        name: "Notebook With Decorative Cover"
    }, {
        code: [0x1F4D5],
        groupID: 6,
        name: "Closed Book"
    }, {
        code: [0x1F4D6],
        groupID: 6,
        name: "Open Book"
    }, {
        code: [0x1F4D7],
        groupID: 6,
        name: "Green Book"
    }, {
        code: [0x1F4D8],
        groupID: 6,
        name: "Blue Book"
    }, {
        code: [0x1F4D9],
        groupID: 6,
        name: "Orange Book"
    }, {
        code: [0x1F4DA],
        groupID: 6,
        name: "Books"
    }, {
        code: [0x1F4D3],
        groupID: 6,
        name: "Notebook"
    }, /*{
        code: [0x1F4D2],
        groupID: null,
        name: "Ledger"
    },*/ {
        code: [0x1F4C3],
        groupID: 6,
        name: "Page With Curl"
    }, {
        code: [0x1F4DC],
        groupID: 6,
        name: "Scroll"
    }, {
        code: [0x1F4C4],
        groupID: 6,
        name: "Page Facing Up"
    }, {
        code: [0x1F4F0],
        groupID: 6,
        name: "Newspaper"
    }, {
        code: [0x1F5DE],
        groupID: 6,
        name: "Rolled-Up Newspaper"
    }, {
        code: [0x1F4D1],
        groupID: 6,
        name: "Bookmark Tabs"
    }, {
        code: [0x1F516],
        groupID: 6,
        name: "Bookmark"
    }, {
        code: [0x1F3F7],
        groupID: 6,
        name: "Label"
    }, {
        code: [0x1F4B0],
        groupID: 6,
        name: "Money Bag"
    }, {
        code: [0x1F4B4],
        groupID: 6,
        name: "Yen Banknote"
    }, {
        code: [0x1F4B5],
        groupID: 6,
        name: "Dollar Banknote"
    }, {
        code: [0x1F4B6],
        groupID: 6,
        name: "Euro Banknote"
    }, {
        code: [0x1F4B7],
        groupID: 6,
        name: "Pound Banknote"
    }, {
        code: [0x1F4B8],
        groupID: 6,
        name: "Money With Wings"
    }, {
        code: [0x1F4B3],
        groupID: 6,
        name: "Credit Card"
    }, {
        code: [0x1F9FE],
        groupID: 6,
        name: "Receipt"
    }, {
        code: [0x1F4B9],
        groupID: 6,
        name: "Chart Increasing With Yen"
    }, /*{
        code: [0x1F4B1],
        groupID: null,
        name: "Currency Exchange"
    }, {
        code: [0x1F4B2],
        groupID: null,
        name: "Heavy Dollar Sign"
    },*/ {
        code: [0x2709],
        groupID: 6,
        name: "Envelope"
    }, {
        code: [0x1F4E7],
        groupID: 6,
        name: "E-Mail"
    }, {
        code: [0x1F4E8],
        groupID: 6,
        name: "Incoming Envelope"
    }, {
        code: [0x1F4E9],
        groupID: 6,
        name: "Envelope With Arrow"
    }, {
        code: [0x1F4E4],
        groupID: 6,
        name: "Outbox Tray"
    }, {
        code: [0x1F4E5],
        groupID: 6,
        name: "Inbox Tray"
    }, {
        code: [0x1F4E6],
        groupID: 6,
        name: "Package"
    }, {
        code: [0x1F4EB],
        groupID: 6,
        name: "Closed Mailbox With Raised Flag"
    }, {
        code: [0x1F4EA],
        groupID: 6,
        name: "Closed Mailbox With Lowered Flag"
    }, {
        code: [0x1F4EC],
        groupID: 6,
        name: "Open Mailbox With Raised Flag"
    }, {
        code: [0x1F4ED],
        groupID: 6,
        name: "Open Mailbox With Lowered Flag"
    }, {
        code: [0x1F4EE],
        groupID: 6,
        name: "Postbox"
    }, {
        code: [0x1F5F3],
        groupID: 6,
        name: "Ballot Box With Ballot"
    }, {
        code: [0x270F],
        groupID: 6,
        name: "Pencil"
    }, {
        code: [0x2712],
        groupID: 6,
        name: "Black Nib"
    }, {
        code: [0x1F58B],
        groupID: 6,
        name: "Fountain Pen"
    }, {
        code: [0x1F58A],
        groupID: 6,
        name: "Pen"
    }, {
        code: [0x1F58C],
        groupID: 6,
        name: "Paintbrush"
    }, {
        code: [0x1F58D],
        groupID: 6,
        name: "Crayon"
    }, {
        code: [0x1F4DD],
        groupID: 6,
        name: "Memo"
    }, /*{
        code: [0x1F4BC],
        groupID: null,
        name: "Briefcase"
    },*/ {
        code: [0x1F4C1],
        groupID: 6,
        name: "File Folder"
    }, {
        code: [0x1F4C2],
        groupID: 6,
        name: "Open File Folder"
    }, {
        code: [0x1F5C2],
        groupID: 6,
        name: "Card Index Dividers"
    }, {
        code: [0x1F4C5],
        groupID: 6,
        name: "Calendar"
    }, {
        code: [0x1F4C6],
        groupID: 6,
        name: "Tear-Off Calendar"
    }, {
        code: [0x1F5D2],
        groupID: 6,
        name: "Spiral Notepad"
    }, {
        code: [0x1F5D3],
        groupID: 6,
        name: "Spiral Calendar"
    }, {
        code: [0x1F4C7],
        groupID: 6,
        name: "Card Index"
    }, {
        code: [0x1F4C8],
        groupID: 6,
        name: "Chart Increasing"
    }, {
        code: [0x1F4C9],
        groupID: 6,
        name: "Chart Decreasing"
    }, {
        code: [0x1F4CA],
        groupID: 6,
        name: "Bar Chart"
    }, {
        code: [0x1F4CB],
        groupID: 6,
        name: "Clipboard"
    }, {
        code: [0x1F4CC],
        groupID: 6,
        name: "Pushpin"
    }, {
        code: [0x1F4CD],
        groupID: 6,
        name: "Round Pushpin"
    }, {
        code: [0x1F4CE],
        groupID: 6,
        name: "Paperclip"
    }, {
        code: [0x1F587],
        groupID: 6,
        name: "Linked Paperclips"
    }, {
        code: [0x1F4CF],
        groupID: 6,
        name: "Straight Ruler"
    }, {
        code: [0x1F4D0],
        groupID: 6,
        name: "Triangular Ruler"
    }, {
        code: [0x2702],
        groupID: 6,
        name: "Scissors"
    }, {
        code: [0x1F5C3],
        groupID: 6,
        name: "Card File Box"
    }, {
        code: [0x1F5C4],
        groupID: 6,
        name: "File Cabinet"
    }, {
        code: [0x1F5D1],
        groupID: 6,
        name: "Wastebasket"
    }, {
        code: [0x1F512],
        groupID: 6,
        name: "Locked"
    }, {
        code: [0x1F513],
        groupID: 6,
        name: "Unlocked"
    }, {
        code: [0x1F50F],
        groupID: 6,
        name: "Locked With Pen"
    }, {
        code: [0x1F510],
        groupID: 6,
        name: "Locked With Key"
    }, {
        code: [0x1F511],
        groupID: 6,
        name: "Key"
    }, {
        code: [0x1F5DD],
        groupID: 6,
        name: "Old Key"
    }, {
        code: [0x1F528],
        groupID: 6,
        name: "Hammer"
    }, /*{
        code: [0x1FA93],
        groupID: null,
        name: "Axe"
    },*/ {
        code: [0x26CF],
        groupID: 6,
        name: "Pick"
    }, {
        code: [0x2692],
        groupID: 6,
        name: "Hammer and Pick"
    }, {
        code: [0x1F6E0],
        groupID: 6,
        name: "Hammer and Wrench"
    }, {
        code: [0x1F5E1],
        groupID: 6,
        name: "Dagger"
    }, {
        code: [0x2694],
        groupID: 6,
        name: "Crossed Swords"
    }, {
        code: [0x1F52B],
        groupID: 6,
        name: "Pistol"
    }, /*{
        code: [0x1F3F9],
        groupID: null,
        name: "Bow and Arrow"
    },*/ {
        code: [0x1F6E1],
        groupID: 6,
        name: "Shield"
    }, {
        code: [0x1F527],
        groupID: 6,
        name: "Wrench"
    }, {
        code: [0x1F529],
        groupID: 6,
        name: "Nut and Bolt"
    }, {
        code: [0x2699],
        groupID: 6,
        name: "Gear"
    }, {
        code: [0x1F5DC],
        groupID: 6,
        name: "Clamp"
    }, {
        code: [0x2696],
        groupID: 6,
        name: "Balance Scale"
    }, /*{
        code: [0x1F9AF],
        groupID: null,
        name: "Probing Cane"
    },*/ {
        code: [0x1F517],
        groupID: 6,
        name: "Link"
    }, {
        code: [0x26D3],
        groupID: 6,
        name: "Chains"
    }, {
        code: [0x1F9F0],
        groupID: 6,
        name: "Toolbox"
    }, {
        code: [0x1F9F2],
        groupID: 6,
        name: "Magnet"
    }, {
        code: [0x2697],
        groupID: 6,
        name: "Alembic"
    }, {
        code: [0x1F9EA],
        groupID: 6,
        name: "Test Tube"
    }, {
        code: [0x1F9EB],
        groupID: 6,
        name: "Petri Dish"
    }, {
        code: [0x1F9EC],
        groupID: 6,
        name: "DNA"
    }, {
        code: [0x1F52C],
        groupID: 6,
        name: "Microscope"
    }, {
        code: [0x1F52D],
        groupID: 6,
        name: "Telescope"
    }, {
        code: [0x1F4E1],
        groupID: 6,
        name: "Satellite Antenna"
    }, {
        code: [0x1F489],
        groupID: 6,
        name: "Syringe"
    }, /*{
        code: [0x1FA78],
        groupID: null,
        name: "Drop of Blood"
    },*/ {
        code: [0x1F48A],
        groupID: 6,
        name: "Pill"
    }, /*{
        code: [0x1FA79],
        groupID: null,
        name: "Adhesive Bandage"
    }, {
        code: [0x1FA7A],
        groupID: null,
        name: "Stethoscope"
    },*/ {
        code: [0x1F6AA],
        groupID: 6,
        name: "Door"
    }, {
        code: [0x1F6CF],
        groupID: 6,
        name: "Bed"
    }, {
        code: [0x1F6CB],
        groupID: 6,
        name: "Couch and Lamp"
    }, /*{
        code: [0x1FA91],
        groupID: null,
        name: "Chair"
    },*/ {
        code: [0x1F6BD],
        groupID: 6,
        name: "Toilet"
    }, {
        code: [0x1F6BF],
        groupID: 6,
        name: "Shower"
    }, {
        code: [0x1F6C1],
        groupID: 6,
        name: "Bathtub"
    }, /*{
        code: [0x1FA92],
        groupID: null,
        name: "Razor"
    },*/ {
        code: [0x1F9F4],
        groupID: 6,
        name: "Lotion Bottle"
    }, {
        code: [0x1F9F7],
        groupID: 6,
        name: "Safety Pin"
    }, {
        code: [0x1F9F9],
        groupID: 6,
        name: "Broom"
    }, {
        code: [0x1F9FA],
        groupID: 6,
        name: "Basket"
    }, {
        code: [0x1F9FB],
        groupID: 6,
        name: "Roll of Paper"
    }, {
        code: [0x1F9FC],
        groupID: 6,
        name: "Soap"
    }, {
        code: [0x1F9FD],
        groupID: 6,
        name: "Sponge"
    }, {
        code: [0x1F9EF],
        groupID: 6,
        name: "Fire Extinguisher"
    }, /*{
        code: [0x1F6D2],
        groupID: null,
        name: "Shopping Cart"
    },*/ {
        code: [0x1F6AC],
        groupID: 6,
        name: "Cigarette"
    }, {
        code: [0x26B0],
        groupID: 6,
        name: "Coffin"
    }, {
        code: [0x26B1],
        groupID: 6,
        name: "Funeral Urn"
    }, {
        code: [0x1F5FF],
        groupID: 6,
        name: "Moai"
    }, {
        code: [0x1F3E7],
        groupID: 7,
        name: "ATM Sign"
    }, {
        code: [0x1F6AE],
        groupID: 7,
        name: "Litter in Bin Sign"
    }, {
        code: [0x1F6B0],
        groupID: 7,
        name: "Potable Water"
    }, {
        code: [0x267F],
        groupID: 7,
        name: "Wheelchair Symbol"
    }, {
        code: [0x1F6B9],
        groupID: 7,
        name: "Men’s Room"
    }, {
        code: [0x1F6BA],
        groupID: 7,
        name: "Women’s Room"
    }, {
        code: [0x1F6BB],
        groupID: 7,
        name: "Restroom"
    }, {
        code: [0x1F6BC],
        groupID: 7,
        name: "Baby Symbol"
    }, {
        code: [0x1F6BE],
        groupID: 7,
        name: "Water Closet"
    }, {
        code: [0x1F6C2],
        groupID: 5,
        name: "Passport Control"
    }, {
        code: [0x1F6C3],
        groupID: 5,
        name: "Customs"
    }, {
        code: [0x1F6C4],
        groupID: 5,
        name: "Baggage Claim"
    }, {
        code: [0x1F6C5],
        groupID: 6,
        name: "Left Luggage"
    }, {
        code: [0x26A0],
        groupID: 7,
        name: "Warning"
    }, {
        code: [0x1F6B8],
        groupID: 7,
        name: "Children Crossing"
    }, {
        code: [0x26D4],
        groupID: 7,
        name: "No Entry"
    }, {
        code: [0x1F6AB],
        groupID: 7,
        name: "Prohibited"
    }, {
        code: [0x1F6B3],
        groupID: 7,
        name: "No Bicycles"
    }, {
        code: [0x1F6AD],
        groupID: 7,
        name: "No Smoking"
    }, {
        code: [0x1F6AF],
        groupID: 7,
        name: "No Littering"
    }, {
        code: [0x1F6B1],
        groupID: 7,
        name: "Non-Potable Water"
    }, {
        code: [0x1F6B7],
        groupID: 7,
        name: "No Pedestrians"
    }, {
        code: [0x1F4F5],
        groupID: 6,
        name: "No Mobile Phones"
    }, {
        code: [0x1F51E],
        groupID: 7,
        name: "No One Under Eighteen"
    }, {
        code: [0x2622],
        groupID: 7,
        name: "Radioactive"
    }, {
        code: [0x2623],
        groupID: 7,
        name: "Biohazard"
    }, {
        code: [0x2B06],
        groupID: 7,
        name: "Up Arrow"
    }, {
        code: [0x2197],
        groupID: 7,
        name: "Up-Right Arrow"
    }, {
        code: [0x27A1],
        groupID: 7,
        name: "Right Arrow"
    }, {
        code: [0x2198],
        groupID: 7,
        name: "Down-Right Arrow"
    }, {
        code: [0x2B07],
        groupID: 7,
        name: "Down Arrow"
    }, {
        code: [0x2199],
        groupID: 7,
        name: "Down-Left Arrow"
    }, {
        code: [0x2B05],
        groupID: 7,
        name: "Left Arrow"
    }, {
        code: [0x2196],
        groupID: 7,
        name: "Up-Left Arrow"
    }, {
        code: [0x2195],
        groupID: 7,
        name: "Up-Down Arrow"
    }, {
        code: [0x2194],
        groupID: 7,
        name: "Left-Right Arrow"
    }, {
        code: [0x21A9],
        groupID: 7,
        name: "Right Arrow Curving Left"
    }, {
        code: [0x21AA],
        groupID: 7,
        name: "Left Arrow Curving Right"
    }, {
        code: [0x2934],
        groupID: 7,
        name: "Right Arrow Curving Up"
    }, {
        code: [0x2935],
        groupID: 7,
        name: "Right Arrow Curving Down"
    }, {
        code: [0x1F503],
        groupID: 7,
        name: "Clockwise Vertical Arrows"
    }, {
        code: [0x1F504],
        groupID: 7,
        name: "Counterclockwise Arrows Button"
    }, {
        code: [0x1F519],
        groupID: 7,
        name: "Back Arrow"
    }, {
        code: [0x1F51A],
        groupID: 7,
        name: "End Arrow"
    }, {
        code: [0x1F51B],
        groupID: 7,
        name: "On! Arrow"
    }, {
        code: [0x1F51C],
        groupID: 7,
        name: "Soon Arrow"
    }, {
        code: [0x1F51D],
        groupID: 7,
        name: "Top Arrow"
    }, {
        code: [0x1F6D0],
        groupID: 7,
        name: "Place of Worship"
    }, {
        code: [0x269B],
        groupID: 7,
        name: "Atom Symbol"
    }, {
        code: [0x1F549],
        groupID: 7,
        name: "Om"
    }, {
        code: [0x2721],
        groupID: 7,
        name: "Star of David"
    }, {
        code: [0x2638],
        groupID: 7,
        name: "Wheel of Dharma"
    }, {
        code: [0x262F],
        groupID: 7,
        name: "Yin Yang"
    }, {
        code: [0x271D],
        groupID: 7,
        name: "Latin Cross"
    }, {
        code: [0x2626],
        groupID: 7,
        name: "Orthodox Cross"
    }, {
        code: [0x262A],
        groupID: 7,
        name: "Star and Crescent"
    }, {
        code: [0x262E],
        groupID: 7,
        name: "Peace Symbol"
    }, {
        code: [0x1F54E],
        groupID: 7,
        name: "Menorah"
    }, {
        code: [0x1F52F],
        groupID: 7,
        name: "Dotted Six-Pointed Star"
    }, {
        code: [0x2648],
        groupID: 7,
        name: "Aries"
    }, {
        code: [0x2649],
        groupID: 7,
        name: "Taurus"
    }, {
        code: [0x264A],
        groupID: 7,
        name: "Gemini"
    }, {
        code: [0x264B],
        groupID: 7,
        name: "Cancer"
    }, {
        code: [0x264C],
        groupID: 7,
        name: "Leo"
    }, {
        code: [0x264D],
        groupID: 7,
        name: "Virgo"
    }, {
        code: [0x264E],
        groupID: 7,
        name: "Libra"
    }, {
        code: [0x264F],
        groupID: 7,
        name: "Scorpio"
    }, {
        code: [0x2650],
        groupID: 7,
        name: "Sagittarius"
    }, {
        code: [0x2651],
        groupID: 7,
        name: "Capricorn"
    }, {
        code: [0x2652],
        groupID: 7,
        name: "Aquarius"
    }, {
        code: [0x2653],
        groupID: 7,
        name: "Pisces"
    }, {
        code: [0x26CE],
        groupID: 7,
        name: "Ophiuchus"
    }, {
        code: [0x1F500],
        groupID: 7,
        name: "Shuffle Tracks Button"
    }, {
        code: [0x1F501],
        groupID: 7,
        name: "Repeat Button"
    }, {
        code: [0x1F502],
        groupID: 7,
        name: "Repeat Single Button"
    }, {
        code: [0x25B6],
        groupID: 7,
        name: "Play Button"
    }, {
        code: [0x23E9],
        groupID: 7,
        name: "Fast-Forward Button"
    }, /*{
        code: [0x23ED],
        groupID: null,
        name: "Next Track Button"
    }, {
        code: [0x23EF],
        groupID: null,
        name: "Play or Pause Button"
    },*/ {
        code: [0x25C0],
        groupID: 7,
        name: "Reverse Button"
    }, {
        code: [0x23EA],
        groupID: 7,
        name: "Fast Reverse Button"
    }, /*{
        code: [0x23EE],
        groupID: null,
        name: "Last Track Button"
    },*/ {
        code: [0x1F53C],
        groupID: 7,
        name: "Upwards Button"
    }, {
        code: [0x23EB],
        groupID: 7,
        name: "Fast Up Button"
    }, {
        code: [0x1F53D],
        groupID: 7,
        name: "Downwards Button"
    }, {
        code: [0x23EC],
        groupID: 7,
        name: "Fast Down Button"
    }, /*{
        code: [0x23F8],
        groupID: null,
        name: "Pause Button"
    },*/ {
        code: [0x23F9],
        groupID: 7,
        name: "Stop Button"
    }, /*{
        code: [0x23FA],
        groupID: null,
        name: "Record Button"
    },*/ {
        code: [0x23CF],
        groupID: 7,
        name: "Eject Button"
    }, {
        code: [0x1F3A6],
        groupID: 7,
        name: "Cinema"
    }, {
        code: [0x1F505],
        groupID: 7,
        name: "Dim Button"
    }, {
        code: [0x1F506],
        groupID: 7,
        name: "Bright Button"
    }, {
        code: [0x1F4F6],
        groupID: 7,
        name: "Antenna Bars"
    }, {
        code: [0x1F4F3],
        groupID: 7,
        name: "Vibration Mode"
    }, {
        code: [0x1F4F4],
        groupID: 7,
        name: "Mobile Phone Off"
    }, /*{
        code: [0x2640],
        groupID: null,
        name: "Female Sign"
    }, {
        code: [0x2642],
        groupID: null,
        name: "Male Sign"
    }, {
        code: [0x26A7],
        groupID: null,
        name: "Transgender Symbol"
    }, {
        code: [0x2695],
        groupID: null,
        name: "Medical Symbol"
    },*/ {
        code: [0x267E],
        groupID: 7,
        name: "Infinity"
    }, {
        code: [0x267B],
        groupID: 7,
        name: "Recycling Symbol"
    }, /*{
        code: [0x269C],
        groupID: null,
        name: "Fleur-de-lis"
    },*/ {
        code: [0x1F531],
        groupID: 7,
        name: "Trident Emblem"
    }, {
        code: [0x1F4DB],
        groupID: 7,
        name: "Name Badge"
    }, {
        code: [0x1F530],
        groupID: 7,
        name: "Japanese Symbol for Beginner"
    }, {
        code: [0x2B55],
        groupID: 7,
        name: "Hollow Red Circle"
    }, {
        code: [0x2705],
        groupID: 7,
        name: "Check Mark Button"
    }, {
        code: [0x2611],
        groupID: 7,
        name: "Check Box With Check"
    }, {
        code: [0x2714],
        groupID: 7,
        name: "Check Mark"
    }, {
        code: [0x2716],
        groupID: 7,
        name: "Multiplication Sign"
    }, {
        code: [0x274C],
        groupID: 7,
        name: "Cross Mark"
    }, {
        code: [0x274E],
        groupID: 7,
        name: "Cross Mark Button"
    }, {
        code: [0x2795],
        groupID: 7,
        name: "Plus Sign"
    }, {
        code: [0x2796],
        groupID: 7,
        name: "Minus Sign"
    }, {
        code: [0x2797],
        groupID: 7,
        name: "Division Sign"
    }, {
        code: [0x27B0],
        groupID: 7,
        name: "Curly Loop"
    }, {
        code: [0x27BF],
        groupID: 7,
        name: "Double Curly Loop"
    }, {
        code: [0x303D],
        groupID: 7,
        name: "Part Alternation Mark"
    }, {
        code: [0x2733],
        groupID: 7,
        name: "Eight-Spoked Asterisk"
    }, {
        code: [0x2734],
        groupID: 7,
        name: "Eight-Pointed Star"
    }, {
        code: [0x2747],
        groupID: 7,
        name: "Sparkle"
    }, {
        code: [0x203C],
        groupID: 7,
        name: "Double Exclamation Mark"
    }, {
        code: [0x2049],
        groupID: 7,
        name: "Exclamation Question Mark"
    }, {
        code: [0x2753],
        groupID: 7,
        name: "Question Mark"
    }, {
        code: [0x2754],
        groupID: 7,
        name: "White Question Mark"
    }, {
        code: [0x2755],
        groupID: 7,
        name: "White Exclamation Mark"
    }, {
        code: [0x2757],
        groupID: 7,
        name: "Exclamation Mark"
    }, /*{
        code: [0x3030],
        groupID: null,
        name: "Wavy Dash"
    },*/ {
        code: [0xA9],
        groupID: 7,
        name: "Copyright"
    }, {
        code: [0xAE],
        groupID: 7,
        name: "Registered"
    }, {
        code: [0x2122],
        groupID: 7,
        name: "Trade Mark"
    }, {
        code: [0x23, 0x20E3],
        groupID: 7,
        name: "Keycap Number Sign"
    }, {
        code: [0x2A, 0x20E3],
        groupID: 6,
        name: "Keycap Asterisk"
    }, {
        code: [0x30, 0x20E3],
        groupID: 7,
        name: "Keycap Digit Zero"
    }, {
        code: [0x31, 0x20E3],
        groupID: 7,
        name: "Keycap Digit One"
    }, {
        code: [0x32, 0x20E3],
        groupID: 7,
        name: "Keycap Digit Two"
    }, {
        code: [0x33, 0x20E3],
        groupID: 7,
        name: "Keycap Digit Three"
    }, {
        code: [0x34, 0x20E3],
        groupID: 7,
        name: "Keycap Digit Four"
    }, {
        code: [0x35, 0x20E3],
        groupID: 7,
        name: "Keycap Digit Five"
    }, {
        code: [0x36, 0x20E3],
        groupID: 7,
        name: "Keycap Digit Six"
    }, {
        code: [0x37, 0x20E3],
        groupID: 7,
        name: "Keycap Digit Seven"
    }, {
        code: [0x38, 0x20E3],
        groupID: 7,
        name: "Keycap Digit Eight"
    }, {
        code: [0x39, 0x20E3],
        groupID: 7,
        name: "Keycap Digit Nine"
    }, {
        code: [0x1F51F],
        groupID: 7,
        name: "Keycap: 10"
    }, {
        code: [0x1F520],
        groupID: 7,
        name: "Input Latin Uppercase"
    }, {
        code: [0x1F521],
        groupID: 7,
        name: "Input Latin Lowercase"
    }, {
        code: [0x1F522],
        groupID: 7,
        name: "Input Numbers"
    }, {
        code: [0x1F523],
        groupID: 7,
        name: "Input Symbols"
    }, {
        code: [0x1F524],
        groupID: 7,
        name: "Input Latin Letters"
    }, {
        code: [0x1F170],
        groupID: 7,
        name: "A Button (Blood Type)"
    }, {
        code: [0x1F18E],
        groupID: 7,
        name: "AB Button (Blood Type)"
    }, {
        code: [0x1F171],
        groupID: 7,
        name: "B Button (Blood Type)"
    }, {
        code: [0x1F191],
        groupID: 7,
        name: "CL Button"
    }, {
        code: [0x1F192],
        groupID: 7,
        name: "Cool Button"
    }, {
        code: [0x1F193],
        groupID: 7,
        name: "Free Button"
    }, {
        code: [0x2139],
        groupID: 7,
        name: "Information"
    }, {
        code: [0x1F194],
        groupID: 7,
        name: "ID Button"
    }, {
        code: [0x24C2],
        groupID: 7,
        name: "Circled M"
    }, {
        code: [0x1F195],
        groupID: 7,
        name: "New Button"
    }, {
        code: [0x1F196],
        groupID: 7,
        name: "NG Button"
    }, {
        code: [0x1F17E],
        groupID: 7,
        name: "O Button (Blood Type)"
    }, {
        code: [0x1F197],
        groupID: 7,
        name: "OK Button"
    }, {
        code: [0x1F17F],
        groupID: 7,
        name: "P Button"
    }, {
        code: [0x1F198],
        groupID: 7,
        name: "SOS Button"
    }, {
        code: [0x1F199],
        groupID: 7,
        name: "Up! Button"
    }, {
        code: [0x1F19A],
        groupID: 7,
        name: "Vs Button"
    }, {
        code: [0x1F201],
        groupID: 7,
        name: "Japanese “Here” Button"
    }, {
        code: [0x1F202],
        groupID: 7,
        name: "Japanese “Service Charge” Button"
    }, {
        code: [0x1F237],
        groupID: 7,
        name: "Japanese “Monthly Amount” Button"
    }, {
        code: [0x1F236],
        groupID: 7,
        name: "Japanese “Not Free of Charge” Button"
    }, {
        code: [0x1F22F],
        groupID: 7,
        name: "Japanese “Reserved” Button"
    }, {
        code: [0x1F250],
        groupID: 7,
        name: "Japanese “Bargain” Button"
    }, {
        code: [0x1F239],
        groupID: 7,
        name: "Japanese “Discount” Button"
    }, {
        code: [0x1F21A],
        groupID: 7,
        name: "Japanese “Free of Charge” Button"
    }, {
        code: [0x1F232],
        groupID: 7,
        name: "Japanese “Prohibited” Button"
    }, {
        code: [0x1F251],
        groupID: 7,
        name: "Japanese “Acceptable” Button"
    }, {
        code: [0x1F238],
        groupID: 7,
        name: "Japanese “Application” Button"
    }, {
        code: [0x1F234],
        groupID: 7,
        name: "Japanese “Passing Grade” Button"
    }, {
        code: [0x1F233],
        groupID: 7,
        name: "Japanese “Vacancy” Button"
    }, {
        code: [0x3297],
        groupID: 7,
        name: "Japanese “Congratulations” Button"
    }, {
        code: [0x3299],
        groupID: 7,
        name: "Japanese “Secret” Button"
    }, {
        code: [0x1F23A],
        groupID: 7,
        name: "Japanese “Open for Business” Button"
    }, {
        code: [0x1F235],
        groupID: 7,
        name: "Japanese “No Vacancy” Button"
    }, {
        code: [0x1F534],
        groupID: 7,
        name: "Red Circle"
    }, /*{
        code: [0x1F7E0],
        groupID: null,
        name: "Orange Circle"
    }, {
        code: [0x1F7E1],
        groupID: null,
        name: "Yellow Circle"
    }, {
        code: [0x1F7E2],
        groupID: null,
        name: "Green Circle"
    },*/ {
        code: [0x1F535],
        groupID: 7,
        name: "Blue Circle"
    }, /*{
        code: [0x1F7E3],
        groupID: null,
        name: "Purple Circle"
    }, {
        code: [0x1F7E4],
        groupID: null,
        name: "Brown Circle"
    },*/ {
        code: [0x26AB],
        groupID: 7,
        name: "Black Circle"
    }, {
        code: [0x26AA],
        groupID: 7,
        name: "White Circle"
    }, /*{
        code: [0x1F7E5],
        groupID: null,
        name: "Red Square"
    }, {
        code: [0x1F7E7],
        groupID: null,
        name: "Orange Square"
    }, {
        code: [0x1F7E8],
        groupID: null,
        name: "Yellow Square"
    }, {
        code: [0x1F7E9],
        groupID: null,
        name: "Green Square"
    }, {
        code: [0x1F7E6],
        groupID: null,
        name: "Blue Square"
    }, {
        code: [0x1F7EA],
        groupID: null,
        name: "Purple Square"
    }, {
        code: [0x1F7EB],
        groupID: null,
        name: "Brown Square"
    },*/ {
        code: [0x2B1B],
        groupID: 7,
        name: "Black Large Square"
    }, {
        code: [0x2B1C],
        groupID: 7,
        name: "White Large Square"
    }, {
        code: [0x25FC],
        groupID: 7,
        name: "Black Medium Square"
    }, {
        code: [0x25FB],
        groupID: 7,
        name: "White Medium Square"
    }, {
        code: [0x25FE],
        groupID: 7,
        name: "Black Medium-Small Square"
    }, {
        code: [0x25FD],
        groupID: 7,
        name: "White Medium-Small Square"
    }, {
        code: [0x25AA],
        groupID: 7,
        name: "Black Small Square"
    }, {
        code: [0x25AB],
        groupID: 7,
        name: "White Small Square"
    }, {
        code: [0x1F536],
        groupID: 7,
        name: "Large Orange Diamond"
    }, {
        code: [0x1F537],
        groupID: 7,
        name: "Large Blue Diamond"
    }, {
        code: [0x1F538],
        groupID: 7,
        name: "Small Orange Diamond"
    }, {
        code: [0x1F539],
        groupID: 7,
        name: "Small Blue Diamond"
    }, {
        code: [0x1F53A],
        groupID: 7,
        name: "Red Triangle Pointed Up"
    }, {
        code: [0x1F53B],
        groupID: 7,
        name: "Red Triangle Pointed Down"
    }, {
        code: [0x1F4A0],
        groupID: 7,
        name: "Diamond With a Dot"
    }, {
        code: [0x1F518],
        groupID: 6,
        name: "Radio Button"
    }, {
        code: [0x1F533],
        groupID: 7,
        name: "White Square Button"
    }, /*{
        code: [0x1F532],
        groupID: null,
        name: "Black Square Button"
    },*/ {
        code: [0x1F3C1],
        groupID: 8,
        name: "Chequered Flag"
    }, {
        code: [0x1F6A9],
        groupID: 8,
        name: "Triangular Flag"
    }, {
        code: [0x1F38C],
        groupID: 8,
        name: "Crossed Flags"
    }, {
        code: [0x1F3F4],
        groupID: 8,
        name: "Black Flag"
    }, {
        code: [0x1F3F3],
        groupID: 8,
        name: "White Flag"
    }, {
        code: [0x1F3F3, 0x200D, 0x1F308],
        groupID: 8,
        name: "Rainbow Flag"
    }, {
        code: [0x1F3F3, 0x200D, 0x26A7],
        groupID: 8,
        name: "Transgender Flag"
    }, {
        code: [0x1F3F4, 0x200D, 0x2620],
        groupID: 8,
        name: "Pirate Flag"
    }, {
        code: [0x1F1E6, 0x1F1E8],
        groupID: 8,
        name: "Flag: Ascension Island"
    }, {
        code: [0x1F1E6, 0x1F1E9],
        groupID: 8,
        name: "Flag: Andorra"
    }, {
        code: [0x1F1E6, 0x1F1EA],
        groupID: 8,
        name: "Flag: United Arab Emirates"
    }, {
        code: [0x1F1E6, 0x1F1EB],
        groupID: 8,
        name: "Flag: Afghanistan"
    }, {
        code: [0x1F1E6, 0x1F1EC],
        groupID: 8,
        name: "Flag: Antigua & Barbuda"
    }, {
        code: [0x1F1E6, 0x1F1EE],
        groupID: 8,
        name: "Flag: Anguilla"
    }, {
        code: [0x1F1E6, 0x1F1F1],
        groupID: 8,
        name: "Flag: Albania"
    }, {
        code: [0x1F1E6, 0x1F1F2],
        groupID: 8,
        name: "Flag: Armenia"
    }, {
        code: [0x1F1E6, 0x1F1F4],
        groupID: 8,
        name: "Flag: Angola"
    }, {
        code: [0x1F1E6, 0x1F1F6],
        groupID: 8,
        name: "Flag: Antarctica"
    }, {
        code: [0x1F1E6, 0x1F1F7],
        groupID: 8,
        name: "Flag: Argentina"
    }, {
        code: [0x1F1E6, 0x1F1F8],
        groupID: 8,
        name: "Flag: American Samoa"
    }, {
        code: [0x1F1E6, 0x1F1F9],
        groupID: 8,
        name: "Flag: Austria"
    }, {
        code: [0x1F1E6, 0x1F1FA],
        groupID: 8,
        name: "Flag: Australia"
    }, {
        code: [0x1F1E6, 0x1F1FC],
        groupID: 8,
        name: "Flag: Aruba"
    }, {
        code: [0x1F1E6, 0x1F1FD],
        groupID: 8,
        name: "Flag: Åland Islands"
    }, {
        code: [0x1F1E6, 0x1F1FF],
        groupID: 8,
        name: "Flag: Azerbaijan"
    }, {
        code: [0x1F1E7, 0x1F1E6],
        groupID: 8,
        name: "Flag: Bosnia & Herzegovina"
    }, {
        code: [0x1F1E7, 0x1F1E7],
        groupID: 8,
        name: "Flag: Barbados"
    }, {
        code: [0x1F1E7, 0x1F1E9],
        groupID: 8,
        name: "Flag: Bangladesh"
    }, {
        code: [0x1F1E7, 0x1F1EA],
        groupID: 8,
        name: "Flag: Belgium"
    }, {
        code: [0x1F1E7, 0x1F1EB],
        groupID: 8,
        name: "Flag: Burkina Faso"
    }, {
        code: [0x1F1E7, 0x1F1EC],
        groupID: 8,
        name: "Flag: Bulgaria"
    }, {
        code: [0x1F1E7, 0x1F1ED],
        groupID: 8,
        name: "Flag: Bahrain"
    }, {
        code: [0x1F1E7, 0x1F1EE],
        groupID: 8,
        name: "Flag: Burundi"
    }, {
        code: [0x1F1E7, 0x1F1EF],
        groupID: 8,
        name: "Flag: Benin"
    }, /*{
        code: [0x1F1E7, 0x1F1F1],
        groupID: 8,
        name: "Flag: St. Barthélemy"
    },*/ {
        code: [0x1F1E7, 0x1F1F2],
        groupID: 8,
        name: "Flag: Bermuda"
    }, {
        code: [0x1F1E7, 0x1F1F3],
        groupID: 8,
        name: "Flag: Brunei"
    }, {
        code: [0x1F1E7, 0x1F1F4],
        groupID: 8,
        name: "Flag: Bolivia"
    }, /*{
        code: [0x1F1E7, 0x1F1F6],
        groupID: 8,
        name: "Flag: Caribbean Netherlands"
    },*/ {
        code: [0x1F1E7, 0x1F1F7],
        groupID: 8,
        name: "Flag: Brazil"
    }, {
        code: [0x1F1E7, 0x1F1F8],
        groupID: 8,
        name: "Flag: Bahamas"
    }, {
        code: [0x1F1E7, 0x1F1F9],
        groupID: 8,
        name: "Flag: Bhutan"
    }, {
        code: [0x1F1E7, 0x1F1FB],
        groupID: 8,
        name: "Flag: Bouvet Island"
    }, {
        code: [0x1F1E7, 0x1F1FC],
        groupID: 8,
        name: "Flag: Botswana"
    }, {
        code: [0x1F1E7, 0x1F1FE],
        groupID: 8,
        name: "Flag: Belarus"
    }, {
        code: [0x1F1E7, 0x1F1FF],
        groupID: 8,
        name: "Flag: Belize"
    }, {
        code: [0x1F1E8, 0x1F1E6],
        groupID: 8,
        name: "Flag: Canada"
    }, {
        code: [0x1F1E8, 0x1F1E8],
        groupID: 8,
        name: "Flag: Cocos (Keeling) Islands"
    }, {
        code: [0x1F1E8, 0x1F1E9],
        groupID: 8,
        name: "Flag: Congo - Kinshasa"
    }, {
        code: [0x1F1E8, 0x1F1EB],
        groupID: 8,
        name: "Flag: Central African Republic"
    }, {
        code: [0x1F1E8, 0x1F1EC],
        groupID: 8,
        name: "Flag: Congo - Brazzaville"
    }, {
        code: [0x1F1E8, 0x1F1ED],
        groupID: 8,
        name: "Flag: Switzerland"
    }, {
        code: [0x1F1E8, 0x1F1EE],
        groupID: 8,
        name: "Flag: Côte d’Ivoire"
    }, {
        code: [0x1F1E8, 0x1F1F0],
        groupID: 8,
        name: "Flag: Cook Islands"
    }, {
        code: [0x1F1E8, 0x1F1F1],
        groupID: 8,
        name: "Flag: Chile"
    }, {
        code: [0x1F1E8, 0x1F1F2],
        groupID: 8,
        name: "Flag: Cameroon"
    }, {
        code: [0x1F1E8, 0x1F1F3],
        groupID: 8,
        name: "Flag: China"
    }, {
        code: [0x1F1E8, 0x1F1F4],
        groupID: 8,
        name: "Flag: Colombia"
    }, {
        code: [0x1F1E8, 0x1F1F5],
        groupID: 8,
        name: "Flag: Clipperton Island"
    }, {
        code: [0x1F1E8, 0x1F1F7],
        groupID: 8,
        name: "Flag: Costa Rica"
    }, {
        code: [0x1F1E8, 0x1F1FA],
        groupID: 8,
        name: "Flag: Cuba"
    }, {
        code: [0x1F1E8, 0x1F1FB],
        groupID: 8,
        name: "Flag: Cape Verde"
    }, {
        code: [0x1F1E8, 0x1F1FC],
        groupID: 8,
        name: "Flag: Curaçao"
    }, {
        code: [0x1F1E8, 0x1F1FD],
        groupID: 8,
        name: "Flag: Christmas Island"
    }, {
        code: [0x1F1E8, 0x1F1FE],
        groupID: 8,
        name: "Flag: Cyprus"
    }, {
        code: [0x1F1E8, 0x1F1FF],
        groupID: 8,
        name: "Flag: Czechia"
    }, {
        code: [0x1F1E9, 0x1F1EA],
        groupID: 8,
        name: "Flag: Germany"
    }, {
        code: [0x1F1E9, 0x1F1EC],
        groupID: 8,
        name: "Flag: Diego Garcia"
    }, {
        code: [0x1F1E9, 0x1F1EF],
        groupID: 8,
        name: "Flag: Djibouti"
    }, {
        code: [0x1F1E9, 0x1F1F0],
        groupID: 8,
        name: "Flag: Denmark"
    }, {
        code: [0x1F1E9, 0x1F1F2],
        groupID: 8,
        name: "Flag: Dominica"
    }, {
        code: [0x1F1E9, 0x1F1F4],
        groupID: 8,
        name: "Flag: Dominican Republic"
    }, {
        code: [0x1F1E9, 0x1F1FF],
        groupID: 8,
        name: "Flag: Algeria"
    }, {
        code: [0x1F1EA, 0x1F1E6],
        groupID: 8,
        name: "Flag: Ceuta & Melilla"
    }, {
        code: [0x1F1EA, 0x1F1E8],
        groupID: 8,
        name: "Flag: Ecuador"
    }, {
        code: [0x1F1EA, 0x1F1EA],
        groupID: 8,
        name: "Flag: Estonia"
    }, {
        code: [0x1F1EA, 0x1F1EC],
        groupID: 8,
        name: "Flag: Egypt"
    }, {
        code: [0x1F1EA, 0x1F1ED],
        groupID: 8,
        name: "Flag: Western Sahara"
    }, {
        code: [0x1F1EA, 0x1F1F7],
        groupID: 8,
        name: "Flag: Eritrea"
    }, {
        code: [0x1F1EA, 0x1F1F8],
        groupID: 8,
        name: "Flag: Spain"
    }, {
        code: [0x1F1EA, 0x1F1F9],
        groupID: 8,
        name: "Flag: Ethiopia"
    }, {
        code: [0x1F1EA, 0x1F1FA],
        groupID: 8,
        name: "Flag: European Union"
    }, {
        code: [0x1F1EB, 0x1F1EE],
        groupID: 8,
        name: "Flag: Finland"
    }, {
        code: [0x1F1EB, 0x1F1EF],
        groupID: 8,
        name: "Flag: Fiji"
    }, {
        code: [0x1F1EB, 0x1F1F0],
        groupID: 8,
        name: "Flag: Falkland Islands"
    }, {
        code: [0x1F1EB, 0x1F1F2],
        groupID: 8,
        name: "Flag: Micronesia"
    }, {
        code: [0x1F1EB, 0x1F1F4],
        groupID: 8,
        name: "Flag: Faroe Islands"
    }, {
        code: [0x1F1EB, 0x1F1F7],
        groupID: 8,
        name: "Flag: France"
    }, {
        code: [0x1F1EC, 0x1F1E6],
        groupID: 8,
        name: "Flag: Gabon"
    }, {
        code: [0x1F1EC, 0x1F1E7],
        groupID: 8,
        name: "Flag: United Kingdom"
    }, {
        code: [0x1F1EC, 0x1F1E9],
        groupID: 8,
        name: "Flag: Grenada"
    }, {
        code: [0x1F1EC, 0x1F1EA],
        groupID: 8,
        name: "Flag: Georgia"
    }, {
        code: [0x1F1EC, 0x1F1EB],
        groupID: 8,
        name: "Flag: French Guiana"
    }, {
        code: [0x1F1EC, 0x1F1EC],
        groupID: 8,
        name: "Flag: Guernsey"
    }, {
        code: [0x1F1EC, 0x1F1ED],
        groupID: 8,
        name: "Flag: Ghana"
    }, {
        code: [0x1F1EC, 0x1F1EE],
        groupID: 8,
        name: "Flag: Gibraltar"
    }, {
        code: [0x1F1EC, 0x1F1F1],
        groupID: 8,
        name: "Flag: Greenland"
    }, {
        code: [0x1F1EC, 0x1F1F2],
        groupID: 8,
        name: "Flag: Gambia"
    }, {
        code: [0x1F1EC, 0x1F1F3],
        groupID: 8,
        name: "Flag: Guinea"
    }, {
        code: [0x1F1EC, 0x1F1F5],
        groupID: 8,
        name: "Flag: Guadeloupe"
    }, {
        code: [0x1F1EC, 0x1F1F6],
        groupID: 8,
        name: "Flag: Equatorial Guinea"
    }, {
        code: [0x1F1EC, 0x1F1F7],
        groupID: 8,
        name: "Flag: Greece"
    }, {
        code: [0x1F1EC, 0x1F1F8],
        groupID: 8,
        name: "Flag: South Georgia & South Sandwich Islands"
    }, {
        code: [0x1F1EC, 0x1F1F9],
        groupID: 8,
        name: "Flag: Guatemala"
    }, {
        code: [0x1F1EC, 0x1F1FA],
        groupID: 8,
        name: "Flag: Guam"
    }, {
        code: [0x1F1EC, 0x1F1FC],
        groupID: 8,
        name: "Flag: Guinea-Bissau"
    }, {
        code: [0x1F1EC, 0x1F1FE],
        groupID: 8,
        name: "Flag: Guyana"
    }, {
        code: [0x1F1ED, 0x1F1F0],
        groupID: 8,
        name: "Flag: Hong Kong SAR China"
    }, {
        code: [0x1F1ED, 0x1F1F2],
        groupID: 8,
        name: "Flag: Heard & McDonald Islands"
    }, {
        code: [0x1F1ED, 0x1F1F3],
        groupID: 8,
        name: "Flag: Honduras"
    }, {
        code: [0x1F1ED, 0x1F1F7],
        groupID: 8,
        name: "Flag: Croatia"
    }, {
        code: [0x1F1ED, 0x1F1F9],
        groupID: 8,
        name: "Flag: Haiti"
    }, {
        code: [0x1F1ED, 0x1F1FA],
        groupID: 8,
        name: "Flag: Hungary"
    }, {
        code: [0x1F1EE, 0x1F1E8],
        groupID: 8,
        name: "Flag: Canary Islands"
    }, {
        code: [0x1F1EE, 0x1F1E9],
        groupID: 8,
        name: "Flag: Indonesia"
    }, {
        code: [0x1F1EE, 0x1F1EA],
        groupID: 8,
        name: "Flag: Ireland"
    }, {
        code: [0x1F1EE, 0x1F1F1],
        groupID: 8,
        name: "Flag: Israel"
    }, {
        code: [0x1F1EE, 0x1F1F2],
        groupID: 8,
        name: "Flag: Isle of Man"
    }, {
        code: [0x1F1EE, 0x1F1F3],
        groupID: 8,
        name: "Flag: India"
    }, {
        code: [0x1F1EE, 0x1F1F4],
        groupID: 8,
        name: "Flag: British Indian Ocean Territory"
    }, {
        code: [0x1F1EE, 0x1F1F6],
        groupID: 8,
        name: "Flag: Iraq"
    }, {
        code: [0x1F1EE, 0x1F1F7],
        groupID: 8,
        name: "Flag: Iran"
    }, {
        code: [0x1F1EE, 0x1F1F8],
        groupID: 8,
        name: "Flag: Iceland"
    }, {
        code: [0x1F1EE, 0x1F1F9],
        groupID: 8,
        name: "Flag: Italy"
    }, {
        code: [0x1F1EF, 0x1F1EA],
        groupID: 8,
        name: "Flag: Jersey"
    }, {
        code: [0x1F1EF, 0x1F1F2],
        groupID: 8,
        name: "Flag: Jamaica"
    }, {
        code: [0x1F1EF, 0x1F1F4],
        groupID: 8,
        name: "Flag: Jordan"
    }, {
        code: [0x1F1EF, 0x1F1F5],
        groupID: 8,
        name: "Flag: Japan"
    }, {
        code: [0x1F1F0, 0x1F1EA],
        groupID: 8,
        name: "Flag: Kenya"
    }, {
        code: [0x1F1F0, 0x1F1EC],
        groupID: 8,
        name: "Flag: Kyrgyzstan"
    }, {
        code: [0x1F1F0, 0x1F1ED],
        groupID: 8,
        name: "Flag: Cambodia"
    }, {
        code: [0x1F1F0, 0x1F1EE],
        groupID: 8,
        name: "Flag: Kiribati"
    }, {
        code: [0x1F1F0, 0x1F1F2],
        groupID: 8,
        name: "Flag: Comoros"
    }, {
        code: [0x1F1F0, 0x1F1F3],
        groupID: 8,
        name: "Flag: St. Kitts & Nevis"
    }, {
        code: [0x1F1F0, 0x1F1F5],
        groupID: 8,
        name: "Flag: North Korea"
    }, {
        code: [0x1F1F0, 0x1F1F7],
        groupID: 8,
        name: "Flag: South Korea"
    }, {
        code: [0x1F1F0, 0x1F1FC],
        groupID: 8,
        name: "Flag: Kuwait"
    }, {
        code: [0x1F1F0, 0x1F1FE],
        groupID: 8,
        name: "Flag: Cayman Islands"
    }, {
        code: [0x1F1F0, 0x1F1FF],
        groupID: 8,
        name: "Flag: Kazakhstan"
    }, {
        code: [0x1F1F1, 0x1F1E6],
        groupID: 8,
        name: "Flag: Laos"
    }, {
        code: [0x1F1F1, 0x1F1E7],
        groupID: 8,
        name: "Flag: Lebanon"
    }, {
        code: [0x1F1F1, 0x1F1E8],
        groupID: 8,
        name: "Flag: St. Lucia"
    }, {
        code: [0x1F1F1, 0x1F1EE],
        groupID: 8,
        name: "Flag: Liechtenstein"
    }, {
        code: [0x1F1F1, 0x1F1F0],
        groupID: 8,
        name: "Flag: Sri Lanka"
    }, {
        code: [0x1F1F1, 0x1F1F7],
        groupID: 8,
        name: "Flag: Liberia"
    }, {
        code: [0x1F1F1, 0x1F1F8],
        groupID: 8,
        name: "Flag: Lesotho"
    }, {
        code: [0x1F1F1, 0x1F1F9],
        groupID: 8,
        name: "Flag: Lithuania"
    }, {
        code: [0x1F1F1, 0x1F1FA],
        groupID: 8,
        name: "Flag: Luxembourg"
    }, {
        code: [0x1F1F1, 0x1F1FB],
        groupID: 8,
        name: "Flag: Latvia"
    }, {
        code: [0x1F1F1, 0x1F1FE],
        groupID: 8,
        name: "Flag: Libya"
    }, {
        code: [0x1F1F2, 0x1F1E6],
        groupID: 8,
        name: "Flag: Morocco"
    }, {
        code: [0x1F1F2, 0x1F1E8],
        groupID: 8,
        name: "Flag: Monaco"
    }, {
        code: [0x1F1F2, 0x1F1E9],
        groupID: 8,
        name: "Flag: Moldova"
    }, {
        code: [0x1F1F2, 0x1F1EA],
        groupID: 8,
        name: "Flag: Montenegro"
    }, {
        code: [0x1F1F2, 0x1F1EB],
        groupID: 8,
        name: "Flag: St. Martin"
    }, {
        code: [0x1F1F2, 0x1F1EC],
        groupID: 8,
        name: "Flag: Madagascar"
    }, {
        code: [0x1F1F2, 0x1F1ED],
        groupID: 8,
        name: "Flag: Marshall Islands"
    }, {
        code: [0x1F1F2, 0x1F1F0],
        groupID: 8,
        name: "Flag: North Macedonia"
    }, {
        code: [0x1F1F2, 0x1F1F1],
        groupID: 8,
        name: "Flag: Mali"
    }, {
        code: [0x1F1F2, 0x1F1F2],
        groupID: 8,
        name: "Flag: Myanmar (Burma)"
    }, {
        code: [0x1F1F2, 0x1F1F3],
        groupID: 8,
        name: "Flag: Mongolia"
    }, {
        code: [0x1F1F2, 0x1F1F4],
        groupID: 8,
        name: "Flag: Macao Sar China"
    }, {
        code: [0x1F1F2, 0x1F1F5],
        groupID: 8,
        name: "Flag: Northern Mariana Islands"
    }, /*{
        code: [0x1F1F2, 0x1F1F6],
        groupID: 8,
        name: "Flag: Martinique"
    },*/ {
        code: [0x1F1F2, 0x1F1F7],
        groupID: 8,
        name: "Flag: Mauritania"
    }, {
        code: [0x1F1F2, 0x1F1F8],
        groupID: 8,
        name: "Flag: Montserrat"
    }, {
        code: [0x1F1F2, 0x1F1F9],
        groupID: 8,
        name: "Flag: Malta"
    }, {
        code: [0x1F1F2, 0x1F1FA],
        groupID: 8,
        name: "Flag: Mauritius"
    }, {
        code: [0x1F1F2, 0x1F1FB],
        groupID: 8,
        name: "Flag: Maldives"
    }, {
        code: [0x1F1F2, 0x1F1FC],
        groupID: 8,
        name: "Flag: Malawi"
    }, {
        code: [0x1F1F2, 0x1F1FD],
        groupID: 8,
        name: "Flag: Mexico"
    }, {
        code: [0x1F1F2, 0x1F1FE],
        groupID: 8,
        name: "Flag: Malaysia"
    }, {
        code: [0x1F1F2, 0x1F1FF],
        groupID: 8,
        name: "Flag: Mozambique"
    }, {
        code: [0x1F1F3, 0x1F1E6],
        groupID: 8,
        name: "Flag: Namibia"
    }, {
        code: [0x1F1F3, 0x1F1E8],
        groupID: 8,
        name: "Flag: New Caledonia"
    }, {
        code: [0x1F1F3, 0x1F1EA],
        groupID: 8,
        name: "Flag: Niger"
    }, {
        code: [0x1F1F3, 0x1F1EB],
        groupID: 8,
        name: "Flag: Norfolk Island"
    }, {
        code: [0x1F1F3, 0x1F1EC],
        groupID: 8,
        name: "Flag: Nigeria"
    }, {
        code: [0x1F1F3, 0x1F1EE],
        groupID: 8,
        name: "Flag: Nicaragua"
    }, {
        code: [0x1F1F3, 0x1F1F1],
        groupID: 8,
        name: "Flag: Netherlands"
    }, {
        code: [0x1F1F3, 0x1F1F4],
        groupID: 8,
        name: "Flag: Norway"
    }, {
        code: [0x1F1F3, 0x1F1F5],
        groupID: 8,
        name: "Flag: Nepal"
    }, {
        code: [0x1F1F3, 0x1F1F7],
        groupID: 8,
        name: "Flag: Nauru"
    }, {
        code: [0x1F1F3, 0x1F1FA],
        groupID: 8,
        name: "Flag: Niue"
    }, {
        code: [0x1F1F3, 0x1F1FF],
        groupID: 8,
        name: "Flag: New Zealand"
    }, {
        code: [0x1F1F4, 0x1F1F2],
        groupID: 8,
        name: "Flag: Oman"
    }, {
        code: [0x1F1F5, 0x1F1E6],
        groupID: 8,
        name: "Flag: Panama"
    }, {
        code: [0x1F1F5, 0x1F1EA],
        groupID: 8,
        name: "Flag: Peru"
    }, {
        code: [0x1F1F5, 0x1F1EB],
        groupID: 8,
        name: "Flag: French Polynesia"
    }, {
        code: [0x1F1F5, 0x1F1EC],
        groupID: 8,
        name: "Flag: Papua New Guinea"
    }, {
        code: [0x1F1F5, 0x1F1ED],
        groupID: 8,
        name: "Flag: Philippines"
    }, {
        code: [0x1F1F5, 0x1F1F0],
        groupID: 8,
        name: "Flag: Pakistan"
    }, {
        code: [0x1F1F5, 0x1F1F1],
        groupID: 8,
        name: "Flag: Poland"
    }, {
        code: [0x1F1F5, 0x1F1F2],
        groupID: 8,
        name: "Flag: St. Pierre & Miquelon"
    }, {
        code: [0x1F1F5, 0x1F1F3],
        groupID: 8,
        name: "Flag: Pitcairn Islands"
    }, {
        code: [0x1F1F5, 0x1F1F7],
        groupID: 8,
        name: "Flag: Puerto Rico"
    }, {
        code: [0x1F1F5, 0x1F1F8],
        groupID: 8,
        name: "Flag: Palestinian Territories"
    }, {
        code: [0x1F1F5, 0x1F1F9],
        groupID: 8,
        name: "Flag: Portugal"
    }, {
        code: [0x1F1F5, 0x1F1FC],
        groupID: 8,
        name: "Flag: Palau"
    }, {
        code: [0x1F1F5, 0x1F1FE],
        groupID: 8,
        name: "Flag: Paraguay"
    }, {
        code: [0x1F1F6, 0x1F1E6],
        groupID: 8,
        name: "Flag: Qatar"
    }, /*{
        code: [0x1F1F7, 0x1F1EA],
        groupID: 8,
        name: "Flag: Réunion"
    },*/ {
        code: [0x1F1F7, 0x1F1F4],
        groupID: 8,
        name: "Flag: Romania"
    }, {
        code: [0x1F1F7, 0x1F1F8],
        groupID: 8,
        name: "Flag: Serbia"
    }, {
        code: [0x1F1F7, 0x1F1FA],
        groupID: 8,
        name: "Flag: Russia"
    }, {
        code: [0x1F1F7, 0x1F1FC],
        groupID: 8,
        name: "Flag: Rwanda"
    }, {
        code: [0x1F1F8, 0x1F1E6],
        groupID: 8,
        name: "Flag: Saudi Arabia"
    }, {
        code: [0x1F1F8, 0x1F1E7],
        groupID: 8,
        name: "Flag: Solomon Islands"
    }, {
        code: [0x1F1F8, 0x1F1E8],
        groupID: 8,
        name: "Flag: Seychelles"
    }, {
        code: [0x1F1F8, 0x1F1E9],
        groupID: 8,
        name: "Flag: Sudan"
    }, {
        code: [0x1F1F8, 0x1F1EA],
        groupID: 8,
        name: "Flag: Sweden"
    }, {
        code: [0x1F1F8, 0x1F1EC],
        groupID: 8,
        name: "Flag: Singapore"
    }, {
        code: [0x1F1F8, 0x1F1ED],
        groupID: 8,
        name: "Flag: St. Helena"
    }, {
        code: [0x1F1F8, 0x1F1EE],
        groupID: 8,
        name: "Flag: Slovenia"
    }, {
        code: [0x1F1F8, 0x1F1EF],
        groupID: 8,
        name: "Flag: Svalbard & Jan Mayen"
    }, {
        code: [0x1F1F8, 0x1F1F0],
        groupID: 8,
        name: "Flag: Slovakia"
    }, {
        code: [0x1F1F8, 0x1F1F1],
        groupID: 8,
        name: "Flag: Sierra Leone"
    }, {
        code: [0x1F1F8, 0x1F1F2],
        groupID: 8,
        name: "Flag: San Marino"
    }, {
        code: [0x1F1F8, 0x1F1F3],
        groupID: 8,
        name: "Flag: Senegal"
    }, {
        code: [0x1F1F8, 0x1F1F4],
        groupID: 8,
        name: "Flag: Somalia"
    }, {
        code: [0x1F1F8, 0x1F1F7],
        groupID: 8,
        name: "Flag: Suriname"
    }, {
        code: [0x1F1F8, 0x1F1F8],
        groupID: 8,
        name: "Flag: South Sudan"
    }, {
        code: [0x1F1F8, 0x1F1F9],
        groupID: 8,
        name: "Flag: São Tomé & Príncipe"
    }, {
        code: [0x1F1F8, 0x1F1FB],
        groupID: 8,
        name: "Flag: El Salvador"
    }, {
        code: [0x1F1F8, 0x1F1FD],
        groupID: 8,
        name: "Flag: Sint Maarten"
    }, {
        code: [0x1F1F8, 0x1F1FE],
        groupID: 8,
        name: "Flag: Syria"
    }, {
        code: [0x1F1F8, 0x1F1FF],
        groupID: 8,
        name: "Flag: Eswatini"
    }, {
        code: [0x1F1F9, 0x1F1E6],
        groupID: 8,
        name: "Flag: Tristan Da Cunha"
    }, {
        code: [0x1F1F9, 0x1F1E8],
        groupID: 8,
        name: "Flag: Turks & Caicos Islands"
    }, {
        code: [0x1F1F9, 0x1F1E9],
        groupID: 8,
        name: "Flag: Chad"
    }, /*{
        code: [0x1F1F9, 0x1F1EB],
        groupID: 8,
        name: "Flag: French Southern Territories"
    },*/ {
        code: [0x1F1F9, 0x1F1EC],
        groupID: 8,
        name: "Flag: Togo"
    }, {
        code: [0x1F1F9, 0x1F1ED],
        groupID: 8,
        name: "Flag: Thailand"
    }, {
        code: [0x1F1F9, 0x1F1EF],
        groupID: 8,
        name: "Flag: Tajikistan"
    }, {
        code: [0x1F1F9, 0x1F1F0],
        groupID: 8,
        name: "Flag: Tokelau"
    }, {
        code: [0x1F1F9, 0x1F1F1],
        groupID: 8,
        name: "Flag: Timor-Leste"
    }, {
        code: [0x1F1F9, 0x1F1F2],
        groupID: 8,
        name: "Flag: Turkmenistan"
    }, {
        code: [0x1F1F9, 0x1F1F3],
        groupID: 8,
        name: "Flag: Tunisia"
    }, {
        code: [0x1F1F9, 0x1F1F4],
        groupID: 8,
        name: "Flag: Tonga"
    }, {
        code: [0x1F1F9, 0x1F1F7],
        groupID: 8,
        name: "Flag: Turkey"
    }, {
        code: [0x1F1F9, 0x1F1F9],
        groupID: 8,
        name: "Flag: Trinidad & Tobago"
    }, {
        code: [0x1F1F9, 0x1F1FB],
        groupID: 8,
        name: "Flag: Tuvalu"
    }, {
        code: [0x1F1F9, 0x1F1FC],
        groupID: 8,
        name: "Flag: Taiwan"
    }, {
        code: [0x1F1F9, 0x1F1FF],
        groupID: 8,
        name: "Flag: Tanzania"
    }, {
        code: [0x1F1FA, 0x1F1E6],
        groupID: 8,
        name: "Flag: Ukraine"
    }, {
        code: [0x1F1FA, 0x1F1EC],
        groupID: 8,
        name: "Flag: Uganda"
    }, {
        code: [0x1F1FA, 0x1F1F2],
        groupID: 8,
        name: "Flag: U.S. Outlying Islands"
    }, {
        code: [0x1F1FA, 0x1F1F3],
        groupID: 8,
        name: "Flag: United Nations"
    }, {
        code: [0x1F1FA, 0x1F1F8],
        groupID: 8,
        name: "Flag: United States"
    }, {
        code: [0x1F1FA, 0x1F1FE],
        groupID: 8,
        name: "Flag: Uruguay"
    }, {
        code: [0x1F1FA, 0x1F1FF],
        groupID: 8,
        name: "Flag: Uzbekistan"
    }, {
        code: [0x1F1FB, 0x1F1E6],
        groupID: 8,
        name: "Flag: Vatican City"
    }, {
        code: [0x1F1FB, 0x1F1E8],
        groupID: 8,
        name: "Flag: St. Vincent & Grenadines"
    }, {
        code: [0x1F1FB, 0x1F1EA],
        groupID: 8,
        name: "Flag: Venezuela"
    }, {
        code: [0x1F1FB, 0x1F1EC],
        groupID: 8,
        name: "Flag: British Virgin Islands"
    }, {
        code: [0x1F1FB, 0x1F1EE],
        groupID: 8,
        name: "Flag: U.S. Virgin Islands"
    }, {
        code: [0x1F1FB, 0x1F1F3],
        groupID: 8,
        name: "Flag: Vietnam"
    }, {
        code: [0x1F1FB, 0x1F1FA],
        groupID: 8,
        name: "Flag: Vanuatu"
    }, {
        code: [0x1F1FC, 0x1F1EB],
        groupID: 8,
        name: "Flag: Wallis & Futuna"
    }, {
        code: [0x1F1FC, 0x1F1F8],
        groupID: 8,
        name: "Flag: Samoa"
    }, {
        code: [0x1F1FD, 0x1F1F0],
        groupID: 8,
        name: "Flag: Kosovo"
    }, {
        code: [0x1F1FE, 0x1F1EA],
        groupID: 8,
        name: "Flag: Yemen"
    }, {
        code: [0x1F1FE, 0x1F1F9],
        groupID: 8,
        name: "Flag: Mayotte"
    }, {
        code: [0x1F1FF, 0x1F1E6],
        groupID: 8,
        name: "Flag: South Africa"
    }, {
        code: [0x1F1FF, 0x1F1F2],
        groupID: 8,
        name: "Flag: Zambia"
    }, {
        code: [0x1F1FF, 0x1F1FC],
        groupID: 8,
        name: "Flag: Zimbabwe"
    }, {
        code: [0x1F3F4, 0xE0067, 0xE0062, 0xE0065, 0xE006E, 0xE0067, 0xE007F],
        groupID: 8,
        name: "Flag: England"
    }, {
        code: [0x1F3F4, 0xE0067, 0xE0062, 0xE0073, 0xE0063, 0xE0074, 0xE007F],
        groupID: 8,
        name: "Flag: Scotland"
    }, {
        code: [0x1F3F4, 0xE0067, 0xE0062, 0xE0077, 0xE006C, 0xE0073, 0xE007F],
        groupID: 8,
        name: "Flag: Wales"
    }, /*{
        code: [0x1F1E6],
        groupID: null,
        name: "Regional Indicator Symbol Letter A"
    }, {
        code: [0x1F1E7],
        groupID: null,
        name: "Regional Indicator Symbol Letter B"
    }, {
        code: [0x1F1E8],
        groupID: null,
        name: "Regional Indicator Symbol Letter C"
    }, {
        code: [0x1F1E9],
        groupID: null,
        name: "Regional Indicator Symbol Letter D"
    }, {
        code: [0x1F1EA],
        groupID: null,
        name: "Regional Indicator Symbol Letter E"
    }, {
        code: [0x1F1EB],
        groupID: null,
        name: "Regional Indicator Symbol Letter F"
    }, {
        code: [0x1F1EC],
        groupID: null,
        name: "Regional Indicator Symbol Letter G"
    }, {
        code: [0x1F1ED],
        groupID: null,
        name: "Regional Indicator Symbol Letter H"
    }, {
        code: [0x1F1EE],
        groupID: null,
        name: "Regional Indicator Symbol Letter I"
    }, {
        code: [0x1F1EF],
        groupID: null,
        name: "Regional Indicator Symbol Letter J"
    }, {
        code: [0x1F1F0],
        groupID: null,
        name: "Regional Indicator Symbol Letter K"
    }, {
        code: [0x1F1F1],
        groupID: null,
        name: "Regional Indicator Symbol Letter L"
    }, {
        code: [0x1F1F2],
        groupID: null,
        name: "Regional Indicator Symbol Letter M"
    }, {
        code: [0x1F1F3],
        groupID: null,
        name: "Regional Indicator Symbol Letter N"
    }, {
        code: [0x1F1F4],
        groupID: null,
        name: "Regional Indicator Symbol Letter O"
    }, {
        code: [0x1F1F5],
        groupID: null,
        name: "Regional Indicator Symbol Letter P"
    }, {
        code: [0x1F1F6],
        groupID: null,
        name: "Regional Indicator Symbol Letter Q"
    }, {
        code: [0x1F1F7],
        groupID: null,
        name: "Regional Indicator Symbol Letter R"
    }, {
        code: [0x1F1F8],
        groupID: null,
        name: "Regional Indicator Symbol Letter S"
    }, {
        code: [0x1F1F9],
        groupID: null,
        name: "Regional Indicator Symbol Letter T"
    }, {
        code: [0x1F1FA],
        groupID: null,
        name: "Regional Indicator Symbol Letter U"
    }, {
        code: [0x1F1FB],
        groupID: null,
        name: "Regional Indicator Symbol Letter V"
    }, {
        code: [0x1F1FC],
        groupID: null,
        name: "Regional Indicator Symbol Letter W"
    }, {
        code: [0x1F1FD],
        groupID: null,
        name: "Regional Indicator Symbol Letter X"
    }, {
        code: [0x1F1FE],
        groupID: null,
        name: "Regional Indicator Symbol Letter Y"
    }, {
        code: [0x1F1FF],
        groupID: null,
        name: "Regional Indicator Symbol Letter Z"
    }, {
        code: [0xE003C],
        groupID: null,
        name: "Tag Less-Than Sign"
    }, {
        code: [0xE0039],
        groupID: null,
        name: "Tag Digit Nine"
    }, {
        code: [0xE004E],
        groupID: null,
        name: "Tag Latin Capital Letter N"
    }, {
        code: [0xFE0F],
        groupID: null,
        name: "Variation Selector-16"
    }, {
        code: [0x200D],
        groupID: null,
        name: "Zero Width Joiner"
    }, {
        code: [0x38],
        groupID: null,
        name: "Digit Eight"
    }, {
        code: [0x2A],
        groupID: null,
        name: "Asterisk"
    }, {
        code: [0xE002A],
        groupID: null,
        name: "Tag Asterisk"
    }, {
        code: [0xE0025],
        groupID: null,
        name: "Tag Percent Sign"
    }, {
        code: [0xE0035],
        groupID: null,
        name: "Tag Digit Five"
    }, {
        code: [0xE0060],
        groupID: null,
        name: "Tag Grave Accent"
    }, {
        code: [0xE0022],
        groupID: null,
        name: "Tag Quotation Mark"
    }, {
        code: [0xE0031],
        groupID: null,
        name: "Tag Digit One"
    }, {
        code: [0xE007F],
        groupID: null,
        name: "Cancel Tag"
    }, {
        code: [0xE0076],
        groupID: null,
        name: "Tag Latin Small Letter V"
    }, {
        code: [0xE0056],
        groupID: null,
        name: "Tag Latin Capital Letter V"
    }, {
        code: [0xE0075],
        groupID: null,
        name: "Tag Latin Small Letter U"
    }, {
        code: [0xE0057],
        groupID: null,
        name: "Tag Latin Capital Letter W"
    }, {
        code: [0xE0024],
        groupID: null,
        name: "Tag Dollar Sign"
    }, {
        code: [0xE005A],
        groupID: null,
        name: "Tag Latin Capital Letter Z"
    }, {
        code: [0xE004B],
        groupID: null,
        name: "Tag Latin Capital Letter K"
    }, {
        code: [0xE002D],
        groupID: null,
        name: "Tag Hyphen-Minus"
    }, {
        code: [0xE0043],
        groupID: null,
        name: "Tag Latin Capital Letter C"
    }, {
        code: [0x33],
        groupID: null,
        name: "Digit Three"
    }, {
        code: [0xE0077],
        groupID: null,
        name: "Tag Latin Small Letter W"
    }, {
        code: [0xE0050],
        groupID: null,
        name: "Tag Latin Capital Letter P"
    }, {
        code: [0xE002C],
        groupID: null,
        name: "Tag Comma"
    }, {
        code: [0xE0045],
        groupID: null,
        name: "Tag Latin Capital Letter E"
    }, {
        code: [0xE003D],
        groupID: null,
        name: "Tag Equals Sign"
    }, {
        code: [0xE007C],
        groupID: null,
        name: "Tag Vertical Line"
    },*/ {
        code: [0x20E3],
        groupID: 6,
        name: "Combining Enclosing Keycap"
    }, /*{
        code: [0xE0066],
        groupID: null,
        name: "Tag Latin Small Letter F"
    }, {
        code: [0xE0058],
        groupID: null,
        name: "Tag Latin Capital Letter X"
    }, {
        code: [0xE0048],
        groupID: null,
        name: "Tag Latin Capital Letter H"
    }, {
        code: [0xE005C],
        groupID: null,
        name: "Tag Reverse Solidus"
    }, {
        code: [0xE002E],
        groupID: null,
        name: "Tag Full Stop"
    }, {
        code: [0xE0044],
        groupID: null,
        name: "Tag Latin Capital Letter D"
    }, {
        code: [0xE0054],
        groupID: null,
        name: "Tag Latin Capital Letter T"
    }, {
        code: [0xE005F],
        groupID: null,
        name: "Tag Low Line"
    }, {
        code: [0xE0033],
        groupID: null,
        name: "Tag Digit Three"
    }, {
        code: [0xE003A],
        groupID: null,
        name: "Tag Colon"
    }, {
        code: [0x35],
        groupID: null,
        name: "Digit Five"
    }, {
        code: [0xE0063],
        groupID: null,
        name: "Tag Latin Small Letter C"
    }, {
        code: [0x32],
        groupID: null,
        name: "Digit Two"
    }, {
        code: [0xE006A],
        groupID: null,
        name: "Tag Latin Small Letter J"
    }, {
        code: [0xE0072],
        groupID: null,
        name: "Tag Latin Small Letter R"
    }, {
        code: [0xE0037],
        groupID: null,
        name: "Tag Digit Seven"
    }, {
        code: [0xE0032],
        groupID: null,
        name: "Tag Digit Two"
    }, {
        code: [0xE0068],
        groupID: null,
        name: "Tag Latin Small Letter H"
    }, {
        code: [0xE0069],
        groupID: null,
        name: "Tag Latin Small Letter I"
    }, {
        code: [0xE007E],
        groupID: null,
        name: "Tag Tilde"
    }, {
        code: [0xE007A],
        groupID: null,
        name: "Tag Latin Small Letter Z"
    }, {
        code: [0xE005E],
        groupID: null,
        name: "Tag Circumflex Accent"
    }, {
        code: [0xE006B],
        groupID: null,
        name: "Tag Latin Small Letter K"
    }, {
        code: [0xE0038],
        groupID: null,
        name: "Tag Digit Eight"
    }, {
        code: [0xE0055],
        groupID: null,
        name: "Tag Latin Capital Letter U"
    }, {
        code: [0xE003B],
        groupID: null,
        name: "Tag Semicolon"
    }, {
        code: [0xE0042],
        groupID: null,
        name: "Tag Latin Capital Letter B"
    }, {
        code: [0xE0046],
        groupID: null,
        name: "Tag Latin Capital Letter F"
    }, {
        code: [0xE0064],
        groupID: null,
        name: "Tag Latin Small Letter D"
    }, {
        code: [0xE006D],
        groupID: null,
        name: "Tag Latin Small Letter M"
    }, {
        code: [0xE0049],
        groupID: null,
        name: "Tag Latin Capital Letter I"
    }, {
        code: [0xE0034],
        groupID: null,
        name: "Tag Digit Four"
    }, {
        code: [0x37],
        groupID: null,
        name: "Digit Seven"
    }, {
        code: [0x34],
        groupID: null,
        name: "Digit Four"
    },*/ {
        code: [0xE0021],
        groupID: 7,
        name: "Tag Exclamation Mark"
    }, /*{
        code: [0xE0041],
        groupID: null,
        name: "Tag Latin Capital Letter a"
    }, {
        code: [0xE0023],
        groupID: null,
        name: "Tag Number Sign"
    }, {
        code: [0xE0040],
        groupID: null,
        name: "Tag Commercial at"
    }, {
        code: [0xE007D],
        groupID: null,
        name: "Tag Right Curly Bracket"
    }, {
        code: [0xE007B],
        groupID: null,
        name: "Tag Left Curly Bracket"
    }, {
        code: [0xE003E],
        groupID: null,
        name: "Tag Greater-Than Sign"
    }, {
        code: [0xE004D],
        groupID: null,
        name: "Tag Latin Capital Letter M"
    }, {
        code: [0xE0079],
        groupID: null,
        name: "Tag Latin Small Letter Y"
    }, {
        code: [0xE0030],
        groupID: null,
        name: "Tag Digit Zero"
    }, {
        code: [0xE0067],
        groupID: null,
        name: "Tag Latin Small Letter G"
    }, {
        code: [0xE0071],
        groupID: null,
        name: "Tag Latin Small Letter Q"
    }, {
        code: [0xE002F],
        groupID: null,
        name: "Tag Solidus"
    }, {
        code: [0xE0029],
        groupID: null,
        name: "Tag Right Parenthesis"
    }, {
        code: [0xE0073],
        groupID: null,
        name: "Tag Latin Small Letter S"
    }, {
        code: [0xE0061],
        groupID: null,
        name: "Tag Latin Small Letter a"
    }, {
        code: [0xE0052],
        groupID: null,
        name: "Tag Latin Capital Letter R"
    }, {
        code: [0xE0053],
        groupID: null,
        name: "Tag Latin Capital Letter S"
    }, {
        code: [0xE0074],
        groupID: null,
        name: "Tag Latin Small Letter T"
    },*/ {
        code: [0xE003F],
        groupID: 7,
        name: "Tag Question Mark"
    }, /*{
        code: [0xE0078],
        groupID: null,
        name: "Tag Latin Small Letter X"
    }, {
        code: [0xE006E],
        groupID: null,
        name: "Tag Latin Small Letter N"
    }, {
        code: [0xE006F],
        groupID: null,
        name: "Tag Latin Small Letter O"
    }, {
        code: [0xE0027],
        groupID: null,
        name: "Tag Apostrophe"
    }, {
        code: [0xE004C],
        groupID: null,
        name: "Tag Latin Capital Letter L"
    },*/ {
        code: [0xE002B],
        groupID: 7,
        name: "Tag Plus Sign"
    }, /*{
        code: [0xE006C],
        groupID: null,
        name: "Tag Latin Small Letter L"
    }, {
        code: [0xE0062],
        groupID: null,
        name: "Tag Latin Small Letter B"
    }, {
        code: [0x23],
        groupID: null,
        name: "Number Sign"
    }, {
        code: [0xE004A],
        groupID: null,
        name: "Tag Latin Capital Letter J"
    }, {
        code: [0xE005D],
        groupID: null,
        name: "Tag Right Square Bracket"
    }, {
        code: [0xE004F],
        groupID: null,
        name: "Tag Latin Capital Letter O"
    }, {
        code: [0xE0047],
        groupID: null,
        name: "Tag Latin Capital Letter G"
    }, {
        code: [0x39],
        groupID: null,
        name: "Digit Nine"
    }, {
        code: [0xE005B],
        groupID: null,
        name: "Tag Left Square Bracket"
    }, {
        code: [0x36],
        groupID: null,
        name: "Digit Six"
    }, {
        code: [0xE0026],
        groupID: null,
        name: "Tag Ampersand"
    }, {
        code: [0x30],
        groupID: null,
        name: "Digit Zero"
    }, {
        code: [0xE0059],
        groupID: null,
        name: "Tag Latin Capital Letter Y"
    }, {
        code: [0xE0020],
        groupID: null,
        name: "Tag Space"
    }, {
        code: [0xE0036],
        groupID: null,
        name: "Tag Digit Six"
    }, {
        code: [0xE0070],
        groupID: null,
        name: "Tag Latin Small Letter P"
    }, {
        code: [0xE0051],
        groupID: null,
        name: "Tag Latin Capital Letter Q"
    }, {
        code: [0x31],
        groupID: null,
        name: "Digit One"
    }, {
        code: [0xE0028],
        groupID: null,
        name: "Tag Left Parenthesis"
    }, {
        code: [0xE0065],
        groupID: null,
        name: "Tag Latin Small Letter E"
    }*/];
    for (var i = 0; i <= emojis.length - 1; i++)
        $(".emojis").append("<button class='emoji' data-group-id='" + emojis[i].groupID + "' style='display: none;'>" + String.fromCodePoint.apply(String, emojis[i].code) + "</button>");
    $(".emoji[data-group-id=1]").removeAttr("style");
});