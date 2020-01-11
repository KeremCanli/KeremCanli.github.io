$(document).ready(function () {
    var a = [{
        code: "0x1F600",
        groupID: null,
        name: "Grinning Face"
    }, {
        code: "0x1F603",
        groupID: null,
        name: "Grinning Face With Big Eyes"
    }, {
        code: "0x1F604",
        groupID: null,
        name: "Grinning Face With Smiling Eyes"
    }, {
        code: "0x1F601",
        groupID: null,
        name: "Beaming Face With Smiling Eyes"
    }, {
        code: "0x1F606",
        groupID: null,
        name: "Grinning Squinting Face"
    }, {
        code: "0x1F605",
        groupID: null,
        name: "Grinning Face With Sweat"
    }, {
        code: "0x1F923",
        groupID: null,
        name: "Rolling on the Floor Laughing"
    }, {
        code: "0x1F602",
        groupID: null,
        name: "Face With Tears of Joy"
    }, {
        code: "0x1F642",
        groupID: null,
        name: "Slightly Smiling Face"
    }, {
        code: "0x1F643",
        groupID: null,
        name: "Upside-Down Face"
    }, {
        code: "0x1F609",
        groupID: null,
        name: "Winking Face"
    }, {
        code: "0x1F60A",
        groupID: null,
        name: "Smiling Face With Smiling Eyes"
    }, {
        code: "0x1F607",
        groupID: null,
        name: "Smiling Face With Halo"
    }, {
        code: "0x1F970",
        groupID: null,
        name: "Smiling Face With Hearts"
    }, {
        code: "0x1F60D",
        groupID: null,
        name: "Smiling Face With Heart-Eyes"
    }, {
        code: "0x1F929",
        groupID: null,
        name: "Star-Struck"
    }, {
        code: "0x1F618",
        groupID: null,
        name: "Face Blowing a Kiss"
    }, {
        code: "0x1F617",
        groupID: null,
        name: "Kissing Face"
    }, {
        code: "0x263A",
        groupID: null,
        name: "Smiling Face"
    }, {
        code: "0x1F61A",
        groupID: null,
        name: "Kissing Face With Closed Eyes"
    }, {
        code: "0x1F619",
        groupID: null,
        name: "Kissing Face With Smiling Eyes"
    }, {
        code: "0x1F60B",
        groupID: null,
        name: "Face Savoring Food"
    }, {
        code: "0x1F61B",
        groupID: null,
        name: "Face With Tongue"
    }, {
        code: "0x1F61C",
        groupID: null,
        name: "Winking Face With Tongue"
    }, {
        code: "0x1F92A",
        groupID: null,
        name: "Zany Face"
    }, {
        code: "0x1F61D",
        groupID: null,
        name: "Squinting Face With Tongue"
    }, {
        code: "0x1F911",
        groupID: null,
        name: "Money-Mouth Face"
    }, {
        code: "0x1F917",
        groupID: null,
        name: "Hugging Face"
    }, {
        code: "0x1F92D",
        groupID: null,
        name: "Face With Hand Over Mouth"
    }, {
        code: "0x1F92B",
        groupID: null,
        name: "Shushing Face"
    }, {
        code: "0x1F914",
        groupID: null,
        name: "Thinking Face"
    }, {
        code: "0x1F910",
        groupID: null,
        name: "Zipper-Mouth Face"
    }, {
        code: "0x1F928",
        groupID: null,
        name: "Face With Raised Eyebrow"
    }, {
        code: "0x1F610",
        groupID: null,
        name: "Neutral Face"
    }, {
        code: "0x1F611",
        groupID: null,
        name: "Expressionless Face"
    }, {
        code: "0x1F636",
        groupID: null,
        name: "Face Without Mouth"
    }, {
        code: "0x1F60F",
        groupID: null,
        name: "Smirking Face"
    }, {
        code: "0x1F612",
        groupID: null,
        name: "Unamused Face"
    }, {
        code: "0x1F644",
        groupID: null,
        name: "Face With Rolling Eyes"
    }, {
        code: "0x1F62C",
        groupID: null,
        name: "Grimacing Face"
    }, {
        code: "0x1F925",
        groupID: null,
        name: "Lying Face"
    }, {
        code: "0x1F60C",
        groupID: null,
        name: "Relieved Face"
    }, {
        code: "0x1F614",
        groupID: null,
        name: "Pensive Face"
    }, {
        code: "0x1F62A",
        groupID: null,
        name: "Sleepy Face"
    }, {
        code: "0x1F924",
        groupID: null,
        name: "Drooling Face"
    }, {
        code: "0x1F634",
        groupID: null,
        name: "Sleeping Face"
    }, {
        code: "0x1F637",
        groupID: null,
        name: "Face With Medical Mask"
    }, {
        code: "0x1F912",
        groupID: null,
        name: "Face With Thermometer"
    }, {
        code: "0x1F915",
        groupID: null,
        name: "Face With Head-Bandage"
    }, {
        code: "0x1F922",
        groupID: null,
        name: "Nauseated Face"
    }, {
        code: "0x1F92E",
        groupID: null,
        name: "Face Vomiting"
    }, {
        code: "0x1F927",
        groupID: null,
        name: "Sneezing Face"
    }, {
        code: "0x1F975",
        groupID: null,
        name: "Hot Face"
    }, {
        code: "0x1F976",
        groupID: null,
        name: "Cold Face"
    }, {
        code: "0x1F974",
        groupID: null,
        name: "Woozy Face"
    }, {
        code: "0x1F635",
        groupID: null,
        name: "Dizzy Face"
    }, {
        code: "0x1F92F",
        groupID: null,
        name: "Exploding Head"
    }, {
        code: "0x1F920",
        groupID: null,
        name: "Cowboy Hat Face"
    }, {
        code: "0x1F973",
        groupID: null,
        name: "Partying Face"
    }, {
        code: "0x1F60E",
        groupID: null,
        name: "Smiling Face With Sunglasses"
    }, {
        code: "0x1F913",
        groupID: null,
        name: "Nerd Face"
    }, {
        code: "0x1F9D0",
        groupID: null,
        name: "Face With Monocle"
    }, {
        code: "0x1F615",
        groupID: null,
        name: "Confused Face"
    }, {
        code: "0x1F61F",
        groupID: null,
        name: "Worried Face"
    }, {
        code: "0x1F641",
        groupID: null,
        name: "Slightly Frowning Face"
    }, {
        code: "0x2639",
        groupID: null,
        name: "Frowning Face"
    }, {
        code: "0x1F62E",
        groupID: null,
        name: "Face With Open Mouth"
    }, {
        code: "0x1F62F",
        groupID: null,
        name: "Hushed Face"
    }, {
        code: "0x1F632",
        groupID: null,
        name: "Astonished Face"
    }, {
        code: "0x1F633",
        groupID: null,
        name: "Flushed Face"
    }, {
        code: "0x1F97A",
        groupID: null,
        name: "Pleading Face"
    }, {
        code: "0x1F626",
        groupID: null,
        name: "Frowning Face With Open Mouth"
    }, {
        code: "0x1F627",
        groupID: null,
        name: "Anguished Face"
    }, {
        code: "0x1F628",
        groupID: null,
        name: "Fearful Face"
    }, {
        code: "0x1F630",
        groupID: null,
        name: "Anxious Face With Sweat"
    }, {
        code: "0x1F625",
        groupID: null,
        name: "Sad but Relieved Face"
    }, {
        code: "0x1F622",
        groupID: null,
        name: "Crying Face"
    }, {
        code: "0x1F62D",
        groupID: null,
        name: "Loudly Crying Face"
    }, {
        code: "0x1F631",
        groupID: null,
        name: "Face Screaming in Fear"
    }, {
        code: "0x1F616",
        groupID: null,
        name: "Confounded Face"
    }, {
        code: "0x1F623",
        groupID: null,
        name: "Persevering Face"
    }, {
        code: "0x1F61E",
        groupID: null,
        name: "Disappointed Face"
    }, {
        code: "0x1F613",
        groupID: null,
        name: "Downcast Face With Sweat"
    }, {
        code: "0x1F629",
        groupID: null,
        name: "Weary Face"
    }, {
        code: "0x1F62B",
        groupID: null,
        name: "Tired Face"
    }, {
        code: "0x1F971",
        groupID: null,
        name: "Yawning Face"
    }, {
        code: "0x1F624",
        groupID: null,
        name: "Face With Steam From Nose"
    }, {
        code: "0x1F621",
        groupID: null,
        name: "Pouting Face"
    }, {
        code: "0x1F620",
        groupID: null,
        name: "Angry Face"
    }, {
        code: "0x1F92C",
        groupID: null,
        name: "Face With Symbols on Mouth"
    }, {
        code: "0x1F608",
        groupID: null,
        name: "Smiling Face With Horns"
    }, {
        code: "0x1F47F",
        groupID: null,
        name: "Angry Face With Horns"
    }, {
        code: "0x1F480",
        groupID: null,
        name: "Skull"
    }, {
        code: "0x2620",
        groupID: null,
        name: "Skull and Crossbones"
    }, {
        code: "0x1F4A9",
        groupID: null,
        name: "Pile of Poo"
    }, {
        code: "0x1F921",
        groupID: null,
        name: "Clown Face"
    }, {
        code: "0x1F479",
        groupID: null,
        name: "Ogre"
    }, {
        code: "0x1F47A",
        groupID: null,
        name: "Goblin"
    }, {
        code: "0x1F47B",
        groupID: null,
        name: "Ghost"
    }, {
        code: "0x1F47D",
        groupID: null,
        name: "Alien"
    }, {
        code: "0x1F47E",
        groupID: null,
        name: "Alien Monster"
    }, {
        code: "0x1F916",
        groupID: null,
        name: "Robot"
    }, {
        code: "0x1F63A",
        groupID: null,
        name: "Grinning Cat"
    }, {
        code: "0x1F638",
        groupID: null,
        name: "Grinning Cat With Smiling Eyes"
    }, {
        code: "0x1F639",
        groupID: null,
        name: "Cat With Tears of Joy"
    }, {
        code: "0x1F63B",
        groupID: null,
        name: "Smiling Cat With Heart-Eyes"
    }, {
        code: "0x1F63C",
        groupID: null,
        name: "Cat With Wry Smile"
    }, {
        code: "0x1F63D",
        groupID: null,
        name: "Kissing Cat"
    }, {
        code: "0x1F640",
        groupID: null,
        name: "Weary Cat"
    }, {
        code: "0x1F63F",
        groupID: null,
        name: "Crying Cat"
    }, {
        code: "0x1F63E",
        groupID: null,
        name: "Pouting Cat"
    }, {
        code: "0x1F648",
        groupID: null,
        name: "See-No-Evil Monkey"
    }, {
        code: "0x1F649",
        groupID: null,
        name: "Hear-No-Evil Monkey"
    }, {
        code: "0x1F64A",
        groupID: null,
        name: "Speak-No-Evil Monkey"
    }, {
        code: "0x1F48B",
        groupID: null,
        name: "Kiss Mark"
    }, {
        code: "0x1F48C",
        groupID: null,
        name: "Love Letter"
    }, {
        code: "0x1F498",
        groupID: null,
        name: "Heart With Arrow"
    }, {
        code: "0x1F49D",
        groupID: null,
        name: "Heart With Ribbon"
    }, {
        code: "0x1F496",
        groupID: null,
        name: "Sparkling Heart"
    }, {
        code: "0x1F497",
        groupID: null,
        name: "Growing Heart"
    }, {
        code: "0x1F493",
        groupID: null,
        name: "Beating Heart"
    }, {
        code: "0x1F49E",
        groupID: null,
        name: "Revolving Hearts"
    }, {
        code: "0x1F495",
        groupID: null,
        name: "Two Hearts"
    }, {
        code: "0x1F49F",
        groupID: null,
        name: "Heart Decoration"
    }, {
        code: "0x2763",
        groupID: null,
        name: "Heart Exclamation"
    }, {
        code: "0x1F494",
        groupID: null,
        name: "Broken Heart"
    }, {
        code: "0x2764",
        groupID: null,
        name: "Red Heart"
    }, {
        code: "0x1F9E1",
        groupID: null,
        name: "Orange Heart"
    }, {
        code: "0x1F49B",
        groupID: null,
        name: "Yellow Heart"
    }, {
        code: "0x1F49A",
        groupID: null,
        name: "Green Heart"
    }, {
        code: "0x1F499",
        groupID: null,
        name: "Blue Heart"
    }, {
        code: "0x1F49C",
        groupID: null,
        name: "Purple Heart"
    }, {
        code: "0x1F90E",
        groupID: null,
        name: "Brown Heart"
    }, {
        code: "0x1F5A4",
        groupID: null,
        name: "Black Heart"
    }, {
        code: "0x1F90D",
        groupID: null,
        name: "White Heart"
    }, {
        code: "0x1F4AF",
        groupID: null,
        name: "Hundred Points"
    }, {
        code: "0x1F4A2",
        groupID: null,
        name: "Anger Symbol"
    }, {
        code: "0x1F4A5",
        groupID: null,
        name: "Collision"
    }, {
        code: "0x1F4AB",
        groupID: null,
        name: "Dizzy"
    }, {
        code: "0x1F4A6",
        groupID: null,
        name: "Sweat Droplets"
    }, {
        code: "0x1F4A8",
        groupID: null,
        name: "Dashing Away"
    }, {
        code: "0x1F573",
        groupID: null,
        name: "Hole"
    }, {
        code: "0x1F4A3",
        groupID: null,
        name: "Bomb"
    }, {
        code: "0x1F4AC",
        groupID: null,
        name: "Speech Balloon"
    }, {
        code: "0x1F441, 0x200D, 0x1F5E8",
        groupID: null,
        name: "Eye in Speech Bubble"
    }, {
        code: "0x1F5E8",
        groupID: null,
        name: "Left Speech Bubble"
    }, {
        code: "0x1F5EF",
        groupID: null,
        name: "Right Anger Bubble"
    }, {
        code: "0x1F4AD",
        groupID: null,
        name: "Thought Balloon"
    }, {
        code: "0x1F4A4",
        groupID: null,
        name: "Zzz"
    }, {
        code: "0x1F44B",
        groupID: null,
        name: "Waving Hand"
    }, {
        code: "0x1F44B, 0x1F3FB",
        groupID: null,
        name: "Waving Hand: Light Skin Tone"
    }, {
        code: "0x1F44B, 0x1F3FC",
        groupID: null,
        name: "Waving Hand: Medium-Light Skin Tone"
    }, {
        code: "0x1F44B, 0x1F3FD",
        groupID: null,
        name: "Waving Hand: Medium Skin Tone"
    }, {
        code: "0x1F44B, 0x1F3FE",
        groupID: null,
        name: "Waving Hand: Medium-Dark Skin Tone"
    }, {
        code: "0x1F44B, 0x1F3FF",
        groupID: null,
        name: "Waving Hand: Dark Skin Tone"
    }, {
        code: "0x1F91A",
        groupID: null,
        name: "Raised Back of Hand"
    }, {
        code: "0x1F91A, 0x1F3FB",
        groupID: null,
        name: "Raised Back of Hand: Light Skin Tone"
    }, {
        code: "0x1F91A, 0x1F3FC",
        groupID: null,
        name: "Raised Back of Hand: Medium-Light Skin Tone"
    }, {
        code: "0x1F91A, 0x1F3FD",
        groupID: null,
        name: "Raised Back of Hand: Medium Skin Tone"
    }, {
        code: "0x1F91A, 0x1F3FE",
        groupID: null,
        name: "Raised Back of Hand: Medium-Dark Skin Tone"
    }, {
        code: "0x1F91A, 0x1F3FF",
        groupID: null,
        name: "Raised Back of Hand: Dark Skin Tone"
    }, {
        code: "0x1F590",
        groupID: null,
        name: "Hand With Fingers Splayed"
    }, {
        code: "0x1F590, 0x1F3FB",
        groupID: null,
        name: "Hand With Fingers Splayed: Light Skin Tone"
    }, {
        code: "0x1F590, 0x1F3FC",
        groupID: null,
        name: "Hand With Fingers Splayed: Medium-Light Skin Tone"
    }, {
        code: "0x1F590, 0x1F3FD",
        groupID: null,
        name: "Hand With Fingers Splayed: Medium Skin Tone"
    }, {
        code: "0x1F590, 0x1F3FE",
        groupID: null,
        name: "Hand With Fingers Splayed: Medium-Dark Skin Tone"
    }, {
        code: "0x1F590, 0x1F3FF",
        groupID: null,
        name: "Hand With Fingers Splayed: Dark Skin Tone"
    }, {
        code: "0x270B",
        groupID: null,
        name: "Raised Hand"
    }, {
        code: "0x270B, 0x1F3FB",
        groupID: null,
        name: "Raised Hand: Light Skin Tone"
    }, {
        code: "0x270B, 0x1F3FC",
        groupID: null,
        name: "Raised Hand: Medium-Light Skin Tone"
    }, {
        code: "0x270B, 0x1F3FD",
        groupID: null,
        name: "Raised Hand: Medium Skin Tone"
    }, {
        code: "0x270B, 0x1F3FE",
        groupID: null,
        name: "Raised Hand: Medium-Dark Skin Tone"
    }, {
        code: "0x270B, 0x1F3FF",
        groupID: null,
        name: "Raised Hand: Dark Skin Tone"
    }, {
        code: "0x1F596",
        groupID: null,
        name: "Vulcan Salute"
    }, {
        code: "0x1F596, 0x1F3FB",
        groupID: null,
        name: "Vulcan Salute: Light Skin Tone"
    }, {
        code: "0x1F596, 0x1F3FC",
        groupID: null,
        name: "Vulcan Salute: Medium-Light Skin Tone"
    }, {
        code: "0x1F596, 0x1F3FD",
        groupID: null,
        name: "Vulcan Salute: Medium Skin Tone"
    }, {
        code: "0x1F596, 0x1F3FE",
        groupID: null,
        name: "Vulcan Salute: Medium-Dark Skin Tone"
    }, {
        code: "0x1F596, 0x1F3FF",
        groupID: null,
        name: "Vulcan Salute: Dark Skin Tone"
    }, {
        code: "0x1F44C",
        groupID: null,
        name: "OK Hand"
    }, {
        code: "0x1F44C, 0x1F3FB",
        groupID: null,
        name: "OK Hand: Light Skin Tone"
    }, {
        code: "0x1F44C, 0x1F3FC",
        groupID: null,
        name: "OK Hand: Medium-Light Skin Tone"
    }, {
        code: "0x1F44C, 0x1F3FD",
        groupID: null,
        name: "OK Hand: Medium Skin Tone"
    }, {
        code: "0x1F44C, 0x1F3FE",
        groupID: null,
        name: "OK Hand: Medium-Dark Skin Tone"
    }, {
        code: "0x1F44C, 0x1F3FF",
        groupID: null,
        name: "OK Hand: Dark Skin Tone"
    }, {
        code: "0x1F90F",
        groupID: null,
        name: "Pinching Hand"
    }, {
        code: "0x1F90F, 0x1F3FB",
        groupID: null,
        name: "Pinching Hand: Light Skin Tone"
    }, {
        code: "0x1F90F, 0x1F3FC",
        groupID: null,
        name: "Pinching Hand: Medium-Light Skin Tone"
    }, {
        code: "0x1F90F, 0x1F3FD",
        groupID: null,
        name: "Pinching Hand: Medium Skin Tone"
    }, {
        code: "0x1F90F, 0x1F3FE",
        groupID: null,
        name: "Pinching Hand: Medium-Dark Skin Tone"
    }, {
        code: "0x1F90F, 0x1F3FF",
        groupID: null,
        name: "Pinching Hand: Dark Skin Tone"
    }, {
        code: "0x270C",
        groupID: null,
        name: "Victory Hand"
    }, {
        code: "0x270C, 0x1F3FB",
        groupID: null,
        name: "Victory Hand: Light Skin Tone"
    }, {
        code: "0x270C, 0x1F3FC",
        groupID: null,
        name: "Victory Hand: Medium-Light Skin Tone"
    }, {
        code: "0x270C, 0x1F3FD",
        groupID: null,
        name: "Victory Hand: Medium Skin Tone"
    }, {
        code: "0x270C, 0x1F3FE",
        groupID: null,
        name: "Victory Hand: Medium-Dark Skin Tone"
    }, {
        code: "0x270C, 0x1F3FF",
        groupID: null,
        name: "Victory Hand: Dark Skin Tone"
    }, {
        code: "0x1F91E",
        groupID: null,
        name: "Crossed Fingers"
    }, {
        code: "0x1F91E, 0x1F3FB",
        groupID: null,
        name: "Crossed Fingers: Light Skin Tone"
    }, {
        code: "0x1F91E, 0x1F3FC",
        groupID: null,
        name: "Crossed Fingers: Medium-Light Skin Tone"
    }, {
        code: "0x1F91E, 0x1F3FD",
        groupID: null,
        name: "Crossed Fingers: Medium Skin Tone"
    }, {
        code: "0x1F91E, 0x1F3FE",
        groupID: null,
        name: "Crossed Fingers: Medium-Dark Skin Tone"
    }, {
        code: "0x1F91E, 0x1F3FF",
        groupID: null,
        name: "Crossed Fingers: Dark Skin Tone"
    }, {
        code: "0x1F91F",
        groupID: null,
        name: "Love-You Gesture"
    }, {
        code: "0x1F91F, 0x1F3FB",
        groupID: null,
        name: "Love-You Gesture: Light Skin Tone"
    }, {
        code: "0x1F91F, 0x1F3FC",
        groupID: null,
        name: "Love-You Gesture: Medium-Light Skin Tone"
    }, {
        code: "0x1F91F, 0x1F3FD",
        groupID: null,
        name: "Love-You Gesture: Medium Skin Tone"
    }, {
        code: "0x1F91F, 0x1F3FE",
        groupID: null,
        name: "Love-You Gesture: Medium-Dark Skin Tone"
    }, {
        code: "0x1F91F, 0x1F3FF",
        groupID: null,
        name: "Love-You Gesture: Dark Skin Tone"
    }, {
        code: "0x1F918",
        groupID: null,
        name: "Sign of the Horns"
    }, {
        code: "0x1F918, 0x1F3FB",
        groupID: null,
        name: "Sign of the Horns: Light Skin Tone"
    }, {
        code: "0x1F918, 0x1F3FC",
        groupID: null,
        name: "Sign of the Horns: Medium-Light Skin Tone"
    }, {
        code: "0x1F918, 0x1F3FD",
        groupID: null,
        name: "Sign of the Horns: Medium Skin Tone"
    }, {
        code: "0x1F918, 0x1F3FE",
        groupID: null,
        name: "Sign of the Horns: Medium-Dark Skin Tone"
    }, {
        code: "0x1F918, 0x1F3FF",
        groupID: null,
        name: "Sign of the Horns: Dark Skin Tone"
    }, {
        code: "0x1F919",
        groupID: null,
        name: "Call Me Hand"
    }, {
        code: "0x1F919, 0x1F3FB",
        groupID: null,
        name: "Call Me Hand: Light Skin Tone"
    }, {
        code: "0x1F919, 0x1F3FC",
        groupID: null,
        name: "Call Me Hand: Medium-Light Skin Tone"
    }, {
        code: "0x1F919, 0x1F3FD",
        groupID: null,
        name: "Call Me Hand: Medium Skin Tone"
    }, {
        code: "0x1F919, 0x1F3FE",
        groupID: null,
        name: "Call Me Hand: Medium-Dark Skin Tone"
    }, {
        code: "0x1F919, 0x1F3FF",
        groupID: null,
        name: "Call Me Hand: Dark Skin Tone"
    }, {
        code: "0x1F448",
        groupID: null,
        name: "Backhand Index Pointing Left"
    }, {
        code: "0x1F448, 0x1F3FB",
        groupID: null,
        name: "Backhand Index Pointing Left: Light Skin Tone"
    }, {
        code: "0x1F448, 0x1F3FC",
        groupID: null,
        name: "Backhand Index Pointing Left: Medium-Light Skin Tone"
    }, {
        code: "0x1F448, 0x1F3FD",
        groupID: null,
        name: "Backhand Index Pointing Left: Medium Skin Tone"
    }, {
        code: "0x1F448, 0x1F3FE",
        groupID: null,
        name: "Backhand Index Pointing Left: Medium-Dark Skin Tone"
    }, {
        code: "0x1F448, 0x1F3FF",
        groupID: null,
        name: "Backhand Index Pointing Left: Dark Skin Tone"
    }, {
        code: "0x1F449",
        groupID: null,
        name: "Backhand Index Pointing Right"
    }, {
        code: "0x1F449, 0x1F3FB",
        groupID: null,
        name: "Backhand Index Pointing Right: Light Skin Tone"
    }, {
        code: "0x1F449, 0x1F3FC",
        groupID: null,
        name: "Backhand Index Pointing Right: Medium-Light Skin Tone"
    }, {
        code: "0x1F449, 0x1F3FD",
        groupID: null,
        name: "Backhand Index Pointing Right: Medium Skin Tone"
    }, {
        code: "0x1F449, 0x1F3FE",
        groupID: null,
        name: "Backhand Index Pointing Right: Medium-Dark Skin Tone"
    }, {
        code: "0x1F449, 0x1F3FF",
        groupID: null,
        name: "Backhand Index Pointing Right: Dark Skin Tone"
    }, {
        code: "0x1F446",
        groupID: null,
        name: "Backhand Index Pointing Up"
    }, {
        code: "0x1F446, 0x1F3FB",
        groupID: null,
        name: "Backhand Index Pointing Up: Light Skin Tone"
    }, {
        code: "0x1F446, 0x1F3FC",
        groupID: null,
        name: "Backhand Index Pointing Up: Medium-Light Skin Tone"
    }, {
        code: "0x1F446, 0x1F3FD",
        groupID: null,
        name: "Backhand Index Pointing Up: Medium Skin Tone"
    }, {
        code: "0x1F446, 0x1F3FE",
        groupID: null,
        name: "Backhand Index Pointing Up: Medium-Dark Skin Tone"
    }, {
        code: "0x1F446, 0x1F3FF",
        groupID: null,
        name: "Backhand Index Pointing Up: Dark Skin Tone"
    }, {
        code: "0x1F595",
        groupID: null,
        name: "Middle Finger"
    }, {
        code: "0x1F595, 0x1F3FB",
        groupID: null,
        name: "Middle Finger: Light Skin Tone"
    }, {
        code: "0x1F595, 0x1F3FC",
        groupID: null,
        name: "Middle Finger: Medium-Light Skin Tone"
    }, {
        code: "0x1F595, 0x1F3FD",
        groupID: null,
        name: "Middle Finger: Medium Skin Tone"
    }, {
        code: "0x1F595, 0x1F3FE",
        groupID: null,
        name: "Middle Finger: Medium-Dark Skin Tone"
    }, {
        code: "0x1F595, 0x1F3FF",
        groupID: null,
        name: "Middle Finger: Dark Skin Tone"
    }, {
        code: "0x1F447",
        groupID: null,
        name: "Backhand Index Pointing Down"
    }, {
        code: "0x1F447, 0x1F3FB",
        groupID: null,
        name: "Backhand Index Pointing Down: Light Skin Tone"
    }, {
        code: "0x1F447, 0x1F3FC",
        groupID: null,
        name: "Backhand Index Pointing Down: Medium-Light Skin Tone"
    }, {
        code: "0x1F447, 0x1F3FD",
        groupID: null,
        name: "Backhand Index Pointing Down: Medium Skin Tone"
    }, {
        code: "0x1F447, 0x1F3FE",
        groupID: null,
        name: "Backhand Index Pointing Down: Medium-Dark Skin Tone"
    }, {
        code: "0x1F447, 0x1F3FF",
        groupID: null,
        name: "Backhand Index Pointing Down: Dark Skin Tone"
    }, {
        code: "0x261D",
        groupID: null,
        name: "Index Pointing Up"
    }, {
        code: "0x261D, 0x1F3FB",
        groupID: null,
        name: "Index Pointing Up: Light Skin Tone"
    }, {
        code: "0x261D, 0x1F3FC",
        groupID: null,
        name: "Index Pointing Up: Medium-Light Skin Tone"
    }, {
        code: "0x261D, 0x1F3FD",
        groupID: null,
        name: "Index Pointing Up: Medium Skin Tone"
    }, {
        code: "0x261D, 0x1F3FE",
        groupID: null,
        name: "Index Pointing Up: Medium-Dark Skin Tone"
    }, {
        code: "0x261D, 0x1F3FF",
        groupID: null,
        name: "Index Pointing Up: Dark Skin Tone"
    }, {
        code: "0x1F44D",
        groupID: null,
        name: "Thumbs Up"
    }, {
        code: "0x1F44D, 0x1F3FB",
        groupID: null,
        name: "Thumbs Up: Light Skin Tone"
    }, {
        code: "0x1F44D, 0x1F3FC",
        groupID: null,
        name: "Thumbs Up: Medium-Light Skin Tone"
    }, {
        code: "0x1F44D, 0x1F3FD",
        groupID: null,
        name: "Thumbs Up: Medium Skin Tone"
    }, {
        code: "0x1F44D, 0x1F3FE",
        groupID: null,
        name: "Thumbs Up: Medium-Dark Skin Tone"
    }, {
        code: "0x1F44D, 0x1F3FF",
        groupID: null,
        name: "Thumbs Up: Dark Skin Tone"
    }, {
        code: "0x1F44E",
        groupID: null,
        name: "Thumbs Down"
    }, {
        code: "0x1F44E, 0x1F3FB",
        groupID: null,
        name: "Thumbs Down: Light Skin Tone"
    }, {
        code: "0x1F44E, 0x1F3FC",
        groupID: null,
        name: "Thumbs Down: Medium-Light Skin Tone"
    }, {
        code: "0x1F44E, 0x1F3FD",
        groupID: null,
        name: "Thumbs Down: Medium Skin Tone"
    }, {
        code: "0x1F44E, 0x1F3FE",
        groupID: null,
        name: "Thumbs Down: Medium-Dark Skin Tone"
    }, {
        code: "0x1F44E, 0x1F3FF",
        groupID: null,
        name: "Thumbs Down: Dark Skin Tone"
    }, {
        code: "0x270A",
        groupID: null,
        name: "Raised Fist"
    }, {
        code: "0x270A, 0x1F3FB",
        groupID: null,
        name: "Raised Fist: Light Skin Tone"
    }, {
        code: "0x270A, 0x1F3FC",
        groupID: null,
        name: "Raised Fist: Medium-Light Skin Tone"
    }, {
        code: "0x270A, 0x1F3FD",
        groupID: null,
        name: "Raised Fist: Medium Skin Tone"
    }, {
        code: "0x270A, 0x1F3FE",
        groupID: null,
        name: "Raised Fist: Medium-Dark Skin Tone"
    }, {
        code: "0x270A, 0x1F3FF",
        groupID: null,
        name: "Raised Fist: Dark Skin Tone"
    }, {
        code: "0x1F44A",
        groupID: null,
        name: "Oncoming Fist"
    }, {
        code: "0x1F44A, 0x1F3FB",
        groupID: null,
        name: "Oncoming Fist: Light Skin Tone"
    }, {
        code: "0x1F44A, 0x1F3FC",
        groupID: null,
        name: "Oncoming Fist: Medium-Light Skin Tone"
    }, {
        code: "0x1F44A, 0x1F3FD",
        groupID: null,
        name: "Oncoming Fist: Medium Skin Tone"
    }, {
        code: "0x1F44A, 0x1F3FE",
        groupID: null,
        name: "Oncoming Fist: Medium-Dark Skin Tone"
    }, {
        code: "0x1F44A, 0x1F3FF",
        groupID: null,
        name: "Oncoming Fist: Dark Skin Tone"
    }, {
        code: "0x1F91B",
        groupID: null,
        name: "Left-Facing Fist"
    }, {
        code: "0x1F91B, 0x1F3FB",
        groupID: null,
        name: "Left-Facing Fist: Light Skin Tone"
    }, {
        code: "0x1F91B, 0x1F3FC",
        groupID: null,
        name: "Left-Facing Fist: Medium-Light Skin Tone"
    }, {
        code: "0x1F91B, 0x1F3FD",
        groupID: null,
        name: "Left-Facing Fist: Medium Skin Tone"
    }, {
        code: "0x1F91B, 0x1F3FE",
        groupID: null,
        name: "Left-Facing Fist: Medium-Dark Skin Tone"
    }, {
        code: "0x1F91B, 0x1F3FF",
        groupID: null,
        name: "Left-Facing Fist: Dark Skin Tone"
    }, {
        code: "0x1F91C",
        groupID: null,
        name: "Right-Facing Fist"
    }, {
        code: "0x1F91C, 0x1F3FB",
        groupID: null,
        name: "Right-Facing Fist: Light Skin Tone"
    }, {
        code: "0x1F91C, 0x1F3FC",
        groupID: null,
        name: "Right-Facing Fist: Medium-Light Skin Tone"
    }, {
        code: "0x1F91C, 0x1F3FD",
        groupID: null,
        name: "Right-Facing Fist: Medium Skin Tone"
    }, {
        code: "0x1F91C, 0x1F3FE",
        groupID: null,
        name: "Right-Facing Fist: Medium-Dark Skin Tone"
    }, {
        code: "0x1F91C, 0x1F3FF",
        groupID: null,
        name: "Right-Facing Fist: Dark Skin Tone"
    }, {
        code: "0x1F44F",
        groupID: null,
        name: "Clapping Hands"
    }, {
        code: "0x1F44F, 0x1F3FB",
        groupID: null,
        name: "Clapping Hands: Light Skin Tone"
    }, {
        code: "0x1F44F, 0x1F3FC",
        groupID: null,
        name: "Clapping Hands: Medium-Light Skin Tone"
    }, {
        code: "0x1F44F, 0x1F3FD",
        groupID: null,
        name: "Clapping Hands: Medium Skin Tone"
    }, {
        code: "0x1F44F, 0x1F3FE",
        groupID: null,
        name: "Clapping Hands: Medium-Dark Skin Tone"
    }, {
        code: "0x1F44F, 0x1F3FF",
        groupID: null,
        name: "Clapping Hands: Dark Skin Tone"
    }, {
        code: "0x1F64C",
        groupID: null,
        name: "Raising Hands"
    }, {
        code: "0x1F64C, 0x1F3FB",
        groupID: null,
        name: "Raising Hands: Light Skin Tone"
    }, {
        code: "0x1F64C, 0x1F3FC",
        groupID: null,
        name: "Raising Hands: Medium-Light Skin Tone"
    }, {
        code: "0x1F64C, 0x1F3FD",
        groupID: null,
        name: "Raising Hands: Medium Skin Tone"
    }, {
        code: "0x1F64C, 0x1F3FE",
        groupID: null,
        name: "Raising Hands: Medium-Dark Skin Tone"
    }, {
        code: "0x1F64C, 0x1F3FF",
        groupID: null,
        name: "Raising Hands: Dark Skin Tone"
    }, {
        code: "0x1F450",
        groupID: null,
        name: "Open Hands"
    }, {
        code: "0x1F450, 0x1F3FB",
        groupID: null,
        name: "Open Hands: Light Skin Tone"
    }, {
        code: "0x1F450, 0x1F3FC",
        groupID: null,
        name: "Open Hands: Medium-Light Skin Tone"
    }, {
        code: "0x1F450, 0x1F3FD",
        groupID: null,
        name: "Open Hands: Medium Skin Tone"
    }, {
        code: "0x1F450, 0x1F3FE",
        groupID: null,
        name: "Open Hands: Medium-Dark Skin Tone"
    }, {
        code: "0x1F450, 0x1F3FF",
        groupID: null,
        name: "Open Hands: Dark Skin Tone"
    }, {
        code: "0x1F932",
        groupID: null,
        name: "Palms Up Together"
    }, {
        code: "0x1F932, 0x1F3FB",
        groupID: null,
        name: "Palms Up Together: Light Skin Tone"
    }, {
        code: "0x1F932, 0x1F3FC",
        groupID: null,
        name: "Palms Up Together: Medium-Light Skin Tone"
    }, {
        code: "0x1F932, 0x1F3FD",
        groupID: null,
        name: "Palms Up Together: Medium Skin Tone"
    }, {
        code: "0x1F932, 0x1F3FE",
        groupID: null,
        name: "Palms Up Together: Medium-Dark Skin Tone"
    }, {
        code: "0x1F932, 0x1F3FF",
        groupID: null,
        name: "Palms Up Together: Dark Skin Tone"
    }, {
        code: "0x1F91D",
        groupID: null,
        name: "Handshake"
    }, {
        code: "0x1F64F",
        groupID: null,
        name: "Folded Hands"
    }, {
        code: "0x1F64F, 0x1F3FB",
        groupID: null,
        name: "Folded Hands: Light Skin Tone"
    }, {
        code: "0x1F64F, 0x1F3FC",
        groupID: null,
        name: "Folded Hands: Medium-Light Skin Tone"
    }, {
        code: "0x1F64F, 0x1F3FD",
        groupID: null,
        name: "Folded Hands: Medium Skin Tone"
    }, {
        code: "0x1F64F, 0x1F3FE",
        groupID: null,
        name: "Folded Hands: Medium-Dark Skin Tone"
    }, {
        code: "0x1F64F, 0x1F3FF",
        groupID: null,
        name: "Folded Hands: Dark Skin Tone"
    }, {
        code: "0x270D",
        groupID: null,
        name: "Writing Hand"
    }, {
        code: "0x270D, 0x1F3FB",
        groupID: null,
        name: "Writing Hand: Light Skin Tone"
    }, {
        code: "0x270D, 0x1F3FC",
        groupID: null,
        name: "Writing Hand: Medium-Light Skin Tone"
    }, {
        code: "0x270D, 0x1F3FD",
        groupID: null,
        name: "Writing Hand: Medium Skin Tone"
    }, {
        code: "0x270D, 0x1F3FE",
        groupID: null,
        name: "Writing Hand: Medium-Dark Skin Tone"
    }, {
        code: "0x270D, 0x1F3FF",
        groupID: null,
        name: "Writing Hand: Dark Skin Tone"
    }, {
        code: "0x1F485",
        groupID: null,
        name: "Nail Polish"
    }, {
        code: "0x1F485, 0x1F3FB",
        groupID: null,
        name: "Nail Polish: Light Skin Tone"
    }, {
        code: "0x1F485, 0x1F3FC",
        groupID: null,
        name: "Nail Polish: Medium-Light Skin Tone"
    }, {
        code: "0x1F91D, 0x1F3FB",
        groupID: null,
        name: "Handshake, Type-1-2"
    }, {
        code: "0x1F91D, 0x1F3FC",
        groupID: null,
        name: "Handshake, Type-3"
    }, {
        code: "0x1F485, 0x1F3FD",
        groupID: null,
        name: "Nail Polish: Medium Skin Tone"
    }, {
        code: "0x1F91D, 0x1F3FD",
        groupID: null,
        name: "Handshake, Type-4"
    }, {
        code: "0x1F485, 0x1F3FE",
        groupID: null,
        name: "Nail Polish: Medium-Dark Skin Tone"
    }, {
        code: "0x1F485, 0x1F3FF",
        groupID: null,
        name: "Nail Polish: Dark Skin Tone"
    }, {
        code: "0x1F91D, 0x1F3FE",
        groupID: null,
        name: "Handshake, Type-5"
    }, {
        code: "0x1F933",
        groupID: null,
        name: "Selfie"
    }, {
        code: "0x1F91D, 0x1F3FF",
        groupID: null,
        name: "Handshake, Type-6"
    }, {
        code: "0x1F933, 0x1F3FB",
        groupID: null,
        name: "Selfie: Light Skin Tone"
    }, {
        code: "0x1F933, 0x1F3FC",
        groupID: null,
        name: "Selfie: Medium-Light Skin Tone"
    }, {
        code: "0x1F933, 0x1F3FD",
        groupID: null,
        name: "Selfie: Medium Skin Tone"
    }, {
        code: "0x1F933, 0x1F3FE",
        groupID: null,
        name: "Selfie: Medium-Dark Skin Tone"
    }, {
        code: "0x1F933, 0x1F3FF",
        groupID: null,
        name: "Selfie: Dark Skin Tone"
    }, {
        code: "0x1F4AA",
        groupID: null,
        name: "Flexed Biceps"
    }, {
        code: "0x1F4AA, 0x1F3FB",
        groupID: null,
        name: "Flexed Biceps: Light Skin Tone"
    }, {
        code: "0x1F4AA, 0x1F3FC",
        groupID: null,
        name: "Flexed Biceps: Medium-Light Skin Tone"
    }, {
        code: "0x1F4AA, 0x1F3FD",
        groupID: null,
        name: "Flexed Biceps: Medium Skin Tone"
    }, {
        code: "0x1F4AA, 0x1F3FE",
        groupID: null,
        name: "Flexed Biceps: Medium-Dark Skin Tone"
    }, {
        code: "0x1F4AA, 0x1F3FF",
        groupID: null,
        name: "Flexed Biceps: Dark Skin Tone"
    }, {
        code: "0x1F9BE",
        groupID: null,
        name: "Mechanical Arm"
    }, {
        code: "0x1F9BF",
        groupID: null,
        name: "Mechanical Leg"
    }, {
        code: "0x1F9B5",
        groupID: null,
        name: "Leg"
    }, {
        code: "0x1F9B5, 0x1F3FB",
        groupID: null,
        name: "Leg: Light Skin Tone"
    }, {
        code: "0x1F9B5, 0x1F3FC",
        groupID: null,
        name: "Leg: Medium-Light Skin Tone"
    }, {
        code: "0x1F9B5, 0x1F3FD",
        groupID: null,
        name: "Leg: Medium Skin Tone"
    }, {
        code: "0x1F9B5, 0x1F3FE",
        groupID: null,
        name: "Leg: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9B5, 0x1F3FF",
        groupID: null,
        name: "Leg: Dark Skin Tone"
    }, {
        code: "0x1F9B6",
        groupID: null,
        name: "Foot"
    }, {
        code: "0x1F9B6, 0x1F3FB",
        groupID: null,
        name: "Foot: Light Skin Tone"
    }, {
        code: "0x1F9B6, 0x1F3FC",
        groupID: null,
        name: "Foot: Medium-Light Skin Tone"
    }, {
        code: "0x1F9B6, 0x1F3FD",
        groupID: null,
        name: "Foot: Medium Skin Tone"
    }, {
        code: "0x1F9B6, 0x1F3FE",
        groupID: null,
        name: "Foot: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9B6, 0x1F3FF",
        groupID: null,
        name: "Foot: Dark Skin Tone"
    }, {
        code: "0x1F442",
        groupID: null,
        name: "Ear"
    }, {
        code: "0x1F442, 0x1F3FB",
        groupID: null,
        name: "Ear: Light Skin Tone"
    }, {
        code: "0x1F442, 0x1F3FC",
        groupID: null,
        name: "Ear: Medium-Light Skin Tone"
    }, {
        code: "0x1F442, 0x1F3FD",
        groupID: null,
        name: "Ear: Medium Skin Tone"
    }, {
        code: "0x1F442, 0x1F3FE",
        groupID: null,
        name: "Ear: Medium-Dark Skin Tone"
    }, {
        code: "0x1F442, 0x1F3FF",
        groupID: null,
        name: "Ear: Dark Skin Tone"
    }, {
        code: "0x1F9BB",
        groupID: null,
        name: "Ear With Hearing Aid"
    }, {
        code: "0x1F9BB, 0x1F3FB",
        groupID: null,
        name: "Ear With Hearing Aid: Light Skin Tone"
    }, {
        code: "0x1F9BB, 0x1F3FC",
        groupID: null,
        name: "Ear With Hearing Aid: Medium-Light Skin Tone"
    }, {
        code: "0x1F9BB, 0x1F3FD",
        groupID: null,
        name: "Ear With Hearing Aid: Medium Skin Tone"
    }, {
        code: "0x1F9BB, 0x1F3FE",
        groupID: null,
        name: "Ear With Hearing Aid: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9BB, 0x1F3FF",
        groupID: null,
        name: "Ear With Hearing Aid: Dark Skin Tone"
    }, {
        code: "0x1F443",
        groupID: null,
        name: "Nose"
    }, {
        code: "0x1F443, 0x1F3FB",
        groupID: null,
        name: "Nose: Light Skin Tone"
    }, {
        code: "0x1F443, 0x1F3FC",
        groupID: null,
        name: "Nose: Medium-Light Skin Tone"
    }, {
        code: "0x1F443, 0x1F3FD",
        groupID: null,
        name: "Nose: Medium Skin Tone"
    }, {
        code: "0x1F443, 0x1F3FE",
        groupID: null,
        name: "Nose: Medium-Dark Skin Tone"
    }, {
        code: "0x1F443, 0x1F3FF",
        groupID: null,
        name: "Nose: Dark Skin Tone"
    }, {
        code: "0x1F9E0",
        groupID: null,
        name: "Brain"
    }, {
        code: "0x1F9B7",
        groupID: null,
        name: "Tooth"
    }, {
        code: "0x1F9B4",
        groupID: null,
        name: "Bone"
    }, {
        code: "0x1F440",
        groupID: null,
        name: "Eyes"
    }, {
        code: "0x1F441",
        groupID: null,
        name: "Eye"
    }, {
        code: "0x1F445",
        groupID: null,
        name: "Tongue"
    }, {
        code: "0x1F444",
        groupID: null,
        name: "Mouth"
    }, {
        code: "0x1F476",
        groupID: null,
        name: "Baby"
    }, {
        code: "0x1F476, 0x1F3FB",
        groupID: null,
        name: "Baby: Light Skin Tone"
    }, {
        code: "0x1F476, 0x1F3FC",
        groupID: null,
        name: "Baby: Medium-Light Skin Tone"
    }, {
        code: "0x1F476, 0x1F3FD",
        groupID: null,
        name: "Baby: Medium Skin Tone"
    }, {
        code: "0x1F476, 0x1F3FE",
        groupID: null,
        name: "Baby: Medium-Dark Skin Tone"
    }, {
        code: "0x1F476, 0x1F3FF",
        groupID: null,
        name: "Baby: Dark Skin Tone"
    }, {
        code: "0x1F9D2",
        groupID: null,
        name: "Child"
    }, {
        code: "0x1F9D2, 0x1F3FB",
        groupID: null,
        name: "Child: Light Skin Tone"
    }, {
        code: "0x1F9D2, 0x1F3FC",
        groupID: null,
        name: "Child: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D2, 0x1F3FD",
        groupID: null,
        name: "Child: Medium Skin Tone"
    }, {
        code: "0x1F9D2, 0x1F3FE",
        groupID: null,
        name: "Child: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D2, 0x1F3FF",
        groupID: null,
        name: "Child: Dark Skin Tone"
    }, {
        code: "0x1F466",
        groupID: null,
        name: "Boy"
    }, {
        code: "0x1F466, 0x1F3FB",
        groupID: null,
        name: "Boy: Light Skin Tone"
    }, {
        code: "0x1F466, 0x1F3FC",
        groupID: null,
        name: "Boy: Medium-Light Skin Tone"
    }, {
        code: "0x1F466, 0x1F3FD",
        groupID: null,
        name: "Boy: Medium Skin Tone"
    }, {
        code: "0x1F466, 0x1F3FE",
        groupID: null,
        name: "Boy: Medium-Dark Skin Tone"
    }, {
        code: "0x1F466, 0x1F3FF",
        groupID: null,
        name: "Boy: Dark Skin Tone"
    }, {
        code: "0x1F467",
        groupID: null,
        name: "Girl"
    }, {
        code: "0x1F467, 0x1F3FB",
        groupID: null,
        name: "Girl: Light Skin Tone"
    }, {
        code: "0x1F467, 0x1F3FC",
        groupID: null,
        name: "Girl: Medium-Light Skin Tone"
    }, {
        code: "0x1F467, 0x1F3FD",
        groupID: null,
        name: "Girl: Medium Skin Tone"
    }, {
        code: "0x1F467, 0x1F3FE",
        groupID: null,
        name: "Girl: Medium-Dark Skin Tone"
    }, {
        code: "0x1F467, 0x1F3FF",
        groupID: null,
        name: "Girl: Dark Skin Tone"
    }, {
        code: "0x1F9D1",
        groupID: null,
        name: "Person"
    }, {
        code: "0x1F9D1, 0x1F3FB",
        groupID: null,
        name: "Person: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC",
        groupID: null,
        name: "Person: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD",
        groupID: null,
        name: "Person: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE",
        groupID: null,
        name: "Person: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF",
        groupID: null,
        name: "Person: Dark Skin Tone"
    }, {
        code: "0x1F471",
        groupID: null,
        name: "Person: Blond Hair"
    }, {
        code: "0x1F471, 0x1F3FB",
        groupID: null,
        name: "Person: Light Skin Tone, Blond Hair"
    }, {
        code: "0x1F471, 0x1F3FC",
        groupID: null,
        name: "Person: Medium-Light Skin Tone, Blond Hair"
    }, {
        code: "0x1F471, 0x1F3FD",
        groupID: null,
        name: "Person: Medium Skin Tone, Blond Hair"
    }, {
        code: "0x1F471, 0x1F3FE",
        groupID: null,
        name: "Person: Medium-Dark Skin Tone, Blond Hair"
    }, {
        code: "0x1F471, 0x1F3FF",
        groupID: null,
        name: "Person: Dark Skin Tone, Blond Hair"
    }, {
        code: "0x1F468",
        groupID: null,
        name: "Man"
    }, {
        code: "0x1F468, 0x1F3FB",
        groupID: null,
        name: "Man: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC",
        groupID: null,
        name: "Man: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD",
        groupID: null,
        name: "Man: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE",
        groupID: null,
        name: "Man: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF",
        groupID: null,
        name: "Man: Dark Skin Tone"
    }, {
        code: "0x1F9D4",
        groupID: null,
        name: "Man: Beard"
    }, {
        code: "0x1F9D4, 0x1F3FB",
        groupID: null,
        name: "Man: Light Skin Tone, Beard"
    }, {
        code: "0x1F9D4, 0x1F3FC",
        groupID: null,
        name: "Man: Medium-Light Skin Tone, Beard"
    }, {
        code: "0x1F9D4, 0x1F3FD",
        groupID: null,
        name: "Man: Medium Skin Tone, Beard"
    }, {
        code: "0x1F9D4, 0x1F3FE",
        groupID: null,
        name: "Man: Medium-Dark Skin Tone, Beard"
    }, {
        code: "0x1F9D4, 0x1F3FF",
        groupID: null,
        name: "Man: Dark Skin Tone, Beard"
    }, {
        code: "0x1F468, 0x200D, 0x1F9B0",
        groupID: null,
        name: "Man: Red Hair"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F9B0",
        groupID: null,
        name: "Man: Light Skin Tone, Red Hair"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F9B0",
        groupID: null,
        name: "Man: Medium-Light Skin Tone, Red Hair"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F9B0",
        groupID: null,
        name: "Man: Medium Skin Tone, Red Hair"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F9B0",
        groupID: null,
        name: "Man: Medium-Dark Skin Tone, Red Hair"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F9B0",
        groupID: null,
        name: "Man: Dark Skin Tone, Red Hair"
    }, {
        code: "0x1F468, 0x200D, 0x1F9B1",
        groupID: null,
        name: "Man: Curly Hair"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F9B1",
        groupID: null,
        name: "Man: Light Skin Tone, Curly Hair"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F9B1",
        groupID: null,
        name: "Man: Medium-Light Skin Tone, Curly Hair"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F9B1",
        groupID: null,
        name: "Man: Medium Skin Tone, Curly Hair"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F9B1",
        groupID: null,
        name: "Man: Medium-Dark Skin Tone, Curly Hair"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F9B1",
        groupID: null,
        name: "Man: Dark Skin Tone, Curly Hair"
    }, {
        code: "0x1F468, 0x200D, 0x1F9B3",
        groupID: null,
        name: "Man: White Hair"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F9B3",
        groupID: null,
        name: "Man: Light Skin Tone, White Hair"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F9B3",
        groupID: null,
        name: "Man: Medium-Light Skin Tone, White Hair"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F9B3",
        groupID: null,
        name: "Man: Medium Skin Tone, White Hair"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F9B3",
        groupID: null,
        name: "Man: Medium-Dark Skin Tone, White Hair"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F9B3",
        groupID: null,
        name: "Man: Dark Skin Tone, White Hair"
    }, {
        code: "0x1F468, 0x200D, 0x1F9B2",
        groupID: null,
        name: "Man: Bald"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F9B2",
        groupID: null,
        name: "Man: Light Skin Tone, Bald"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F9B2",
        groupID: null,
        name: "Man: Medium-Light Skin Tone, Bald"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F9B2",
        groupID: null,
        name: "Man: Medium Skin Tone, Bald"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F9B2",
        groupID: null,
        name: "Man: Medium-Dark Skin Tone, Bald"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F9B2",
        groupID: null,
        name: "Man: Dark Skin Tone, Bald"
    }, {
        code: "0x1F469",
        groupID: null,
        name: "Woman"
    }, {
        code: "0x1F469, 0x1F3FB",
        groupID: null,
        name: "Woman: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC",
        groupID: null,
        name: "Woman: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD",
        groupID: null,
        name: "Woman: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE",
        groupID: null,
        name: "Woman: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF",
        groupID: null,
        name: "Woman: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x1F9B0",
        groupID: null,
        name: "Woman: Red Hair"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F9B0",
        groupID: null,
        name: "Woman: Light Skin Tone, Red Hair"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F9B0",
        groupID: null,
        name: "Woman: Medium-Light Skin Tone, Red Hair"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F9B0",
        groupID: null,
        name: "Woman: Medium Skin Tone, Red Hair"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F9B0",
        groupID: null,
        name: "Woman: Medium-Dark Skin Tone, Red Hair"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F9B0",
        groupID: null,
        name: "Woman: Dark Skin Tone, Red Hair"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F9B0",
        groupID: null,
        name: "Person: Red Hair"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F9B0",
        groupID: null,
        name: "Person: Light Skin Tone, Red Hair"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F9B0",
        groupID: null,
        name: "Person: Medium-Light Skin Tone, Red Hair"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F9B0",
        groupID: null,
        name: "Person: Medium Skin Tone, Red Hair"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F9B0",
        groupID: null,
        name: "Person: Medium-Dark Skin Tone, Red Hair"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F9B0",
        groupID: null,
        name: "Person: Dark Skin Tone, Red Hair"
    }, {
        code: "0x1F469, 0x200D, 0x1F9B1",
        groupID: null,
        name: "Woman: Curly Hair"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F9B1",
        groupID: null,
        name: "Woman: Light Skin Tone, Curly Hair"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F9B1",
        groupID: null,
        name: "Woman: Medium-Light Skin Tone, Curly Hair"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F9B1",
        groupID: null,
        name: "Woman: Medium Skin Tone, Curly Hair"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F9B1",
        groupID: null,
        name: "Woman: Medium-Dark Skin Tone, Curly Hair"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F9B1",
        groupID: null,
        name: "Woman: Dark Skin Tone, Curly Hair"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F9B1",
        groupID: null,
        name: "Person: Curly Hair"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F9B1",
        groupID: null,
        name: "Person: Light Skin Tone, Curly Hair"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F9B1",
        groupID: null,
        name: "Person: Medium-Light Skin Tone, Curly Hair"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F9B1",
        groupID: null,
        name: "Person: Medium Skin Tone, Curly Hair"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F9B1",
        groupID: null,
        name: "Person: Medium-Dark Skin Tone, Curly Hair"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F9B1",
        groupID: null,
        name: "Person: Dark Skin Tone, Curly Hair"
    }, {
        code: "0x1F469, 0x200D, 0x1F9B3",
        groupID: null,
        name: "Woman: White Hair"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F9B3",
        groupID: null,
        name: "Woman: Light Skin Tone, White Hair"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F9B3",
        groupID: null,
        name: "Woman: Medium-Light Skin Tone, White Hair"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F9B3",
        groupID: null,
        name: "Woman: Medium Skin Tone, White Hair"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F9B3",
        groupID: null,
        name: "Woman: Medium-Dark Skin Tone, White Hair"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F9B3",
        groupID: null,
        name: "Woman: Dark Skin Tone, White Hair"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F9B3",
        groupID: null,
        name: "Person: White Hair"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F9B3",
        groupID: null,
        name: "Person: Light Skin Tone, White Hair"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F9B3",
        groupID: null,
        name: "Person: Medium-Light Skin Tone, White Hair"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F9B3",
        groupID: null,
        name: "Person: Medium Skin Tone, White Hair"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F9B3",
        groupID: null,
        name: "Person: Medium-Dark Skin Tone, White Hair"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F9B3",
        groupID: null,
        name: "Person: Dark Skin Tone, White Hair"
    }, {
        code: "0x1F469, 0x200D, 0x1F9B2",
        groupID: null,
        name: "Woman: Bald"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F9B2",
        groupID: null,
        name: "Woman: Light Skin Tone, Bald"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F9B2",
        groupID: null,
        name: "Woman: Medium-Light Skin Tone, Bald"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F9B2",
        groupID: null,
        name: "Woman: Medium Skin Tone, Bald"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F9B2",
        groupID: null,
        name: "Woman: Medium-Dark Skin Tone, Bald"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F9B2",
        groupID: null,
        name: "Woman: Dark Skin Tone, Bald"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F9B2",
        groupID: null,
        name: "Person: Bald"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F9B2",
        groupID: null,
        name: "Person: Light Skin Tone, Bald"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F9B2",
        groupID: null,
        name: "Person: Medium-Light Skin Tone, Bald"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F9B2",
        groupID: null,
        name: "Person: Medium Skin Tone, Bald"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F9B2",
        groupID: null,
        name: "Person: Medium-Dark Skin Tone, Bald"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F9B2",
        groupID: null,
        name: "Person: Dark Skin Tone, Bald"
    }, {
        code: "0x1F471, 0x200D, 0x2640",
        groupID: null,
        name: "Woman: Blond Hair"
    }, {
        code: "0x1F471, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman: Light Skin Tone, Blond Hair"
    }, {
        code: "0x1F471, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman: Medium-Light Skin Tone, Blond Hair"
    }, {
        code: "0x1F471, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman: Medium Skin Tone, Blond Hair"
    }, {
        code: "0x1F471, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman: Medium-Dark Skin Tone, Blond Hair"
    }, {
        code: "0x1F471, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman: Dark Skin Tone, Blond Hair"
    }, {
        code: "0x1F471, 0x200D, 0x2642",
        groupID: null,
        name: "Man: Blond Hair"
    }, {
        code: "0x1F471, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man: Light Skin Tone, Blond Hair"
    }, {
        code: "0x1F471, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man: Medium-Light Skin Tone, Blond Hair"
    }, {
        code: "0x1F471, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man: Medium Skin Tone, Blond Hair"
    }, {
        code: "0x1F471, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man: Medium-Dark Skin Tone, Blond Hair"
    }, {
        code: "0x1F471, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man: Dark Skin Tone, Blond Hair"
    }, {
        code: "0x1F9D3",
        groupID: null,
        name: "Older Person"
    }, {
        code: "0x1F9D3, 0x1F3FB",
        groupID: null,
        name: "Older Person: Light Skin Tone"
    }, {
        code: "0x1F9D3, 0x1F3FC",
        groupID: null,
        name: "Older Person: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D3, 0x1F3FD",
        groupID: null,
        name: "Older Person: Medium Skin Tone"
    }, {
        code: "0x1F9D3, 0x1F3FE",
        groupID: null,
        name: "Older Person: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D3, 0x1F3FF",
        groupID: null,
        name: "Older Person: Dark Skin Tone"
    }, {
        code: "0x1F474",
        groupID: null,
        name: "Old Man"
    }, {
        code: "0x1F474, 0x1F3FB",
        groupID: null,
        name: "Old Man: Light Skin Tone"
    }, {
        code: "0x1F474, 0x1F3FC",
        groupID: null,
        name: "Old Man: Medium-Light Skin Tone"
    }, {
        code: "0x1F474, 0x1F3FD",
        groupID: null,
        name: "Old Man: Medium Skin Tone"
    }, {
        code: "0x1F474, 0x1F3FE",
        groupID: null,
        name: "Old Man: Medium-Dark Skin Tone"
    }, {
        code: "0x1F474, 0x1F3FF",
        groupID: null,
        name: "Old Man: Dark Skin Tone"
    }, {
        code: "0x1F475",
        groupID: null,
        name: "Old Woman"
    }, {
        code: "0x1F475, 0x1F3FB",
        groupID: null,
        name: "Old Woman: Light Skin Tone"
    }, {
        code: "0x1F475, 0x1F3FC",
        groupID: null,
        name: "Old Woman: Medium-Light Skin Tone"
    }, {
        code: "0x1F475, 0x1F3FD",
        groupID: null,
        name: "Old Woman: Medium Skin Tone"
    }, {
        code: "0x1F475, 0x1F3FE",
        groupID: null,
        name: "Old Woman: Medium-Dark Skin Tone"
    }, {
        code: "0x1F475, 0x1F3FF",
        groupID: null,
        name: "Old Woman: Dark Skin Tone"
    }, {
        code: "0x1F64D",
        groupID: null,
        name: "Person Frowning"
    }, {
        code: "0x1F64D, 0x1F3FB",
        groupID: null,
        name: "Person Frowning: Light Skin Tone"
    }, {
        code: "0x1F64D, 0x1F3FC",
        groupID: null,
        name: "Person Frowning: Medium-Light Skin Tone"
    }, {
        code: "0x1F64D, 0x1F3FD",
        groupID: null,
        name: "Person Frowning: Medium Skin Tone"
    }, {
        code: "0x1F64D, 0x1F3FE",
        groupID: null,
        name: "Person Frowning: Medium-Dark Skin Tone"
    }, {
        code: "0x1F64D, 0x1F3FF",
        groupID: null,
        name: "Person Frowning: Dark Skin Tone"
    }, {
        code: "0x1F64D, 0x200D, 0x2642",
        groupID: null,
        name: "Man Frowning"
    }, {
        code: "0x1F64D, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Frowning: Light Skin Tone"
    }, {
        code: "0x1F64D, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Frowning: Medium-Light Skin Tone"
    }, {
        code: "0x1F64D, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Frowning: Medium Skin Tone"
    }, {
        code: "0x1F64D, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Frowning: Medium-Dark Skin Tone"
    }, {
        code: "0x1F64D, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Frowning: Dark Skin Tone"
    }, {
        code: "0x1F64D, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Frowning"
    }, {
        code: "0x1F64D, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Frowning: Light Skin Tone"
    }, {
        code: "0x1F64D, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Frowning: Medium-Light Skin Tone"
    }, {
        code: "0x1F64D, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Frowning: Medium Skin Tone"
    }, {
        code: "0x1F64D, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Frowning: Medium-Dark Skin Tone"
    }, {
        code: "0x1F64D, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Frowning: Dark Skin Tone"
    }, {
        code: "0x1F64E",
        groupID: null,
        name: "Person Pouting"
    }, {
        code: "0x1F64E, 0x1F3FB",
        groupID: null,
        name: "Person Pouting: Light Skin Tone"
    }, {
        code: "0x1F64E, 0x1F3FC",
        groupID: null,
        name: "Person Pouting: Medium-Light Skin Tone"
    }, {
        code: "0x1F64E, 0x1F3FD",
        groupID: null,
        name: "Person Pouting: Medium Skin Tone"
    }, {
        code: "0x1F64E, 0x1F3FE",
        groupID: null,
        name: "Person Pouting: Medium-Dark Skin Tone"
    }, {
        code: "0x1F64E, 0x1F3FF",
        groupID: null,
        name: "Person Pouting: Dark Skin Tone"
    }, {
        code: "0x1F64E, 0x200D, 0x2642",
        groupID: null,
        name: "Man Pouting"
    }, {
        code: "0x1F64E, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Pouting: Light Skin Tone"
    }, {
        code: "0x1F64E, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Pouting: Medium-Light Skin Tone"
    }, {
        code: "0x1F64E, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Pouting: Medium Skin Tone"
    }, {
        code: "0x1F64E, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Pouting: Medium-Dark Skin Tone"
    }, {
        code: "0x1F64E, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Pouting: Dark Skin Tone"
    }, {
        code: "0x1F64E, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Pouting"
    }, {
        code: "0x1F64E, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Pouting: Light Skin Tone"
    }, {
        code: "0x1F64E, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Pouting: Medium-Light Skin Tone"
    }, {
        code: "0x1F64E, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Pouting: Medium Skin Tone"
    }, {
        code: "0x1F64E, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Pouting: Medium-Dark Skin Tone"
    }, {
        code: "0x1F64E, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Pouting: Dark Skin Tone"
    }, {
        code: "0x1F645",
        groupID: null,
        name: "Person Gesturing No"
    }, {
        code: "0x1F645, 0x1F3FB",
        groupID: null,
        name: "Person Gesturing No: Light Skin Tone"
    }, {
        code: "0x1F645, 0x1F3FC",
        groupID: null,
        name: "Person Gesturing No: Medium-Light Skin Tone"
    }, {
        code: "0x1F645, 0x1F3FD",
        groupID: null,
        name: "Person Gesturing No: Medium Skin Tone"
    }, {
        code: "0x1F645, 0x1F3FE",
        groupID: null,
        name: "Person Gesturing No: Medium-Dark Skin Tone"
    }, {
        code: "0x1F645, 0x1F3FF",
        groupID: null,
        name: "Person Gesturing No: Dark Skin Tone"
    }, {
        code: "0x1F645, 0x200D, 0x2642",
        groupID: null,
        name: "Man Gesturing No"
    }, {
        code: "0x1F645, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Gesturing No: Light Skin Tone"
    }, {
        code: "0x1F645, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Gesturing No: Medium-Light Skin Tone"
    }, {
        code: "0x1F645, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Gesturing No: Medium Skin Tone"
    }, {
        code: "0x1F645, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Gesturing No: Medium-Dark Skin Tone"
    }, {
        code: "0x1F645, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Gesturing No: Dark Skin Tone"
    }, {
        code: "0x1F645, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Gesturing No"
    }, {
        code: "0x1F645, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Gesturing No: Light Skin Tone"
    }, {
        code: "0x1F645, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Gesturing No: Medium-Light Skin Tone"
    }, {
        code: "0x1F645, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Gesturing No: Medium Skin Tone"
    }, {
        code: "0x1F645, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Gesturing No: Medium-Dark Skin Tone"
    }, {
        code: "0x1F645, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Gesturing No: Dark Skin Tone"
    }, {
        code: "0x1F646",
        groupID: null,
        name: "Person Gesturing OK"
    }, {
        code: "0x1F646, 0x1F3FB",
        groupID: null,
        name: "Person Gesturing OK: Light Skin Tone"
    }, {
        code: "0x1F646, 0x1F3FC",
        groupID: null,
        name: "Person Gesturing OK: Medium-Light Skin Tone"
    }, {
        code: "0x1F646, 0x1F3FD",
        groupID: null,
        name: "Person Gesturing OK: Medium Skin Tone"
    }, {
        code: "0x1F646, 0x1F3FE",
        groupID: null,
        name: "Person Gesturing OK: Medium-Dark Skin Tone"
    }, {
        code: "0x1F646, 0x1F3FF",
        groupID: null,
        name: "Person Gesturing OK: Dark Skin Tone"
    }, {
        code: "0x1F646, 0x200D, 0x2642",
        groupID: null,
        name: "Man Gesturing OK"
    }, {
        code: "0x1F646, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Gesturing OK: Light Skin Tone"
    }, {
        code: "0x1F646, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Gesturing OK: Medium-Light Skin Tone"
    }, {
        code: "0x1F646, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Gesturing OK: Medium Skin Tone"
    }, {
        code: "0x1F646, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Gesturing OK: Medium-Dark Skin Tone"
    }, {
        code: "0x1F646, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Gesturing OK: Dark Skin Tone"
    }, {
        code: "0x1F646, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Gesturing OK"
    }, {
        code: "0x1F646, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Gesturing OK: Light Skin Tone"
    }, {
        code: "0x1F646, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Gesturing OK: Medium-Light Skin Tone"
    }, {
        code: "0x1F646, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Gesturing OK: Medium Skin Tone"
    }, {
        code: "0x1F646, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Gesturing OK: Medium-Dark Skin Tone"
    }, {
        code: "0x1F646, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Gesturing OK: Dark Skin Tone"
    }, {
        code: "0x1F481",
        groupID: null,
        name: "Person Tipping Hand"
    }, {
        code: "0x1F481, 0x1F3FB",
        groupID: null,
        name: "Person Tipping Hand: Light Skin Tone"
    }, {
        code: "0x1F481, 0x1F3FC",
        groupID: null,
        name: "Person Tipping Hand: Medium-Light Skin Tone"
    }, {
        code: "0x1F481, 0x1F3FD",
        groupID: null,
        name: "Person Tipping Hand: Medium Skin Tone"
    }, {
        code: "0x1F481, 0x1F3FE",
        groupID: null,
        name: "Person Tipping Hand: Medium-Dark Skin Tone"
    }, {
        code: "0x1F481, 0x1F3FF",
        groupID: null,
        name: "Person Tipping Hand: Dark Skin Tone"
    }, {
        code: "0x1F481, 0x200D, 0x2642",
        groupID: null,
        name: "Man Tipping Hand"
    }, {
        code: "0x1F481, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Tipping Hand: Light Skin Tone"
    }, {
        code: "0x1F481, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Tipping Hand: Medium-Light Skin Tone"
    }, {
        code: "0x1F481, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Tipping Hand: Medium Skin Tone"
    }, {
        code: "0x1F481, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Tipping Hand: Medium-Dark Skin Tone"
    }, {
        code: "0x1F481, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Tipping Hand: Dark Skin Tone"
    }, {
        code: "0x1F481, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Tipping Hand"
    }, {
        code: "0x1F481, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Tipping Hand: Light Skin Tone"
    }, {
        code: "0x1F481, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Tipping Hand: Medium-Light Skin Tone"
    }, {
        code: "0x1F481, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Tipping Hand: Medium Skin Tone"
    }, {
        code: "0x1F481, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Tipping Hand: Medium-Dark Skin Tone"
    }, {
        code: "0x1F481, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Tipping Hand: Dark Skin Tone"
    }, {
        code: "0x1F64B",
        groupID: null,
        name: "Person Raising Hand"
    }, {
        code: "0x1F64B, 0x1F3FB",
        groupID: null,
        name: "Person Raising Hand: Light Skin Tone"
    }, {
        code: "0x1F64B, 0x1F3FC",
        groupID: null,
        name: "Person Raising Hand: Medium-Light Skin Tone"
    }, {
        code: "0x1F64B, 0x1F3FD",
        groupID: null,
        name: "Person Raising Hand: Medium Skin Tone"
    }, {
        code: "0x1F64B, 0x1F3FE",
        groupID: null,
        name: "Person Raising Hand: Medium-Dark Skin Tone"
    }, {
        code: "0x1F64B, 0x1F3FF",
        groupID: null,
        name: "Person Raising Hand: Dark Skin Tone"
    }, {
        code: "0x1F64B, 0x200D, 0x2642",
        groupID: null,
        name: "Man Raising Hand"
    }, {
        code: "0x1F64B, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Raising Hand: Light Skin Tone"
    }, {
        code: "0x1F64B, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Raising Hand: Medium-Light Skin Tone"
    }, {
        code: "0x1F64B, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Raising Hand: Medium Skin Tone"
    }, {
        code: "0x1F64B, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Raising Hand: Medium-Dark Skin Tone"
    }, {
        code: "0x1F64B, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Raising Hand: Dark Skin Tone"
    }, {
        code: "0x1F64B, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Raising Hand"
    }, {
        code: "0x1F64B, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Raising Hand: Light Skin Tone"
    }, {
        code: "0x1F64B, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Raising Hand: Medium-Light Skin Tone"
    }, {
        code: "0x1F64B, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Raising Hand: Medium Skin Tone"
    }, {
        code: "0x1F64B, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Raising Hand: Medium-Dark Skin Tone"
    }, {
        code: "0x1F64B, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Raising Hand: Dark Skin Tone"
    }, {
        code: "0x1F9CF",
        groupID: null,
        name: "Deaf Person"
    }, {
        code: "0x1F9CF, 0x1F3FB",
        groupID: null,
        name: "Deaf Person: Light Skin Tone"
    }, {
        code: "0x1F9CF, 0x1F3FC",
        groupID: null,
        name: "Deaf Person: Medium-Light Skin Tone"
    }, {
        code: "0x1F9CF, 0x1F3FD",
        groupID: null,
        name: "Deaf Person: Medium Skin Tone"
    }, {
        code: "0x1F9CF, 0x1F3FE",
        groupID: null,
        name: "Deaf Person: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9CF, 0x1F3FF",
        groupID: null,
        name: "Deaf Person: Dark Skin Tone"
    }, {
        code: "0x1F9CF, 0x200D, 0x2642",
        groupID: null,
        name: "Deaf Man"
    }, {
        code: "0x1F9CF, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Deaf Man: Light Skin Tone"
    }, {
        code: "0x1F9CF, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Deaf Man: Medium-Light Skin Tone"
    }, {
        code: "0x1F9CF, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Deaf Man: Medium Skin Tone"
    }, {
        code: "0x1F9CF, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Deaf Man: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9CF, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Deaf Man: Dark Skin Tone"
    }, {
        code: "0x1F9CF, 0x200D, 0x2640",
        groupID: null,
        name: "Deaf Woman"
    }, {
        code: "0x1F9CF, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Deaf Woman: Light Skin Tone"
    }, {
        code: "0x1F9CF, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Deaf Woman: Medium-Light Skin Tone"
    }, {
        code: "0x1F9CF, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Deaf Woman: Medium Skin Tone"
    }, {
        code: "0x1F9CF, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Deaf Woman: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9CF, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Deaf Woman: Dark Skin Tone"
    }, {
        code: "0x1F647",
        groupID: null,
        name: "Person Bowing"
    }, {
        code: "0x1F647, 0x1F3FB",
        groupID: null,
        name: "Person Bowing: Light Skin Tone"
    }, {
        code: "0x1F647, 0x1F3FC",
        groupID: null,
        name: "Person Bowing: Medium-Light Skin Tone"
    }, {
        code: "0x1F647, 0x1F3FD",
        groupID: null,
        name: "Person Bowing: Medium Skin Tone"
    }, {
        code: "0x1F647, 0x1F3FE",
        groupID: null,
        name: "Person Bowing: Medium-Dark Skin Tone"
    }, {
        code: "0x1F647, 0x1F3FF",
        groupID: null,
        name: "Person Bowing: Dark Skin Tone"
    }, {
        code: "0x1F647, 0x200D, 0x2642",
        groupID: null,
        name: "Man Bowing"
    }, {
        code: "0x1F647, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Bowing: Light Skin Tone"
    }, {
        code: "0x1F647, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Bowing: Medium-Light Skin Tone"
    }, {
        code: "0x1F647, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Bowing: Medium Skin Tone"
    }, {
        code: "0x1F647, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Bowing: Medium-Dark Skin Tone"
    }, {
        code: "0x1F647, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Bowing: Dark Skin Tone"
    }, {
        code: "0x1F647, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Bowing"
    }, {
        code: "0x1F647, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Bowing: Light Skin Tone"
    }, {
        code: "0x1F647, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Bowing: Medium-Light Skin Tone"
    }, {
        code: "0x1F647, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Bowing: Medium Skin Tone"
    }, {
        code: "0x1F647, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Bowing: Medium-Dark Skin Tone"
    }, {
        code: "0x1F647, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Bowing: Dark Skin Tone"
    }, {
        code: "0x1F926",
        groupID: null,
        name: "Person Facepalming"
    }, {
        code: "0x1F926, 0x1F3FB",
        groupID: null,
        name: "Person Facepalming: Light Skin Tone"
    }, {
        code: "0x1F926, 0x1F3FC",
        groupID: null,
        name: "Person Facepalming: Medium-Light Skin Tone"
    }, {
        code: "0x1F926, 0x1F3FD",
        groupID: null,
        name: "Person Facepalming: Medium Skin Tone"
    }, {
        code: "0x1F926, 0x1F3FE",
        groupID: null,
        name: "Person Facepalming: Medium-Dark Skin Tone"
    }, {
        code: "0x1F926, 0x1F3FF",
        groupID: null,
        name: "Person Facepalming: Dark Skin Tone"
    }, {
        code: "0x1F926, 0x200D, 0x2642",
        groupID: null,
        name: "Man Facepalming"
    }, {
        code: "0x1F926, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Facepalming: Light Skin Tone"
    }, {
        code: "0x1F926, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Facepalming: Medium-Light Skin Tone"
    }, {
        code: "0x1F926, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Facepalming: Medium Skin Tone"
    }, {
        code: "0x1F926, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Facepalming: Medium-Dark Skin Tone"
    }, {
        code: "0x1F926, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Facepalming: Dark Skin Tone"
    }, {
        code: "0x1F926, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Facepalming"
    }, {
        code: "0x1F926, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Facepalming: Light Skin Tone"
    }, {
        code: "0x1F926, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Facepalming: Medium-Light Skin Tone"
    }, {
        code: "0x1F926, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Facepalming: Medium Skin Tone"
    }, {
        code: "0x1F926, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Facepalming: Medium-Dark Skin Tone"
    }, {
        code: "0x1F926, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Facepalming: Dark Skin Tone"
    }, {
        code: "0x1F937",
        groupID: null,
        name: "Person Shrugging"
    }, {
        code: "0x1F937, 0x1F3FB",
        groupID: null,
        name: "Person Shrugging: Light Skin Tone"
    }, {
        code: "0x1F937, 0x1F3FC",
        groupID: null,
        name: "Person Shrugging: Medium-Light Skin Tone"
    }, {
        code: "0x1F937, 0x1F3FD",
        groupID: null,
        name: "Person Shrugging: Medium Skin Tone"
    }, {
        code: "0x1F937, 0x1F3FE",
        groupID: null,
        name: "Person Shrugging: Medium-Dark Skin Tone"
    }, {
        code: "0x1F937, 0x1F3FF",
        groupID: null,
        name: "Person Shrugging: Dark Skin Tone"
    }, {
        code: "0x1F937, 0x200D, 0x2642",
        groupID: null,
        name: "Man Shrugging"
    }, {
        code: "0x1F937, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Shrugging: Light Skin Tone"
    }, {
        code: "0x1F937, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Shrugging: Medium-Light Skin Tone"
    }, {
        code: "0x1F937, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Shrugging: Medium Skin Tone"
    }, {
        code: "0x1F937, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Shrugging: Medium-Dark Skin Tone"
    }, {
        code: "0x1F937, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Shrugging: Dark Skin Tone"
    }, {
        code: "0x1F937, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Shrugging"
    }, {
        code: "0x1F937, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Shrugging: Light Skin Tone"
    }, {
        code: "0x1F937, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Shrugging: Medium-Light Skin Tone"
    }, {
        code: "0x1F937, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Shrugging: Medium Skin Tone"
    }, {
        code: "0x1F937, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Shrugging: Medium-Dark Skin Tone"
    }, {
        code: "0x1F937, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Shrugging: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x2695",
        groupID: null,
        name: "Health Worker"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x2695",
        groupID: null,
        name: "Health Worker: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x2695",
        groupID: null,
        name: "Health Worker: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x2695",
        groupID: null,
        name: "Health Worker: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x2695",
        groupID: null,
        name: "Health Worker: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x2695",
        groupID: null,
        name: "Health Worker: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x2695",
        groupID: null,
        name: "Man Health Worker"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x2695",
        groupID: null,
        name: "Man Health Worker: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x2695",
        groupID: null,
        name: "Man Health Worker: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x2695",
        groupID: null,
        name: "Man Health Worker: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x2695",
        groupID: null,
        name: "Man Health Worker: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x2695",
        groupID: null,
        name: "Man Health Worker: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x2695",
        groupID: null,
        name: "Woman Health Worker"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x2695",
        groupID: null,
        name: "Woman Health Worker: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x2695",
        groupID: null,
        name: "Woman Health Worker: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x2695",
        groupID: null,
        name: "Woman Health Worker: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x2695",
        groupID: null,
        name: "Woman Health Worker: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x2695",
        groupID: null,
        name: "Woman Health Worker: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F393",
        groupID: null,
        name: "Student"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F393",
        groupID: null,
        name: "Student: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F393",
        groupID: null,
        name: "Student: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F393",
        groupID: null,
        name: "Student: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F393",
        groupID: null,
        name: "Student: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F393",
        groupID: null,
        name: "Student: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x1F393",
        groupID: null,
        name: "Man Student"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F393",
        groupID: null,
        name: "Man Student: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F393",
        groupID: null,
        name: "Man Student: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F393",
        groupID: null,
        name: "Man Student: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F393",
        groupID: null,
        name: "Man Student: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F393",
        groupID: null,
        name: "Man Student: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x1F393",
        groupID: null,
        name: "Woman Student"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F393",
        groupID: null,
        name: "Woman Student: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F393",
        groupID: null,
        name: "Woman Student: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F393",
        groupID: null,
        name: "Woman Student: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F393",
        groupID: null,
        name: "Woman Student: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F393",
        groupID: null,
        name: "Woman Student: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F3EB",
        groupID: null,
        name: "Teacher"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F3EB",
        groupID: null,
        name: "Teacher: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F3EB",
        groupID: null,
        name: "Teacher: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F3EB",
        groupID: null,
        name: "Teacher: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F3EB",
        groupID: null,
        name: "Teacher: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F3EB",
        groupID: null,
        name: "Teacher: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x1F3EB",
        groupID: null,
        name: "Man Teacher"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F3EB",
        groupID: null,
        name: "Man Teacher: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F3EB",
        groupID: null,
        name: "Man Teacher: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F3EB",
        groupID: null,
        name: "Man Teacher: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F3EB",
        groupID: null,
        name: "Man Teacher: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F3EB",
        groupID: null,
        name: "Man Teacher: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x1F3EB",
        groupID: null,
        name: "Woman Teacher"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F3EB",
        groupID: null,
        name: "Woman Teacher: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F3EB",
        groupID: null,
        name: "Woman Teacher: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F3EB",
        groupID: null,
        name: "Woman Teacher: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F3EB",
        groupID: null,
        name: "Woman Teacher: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F3EB",
        groupID: null,
        name: "Woman Teacher: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x2696",
        groupID: null,
        name: "Judge"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x2696",
        groupID: null,
        name: "Judge: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x2696",
        groupID: null,
        name: "Judge: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x2696",
        groupID: null,
        name: "Judge: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x2696",
        groupID: null,
        name: "Judge: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x2696",
        groupID: null,
        name: "Judge: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x2696",
        groupID: null,
        name: "Man Judge"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x2696",
        groupID: null,
        name: "Man Judge: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x2696",
        groupID: null,
        name: "Man Judge: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x2696",
        groupID: null,
        name: "Man Judge: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x2696",
        groupID: null,
        name: "Man Judge: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x2696",
        groupID: null,
        name: "Man Judge: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x2696",
        groupID: null,
        name: "Woman Judge"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x2696",
        groupID: null,
        name: "Woman Judge: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x2696",
        groupID: null,
        name: "Woman Judge: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x2696",
        groupID: null,
        name: "Woman Judge: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x2696",
        groupID: null,
        name: "Woman Judge: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x2696",
        groupID: null,
        name: "Woman Judge: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F33E",
        groupID: null,
        name: "Farmer"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F33E",
        groupID: null,
        name: "Farmer: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F33E",
        groupID: null,
        name: "Farmer: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F33E",
        groupID: null,
        name: "Farmer: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F33E",
        groupID: null,
        name: "Farmer: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F33E",
        groupID: null,
        name: "Farmer: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x1F33E",
        groupID: null,
        name: "Man Farmer"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F33E",
        groupID: null,
        name: "Man Farmer: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F33E",
        groupID: null,
        name: "Man Farmer: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F33E",
        groupID: null,
        name: "Man Farmer: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F33E",
        groupID: null,
        name: "Man Farmer: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F33E",
        groupID: null,
        name: "Man Farmer: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x1F33E",
        groupID: null,
        name: "Woman Farmer"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F33E",
        groupID: null,
        name: "Woman Farmer: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F33E",
        groupID: null,
        name: "Woman Farmer: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F33E",
        groupID: null,
        name: "Woman Farmer: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F33E",
        groupID: null,
        name: "Woman Farmer: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F33E",
        groupID: null,
        name: "Woman Farmer: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F373",
        groupID: null,
        name: "Cook"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F373",
        groupID: null,
        name: "Cook: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F373",
        groupID: null,
        name: "Cook: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F373",
        groupID: null,
        name: "Cook: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F373",
        groupID: null,
        name: "Cook: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F373",
        groupID: null,
        name: "Cook: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x1F373",
        groupID: null,
        name: "Man Cook"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F373",
        groupID: null,
        name: "Man Cook: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F373",
        groupID: null,
        name: "Man Cook: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F373",
        groupID: null,
        name: "Man Cook: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F373",
        groupID: null,
        name: "Man Cook: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F373",
        groupID: null,
        name: "Man Cook: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x1F373",
        groupID: null,
        name: "Woman Cook"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F373",
        groupID: null,
        name: "Woman Cook: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F373",
        groupID: null,
        name: "Woman Cook: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F373",
        groupID: null,
        name: "Woman Cook: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F373",
        groupID: null,
        name: "Woman Cook: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F373",
        groupID: null,
        name: "Woman Cook: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F527",
        groupID: null,
        name: "Mechanic"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F527",
        groupID: null,
        name: "Mechanic: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F527",
        groupID: null,
        name: "Mechanic: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F527",
        groupID: null,
        name: "Mechanic: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F527",
        groupID: null,
        name: "Mechanic: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F527",
        groupID: null,
        name: "Mechanic: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x1F527",
        groupID: null,
        name: "Man Mechanic"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F527",
        groupID: null,
        name: "Man Mechanic: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F527",
        groupID: null,
        name: "Man Mechanic: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F527",
        groupID: null,
        name: "Man Mechanic: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F527",
        groupID: null,
        name: "Man Mechanic: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F527",
        groupID: null,
        name: "Man Mechanic: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x1F527",
        groupID: null,
        name: "Woman Mechanic"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F527",
        groupID: null,
        name: "Woman Mechanic: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F527",
        groupID: null,
        name: "Woman Mechanic: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F527",
        groupID: null,
        name: "Woman Mechanic: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F527",
        groupID: null,
        name: "Woman Mechanic: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F527",
        groupID: null,
        name: "Woman Mechanic: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F3ED",
        groupID: null,
        name: "Factory Worker"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F3ED",
        groupID: null,
        name: "Factory Worker: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F3ED",
        groupID: null,
        name: "Factory Worker: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F3ED",
        groupID: null,
        name: "Factory Worker: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F3ED",
        groupID: null,
        name: "Factory Worker: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F3ED",
        groupID: null,
        name: "Factory Worker: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x1F3ED",
        groupID: null,
        name: "Man Factory Worker"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F3ED",
        groupID: null,
        name: "Man Factory Worker: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F3ED",
        groupID: null,
        name: "Man Factory Worker: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F3ED",
        groupID: null,
        name: "Man Factory Worker: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F3ED",
        groupID: null,
        name: "Man Factory Worker: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F3ED",
        groupID: null,
        name: "Man Factory Worker: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x1F3ED",
        groupID: null,
        name: "Woman Factory Worker"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F3ED",
        groupID: null,
        name: "Woman Factory Worker: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F3ED",
        groupID: null,
        name: "Woman Factory Worker: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F3ED",
        groupID: null,
        name: "Woman Factory Worker: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F3ED",
        groupID: null,
        name: "Woman Factory Worker: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F3ED",
        groupID: null,
        name: "Woman Factory Worker: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F4BC",
        groupID: null,
        name: "Office Worker"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F4BC",
        groupID: null,
        name: "Office Worker: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F4BC",
        groupID: null,
        name: "Office Worker: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F4BC",
        groupID: null,
        name: "Office Worker: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F4BC",
        groupID: null,
        name: "Office Worker: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F4BC",
        groupID: null,
        name: "Office Worker: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x1F4BC",
        groupID: null,
        name: "Man Office Worker"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F4BC",
        groupID: null,
        name: "Man Office Worker: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F4BC",
        groupID: null,
        name: "Man Office Worker: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F4BC",
        groupID: null,
        name: "Man Office Worker: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F4BC",
        groupID: null,
        name: "Man Office Worker: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F4BC",
        groupID: null,
        name: "Man Office Worker: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x1F4BC",
        groupID: null,
        name: "Woman Office Worker"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F4BC",
        groupID: null,
        name: "Woman Office Worker: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F4BC",
        groupID: null,
        name: "Woman Office Worker: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F4BC",
        groupID: null,
        name: "Woman Office Worker: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F4BC",
        groupID: null,
        name: "Woman Office Worker: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F4BC",
        groupID: null,
        name: "Woman Office Worker: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F52C",
        groupID: null,
        name: "Scientist"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F52C",
        groupID: null,
        name: "Scientist: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F52C",
        groupID: null,
        name: "Scientist: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F52C",
        groupID: null,
        name: "Scientist: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F52C",
        groupID: null,
        name: "Scientist: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F52C",
        groupID: null,
        name: "Scientist: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x1F52C",
        groupID: null,
        name: "Man Scientist"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F52C",
        groupID: null,
        name: "Man Scientist: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F52C",
        groupID: null,
        name: "Man Scientist: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F52C",
        groupID: null,
        name: "Man Scientist: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F52C",
        groupID: null,
        name: "Man Scientist: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F52C",
        groupID: null,
        name: "Man Scientist: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x1F52C",
        groupID: null,
        name: "Woman Scientist"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F52C",
        groupID: null,
        name: "Woman Scientist: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F52C",
        groupID: null,
        name: "Woman Scientist: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F52C",
        groupID: null,
        name: "Woman Scientist: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F52C",
        groupID: null,
        name: "Woman Scientist: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F52C",
        groupID: null,
        name: "Woman Scientist: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F4BB",
        groupID: null,
        name: "Technologist"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F4BB",
        groupID: null,
        name: "Technologist: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F4BB",
        groupID: null,
        name: "Technologist: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F4BB",
        groupID: null,
        name: "Technologist: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F4BB",
        groupID: null,
        name: "Technologist: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F4BB",
        groupID: null,
        name: "Technologist: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x1F4BB",
        groupID: null,
        name: "Man Technologist"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F4BB",
        groupID: null,
        name: "Man Technologist: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F4BB",
        groupID: null,
        name: "Man Technologist: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F4BB",
        groupID: null,
        name: "Man Technologist: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F4BB",
        groupID: null,
        name: "Man Technologist: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F4BB",
        groupID: null,
        name: "Man Technologist: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x1F4BB",
        groupID: null,
        name: "Woman Technologist"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F4BB",
        groupID: null,
        name: "Woman Technologist: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F4BB",
        groupID: null,
        name: "Woman Technologist: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F4BB",
        groupID: null,
        name: "Woman Technologist: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F4BB",
        groupID: null,
        name: "Woman Technologist: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F4BB",
        groupID: null,
        name: "Woman Technologist: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F3A4",
        groupID: null,
        name: "Singer"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F3A4",
        groupID: null,
        name: "Singer: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F3A4",
        groupID: null,
        name: "Singer: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F3A4",
        groupID: null,
        name: "Singer: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F3A4",
        groupID: null,
        name: "Singer: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F3A4",
        groupID: null,
        name: "Singer: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x1F3A4",
        groupID: null,
        name: "Man Singer"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F3A4",
        groupID: null,
        name: "Man Singer: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F3A4",
        groupID: null,
        name: "Man Singer: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F3A4",
        groupID: null,
        name: "Man Singer: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F3A4",
        groupID: null,
        name: "Man Singer: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F3A4",
        groupID: null,
        name: "Man Singer: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x1F3A4",
        groupID: null,
        name: "Woman Singer"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F3A4",
        groupID: null,
        name: "Woman Singer: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F3A4",
        groupID: null,
        name: "Woman Singer: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F3A4",
        groupID: null,
        name: "Woman Singer: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F3A4",
        groupID: null,
        name: "Woman Singer: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F3A4",
        groupID: null,
        name: "Woman Singer: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F3A8",
        groupID: null,
        name: "Artist"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F3A8",
        groupID: null,
        name: "Artist: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F3A8",
        groupID: null,
        name: "Artist: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F3A8",
        groupID: null,
        name: "Artist: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F3A8",
        groupID: null,
        name: "Artist: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F3A8",
        groupID: null,
        name: "Artist: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x1F3A8",
        groupID: null,
        name: "Man Artist"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F3A8",
        groupID: null,
        name: "Man Artist: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F3A8",
        groupID: null,
        name: "Man Artist: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F3A8",
        groupID: null,
        name: "Man Artist: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F3A8",
        groupID: null,
        name: "Man Artist: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F3A8",
        groupID: null,
        name: "Man Artist: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x1F3A8",
        groupID: null,
        name: "Woman Artist"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F3A8",
        groupID: null,
        name: "Woman Artist: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F3A8",
        groupID: null,
        name: "Woman Artist: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F3A8",
        groupID: null,
        name: "Woman Artist: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F3A8",
        groupID: null,
        name: "Woman Artist: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F3A8",
        groupID: null,
        name: "Woman Artist: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x2708",
        groupID: null,
        name: "Pilot"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x2708",
        groupID: null,
        name: "Pilot: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x2708",
        groupID: null,
        name: "Pilot: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x2708",
        groupID: null,
        name: "Pilot: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x2708",
        groupID: null,
        name: "Pilot: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x2708",
        groupID: null,
        name: "Pilot: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x2708",
        groupID: null,
        name: "Man Pilot"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x2708",
        groupID: null,
        name: "Man Pilot: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x2708",
        groupID: null,
        name: "Man Pilot: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x2708",
        groupID: null,
        name: "Man Pilot: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x2708",
        groupID: null,
        name: "Man Pilot: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x2708",
        groupID: null,
        name: "Man Pilot: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x2708",
        groupID: null,
        name: "Woman Pilot"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x2708",
        groupID: null,
        name: "Woman Pilot: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x2708",
        groupID: null,
        name: "Woman Pilot: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x2708",
        groupID: null,
        name: "Woman Pilot: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x2708",
        groupID: null,
        name: "Woman Pilot: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x2708",
        groupID: null,
        name: "Woman Pilot: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F680",
        groupID: null,
        name: "Astronaut"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F680",
        groupID: null,
        name: "Astronaut: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F680",
        groupID: null,
        name: "Astronaut: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F680",
        groupID: null,
        name: "Astronaut: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F680",
        groupID: null,
        name: "Astronaut: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F680",
        groupID: null,
        name: "Astronaut: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x1F680",
        groupID: null,
        name: "Man Astronaut"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F680",
        groupID: null,
        name: "Man Astronaut: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F680",
        groupID: null,
        name: "Man Astronaut: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F680",
        groupID: null,
        name: "Man Astronaut: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F680",
        groupID: null,
        name: "Man Astronaut: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F680",
        groupID: null,
        name: "Man Astronaut: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x1F680",
        groupID: null,
        name: "Woman Astronaut"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F680",
        groupID: null,
        name: "Woman Astronaut: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F680",
        groupID: null,
        name: "Woman Astronaut: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F680",
        groupID: null,
        name: "Woman Astronaut: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F680",
        groupID: null,
        name: "Woman Astronaut: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F680",
        groupID: null,
        name: "Woman Astronaut: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F692",
        groupID: null,
        name: "Firefighter"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F692",
        groupID: null,
        name: "Firefighter: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F692",
        groupID: null,
        name: "Firefighter: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F692",
        groupID: null,
        name: "Firefighter: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F692",
        groupID: null,
        name: "Firefighter: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F692",
        groupID: null,
        name: "Firefighter: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x1F692",
        groupID: null,
        name: "Man Firefighter"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F692",
        groupID: null,
        name: "Man Firefighter: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F692",
        groupID: null,
        name: "Man Firefighter: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F692",
        groupID: null,
        name: "Man Firefighter: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F692",
        groupID: null,
        name: "Man Firefighter: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F692",
        groupID: null,
        name: "Man Firefighter: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x1F692",
        groupID: null,
        name: "Woman Firefighter"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F692",
        groupID: null,
        name: "Woman Firefighter: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F692",
        groupID: null,
        name: "Woman Firefighter: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F692",
        groupID: null,
        name: "Woman Firefighter: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F692",
        groupID: null,
        name: "Woman Firefighter: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F692",
        groupID: null,
        name: "Woman Firefighter: Dark Skin Tone"
    }, {
        code: "0x1F46E",
        groupID: null,
        name: "Police Officer"
    }, {
        code: "0x1F46E, 0x1F3FB",
        groupID: null,
        name: "Police Officer: Light Skin Tone"
    }, {
        code: "0x1F46E, 0x1F3FC",
        groupID: null,
        name: "Police Officer: Medium-Light Skin Tone"
    }, {
        code: "0x1F46E, 0x1F3FD",
        groupID: null,
        name: "Police Officer: Medium Skin Tone"
    }, {
        code: "0x1F46E, 0x1F3FE",
        groupID: null,
        name: "Police Officer: Medium-Dark Skin Tone"
    }, {
        code: "0x1F46E, 0x1F3FF",
        groupID: null,
        name: "Police Officer: Dark Skin Tone"
    }, {
        code: "0x1F46E, 0x200D, 0x2642",
        groupID: null,
        name: "Man Police Officer"
    }, {
        code: "0x1F46E, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Police Officer: Light Skin Tone"
    }, {
        code: "0x1F46E, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Police Officer: Medium-Light Skin Tone"
    }, {
        code: "0x1F46E, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Police Officer: Medium Skin Tone"
    }, {
        code: "0x1F46E, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Police Officer: Medium-Dark Skin Tone"
    }, {
        code: "0x1F46E, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Police Officer: Dark Skin Tone"
    }, {
        code: "0x1F46E, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Police Officer"
    }, {
        code: "0x1F46E, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Police Officer: Light Skin Tone"
    }, {
        code: "0x1F46E, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Police Officer: Medium-Light Skin Tone"
    }, {
        code: "0x1F46E, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Police Officer: Medium Skin Tone"
    }, {
        code: "0x1F46E, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Police Officer: Medium-Dark Skin Tone"
    }, {
        code: "0x1F46E, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Police Officer: Dark Skin Tone"
    }, {
        code: "0x1F575",
        groupID: null,
        name: "Detective"
    }, {
        code: "0x1F575, 0x1F3FB",
        groupID: null,
        name: "Detective: Light Skin Tone"
    }, {
        code: "0x1F575, 0x1F3FC",
        groupID: null,
        name: "Detective: Medium-Light Skin Tone"
    }, {
        code: "0x1F575, 0x1F3FD",
        groupID: null,
        name: "Detective: Medium Skin Tone"
    }, {
        code: "0x1F575, 0x1F3FE",
        groupID: null,
        name: "Detective: Medium-Dark Skin Tone"
    }, {
        code: "0x1F575, 0x1F3FF",
        groupID: null,
        name: "Detective: Dark Skin Tone"
    }, {
        code: "0x1F575, 0x200D, 0x2642",
        groupID: null,
        name: "Man Detective"
    }, {
        code: "0x1F575, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Detective: Light Skin Tone"
    }, {
        code: "0x1F575, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Detective: Medium-Light Skin Tone"
    }, {
        code: "0x1F575, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Detective: Medium Skin Tone"
    }, {
        code: "0x1F575, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Detective: Medium-Dark Skin Tone"
    }, {
        code: "0x1F575, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Detective: Dark Skin Tone"
    }, {
        code: "0x1F575, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Detective"
    }, {
        code: "0x1F575, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Detective: Light Skin Tone"
    }, {
        code: "0x1F575, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Detective: Medium-Light Skin Tone"
    }, {
        code: "0x1F575, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Detective: Medium Skin Tone"
    }, {
        code: "0x1F575, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Detective: Medium-Dark Skin Tone"
    }, {
        code: "0x1F575, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Detective: Dark Skin Tone"
    }, {
        code: "0x1F482",
        groupID: null,
        name: "Guard"
    }, {
        code: "0x1F482, 0x1F3FB",
        groupID: null,
        name: "Guard: Light Skin Tone"
    }, {
        code: "0x1F482, 0x1F3FC",
        groupID: null,
        name: "Guard: Medium-Light Skin Tone"
    }, {
        code: "0x1F482, 0x1F3FD",
        groupID: null,
        name: "Guard: Medium Skin Tone"
    }, {
        code: "0x1F482, 0x1F3FE",
        groupID: null,
        name: "Guard: Medium-Dark Skin Tone"
    }, {
        code: "0x1F482, 0x1F3FF",
        groupID: null,
        name: "Guard: Dark Skin Tone"
    }, {
        code: "0x1F482, 0x200D, 0x2642",
        groupID: null,
        name: "Man Guard"
    }, {
        code: "0x1F482, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Guard: Light Skin Tone"
    }, {
        code: "0x1F482, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Guard: Medium-Light Skin Tone"
    }, {
        code: "0x1F482, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Guard: Medium Skin Tone"
    }, {
        code: "0x1F482, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Guard: Medium-Dark Skin Tone"
    }, {
        code: "0x1F482, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Guard: Dark Skin Tone"
    }, {
        code: "0x1F482, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Guard"
    }, {
        code: "0x1F482, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Guard: Light Skin Tone"
    }, {
        code: "0x1F482, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Guard: Medium-Light Skin Tone"
    }, {
        code: "0x1F482, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Guard: Medium Skin Tone"
    }, {
        code: "0x1F482, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Guard: Medium-Dark Skin Tone"
    }, {
        code: "0x1F482, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Guard: Dark Skin Tone"
    }, {
        code: "0x1F477",
        groupID: null,
        name: "Construction Worker"
    }, {
        code: "0x1F477, 0x1F3FB",
        groupID: null,
        name: "Construction Worker: Light Skin Tone"
    }, {
        code: "0x1F477, 0x1F3FC",
        groupID: null,
        name: "Construction Worker: Medium-Light Skin Tone"
    }, {
        code: "0x1F477, 0x1F3FD",
        groupID: null,
        name: "Construction Worker: Medium Skin Tone"
    }, {
        code: "0x1F477, 0x1F3FE",
        groupID: null,
        name: "Construction Worker: Medium-Dark Skin Tone"
    }, {
        code: "0x1F477, 0x1F3FF",
        groupID: null,
        name: "Construction Worker: Dark Skin Tone"
    }, {
        code: "0x1F477, 0x200D, 0x2642",
        groupID: null,
        name: "Man Construction Worker"
    }, {
        code: "0x1F477, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Construction Worker: Light Skin Tone"
    }, {
        code: "0x1F477, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Construction Worker: Medium-Light Skin Tone"
    }, {
        code: "0x1F477, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Construction Worker: Medium Skin Tone"
    }, {
        code: "0x1F477, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Construction Worker: Medium-Dark Skin Tone"
    }, {
        code: "0x1F477, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Construction Worker: Dark Skin Tone"
    }, {
        code: "0x1F477, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Construction Worker"
    }, {
        code: "0x1F477, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Construction Worker: Light Skin Tone"
    }, {
        code: "0x1F477, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Construction Worker: Medium-Light Skin Tone"
    }, {
        code: "0x1F477, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Construction Worker: Medium Skin Tone"
    }, {
        code: "0x1F477, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Construction Worker: Medium-Dark Skin Tone"
    }, {
        code: "0x1F477, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Construction Worker: Dark Skin Tone"
    }, {
        code: "0x1F934",
        groupID: null,
        name: "Prince"
    }, {
        code: "0x1F934, 0x1F3FB",
        groupID: null,
        name: "Prince: Light Skin Tone"
    }, {
        code: "0x1F934, 0x1F3FC",
        groupID: null,
        name: "Prince: Medium-Light Skin Tone"
    }, {
        code: "0x1F934, 0x1F3FD",
        groupID: null,
        name: "Prince: Medium Skin Tone"
    }, {
        code: "0x1F934, 0x1F3FE",
        groupID: null,
        name: "Prince: Medium-Dark Skin Tone"
    }, {
        code: "0x1F934, 0x1F3FF",
        groupID: null,
        name: "Prince: Dark Skin Tone"
    }, {
        code: "0x1F478",
        groupID: null,
        name: "Princess"
    }, {
        code: "0x1F478, 0x1F3FB",
        groupID: null,
        name: "Princess: Light Skin Tone"
    }, {
        code: "0x1F478, 0x1F3FC",
        groupID: null,
        name: "Princess: Medium-Light Skin Tone"
    }, {
        code: "0x1F478, 0x1F3FD",
        groupID: null,
        name: "Princess: Medium Skin Tone"
    }, {
        code: "0x1F478, 0x1F3FE",
        groupID: null,
        name: "Princess: Medium-Dark Skin Tone"
    }, {
        code: "0x1F478, 0x1F3FF",
        groupID: null,
        name: "Princess: Dark Skin Tone"
    }, {
        code: "0x1F473",
        groupID: null,
        name: "Person Wearing Turban"
    }, {
        code: "0x1F473, 0x1F3FB",
        groupID: null,
        name: "Person Wearing Turban: Light Skin Tone"
    }, {
        code: "0x1F473, 0x1F3FC",
        groupID: null,
        name: "Person Wearing Turban: Medium-Light Skin Tone"
    }, {
        code: "0x1F473, 0x1F3FD",
        groupID: null,
        name: "Person Wearing Turban: Medium Skin Tone"
    }, {
        code: "0x1F473, 0x1F3FE",
        groupID: null,
        name: "Person Wearing Turban: Medium-Dark Skin Tone"
    }, {
        code: "0x1F473, 0x1F3FF",
        groupID: null,
        name: "Person Wearing Turban: Dark Skin Tone"
    }, {
        code: "0x1F473, 0x200D, 0x2642",
        groupID: null,
        name: "Man Wearing Turban"
    }, {
        code: "0x1F473, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Wearing Turban: Light Skin Tone"
    }, {
        code: "0x1F473, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Wearing Turban: Medium-Light Skin Tone"
    }, {
        code: "0x1F473, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Wearing Turban: Medium Skin Tone"
    }, {
        code: "0x1F473, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Wearing Turban: Medium-Dark Skin Tone"
    }, {
        code: "0x1F473, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Wearing Turban: Dark Skin Tone"
    }, {
        code: "0x1F473, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Wearing Turban"
    }, {
        code: "0x1F473, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Wearing Turban: Light Skin Tone"
    }, {
        code: "0x1F473, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Wearing Turban: Medium-Light Skin Tone"
    }, {
        code: "0x1F473, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Wearing Turban: Medium Skin Tone"
    }, {
        code: "0x1F473, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Wearing Turban: Medium-Dark Skin Tone"
    }, {
        code: "0x1F473, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Wearing Turban: Dark Skin Tone"
    }, {
        code: "0x1F472",
        groupID: null,
        name: "Man With Skullcap"
    }, {
        code: "0x1F472, 0x1F3FB",
        groupID: null,
        name: "Man With Skullcap: Light Skin Tone"
    }, {
        code: "0x1F472, 0x1F3FC",
        groupID: null,
        name: "Man With Skullcap: Medium-Light Skin Tone"
    }, {
        code: "0x1F472, 0x1F3FD",
        groupID: null,
        name: "Man With Skullcap: Medium Skin Tone"
    }, {
        code: "0x1F472, 0x1F3FE",
        groupID: null,
        name: "Man With Skullcap: Medium-Dark Skin Tone"
    }, {
        code: "0x1F472, 0x1F3FF",
        groupID: null,
        name: "Man With Skullcap: Dark Skin Tone"
    }, {
        code: "0x1F9D5",
        groupID: null,
        name: "Woman With Headscarf"
    }, {
        code: "0x1F9D5, 0x1F3FB",
        groupID: null,
        name: "Woman With Headscarf: Light Skin Tone"
    }, {
        code: "0x1F9D5, 0x1F3FC",
        groupID: null,
        name: "Woman With Headscarf: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D5, 0x1F3FD",
        groupID: null,
        name: "Woman With Headscarf: Medium Skin Tone"
    }, {
        code: "0x1F9D5, 0x1F3FE",
        groupID: null,
        name: "Woman With Headscarf: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D5, 0x1F3FF",
        groupID: null,
        name: "Woman With Headscarf: Dark Skin Tone"
    }, {
        code: "0x1F935",
        groupID: null,
        name: "Man in Tuxedo"
    }, {
        code: "0x1F935, 0x1F3FB",
        groupID: null,
        name: "Man in Tuxedo: Light Skin Tone"
    }, {
        code: "0x1F935, 0x1F3FC",
        groupID: null,
        name: "Man in Tuxedo: Medium-Light Skin Tone"
    }, {
        code: "0x1F935, 0x1F3FD",
        groupID: null,
        name: "Man in Tuxedo: Medium Skin Tone"
    }, {
        code: "0x1F935, 0x1F3FE",
        groupID: null,
        name: "Man in Tuxedo: Medium-Dark Skin Tone"
    }, {
        code: "0x1F935, 0x1F3FF",
        groupID: null,
        name: "Man in Tuxedo: Dark Skin Tone"
    }, {
        code: "0x1F470",
        groupID: null,
        name: "Bride With Veil"
    }, {
        code: "0x1F470, 0x1F3FB",
        groupID: null,
        name: "Bride With Veil: Light Skin Tone"
    }, {
        code: "0x1F470, 0x1F3FC",
        groupID: null,
        name: "Bride With Veil: Medium-Light Skin Tone"
    }, {
        code: "0x1F470, 0x1F3FD",
        groupID: null,
        name: "Bride With Veil: Medium Skin Tone"
    }, {
        code: "0x1F470, 0x1F3FE",
        groupID: null,
        name: "Bride With Veil: Medium-Dark Skin Tone"
    }, {
        code: "0x1F470, 0x1F3FF",
        groupID: null,
        name: "Bride With Veil: Dark Skin Tone"
    }, {
        code: "0x1F930",
        groupID: null,
        name: "Pregnant Woman"
    }, {
        code: "0x1F930, 0x1F3FB",
        groupID: null,
        name: "Pregnant Woman: Light Skin Tone"
    }, {
        code: "0x1F930, 0x1F3FC",
        groupID: null,
        name: "Pregnant Woman: Medium-Light Skin Tone"
    }, {
        code: "0x1F930, 0x1F3FD",
        groupID: null,
        name: "Pregnant Woman: Medium Skin Tone"
    }, {
        code: "0x1F930, 0x1F3FE",
        groupID: null,
        name: "Pregnant Woman: Medium-Dark Skin Tone"
    }, {
        code: "0x1F930, 0x1F3FF",
        groupID: null,
        name: "Pregnant Woman: Dark Skin Tone"
    }, {
        code: "0x1F931",
        groupID: null,
        name: "Breast-Feeding"
    }, {
        code: "0x1F931, 0x1F3FB",
        groupID: null,
        name: "Breast-Feeding: Light Skin Tone"
    }, {
        code: "0x1F931, 0x1F3FC",
        groupID: null,
        name: "Breast-Feeding: Medium-Light Skin Tone"
    }, {
        code: "0x1F931, 0x1F3FD",
        groupID: null,
        name: "Breast-Feeding: Medium Skin Tone"
    }, {
        code: "0x1F931, 0x1F3FE",
        groupID: null,
        name: "Breast-Feeding: Medium-Dark Skin Tone"
    }, {
        code: "0x1F931, 0x1F3FF",
        groupID: null,
        name: "Breast-Feeding: Dark Skin Tone"
    }, {
        code: "0x1F47C",
        groupID: null,
        name: "Baby Angel"
    }, {
        code: "0x1F47C, 0x1F3FB",
        groupID: null,
        name: "Baby Angel: Light Skin Tone"
    }, {
        code: "0x1F47C, 0x1F3FC",
        groupID: null,
        name: "Baby Angel: Medium-Light Skin Tone"
    }, {
        code: "0x1F47C, 0x1F3FD",
        groupID: null,
        name: "Baby Angel: Medium Skin Tone"
    }, {
        code: "0x1F47C, 0x1F3FE",
        groupID: null,
        name: "Baby Angel: Medium-Dark Skin Tone"
    }, {
        code: "0x1F47C, 0x1F3FF",
        groupID: null,
        name: "Baby Angel: Dark Skin Tone"
    }, {
        code: "0x1F385",
        groupID: null,
        name: "Santa Claus"
    }, {
        code: "0x1F385, 0x1F3FB",
        groupID: null,
        name: "Santa Claus: Light Skin Tone"
    }, {
        code: "0x1F385, 0x1F3FC",
        groupID: null,
        name: "Santa Claus: Medium-Light Skin Tone"
    }, {
        code: "0x1F385, 0x1F3FD",
        groupID: null,
        name: "Santa Claus: Medium Skin Tone"
    }, {
        code: "0x1F385, 0x1F3FE",
        groupID: null,
        name: "Santa Claus: Medium-Dark Skin Tone"
    }, {
        code: "0x1F385, 0x1F3FF",
        groupID: null,
        name: "Santa Claus: Dark Skin Tone"
    }, {
        code: "0x1F936",
        groupID: null,
        name: "Mrs. Claus"
    }, {
        code: "0x1F936, 0x1F3FB",
        groupID: null,
        name: "Mrs. Claus: Light Skin Tone"
    }, {
        code: "0x1F936, 0x1F3FC",
        groupID: null,
        name: "Mrs. Claus: Medium-Light Skin Tone"
    }, {
        code: "0x1F936, 0x1F3FD",
        groupID: null,
        name: "Mrs. Claus: Medium Skin Tone"
    }, {
        code: "0x1F936, 0x1F3FE",
        groupID: null,
        name: "Mrs. Claus: Medium-Dark Skin Tone"
    }, {
        code: "0x1F936, 0x1F3FF",
        groupID: null,
        name: "Mrs. Claus: Dark Skin Tone"
    }, {
        code: "0x1F9B8",
        groupID: null,
        name: "Superhero"
    }, {
        code: "0x1F9B8, 0x1F3FB",
        groupID: null,
        name: "Superhero: Light Skin Tone"
    }, {
        code: "0x1F9B8, 0x1F3FC",
        groupID: null,
        name: "Superhero: Medium-Light Skin Tone"
    }, {
        code: "0x1F9B8, 0x1F3FD",
        groupID: null,
        name: "Superhero: Medium Skin Tone"
    }, {
        code: "0x1F9B8, 0x1F3FE",
        groupID: null,
        name: "Superhero: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9B8, 0x1F3FF",
        groupID: null,
        name: "Superhero: Dark Skin Tone"
    }, {
        code: "0x1F9B8, 0x200D, 0x2642",
        groupID: null,
        name: "Man Superhero"
    }, {
        code: "0x1F9B8, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Superhero: Light Skin Tone"
    }, {
        code: "0x1F9B8, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Superhero: Medium-Light Skin Tone"
    }, {
        code: "0x1F9B8, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Superhero: Medium Skin Tone"
    }, {
        code: "0x1F9B8, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Superhero: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9B8, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Superhero: Dark Skin Tone"
    }, {
        code: "0x1F9B8, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Superhero"
    }, {
        code: "0x1F9B8, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Superhero: Light Skin Tone"
    }, {
        code: "0x1F9B8, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Superhero: Medium-Light Skin Tone"
    }, {
        code: "0x1F9B8, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Superhero: Medium Skin Tone"
    }, {
        code: "0x1F9B8, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Superhero: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9B8, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Superhero: Dark Skin Tone"
    }, {
        code: "0x1F9B9",
        groupID: null,
        name: "Supervillain"
    }, {
        code: "0x1F9B9, 0x1F3FB",
        groupID: null,
        name: "Supervillain: Light Skin Tone"
    }, {
        code: "0x1F9B9, 0x1F3FC",
        groupID: null,
        name: "Supervillain: Medium-Light Skin Tone"
    }, {
        code: "0x1F9B9, 0x1F3FD",
        groupID: null,
        name: "Supervillain: Medium Skin Tone"
    }, {
        code: "0x1F9B9, 0x1F3FE",
        groupID: null,
        name: "Supervillain: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9B9, 0x1F3FF",
        groupID: null,
        name: "Supervillain: Dark Skin Tone"
    }, {
        code: "0x1F9B9, 0x200D, 0x2642",
        groupID: null,
        name: "Man Supervillain"
    }, {
        code: "0x1F9B9, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Supervillain: Light Skin Tone"
    }, {
        code: "0x1F9B9, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Supervillain: Medium-Light Skin Tone"
    }, {
        code: "0x1F9B9, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Supervillain: Medium Skin Tone"
    }, {
        code: "0x1F9B9, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Supervillain: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9B9, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Supervillain: Dark Skin Tone"
    }, {
        code: "0x1F9B9, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Supervillain"
    }, {
        code: "0x1F9B9, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Supervillain: Light Skin Tone"
    }, {
        code: "0x1F9B9, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Supervillain: Medium-Light Skin Tone"
    }, {
        code: "0x1F9B9, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Supervillain: Medium Skin Tone"
    }, {
        code: "0x1F9B9, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Supervillain: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9B9, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Supervillain: Dark Skin Tone"
    }, {
        code: "0x1F9D9",
        groupID: null,
        name: "Mage"
    }, {
        code: "0x1F9D9, 0x1F3FB",
        groupID: null,
        name: "Mage: Light Skin Tone"
    }, {
        code: "0x1F9D9, 0x1F3FC",
        groupID: null,
        name: "Mage: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D9, 0x1F3FD",
        groupID: null,
        name: "Mage: Medium Skin Tone"
    }, {
        code: "0x1F9D9, 0x1F3FE",
        groupID: null,
        name: "Mage: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D9, 0x1F3FF",
        groupID: null,
        name: "Mage: Dark Skin Tone"
    }, {
        code: "0x1F9D9, 0x200D, 0x2642",
        groupID: null,
        name: "Man Mage"
    }, {
        code: "0x1F9D9, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Mage: Light Skin Tone"
    }, {
        code: "0x1F9D9, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Mage: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D9, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Mage: Medium Skin Tone"
    }, {
        code: "0x1F9D9, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Mage: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D9, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Mage: Dark Skin Tone"
    }, {
        code: "0x1F9D9, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Mage"
    }, {
        code: "0x1F9D9, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Mage: Light Skin Tone"
    }, {
        code: "0x1F9D9, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Mage: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D9, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Mage: Medium Skin Tone"
    }, {
        code: "0x1F9D9, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Mage: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D9, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Mage: Dark Skin Tone"
    }, {
        code: "0x1F9DA",
        groupID: null,
        name: "Fairy"
    }, {
        code: "0x1F9DA, 0x1F3FB",
        groupID: null,
        name: "Fairy: Light Skin Tone"
    }, {
        code: "0x1F9DA, 0x1F3FC",
        groupID: null,
        name: "Fairy: Medium-Light Skin Tone"
    }, {
        code: "0x1F9DA, 0x1F3FD",
        groupID: null,
        name: "Fairy: Medium Skin Tone"
    }, {
        code: "0x1F9DA, 0x1F3FE",
        groupID: null,
        name: "Fairy: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9DA, 0x1F3FF",
        groupID: null,
        name: "Fairy: Dark Skin Tone"
    }, {
        code: "0x1F9DA, 0x200D, 0x2642",
        groupID: null,
        name: "Man Fairy"
    }, {
        code: "0x1F9DA, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Fairy: Light Skin Tone"
    }, {
        code: "0x1F9DA, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Fairy: Medium-Light Skin Tone"
    }, {
        code: "0x1F9DA, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Fairy: Medium Skin Tone"
    }, {
        code: "0x1F9DA, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Fairy: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9DA, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Fairy: Dark Skin Tone"
    }, {
        code: "0x1F9DA, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Fairy"
    }, {
        code: "0x1F9DA, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Fairy: Light Skin Tone"
    }, {
        code: "0x1F9DA, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Fairy: Medium-Light Skin Tone"
    }, {
        code: "0x1F9DA, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Fairy: Medium Skin Tone"
    }, {
        code: "0x1F9DA, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Fairy: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9DA, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Fairy: Dark Skin Tone"
    }, {
        code: "0x1F9DB",
        groupID: null,
        name: "Vampire"
    }, {
        code: "0x1F9DB, 0x1F3FB",
        groupID: null,
        name: "Vampire: Light Skin Tone"
    }, {
        code: "0x1F9DB, 0x1F3FC",
        groupID: null,
        name: "Vampire: Medium-Light Skin Tone"
    }, {
        code: "0x1F9DB, 0x1F3FD",
        groupID: null,
        name: "Vampire: Medium Skin Tone"
    }, {
        code: "0x1F9DB, 0x1F3FE",
        groupID: null,
        name: "Vampire: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9DB, 0x1F3FF",
        groupID: null,
        name: "Vampire: Dark Skin Tone"
    }, {
        code: "0x1F9DB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Vampire"
    }, {
        code: "0x1F9DB, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Vampire: Light Skin Tone"
    }, {
        code: "0x1F9DB, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Vampire: Medium-Light Skin Tone"
    }, {
        code: "0x1F9DB, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Vampire: Medium Skin Tone"
    }, {
        code: "0x1F9DB, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Vampire: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9DB, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Vampire: Dark Skin Tone"
    }, {
        code: "0x1F9DB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Vampire"
    }, {
        code: "0x1F9DB, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Vampire: Light Skin Tone"
    }, {
        code: "0x1F9DB, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Vampire: Medium-Light Skin Tone"
    }, {
        code: "0x1F9DB, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Vampire: Medium Skin Tone"
    }, {
        code: "0x1F9DB, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Vampire: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9DB, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Vampire: Dark Skin Tone"
    }, {
        code: "0x1F9DC",
        groupID: null,
        name: "Merperson"
    }, {
        code: "0x1F9DC, 0x1F3FB",
        groupID: null,
        name: "Merperson: Light Skin Tone"
    }, {
        code: "0x1F9DC, 0x1F3FC",
        groupID: null,
        name: "Merperson: Medium-Light Skin Tone"
    }, {
        code: "0x1F9DC, 0x1F3FD",
        groupID: null,
        name: "Merperson: Medium Skin Tone"
    }, {
        code: "0x1F9DC, 0x1F3FE",
        groupID: null,
        name: "Merperson: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9DC, 0x1F3FF",
        groupID: null,
        name: "Merperson: Dark Skin Tone"
    }, {
        code: "0x1F9DC, 0x200D, 0x2642",
        groupID: null,
        name: "Merman"
    }, {
        code: "0x1F9DC, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Merman: Light Skin Tone"
    }, {
        code: "0x1F9DC, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Merman: Medium-Light Skin Tone"
    }, {
        code: "0x1F9DC, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Merman: Medium Skin Tone"
    }, {
        code: "0x1F9DC, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Merman: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9DC, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Merman: Dark Skin Tone"
    }, {
        code: "0x1F9DC, 0x200D, 0x2640",
        groupID: null,
        name: "Mermaid"
    }, {
        code: "0x1F9DC, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Mermaid: Light Skin Tone"
    }, {
        code: "0x1F9DC, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Mermaid: Medium-Light Skin Tone"
    }, {
        code: "0x1F9DC, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Mermaid: Medium Skin Tone"
    }, {
        code: "0x1F9DC, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Mermaid: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9DC, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Mermaid: Dark Skin Tone"
    }, {
        code: "0x1F9DD",
        groupID: null,
        name: "Elf"
    }, {
        code: "0x1F9DD, 0x1F3FB",
        groupID: null,
        name: "Elf: Light Skin Tone"
    }, {
        code: "0x1F9DD, 0x1F3FC",
        groupID: null,
        name: "Elf: Medium-Light Skin Tone"
    }, {
        code: "0x1F9DD, 0x1F3FD",
        groupID: null,
        name: "Elf: Medium Skin Tone"
    }, {
        code: "0x1F9DD, 0x1F3FE",
        groupID: null,
        name: "Elf: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9DD, 0x1F3FF",
        groupID: null,
        name: "Elf: Dark Skin Tone"
    }, {
        code: "0x1F9DD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Elf"
    }, {
        code: "0x1F9DD, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Elf: Light Skin Tone"
    }, {
        code: "0x1F9DD, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Elf: Medium-Light Skin Tone"
    }, {
        code: "0x1F9DD, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Elf: Medium Skin Tone"
    }, {
        code: "0x1F9DD, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Elf: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9DD, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Elf: Dark Skin Tone"
    }, {
        code: "0x1F9DD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Elf"
    }, {
        code: "0x1F9DD, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Elf: Light Skin Tone"
    }, {
        code: "0x1F9DD, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Elf: Medium-Light Skin Tone"
    }, {
        code: "0x1F9DD, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Elf: Medium Skin Tone"
    }, {
        code: "0x1F9DD, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Elf: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9DD, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Elf: Dark Skin Tone"
    }, {
        code: "0x1F9DE",
        groupID: null,
        name: "Genie"
    }, {
        code: "0x1F9DE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Genie"
    }, {
        code: "0x1F9DE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Genie"
    }, {
        code: "0x1F9DF",
        groupID: null,
        name: "Zombie"
    }, {
        code: "0x1F9DF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Zombie"
    }, {
        code: "0x1F9DF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Zombie"
    }, {
        code: "0x1F486",
        groupID: null,
        name: "Person Getting Massage"
    }, {
        code: "0x1F486, 0x1F3FB",
        groupID: null,
        name: "Person Getting Massage: Light Skin Tone"
    }, {
        code: "0x1F486, 0x1F3FC",
        groupID: null,
        name: "Person Getting Massage: Medium-Light Skin Tone"
    }, {
        code: "0x1F486, 0x1F3FD",
        groupID: null,
        name: "Person Getting Massage: Medium Skin Tone"
    }, {
        code: "0x1F486, 0x1F3FE",
        groupID: null,
        name: "Person Getting Massage: Medium-Dark Skin Tone"
    }, {
        code: "0x1F486, 0x1F3FF",
        groupID: null,
        name: "Person Getting Massage: Dark Skin Tone"
    }, {
        code: "0x1F486, 0x200D, 0x2642",
        groupID: null,
        name: "Man Getting Massage"
    }, {
        code: "0x1F486, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Getting Massage: Light Skin Tone"
    }, {
        code: "0x1F486, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Getting Massage: Medium-Light Skin Tone"
    }, {
        code: "0x1F486, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Getting Massage: Medium Skin Tone"
    }, {
        code: "0x1F486, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Getting Massage: Medium-Dark Skin Tone"
    }, {
        code: "0x1F486, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Getting Massage: Dark Skin Tone"
    }, {
        code: "0x1F486, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Getting Massage"
    }, {
        code: "0x1F486, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Getting Massage: Light Skin Tone"
    }, {
        code: "0x1F486, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Getting Massage: Medium-Light Skin Tone"
    }, {
        code: "0x1F486, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Getting Massage: Medium Skin Tone"
    }, {
        code: "0x1F486, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Getting Massage: Medium-Dark Skin Tone"
    }, {
        code: "0x1F486, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Getting Massage: Dark Skin Tone"
    }, {
        code: "0x1F487",
        groupID: null,
        name: "Person Getting Haircut"
    }, {
        code: "0x1F487, 0x1F3FB",
        groupID: null,
        name: "Person Getting Haircut: Light Skin Tone"
    }, {
        code: "0x1F487, 0x1F3FC",
        groupID: null,
        name: "Person Getting Haircut: Medium-Light Skin Tone"
    }, {
        code: "0x1F487, 0x1F3FD",
        groupID: null,
        name: "Person Getting Haircut: Medium Skin Tone"
    }, {
        code: "0x1F487, 0x1F3FE",
        groupID: null,
        name: "Person Getting Haircut: Medium-Dark Skin Tone"
    }, {
        code: "0x1F487, 0x1F3FF",
        groupID: null,
        name: "Person Getting Haircut: Dark Skin Tone"
    }, {
        code: "0x1F487, 0x200D, 0x2642",
        groupID: null,
        name: "Man Getting Haircut"
    }, {
        code: "0x1F487, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Getting Haircut: Light Skin Tone"
    }, {
        code: "0x1F487, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Getting Haircut: Medium-Light Skin Tone"
    }, {
        code: "0x1F487, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Getting Haircut: Medium Skin Tone"
    }, {
        code: "0x1F487, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Getting Haircut: Medium-Dark Skin Tone"
    }, {
        code: "0x1F487, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Getting Haircut: Dark Skin Tone"
    }, {
        code: "0x1F487, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Getting Haircut"
    }, {
        code: "0x1F487, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Getting Haircut: Light Skin Tone"
    }, {
        code: "0x1F487, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Getting Haircut: Medium-Light Skin Tone"
    }, {
        code: "0x1F487, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Getting Haircut: Medium Skin Tone"
    }, {
        code: "0x1F487, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Getting Haircut: Medium-Dark Skin Tone"
    }, {
        code: "0x1F487, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Getting Haircut: Dark Skin Tone"
    }, {
        code: "0x1F6B6",
        groupID: null,
        name: "Person Walking"
    }, {
        code: "0x1F6B6, 0x1F3FB",
        groupID: null,
        name: "Person Walking: Light Skin Tone"
    }, {
        code: "0x1F6B6, 0x1F3FC",
        groupID: null,
        name: "Person Walking: Medium-Light Skin Tone"
    }, {
        code: "0x1F6B6, 0x1F3FD",
        groupID: null,
        name: "Person Walking: Medium Skin Tone"
    }, {
        code: "0x1F6B6, 0x1F3FE",
        groupID: null,
        name: "Person Walking: Medium-Dark Skin Tone"
    }, {
        code: "0x1F6B6, 0x1F3FF",
        groupID: null,
        name: "Person Walking: Dark Skin Tone"
    }, {
        code: "0x1F6B6, 0x200D, 0x2642",
        groupID: null,
        name: "Man Walking"
    }, {
        code: "0x1F6B6, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Walking: Light Skin Tone"
    }, {
        code: "0x1F6B6, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Walking: Medium-Light Skin Tone"
    }, {
        code: "0x1F6B6, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Walking: Medium Skin Tone"
    }, {
        code: "0x1F6B6, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Walking: Medium-Dark Skin Tone"
    }, {
        code: "0x1F6B6, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Walking: Dark Skin Tone"
    }, {
        code: "0x1F6B6, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Walking"
    }, {
        code: "0x1F6B6, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Walking: Light Skin Tone"
    }, {
        code: "0x1F6B6, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Walking: Medium-Light Skin Tone"
    }, {
        code: "0x1F6B6, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Walking: Medium Skin Tone"
    }, {
        code: "0x1F6B6, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Walking: Medium-Dark Skin Tone"
    }, {
        code: "0x1F6B6, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Walking: Dark Skin Tone"
    }, {
        code: "0x1F9CD",
        groupID: null,
        name: "Person Standing"
    }, {
        code: "0x1F9CD, 0x1F3FB",
        groupID: null,
        name: "Person Standing: Light Skin Tone"
    }, {
        code: "0x1F9CD, 0x1F3FC",
        groupID: null,
        name: "Person Standing: Medium-Light Skin Tone"
    }, {
        code: "0x1F9CD, 0x1F3FD",
        groupID: null,
        name: "Person Standing: Medium Skin Tone"
    }, {
        code: "0x1F9CD, 0x1F3FE",
        groupID: null,
        name: "Person Standing: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9CD, 0x1F3FF",
        groupID: null,
        name: "Person Standing: Dark Skin Tone"
    }, {
        code: "0x1F9CD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Standing"
    }, {
        code: "0x1F9CD, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Standing: Light Skin Tone"
    }, {
        code: "0x1F9CD, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Standing: Medium-Light Skin Tone"
    }, {
        code: "0x1F9CD, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Standing: Medium Skin Tone"
    }, {
        code: "0x1F9CD, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Standing: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9CD, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Standing: Dark Skin Tone"
    }, {
        code: "0x1F9CD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Standing"
    }, {
        code: "0x1F9CD, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Standing: Light Skin Tone"
    }, {
        code: "0x1F9CD, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Standing: Medium-Light Skin Tone"
    }, {
        code: "0x1F9CD, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Standing: Medium Skin Tone"
    }, {
        code: "0x1F9CD, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Standing: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9CD, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Standing: Dark Skin Tone"
    }, {
        code: "0x1F9CE",
        groupID: null,
        name: "Person Kneeling"
    }, {
        code: "0x1F9CE, 0x1F3FB",
        groupID: null,
        name: "Person Kneeling: Light Skin Tone"
    }, {
        code: "0x1F9CE, 0x1F3FC",
        groupID: null,
        name: "Person Kneeling: Medium-Light Skin Tone"
    }, {
        code: "0x1F9CE, 0x1F3FD",
        groupID: null,
        name: "Person Kneeling: Medium Skin Tone"
    }, {
        code: "0x1F9CE, 0x1F3FE",
        groupID: null,
        name: "Person Kneeling: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9CE, 0x1F3FF",
        groupID: null,
        name: "Person Kneeling: Dark Skin Tone"
    }, {
        code: "0x1F9CE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Kneeling"
    }, {
        code: "0x1F9CE, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Kneeling: Light Skin Tone"
    }, {
        code: "0x1F9CE, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Kneeling: Medium-Light Skin Tone"
    }, {
        code: "0x1F9CE, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Kneeling: Medium Skin Tone"
    }, {
        code: "0x1F9CE, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Kneeling: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9CE, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Kneeling: Dark Skin Tone"
    }, {
        code: "0x1F9CE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Kneeling"
    }, {
        code: "0x1F9CE, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Kneeling: Light Skin Tone"
    }, {
        code: "0x1F9CE, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Kneeling: Medium-Light Skin Tone"
    }, {
        code: "0x1F9CE, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Kneeling: Medium Skin Tone"
    }, {
        code: "0x1F9CE, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Kneeling: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9CE, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Kneeling: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F9AF",
        groupID: null,
        name: "Person With Probing Cane"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F9AF",
        groupID: null,
        name: "Person With Probing Cane: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F9AF",
        groupID: null,
        name: "Person With Probing Cane: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F9AF",
        groupID: null,
        name: "Person With Probing Cane: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F9AF",
        groupID: null,
        name: "Person With Probing Cane: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F9AF",
        groupID: null,
        name: "Person With Probing Cane: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x1F9AF",
        groupID: null,
        name: "Man With Probing Cane"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F9AF",
        groupID: null,
        name: "Man With Probing Cane: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F9AF",
        groupID: null,
        name: "Man With Probing Cane: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F9AF",
        groupID: null,
        name: "Man With Probing Cane: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F9AF",
        groupID: null,
        name: "Man With Probing Cane: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F9AF",
        groupID: null,
        name: "Man With Probing Cane: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x1F9AF",
        groupID: null,
        name: "Woman With Probing Cane"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F9AF",
        groupID: null,
        name: "Woman With Probing Cane: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F9AF",
        groupID: null,
        name: "Woman With Probing Cane: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F9AF",
        groupID: null,
        name: "Woman With Probing Cane: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F9AF",
        groupID: null,
        name: "Woman With Probing Cane: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F9AF",
        groupID: null,
        name: "Woman With Probing Cane: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F9BC",
        groupID: null,
        name: "Person in Motorized Wheelchair"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F9BC",
        groupID: null,
        name: "Person in Motorized Wheelchair: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F9BC",
        groupID: null,
        name: "Person in Motorized Wheelchair: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F9BC",
        groupID: null,
        name: "Person in Motorized Wheelchair: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F9BC",
        groupID: null,
        name: "Person in Motorized Wheelchair: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F9BC",
        groupID: null,
        name: "Person in Motorized Wheelchair: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x1F9BC",
        groupID: null,
        name: "Man in Motorized Wheelchair"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F9BC",
        groupID: null,
        name: "Man in Motorized Wheelchair: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F9BC",
        groupID: null,
        name: "Man in Motorized Wheelchair: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F9BC",
        groupID: null,
        name: "Man in Motorized Wheelchair: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F9BC",
        groupID: null,
        name: "Man in Motorized Wheelchair: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F9BC",
        groupID: null,
        name: "Man in Motorized Wheelchair: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x1F9BC",
        groupID: null,
        name: "Woman in Motorized Wheelchair"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F9BC",
        groupID: null,
        name: "Woman in Motorized Wheelchair: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F9BC",
        groupID: null,
        name: "Woman in Motorized Wheelchair: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F9BC",
        groupID: null,
        name: "Woman in Motorized Wheelchair: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F9BC",
        groupID: null,
        name: "Woman in Motorized Wheelchair: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F9BC",
        groupID: null,
        name: "Woman in Motorized Wheelchair: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F9BD",
        groupID: null,
        name: "Person in Manual Wheelchair"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F9BD",
        groupID: null,
        name: "Person in Manual Wheelchair: Light Skin Ton"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F9BD",
        groupID: null,
        name: "Person in Manual Wheelchair: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F9BD",
        groupID: null,
        name: "Person in Manual Wheelchair: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F9BD",
        groupID: null,
        name: "Person in Manual Wheelchair: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F9BD",
        groupID: null,
        name: "Person in Manual Wheelchair: Dark Skin Tone"
    }, {
        code: "0x1F468, 0x200D, 0x1F9BD",
        groupID: null,
        name: "Man in Manual Wheelchair"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F9BD",
        groupID: null,
        name: "Man in Manual Wheelchair: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F9BD",
        groupID: null,
        name: "Man in Manual Wheelchair: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F9BD",
        groupID: null,
        name: "Man in Manual Wheelchair: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F9BD",
        groupID: null,
        name: "Man in Manual Wheelchair: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F9BD",
        groupID: null,
        name: "Man in Manual Wheelchair: Dark Skin Tone"
    }, {
        code: "0x1F469, 0x200D, 0x1F9BD",
        groupID: null,
        name: "Woman in Manual Wheelchair"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F9BD",
        groupID: null,
        name: "Woman in Manual Wheelchair: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F9BD",
        groupID: null,
        name: "Woman in Manual Wheelchair: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F9BD",
        groupID: null,
        name: "Woman in Manual Wheelchair: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F9BD",
        groupID: null,
        name: "Woman in Manual Wheelchair: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F9BD",
        groupID: null,
        name: "Woman in Manual Wheelchair: Dark Skin Tone"
    }, {
        code: "0x1F3C3",
        groupID: null,
        name: "Person Running"
    }, {
        code: "0x1F3C3, 0x1F3FB",
        groupID: null,
        name: "Person Running: Light Skin Tone"
    }, {
        code: "0x1F3C3, 0x1F3FC",
        groupID: null,
        name: "Person Running: Medium-Light Skin Tone"
    }, {
        code: "0x1F3C3, 0x1F3FD",
        groupID: null,
        name: "Person Running: Medium Skin Tone"
    }, {
        code: "0x1F3C3, 0x1F3FE",
        groupID: null,
        name: "Person Running: Medium-Dark Skin Tone"
    }, {
        code: "0x1F3C3, 0x1F3FF",
        groupID: null,
        name: "Person Running: Dark Skin Tone"
    }, {
        code: "0x1F3C3, 0x200D, 0x2642",
        groupID: null,
        name: "Man Running"
    }, {
        code: "0x1F3C3, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Running: Light Skin Tone"
    }, {
        code: "0x1F3C3, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Running: Medium-Light Skin Tone"
    }, {
        code: "0x1F3C3, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Running: Medium Skin Tone"
    }, {
        code: "0x1F3C3, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Running: Medium-Dark Skin Tone"
    }, {
        code: "0x1F3C3, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Running: Dark Skin Tone"
    }, {
        code: "0x1F3C3, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Running"
    }, {
        code: "0x1F3C3, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Running: Light Skin Tone"
    }, {
        code: "0x1F3C3, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Running: Medium-Light Skin Tone"
    }, {
        code: "0x1F3C3, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Running: Medium Skin Tone"
    }, {
        code: "0x1F3C3, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Running: Medium-Dark Skin Tone"
    }, {
        code: "0x1F3C3, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Running: Dark Skin Tone"
    }, {
        code: "0x1F483",
        groupID: null,
        name: "Woman Dancing"
    }, {
        code: "0x1F483, 0x1F3FB",
        groupID: null,
        name: "Woman Dancing: Light Skin Tone"
    }, {
        code: "0x1F483, 0x1F3FC",
        groupID: null,
        name: "Woman Dancing: Medium-Light Skin Tone"
    }, {
        code: "0x1F483, 0x1F3FD",
        groupID: null,
        name: "Woman Dancing: Medium Skin Tone"
    }, {
        code: "0x1F483, 0x1F3FE",
        groupID: null,
        name: "Woman Dancing: Medium-Dark Skin Tone"
    }, {
        code: "0x1F483, 0x1F3FF",
        groupID: null,
        name: "Woman Dancing: Dark Skin Tone"
    }, {
        code: "0x1F57A",
        groupID: null,
        name: "Man Dancing"
    }, {
        code: "0x1F57A, 0x1F3FB",
        groupID: null,
        name: "Man Dancing: Light Skin Tone"
    }, {
        code: "0x1F57A, 0x1F3FC",
        groupID: null,
        name: "Man Dancing: Medium-Light Skin Tone"
    }, {
        code: "0x1F57A, 0x1F3FD",
        groupID: null,
        name: "Man Dancing: Medium Skin Tone"
    }, {
        code: "0x1F57A, 0x1F3FE",
        groupID: null,
        name: "Man Dancing: Medium-Dark Skin Tone"
    }, {
        code: "0x1F57A, 0x1F3FF",
        groupID: null,
        name: "Man Dancing: Dark Skin Tone"
    }, {
        code: "0x1F574",
        groupID: null,
        name: "Man in Suit Levitating"
    }, {
        code: "0x1F574, 0x1F3FB",
        groupID: null,
        name: "Man in Suit Levitating: Light Skin Tone"
    }, {
        code: "0x1F574, 0x1F3FC",
        groupID: null,
        name: "Man in Suit Levitating: Medium-Light Skin Tone"
    }, {
        code: "0x1F574, 0x1F3FD",
        groupID: null,
        name: "Man in Suit Levitating: Medium Skin Tone"
    }, {
        code: "0x1F574, 0x1F3FE",
        groupID: null,
        name: "Man in Suit Levitating: Medium-Dark Skin Tone"
    }, {
        code: "0x1F574, 0x1F3FF",
        groupID: null,
        name: "Man in Suit Levitating: Dark Skin Tone"
    }, {
        code: "0x1F46F",
        groupID: null,
        name: "People With Bunny Ears"
    }, {
        code: "0x1F46F, 0x200D, 0x2642",
        groupID: null,
        name: "Men With Bunny Ears"
    }, {
        code: "0x1F46F, 0x200D, 0x2640",
        groupID: null,
        name: "Women With Bunny Ears"
    }, {
        code: "0x1F9D6",
        groupID: null,
        name: "Person in Steamy Room"
    }, {
        code: "0x1F9D6, 0x1F3FB",
        groupID: null,
        name: "Person in Steamy Room: Light Skin Tone"
    }, {
        code: "0x1F9D6, 0x1F3FC",
        groupID: null,
        name: "Person in Steamy Room: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D6, 0x1F3FD",
        groupID: null,
        name: "Person in Steamy Room: Medium Skin Tone"
    }, {
        code: "0x1F9D6, 0x1F3FE",
        groupID: null,
        name: "Person in Steamy Room: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D6, 0x1F3FF",
        groupID: null,
        name: "Person in Steamy Room: Dark Skin Tone"
    }, {
        code: "0x1F9D6, 0x200D, 0x2642",
        groupID: null,
        name: "Man in Steamy Room"
    }, {
        code: "0x1F9D6, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man in Steamy Room: Light Skin Tone"
    }, {
        code: "0x1F9D6, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man in Steamy Room: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D6, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man in Steamy Room: Medium Skin Tone"
    }, {
        code: "0x1F9D6, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man in Steamy Room: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D6, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man in Steamy Room: Dark Skin Tone"
    }, {
        code: "0x1F9D6, 0x200D, 0x2640",
        groupID: null,
        name: "Woman in Steamy Room"
    }, {
        code: "0x1F9D6, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman in Steamy Room: Light Skin Tone"
    }, {
        code: "0x1F9D6, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman in Steamy Room: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D6, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman in Steamy Room: Medium Skin Tone"
    }, {
        code: "0x1F9D6, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman in Steamy Room: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D6, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman in Steamy Room: Dark Skin Tone"
    }, {
        code: "0x1F9D7",
        groupID: null,
        name: "Person Climbing"
    }, {
        code: "0x1F9D7, 0x1F3FB",
        groupID: null,
        name: "Person Climbing: Light Skin Tone"
    }, {
        code: "0x1F9D7, 0x1F3FC",
        groupID: null,
        name: "Person Climbing: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D7, 0x1F3FD",
        groupID: null,
        name: "Person Climbing: Medium Skin Tone"
    }, {
        code: "0x1F9D7, 0x1F3FE",
        groupID: null,
        name: "Person Climbing: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D7, 0x1F3FF",
        groupID: null,
        name: "Person Climbing: Dark Skin Tone"
    }, {
        code: "0x1F9D7, 0x200D, 0x2642",
        groupID: null,
        name: "Man Climbing"
    }, {
        code: "0x1F9D7, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Climbing: Light Skin Tone"
    }, {
        code: "0x1F9D7, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Climbing: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D7, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Climbing: Medium Skin Tone"
    }, {
        code: "0x1F9D7, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Climbing: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D7, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Climbing: Dark Skin Tone"
    }, {
        code: "0x1F9D7, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Climbing"
    }, {
        code: "0x1F9D7, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Climbing: Light Skin Tone"
    }, {
        code: "0x1F9D7, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Climbing: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D7, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Climbing: Medium Skin Tone"
    }, {
        code: "0x1F9D7, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Climbing: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D7, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Climbing: Dark Skin Tone"
    }, {
        code: "0x1F93A",
        groupID: null,
        name: "Person Fencing"
    }, {
        code: "0x1F3C7",
        groupID: null,
        name: "Horse Racing"
    }, {
        code: "0x1F3C7, 0x1F3FB",
        groupID: null,
        name: "Horse Racing: Light Skin Tone"
    }, {
        code: "0x1F3C7, 0x1F3FC",
        groupID: null,
        name: "Horse Racing: Medium-Light Skin Tone"
    }, {
        code: "0x1F3C7, 0x1F3FD",
        groupID: null,
        name: "Horse Racing: Medium Skin Tone"
    }, {
        code: "0x1F3C7, 0x1F3FE",
        groupID: null,
        name: "Horse Racing: Medium-Dark Skin Tone"
    }, {
        code: "0x1F3C7, 0x1F3FF",
        groupID: null,
        name: "Horse Racing: Dark Skin Tone"
    }, {
        code: "0x26F7",
        groupID: null,
        name: "Skier"
    }, {
        code: "0x1F3C2",
        groupID: null,
        name: "Snowboarder"
    }, {
        code: "0x1F3C2, 0x1F3FB",
        groupID: null,
        name: "Snowboarder: Light Skin Tone"
    }, {
        code: "0x1F3C2, 0x1F3FC",
        groupID: null,
        name: "Snowboarder: Medium-Light Skin Tone"
    }, {
        code: "0x1F3C2, 0x1F3FD",
        groupID: null,
        name: "Snowboarder: Medium Skin Tone"
    }, {
        code: "0x1F3C2, 0x1F3FE",
        groupID: null,
        name: "Snowboarder: Medium-Dark Skin Tone"
    }, {
        code: "0x1F3C2, 0x1F3FF",
        groupID: null,
        name: "Snowboarder: Dark Skin Tone"
    }, {
        code: "0x1F3CC",
        groupID: null,
        name: "Person Golfing"
    }, {
        code: "0x1F3CC, 0x1F3FB",
        groupID: null,
        name: "Person Golfing: Light Skin Tone"
    }, {
        code: "0x1F3CC, 0x1F3FC",
        groupID: null,
        name: "Person Golfing: Medium-Light Skin Tone"
    }, {
        code: "0x1F3CC, 0x1F3FD",
        groupID: null,
        name: "Person Golfing: Medium Skin Tone"
    }, {
        code: "0x1F3CC, 0x1F3FE",
        groupID: null,
        name: "Person Golfing: Medium-Dark Skin Tone"
    }, {
        code: "0x1F3CC, 0x1F3FF",
        groupID: null,
        name: "Person Golfing: Dark Skin Tone"
    }, {
        code: "0x1F3CC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Golfing"
    }, {
        code: "0x1F3CC, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Golfing: Light Skin Tone"
    }, {
        code: "0x1F3CC, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Golfing: Medium-Light Skin Tone"
    }, {
        code: "0x1F3CC, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Golfing: Medium Skin Tone"
    }, {
        code: "0x1F3CC, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Golfing: Medium-Dark Skin Tone"
    }, {
        code: "0x1F3CC, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Golfing: Dark Skin Tone"
    }, {
        code: "0x1F3CC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Golfing"
    }, {
        code: "0x1F3CC, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Golfing: Light Skin Tone"
    }, {
        code: "0x1F3CC, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Golfing: Medium-Light Skin Tone"
    }, {
        code: "0x1F3CC, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Golfing: Medium Skin Tone"
    }, {
        code: "0x1F3CC, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Golfing: Medium-Dark Skin Tone"
    }, {
        code: "0x1F3CC, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Golfing: Dark Skin Tone"
    }, {
        code: "0x1F3C4",
        groupID: null,
        name: "Person Surfing"
    }, {
        code: "0x1F3C4, 0x1F3FB",
        groupID: null,
        name: "Person Surfing: Light Skin Tone"
    }, {
        code: "0x1F3C4, 0x1F3FC",
        groupID: null,
        name: "Person Surfing: Medium-Light Skin Tone"
    }, {
        code: "0x1F3C4, 0x1F3FD",
        groupID: null,
        name: "Person Surfing: Medium Skin Tone"
    }, {
        code: "0x1F3C4, 0x1F3FE",
        groupID: null,
        name: "Person Surfing: Medium-Dark Skin Tone"
    }, {
        code: "0x1F3C4, 0x1F3FF",
        groupID: null,
        name: "Person Surfing: Dark Skin Tone"
    }, {
        code: "0x1F3C4, 0x200D, 0x2642",
        groupID: null,
        name: "Man Surfing"
    }, {
        code: "0x1F3C4, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Surfing: Light Skin Tone"
    }, {
        code: "0x1F3C4, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Surfing: Medium-Light Skin Tone"
    }, {
        code: "0x1F3C4, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Surfing: Medium Skin Tone"
    }, {
        code: "0x1F3C4, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Surfing: Medium-Dark Skin Tone"
    }, {
        code: "0x1F3C4, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Surfing: Dark Skin Tone"
    }, {
        code: "0x1F3C4, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Surfing"
    }, {
        code: "0x1F3C4, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Surfing: Light Skin Tone"
    }, {
        code: "0x1F3C4, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Surfing: Medium-Light Skin Tone"
    }, {
        code: "0x1F3C4, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Surfing: Medium Skin Tone"
    }, {
        code: "0x1F3C4, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Surfing: Medium-Dark Skin Tone"
    }, {
        code: "0x1F3C4, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Surfing: Dark Skin Tone"
    }, {
        code: "0x1F6A3",
        groupID: null,
        name: "Person Rowing Boat"
    }, {
        code: "0x1F6A3, 0x1F3FB",
        groupID: null,
        name: "Person Rowing Boat: Light Skin Tone"
    }, {
        code: "0x1F6A3, 0x1F3FC",
        groupID: null,
        name: "Person Rowing Boat: Medium-Light Skin Tone"
    }, {
        code: "0x1F6A3, 0x1F3FD",
        groupID: null,
        name: "Person Rowing Boat: Medium Skin Tone"
    }, {
        code: "0x1F6A3, 0x1F3FE",
        groupID: null,
        name: "Person Rowing Boat: Medium-Dark Skin Tone"
    }, {
        code: "0x1F6A3, 0x1F3FF",
        groupID: null,
        name: "Person Rowing Boat: Dark Skin Tone"
    }, {
        code: "0x1F6A3, 0x200D, 0x2642",
        groupID: null,
        name: "Man Rowing Boat"
    }, {
        code: "0x1F6A3, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Rowing Boat: Light Skin Tone"
    }, {
        code: "0x1F6A3, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Rowing Boat: Medium-Light Skin Tone"
    }, {
        code: "0x1F6A3, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Rowing Boat: Medium Skin Tone"
    }, {
        code: "0x1F6A3, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Rowing Boat: Medium-Dark Skin Tone"
    }, {
        code: "0x1F6A3, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Rowing Boat: Dark Skin Tone"
    }, {
        code: "0x1F6A3, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Rowing Boat"
    }, {
        code: "0x1F6A3, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Rowing Boat: Light Skin Tone"
    }, {
        code: "0x1F6A3, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Rowing Boat: Medium-Light Skin Tone"
    }, {
        code: "0x1F6A3, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Rowing Boat: Medium Skin Tone"
    }, {
        code: "0x1F6A3, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Rowing Boat: Medium-Dark Skin Tone"
    }, {
        code: "0x1F6A3, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Rowing Boat: Dark Skin Tone"
    }, {
        code: "0x1F3CA",
        groupID: null,
        name: "Person Swimming"
    }, {
        code: "0x1F3CA, 0x1F3FB",
        groupID: null,
        name: "Person Swimming: Light Skin Tone"
    }, {
        code: "0x1F3CA, 0x1F3FC",
        groupID: null,
        name: "Person Swimming: Medium-Light Skin Tone"
    }, {
        code: "0x1F3CA, 0x1F3FD",
        groupID: null,
        name: "Person Swimming: Medium Skin Tone"
    }, {
        code: "0x1F3CA, 0x1F3FE",
        groupID: null,
        name: "Person Swimming: Medium-Dark Skin Tone"
    }, {
        code: "0x1F3CA, 0x1F3FF",
        groupID: null,
        name: "Person Swimming: Dark Skin Tone"
    }, {
        code: "0x1F3CA, 0x200D, 0x2642",
        groupID: null,
        name: "Man Swimming"
    }, {
        code: "0x1F3CA, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Swimming: Light Skin Tone"
    }, {
        code: "0x1F3CA, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Swimming: Medium-Light Skin Tone"
    }, {
        code: "0x1F3CA, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Swimming: Medium Skin Tone"
    }, {
        code: "0x1F3CA, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Swimming: Medium-Dark Skin Tone"
    }, {
        code: "0x1F3CA, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Swimming: Dark Skin Tone"
    }, {
        code: "0x1F3CA, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Swimming"
    }, {
        code: "0x1F3CA, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Swimming: Light Skin Tone"
    }, {
        code: "0x1F3CA, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Swimming: Medium-Light Skin Tone"
    }, {
        code: "0x1F3CA, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Swimming: Medium Skin Tone"
    }, {
        code: "0x1F3CA, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Swimming: Medium-Dark Skin Tone"
    }, {
        code: "0x1F3CA, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Swimming: Dark Skin Tone"
    }, {
        code: "0x26F9",
        groupID: null,
        name: "Person Bouncing Ball"
    }, {
        code: "0x26F9, 0x1F3FB",
        groupID: null,
        name: "Person Bouncing Ball: Light Skin Tone"
    }, {
        code: "0x26F9, 0x1F3FC",
        groupID: null,
        name: "Person Bouncing Ball: Medium-Light Skin Tone"
    }, {
        code: "0x26F9, 0x1F3FD",
        groupID: null,
        name: "Person Bouncing Ball: Medium Skin Tone"
    }, {
        code: "0x26F9, 0x1F3FE",
        groupID: null,
        name: "Person Bouncing Ball: Medium-Dark Skin Tone"
    }, {
        code: "0x26F9, 0x1F3FF",
        groupID: null,
        name: "Person Bouncing Ball: Dark Skin Tone"
    }, {
        code: "0x26F9, 0x200D, 0x2642",
        groupID: null,
        name: "Man Bouncing Ball"
    }, {
        code: "0x26F9, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Bouncing Ball: Light Skin Tone"
    }, {
        code: "0x26F9, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Bouncing Ball: Medium-Light Skin Tone"
    }, {
        code: "0x26F9, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Bouncing Ball: Medium Skin Tone"
    }, {
        code: "0x26F9, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Bouncing Ball: Medium-Dark Skin Tone"
    }, {
        code: "0x26F9, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Bouncing Ball: Dark Skin Tone"
    }, {
        code: "0x26F9, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Bouncing Ball"
    }, {
        code: "0x26F9, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Bouncing Ball: Light Skin Tone"
    }, {
        code: "0x26F9, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Bouncing Ball: Medium-Light Skin Tone"
    }, {
        code: "0x26F9, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Bouncing Ball: Medium Skin Tone"
    }, {
        code: "0x26F9, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Bouncing Ball: Medium-Dark Skin Tone"
    }, {
        code: "0x26F9, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Bouncing Ball: Dark Skin Tone"
    }, {
        code: "0x1F3CB",
        groupID: null,
        name: "Person Lifting Weights"
    }, {
        code: "0x1F3CB, 0x1F3FB",
        groupID: null,
        name: "Person Lifting Weights: Light Skin Tone"
    }, {
        code: "0x1F3CB, 0x1F3FC",
        groupID: null,
        name: "Person Lifting Weights: Medium-Light Skin Tone"
    }, {
        code: "0x1F3CB, 0x1F3FD",
        groupID: null,
        name: "Person Lifting Weights: Medium Skin Tone"
    }, {
        code: "0x1F3CB, 0x1F3FE",
        groupID: null,
        name: "Person Lifting Weights: Medium-Dark Skin Tone"
    }, {
        code: "0x1F3CB, 0x1F3FF",
        groupID: null,
        name: "Person Lifting Weights: Dark Skin Tone"
    }, {
        code: "0x1F3CB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Lifting Weights"
    }, {
        code: "0x1F3CB, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Lifting Weights: Light Skin Tone"
    }, {
        code: "0x1F3CB, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Lifting Weights: Medium-Light Skin Tone"
    }, {
        code: "0x1F3CB, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Lifting Weights: Medium Skin Tone"
    }, {
        code: "0x1F3CB, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Lifting Weights: Medium-Dark Skin Tone"
    }, {
        code: "0x1F3CB, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Lifting Weights: Dark Skin Tone"
    }, {
        code: "0x1F3CB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Lifting Weights"
    }, {
        code: "0x1F3CB, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Lifting Weights: Light Skin Tone"
    }, {
        code: "0x1F3CB, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Lifting Weights: Medium-Light Skin Tone"
    }, {
        code: "0x1F3CB, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Lifting Weights: Medium Skin Tone"
    }, {
        code: "0x1F3CB, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Lifting Weights: Medium-Dark Skin Tone"
    }, {
        code: "0x1F3CB, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Lifting Weights: Dark Skin Tone"
    }, {
        code: "0x1F6B4",
        groupID: null,
        name: "Person Biking"
    }, {
        code: "0x1F6B4, 0x1F3FB",
        groupID: null,
        name: "Person Biking: Light Skin Tone"
    }, {
        code: "0x1F6B4, 0x1F3FC",
        groupID: null,
        name: "Person Biking: Medium-Light Skin Tone"
    }, {
        code: "0x1F6B4, 0x1F3FD",
        groupID: null,
        name: "Person Biking: Medium Skin Tone"
    }, {
        code: "0x1F6B4, 0x1F3FE",
        groupID: null,
        name: "Person Biking: Medium-Dark Skin Tone"
    }, {
        code: "0x1F6B4, 0x1F3FF",
        groupID: null,
        name: "Person Biking: Dark Skin Tone"
    }, {
        code: "0x1F6B4, 0x200D, 0x2642",
        groupID: null,
        name: "Man Biking"
    }, {
        code: "0x1F6B4, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Biking: Light Skin Tone"
    }, {
        code: "0x1F6B4, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Biking: Medium-Light Skin Tone"
    }, {
        code: "0x1F6B4, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Biking: Medium Skin Tone"
    }, {
        code: "0x1F6B4, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Biking: Medium-Dark Skin Tone"
    }, {
        code: "0x1F6B4, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Biking: Dark Skin Tone"
    }, {
        code: "0x1F6B4, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Biking"
    }, {
        code: "0x1F6B4, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Biking: Light Skin Tone"
    }, {
        code: "0x1F6B4, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Biking: Medium-Light Skin Tone"
    }, {
        code: "0x1F6B4, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Biking: Medium Skin Tone"
    }, {
        code: "0x1F6B4, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Biking: Medium-Dark Skin Tone"
    }, {
        code: "0x1F6B4, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Biking: Dark Skin Tone"
    }, {
        code: "0x1F6B5",
        groupID: null,
        name: "Person Mountain Biking"
    }, {
        code: "0x1F6B5, 0x1F3FB",
        groupID: null,
        name: "Person Mountain Biking: Light Skin Tone"
    }, {
        code: "0x1F6B5, 0x1F3FC",
        groupID: null,
        name: "Person Mountain Biking: Medium-Light Skin Tone"
    }, {
        code: "0x1F6B5, 0x1F3FD",
        groupID: null,
        name: "Person Mountain Biking: Medium Skin Tone"
    }, {
        code: "0x1F6B5, 0x1F3FE",
        groupID: null,
        name: "Person Mountain Biking: Medium-Dark Skin Tone"
    }, {
        code: "0x1F6B5, 0x1F3FF",
        groupID: null,
        name: "Person Mountain Biking: Dark Skin Tone"
    }, {
        code: "0x1F6B5, 0x200D, 0x2642",
        groupID: null,
        name: "Man Mountain Biking"
    }, {
        code: "0x1F6B5, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Mountain Biking: Light Skin Tone"
    }, {
        code: "0x1F6B5, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Mountain Biking: Medium-Light Skin Tone"
    }, {
        code: "0x1F6B5, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Mountain Biking: Medium Skin Tone"
    }, {
        code: "0x1F6B5, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Mountain Biking: Medium-Dark Skin Tone"
    }, {
        code: "0x1F6B5, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Mountain Biking: Dark Skin Tone"
    }, {
        code: "0x1F6B5, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Mountain Biking"
    }, {
        code: "0x1F6B5, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Mountain Biking: Light Skin Tone"
    }, {
        code: "0x1F6B5, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Mountain Biking: Medium-Light Skin Tone"
    }, {
        code: "0x1F6B5, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Mountain Biking: Medium Skin Tone"
    }, {
        code: "0x1F6B5, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Mountain Biking: Medium-Dark Skin Tone"
    }, {
        code: "0x1F6B5, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Mountain Biking: Dark Skin Tone"
    }, {
        code: "0x1F938",
        groupID: null,
        name: "Person Cartwheeling"
    }, {
        code: "0x1F938, 0x1F3FB",
        groupID: null,
        name: "Person Cartwheeling: Light Skin Tone"
    }, {
        code: "0x1F938, 0x1F3FC",
        groupID: null,
        name: "Person Cartwheeling: Medium-Light Skin Tone"
    }, {
        code: "0x1F938, 0x1F3FD",
        groupID: null,
        name: "Person Cartwheeling: Medium Skin Tone"
    }, {
        code: "0x1F938, 0x1F3FE",
        groupID: null,
        name: "Person Cartwheeling: Medium-Dark Skin Tone"
    }, {
        code: "0x1F938, 0x1F3FF",
        groupID: null,
        name: "Person Cartwheeling: Dark Skin Tone"
    }, {
        code: "0x1F938, 0x200D, 0x2642",
        groupID: null,
        name: "Man Cartwheeling"
    }, {
        code: "0x1F938, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Cartwheeling: Light Skin Tone"
    }, {
        code: "0x1F938, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Cartwheeling: Medium-Light Skin Tone"
    }, {
        code: "0x1F938, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Cartwheeling: Medium Skin Tone"
    }, {
        code: "0x1F938, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Cartwheeling: Medium-Dark Skin Tone"
    }, {
        code: "0x1F938, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Cartwheeling: Dark Skin Tone"
    }, {
        code: "0x1F938, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Cartwheeling"
    }, {
        code: "0x1F938, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Cartwheeling: Light Skin Tone"
    }, {
        code: "0x1F938, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Cartwheeling: Medium-Light Skin Tone"
    }, {
        code: "0x1F938, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Cartwheeling: Medium Skin Tone"
    }, {
        code: "0x1F938, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Cartwheeling: Medium-Dark Skin Tone"
    }, {
        code: "0x1F938, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Cartwheeling: Dark Skin Tone"
    }, {
        code: "0x1F93C",
        groupID: null,
        name: "People Wrestling"
    }, {
        code: "0x1F93C, 0x200D, 0x2642",
        groupID: null,
        name: "Men Wrestling"
    }, {
        code: "0x1F93C, 0x200D, 0x2640",
        groupID: null,
        name: "Women Wrestling"
    }, {
        code: "0x1F93D",
        groupID: null,
        name: "Person Playing Water Polo"
    }, {
        code: "0x1F93D, 0x1F3FB",
        groupID: null,
        name: "Person Playing Water Polo: Light Skin Tone"
    }, {
        code: "0x1F93D, 0x1F3FC",
        groupID: null,
        name: "Person Playing Water Polo: Medium-Light Skin Tone"
    }, {
        code: "0x1F93D, 0x1F3FD",
        groupID: null,
        name: "Person Playing Water Polo: Medium Skin Tone"
    }, {
        code: "0x1F93D, 0x1F3FE",
        groupID: null,
        name: "Person Playing Water Polo: Medium-Dark Skin Tone"
    }, {
        code: "0x1F93D, 0x1F3FF",
        groupID: null,
        name: "Person Playing Water Polo: Dark Skin Tone"
    }, {
        code: "0x1F93D, 0x200D, 0x2642",
        groupID: null,
        name: "Man Playing Water Polo"
    }, {
        code: "0x1F93D, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Playing Water Polo: Light Skin Tone"
    }, {
        code: "0x1F93D, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Playing Water Polo: Medium-Light Skin Tone"
    }, {
        code: "0x1F93D, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Playing Water Polo: Medium Skin Tone"
    }, {
        code: "0x1F93D, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Playing Water Polo: Medium-Dark Skin Tone"
    }, {
        code: "0x1F93D, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Playing Water Polo: Dark Skin Tone"
    }, {
        code: "0x1F93D, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Playing Water Polo"
    }, {
        code: "0x1F93D, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Playing Water Polo: Light Skin Tone"
    }, {
        code: "0x1F93D, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Playing Water Polo: Medium-Light Skin Tone"
    }, {
        code: "0x1F93D, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Playing Water Polo: Medium Skin Tone"
    }, {
        code: "0x1F93D, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Playing Water Polo: Medium-Dark Skin Tone"
    }, {
        code: "0x1F93D, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Playing Water Polo: Dark Skin Tone"
    }, {
        code: "0x1F93E",
        groupID: null,
        name: "Person Playing Handball"
    }, {
        code: "0x1F93E, 0x1F3FB",
        groupID: null,
        name: "Person Playing Handball: Light Skin Tone"
    }, {
        code: "0x1F93E, 0x1F3FC",
        groupID: null,
        name: "Person Playing Handball: Medium-Light Skin Tone"
    }, {
        code: "0x1F93E, 0x1F3FD",
        groupID: null,
        name: "Person Playing Handball: Medium Skin Tone"
    }, {
        code: "0x1F93E, 0x1F3FE",
        groupID: null,
        name: "Person Playing Handball: Medium-Dark Skin Tone"
    }, {
        code: "0x1F93E, 0x1F3FF",
        groupID: null,
        name: "Person Playing Handball: Dark Skin Tone"
    }, {
        code: "0x1F93E, 0x200D, 0x2642",
        groupID: null,
        name: "Man Playing Handball"
    }, {
        code: "0x1F93E, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Playing Handball: Light Skin Tone"
    }, {
        code: "0x1F93E, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Playing Handball: Medium-Light Skin Tone"
    }, {
        code: "0x1F93E, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Playing Handball: Medium Skin Tone"
    }, {
        code: "0x1F93E, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Playing Handball: Medium-Dark Skin Tone"
    }, {
        code: "0x1F93E, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Playing Handball: Dark Skin Tone"
    }, {
        code: "0x1F93E, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Playing Handball"
    }, {
        code: "0x1F93E, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Playing Handball: Light Skin Tone"
    }, {
        code: "0x1F93E, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Playing Handball: Medium-Light Skin Tone"
    }, {
        code: "0x1F93E, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Playing Handball: Medium Skin Tone"
    }, {
        code: "0x1F93E, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Playing Handball: Medium-Dark Skin Tone"
    }, {
        code: "0x1F93E, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Playing Handball: Dark Skin Tone"
    }, {
        code: "0x1F939",
        groupID: null,
        name: "Person Juggling"
    }, {
        code: "0x1F939, 0x1F3FB",
        groupID: null,
        name: "Person Juggling: Light Skin Tone"
    }, {
        code: "0x1F939, 0x1F3FC",
        groupID: null,
        name: "Person Juggling: Medium-Light Skin Tone"
    }, {
        code: "0x1F939, 0x1F3FD",
        groupID: null,
        name: "Person Juggling: Medium Skin Tone"
    }, {
        code: "0x1F939, 0x1F3FE",
        groupID: null,
        name: "Person Juggling: Medium-Dark Skin Tone"
    }, {
        code: "0x1F939, 0x1F3FF",
        groupID: null,
        name: "Person Juggling: Dark Skin Tone"
    }, {
        code: "0x1F939, 0x200D, 0x2642",
        groupID: null,
        name: "Man Juggling"
    }, {
        code: "0x1F939, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man Juggling: Light Skin Tone"
    }, {
        code: "0x1F939, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man Juggling: Medium-Light Skin Tone"
    }, {
        code: "0x1F939, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man Juggling: Medium Skin Tone"
    }, {
        code: "0x1F939, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man Juggling: Medium-Dark Skin Tone"
    }, {
        code: "0x1F939, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man Juggling: Dark Skin Tone"
    }, {
        code: "0x1F939, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Juggling"
    }, {
        code: "0x1F939, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Juggling: Light Skin Tone"
    }, {
        code: "0x1F939, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Juggling: Medium-Light Skin Tone"
    }, {
        code: "0x1F939, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Juggling: Medium Skin Tone"
    }, {
        code: "0x1F939, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Juggling: Medium-Dark Skin Tone"
    }, {
        code: "0x1F939, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman Juggling: Dark Skin Tone"
    }, {
        code: "0x1F9D8",
        groupID: null,
        name: "Person in Lotus Position"
    }, {
        code: "0x1F9D8, 0x1F3FB",
        groupID: null,
        name: "Person in Lotus Position: Light Skin Tone"
    }, {
        code: "0x1F9D8, 0x1F3FC",
        groupID: null,
        name: "Person in Lotus Position: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D8, 0x1F3FD",
        groupID: null,
        name: "Person in Lotus Position: Medium Skin Tone"
    }, {
        code: "0x1F9D8, 0x1F3FE",
        groupID: null,
        name: "Person in Lotus Position: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D8, 0x1F3FF",
        groupID: null,
        name: "Person in Lotus Position: Dark Skin Tone"
    }, {
        code: "0x1F9D8, 0x200D, 0x2642",
        groupID: null,
        name: "Man in Lotus Position"
    }, {
        code: "0x1F46F, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Men With Bunny Ears Partying, Type-1-2"
    }, {
        code: "0x1F9D8, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Man in Lotus Position: Light Skin Tone"
    }, {
        code: "0x1F9D8, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Man in Lotus Position: Medium-Light Skin Tone"
    }, {
        code: "0x1F46F, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Men With Bunny Ears Partying, Type-3"
    }, {
        code: "0x1F9D8, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Man in Lotus Position: Medium Skin Tone"
    }, {
        code: "0x1F9D8, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Man in Lotus Position: Medium-Dark Skin Tone"
    }, {
        code: "0x1F46F, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Men With Bunny Ears Partying, Type-4"
    }, {
        code: "0x1F9D8, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Man in Lotus Position: Dark Skin Tone"
    }, {
        code: "0x1F9D8, 0x200D, 0x2640",
        groupID: null,
        name: "Woman in Lotus Position"
    }, {
        code: "0x1F46F, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Men With Bunny Ears Partying, Type-5"
    }, {
        code: "0x1F9D8, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Woman in Lotus Position: Light Skin Tone"
    }, {
        code: "0x1F9D8, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Woman in Lotus Position: Medium-Light Skin Tone"
    }, {
        code: "0x1F46F, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Men With Bunny Ears Partying, Type-6"
    }, {
        code: "0x1F9D8, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Woman in Lotus Position: Medium Skin Tone"
    }, {
        code: "0x1F9D8, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Woman in Lotus Position: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D8, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Woman in Lotus Position: Dark Skin Tone"
    }, {
        code: "0x1F6C0",
        groupID: null,
        name: "Person Taking Bath"
    }, {
        code: "0x1F46F, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Women With Bunny Ears Partying, Type-1-2"
    }, {
        code: "0x1F6C0, 0x1F3FB",
        groupID: null,
        name: "Person Taking Bath: Light Skin Tone"
    }, {
        code: "0x1F6C0, 0x1F3FC",
        groupID: null,
        name: "Person Taking Bath: Medium-Light Skin Tone"
    }, {
        code: "0x1F46F, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Women With Bunny Ears Partying, Type-3"
    }, {
        code: "0x1F6C0, 0x1F3FD",
        groupID: null,
        name: "Person Taking Bath: Medium Skin Tone"
    }, {
        code: "0x1F6C0, 0x1F3FE",
        groupID: null,
        name: "Person Taking Bath: Medium-Dark Skin Tone"
    }, {
        code: "0x1F46F, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Women With Bunny Ears Partying, Type-4"
    }, {
        code: "0x1F6C0, 0x1F3FF",
        groupID: null,
        name: "Person Taking Bath: Dark Skin Tone"
    }, {
        code: "0x1F6CC",
        groupID: null,
        name: "Person in Bed"
    }, {
        code: "0x1F6CC, 0x1F3FB",
        groupID: null,
        name: "Person in Bed: Light Skin Tone"
    }, {
        code: "0x1F46F, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Women With Bunny Ears Partying, Type-5"
    }, {
        code: "0x1F6CC, 0x1F3FC",
        groupID: null,
        name: "Person in Bed: Medium-Light Skin Tone"
    }, {
        code: "0x1F46F, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Women With Bunny Ears Partying, Type-6"
    }, {
        code: "0x1F6CC, 0x1F3FD",
        groupID: null,
        name: "Person in Bed: Medium Skin Tone"
    }, {
        code: "0x1F6CC, 0x1F3FE",
        groupID: null,
        name: "Person in Bed: Medium-Dark Skin Tone"
    }, {
        code: "0x1F6CC, 0x1F3FF",
        groupID: null,
        name: "Person in Bed: Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x200D, 0x1F91D, 0x200D, 0x1F9D1",
        groupID: null,
        name: "People Holding Hands"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FB",
        groupID: null,
        name: "People Holding Hands: Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FC",
        groupID: null,
        name: "People Holding Hands: Light Skin Tone, Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FD",
        groupID: null,
        name: "People Holding Hands: Light Skin Tone, Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FE",
        groupID: null,
        name: "People Holding Hands: Light Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FF",
        groupID: null,
        name: "People Holding Hands: Light Skin Tone, Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FB",
        groupID: null,
        name: "People Holding Hands: Medium-Light Skin Tone, Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FC",
        groupID: null,
        name: "People Holding Hands: Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FD",
        groupID: null,
        name: "People Holding Hands: Medium-Light Skin Tone, Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FE",
        groupID: null,
        name: "People Holding Hands: Medium-Light Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FF",
        groupID: null,
        name: "People Holding Hands: Medium-Light Skin Tone, Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FB",
        groupID: null,
        name: "People Holding Hands: Medium Skin Tone, Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FC",
        groupID: null,
        name: "People Holding Hands: Medium Skin Tone, Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FD",
        groupID: null,
        name: "People Holding Hands: Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FE",
        groupID: null,
        name: "People Holding Hands: Medium Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FF",
        groupID: null,
        name: "People Holding Hands: Medium Skin Tone, Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FB",
        groupID: null,
        name: "People Holding Hands: Medium-Dark Skin Tone, Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FC",
        groupID: null,
        name: "People Holding Hands: Medium-Dark Skin Tone, Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FD",
        groupID: null,
        name: "People Holding Hands: Medium-Dark Skin Tone, Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FE",
        groupID: null,
        name: "People Holding Hands: Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FF",
        groupID: null,
        name: "People Holding Hands: Medium-Dark Skin Tone, Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FB",
        groupID: null,
        name: "People Holding Hands: Dark Skin Tone, Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FC",
        groupID: null,
        name: "People Holding Hands: Dark Skin Tone, Medium-Light Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FD",
        groupID: null,
        name: "People Holding Hands: Dark Skin Tone, Medium Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FE",
        groupID: null,
        name: "People Holding Hands: Dark Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: "0x1F9D1, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F9D1, 0x1F3FF",
        groupID: null,
        name: "People Holding Hands: Dark Skin Tone"
    }, {
        code: "0x1F46D",
        groupID: null,
        name: "Women Holding Hands"
    }, {
        code: "0x1F46D, 0x1F3FB",
        groupID: null,
        name: "Women Holding Hands: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FC",
        groupID: null,
        name: "Women Holding Hands: Light Skin Tone, Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FD",
        groupID: null,
        name: "Women Holding Hands: Light Skin Tone, Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FE",
        groupID: null,
        name: "Women Holding Hands: Light Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FF",
        groupID: null,
        name: "Women Holding Hands: Light Skin Tone, Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FB",
        groupID: null,
        name: "Women Holding Hands: Medium-Light Skin Tone, Light Skin Tone"
    }, {
        code: "0x1F46D, 0x1F3FC",
        groupID: null,
        name: "Women Holding Hands: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FD",
        groupID: null,
        name: "Women Holding Hands: Medium-Light Skin Tone, Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FE",
        groupID: null,
        name: "Women Holding Hands: Medium-Light Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FF",
        groupID: null,
        name: "Women Holding Hands: Medium-Light Skin Tone, Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FB",
        groupID: null,
        name: "Women Holding Hands: Medium Skin Tone, Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FC",
        groupID: null,
        name: "Women Holding Hands: Medium Skin Tone, Medium-Light Skin Tone"
    }, {
        code: "0x1F46D, 0x1F3FD",
        groupID: null,
        name: "Women Holding Hands: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FE",
        groupID: null,
        name: "Women Holding Hands: Medium Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FF",
        groupID: null,
        name: "Women Holding Hands: Medium Skin Tone, Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FB",
        groupID: null,
        name: "Women Holding Hands: Medium-Dark Skin Tone, Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FC",
        groupID: null,
        name: "Women Holding Hands: Medium-Dark Skin Tone, Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FD",
        groupID: null,
        name: "Women Holding Hands: Medium-Dark Skin Tone, Medium Skin Tone"
    }, {
        code: "0x1F46D, 0x1F3FE",
        groupID: null,
        name: "Women Holding Hands: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FF",
        groupID: null,
        name: "Women Holding Hands: Medium-Dark Skin Tone, Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FB",
        groupID: null,
        name: "Women Holding Hands: Dark Skin Tone, Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FC",
        groupID: null,
        name: "Women Holding Hands: Dark Skin Tone, Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FD",
        groupID: null,
        name: "Women Holding Hands: Dark Skin Tone, Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F469, 0x1F3FE",
        groupID: null,
        name: "Women Holding Hands: Dark Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: "0x1F46D, 0x1F3FF",
        groupID: null,
        name: "Women Holding Hands: Dark Skin Tone"
    }, {
        code: "0x1F46B",
        groupID: null,
        name: "Woman and Man Holding Hands"
    }, {
        code: "0x1F46B, 0x1F3FB",
        groupID: null,
        name: "Woman and Man Holding Hands: Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FC",
        groupID: null,
        name: "Woman and Man Holding Hands: Light Skin Tone, Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FD",
        groupID: null,
        name: "Woman and Man Holding Hands: Light Skin Tone, Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FE",
        groupID: null,
        name: "Woman and Man Holding Hands: Light Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FF",
        groupID: null,
        name: "Woman and Man Holding Hands: Light Skin Tone, Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FB",
        groupID: null,
        name: "Woman and Man Holding Hands: Medium-Light Skin Tone, Light Skin Tone"
    }, {
        code: "0x1F46B, 0x1F3FC",
        groupID: null,
        name: "Woman and Man Holding Hands: Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FD",
        groupID: null,
        name: "Woman and Man Holding Hands: Medium-Light Skin Tone, Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FE",
        groupID: null,
        name: "Woman and Man Holding Hands: Medium-Light Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FF",
        groupID: null,
        name: "Woman and Man Holding Hands: Medium-Light Skin Tone, Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FB",
        groupID: null,
        name: "Woman and Man Holding Hands: Medium Skin Tone, Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FC",
        groupID: null,
        name: "Woman and Man Holding Hands: Medium Skin Tone, Medium-Light Skin Tone"
    }, {
        code: "0x1F46B, 0x1F3FD",
        groupID: null,
        name: "Woman and Man Holding Hands: Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FE",
        groupID: null,
        name: "Woman and Man Holding Hands: Medium Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FF",
        groupID: null,
        name: "Woman and Man Holding Hands: Medium Skin Tone, Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FB",
        groupID: null,
        name: "Woman and Man Holding Hands: Medium-Dark Skin Tone, Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FC",
        groupID: null,
        name: "Woman and Man Holding Hands: Medium-Dark Skin Tone, Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FD",
        groupID: null,
        name: "Woman and Man Holding Hands: Medium-Dark Skin Tone, Medium Skin Tone"
    }, {
        code: "0x1F46B, 0x1F3FE",
        groupID: null,
        name: "Woman and Man Holding Hands: Medium-Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FF",
        groupID: null,
        name: "Woman and Man Holding Hands: Medium-Dark Skin Tone, Dark Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FB",
        groupID: null,
        name: "Woman and Man Holding Hands: Dark Skin Tone, Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FC",
        groupID: null,
        name: "Woman and Man Holding Hands: Dark Skin Tone, Medium-Light Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FD",
        groupID: null,
        name: "Woman and Man Holding Hands: Dark Skin Tone, Medium Skin Tone"
    }, {
        code: "0x1F469, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FE",
        groupID: null,
        name: "Woman and Man Holding Hands: Dark Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: "0x1F46B, 0x1F3FF",
        groupID: null,
        name: "Woman and Man Holding Hands: Dark Skin Tone"
    }, {
        code: "0x1F46C",
        groupID: null,
        name: "Men Holding Hands"
    }, {
        code: "0x1F46C, 0x1F3FB",
        groupID: null,
        name: "Men Holding Hands: Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FC",
        groupID: null,
        name: "Men Holding Hands: Light Skin Tone, Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FD",
        groupID: null,
        name: "Men Holding Hands: Light Skin Tone, Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FE",
        groupID: null,
        name: "Men Holding Hands: Light Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FB, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FF",
        groupID: null,
        name: "Men Holding Hands: Light Skin Tone, Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FB",
        groupID: null,
        name: "Men Holding Hands: Medium-Light Skin Tone, Light Skin Tone"
    }, {
        code: "0x1F46C, 0x1F3FC",
        groupID: null,
        name: "Men Holding Hands: Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FD",
        groupID: null,
        name: "Men Holding Hands: Medium-Light Skin Tone, Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FE",
        groupID: null,
        name: "Men Holding Hands: Medium-Light Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FC, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FF",
        groupID: null,
        name: "Men Holding Hands: Medium-Light Skin Tone, Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FB",
        groupID: null,
        name: "Men Holding Hands: Medium Skin Tone, Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FC",
        groupID: null,
        name: "Men Holding Hands: Medium Skin Tone, Medium-Light Skin Tone"
    }, {
        code: "0x1F46C, 0x1F3FD",
        groupID: null,
        name: "Men Holding Hands: Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FE",
        groupID: null,
        name: "Men Holding Hands: Medium Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FD, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FF",
        groupID: null,
        name: "Men Holding Hands: Medium Skin Tone, Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FB",
        groupID: null,
        name: "Men Holding Hands: Medium-Dark Skin Tone, Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FC",
        groupID: null,
        name: "Men Holding Hands: Medium-Dark Skin Tone, Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FD",
        groupID: null,
        name: "Men Holding Hands: Medium-Dark Skin Tone, Medium Skin Tone"
    }, {
        code: "0x1F46C, 0x1F3FE",
        groupID: null,
        name: "Men Holding Hands: Medium-Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FE, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FF",
        groupID: null,
        name: "Men Holding Hands: Medium-Dark Skin Tone, Dark Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FB",
        groupID: null,
        name: "Men Holding Hands: Dark Skin Tone, Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FC",
        groupID: null,
        name: "Men Holding Hands: Dark Skin Tone, Medium-Light Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FD",
        groupID: null,
        name: "Men Holding Hands: Dark Skin Tone, Medium Skin Tone"
    }, {
        code: "0x1F468, 0x1F3FF, 0x200D, 0x1F91D, 0x200D, 0x1F468, 0x1F3FE",
        groupID: null,
        name: "Men Holding Hands: Dark Skin Tone, Medium-Dark Skin Tone"
    }, {
        code: "0x1F46C, 0x1F3FF",
        groupID: null,
        name: "Men Holding Hands: Dark Skin Tone"
    }, {
        code: "0x1F48F",
        groupID: null,
        name: "Kiss"
    }, {
        code: "0x1F469, 0x200D, 0x2764, 0x200D, 0x1F48B, 0x200D, 0x1F468",
        groupID: null,
        name: "Kiss: Woman, Man"
    }, {
        code: "0x1F468, 0x200D, 0x2764, 0x200D, 0x1F48B, 0x200D, 0x1F468",
        groupID: null,
        name: "Kiss: Man, Man"
    }, {
        code: "0x1F469, 0x200D, 0x2764, 0x200D, 0x1F48B, 0x200D, 0x1F469",
        groupID: null,
        name: "Kiss: Woman, Woman"
    }, {
        code: "0x1F491",
        groupID: null,
        name: "Couple With Heart"
    }, {
        code: "0x1F469, 0x200D, 0x2764, 0x200D, 0x1F468",
        groupID: null,
        name: "Couple With Heart: Woman, Man"
    }, {
        code: "0x1F468, 0x200D, 0x2764, 0x200D, 0x1F468",
        groupID: null,
        name: "Couple With Heart: Man, Man"
    }, {
        code: "0x1F469, 0x200D, 0x2764, 0x200D, 0x1F469",
        groupID: null,
        name: "Couple With Heart: Woman, Woman"
    }, {
        code: "0x1F46A",
        groupID: null,
        name: "Fanily"
    }, {
        code: "0x1F468, 0x200D, 0x1F469, 0x200D, 0x1F466",
        groupID: null,
        name: "Family: Man, Woman, Boy"
    }, {
        code: "0x1F468, 0x200D, 0x1F469, 0x200D, 0x1F467",
        groupID: null,
        name: "Family: Man, Woman, Girl"
    }, {
        code: "0x1F468, 0x200D, 0x1F469, 0x200D, 0x1F467, 0x200D, 0x1F466",
        groupID: null,
        name: "Family: Man, Woman, Girl, Boy"
    }, {
        code: "0x1F468, 0x200D, 0x1F469, 0x200D, 0x1F466, 0x200D, 0x1F466",
        groupID: null,
        name: "Family: Man, Woman, Boy, Boy"
    }, {
        code: "0x1F468, 0x200D, 0x1F469, 0x200D, 0x1F467, 0x200D, 0x1F467",
        groupID: null,
        name: "Family: Man, Woman, Girl, Girl"
    }, {
        code: "0x1F468, 0x200D, 0x1F468, 0x200D, 0x1F466",
        groupID: null,
        name: "Family: Man, Man, Boy"
    }, {
        code: "0x1F468, 0x200D, 0x1F468, 0x200D, 0x1F467",
        groupID: null,
        name: "Family: Man, Man, Girl"
    }, {
        code: "0x1F468, 0x200D, 0x1F468, 0x200D, 0x1F467, 0x200D, 0x1F466",
        groupID: null,
        name: "Family: Man, Man, Girl, Boy"
    }, {
        code: "0x1F468, 0x200D, 0x1F468, 0x200D, 0x1F466, 0x200D, 0x1F466",
        groupID: null,
        name: "Family: Man, Man, Boy, Boy"
    }, {
        code: "0x1F468, 0x200D, 0x1F468, 0x200D, 0x1F467, 0x200D, 0x1F467",
        groupID: null,
        name: "Family: Man, Man, Girl, Girl"
    }, {
        code: "0x1F469, 0x200D, 0x1F469, 0x200D, 0x1F466",
        groupID: null,
        name: "Family: Woman, Woman, Boy"
    }, {
        code: "0x1F469, 0x200D, 0x1F469, 0x200D, 0x1F467",
        groupID: null,
        name: "Family: Woman, Woman, Girl"
    }, {
        code: "0x1F469, 0x200D, 0x1F469, 0x200D, 0x1F467, 0x200D, 0x1F466",
        groupID: null,
        name: "Family: Woman, Woman, Girl, Boy"
    }, {
        code: "0x1F469, 0x200D, 0x1F469, 0x200D, 0x1F466, 0x200D, 0x1F466",
        groupID: null,
        name: "Family: Woman, Woman, Boy, Boy"
    }, {
        code: "0x1F469, 0x200D, 0x1F469, 0x200D, 0x1F467, 0x200D, 0x1F467",
        groupID: null,
        name: "Family: Woman, Woman, Girl, Girl"
    }, {
        code: "0x1F468, 0x200D, 0x1F466",
        groupID: null,
        name: "Family: Man, Boy"
    }, {
        code: "0x1F468, 0x200D, 0x1F466, 0x200D, 0x1F466",
        groupID: null,
        name: "Family: Man, Boy, Boy"
    }, {
        code: "0x1F468, 0x200D, 0x1F467",
        groupID: null,
        name: "Family: Man, Girl"
    }, {
        code: "0x1F468, 0x200D, 0x1F467, 0x200D, 0x1F466",
        groupID: null,
        name: "Family: Man, Girl, Boy"
    }, {
        code: "0x1F468, 0x200D, 0x1F467, 0x200D, 0x1F467",
        groupID: null,
        name: "Family: Man, Girl, Girl"
    }, {
        code: "0x1F469, 0x200D, 0x1F466",
        groupID: null,
        name: "Family: Woman, Boy"
    }, {
        code: "0x1F469, 0x200D, 0x1F466, 0x200D, 0x1F466",
        groupID: null,
        name: "Family: Woman, Boy, Boy"
    }, {
        code: "0x1F469, 0x200D, 0x1F467",
        groupID: null,
        name: "Family: Woman, Girl"
    }, {
        code: "0x1F469, 0x200D, 0x1F467, 0x200D, 0x1F466",
        groupID: null,
        name: "Family: Woman, Girl, Boy"
    }, {
        code: "0x1F469, 0x200D, 0x1F467, 0x200D, 0x1F467",
        groupID: null,
        name: "Family: Woman, Girl, Girl"
    }, {
        code: "0x1F5E3",
        groupID: null,
        name: "Speaking Head"
    }, {
        code: "0x1F464",
        groupID: null,
        name: "Bust in Silhouette"
    }, {
        code: "0x1F465",
        groupID: null,
        name: "Busts in Silhouette"
    }, {
        code: "0x1F463",
        groupID: null,
        name: "Footprints"
    }, {
        code: "0x1F3FB",
        groupID: null,
        name: "Light Skin Tone"
    }, {
        code: "0x1F3FC",
        groupID: null,
        name: "Medium-Light Skin Tone"
    }, {
        code: "0x1F3FD",
        groupID: null,
        name: "Medium Skin Tone"
    }, {
        code: "0x1F3FE",
        groupID: null,
        name: "Medium-Dark Skin Tone"
    }, {
        code: "0x1F3FF",
        groupID: null,
        name: "Dark Skin Tone"
    }, {
        code: "0x1F9B0",
        groupID: null,
        name: "Red Hair"
    }, {
        code: "0x1F9B1",
        groupID: null,
        name: "Curly Hair"
    }, {
        code: "0x1F9B3",
        groupID: null,
        name: "White Hair"
    }, {
        code: "0x1F9B2",
        groupID: null,
        name: "Bald"
    }, {
        code: "0x1F435",
        groupID: null,
        name: "Monkey Face"
    }, {
        code: "0x1F412",
        groupID: null,
        name: "Monkey"
    }, {
        code: "0x1F98D",
        groupID: null,
        name: "Gorilla"
    }, {
        code: "0x1F9A7",
        groupID: null,
        name: "Orangutan"
    }, {
        code: "0x1F436",
        groupID: null,
        name: "Dog Face"
    }, {
        code: "0x1F415",
        groupID: null,
        name: "Dog"
    }, {
        code: "0x1F9AE",
        groupID: null,
        name: "Guide Dog"
    }, {
        code: "0x1F415, 0x200D, 0x1F9BA",
        groupID: null,
        name: "Service Dog"
    }, {
        code: "0x1F429",
        groupID: null,
        name: "Poodle"
    }, {
        code: "0x1F43A",
        groupID: null,
        name: "Wolf"
    }, {
        code: "0x1F98A",
        groupID: null,
        name: "Fox"
    }, {
        code: "0x1F99D",
        groupID: null,
        name: "Raccoon"
    }, {
        code: "0x1F431",
        groupID: null,
        name: "Cat Face"
    }, {
        code: "0x1F408",
        groupID: null,
        name: "Cat"
    }, {
        code: "0x1F981",
        groupID: null,
        name: "Lion"
    }, {
        code: "0x1F42F",
        groupID: null,
        name: "Tiger Face"
    }, {
        code: "0x1F405",
        groupID: null,
        name: "Tiger"
    }, {
        code: "0x1F406",
        groupID: null,
        name: "Leopard"
    }, {
        code: "0x1F434",
        groupID: null,
        name: "Horse Face"
    }, {
        code: "0x1F40E",
        groupID: null,
        name: "Horse"
    }, {
        code: "0x1F984",
        groupID: null,
        name: "Unicorn"
    }, {
        code: "0x1F993",
        groupID: null,
        name: "Zebra"
    }, {
        code: "0x1F98C",
        groupID: null,
        name: "Deer"
    }, {
        code: "0x1F42E",
        groupID: null,
        name: "Cow Face"
    }, {
        code: "0x1F402",
        groupID: null,
        name: "Ox"
    }, {
        code: "0x1F403",
        groupID: null,
        name: "Water Buffalo"
    }, {
        code: "0x1F404",
        groupID: null,
        name: "Cow"
    }, {
        code: "0x1F437",
        groupID: null,
        name: "Pig Face"
    }, {
        code: "0x1F416",
        groupID: null,
        name: "Pig"
    }, {
        code: "0x1F417",
        groupID: null,
        name: "Boar"
    }, {
        code: "0x1F43D",
        groupID: null,
        name: "Pig Nose"
    }, {
        code: "0x1F40F",
        groupID: null,
        name: "Ram"
    }, {
        code: "0x1F411",
        groupID: null,
        name: "Ewe"
    }, {
        code: "0x1F410",
        groupID: null,
        name: "Goat"
    }, {
        code: "0x1F42A",
        groupID: null,
        name: "Camel"
    }, {
        code: "0x1F42B",
        groupID: null,
        name: "Two-Hump Camel"
    }, {
        code: "0x1F999",
        groupID: null,
        name: "Llama"
    }, {
        code: "0x1F992",
        groupID: null,
        name: "Giraffe"
    }, {
        code: "0x1F418",
        groupID: null,
        name: "Elephant"
    }, {
        code: "0x1F98F",
        groupID: null,
        name: "Rhinoceros"
    }, {
        code: "0x1F99B",
        groupID: null,
        name: "Hippopotamus"
    }, {
        code: "0x1F42D",
        groupID: null,
        name: "Mouse Face"
    }, {
        code: "0x1F401",
        groupID: null,
        name: "Mouse"
    }, {
        code: "0x1F400",
        groupID: null,
        name: "Rat"
    }, {
        code: "0x1F439",
        groupID: null,
        name: "Hamster"
    }, {
        code: "0x1F430",
        groupID: null,
        name: "Rabbit Face"
    }, {
        code: "0x1F407",
        groupID: null,
        name: "Rabbit"
    }, {
        code: "0x1F43F",
        groupID: null,
        name: "Chipmunk"
    }, {
        code: "0x1F994",
        groupID: null,
        name: "Hedgehog"
    }, {
        code: "0x1F987",
        groupID: null,
        name: "Bat"
    }, {
        code: "0x1F43B",
        groupID: null,
        name: "Bear"
    }, {
        code: "0x1F428",
        groupID: null,
        name: "Koala"
    }, {
        code: "0x1F43C",
        groupID: null,
        name: "Panda"
    }, {
        code: "0x1F9A5",
        groupID: null,
        name: "Sloth"
    }, {
        code: "0x1F9A6",
        groupID: null,
        name: "Otter"
    }, {
        code: "0x1F9A8",
        groupID: null,
        name: "Skunk"
    }, {
        code: "0x1F998",
        groupID: null,
        name: "Kangaroo"
    }, {
        code: "0x1F9A1",
        groupID: null,
        name: "Badger"
    }, {
        code: "0x1F43E",
        groupID: null,
        name: "Paw Prints"
    }, {
        code: "0x1F983",
        groupID: null,
        name: "Turkey"
    }, {
        code: "0x1F414",
        groupID: null,
        name: "Chicken"
    }, {
        code: "0x1F413",
        groupID: null,
        name: "Rooster"
    }, {
        code: "0x1F423",
        groupID: null,
        name: "Hatching Chick"
    }, {
        code: "0x1F424",
        groupID: null,
        name: "Baby Chick"
    }, {
        code: "0x1F425",
        groupID: null,
        name: "Front-Facing Baby Chick"
    }, {
        code: "0x1F426",
        groupID: null,
        name: "Bird"
    }, {
        code: "0x1F427",
        groupID: null,
        name: "Penguin"
    }, {
        code: "0x1F54A",
        groupID: null,
        name: "Dove"
    }, {
        code: "0x1F985",
        groupID: null,
        name: "Eagle"
    }, {
        code: "0x1F986",
        groupID: null,
        name: "Duck"
    }, {
        code: "0x1F9A2",
        groupID: null,
        name: "Swan"
    }, {
        code: "0x1F989",
        groupID: null,
        name: "Owl"
    }, {
        code: "0x1F9A9",
        groupID: null,
        name: "Flamingo"
    }, {
        code: "0x1F99A",
        groupID: null,
        name: "Peacock"
    }, {
        code: "0x1F99C",
        groupID: null,
        name: "Parrot"
    }, {
        code: "0x1F438",
        groupID: null,
        name: "Frog"
    }, {
        code: "0x1F40A",
        groupID: null,
        name: "Crocodile"
    }, {
        code: "0x1F422",
        groupID: null,
        name: "Turtle"
    }, {
        code: "0x1F98E",
        groupID: null,
        name: "Lizard"
    }, {
        code: "0x1F40D",
        groupID: null,
        name: "Snake"
    }, {
        code: "0x1F432",
        groupID: null,
        name: "Dragon Face"
    }, {
        code: "0x1F409",
        groupID: null,
        name: "Dragon"
    }, {
        code: "0x1F995",
        groupID: null,
        name: "Sauropod"
    }, {
        code: "0x1F996",
        groupID: null,
        name: "T-Rex"
    }, {
        code: "0x1F433",
        groupID: null,
        name: "Spouting Whale"
    }, {
        code: "0x1F40B",
        groupID: null,
        name: "Whale"
    }, {
        code: "0x1F42C",
        groupID: null,
        name: "Dolphin"
    }, {
        code: "0x1F41F",
        groupID: null,
        name: "Fish"
    }, {
        code: "0x1F420",
        groupID: null,
        name: "Tropical Fish"
    }, {
        code: "0x1F421",
        groupID: null,
        name: "Blowfish"
    }, {
        code: "0x1F988",
        groupID: null,
        name: "Shark"
    }, {
        code: "0x1F419",
        groupID: null,
        name: "Octopus"
    }, {
        code: "0x1F41A",
        groupID: null,
        name: "Spiral Shell"
    }, {
        code: "0x1F40C",
        groupID: null,
        name: "Snail"
    }, {
        code: "0x1F98B",
        groupID: null,
        name: "Butterfly"
    }, {
        code: "0x1F41B",
        groupID: null,
        name: "Bug"
    }, {
        code: "0x1F41C",
        groupID: null,
        name: "Ant"
    }, {
        code: "0x1F41D",
        groupID: null,
        name: "Honeybee"
    }, {
        code: "0x1F41E",
        groupID: null,
        name: "Lady Beetle"
    }, {
        code: "0x1F997",
        groupID: null,
        name: "Cricket"
    }, {
        code: "0x1F577",
        groupID: null,
        name: "Spider"
    }, {
        code: "0x1F578",
        groupID: null,
        name: "Spider Web"
    }, {
        code: "0x1F982",
        groupID: null,
        name: "Scorpion"
    }, {
        code: "0x1F99F",
        groupID: null,
        name: "Mosquito"
    }, {
        code: "0x1F9A0",
        groupID: null,
        name: "Microbe"
    }, {
        code: "0x1F490",
        groupID: null,
        name: "Bouquet"
    }, {
        code: "0x1F338",
        groupID: null,
        name: "Cherry Blossom"
    }, {
        code: "0x1F4AE",
        groupID: null,
        name: "White Flower"
    }, {
        code: "0x1F3F5",
        groupID: null,
        name: "Rosette"
    }, {
        code: "0x1F339",
        groupID: null,
        name: "Rose"
    }, {
        code: "0x1F940",
        groupID: null,
        name: "Wilted Flower"
    }, {
        code: "0x1F33A",
        groupID: null,
        name: "Hibiscus"
    }, {
        code: "0x1F33B",
        groupID: null,
        name: "Sunflower"
    }, {
        code: "0x1F33C",
        groupID: null,
        name: "Blossom"
    }, {
        code: "0x1F337",
        groupID: null,
        name: "Tulip"
    }, {
        code: "0x1F331",
        groupID: null,
        name: "Seedling"
    }, {
        code: "0x1F332",
        groupID: null,
        name: "Evergreen Tree"
    }, {
        code: "0x1F333",
        groupID: null,
        name: "Deciduous Tree"
    }, {
        code: "0x1F334",
        groupID: null,
        name: "Palm Tree"
    }, {
        code: "0x1F335",
        groupID: null,
        name: "Cactus"
    }, {
        code: "0x1F33E",
        groupID: null,
        name: "Sheaf of Rice"
    }, {
        code: "0x1F33F",
        groupID: null,
        name: "Herb"
    }, {
        code: "0x2618",
        groupID: null,
        name: "Shamrock"
    }, {
        code: "0x1F340",
        groupID: null,
        name: "Four Leaf Clover"
    }, {
        code: "0x1F341",
        groupID: null,
        name: "Maple Leaf"
    }, {
        code: "0x1F342",
        groupID: null,
        name: "Fallen Leaf"
    }, {
        code: "0x1F343",
        groupID: null,
        name: "Leaf Fluttering in Wind"
    }, {
        code: "0x1F347",
        groupID: null,
        name: "Grapes"
    }, {
        code: "0x1F348",
        groupID: null,
        name: "Melon"
    }, {
        code: "0x1F349",
        groupID: null,
        name: "Watermelon"
    }, {
        code: "0x1F34A",
        groupID: null,
        name: "Tangerine"
    }, {
        code: "0x1F34B",
        groupID: null,
        name: "Lemon"
    }, {
        code: "0x1F34C",
        groupID: null,
        name: "Banana"
    }, {
        code: "0x1F34D",
        groupID: null,
        name: "Pineapple"
    }, {
        code: "0x1F96D",
        groupID: null,
        name: "Mango"
    }, {
        code: "0x1F34E",
        groupID: null,
        name: "Red Apple"
    }, {
        code: "0x1F34F",
        groupID: null,
        name: "Green Apple"
    }, {
        code: "0x1F350",
        groupID: null,
        name: "Pear"
    }, {
        code: "0x1F351",
        groupID: null,
        name: "Peach"
    }, {
        code: "0x1F352",
        groupID: null,
        name: "Cherries"
    }, {
        code: "0x1F353",
        groupID: null,
        name: "Strawberry"
    }, {
        code: "0x1F95D",
        groupID: null,
        name: "Kiwi Fruit"
    }, {
        code: "0x1F345",
        groupID: null,
        name: "Tomato"
    }, {
        code: "0x1F965",
        groupID: null,
        name: "Coconut"
    }, {
        code: "0x1F951",
        groupID: null,
        name: "Avocado"
    }, {
        code: "0x1F346",
        groupID: null,
        name: "Eggplant"
    }, {
        code: "0x1F954",
        groupID: null,
        name: "Potato"
    }, {
        code: "0x1F955",
        groupID: null,
        name: "Carrot"
    }, {
        code: "0x1F33D",
        groupID: null,
        name: "Ear of Corn"
    }, {
        code: "0x1F336",
        groupID: null,
        name: "Hot Pepper"
    }, {
        code: "0x1F952",
        groupID: null,
        name: "Cucumber"
    }, {
        code: "0x1F96C",
        groupID: null,
        name: "Leafy Green"
    }, {
        code: "0x1F966",
        groupID: null,
        name: "Broccoli"
    }, {
        code: "0x1F9C4",
        groupID: null,
        name: "Garlic"
    }, {
        code: "0x1F9C5",
        groupID: null,
        name: "Onion"
    }, {
        code: "0x1F344",
        groupID: null,
        name: "Mushroom"
    }, {
        code: "0x1F95C",
        groupID: null,
        name: "Peanuts"
    }, {
        code: "0x1F330",
        groupID: null,
        name: "Chestnut"
    }, {
        code: "0x1F35E",
        groupID: null,
        name: "Bread"
    }, {
        code: "0x1F950",
        groupID: null,
        name: "Croissant"
    }, {
        code: "0x1F956",
        groupID: null,
        name: "Baguette Bread"
    }, {
        code: "0x1F968",
        groupID: null,
        name: "Pretzel"
    }, {
        code: "0x1F96F",
        groupID: null,
        name: "Bagel"
    }, {
        code: "0x1F95E",
        groupID: null,
        name: "Pancakes"
    }, {
        code: "0x1F9C7",
        groupID: null,
        name: "Waffle"
    }, {
        code: "0x1F9C0",
        groupID: null,
        name: "Cheese Wedge"
    }, {
        code: "0x1F356",
        groupID: null,
        name: "Meat on Bone"
    }, {
        code: "0x1F357",
        groupID: null,
        name: "Poultry Leg"
    }, {
        code: "0x1F969",
        groupID: null,
        name: "Cut of Meat"
    }, {
        code: "0x1F953",
        groupID: null,
        name: "Bacon"
    }, {
        code: "0x1F354",
        groupID: null,
        name: "Hamburger"
    }, {
        code: "0x1F35F",
        groupID: null,
        name: "French Fries"
    }, {
        code: "0x1F355",
        groupID: null,
        name: "Pizza"
    }, {
        code: "0x1F32D",
        groupID: null,
        name: "Hot Dog"
    }, {
        code: "0x1F96A",
        groupID: null,
        name: "Sandwich"
    }, {
        code: "0x1F32E",
        groupID: null,
        name: "Taco"
    }, {
        code: "0x1F32F",
        groupID: null,
        name: "Burrito"
    }, {
        code: "0x1F959",
        groupID: null,
        name: "Stuffed Flatbread"
    }, {
        code: "0x1F9C6",
        groupID: null,
        name: "Falafel"
    }, {
        code: "0x1F95A",
        groupID: null,
        name: "Egg"
    }, {
        code: "0x1F373",
        groupID: null,
        name: "Cooking"
    }, {
        code: "0x1F958",
        groupID: null,
        name: "Shallow Pan of Food"
    }, {
        code: "0x1F372",
        groupID: null,
        name: "Pot of Food"
    }, {
        code: "0x1F963",
        groupID: null,
        name: "Bowl With Spoon"
    }, {
        code: "0x1F957",
        groupID: null,
        name: "Green Salad"
    }, {
        code: "0x1F37F",
        groupID: null,
        name: "Popcorn"
    }, {
        code: "0x1F9C8",
        groupID: null,
        name: "Butter"
    }, {
        code: "0x1F9C2",
        groupID: null,
        name: "Salt"
    }, {
        code: "0x1F96B",
        groupID: null,
        name: "Canned Food"
    }, {
        code: "0x1F371",
        groupID: null,
        name: "Bento Box"
    }, {
        code: "0x1F358",
        groupID: null,
        name: "Rice Cracker"
    }, {
        code: "0x1F359",
        groupID: null,
        name: "Rice Ball"
    }, {
        code: "0x1F35A",
        groupID: null,
        name: "Cooked Rice"
    }, {
        code: "0x1F35B",
        groupID: null,
        name: "Curry Rice"
    }, {
        code: "0x1F35C",
        groupID: null,
        name: "Steaming Bowl"
    }, {
        code: "0x1F35D",
        groupID: null,
        name: "Spaghetti"
    }, {
        code: "0x1F360",
        groupID: null,
        name: "Roasted Sweet Potato"
    }, {
        code: "0x1F362",
        groupID: null,
        name: "Oden"
    }, {
        code: "0x1F363",
        groupID: null,
        name: "Sushi"
    }, {
        code: "0x1F364",
        groupID: null,
        name: "Fried Shrimp"
    }, {
        code: "0x1F365",
        groupID: null,
        name: "Fish Cake With Swirl"
    }, {
        code: "0x1F96E",
        groupID: null,
        name: "Moon Cake"
    }, {
        code: "0x1F361",
        groupID: null,
        name: "Dango"
    }, {
        code: "0x1F95F",
        groupID: null,
        name: "Dumpling"
    }, {
        code: "0x1F960",
        groupID: null,
        name: "Fortune Cookie"
    }, {
        code: "0x1F961",
        groupID: null,
        name: "Takeout Box"
    }, {
        code: "0x1F980",
        groupID: null,
        name: "Crab"
    }, {
        code: "0x1F99E",
        groupID: null,
        name: "Lobster"
    }, {
        code: "0x1F990",
        groupID: null,
        name: "Shrimp"
    }, {
        code: "0x1F991",
        groupID: null,
        name: "Squid"
    }, {
        code: "0x1F93C, 0x1F3FB",
        groupID: null,
        name: "Wrestlers, Type-1-2"
    }, {
        code: "0x1F93C, 0x1F3FC",
        groupID: null,
        name: "Wrestlers, Type-3"
    }, {
        code: "0x1F9AA",
        groupID: null,
        name: "Oyster"
    }, {
        code: "0x1F93C, 0x1F3FD",
        groupID: null,
        name: "Wrestlers, Type-4"
    }, {
        code: "0x1F366",
        groupID: null,
        name: "Soft Ice Cream"
    }, {
        code: "0x1F367",
        groupID: null,
        name: "Shaved Ice"
    }, {
        code: "0x1F93C, 0x1F3FE",
        groupID: null,
        name: "Wrestlers, Type-5"
    }, {
        code: "0x1F368",
        groupID: null,
        name: "Ice Cream"
    }, {
        code: "0x1F93C, 0x1F3FF",
        groupID: null,
        name: "Wrestlers, Type-6"
    }, {
        code: "0x1F369",
        groupID: null,
        name: "Doughnut"
    }, {
        code: "0x1F36A",
        groupID: null,
        name: "Cookie"
    }, {
        code: "0x1F93C, 0x1F3FB, 0x200D, 0x2642",
        groupID: null,
        name: "Men Wrestling, Type-1-2"
    }, {
        code: "0x1F382",
        groupID: null,
        name: "Birthday Cake"
    }, {
        code: "0x1F370",
        groupID: null,
        name: "Shortcake"
    }, {
        code: "0x1F9C1",
        groupID: null,
        name: "Cupcake"
    }, {
        code: "0x1F93C, 0x1F3FC, 0x200D, 0x2642",
        groupID: null,
        name: "Men Wrestling, Type-3"
    }, {
        code: "0x1F967",
        groupID: null,
        name: "Pie"
    }, {
        code: "0x1F36B",
        groupID: null,
        name: "Chocolate Bar"
    }, {
        code: "0x1F93C, 0x1F3FD, 0x200D, 0x2642",
        groupID: null,
        name: "Men Wrestling, Type-4"
    }, {
        code: "0x1F36C",
        groupID: null,
        name: "Candy"
    }, {
        code: "0x1F36D",
        groupID: null,
        name: "Lollipop"
    }, {
        code: "0x1F93C, 0x1F3FE, 0x200D, 0x2642",
        groupID: null,
        name: "Men Wrestling, Type-5"
    }, {
        code: "0x1F36E",
        groupID: null,
        name: "Custard"
    }, {
        code: "0x1F93C, 0x1F3FF, 0x200D, 0x2642",
        groupID: null,
        name: "Men Wrestling, Type-6"
    }, {
        code: "0x1F36F",
        groupID: null,
        name: "Honey Pot"
    }, {
        code: "0x1F37C",
        groupID: null,
        name: "Baby Bottle"
    }, {
        code: "0x1F95B",
        groupID: null,
        name: "Glass of Milk"
    }, {
        code: "0x2615",
        groupID: null,
        name: "Hot Beverage"
    }, {
        code: "0x1F375",
        groupID: null,
        name: "Teacup Without Handle"
    }, {
        code: "0x1F93C, 0x1F3FB, 0x200D, 0x2640",
        groupID: null,
        name: "Women Wrestling, Type-1-2"
    }, {
        code: "0x1F376",
        groupID: null,
        name: "Sake"
    }, {
        code: "0x1F93C, 0x1F3FC, 0x200D, 0x2640",
        groupID: null,
        name: "Women Wrestling, Type-3"
    }, {
        code: "0x1F37E",
        groupID: null,
        name: "Bottle With Popping Cork"
    }, {
        code: "0x1F377",
        groupID: null,
        name: "Wine Glass"
    }, {
        code: "0x1F378",
        groupID: null,
        name: "Cocktail Glass"
    }, {
        code: "0x1F93C, 0x1F3FD, 0x200D, 0x2640",
        groupID: null,
        name: "Women Wrestling, Type-4"
    }, {
        code: "0x1F379",
        groupID: null,
        name: "Tropical Drink"
    }, {
        code: "0x1F37A",
        groupID: null,
        name: "Beer Mug"
    }, {
        code: "0x1F93C, 0x1F3FE, 0x200D, 0x2640",
        groupID: null,
        name: "Women Wrestling, Type-5"
    }, {
        code: "0x1F37B",
        groupID: null,
        name: "Clinking Beer Mugs"
    }, {
        code: "0x1F93C, 0x1F3FF, 0x200D, 0x2640",
        groupID: null,
        name: "Women Wrestling, Type-6"
    }, {
        code: "0x1F942",
        groupID: null,
        name: "Clinking Glasses"
    }, {
        code: "0x1F943",
        groupID: null,
        name: "Tumbler Glass"
    }, {
        code: "0x1F964",
        groupID: null,
        name: "Cup With Straw"
    }, {
        code: "0x1F9C3",
        groupID: null,
        name: "Beverage Box"
    }, {
        code: "0x1F9C9",
        groupID: null,
        name: "Mate"
    }, {
        code: "0x1F9CA",
        groupID: null,
        name: "Ice"
    }, {
        code: "0x1F962",
        groupID: null,
        name: "Chopsticks"
    }, {
        code: "0x1F37D",
        groupID: null,
        name: "Fork and Knife With Plate"
    }, {
        code: "0x1F374",
        groupID: null,
        name: "Fork and Knife"
    }, {
        code: "0x1F944",
        groupID: null,
        name: "Spoon"
    }, {
        code: "0x1F52A",
        groupID: null,
        name: "Kitchen Knife"
    }, {
        code: "0x1F3FA",
        groupID: null,
        name: "Amphora"
    }, {
        code: "0x1F30D",
        groupID: null,
        name: "Globe Showing Europe-Africa"
    }, {
        code: "0x1F30E",
        groupID: null,
        name: "Globe Showing Americas"
    }, {
        code: "0x1F30F",
        groupID: null,
        name: "Globe Showing Asia-Australia"
    }, {
        code: "0x1F310",
        groupID: null,
        name: "Globe With Meridians"
    }, {
        code: "0x1F5FA",
        groupID: null,
        name: "World Map"
    }, {
        code: "0x1F5FE",
        groupID: null,
        name: "Map of Japan"
    }, {
        code: "0x1F9ED",
        groupID: null,
        name: "Compass"
    }, {
        code: "0x1F3D4",
        groupID: null,
        name: "Snow-Capped Mountain"
    }, {
        code: "0x26F0",
        groupID: null,
        name: "Mountain"
    }, {
        code: "0x1F30B",
        groupID: null,
        name: "Volcano"
    }, {
        code: "0x1F5FB",
        groupID: null,
        name: "Mount Fuji"
    }, {
        code: "0x1F3D5",
        groupID: null,
        name: "Camping"
    }, {
        code: "0x1F3D6",
        groupID: null,
        name: "Beach With Umbrella"
    }, {
        code: "0x1F3DC",
        groupID: null,
        name: "Desert"
    }, {
        code: "0x1F3DD",
        groupID: null,
        name: "Desert Island"
    }, {
        code: "0x1F3DE",
        groupID: null,
        name: "National Park"
    }, {
        code: "0x1F3DF",
        groupID: null,
        name: "Stadium"
    }, {
        code: "0x1F3DB",
        groupID: null,
        name: "Classical Building"
    }, {
        code: "0x1F3D7",
        groupID: null,
        name: "Building Construction"
    }, {
        code: "0x1F9F1",
        groupID: null,
        name: "Brick"
    }, {
        code: "0x1F3D8",
        groupID: null,
        name: "Houses"
    }, {
        code: "0x1F3DA",
        groupID: null,
        name: "Derelict House"
    }, {
        code: "0x1F3E0",
        groupID: null,
        name: "House"
    }, {
        code: "0x1F3E1",
        groupID: null,
        name: "House With Garden"
    }, {
        code: "0x1F3E2",
        groupID: null,
        name: "Office Building"
    }, {
        code: "0x1F3E3",
        groupID: null,
        name: "Japanese Post Office"
    }, {
        code: "0x1F3E4",
        groupID: null,
        name: "Post Office"
    }, {
        code: "0x1F3E5",
        groupID: null,
        name: "Hospital"
    }, {
        code: "0x1F3E6",
        groupID: null,
        name: "Bank"
    }, {
        code: "0x1F3E8",
        groupID: null,
        name: "Hotel"
    }, {
        code: "0x1F3E9",
        groupID: null,
        name: "Love Hotel"
    }, {
        code: "0x1F3EA",
        groupID: null,
        name: "Convenience Store"
    }, {
        code: "0x1F3EB",
        groupID: null,
        name: "School"
    }, {
        code: "0x1F3EC",
        groupID: null,
        name: "Department Store"
    }, {
        code: "0x1F3ED",
        groupID: null,
        name: "Factory"
    }, {
        code: "0x1F3EF",
        groupID: null,
        name: "Japanese Castle"
    }, {
        code: "0x1F3F0",
        groupID: null,
        name: "Castle"
    }, {
        code: "0x1F492",
        groupID: null,
        name: "Wedding"
    }, {
        code: "0x1F5FC",
        groupID: null,
        name: "Tokyo Tower"
    }, {
        code: "0x1F5FD",
        groupID: null,
        name: "Statue of Liberty"
    }, {
        code: "0x26EA",
        groupID: null,
        name: "Church"
    }, {
        code: "0x1F54C",
        groupID: null,
        name: "Mosque"
    }, {
        code: "0x1F6D5",
        groupID: null,
        name: "Hindu Temple"
    }, {
        code: "0x1F54D",
        groupID: null,
        name: "Synagogue"
    }, {
        code: "0x26E9",
        groupID: null,
        name: "Shinto Shrine"
    }, {
        code: "0x1F54B",
        groupID: null,
        name: "Kaaba"
    }, {
        code: "0x26F2",
        groupID: null,
        name: "Fountain"
    }, {
        code: "0x26FA",
        groupID: null,
        name: "Tent"
    }, {
        code: "0x1F301",
        groupID: null,
        name: "Foggy"
    }, {
        code: "0x1F303",
        groupID: null,
        name: "Night With Stars"
    }, {
        code: "0x1F3D9",
        groupID: null,
        name: "Cityscape"
    }, {
        code: "0x1F304",
        groupID: null,
        name: "Sunrise Over Mountains"
    }, {
        code: "0x1F305",
        groupID: null,
        name: "Sunrise"
    }, {
        code: "0x1F306",
        groupID: null,
        name: "Cityscape at Dusk"
    }, {
        code: "0x1F307",
        groupID: null,
        name: "Sunset"
    }, {
        code: "0x1F309",
        groupID: null,
        name: "Bridge at Night"
    }, {
        code: "0x2668",
        groupID: null,
        name: "Hot Springs"
    }, {
        code: "0x1F3A0",
        groupID: null,
        name: "Carousel Horse"
    }, {
        code: "0x1F3A1",
        groupID: null,
        name: "Ferris Wheel"
    }, {
        code: "0x1F3A2",
        groupID: null,
        name: "Roller Coaster"
    }, {
        code: "0x1F488",
        groupID: null,
        name: "Barber Pole"
    }, {
        code: "0x1F3AA",
        groupID: null,
        name: "Circus Tent"
    }, {
        code: "0x1F682",
        groupID: null,
        name: "Locomotive"
    }, {
        code: "0x1F683",
        groupID: null,
        name: "Railway Car"
    }, {
        code: "0x1F684",
        groupID: null,
        name: "High-Speed Train"
    }, {
        code: "0x1F685",
        groupID: null,
        name: "Bullet Train"
    }, {
        code: "0x1F686",
        groupID: null,
        name: "Train"
    }, {
        code: "0x1F687",
        groupID: null,
        name: "Metro"
    }, {
        code: "0x1F688",
        groupID: null,
        name: "Light Rail"
    }, {
        code: "0x1F689",
        groupID: null,
        name: "Station"
    }, {
        code: "0x1F68A",
        groupID: null,
        name: "Tram"
    }, {
        code: "0x1F69D",
        groupID: null,
        name: "Monorail"
    }, {
        code: "0x1F69E",
        groupID: null,
        name: "Mountain Railway"
    }, {
        code: "0x1F68B",
        groupID: null,
        name: "Tram Car"
    }, {
        code: "0x1F68C",
        groupID: null,
        name: "Bus"
    }, {
        code: "0x1F68D",
        groupID: null,
        name: "Oncoming Bus"
    }, {
        code: "0x1F68E",
        groupID: null,
        name: "Trolleybus"
    }, {
        code: "0x1F690",
        groupID: null,
        name: "Minibus"
    }, {
        code: "0x1F691",
        groupID: null,
        name: "Ambulance"
    }, {
        code: "0x1F692",
        groupID: null,
        name: "Fire Engine"
    }, {
        code: "0x1F693",
        groupID: null,
        name: "Police Car"
    }, {
        code: "0x1F694",
        groupID: null,
        name: "Oncoming Police Car"
    }, {
        code: "0x1F695",
        groupID: null,
        name: "Taxi"
    }, {
        code: "0x1F696",
        groupID: null,
        name: "Oncoming Taxi"
    }, {
        code: "0x1F697",
        groupID: null,
        name: "Automobile"
    }, {
        code: "0x1F698",
        groupID: null,
        name: "Oncoming Automobile"
    }, {
        code: "0x1F699",
        groupID: null,
        name: "Sport Utility Vehicle"
    }, {
        code: "0x1F69A",
        groupID: null,
        name: "Delivery Truck"
    }, {
        code: "0x1F69B",
        groupID: null,
        name: "Articulated Lorry"
    }, {
        code: "0x1F69C",
        groupID: null,
        name: "Tractor"
    }, {
        code: "0x1F3CE",
        groupID: null,
        name: "Racing Car"
    }, {
        code: "0x1F3CD",
        groupID: null,
        name: "Motorcycle"
    }, {
        code: "0x1F6F5",
        groupID: null,
        name: "Motor Scooter"
    }, {
        code: "0x1F9BD",
        groupID: null,
        name: "Manual Wheelchair"
    }, {
        code: "0x1F9BC",
        groupID: null,
        name: "Motorized Wheelchair"
    }, {
        code: "0x1F6FA",
        groupID: null,
        name: "Auto Rickshaw"
    }, {
        code: "0x1F6B2",
        groupID: null,
        name: "Bicycle"
    }, {
        code: "0x1F6F4",
        groupID: null,
        name: "Kick Scooter"
    }, {
        code: "0x1F6F9",
        groupID: null,
        name: "Skateboard"
    }, {
        code: "0x1F68F",
        groupID: null,
        name: "Bus Stop"
    }, {
        code: "0x1F6E3",
        groupID: null,
        name: "Motorway"
    }, {
        code: "0x1F6E4",
        groupID: null,
        name: "Railway Track"
    }, {
        code: "0x1F6E2",
        groupID: null,
        name: "Oil Drum"
    }, {
        code: "0x26FD",
        groupID: null,
        name: "Fuel Pump"
    }, {
        code: "0x1F6A8",
        groupID: null,
        name: "Police Car Light"
    }, {
        code: "0x1F6A5",
        groupID: null,
        name: "Horizontal Traffic Light"
    }, {
        code: "0x1F6A6",
        groupID: null,
        name: "Vertical Traffic Light"
    }, {
        code: "0x1F6D1",
        groupID: null,
        name: "Stop Sign"
    }, {
        code: "0x1F6A7",
        groupID: null,
        name: "Construction"
    }, {
        code: "0x2693",
        groupID: null,
        name: "Anchor"
    }, {
        code: "0x26F5",
        groupID: null,
        name: "Sailboat"
    }, {
        code: "0x1F6F6",
        groupID: null,
        name: "Canoe"
    }, {
        code: "0x1F6A4",
        groupID: null,
        name: "Speedboat"
    }, {
        code: "0x1F6F3",
        groupID: null,
        name: "Passenger Ship"
    }, {
        code: "0x26F4",
        groupID: null,
        name: "Ferry"
    }, {
        code: "0x1F6E5",
        groupID: null,
        name: "Motor Boat"
    }, {
        code: "0x1F6A2",
        groupID: null,
        name: "Ship"
    }, {
        code: "0x2708",
        groupID: null,
        name: "Airplane"
    }, {
        code: "0x1F6E9",
        groupID: null,
        name: "Small Airplane"
    }, {
        code: "0x1F6EB",
        groupID: null,
        name: "Airplane Departure"
    }, {
        code: "0x1F6EC",
        groupID: null,
        name: "Airplane Arrival"
    }, {
        code: "0x1FA82",
        groupID: null,
        name: "Parachute"
    }, {
        code: "0x1F4BA",
        groupID: null,
        name: "Seat"
    }, {
        code: "0x1F681",
        groupID: null,
        name: "Helicopter"
    }, {
        code: "0x1F69F",
        groupID: null,
        name: "Suspension Railway"
    }, {
        code: "0x1F6A0",
        groupID: null,
        name: "Mountain Cableway"
    }, {
        code: "0x1F6A1",
        groupID: null,
        name: "Aerial Tramway"
    }, {
        code: "0x1F6F0",
        groupID: null,
        name: "Satellite"
    }, {
        code: "0x1F680",
        groupID: null,
        name: "Rocket"
    }, {
        code: "0x1F6F8",
        groupID: null,
        name: "Flying Saucer"
    }, {
        code: "0x1F6CE",
        groupID: null,
        name: "Bellhop Bell"
    }, {
        code: "0x1F9F3",
        groupID: null,
        name: "Luggage"
    }, {
        code: "0x231B",
        groupID: null,
        name: "Hourglass Done"
    }, {
        code: "0x23F3",
        groupID: null,
        name: "Hourglass Not Done"
    }, {
        code: "0x231A",
        groupID: null,
        name: "Watch"
    }, {
        code: "0x23F0",
        groupID: null,
        name: "Alarm Clock"
    }, {
        code: "0x23F1",
        groupID: null,
        name: "Stopwatch"
    }, {
        code: "0x23F2",
        groupID: null,
        name: "Timer Clock"
    }, {
        code: "0x1F570",
        groupID: null,
        name: "Mantelpiece Clock"
    }, {
        code: "0x1F55B",
        groupID: null,
        name: "Twelve O’Clock"
    }, {
        code: "0x1F567",
        groupID: null,
        name: "Twelve-Thirty"
    }, {
        code: "0x1F550",
        groupID: null,
        name: "One O’Clock"
    }, {
        code: "0x1F55C",
        groupID: null,
        name: "One-Thirty"
    }, {
        code: "0x1F551",
        groupID: null,
        name: "Two O’Clock"
    }, {
        code: "0x1F55D",
        groupID: null,
        name: "Two-Thirty"
    }, {
        code: "0x1F552",
        groupID: null,
        name: "Three O’Clock"
    }, {
        code: "0x1F55E",
        groupID: null,
        name: "Three-Thirty"
    }, {
        code: "0x1F553",
        groupID: null,
        name: "Four O’Clock"
    }, {
        code: "0x1F55F",
        groupID: null,
        name: "Four-Thirty"
    }, {
        code: "0x1F554",
        groupID: null,
        name: "Five O’Clock"
    }, {
        code: "0x1F560",
        groupID: null,
        name: "Five-Thirty"
    }, {
        code: "0x1F555",
        groupID: null,
        name: "Six O’Clock"
    }, {
        code: "0x1F561",
        groupID: null,
        name: "Six-Thirty"
    }, {
        code: "0x1F556",
        groupID: null,
        name: "Seven O’Clock"
    }, {
        code: "0x1F562",
        groupID: null,
        name: "Seven-Thirty"
    }, {
        code: "0x1F557",
        groupID: null,
        name: "Eight O’Clock"
    }, {
        code: "0x1F563",
        groupID: null,
        name: "Eight-Thirty"
    }, {
        code: "0x1F558",
        groupID: null,
        name: "Nine O’Clock"
    }, {
        code: "0x1F564",
        groupID: null,
        name: "Nine-Thirty"
    }, {
        code: "0x1F559",
        groupID: null,
        name: "Ten O’Clock"
    }, {
        code: "0x1F565",
        groupID: null,
        name: "Ten-Thirty"
    }, {
        code: "0x1F55A",
        groupID: null,
        name: "Eleven O’Clock"
    }, {
        code: "0x1F566",
        groupID: null,
        name: "Eleven-Thirty"
    }, {
        code: "0x1F311",
        groupID: null,
        name: "New Moon"
    }, {
        code: "0x1F312",
        groupID: null,
        name: "Waxing Crescent Moon"
    }, {
        code: "0x1F313",
        groupID: null,
        name: "First Quarter Moon"
    }, {
        code: "0x1F314",
        groupID: null,
        name: "Waxing Gibbous Moon"
    }, {
        code: "0x1F315",
        groupID: null,
        name: "Full Moon"
    }, {
        code: "0x1F316",
        groupID: null,
        name: "Waning Gibbous Moon"
    }, {
        code: "0x1F317",
        groupID: null,
        name: "Last Quarter Moon"
    }, {
        code: "0x1F318",
        groupID: null,
        name: "Waning Crescent Moon"
    }, {
        code: "0x1F319",
        groupID: null,
        name: "Crescent Moon"
    }, {
        code: "0x1F31A",
        groupID: null,
        name: "New Moon Face"
    }, {
        code: "0x1F31B",
        groupID: null,
        name: "First Quarter Moon Face"
    }, {
        code: "0x1F31C",
        groupID: null,
        name: "Last Quarter Moon Face"
    }, {
        code: "0x1F321",
        groupID: null,
        name: "Thermometer"
    }, {
        code: "0x2600",
        groupID: null,
        name: "Sun"
    }, {
        code: "0x1F31D",
        groupID: null,
        name: "Full Moon Face"
    }, {
        code: "0x1F31E",
        groupID: null,
        name: "Sun With Face"
    }, {
        code: "0x1FA90",
        groupID: null,
        name: "Ringed Planet"
    }, {
        code: "0x2B50",
        groupID: null,
        name: "Star"
    }, {
        code: "0x1F31F",
        groupID: null,
        name: "Glowing Star"
    }, {
        code: "0x1F320",
        groupID: null,
        name: "Shooting Star"
    }, {
        code: "0x1F30C",
        groupID: null,
        name: "Milky Way"
    }, {
        code: "0x2601",
        groupID: null,
        name: "Cloud"
    }, {
        code: "0x26C5",
        groupID: null,
        name: "Sun Behind Cloud"
    }, {
        code: "0x26C8",
        groupID: null,
        name: "Cloud With Lightning and Rain"
    }, {
        code: "0x1F324",
        groupID: null,
        name: "Sun Behind Small Cloud"
    }, {
        code: "0x1F325",
        groupID: null,
        name: "Sun Behind Large Cloud"
    }, {
        code: "0x1F326",
        groupID: null,
        name: "Sun Behind Rain Cloud"
    }, {
        code: "0x1F327",
        groupID: null,
        name: "Cloud With Rain"
    }, {
        code: "0x1F328",
        groupID: null,
        name: "Cloud With Snow"
    }, {
        code: "0x1F329",
        groupID: null,
        name: "Cloud With Lightning"
    }, {
        code: "0x1F32A",
        groupID: null,
        name: "Tornado"
    }, {
        code: "0x1F32B",
        groupID: null,
        name: "Fog"
    }, {
        code: "0x1F32C",
        groupID: null,
        name: "Wind Face"
    }, {
        code: "0x1F300",
        groupID: null,
        name: "Cyclone"
    }, {
        code: "0x1F308",
        groupID: null,
        name: "Rainbow"
    }, {
        code: "0x1F302",
        groupID: null,
        name: "Closed Umbrella"
    }, {
        code: "0x2602",
        groupID: null,
        name: "Umbrella"
    }, {
        code: "0x2614",
        groupID: null,
        name: "Umbrella With Rain Drops"
    }, {
        code: "0x26F1",
        groupID: null,
        name: "Umbrella on Ground"
    }, {
        code: "0x26A1",
        groupID: null,
        name: "High Voltage"
    }, {
        code: "0x2744",
        groupID: null,
        name: "Snowflake"
    }, {
        code: "0x2603",
        groupID: null,
        name: "Snowman"
    }, {
        code: "0x26C4",
        groupID: null,
        name: "Snowman Without Snow"
    }, {
        code: "0x2604",
        groupID: null,
        name: "Comet"
    }, {
        code: "0x1F525",
        groupID: null,
        name: "Fire"
    }, {
        code: "0x1F4A7",
        groupID: null,
        name: "Droplet"
    }, {
        code: "0x1F30A",
        groupID: null,
        name: "Water Wave"
    }, {
        code: "0x1F383",
        groupID: null,
        name: "Jack-O-Lantern"
    }, {
        code: "0x1F384",
        groupID: null,
        name: "Christmas Tree"
    }, {
        code: "0x1F386",
        groupID: null,
        name: "Fireworks"
    }, {
        code: "0x1F387",
        groupID: null,
        name: "Sparkler"
    }, {
        code: "0x1F9E8",
        groupID: null,
        name: "Firecracker"
    }, {
        code: "0x2728",
        groupID: null,
        name: "Sparkles"
    }, {
        code: "0x1F388",
        groupID: null,
        name: "Balloon"
    }, {
        code: "0x1F389",
        groupID: null,
        name: "Party Popper"
    }, {
        code: "0x1F38A",
        groupID: null,
        name: "Confetti Ball"
    }, {
        code: "0x1F38B",
        groupID: null,
        name: "Tanabata Tree"
    }, {
        code: "0x1F38D",
        groupID: null,
        name: "Pine Decoration"
    }, {
        code: "0x1F38E",
        groupID: null,
        name: "Japanese Dolls"
    }, {
        code: "0x1F38F",
        groupID: null,
        name: "Carp Streamer"
    }, {
        code: "0x1F390",
        groupID: null,
        name: "Wind Chime"
    }, {
        code: "0x1F391",
        groupID: null,
        name: "Moon Viewing Ceremony"
    }, {
        code: "0x1F9E7",
        groupID: null,
        name: "Red Envelope"
    }, {
        code: "0x1F380",
        groupID: null,
        name: "Ribbon"
    }, {
        code: "0x1F381",
        groupID: null,
        name: "Wrapped Gift"
    }, {
        code: "0x1F397",
        groupID: null,
        name: "Reminder Ribbon"
    }, {
        code: "0x1F39F",
        groupID: null,
        name: "Admission Tickets"
    }, {
        code: "0x1F3AB",
        groupID: null,
        name: "Ticket"
    }, {
        code: "0x1F396",
        groupID: null,
        name: "Military Medal"
    }, {
        code: "0x1F3C6",
        groupID: null,
        name: "Trophy"
    }, {
        code: "0x1F3C5",
        groupID: null,
        name: "Sports Medal"
    }, {
        code: "0x1F947",
        groupID: null,
        name: "1st Place Medal"
    }, {
        code: "0x1F948",
        groupID: null,
        name: "2nd Place Medal"
    }, {
        code: "0x1F949",
        groupID: null,
        name: "3rd Place Medal"
    }, {
        code: "0x26BD",
        groupID: null,
        name: "Soccer Ball"
    }, {
        code: "0x26BE",
        groupID: null,
        name: "Baseball"
    }, {
        code: "0x1F94E",
        groupID: null,
        name: "Softball"
    }, {
        code: "0x1F3C0",
        groupID: null,
        name: "Basketball"
    }, {
        code: "0x1F3D0",
        groupID: null,
        name: "Volleyball"
    }, {
        code: "0x1F3C8",
        groupID: null,
        name: "American Football"
    }, {
        code: "0x1F3C9",
        groupID: null,
        name: "Rugby Football"
    }, {
        code: "0x1F3BE",
        groupID: null,
        name: "Tennis"
    }, {
        code: "0x1F94F",
        groupID: null,
        name: "Flying Disc"
    }, {
        code: "0x1F3B3",
        groupID: null,
        name: "Bowling"
    }, {
        code: "0x1F3CF",
        groupID: null,
        name: "Cricket Game"
    }, {
        code: "0x1F3D1",
        groupID: null,
        name: "Field Hockey"
    }, {
        code: "0x1F3D2",
        groupID: null,
        name: "Ice Hockey"
    }, {
        code: "0x1F94D",
        groupID: null,
        name: "Lacrosse"
    }, {
        code: "0x1F3D3",
        groupID: null,
        name: "Ping Pong"
    }, {
        code: "0x1F3F8",
        groupID: null,
        name: "Badminton"
    }, {
        code: "0x1F94A",
        groupID: null,
        name: "Boxing Glove"
    }, {
        code: "0x1F94B",
        groupID: null,
        name: "Martial Arts Uniform"
    }, {
        code: "0x1F945",
        groupID: null,
        name: "Goal Net"
    }, {
        code: "0x26F3",
        groupID: null,
        name: "Flag in Hole"
    }, {
        code: "0x26F8",
        groupID: null,
        name: "Ice Skate"
    }, {
        code: "0x1F3A3",
        groupID: null,
        name: "Fishing Pole"
    }, {
        code: "0x1F93F",
        groupID: null,
        name: "Diving Mask"
    }, {
        code: "0x1F3BD",
        groupID: null,
        name: "Running Shirt"
    }, {
        code: "0x1F3BF",
        groupID: null,
        name: "Skis"
    }, {
        code: "0x1F6F7",
        groupID: null,
        name: "Sled"
    }, {
        code: "0x1F94C",
        groupID: null,
        name: "Curling Stone"
    }, {
        code: "0x1F3AF",
        groupID: null,
        name: "Direct Hit"
    }, {
        code: "0x1FA80",
        groupID: null,
        name: "Yo-Yo"
    }, {
        code: "0x1FA81",
        groupID: null,
        name: "Kite"
    }, {
        code: "0x1F3B1",
        groupID: null,
        name: "Pool 8 Ball"
    }, {
        code: "0x1F52E",
        groupID: null,
        name: "Crystal Ball"
    }, {
        code: "0x1F9FF",
        groupID: null,
        name: "Nazar Amulet"
    }, {
        code: "0x1F3AE",
        groupID: null,
        name: "Video Game"
    }, {
        code: "0x1F579",
        groupID: null,
        name: "Joystick"
    }, {
        code: "0x1F3B0",
        groupID: null,
        name: "Slot Machine"
    }, {
        code: "0x1F3B2",
        groupID: null,
        name: "Game Die"
    }, {
        code: "0x1F9E9",
        groupID: null,
        name: "Puzzle Piece"
    }, {
        code: "0x1F9F8",
        groupID: null,
        name: "Teddy Bear"
    }, {
        code: "0x2660",
        groupID: null,
        name: "Spade Suit"
    }, {
        code: "0x2665",
        groupID: null,
        name: "Heart Suit"
    }, {
        code: "0x2666",
        groupID: null,
        name: "Diamond Suit"
    }, {
        code: "0x2663",
        groupID: null,
        name: "Club Suit"
    }, {
        code: "0x265F",
        groupID: null,
        name: "Chess Pawn"
    }, {
        code: "0x1F0CF",
        groupID: null,
        name: "Joker"
    }, {
        code: "0x1F004",
        groupID: null,
        name: "Mahjong Red Dragon"
    }, {
        code: "0x1F3B4",
        groupID: null,
        name: "Flower Playing Cards"
    }, {
        code: "0x1F3AD",
        groupID: null,
        name: "Performing Arts"
    }, {
        code: "0x1F5BC",
        groupID: null,
        name: "Framed Picture"
    }, {
        code: "0x1F3A8",
        groupID: null,
        name: "Artist Palette"
    }, {
        code: "0x1F9F5",
        groupID: null,
        name: "Thread"
    }, {
        code: "0x1F9F6",
        groupID: null,
        name: "Yarn"
    }, {
        code: "0x1F453",
        groupID: null,
        name: "Glasses"
    }, {
        code: "0x1F576",
        groupID: null,
        name: "Sunglasses"
    }, {
        code: "0x1F97D",
        groupID: null,
        name: "Goggles"
    }, {
        code: "0x1F97C",
        groupID: null,
        name: "Lab Coat"
    }, {
        code: "0x1F9BA",
        groupID: null,
        name: "Safety Vest"
    }, {
        code: "0x1F454",
        groupID: null,
        name: "Necktie"
    }, {
        code: "0x1F455",
        groupID: null,
        name: "T-Shirt"
    }, {
        code: "0x1F456",
        groupID: null,
        name: "Jeans"
    }, {
        code: "0x1F9E3",
        groupID: null,
        name: "Scarf"
    }, {
        code: "0x1F9E4",
        groupID: null,
        name: "Gloves"
    }, {
        code: "0x1F9E5",
        groupID: null,
        name: "Coat"
    }, {
        code: "0x1F9E6",
        groupID: null,
        name: "Socks"
    }, {
        code: "0x1F457",
        groupID: null,
        name: "Dress"
    }, {
        code: "0x1F458",
        groupID: null,
        name: "Kimono"
    }, {
        code: "0x1F97B",
        groupID: null,
        name: "Sari"
    }, {
        code: "0x1FA71",
        groupID: null,
        name: "One-Piece Swimsuit"
    }, {
        code: "0x1FA72",
        groupID: null,
        name: "Briefs"
    }, {
        code: "0x1FA73",
        groupID: null,
        name: "Shorts"
    }, {
        code: "0x1F459",
        groupID: null,
        name: "Bikini"
    }, {
        code: "0x1F45A",
        groupID: null,
        name: "Woman’s Clothes"
    }, {
        code: "0x1F45B",
        groupID: null,
        name: "Purse"
    }, {
        code: "0x1F45C",
        groupID: null,
        name: "Handbag"
    }, {
        code: "0x1F45D",
        groupID: null,
        name: "Clutch Bag"
    }, {
        code: "0x1F6CD",
        groupID: null,
        name: "Shopping Bags"
    }, {
        code: "0x1F392",
        groupID: null,
        name: "Backpack"
    }, {
        code: "0x1F45E",
        groupID: null,
        name: "Man’s Shoe"
    }, {
        code: "0x1F45F",
        groupID: null,
        name: "Running Shoe"
    }, {
        code: "0x1F97E",
        groupID: null,
        name: "Hiking Boot"
    }, {
        code: "0x1F97F",
        groupID: null,
        name: "Flat Shoe"
    }, {
        code: "0x1F460",
        groupID: null,
        name: "High-Heeled Shoe"
    }, {
        code: "0x1F461",
        groupID: null,
        name: "Woman’s Sandal"
    }, {
        code: "0x1FA70",
        groupID: null,
        name: "Ballet Shoes"
    }, {
        code: "0x1F462",
        groupID: null,
        name: "Woman’s Boot"
    }, {
        code: "0x1F451",
        groupID: null,
        name: "Crown"
    }, {
        code: "0x1F452",
        groupID: null,
        name: "Woman’s Hat"
    }, {
        code: "0x1F3A9",
        groupID: null,
        name: "Top Hat"
    }, {
        code: "0x1F393",
        groupID: null,
        name: "Graduation Cap"
    }, {
        code: "0x1F9E2",
        groupID: null,
        name: "Billed Cap"
    }, {
        code: "0x26D1",
        groupID: null,
        name: "Rescue Worker’s Helmet"
    }, {
        code: "0x1F4FF",
        groupID: null,
        name: "Prayer Beads"
    }, {
        code: "0x1F484",
        groupID: null,
        name: "Lipstick"
    }, {
        code: "0x1F48D",
        groupID: null,
        name: "Ring"
    }, {
        code: "0x1F48E",
        groupID: null,
        name: "Gem Stone"
    }, {
        code: "0x1F507",
        groupID: null,
        name: "Muted Speaker"
    }, {
        code: "0x1F508",
        groupID: null,
        name: "Speaker Low Volume"
    }, {
        code: "0x1F509",
        groupID: null,
        name: "Speaker Medium Volume"
    }, {
        code: "0x1F50A",
        groupID: null,
        name: "Speaker High Volume"
    }, {
        code: "0x1F4E2",
        groupID: null,
        name: "Loudspeaker"
    }, {
        code: "0x1F4E3",
        groupID: null,
        name: "Megaphone"
    }, {
        code: "0x1F4EF",
        groupID: null,
        name: "Postal Horn"
    }, {
        code: "0x1F514",
        groupID: null,
        name: "Bell"
    }, {
        code: "0x1F515",
        groupID: null,
        name: "Bell With Slash"
    }, {
        code: "0x1F3BC",
        groupID: null,
        name: "Musical Score"
    }, {
        code: "0x1F3B5",
        groupID: null,
        name: "Musical Note"
    }, {
        code: "0x1F3B6",
        groupID: null,
        name: "Musical Notes"
    }, {
        code: "0x1F399",
        groupID: null,
        name: "Studio Microphone"
    }, {
        code: "0x1F39A",
        groupID: null,
        name: "Level Slider"
    }, {
        code: "0x1F39B",
        groupID: null,
        name: "Control Knobs"
    }, {
        code: "0x1F3A4",
        groupID: null,
        name: "Microphone"
    }, {
        code: "0x1F3A7",
        groupID: null,
        name: "Headphone"
    }, {
        code: "0x1F4FB",
        groupID: null,
        name: "Radio"
    }, {
        code: "0x1F3B7",
        groupID: null,
        name: "Saxophone"
    }, {
        code: "0x1F3B8",
        groupID: null,
        name: "Guitar"
    }, {
        code: "0x1F3B9",
        groupID: null,
        name: "Musical Keyboard"
    }, {
        code: "0x1F3BA",
        groupID: null,
        name: "Trumpet"
    }, {
        code: "0x1F3BB",
        groupID: null,
        name: "Violin"
    }, {
        code: "0x1FA95",
        groupID: null,
        name: "Banjo"
    }, {
        code: "0x1F941",
        groupID: null,
        name: "Drum"
    }, {
        code: "0x1F4F1",
        groupID: null,
        name: "Mobile Phone"
    }, {
        code: "0x1F4F2",
        groupID: null,
        name: "Mobile Phone With Arrow"
    }, {
        code: "0x260E",
        groupID: null,
        name: "Telephone"
    }, {
        code: "0x1F4DE",
        groupID: null,
        name: "Telephone Receiver"
    }, {
        code: "0x1F4DF",
        groupID: null,
        name: "Pager"
    }, {
        code: "0x1F4E0",
        groupID: null,
        name: "Fax Machine"
    }, {
        code: "0x1F50B",
        groupID: null,
        name: "Battery"
    }, {
        code: "0x1F50C",
        groupID: null,
        name: "Electric Plug"
    }, {
        code: "0x1F4BB",
        groupID: null,
        name: "Laptop"
    }, {
        code: "0x1F5A5",
        groupID: null,
        name: "Desktop Computer"
    }, {
        code: "0x1F5A8",
        groupID: null,
        name: "Printer"
    }, {
        code: "0x2328",
        groupID: null,
        name: "Keyboard"
    }, {
        code: "0x1F5B1",
        groupID: null,
        name: "Computer Mouse"
    }, {
        code: "0x1F5B2",
        groupID: null,
        name: "Trackball"
    }, {
        code: "0x1F4BD",
        groupID: null,
        name: "Computer Disk"
    }, {
        code: "0x1F4BE",
        groupID: null,
        name: "Floppy Disk"
    }, {
        code: "0x1F4BF",
        groupID: null,
        name: "Optical Disk"
    }, {
        code: "0x1F4C0",
        groupID: null,
        name: "DVD"
    }, {
        code: "0x1F9EE",
        groupID: null,
        name: "Abacus"
    }, {
        code: "0x1F3A5",
        groupID: null,
        name: "Movie Camera"
    }, {
        code: "0x1F39E",
        groupID: null,
        name: "Film Frames"
    }, {
        code: "0x1F4FD",
        groupID: null,
        name: "Film Projector"
    }, {
        code: "0x1F3AC",
        groupID: null,
        name: "Clapper Board"
    }, {
        code: "0x1F4FA",
        groupID: null,
        name: "Television"
    }, {
        code: "0x1F4F7",
        groupID: null,
        name: "Camera"
    }, {
        code: "0x1F4F8",
        groupID: null,
        name: "Camera With Flash"
    }, {
        code: "0x1F4F9",
        groupID: null,
        name: "Video Camera"
    }, {
        code: "0x1F4FC",
        groupID: null,
        name: "Videocassette"
    }, {
        code: "0x1F50D",
        groupID: null,
        name: "Magnifying Glass Tilted Left"
    }, {
        code: "0x1F50E",
        groupID: null,
        name: "Magnifying Glass Tilted Right"
    }, {
        code: "0x1F56F",
        groupID: null,
        name: "Candle"
    }, {
        code: "0x1F4A1",
        groupID: null,
        name: "Light Bulb"
    }, {
        code: "0x1F526",
        groupID: null,
        name: "Flashlight"
    }, {
        code: "0x1F3EE",
        groupID: null,
        name: "Red Paper Lantern"
    }, {
        code: "0x1FA94",
        groupID: null,
        name: "Diya Lamp"
    }, {
        code: "0x1F4D4",
        groupID: null,
        name: "Notebook With Decorative Cover"
    }, {
        code: "0x1F4D5",
        groupID: null,
        name: "Closed Book"
    }, {
        code: "0x1F4D6",
        groupID: null,
        name: "Open Book"
    }, {
        code: "0x1F4D7",
        groupID: null,
        name: "Green Book"
    }, {
        code: "0x1F4D8",
        groupID: null,
        name: "Blue Book"
    }, {
        code: "0x1F4D9",
        groupID: null,
        name: "Orange Book"
    }, {
        code: "0x1F4DA",
        groupID: null,
        name: "Books"
    }, {
        code: "0x1F4D3",
        groupID: null,
        name: "Notebook"
    }, {
        code: "0x1F4D2",
        groupID: null,
        name: "Ledger"
    }, {
        code: "0x1F4C3",
        groupID: null,
        name: "Page With Curl"
    }, {
        code: "0x1F4DC",
        groupID: null,
        name: "Scroll"
    }, {
        code: "0x1F4C4",
        groupID: null,
        name: "Page Facing Up"
    }, {
        code: "0x1F4F0",
        groupID: null,
        name: "Newspaper"
    }, {
        code: "0x1F5DE",
        groupID: null,
        name: "Rolled-Up Newspaper"
    }, {
        code: "0x1F4D1",
        groupID: null,
        name: "Bookmark Tabs"
    }, {
        code: "0x1F516",
        groupID: null,
        name: "Bookmark"
    }, {
        code: "0x1F3F7",
        groupID: null,
        name: "Label"
    }, {
        code: "0x1F4B0",
        groupID: null,
        name: "Money Bag"
    }, {
        code: "0x1F4B4",
        groupID: null,
        name: "Yen Banknote"
    }, {
        code: "0x1F4B5",
        groupID: null,
        name: "Dollar Banknote"
    }, {
        code: "0x1F4B6",
        groupID: null,
        name: "Euro Banknote"
    }, {
        code: "0x1F4B7",
        groupID: null,
        name: "Pound Banknote"
    }, {
        code: "0x1F4B8",
        groupID: null,
        name: "Money With Wings"
    }, {
        code: "0x1F4B3",
        groupID: null,
        name: "Credit Card"
    }, {
        code: "0x1F9FE",
        groupID: null,
        name: "Receipt"
    }, {
        code: "0x1F4B9",
        groupID: null,
        name: "Chart Increasing With Yen"
    }, {
        code: "0x1F4B1",
        groupID: null,
        name: "Currency Exchange"
    }, {
        code: "0x1F4B2",
        groupID: null,
        name: "Heavy Dollar Sign"
    }, {
        code: "0x2709",
        groupID: null,
        name: "Envelope"
    }, {
        code: "0x1F4E7",
        groupID: null,
        name: "E-Mail"
    }, {
        code: "0x1F4E8",
        groupID: null,
        name: "Incoming Envelope"
    }, {
        code: "0x1F4E9",
        groupID: null,
        name: "Envelope With Arrow"
    }, {
        code: "0x1F4E4",
        groupID: null,
        name: "Outbox Tray"
    }, {
        code: "0x1F4E5",
        groupID: null,
        name: "Inbox Tray"
    }, {
        code: "0x1F4E6",
        groupID: null,
        name: "Package"
    }, {
        code: "0x1F4EB",
        groupID: null,
        name: "Closed Mailbox With Raised Flag"
    }, {
        code: "0x1F4EA",
        groupID: null,
        name: "Closed Mailbox With Lowered Flag"
    }, {
        code: "0x1F4EC",
        groupID: null,
        name: "Open Mailbox With Raised Flag"
    }, {
        code: "0x1F4ED",
        groupID: null,
        name: "Open Mailbox With Lowered Flag"
    }, {
        code: "0x1F4EE",
        groupID: null,
        name: "Postbox"
    }, {
        code: "0x1F5F3",
        groupID: null,
        name: "Ballot Box With Ballot"
    }, {
        code: "0x270F",
        groupID: null,
        name: "Pencil"
    }, {
        code: "0x2712",
        groupID: null,
        name: "Black Nib"
    }, {
        code: "0x1F58B",
        groupID: null,
        name: "Fountain Pen"
    }, {
        code: "0x1F58A",
        groupID: null,
        name: "Pen"
    }, {
        code: "0x1F58C",
        groupID: null,
        name: "Paintbrush"
    }, {
        code: "0x1F58D",
        groupID: null,
        name: "Crayon"
    }, {
        code: "0x1F4DD",
        groupID: null,
        name: "Memo"
    }, {
        code: "0x1F4BC",
        groupID: null,
        name: "Briefcase"
    }, {
        code: "0x1F4C1",
        groupID: null,
        name: "File Folder"
    }, {
        code: "0x1F4C2",
        groupID: null,
        name: "Open File Folder"
    }, {
        code: "0x1F5C2",
        groupID: null,
        name: "Card Index Dividers"
    }, {
        code: "0x1F4C5",
        groupID: null,
        name: "Calendar"
    }, {
        code: "0x1F4C6",
        groupID: null,
        name: "Tear-Off Calendar"
    }, {
        code: "0x1F5D2",
        groupID: null,
        name: "Spiral Notepad"
    }, {
        code: "0x1F5D3",
        groupID: null,
        name: "Spiral Calendar"
    }, {
        code: "0x1F4C7",
        groupID: null,
        name: "Card Index"
    }, {
        code: "0x1F4C8",
        groupID: null,
        name: "Chart Increasing"
    }, {
        code: "0x1F4C9",
        groupID: null,
        name: "Chart Decreasing"
    }, {
        code: "0x1F4CA",
        groupID: null,
        name: "Bar Chart"
    }, {
        code: "0x1F4CB",
        groupID: null,
        name: "Clipboard"
    }, {
        code: "0x1F4CC",
        groupID: null,
        name: "Pushpin"
    }, {
        code: "0x1F4CD",
        groupID: null,
        name: "Round Pushpin"
    }, {
        code: "0x1F4CE",
        groupID: null,
        name: "Paperclip"
    }, {
        code: "0x1F587",
        groupID: null,
        name: "Linked Paperclips"
    }, {
        code: "0x1F4CF",
        groupID: null,
        name: "Straight Ruler"
    }, {
        code: "0x1F4D0",
        groupID: null,
        name: "Triangular Ruler"
    }, {
        code: "0x2702",
        groupID: null,
        name: "Scissors"
    }, {
        code: "0x1F5C3",
        groupID: null,
        name: "Card File Box"
    }, {
        code: "0x1F5C4",
        groupID: null,
        name: "File Cabinet"
    }, {
        code: "0x1F5D1",
        groupID: null,
        name: "Wastebasket"
    }, {
        code: "0x1F512",
        groupID: null,
        name: "Locked"
    }, {
        code: "0x1F513",
        groupID: null,
        name: "Unlocked"
    }, {
        code: "0x1F50F",
        groupID: null,
        name: "Locked With Pen"
    }, {
        code: "0x1F510",
        groupID: null,
        name: "Locked With Key"
    }, {
        code: "0x1F511",
        groupID: null,
        name: "Key"
    }, {
        code: "0x1F5DD",
        groupID: null,
        name: "Old Key"
    }, {
        code: "0x1F528",
        groupID: null,
        name: "Hammer"
    }, {
        code: "0x1FA93",
        groupID: null,
        name: "Axe"
    }, {
        code: "0x26CF",
        groupID: null,
        name: "Pick"
    }, {
        code: "0x2692",
        groupID: null,
        name: "Hammer and Pick"
    }, {
        code: "0x1F6E0",
        groupID: null,
        name: "Hammer and Wrench"
    }, {
        code: "0x1F5E1",
        groupID: null,
        name: "Dagger"
    }, {
        code: "0x2694",
        groupID: null,
        name: "Crossed Swords"
    }, {
        code: "0x1F52B",
        groupID: null,
        name: "Pistol"
    }, {
        code: "0x1F3F9",
        groupID: null,
        name: "Bow and Arrow"
    }, {
        code: "0x1F6E1",
        groupID: null,
        name: "Shield"
    }, {
        code: "0x1F527",
        groupID: null,
        name: "Wrench"
    }, {
        code: "0x1F529",
        groupID: null,
        name: "Nut and Bolt"
    }, {
        code: "0x2699",
        groupID: null,
        name: "Gear"
    }, {
        code: "0x1F5DC",
        groupID: null,
        name: "Clamp"
    }, {
        code: "0x2696",
        groupID: null,
        name: "Balance Scale"
    }, {
        code: "0x1F9AF",
        groupID: null,
        name: "Probing Cane"
    }, {
        code: "0x1F517",
        groupID: null,
        name: "Link"
    }, {
        code: "0x26D3",
        groupID: null,
        name: "Chains"
    }, {
        code: "0x1F9F0",
        groupID: null,
        name: "Toolbox"
    }, {
        code: "0x1F9F2",
        groupID: null,
        name: "Magnet"
    }, {
        code: "0x2697",
        groupID: null,
        name: "Alembic"
    }, {
        code: "0x1F9EA",
        groupID: null,
        name: "Test Tube"
    }, {
        code: "0x1F9EB",
        groupID: null,
        name: "Petri Dish"
    }, {
        code: "0x1F9EC",
        groupID: null,
        name: "DNA"
    }, {
        code: "0x1F52C",
        groupID: null,
        name: "Microscope"
    }, {
        code: "0x1F52D",
        groupID: null,
        name: "Telescope"
    }, {
        code: "0x1F4E1",
        groupID: null,
        name: "Satellite Antenna"
    }, {
        code: "0x1F489",
        groupID: null,
        name: "Syringe"
    }, {
        code: "0x1FA78",
        groupID: null,
        name: "Drop of Blood"
    }, {
        code: "0x1F48A",
        groupID: null,
        name: "Pill"
    }, {
        code: "0x1FA79",
        groupID: null,
        name: "Adhesive Bandage"
    }, {
        code: "0x1FA7A",
        groupID: null,
        name: "Stethoscope"
    }, {
        code: "0x1F6AA",
        groupID: null,
        name: "Door"
    }, {
        code: "0x1F6CF",
        groupID: null,
        name: "Bed"
    }, {
        code: "0x1F6CB",
        groupID: null,
        name: "Couch and Lamp"
    }, {
        code: "0x1FA91",
        groupID: null,
        name: "Chair"
    }, {
        code: "0x1F6BD",
        groupID: null,
        name: "Toilet"
    }, {
        code: "0x1F6BF",
        groupID: null,
        name: "Shower"
    }, {
        code: "0x1F6C1",
        groupID: null,
        name: "Bathtub"
    }, {
        code: "0x1FA92",
        groupID: null,
        name: "Razor"
    }, {
        code: "0x1F9F4",
        groupID: null,
        name: "Lotion Bottle"
    }, {
        code: "0x1F9F7",
        groupID: null,
        name: "Safety Pin"
    }, {
        code: "0x1F9F9",
        groupID: null,
        name: "Broom"
    }, {
        code: "0x1F9FA",
        groupID: null,
        name: "Basket"
    }, {
        code: "0x1F9FB",
        groupID: null,
        name: "Roll of Paper"
    }, {
        code: "0x1F9FC",
        groupID: null,
        name: "Soap"
    }, {
        code: "0x1F9FD",
        groupID: null,
        name: "Sponge"
    }, {
        code: "0x1F9EF",
        groupID: null,
        name: "Fire Extinguisher"
    }, {
        code: "0x1F6D2",
        groupID: null,
        name: "Shopping Cart"
    }, {
        code: "0x1F6AC",
        groupID: null,
        name: "Cigarette"
    }, {
        code: "0x26B0",
        groupID: null,
        name: "Coffin"
    }, {
        code: "0x26B1",
        groupID: null,
        name: "Funeral Urn"
    }, {
        code: "0x1F5FF",
        groupID: null,
        name: "Moai"
    }, {
        code: "0x1F3E7",
        groupID: null,
        name: "ATM Sign"
    }, {
        code: "0x1F6AE",
        groupID: null,
        name: "Litter in Bin Sign"
    }, {
        code: "0x1F6B0",
        groupID: null,
        name: "Potable Water"
    }, {
        code: "0x267F",
        groupID: null,
        name: "Wheelchair Symbol"
    }, {
        code: "0x1F6B9",
        groupID: null,
        name: "Men’s Room"
    }, {
        code: "0x1F6BA",
        groupID: null,
        name: "Women’s Room"
    }, {
        code: "0x1F6BB",
        groupID: null,
        name: "Restroom"
    }, {
        code: "0x1F6BC",
        groupID: null,
        name: "Baby Symbol"
    }, {
        code: "0x1F6BE",
        groupID: null,
        name: "Water Closet"
    }, {
        code: "0x1F6C2",
        groupID: null,
        name: "Passport Control"
    }, {
        code: "0x1F6C3",
        groupID: null,
        name: "Customs"
    }, {
        code: "0x1F6C4",
        groupID: null,
        name: "Baggage Claim"
    }, {
        code: "0x1F6C5",
        groupID: null,
        name: "Left Luggage"
    }, {
        code: "0x26A0",
        groupID: null,
        name: "Warning"
    }, {
        code: "0x1F6B8",
        groupID: null,
        name: "Children Crossing"
    }, {
        code: "0x26D4",
        groupID: null,
        name: "No Entry"
    }, {
        code: "0x1F6AB",
        groupID: null,
        name: "Prohibited"
    }, {
        code: "0x1F6B3",
        groupID: null,
        name: "No Bicycles"
    }, {
        code: "0x1F6AD",
        groupID: null,
        name: "No Smoking"
    }, {
        code: "0x1F6AF",
        groupID: null,
        name: "No Littering"
    }, {
        code: "0x1F6B1",
        groupID: null,
        name: "Non-Potable Water"
    }, {
        code: "0x1F6B7",
        groupID: null,
        name: "No Pedestrians"
    }, {
        code: "0x1F4F5",
        groupID: null,
        name: "No Mobile Phones"
    }, {
        code: "0x1F51E",
        groupID: null,
        name: "No One Under Eighteen"
    }, {
        code: "0x2622",
        groupID: null,
        name: "Radioactive"
    }, {
        code: "0x2623",
        groupID: null,
        name: "Biohazard"
    }, {
        code: "0x2B06",
        groupID: null,
        name: "Up Arrow"
    }, {
        code: "0x2197",
        groupID: null,
        name: "Up-Right Arrow"
    }, {
        code: "0x27A1",
        groupID: null,
        name: "Right Arrow"
    }, {
        code: "0x2198",
        groupID: null,
        name: "Down-Right Arrow"
    }, {
        code: "0x2B07",
        groupID: null,
        name: "Down Arrow"
    }, {
        code: "0x2199",
        groupID: null,
        name: "Down-Left Arrow"
    }, {
        code: "0x2B05",
        groupID: null,
        name: "Left Arrow"
    }, {
        code: "0x2196",
        groupID: null,
        name: "Up-Left Arrow"
    }, {
        code: "0x2195",
        groupID: null,
        name: "Up-Down Arrow"
    }, {
        code: "0x2194",
        groupID: null,
        name: "Left-Right Arrow"
    }, {
        code: "0x21A9",
        groupID: null,
        name: "Right Arrow Curving Left"
    }, {
        code: "0x21AA",
        groupID: null,
        name: "Left Arrow Curving Right"
    }, {
        code: "0x2934",
        groupID: null,
        name: "Right Arrow Curving Up"
    }, {
        code: "0x2935",
        groupID: null,
        name: "Right Arrow Curving Down"
    }, {
        code: "0x1F503",
        groupID: null,
        name: "Clockwise Vertical Arrows"
    }, {
        code: "0x1F504",
        groupID: null,
        name: "Counterclockwise Arrows Button"
    }, {
        code: "0x1F519",
        groupID: null,
        name: "Back Arrow"
    }, {
        code: "0x1F51A",
        groupID: null,
        name: "End Arrow"
    }, {
        code: "0x1F51B",
        groupID: null,
        name: "On! Arrow"
    }, {
        code: "0x1F51C",
        groupID: null,
        name: "Soon Arrow"
    }, {
        code: "0x1F51D",
        groupID: null,
        name: "Top Arrow"
    }, {
        code: "0x1F6D0",
        groupID: null,
        name: "Place of Worship"
    }, {
        code: "0x269B",
        groupID: null,
        name: "Atom Symbol"
    }, {
        code: "0x1F549",
        groupID: null,
        name: "Om"
    }, {
        code: "0x2721",
        groupID: null,
        name: "Star of David"
    }, {
        code: "0x2638",
        groupID: null,
        name: "Wheel of Dharma"
    }, {
        code: "0x262F",
        groupID: null,
        name: "Yin Yang"
    }, {
        code: "0x271D",
        groupID: null,
        name: "Latin Cross"
    }, {
        code: "0x2626",
        groupID: null,
        name: "Orthodox Cross"
    }, {
        code: "0x262A",
        groupID: null,
        name: "Star and Crescent"
    }, {
        code: "0x262E",
        groupID: null,
        name: "Peace Symbol"
    }, {
        code: "0x1F54E",
        groupID: null,
        name: "Menorah"
    }, {
        code: "0x1F52F",
        groupID: null,
        name: "Dotted Six-Pointed Star"
    }, {
        code: "0x2648",
        groupID: null,
        name: "Aries"
    }, {
        code: "0x2649",
        groupID: null,
        name: "Taurus"
    }, {
        code: "0x264A",
        groupID: null,
        name: "Gemini"
    }, {
        code: "0x264B",
        groupID: null,
        name: "Cancer"
    }, {
        code: "0x264C",
        groupID: null,
        name: "Leo"
    }, {
        code: "0x264D",
        groupID: null,
        name: "Virgo"
    }, {
        code: "0x264E",
        groupID: null,
        name: "Libra"
    }, {
        code: "0x264F",
        groupID: null,
        name: "Scorpio"
    }, {
        code: "0x2650",
        groupID: null,
        name: "Sagittarius"
    }, {
        code: "0x2651",
        groupID: null,
        name: "Capricorn"
    }, {
        code: "0x2652",
        groupID: null,
        name: "Aquarius"
    }, {
        code: "0x2653",
        groupID: null,
        name: "Pisces"
    }, {
        code: "0x26CE",
        groupID: null,
        name: "Ophiuchus"
    }, {
        code: "0x1F500",
        groupID: null,
        name: "Shuffle Tracks Button"
    }, {
        code: "0x1F501",
        groupID: null,
        name: "Repeat Button"
    }, {
        code: "0x1F502",
        groupID: null,
        name: "Repeat Single Button"
    }, {
        code: "0x25B6",
        groupID: null,
        name: "Play Button"
    }, {
        code: "0x23E9",
        groupID: null,
        name: "Fast-Forward Button"
    }, {
        code: "0x23ED",
        groupID: null,
        name: "Next Track Button"
    }, {
        code: "0x23EF",
        groupID: null,
        name: "Play or Pause Button"
    }, {
        code: "0x25C0",
        groupID: null,
        name: "Reverse Button"
    }, {
        code: "0x23EA",
        groupID: null,
        name: "Fast Reverse Button"
    }, {
        code: "0x23EE",
        groupID: null,
        name: "Last Track Button"
    }, {
        code: "0x1F53C",
        groupID: null,
        name: "Upwards Button"
    }, {
        code: "0x23EB",
        groupID: null,
        name: "Fast Up Button"
    }, {
        code: "0x1F53D",
        groupID: null,
        name: "Downwards Button"
    }, {
        code: "0x23EC",
        groupID: null,
        name: "Fast Down Button"
    }, {
        code: "0x23F8",
        groupID: null,
        name: "Pause Button"
    }, {
        code: "0x23F9",
        groupID: null,
        name: "Stop Button"
    }, {
        code: "0x23FA",
        groupID: null,
        name: "Record Button"
    }, {
        code: "0x23CF",
        groupID: null,
        name: "Eject Button"
    }, {
        code: "0x1F3A6",
        groupID: null,
        name: "Cinema"
    }, {
        code: "0x1F505",
        groupID: null,
        name: "Dim Button"
    }, {
        code: "0x1F506",
        groupID: null,
        name: "Bright Button"
    }, {
        code: "0x1F4F6",
        groupID: null,
        name: "Antenna Bars"
    }, {
        code: "0x1F4F3",
        groupID: null,
        name: "Vibration Mode"
    }, {
        code: "0x1F4F4",
        groupID: null,
        name: "Mobile Phone Off"
    }, {
        code: "0x2640",
        groupID: null,
        name: "Female Sign"
    }, {
        code: "0x2642",
        groupID: null,
        name: "Male Sign"
    }, {
        code: "0x26A7",
        groupID: null,
        name: "Transgender Symbol"
    }, {
        code: "0x2695",
        groupID: null,
        name: "Medical Symbol"
    }, {
        code: "0x267E",
        groupID: null,
        name: "Infinity"
    }, {
        code: "0x267B",
        groupID: null,
        name: "Recycling Symbol"
    }, {
        code: "0x269C",
        groupID: null,
        name: "Fleur-de-lis"
    }, {
        code: "0x1F531",
        groupID: null,
        name: "Trident Emblem"
    }, {
        code: "0x1F4DB",
        groupID: null,
        name: "Name Badge"
    }, {
        code: "0x1F530",
        groupID: null,
        name: "Japanese Symbol for Beginner"
    }, {
        code: "0x2B55",
        groupID: null,
        name: "Hollow Red Circle"
    }, {
        code: "0x2705",
        groupID: null,
        name: "Check Mark Button"
    }, {
        code: "0x2611",
        groupID: null,
        name: "Check Box With Check"
    }, {
        code: "0x2714",
        groupID: null,
        name: "Check Mark"
    }, {
        code: "0x2716",
        groupID: null,
        name: "Multiplication Sign"
    }, {
        code: "0x274C",
        groupID: null,
        name: "Cross Mark"
    }, {
        code: "0x274E",
        groupID: null,
        name: "Cross Mark Button"
    }, {
        code: "0x2795",
        groupID: null,
        name: "Plus Sign"
    }, {
        code: "0x2796",
        groupID: null,
        name: "Minus Sign"
    }, {
        code: "0x2797",
        groupID: null,
        name: "Division Sign"
    }, {
        code: "0x27B0",
        groupID: null,
        name: "Curly Loop"
    }, {
        code: "0x27BF",
        groupID: null,
        name: "Double Curly Loop"
    }, {
        code: "0x303D",
        groupID: null,
        name: "Part Alternation Mark"
    }, {
        code: "0x2733",
        groupID: null,
        name: "Eight-Spoked Asterisk"
    }, {
        code: "0x2734",
        groupID: null,
        name: "Eight-Pointed Star"
    }, {
        code: "0x2747",
        groupID: null,
        name: "Sparkle"
    }, {
        code: "0x203C",
        groupID: null,
        name: "Double Exclamation Mark"
    }, {
        code: "0x2049",
        groupID: null,
        name: "Exclamation Question Mark"
    }, {
        code: "0x2753",
        groupID: null,
        name: "Question Mark"
    }, {
        code: "0x2754",
        groupID: null,
        name: "White Question Mark"
    }, {
        code: "0x2755",
        groupID: null,
        name: "White Exclamation Mark"
    }, {
        code: "0x2757",
        groupID: null,
        name: "Exclamation Mark"
    }, {
        code: "0x3030",
        groupID: null,
        name: "Wavy Dash"
    }, {
        code: "0xA9",
        groupID: null,
        name: "Copyright"
    }, {
        code: "0xAE",
        groupID: null,
        name: "Registered"
    }, {
        code: "0x2122",
        groupID: null,
        name: "Trade Mark"
    }, {
        code: "0x23, 0x20E3",
        groupID: null,
        name: "Keycap Number Sign"
    }, {
        code: "0x2A, 0x20E3",
        groupID: null,
        name: "Keycap Asterisk"
    }, {
        code: "0x30, 0x20E3",
        groupID: null,
        name: "Keycap Digit Zero"
    }, {
        code: "0x31, 0x20E3",
        groupID: null,
        name: "Keycap Digit One"
    }, {
        code: "0x32, 0x20E3",
        groupID: null,
        name: "Keycap Digit Two"
    }, {
        code: "0x33, 0x20E3",
        groupID: null,
        name: "Keycap Digit Three"
    }, {
        code: "0x34, 0x20E3",
        groupID: null,
        name: "Keycap Digit Four"
    }, {
        code: "0x35, 0x20E3",
        groupID: null,
        name: "Keycap Digit Five"
    }, {
        code: "0x36, 0x20E3",
        groupID: null,
        name: "Keycap Digit Six"
    }, {
        code: "0x37, 0x20E3",
        groupID: null,
        name: "Keycap Digit Seven"
    }, {
        code: "0x38, 0x20E3",
        groupID: null,
        name: "Keycap Digit Eight"
    }, {
        code: "0x39, 0x20E3",
        groupID: null,
        name: "Keycap Digit Nine"
    }, {
        code: "0x1F51F",
        groupID: null,
        name: "Keycap: 10"
    }, {
        code: "0x1F520",
        groupID: null,
        name: "Input Latin Uppercase"
    }, {
        code: "0x1F521",
        groupID: null,
        name: "Input Latin Lowercase"
    }, {
        code: "0x1F522",
        groupID: null,
        name: "Input Numbers"
    }, {
        code: "0x1F523",
        groupID: null,
        name: "Input Symbols"
    }, {
        code: "0x1F524",
        groupID: null,
        name: "Input Latin Letters"
    }, {
        code: "0x1F170",
        groupID: null,
        name: "A Button (Blood Type)"
    }, {
        code: "0x1F18E",
        groupID: null,
        name: "AB Button (Blood Type)"
    }, {
        code: "0x1F171",
        groupID: null,
        name: "B Button (Blood Type)"
    }, {
        code: "0x1F191",
        groupID: null,
        name: "CL Button"
    }, {
        code: "0x1F192",
        groupID: null,
        name: "Cool Button"
    }, {
        code: "0x1F193",
        groupID: null,
        name: "Free Button"
    }, {
        code: "0x2139",
        groupID: null,
        name: "Information"
    }, {
        code: "0x1F194",
        groupID: null,
        name: "ID Button"
    }, {
        code: "0x24C2",
        groupID: null,
        name: "Circled M"
    }, {
        code: "0x1F195",
        groupID: null,
        name: "New Button"
    }, {
        code: "0x1F196",
        groupID: null,
        name: "NG Button"
    }, {
        code: "0x1F17E",
        groupID: null,
        name: "O Button (Blood Type)"
    }, {
        code: "0x1F197",
        groupID: null,
        name: "OK Button"
    }, {
        code: "0x1F17F",
        groupID: null,
        name: "P Button"
    }, {
        code: "0x1F198",
        groupID: null,
        name: "SOS Button"
    }, {
        code: "0x1F199",
        groupID: null,
        name: "Up! Button"
    }, {
        code: "0x1F19A",
        groupID: null,
        name: "Vs Button"
    }, {
        code: "0x1F201",
        groupID: null,
        name: "Japanese “Here” Button"
    }, {
        code: "0x1F202",
        groupID: null,
        name: "Japanese “Service Charge” Button"
    }, {
        code: "0x1F237",
        groupID: null,
        name: "Japanese “Monthly Amount” Button"
    }, {
        code: "0x1F236",
        groupID: null,
        name: "Japanese “Not Free of Charge” Button"
    }, {
        code: "0x1F22F",
        groupID: null,
        name: "Japanese “Reserved” Button"
    }, {
        code: "0x1F250",
        groupID: null,
        name: "Japanese “Bargain” Button"
    }, {
        code: "0x1F239",
        groupID: null,
        name: "Japanese “Discount” Button"
    }, {
        code: "0x1F21A",
        groupID: null,
        name: "Japanese “Free of Charge” Button"
    }, {
        code: "0x1F232",
        groupID: null,
        name: "Japanese “Prohibited” Button"
    }, {
        code: "0x1F251",
        groupID: null,
        name: "Japanese “Acceptable” Button"
    }, {
        code: "0x1F238",
        groupID: null,
        name: "Japanese “Application” Button"
    }, {
        code: "0x1F234",
        groupID: null,
        name: "Japanese “Passing Grade” Button"
    }, {
        code: "0x1F233",
        groupID: null,
        name: "Japanese “Vacancy” Button"
    }, {
        code: "0x3297",
        groupID: null,
        name: "Japanese “Congratulations” Button"
    }, {
        code: "0x3299",
        groupID: null,
        name: "Japanese “Secret” Button"
    }, {
        code: "0x1F23A",
        groupID: null,
        name: "Japanese “Open for Business” Button"
    }, {
        code: "0x1F235",
        groupID: null,
        name: "Japanese “No Vacancy” Button"
    }, {
        code: "0x1F534",
        groupID: null,
        name: "Red Circle"
    }, {
        code: "0x1F7E0",
        groupID: null,
        name: "Orange Circle"
    }, {
        code: "0x1F7E1",
        groupID: null,
        name: "Yellow Circle"
    }, {
        code: "0x1F7E2",
        groupID: null,
        name: "Green Circle"
    }, {
        code: "0x1F535",
        groupID: null,
        name: "Blue Circle"
    }, {
        code: "0x1F7E3",
        groupID: null,
        name: "Purple Circle"
    }, {
        code: "0x1F7E4",
        groupID: null,
        name: "Brown Circle"
    }, {
        code: "0x26AB",
        groupID: null,
        name: "Black Circle"
    }, {
        code: "0x26AA",
        groupID: null,
        name: "White Circle"
    }, {
        code: "0x1F7E5",
        groupID: null,
        name: "Red Square"
    }, {
        code: "0x1F7E7",
        groupID: null,
        name: "Orange Square"
    }, {
        code: "0x1F7E8",
        groupID: null,
        name: "Yellow Square"
    }, {
        code: "0x1F7E9",
        groupID: null,
        name: "Green Square"
    }, {
        code: "0x1F7E6",
        groupID: null,
        name: "Blue Square"
    }, {
        code: "0x1F7EA",
        groupID: null,
        name: "Purple Square"
    }, {
        code: "0x1F7EB",
        groupID: null,
        name: "Brown Square"
    }, {
        code: "0x2B1B",
        groupID: null,
        name: "Black Large Square"
    }, {
        code: "0x2B1C",
        groupID: null,
        name: "White Large Square"
    }, {
        code: "0x25FC",
        groupID: null,
        name: "Black Medium Square"
    }, {
        code: "0x25FB",
        groupID: null,
        name: "White Medium Square"
    }, {
        code: "0x25FE",
        groupID: null,
        name: "Black Medium-Small Square"
    }, {
        code: "0x25FD",
        groupID: null,
        name: "White Medium-Small Square"
    }, {
        code: "0x25AA",
        groupID: null,
        name: "Black Small Square"
    }, {
        code: "0x25AB",
        groupID: null,
        name: "White Small Square"
    }, {
        code: "0x1F536",
        groupID: null,
        name: "Large Orange Diamond"
    }, {
        code: "0x1F537",
        groupID: null,
        name: "Large Blue Diamond"
    }, {
        code: "0x1F538",
        groupID: null,
        name: "Small Orange Diamond"
    }, {
        code: "0x1F539",
        groupID: null,
        name: "Small Blue Diamond"
    }, {
        code: "0x1F53A",
        groupID: null,
        name: "Red Triangle Pointed Up"
    }, {
        code: "0x1F53B",
        groupID: null,
        name: "Red Triangle Pointed Down"
    }, {
        code: "0x1F4A0",
        groupID: null,
        name: "Diamond With a Dot"
    }, {
        code: "0x1F518",
        groupID: null,
        name: "Radio Button"
    }, {
        code: "0x1F533",
        groupID: null,
        name: "White Square Button"
    }, {
        code: "0x1F532",
        groupID: null,
        name: "Black Square Button"
    }, {
        code: "0x1F3C1",
        groupID: null,
        name: "Chequered Flag"
    }, {
        code: "0x1F6A9",
        groupID: null,
        name: "Triangular Flag"
    }, {
        code: "0x1F38C",
        groupID: null,
        name: "Crossed Flags"
    }, {
        code: "0x1F3F4",
        groupID: null,
        name: "Black Flag"
    }, {
        code: "0x1F3F3",
        groupID: null,
        name: "White Flag"
    }, {
        code: "0x1F3F3, 0x200D, 0x1F308",
        groupID: null,
        name: "Rainbow Flag"
    }, {
        code: "0x1F3F3, 0x200D, 0x26A7",
        groupID: null,
        name: "Transgender Flag"
    }, {
        code: "0x1F3F4, 0x200D, 0x2620",
        groupID: null,
        name: "Pirate Flag"
    }, {
        code: "0x1F1E6, 0x1F1E8",
        groupID: null,
        name: "Flag: Ascension Island"
    }, {
        code: "0x1F1E6, 0x1F1E9",
        groupID: null,
        name: "Flag: Andorra"
    }, {
        code: "0x1F1E6, 0x1F1EA",
        groupID: null,
        name: "Flag: United Arab Emirates"
    }, {
        code: "0x1F1E6, 0x1F1EB",
        groupID: null,
        name: "Flag: Afghanistan"
    }, {
        code: "0x1F1E6, 0x1F1EC",
        groupID: null,
        name: "Flag: Antigua & Barbuda"
    }, {
        code: "0x1F1E6, 0x1F1EE",
        groupID: null,
        name: "Flag: Anguilla"
    }, {
        code: "0x1F1E6, 0x1F1F1",
        groupID: null,
        name: "Flag: Albania"
    }, {
        code: "0x1F1E6, 0x1F1F2",
        groupID: null,
        name: "Flag: Armenia"
    }, {
        code: "0x1F1E6, 0x1F1F4",
        groupID: null,
        name: "Flag: Angola"
    }, {
        code: "0x1F1E6, 0x1F1F6",
        groupID: null,
        name: "Flag: Antarctica"
    }, {
        code: "0x1F1E6, 0x1F1F7",
        groupID: null,
        name: "Flag: Argentina"
    }, {
        code: "0x1F1E6, 0x1F1F8",
        groupID: null,
        name: "Flag: American Samoa"
    }, {
        code: "0x1F1E6, 0x1F1F9",
        groupID: null,
        name: "Flag: Austria"
    }, {
        code: "0x1F1E6, 0x1F1FA",
        groupID: null,
        name: "Flag: Australia"
    }, {
        code: "0x1F1E6, 0x1F1FC",
        groupID: null,
        name: "Flag: Aruba"
    }, {
        code: "0x1F1E6, 0x1F1FD",
        groupID: null,
        name: "Flag: Åland Islands"
    }, {
        code: "0x1F1E6, 0x1F1FF",
        groupID: null,
        name: "Flag: Azerbaijan"
    }, {
        code: "0x1F1E7, 0x1F1E6",
        groupID: null,
        name: "Flag: Bosnia & Herzegovina"
    }, {
        code: "0x1F1E7, 0x1F1E7",
        groupID: null,
        name: "Flag: Barbados"
    }, {
        code: "0x1F1E7, 0x1F1E9",
        groupID: null,
        name: "Flag: Bangladesh"
    }, {
        code: "0x1F1E7, 0x1F1EA",
        groupID: null,
        name: "Flag: Belgium"
    }, {
        code: "0x1F1E7, 0x1F1EB",
        groupID: null,
        name: "Flag: Burkina Faso"
    }, {
        code: "0x1F1E7, 0x1F1EC",
        groupID: null,
        name: "Flag: Bulgaria"
    }, {
        code: "0x1F1E7, 0x1F1ED",
        groupID: null,
        name: "Flag: Bahrain"
    }, {
        code: "0x1F1E7, 0x1F1EE",
        groupID: null,
        name: "Flag: Burundi"
    }, {
        code: "0x1F1E7, 0x1F1EF",
        groupID: null,
        name: "Flag: Benin"
    }, {
        code: "0x1F1E7, 0x1F1F1",
        groupID: null,
        name: "Flag: St. Barthélemy"
    }, {
        code: "0x1F1E7, 0x1F1F2",
        groupID: null,
        name: "Flag: Bermuda"
    }, {
        code: "0x1F1E7, 0x1F1F3",
        groupID: null,
        name: "Flag: Brunei"
    }, {
        code: "0x1F1E7, 0x1F1F4",
        groupID: null,
        name: "Flag: Bolivia"
    }, {
        code: "0x1F1E7, 0x1F1F6",
        groupID: null,
        name: "Flag: Caribbean Netherlands"
    }, {
        code: "0x1F1E7, 0x1F1F7",
        groupID: null,
        name: "Flag: Brazil"
    }, {
        code: "0x1F1E7, 0x1F1F8",
        groupID: null,
        name: "Flag: Bahamas"
    }, {
        code: "0x1F1E7, 0x1F1F9",
        groupID: null,
        name: "Flag: Bhutan"
    }, {
        code: "0x1F1E7, 0x1F1FB",
        groupID: null,
        name: "Flag: Bouvet Island"
    }, {
        code: "0x1F1E7, 0x1F1FC",
        groupID: null,
        name: "Flag: Botswana"
    }, {
        code: "0x1F1E7, 0x1F1FE",
        groupID: null,
        name: "Flag: Belarus"
    }, {
        code: "0x1F1E7, 0x1F1FF",
        groupID: null,
        name: "Flag: Belize"
    }, {
        code: "0x1F1E8, 0x1F1E6",
        groupID: null,
        name: "Flag: Canada"
    }, {
        code: "0x1F1E8, 0x1F1E8",
        groupID: null,
        name: "Flag: Cocos (Keeling) Islands"
    }, {
        code: "0x1F1E8, 0x1F1E9",
        groupID: null,
        name: "Flag: Congo - Kinshasa"
    }, {
        code: "0x1F1E8, 0x1F1EB",
        groupID: null,
        name: "Flag: Central African Republic"
    }, {
        code: "0x1F1E8, 0x1F1EC",
        groupID: null,
        name: "Flag: Congo - Brazzaville"
    }, {
        code: "0x1F1E8, 0x1F1ED",
        groupID: null,
        name: "Flag: Switzerland"
    }, {
        code: "0x1F1E8, 0x1F1EE",
        groupID: null,
        name: "Flag: Côte d’Ivoire"
    }, {
        code: "0x1F1E8, 0x1F1F0",
        groupID: null,
        name: "Flag: Cook Islands"
    }, {
        code: "0x1F1E8, 0x1F1F1",
        groupID: null,
        name: "Flag: Chile"
    }, {
        code: "0x1F1E8, 0x1F1F2",
        groupID: null,
        name: "Flag: Cameroon"
    }, {
        code: "0x1F1E8, 0x1F1F3",
        groupID: null,
        name: "Flag: China"
    }, {
        code: "0x1F1E8, 0x1F1F4",
        groupID: null,
        name: "Flag: Colombia"
    }, {
        code: "0x1F1E8, 0x1F1F5",
        groupID: null,
        name: "Flag: Clipperton Island"
    }, {
        code: "0x1F1E8, 0x1F1F7",
        groupID: null,
        name: "Flag: Costa Rica"
    }, {
        code: "0x1F1E8, 0x1F1FA",
        groupID: null,
        name: "Flag: Cuba"
    }, {
        code: "0x1F1E8, 0x1F1FB",
        groupID: null,
        name: "Flag: Cape Verde"
    }, {
        code: "0x1F1E8, 0x1F1FC",
        groupID: null,
        name: "Flag: Curaçao"
    }, {
        code: "0x1F1E8, 0x1F1FD",
        groupID: null,
        name: "Flag: Christmas Island"
    }, {
        code: "0x1F1E8, 0x1F1FE",
        groupID: null,
        name: "Flag: Cyprus"
    }, {
        code: "0x1F1E8, 0x1F1FF",
        groupID: null,
        name: "Flag: Czechia"
    }, {
        code: "0x1F1E9, 0x1F1EA",
        groupID: null,
        name: "Flag: Germany"
    }, {
        code: "0x1F1E9, 0x1F1EC",
        groupID: null,
        name: "Flag: Diego Garcia"
    }, {
        code: "0x1F1E9, 0x1F1EF",
        groupID: null,
        name: "Flag: Djibouti"
    }, {
        code: "0x1F1E9, 0x1F1F0",
        groupID: null,
        name: "Flag: Denmark"
    }, {
        code: "0x1F1E9, 0x1F1F2",
        groupID: null,
        name: "Flag: Dominica"
    }, {
        code: "0x1F1E9, 0x1F1F4",
        groupID: null,
        name: "Flag: Dominican Republic"
    }, {
        code: "0x1F1E9, 0x1F1FF",
        groupID: null,
        name: "Flag: Algeria"
    }, {
        code: "0x1F1EA, 0x1F1E6",
        groupID: null,
        name: "Flag: Ceuta & Melilla"
    }, {
        code: "0x1F1EA, 0x1F1E8",
        groupID: null,
        name: "Flag: Ecuador"
    }, {
        code: "0x1F1EA, 0x1F1EA",
        groupID: null,
        name: "Flag: Estonia"
    }, {
        code: "0x1F1EA, 0x1F1EC",
        groupID: null,
        name: "Flag: Egypt"
    }, {
        code: "0x1F1EA, 0x1F1ED",
        groupID: null,
        name: "Flag: Western Sahara"
    }, {
        code: "0x1F1EA, 0x1F1F7",
        groupID: null,
        name: "Flag: Eritrea"
    }, {
        code: "0x1F1EA, 0x1F1F8",
        groupID: null,
        name: "Flag: Spain"
    }, {
        code: "0x1F1EA, 0x1F1F9",
        groupID: null,
        name: "Flag: Ethiopia"
    }, {
        code: "0x1F1EA, 0x1F1FA",
        groupID: null,
        name: "Flag: European Union"
    }, {
        code: "0x1F1EB, 0x1F1EE",
        groupID: null,
        name: "Flag: Finland"
    }, {
        code: "0x1F1EB, 0x1F1EF",
        groupID: null,
        name: "Flag: Fiji"
    }, {
        code: "0x1F1EB, 0x1F1F0",
        groupID: null,
        name: "Flag: Falkland Islands"
    }, {
        code: "0x1F1EB, 0x1F1F2",
        groupID: null,
        name: "Flag: Micronesia"
    }, {
        code: "0x1F1EB, 0x1F1F4",
        groupID: null,
        name: "Flag: Faroe Islands"
    }, {
        code: "0x1F1EB, 0x1F1F7",
        groupID: null,
        name: "Flag: France"
    }, {
        code: "0x1F1EC, 0x1F1E6",
        groupID: null,
        name: "Flag: Gabon"
    }, {
        code: "0x1F1EC, 0x1F1E7",
        groupID: null,
        name: "Flag: United Kingdom"
    }, {
        code: "0x1F1EC, 0x1F1E9",
        groupID: null,
        name: "Flag: Grenada"
    }, {
        code: "0x1F1EC, 0x1F1EA",
        groupID: null,
        name: "Flag: Georgia"
    }, {
        code: "0x1F1EC, 0x1F1EB",
        groupID: null,
        name: "Flag: French Guiana"
    }, {
        code: "0x1F1EC, 0x1F1EC",
        groupID: null,
        name: "Flag: Guernsey"
    }, {
        code: "0x1F1EC, 0x1F1ED",
        groupID: null,
        name: "Flag: Ghana"
    }, {
        code: "0x1F1EC, 0x1F1EE",
        groupID: null,
        name: "Flag: Gibraltar"
    }, {
        code: "0x1F1EC, 0x1F1F1",
        groupID: null,
        name: "Flag: Greenland"
    }, {
        code: "0x1F1EC, 0x1F1F2",
        groupID: null,
        name: "Flag: Gambia"
    }, {
        code: "0x1F1EC, 0x1F1F3",
        groupID: null,
        name: "Flag: Guinea"
    }, {
        code: "0x1F1EC, 0x1F1F5",
        groupID: null,
        name: "Flag: Guadeloupe"
    }, {
        code: "0x1F1EC, 0x1F1F6",
        groupID: null,
        name: "Flag: Equatorial Guinea"
    }, {
        code: "0x1F1EC, 0x1F1F7",
        groupID: null,
        name: "Flag: Greece"
    }, {
        code: "0x1F1EC, 0x1F1F8",
        groupID: null,
        name: "Flag: South Georgia & South Sandwich Islands"
    }, {
        code: "0x1F1EC, 0x1F1F9",
        groupID: null,
        name: "Flag: Guatemala"
    }, {
        code: "0x1F1EC, 0x1F1FA",
        groupID: null,
        name: "Flag: Guam"
    }, {
        code: "0x1F1EC, 0x1F1FC",
        groupID: null,
        name: "Flag: Guinea-Bissau"
    }, {
        code: "0x1F1EC, 0x1F1FE",
        groupID: null,
        name: "Flag: Guyana"
    }, {
        code: "0x1F1ED, 0x1F1F0",
        groupID: null,
        name: "Flag: Hong Kong SAR China"
    }, {
        code: "0x1F1ED, 0x1F1F2",
        groupID: null,
        name: "Flag: Heard & McDonald Islands"
    }, {
        code: "0x1F1ED, 0x1F1F3",
        groupID: null,
        name: "Flag: Honduras"
    }, {
        code: "0x1F1ED, 0x1F1F7",
        groupID: null,
        name: "Flag: Croatia"
    }, {
        code: "0x1F1ED, 0x1F1F9",
        groupID: null,
        name: "Flag: Haiti"
    }, {
        code: "0x1F1ED, 0x1F1FA",
        groupID: null,
        name: "Flag: Hungary"
    }, {
        code: "0x1F1EE, 0x1F1E8",
        groupID: null,
        name: "Flag: Canary Islands"
    }, {
        code: "0x1F1EE, 0x1F1E9",
        groupID: null,
        name: "Flag: Indonesia"
    }, {
        code: "0x1F1EE, 0x1F1EA",
        groupID: null,
        name: "Flag: Ireland"
    }, {
        code: "0x1F1EE, 0x1F1F1",
        groupID: null,
        name: "Flag: Israel"
    }, {
        code: "0x1F1EE, 0x1F1F2",
        groupID: null,
        name: "Flag: Isle of Man"
    }, {
        code: "0x1F1EE, 0x1F1F3",
        groupID: null,
        name: "Flag: India"
    }, {
        code: "0x1F1EE, 0x1F1F4",
        groupID: null,
        name: "Flag: British Indian Ocean Territory"
    }, {
        code: "0x1F1EE, 0x1F1F6",
        groupID: null,
        name: "Flag: Iraq"
    }, {
        code: "0x1F1EE, 0x1F1F7",
        groupID: null,
        name: "Flag: Iran"
    }, {
        code: "0x1F1EE, 0x1F1F8",
        groupID: null,
        name: "Flag: Iceland"
    }, {
        code: "0x1F1EE, 0x1F1F9",
        groupID: null,
        name: "Flag: Italy"
    }, {
        code: "0x1F1EF, 0x1F1EA",
        groupID: null,
        name: "Flag: Jersey"
    }, {
        code: "0x1F1EF, 0x1F1F2",
        groupID: null,
        name: "Flag: Jamaica"
    }, {
        code: "0x1F1EF, 0x1F1F4",
        groupID: null,
        name: "Flag: Jordan"
    }, {
        code: "0x1F1EF, 0x1F1F5",
        groupID: null,
        name: "Flag: Japan"
    }, {
        code: "0x1F1F0, 0x1F1EA",
        groupID: null,
        name: "Flag: Kenya"
    }, {
        code: "0x1F1F0, 0x1F1EC",
        groupID: null,
        name: "Flag: Kyrgyzstan"
    }, {
        code: "0x1F1F0, 0x1F1ED",
        groupID: null,
        name: "Flag: Cambodia"
    }, {
        code: "0x1F1F0, 0x1F1EE",
        groupID: null,
        name: "Flag: Kiribati"
    }, {
        code: "0x1F1F0, 0x1F1F2",
        groupID: null,
        name: "Flag: Comoros"
    }, {
        code: "0x1F1F0, 0x1F1F3",
        groupID: null,
        name: "Flag: St. Kitts & Nevis"
    }, {
        code: "0x1F1F0, 0x1F1F5",
        groupID: null,
        name: "Flag: North Korea"
    }, {
        code: "0x1F1F0, 0x1F1F7",
        groupID: null,
        name: "Flag: South Korea"
    }, {
        code: "0x1F1F0, 0x1F1FC",
        groupID: null,
        name: "Flag: Kuwait"
    }, {
        code: "0x1F1F0, 0x1F1FE",
        groupID: null,
        name: "Flag: Cayman Islands"
    }, {
        code: "0x1F1F0, 0x1F1FF",
        groupID: null,
        name: "Flag: Kazakhstan"
    }, {
        code: "0x1F1F1, 0x1F1E6",
        groupID: null,
        name: "Flag: Laos"
    }, {
        code: "0x1F1F1, 0x1F1E7",
        groupID: null,
        name: "Flag: Lebanon"
    }, {
        code: "0x1F1F1, 0x1F1E8",
        groupID: null,
        name: "Flag: St. Lucia"
    }, {
        code: "0x1F1F1, 0x1F1EE",
        groupID: null,
        name: "Flag: Liechtenstein"
    }, {
        code: "0x1F1F1, 0x1F1F0",
        groupID: null,
        name: "Flag: Sri Lanka"
    }, {
        code: "0x1F1F1, 0x1F1F7",
        groupID: null,
        name: "Flag: Liberia"
    }, {
        code: "0x1F1F1, 0x1F1F8",
        groupID: null,
        name: "Flag: Lesotho"
    }, {
        code: "0x1F1F1, 0x1F1F9",
        groupID: null,
        name: "Flag: Lithuania"
    }, {
        code: "0x1F1F1, 0x1F1FA",
        groupID: null,
        name: "Flag: Luxembourg"
    }, {
        code: "0x1F1F1, 0x1F1FB",
        groupID: null,
        name: "Flag: Latvia"
    }, {
        code: "0x1F1F1, 0x1F1FE",
        groupID: null,
        name: "Flag: Libya"
    }, {
        code: "0x1F1F2, 0x1F1E6",
        groupID: null,
        name: "Flag: Morocco"
    }, {
        code: "0x1F1F2, 0x1F1E8",
        groupID: null,
        name: "Flag: Monaco"
    }, {
        code: "0x1F1F2, 0x1F1E9",
        groupID: null,
        name: "Flag: Moldova"
    }, {
        code: "0x1F1F2, 0x1F1EA",
        groupID: null,
        name: "Flag: Montenegro"
    }, {
        code: "0x1F1F2, 0x1F1EB",
        groupID: null,
        name: "Flag: St. Martin"
    }, {
        code: "0x1F1F2, 0x1F1EC",
        groupID: null,
        name: "Flag: Madagascar"
    }, {
        code: "0x1F1F2, 0x1F1ED",
        groupID: null,
        name: "Flag: Marshall Islands"
    }, {
        code: "0x1F1F2, 0x1F1F0",
        groupID: null,
        name: "Flag: North Macedonia"
    }, {
        code: "0x1F1F2, 0x1F1F1",
        groupID: null,
        name: "Flag: Mali"
    }, {
        code: "0x1F1F2, 0x1F1F2",
        groupID: null,
        name: "Flag: Myanmar (Burma)"
    }, {
        code: "0x1F1F2, 0x1F1F3",
        groupID: null,
        name: "Flag: Mongolia"
    }, {
        code: "0x1F1F2, 0x1F1F4",
        groupID: null,
        name: "Flag: Macao Sar China"
    }, {
        code: "0x1F1F2, 0x1F1F5",
        groupID: null,
        name: "Flag: Northern Mariana Islands"
    }, {
        code: "0x1F1F2, 0x1F1F6",
        groupID: null,
        name: "Flag: Martinique"
    }, {
        code: "0x1F1F2, 0x1F1F7",
        groupID: null,
        name: "Flag: Mauritania"
    }, {
        code: "0x1F1F2, 0x1F1F8",
        groupID: null,
        name: "Flag: Montserrat"
    }, {
        code: "0x1F1F2, 0x1F1F9",
        groupID: null,
        name: "Flag: Malta"
    }, {
        code: "0x1F1F2, 0x1F1FA",
        groupID: null,
        name: "Flag: Mauritius"
    }, {
        code: "0x1F1F2, 0x1F1FB",
        groupID: null,
        name: "Flag: Maldives"
    }, {
        code: "0x1F1F2, 0x1F1FC",
        groupID: null,
        name: "Flag: Malawi"
    }, {
        code: "0x1F1F2, 0x1F1FD",
        groupID: null,
        name: "Flag: Mexico"
    }, {
        code: "0x1F1F2, 0x1F1FE",
        groupID: null,
        name: "Flag: Malaysia"
    }, {
        code: "0x1F1F2, 0x1F1FF",
        groupID: null,
        name: "Flag: Mozambique"
    }, {
        code: "0x1F1F3, 0x1F1E6",
        groupID: null,
        name: "Flag: Namibia"
    }, {
        code: "0x1F1F3, 0x1F1E8",
        groupID: null,
        name: "Flag: New Caledonia"
    }, {
        code: "0x1F1F3, 0x1F1EA",
        groupID: null,
        name: "Flag: Niger"
    }, {
        code: "0x1F1F3, 0x1F1EB",
        groupID: null,
        name: "Flag: Norfolk Island"
    }, {
        code: "0x1F1F3, 0x1F1EC",
        groupID: null,
        name: "Flag: Nigeria"
    }, {
        code: "0x1F1F3, 0x1F1EE",
        groupID: null,
        name: "Flag: Nicaragua"
    }, {
        code: "0x1F1F3, 0x1F1F1",
        groupID: null,
        name: "Flag: Netherlands"
    }, {
        code: "0x1F1F3, 0x1F1F4",
        groupID: null,
        name: "Flag: Norway"
    }, {
        code: "0x1F1F3, 0x1F1F5",
        groupID: null,
        name: "Flag: Nepal"
    }, {
        code: "0x1F1F3, 0x1F1F7",
        groupID: null,
        name: "Flag: Nauru"
    }, {
        code: "0x1F1F3, 0x1F1FA",
        groupID: null,
        name: "Flag: Niue"
    }, {
        code: "0x1F1F3, 0x1F1FF",
        groupID: null,
        name: "Flag: New Zealand"
    }, {
        code: "0x1F1F4, 0x1F1F2",
        groupID: null,
        name: "Flag: Oman"
    }, {
        code: "0x1F1F5, 0x1F1E6",
        groupID: null,
        name: "Flag: Panama"
    }, {
        code: "0x1F1F5, 0x1F1EA",
        groupID: null,
        name: "Flag: Peru"
    }, {
        code: "0x1F1F5, 0x1F1EB",
        groupID: null,
        name: "Flag: French Polynesia"
    }, {
        code: "0x1F1F5, 0x1F1EC",
        groupID: null,
        name: "Flag: Papua New Guinea"
    }, {
        code: "0x1F1F5, 0x1F1ED",
        groupID: null,
        name: "Flag: Philippines"
    }, {
        code: "0x1F1F5, 0x1F1F0",
        groupID: null,
        name: "Flag: Pakistan"
    }, {
        code: "0x1F1F5, 0x1F1F1",
        groupID: null,
        name: "Flag: Poland"
    }, {
        code: "0x1F1F5, 0x1F1F2",
        groupID: null,
        name: "Flag: St. Pierre & Miquelon"
    }, {
        code: "0x1F1F5, 0x1F1F3",
        groupID: null,
        name: "Flag: Pitcairn Islands"
    }, {
        code: "0x1F1F5, 0x1F1F7",
        groupID: null,
        name: "Flag: Puerto Rico"
    }, {
        code: "0x1F1F5, 0x1F1F8",
        groupID: null,
        name: "Flag: Palestinian Territories"
    }, {
        code: "0x1F1F5, 0x1F1F9",
        groupID: null,
        name: "Flag: Portugal"
    }, {
        code: "0x1F1F5, 0x1F1FC",
        groupID: null,
        name: "Flag: Palau"
    }, {
        code: "0x1F1F5, 0x1F1FE",
        groupID: null,
        name: "Flag: Paraguay"
    }, {
        code: "0x1F1F6, 0x1F1E6",
        groupID: null,
        name: "Flag: Qatar"
    }, {
        code: "0x1F1F7, 0x1F1EA",
        groupID: null,
        name: "Flag: Réunion"
    }, {
        code: "0x1F1F7, 0x1F1F4",
        groupID: null,
        name: "Flag: Romania"
    }, {
        code: "0x1F1F7, 0x1F1F8",
        groupID: null,
        name: "Flag: Serbia"
    }, {
        code: "0x1F1F7, 0x1F1FA",
        groupID: null,
        name: "Flag: Russia"
    }, {
        code: "0x1F1F7, 0x1F1FC",
        groupID: null,
        name: "Flag: Rwanda"
    }, {
        code: "0x1F1F8, 0x1F1E6",
        groupID: null,
        name: "Flag: Saudi Arabia"
    }, {
        code: "0x1F1F8, 0x1F1E7",
        groupID: null,
        name: "Flag: Solomon Islands"
    }, {
        code: "0x1F1F8, 0x1F1E8",
        groupID: null,
        name: "Flag: Seychelles"
    }, {
        code: "0x1F1F8, 0x1F1E9",
        groupID: null,
        name: "Flag: Sudan"
    }, {
        code: "0x1F1F8, 0x1F1EA",
        groupID: null,
        name: "Flag: Sweden"
    }, {
        code: "0x1F1F8, 0x1F1EC",
        groupID: null,
        name: "Flag: Singapore"
    }, {
        code: "0x1F1F8, 0x1F1ED",
        groupID: null,
        name: "Flag: St. Helena"
    }, {
        code: "0x1F1F8, 0x1F1EE",
        groupID: null,
        name: "Flag: Slovenia"
    }, {
        code: "0x1F1F8, 0x1F1EF",
        groupID: null,
        name: "Flag: Svalbard & Jan Mayen"
    }, {
        code: "0x1F1F8, 0x1F1F0",
        groupID: null,
        name: "Flag: Slovakia"
    }, {
        code: "0x1F1F8, 0x1F1F1",
        groupID: null,
        name: "Flag: Sierra Leone"
    }, {
        code: "0x1F1F8, 0x1F1F2",
        groupID: null,
        name: "Flag: San Marino"
    }, {
        code: "0x1F1F8, 0x1F1F3",
        groupID: null,
        name: "Flag: Senegal"
    }, {
        code: "0x1F1F8, 0x1F1F4",
        groupID: null,
        name: "Flag: Somalia"
    }, {
        code: "0x1F1F8, 0x1F1F7",
        groupID: null,
        name: "Flag: Suriname"
    }, {
        code: "0x1F1F8, 0x1F1F8",
        groupID: null,
        name: "Flag: South Sudan"
    }, {
        code: "0x1F1F8, 0x1F1F9",
        groupID: null,
        name: "Flag: São Tomé & Príncipe"
    }, {
        code: "0x1F1F8, 0x1F1FB",
        groupID: null,
        name: "Flag: El Salvador"
    }, {
        code: "0x1F1F8, 0x1F1FD",
        groupID: null,
        name: "Flag: Sint Maarten"
    }, {
        code: "0x1F1F8, 0x1F1FE",
        groupID: null,
        name: "Flag: Syria"
    }, {
        code: "0x1F1F8, 0x1F1FF",
        groupID: null,
        name: "Flag: Eswatini"
    }, {
        code: "0x1F1F9, 0x1F1E6",
        groupID: null,
        name: "Flag: Tristan Da Cunha"
    }, {
        code: "0x1F1F9, 0x1F1E8",
        groupID: null,
        name: "Flag: Turks & Caicos Islands"
    }, {
        code: "0x1F1F9, 0x1F1E9",
        groupID: null,
        name: "Flag: Chad"
    }, {
        code: "0x1F1F9, 0x1F1EB",
        groupID: null,
        name: "Flag: French Southern Territories"
    }, {
        code: "0x1F1F9, 0x1F1EC",
        groupID: null,
        name: "Flag: Togo"
    }, {
        code: "0x1F1F9, 0x1F1ED",
        groupID: null,
        name: "Flag: Thailand"
    }, {
        code: "0x1F1F9, 0x1F1EF",
        groupID: null,
        name: "Flag: Tajikistan"
    }, {
        code: "0x1F1F9, 0x1F1F0",
        groupID: null,
        name: "Flag: Tokelau"
    }, {
        code: "0x1F1F9, 0x1F1F1",
        groupID: null,
        name: "Flag: Timor-Leste"
    }, {
        code: "0x1F1F9, 0x1F1F2",
        groupID: null,
        name: "Flag: Turkmenistan"
    }, {
        code: "0x1F1F9, 0x1F1F3",
        groupID: null,
        name: "Flag: Tunisia"
    }, {
        code: "0x1F1F9, 0x1F1F4",
        groupID: null,
        name: "Flag: Tonga"
    }, {
        code: "0x1F1F9, 0x1F1F7",
        groupID: null,
        name: "Flag: Turkey"
    }, {
        code: "0x1F1F9, 0x1F1F9",
        groupID: null,
        name: "Flag: Trinidad & Tobago"
    }, {
        code: "0x1F1F9, 0x1F1FB",
        groupID: null,
        name: "Flag: Tuvalu"
    }, {
        code: "0x1F1F9, 0x1F1FC",
        groupID: null,
        name: "Flag: Taiwan"
    }, {
        code: "0x1F1F9, 0x1F1FF",
        groupID: null,
        name: "Flag: Tanzania"
    }, {
        code: "0x1F1FA, 0x1F1E6",
        groupID: null,
        name: "Flag: Ukraine"
    }, {
        code: "0x1F1FA, 0x1F1EC",
        groupID: null,
        name: "Flag: Uganda"
    }, {
        code: "0x1F1FA, 0x1F1F2",
        groupID: null,
        name: "Flag: U.S. Outlying Islands"
    }, {
        code: "0x1F1FA, 0x1F1F3",
        groupID: null,
        name: "Flag: United Nations"
    }, {
        code: "0x1F1FA, 0x1F1F8",
        groupID: null,
        name: "Flag: United States"
    }, {
        code: "0x1F1FA, 0x1F1FE",
        groupID: null,
        name: "Flag: Uruguay"
    }, {
        code: "0x1F1FA, 0x1F1FF",
        groupID: null,
        name: "Flag: Uzbekistan"
    }, {
        code: "0x1F1FB, 0x1F1E6",
        groupID: null,
        name: "Flag: Vatican City"
    }, {
        code: "0x1F1FB, 0x1F1E8",
        groupID: null,
        name: "Flag: St. Vincent & Grenadines"
    }, {
        code: "0x1F1FB, 0x1F1EA",
        groupID: null,
        name: "Flag: Venezuela"
    }, {
        code: "0x1F1FB, 0x1F1EC",
        groupID: null,
        name: "Flag: British Virgin Islands"
    }, {
        code: "0x1F1FB, 0x1F1EE",
        groupID: null,
        name: "Flag: U.S. Virgin Islands"
    }, {
        code: "0x1F1FB, 0x1F1F3",
        groupID: null,
        name: "Flag: Vietnam"
    }, {
        code: "0x1F1FB, 0x1F1FA",
        groupID: null,
        name: "Flag: Vanuatu"
    }, {
        code: "0x1F1FC, 0x1F1EB",
        groupID: null,
        name: "Flag: Wallis & Futuna"
    }, {
        code: "0x1F1FC, 0x1F1F8",
        groupID: null,
        name: "Flag: Samoa"
    }, {
        code: "0x1F1FD, 0x1F1F0",
        groupID: null,
        name: "Flag: Kosovo"
    }, {
        code: "0x1F1FE, 0x1F1EA",
        groupID: null,
        name: "Flag: Yemen"
    }, {
        code: "0x1F1FE, 0x1F1F9",
        groupID: null,
        name: "Flag: Mayotte"
    }, {
        code: "0x1F1FF, 0x1F1E6",
        groupID: null,
        name: "Flag: South Africa"
    }, {
        code: "0x1F1FF, 0x1F1F2",
        groupID: null,
        name: "Flag: Zambia"
    }, {
        code: "0x1F1FF, 0x1F1FC",
        groupID: null,
        name: "Flag: Zimbabwe"
    }, {
        code: "0x1F3F4, 0xE0067, 0xE0062, 0xE0065, 0xE006E, 0xE0067, 0xE007F",
        groupID: null,
        name: "Flag: England"
    }, {
        code: "0x1F3F4, 0xE0067, 0xE0062, 0xE0073, 0xE0063, 0xE0074, 0xE007F",
        groupID: null,
        name: "Flag: Scotland"
    }, {
        code: "0x1F3F4, 0xE0067, 0xE0062, 0xE0077, 0xE006C, 0xE0073, 0xE007F",
        groupID: null,
        name: "Flag: Wales"
    }, {
        code: "0x1F1E6",
        groupID: null,
        name: "Regional Indicator Symbol Letter A"
    }, {
        code: "0x1F1E7",
        groupID: null,
        name: "Regional Indicator Symbol Letter B"
    }, {
        code: "0x1F1E8",
        groupID: null,
        name: "Regional Indicator Symbol Letter C"
    }, {
        code: "0x1F1E9",
        groupID: null,
        name: "Regional Indicator Symbol Letter D"
    }, {
        code: "0x1F1EA",
        groupID: null,
        name: "Regional Indicator Symbol Letter E"
    }, {
        code: "0x1F1EB",
        groupID: null,
        name: "Regional Indicator Symbol Letter F"
    }, {
        code: "0x1F1EC",
        groupID: null,
        name: "Regional Indicator Symbol Letter G"
    }, {
        code: "0x1F1ED",
        groupID: null,
        name: "Regional Indicator Symbol Letter H"
    }, {
        code: "0x1F1EE",
        groupID: null,
        name: "Regional Indicator Symbol Letter I"
    }, {
        code: "0x1F1EF",
        groupID: null,
        name: "Regional Indicator Symbol Letter J"
    }, {
        code: "0x1F1F0",
        groupID: null,
        name: "Regional Indicator Symbol Letter K"
    }, {
        code: "0x1F1F1",
        groupID: null,
        name: "Regional Indicator Symbol Letter L"
    }, {
        code: "0x1F1F2",
        groupID: null,
        name: "Regional Indicator Symbol Letter M"
    }, {
        code: "0x1F1F3",
        groupID: null,
        name: "Regional Indicator Symbol Letter N"
    }, {
        code: "0x1F1F4",
        groupID: null,
        name: "Regional Indicator Symbol Letter O"
    }, {
        code: "0x1F1F5",
        groupID: null,
        name: "Regional Indicator Symbol Letter P"
    }, {
        code: "0x1F1F6",
        groupID: null,
        name: "Regional Indicator Symbol Letter Q"
    }, {
        code: "0x1F1F7",
        groupID: null,
        name: "Regional Indicator Symbol Letter R"
    }, {
        code: "0x1F1F8",
        groupID: null,
        name: "Regional Indicator Symbol Letter S"
    }, {
        code: "0x1F1F9",
        groupID: null,
        name: "Regional Indicator Symbol Letter T"
    }, {
        code: "0x1F1FA",
        groupID: null,
        name: "Regional Indicator Symbol Letter U"
    }, {
        code: "0x1F1FB",
        groupID: null,
        name: "Regional Indicator Symbol Letter V"
    }, {
        code: "0x1F1FC",
        groupID: null,
        name: "Regional Indicator Symbol Letter W"
    }, {
        code: "0x1F1FD",
        groupID: null,
        name: "Regional Indicator Symbol Letter X"
    }, {
        code: "0x1F1FE",
        groupID: null,
        name: "Regional Indicator Symbol Letter Y"
    }, {
        code: "0x1F1FF",
        groupID: null,
        name: "Regional Indicator Symbol Letter Z"
    }, {
        code: "0xE003C",
        groupID: null,
        name: "Tag Less-Than Sign"
    }, {
        code: "0xE0039",
        groupID: null,
        name: "Tag Digit Nine"
    }, {
        code: "0xE004E",
        groupID: null,
        name: "Tag Latin Capital Letter N"
    }, {
        code: "0xFE0F",
        groupID: null,
        name: "Variation Selector-16"
    }, {
        code: "0x200D",
        groupID: null,
        name: "Zero Width Joiner"
    }, {
        code: "0x38",
        groupID: null,
        name: "Digit Eight"
    }, {
        code: "0x2A",
        groupID: null,
        name: "Asterisk"
    }, {
        code: "0xE002A",
        groupID: null,
        name: "Tag Asterisk"
    }, {
        code: "0xE0025",
        groupID: null,
        name: "Tag Percent Sign"
    }, {
        code: "0xE0035",
        groupID: null,
        name: "Tag Digit Five"
    }, {
        code: "0xE0060",
        groupID: null,
        name: "Tag Grave Accent"
    }, {
        code: "0xE0022",
        groupID: null,
        name: "Tag Quotation Mark"
    }, {
        code: "0xE0031",
        groupID: null,
        name: "Tag Digit One"
    }, {
        code: "0xE007F",
        groupID: null,
        name: "Cancel Tag"
    }, {
        code: "0xE0076",
        groupID: null,
        name: "Tag Latin Small Letter V"
    }, {
        code: "0xE0056",
        groupID: null,
        name: "Tag Latin Capital Letter V"
    }, {
        code: "0xE0075",
        groupID: null,
        name: "Tag Latin Small Letter U"
    }, {
        code: "0xE0057",
        groupID: null,
        name: "Tag Latin Capital Letter W"
    }, {
        code: "0xE0024",
        groupID: null,
        name: "Tag Dollar Sign"
    }, {
        code: "0xE005A",
        groupID: null,
        name: "Tag Latin Capital Letter Z"
    }, {
        code: "0xE004B",
        groupID: null,
        name: "Tag Latin Capital Letter K"
    }, {
        code: "0xE002D",
        groupID: null,
        name: "Tag Hyphen-Minus"
    }, {
        code: "0xE0043",
        groupID: null,
        name: "Tag Latin Capital Letter C"
    }, {
        code: "0x33",
        groupID: null,
        name: "Digit Three"
    }, {
        code: "0xE0077",
        groupID: null,
        name: "Tag Latin Small Letter W"
    }, {
        code: "0xE0050",
        groupID: null,
        name: "Tag Latin Capital Letter P"
    }, {
        code: "0xE002C",
        groupID: null,
        name: "Tag Comma"
    }, {
        code: "0xE0045",
        groupID: null,
        name: "Tag Latin Capital Letter E"
    }, {
        code: "0xE003D",
        groupID: null,
        name: "Tag Equals Sign"
    }, {
        code: "0xE007C",
        groupID: null,
        name: "Tag Vertical Line"
    }, {
        code: "0x20E3",
        groupID: null,
        name: "Combining Enclosing Keycap"
    }, {
        code: "0xE0066",
        groupID: null,
        name: "Tag Latin Small Letter F"
    }, {
        code: "0xE0058",
        groupID: null,
        name: "Tag Latin Capital Letter X"
    }, {
        code: "0xE0048",
        groupID: null,
        name: "Tag Latin Capital Letter H"
    }, {
        code: "0xE005C",
        groupID: null,
        name: "Tag Reverse Solidus"
    }, {
        code: "0xE002E",
        groupID: null,
        name: "Tag Full Stop"
    }, {
        code: "0xE0044",
        groupID: null,
        name: "Tag Latin Capital Letter D"
    }, {
        code: "0xE0054",
        groupID: null,
        name: "Tag Latin Capital Letter T"
    }, {
        code: "0xE005F",
        groupID: null,
        name: "Tag Low Line"
    }, {
        code: "0xE0033",
        groupID: null,
        name: "Tag Digit Three"
    }, {
        code: "0xE003A",
        groupID: null,
        name: "Tag Colon"
    }, {
        code: "0x35",
        groupID: null,
        name: "Digit Five"
    }, {
        code: "0xE0063",
        groupID: null,
        name: "Tag Latin Small Letter C"
    }, {
        code: "0x32",
        groupID: null,
        name: "Digit Two"
    }, {
        code: "0xE006A",
        groupID: null,
        name: "Tag Latin Small Letter J"
    }, {
        code: "0xE0072",
        groupID: null,
        name: "Tag Latin Small Letter R"
    }, {
        code: "0xE0037",
        groupID: null,
        name: "Tag Digit Seven"
    }, {
        code: "0xE0032",
        groupID: null,
        name: "Tag Digit Two"
    }, {
        code: "0xE0068",
        groupID: null,
        name: "Tag Latin Small Letter H"
    }, {
        code: "0xE0069",
        groupID: null,
        name: "Tag Latin Small Letter I"
    }, {
        code: "0xE007E",
        groupID: null,
        name: "Tag Tilde"
    }, {
        code: "0xE007A",
        groupID: null,
        name: "Tag Latin Small Letter Z"
    }, {
        code: "0xE005E",
        groupID: null,
        name: "Tag Circumflex Accent"
    }, {
        code: "0xE006B",
        groupID: null,
        name: "Tag Latin Small Letter K"
    }, {
        code: "0xE0038",
        groupID: null,
        name: "Tag Digit Eight"
    }, {
        code: "0xE0055",
        groupID: null,
        name: "Tag Latin Capital Letter U"
    }, {
        code: "0xE003B",
        groupID: null,
        name: "Tag Semicolon"
    }, {
        code: "0xE0042",
        groupID: null,
        name: "Tag Latin Capital Letter B"
    }, {
        code: "0xE0046",
        groupID: null,
        name: "Tag Latin Capital Letter F"
    }, {
        code: "0xE0064",
        groupID: null,
        name: "Tag Latin Small Letter D"
    }, {
        code: "0xE006D",
        groupID: null,
        name: "Tag Latin Small Letter M"
    }, {
        code: "0xE0049",
        groupID: null,
        name: "Tag Latin Capital Letter I"
    }, {
        code: "0xE0034",
        groupID: null,
        name: "Tag Digit Four"
    }, {
        code: "0x37",
        groupID: null,
        name: "Digit Seven"
    }, {
        code: "0x34",
        groupID: null,
        name: "Digit Four"
    }, {
        code: "0xE0021",
        groupID: null,
        name: "Tag Exclamation Mark"
    }, {
        code: "0xE0041",
        groupID: null,
        name: "Tag Latin Capital Letter a"
    }, {
        code: "0xE0023",
        groupID: null,
        name: "Tag Number Sign"
    }, {
        code: "0xE0040",
        groupID: null,
        name: "Tag Commercial at"
    }, {
        code: "0xE007D",
        groupID: null,
        name: "Tag Right Curly Bracket"
    }, {
        code: "0xE007B",
        groupID: null,
        name: "Tag Left Curly Bracket"
    }, {
        code: "0xE003E",
        groupID: null,
        name: "Tag Greater-Than Sign"
    }, {
        code: "0xE004D",
        groupID: null,
        name: "Tag Latin Capital Letter M"
    }, {
        code: "0xE0079",
        groupID: null,
        name: "Tag Latin Small Letter Y"
    }, {
        code: "0xE0030",
        groupID: null,
        name: "Tag Digit Zero"
    }, {
        code: "0xE0067",
        groupID: null,
        name: "Tag Latin Small Letter G"
    }, {
        code: "0xE0071",
        groupID: null,
        name: "Tag Latin Small Letter Q"
    }, {
        code: "0xE002F",
        groupID: null,
        name: "Tag Solidus"
    }, {
        code: "0xE0029",
        groupID: null,
        name: "Tag Right Parenthesis"
    }, {
        code: "0xE0073",
        groupID: null,
        name: "Tag Latin Small Letter S"
    }, {
        code: "0xE0061",
        groupID: null,
        name: "Tag Latin Small Letter a"
    }, {
        code: "0xE0052",
        groupID: null,
        name: "Tag Latin Capital Letter R"
    }, {
        code: "0xE0053",
        groupID: null,
        name: "Tag Latin Capital Letter S"
    }, {
        code: "0xE0074",
        groupID: null,
        name: "Tag Latin Small Letter T"
    }, {
        code: "0xE003F",
        groupID: null,
        name: "Tag Question Mark"
    }, {
        code: "0xE0078",
        groupID: null,
        name: "Tag Latin Small Letter X"
    }, {
        code: "0xE006E",
        groupID: null,
        name: "Tag Latin Small Letter N"
    }, {
        code: "0xE006F",
        groupID: null,
        name: "Tag Latin Small Letter O"
    }, {
        code: "0xE0027",
        groupID: null,
        name: "Tag Apostrophe"
    }, {
        code: "0xE004C",
        groupID: null,
        name: "Tag Latin Capital Letter L"
    }, {
        code: "0xE002B",
        groupID: null,
        name: "Tag Plus Sign"
    }, {
        code: "0xE006C",
        groupID: null,
        name: "Tag Latin Small Letter L"
    }, {
        code: "0xE0062",
        groupID: null,
        name: "Tag Latin Small Letter B"
    }, {
        code: "0x23",
        groupID: null,
        name: "Number Sign"
    }, {
        code: "0xE004A",
        groupID: null,
        name: "Tag Latin Capital Letter J"
    }, {
        code: "0xE005D",
        groupID: null,
        name: "Tag Right Square Bracket"
    }, {
        code: "0xE004F",
        groupID: null,
        name: "Tag Latin Capital Letter O"
    }, {
        code: "0xE0047",
        groupID: null,
        name: "Tag Latin Capital Letter G"
    }, {
        code: "0x39",
        groupID: null,
        name: "Digit Nine"
    }, {
        code: "0xE005B",
        groupID: null,
        name: "Tag Left Square Bracket"
    }, {
        code: "0x36",
        groupID: null,
        name: "Digit Six"
    }, {
        code: "0xE0026",
        groupID: null,
        name: "Tag Ampersand"
    }, {
        code: "0x30",
        groupID: null,
        name: "Digit Zero"
    }, {
        code: "0xE0059",
        groupID: null,
        name: "Tag Latin Capital Letter Y"
    }, {
        code: "0xE0020",
        groupID: null,
        name: "Tag Space"
    }, {
        code: "0xE0036",
        groupID: null,
        name: "Tag Digit Six"
    }, {
        code: "0xE0070",
        groupID: null,
        name: "Tag Latin Small Letter P"
    }, {
        code: "0xE0051",
        groupID: null,
        name: "Tag Latin Capital Letter Q"
    }, {
        code: "0x31",
        groupID: null,
        name: "Digit One"
    }, {
        code: "0xE0028",
        groupID: null,
        name: "Tag Left Parenthesis"
    }, {
        code: "0xE0065",
        groupID: null,
        name: "Tag Latin Small Letter E"
    }];
    /*for (var i = 0; i <= a.length - 1; i++) {
        //console.log(a[i].code);
        $(".a").append("<span id='" + i + "' style='font-size: 25px;font-family: apple color emoji,segoe ui emoji,noto color emoji,android emoji,emojisymbols,emojione mozilla,twemoji mozilla,segoe ui symbol;'>" + String.fromCodePoint.apply(String, a[i].code) + "</span>");
    }*/
    var smileysAndPeople = ["Grinning Face",
        "Grinning Face With Big Eyes",
        "Grinning Face With Smiling Eyes",
        "Beaming Face With Smiling Eyes",
        "Grinning Squinting Face",
        "Grinning Face With Sweat",
        "Rolling on the Floor Laughing",
        "Face With Tears of Joy",
        "Slightly Smiling Face",
        "Upside-Down Face",
        "Winking Face",
        "Smiling Face With Smiling Eyes",
        "Smiling Face With Halo",
        "Smiling Face With Hearts",
        "Smiling Face With Heart-Eyes",
        "Star-Struck",
        "Face Blowing a Kiss",
        "Kissing Face",
        "Smiling Face",
        "Kissing Face With Closed Eyes",
        "Kissing Face With Smiling Eyes",
        "Face Savoring Food",
        "Face With Tongue",
        "Winking Face With Tongue",
        "Zany Face",
        "Squinting Face With Tongue",
        "Money-Mouth Face",
        "Hugging Face",
        "Face With Hand Over Mouth",
        "Shushing Face",
        "Thinking Face",
        "Zipper-Mouth Face",
        "Face With Raised Eyebrow",
        "Neutral Face",
        "Expressionless Face",
        "Face Without Mouth",
        "Smirking Face",
        "Unamused Face",
        "Face With Rolling Eyes",
        "Grimacing Face",
        "Lying Face",
        "Relieved Face",
        "Pensive Face",
        "Sleepy Face",
        "Drooling Face",
        "Sleeping Face",
        "Face With Medical Mask",
        "Face With Thermometer",
        "Face With Head-Bandage",
        "Nauseated Face",
        "Face Vomiting",
        "Sneezing Face",
        "Hot Face",
        "Cold Face",
        "Woozy Face",
        "Dizzy Face",
        "Exploding Head",
        "Cowboy Hat Face",
        "Partying Face",
        "Smiling Face With Sunglasses",
        "Nerd Face",
        "Face With Monocle",
        "Confused Face",
        "Worried Face",
        "Slightly Frowning Face",
        "Frowning Face",
        "Face With Open Mouth",
        "Hushed Face",
        "Astonished Face",
        "Flushed Face",
        "Pleading Face",
        "Frowning Face With Open Mouth",
        "Anguished Face",
        "Fearful Face",
        "Anxious Face With Sweat",
        "Sad but Relieved Face",
        "Crying Face",
        "Loudly Crying Face",
        "Face Screaming in Fear",
        "Confounded Face",
        "Persevering Face",
        "Disappointed Face",
        "Downcast Face With Sweat",
        "Weary Face",
        "Tired Face",
        "Face With Steam From Nose",
        "Pouting Face",
        "Angry Face",
        "Face With Symbols on Mouth",
        "Smiling Face With Horns",
        "Angry Face With Horns",
        "Skull",
        "Skull and Crossbones",
        "Pile of Poo",
        "Clown Face",
        "Ogre",
        "Goblin",
        "Ghost",
        "Alien",
        "Alien Monster",
        "Robot",
        "Grinning Cat",
        "Grinning Cat With Smiling Eyes",
        "Cat With Tears of Joy",
        "Smiling Cat With Heart-Eyes",
        "Cat With Wry Smile",
        "Kissing Cat",
        "Weary Cat",
        "Crying Cat",
        "Pouting Cat",
        "Kiss Mark",
        "Waving Hand",
        "Raised Back of Hand",
        "Hand With Fingers Splayed",
        "Raised Hand",
        "Vulcan Salute",
        "OK Hand",
        "Victory Hand",
        "Crossed Fingers",
        "Love-You Gesture",
        "Sign of the Horns",
        "Call Me Hand",
        "Backhand Index Pointing Left",
        "Backhand Index Pointing Right",
        "Backhand Index Pointing Up",
        "Middle Finger",
        "Backhand Index Pointing Down",
        "Index Pointing Up",
        "Thumbs Up",
        "Thumbs Down",
        "Raised Fist",
        "Oncoming Fist",
        "Left-Facing Fist",
        "Right-Facing Fist",
        "Clapping Hands",
        "Raising Hands",
        "Open Hands",
        "Palms Up Together",
        "Handshake",
        "Folded Hands",
        "Writing Hand",
        "Nail Polish",
        "Selfie",
        "Flexed Biceps",
        "Leg",
        "Foot",
        "Ear",
        "Nose",
        "Brain",
        "Tooth",
        "Bone",
        "Eyes",
        "Eye",
        "Tongue",
        "Mouth",
        "Baby",
        "Child",
        "Boy",
        "Girl",
        "Person",
        "Person: Blond Hair",
        "Man",
        "Man: Beard",
        "Man: Red Hair",
        "Man: Curly Hair",
        "Man: White Hair",
        "Man: Bald",
        "Woman",
        "Woman: Red Hair",
        "Woman: Curly Hair",
        "Woman: White Hair",
        "Woman: Bald",
        "Woman: Blond Hair",
        "Man: Blond Hair",
        "Older Person",
        "Old Man",
        "Old Woman",
        "Person Frowning",
        "Man Frowning",
        "Woman Frowning",
        "Person Pouting",
        "Man Pouting",
        "Woman Pouting",
        "Person Gesturing No",
        "Man Gesturing No",
        "Woman Gesturing No",
        "Person Gesturing OK",
        "Man Gesturing OK",
        "Woman Gesturing OK",
        "Person Tipping Hand",
        "Man Tipping Hand",
        "Woman Tipping Hand",
        "Person Raising Hand",
        "Man Raising Hand",
        "Woman Raising Hand",
        "Person Bowing",
        "Man Bowing",
        "Woman Bowing",
        "Person Facepalming",
        "Man Facepalming",
        "Woman Facepalming",
        "Person Shrugging",
        "Man Shrugging",
        "Woman Shrugging",
        "Man Health Worker",
        "Woman Health Worker",
        "Man Student",
        "Woman Student",
        "Man Teacher",
        "Woman Teacher",
        "Man Judge",
        "Woman Judge",
        "Man Farmer",
        "Woman Farmer",
        "Man Cook",
        "Woman Cook",
        "Man Mechanic",
        "Woman Mechanic",
        "Man Factory Worker",
        "Woman Factory Worker",
        "Man Office Worker",
        "Woman Office Worker",
        "Man Scientist",
        "Woman Scientist",
        "Man Technologist",
        "Woman Technologist",
        "Man Singer",
        "Woman Singer",
        "Man Artist",
        "Woman Artist",
        "Man Pilot",
        "Woman Pilot",
        "Man Astronaut",
        "Woman Astronaut",
        "Man Firefighter",
        "Woman Firefighter",
        "Police Officer",
        "Man Police Officer",
        "Woman Police Officer",
        "Detective",
        "Man Detective",
        "Woman Detective",
        "Guard",
        "Man Guard",
        "Woman Guard",
        "Construction Worker",
        "Man Construction Worker",
        "Woman Construction Worker",
        "Prince",
        "Princess",
        "Person Wearing Turban",
        "Man Wearing Turban",
        "Woman Wearing Turban",
        "Man With Skullcap",
        "Woman With Headscarf",
        "Man in Tuxedo",
        "Bride With Veil",
        "Pregnant Woman",
        "Breast-Feeding",
        "Baby Angel",
        "Santa Claus",
        "Mrs. Claus",
        "Superhero",
        "Man Superhero",
        "Woman Superhero",
        "Supervillain",
        "Man Supervillain",
        "Woman Supervillain",
        "Mage",
        "Man Mage",
        "Woman Mage",
        "Fairy",
        "Man Fairy",
        "Woman Fairy",
        "Vampire",
        "Man Vampire",
        "Woman Vampire",
        "Merperson",
        "Merman",
        "Mermaid",
        "Elf",
        "Man Elf",
        "Woman Elf",
        "Genie",
        "Man Genie",
        "Woman Genie",
        "Zombie",
        "Man Zombie",
        "Woman Zombie",
        "Person Getting Massage",
        "Man Getting Massage",
        "Woman Getting Massage",
        "Person Getting Haircut",
        "Man Getting Haircut",
        "Woman Getting Haircut",
        "Person Walking",
        "Man Walking",
        "Woman Walking",
        "Person Running",
        "Man Running",
        "Woman Running",
        "Woman Dancing",
        "Man Dancing",
        "Man in Suit Levitating",
        "People With Bunny Ears",
        "Men With Bunny Ears",
        "Women With Bunny Ears",
        "Person in Steamy Room",
        "Man in Steamy Room",
        "Woman in Steamy Room",
        "Person in Lotus Position",
        "Women Holding Hands",
        "Woman and Man Holding Hands",
        "Men Holding Hands",
        "Kiss",
        "Kiss: Man, Man",
        "Kiss: Woman, Woman",
        "Couple With Heart",
        "Couple With Heart: Man, Man",
        "Couple With Heart: Woman, Woman",
        "Family",
        "Family: Man, Woman, Boy",
        "Family: Man, Woman, Girl",
        "Family: Man, Woman, Girl, Boy",
        "Family: Man, Woman, Boy, Boy",
        "Family: Man, Woman, Girl, Girl",
        "Family: Man, Man, Boy",
        "Family: Man, Man, Girl",
        "Family: Man, Man, Girl, Boy",
        "Family: Man, Man, Boy, Boy",
        "Family: Man, Man, Girl, Girl",
        "Family: Woman, Woman, Boy",
        "Family: Woman, Woman, Girl",
        "Family: Woman, Woman, Girl, Boy",
        "Family: Woman, Woman, Boy, Boy",
        "Family: Woman, Woman, Girl, Girl",
        "Family: Man, Boy",
        "Family: Man, Boy, Boy",
        "Family: Man, Girl",
        "Family: Man, Girl, Boy",
        "Family: Man, Girl, Girl",
        "Family: Woman, Boy",
        "Family: Woman, Boy, Boy",
        "Family: Woman, Girl",
        "Family: Woman, Girl, Boy",
        "Family: Woman, Girl, Girl",
        "Speaking Head",
        "Bust in Silhouette",
        "Busts in Silhouette",
        "Footprints",
        "Luggage",
        "Closed Umbrella",
        "Umbrella",
        "Thread",
        "Yarn",
        "Glasses",
        "Sunglasses",
        "Goggles",
        "Lab Coat",
        "Necktie",
        "T-Shirt",
        "Jeans",
        "Scarf",
        "Gloves",
        "Coat",
        "Socks",
        "Dress",
        "Kimono",
        "Bikini",
        "Woman’s Clothes",
        "Purse",
        "Handbag",
        "Clutch Bag",
        "Backpack",
        "Man’s Shoe",
        "Running Shoe",
        "Hiking Boot",
        "Flat Shoe",
        "High-Heeled Shoe",
        "Woman’s Sandal",
        "Woman’s Boot",
        "Crown",
        "Woman’s Hat",
        "Top Hat",
        "Graduation Cap",
        "Billed Cap",
        "Rescue Worker’s Helmet",
        "Lipstick",
        "Ring"];
    var animalsAndNature = ["See-No-Evil Monkey",
        "Hear-No-Evil Monkey",
        "Speak-No-Evil Monkey",
        "Collision",
        "Dizzy",
        "Sweat Droplets",
        "Dashing Away",
        "Monkey Face",
        "Monkey",
        "Gorilla",
        "Dog Face",
        "Dog",
        "Poodle",
        "Wolf",
        "Fox",
        "Raccoon",
        "Cat Face",
        "Cat",
        "Lion",
        "Tiger Face",
        "Tiger",
        "Leopard",
        "Horse Face",
        "Horse",
        "Unicorn",
        "Zebra",
        "Deer",
        "Cow Face",
        "Ox",
        "Water Buffalo",
        "Cow",
        "Pig Face",
        "Pig",
        "Boar",
        "Pig Nose",
        "Ram",
        "Ewe",
        "Goat",
        "Camel",
        "Two-Hump Camel",
        "Llama",
        "Giraffe",
        "Elephant",
        "Rhinoceros",
        "Hippopotamus",
        "Mouse Face",
        "Mouse",
        "Rat",
        "Hamster",
        "Rabbit Face",
        "Rabbit",
        "Chipmunk",
        "Hedgehog",
        "Bat",
        "Bear",
        "Koala",
        "Panda",
        "Kangaroo",
        "Badger",
        "Paw Prints",
        "Turkey",
        "Chicken",
        "Rooster",
        "Hatching Chick",
        "Baby Chick",
        "Front-Facing Baby Chick",
        "Bird",
        "Penguin",
        "Dove",
        "Eagle",
        "Duck",
        "Swan",
        "Owl",
        "Peacock",
        "Parrot",
        "Frog",
        "Crocodile",
        "Turtle",
        "Lizard",
        "Snake",
        "Dragon Face",
        "Dragon",
        "Sauropod",
        "T-Rex",
        "Spouting Whale",
        "Whale",
        "Dolphin",
        "Fish",
        "Tropical Fish",
        "Blowfish",
        "Shark",
        "Octopus",
        "Spiral Shell",
        "Snail",
        "Butterfly",
        "Bug",
        "Ant",
        "Honeybee",
        "Lady Beetle",
        "Cricket",
        "Spider",
        "Spider Web",
        "Scorpion",
        "Mosquito",
        "Microbe",
        "Bouquet",
        "Cherry Blossom",
        "White Flower",
        "Rosette",
        "Rose",
        "Wilted Flower",
        "Hibiscus",
        "Sunflower",
        "Blossom",
        "Tulip",
        "Seedling",
        "Evergreen Tree",
        "Deciduous Tree",
        "Palm Tree",
        "Cactus",
        "Sheaf of Rice",
        "Herb",
        "Shamrock",
        "Four Leaf Clover",
        "Maple Leaf",
        "Fallen Leaf",
        "Leaf Fluttering in Wind",
        "Mushroom",
        "Chestnut",
        "Crab",
        "Lobster",
        "Shrimp",
        "Squid",
        "Globe Showing Europe-Africa",
        "Globe Showing Americas",
        "Globe Showing Asia-Australia",
        "Globe With Meridians",
        "New Moon",
        "Waxing Crescent Moon",
        "First Quarter Moon",
        "Waxing Gibbous Moon",
        "Full Moon",
        "Waning Gibbous Moon",
        "Last Quarter Moon",
        "Waning Crescent Moon",
        "Crescent Moon",
        "New Moon Face",
        "First Quarter Moon Face",
        "Last Quarter Moon Face",
        "Sun",
        "Full Moon Face",
        "Sun With Face",
        "Star",
        "Glowing Star",
        "Shooting Star",
        "Cloud",
        "Sun Behind Cloud",
        "Cloud With Lightning and Rain",
        "Sun Behind Small Cloud",
        "Sun Behind Large Cloud",
        "Sun Behind Rain Cloud",
        "Cloud With Rain",
        "Cloud With Snow",
        "Cloud With Lightning",
        "Tornado",
        "Fog",
        "Wind Face",
        "Rainbow",
        "Umbrella",
        "Umbrella With Rain Drops",
        "High Voltage",
        "Snowflake",
        "Snowman",
        "Snowman Without Snow",
        "Comet",
        "Fire",
        "Droplet",
        "Water Wave",
        "Christmas Tree",
        "Sparkles",
        "Tanabata Tree"];
    var foodAndDrink = ["Grapes",
        "Melon",
        "Watermelon",
        "Tangerine",
        "Lemon",
        "Banana",
        "Pineapple",
        "Mango",
        "Red Apple",
        "Green Apple",
        "Pear",
        "Peach",
        "Cherries",
        "Strawberry",
        "Kiwi Fruit",
        "Tomato",
        "Coconut",
        "Avocado",
        "Eggplant",
        "Potato",
        "Carrot",
        "Ear of Corn",
        "Hot Pepper",
        "Cucumber",
        "Leafy Green",
        "Broccoli",
        "Mushroom",
        "Peanuts",
        "Chestnut",
        "Bread",
        "Croissant",
        "Baguette Bread",
        "Pretzel",
        "Bagel",
        "Pancakes",
        "Cheese Wedge",
        "Meat on Bone",
        "Poultry Leg",
        "Cut of Meat",
        "Bacon",
        "Hamburger",
        "French Fries",
        "Pizza",
        "Hot Dog",
        "Sandwich",
        "Taco",
        "Burrito",
        "Stuffed Flatbread",
        "Cooking",
        "Shallow Pan of Food",
        "Pot of Food",
        "Bowl With Spoon",
        "Green Salad",
        "Popcorn",
        "Salt",
        "Canned Food",
        "Bento Box",
        "Rice Cracker",
        "Rice Ball",
        "Cooked Rice",
        "Curry Rice",
        "Steaming Bowl",
        "Spaghetti",
        "Roasted Sweet Potato",
        "Oden",
        "Sushi",
        "Fried Shrimp",
        "Fish Cake With Swirl",
        "Moon Cake",
        "Dango",
        "Dumpling",
        "Fortune Cookie",
        "Takeout Box",
        "Soft Ice Cream",
        "Shaved Ice",
        "Ice Cream",
        "Doughnut",
        "Cookie",
        "Birthday Cake",
        "Shortcake",
        "Cupcake",
        "Pie",
        "Chocolate Bar",
        "Candy",
        "Lollipop",
        "Custard",
        "Honey Pot",
        "Baby Bottle",
        "Glass of Milk",
        "Hot Beverage",
        "Teacup Without Handle",
        "Sake",
        "Bottle With Popping Cork",
        "Wine Glass",
        "Cocktail Glass",
        "Tropical Drink",
        "Beer Mug",
        "Clinking Beer Mugs",
        "Clinking Glasses",
        "Tumbler Glass",
        "Cup With Straw",
        "Chopsticks",
        "Fork and Knife With Plate",
        "Fork and Knife"];
    var activity = ["Man in Suit Levitating",
        "Person Climbing",
        "Man Climbing",
        "Woman Climbing",
        "Horse Racing",
        "Skier",
        "Snowboarder",
        "Person Golfing",
        "Man Golfing",
        "Woman Golfing",
        "Person Surfing",
        "Man Surfing",
        "Woman Surfing",
        "Person Rowing Boat",
        "Man Rowing Boat",
        "Woman Rowing Boat",
        "Person Swimming",
        "Man Swimming",
        "Woman Swimming",
        "Person Bouncing Ball",
        "Man Bouncing Ball",
        "Woman Bouncing Ball",
        "Person Lifting Weights",
        "Man Lifting Weights",
        "Woman Lifting Weights",
        "Person Biking",
        "Man Biking",
        "Woman Biking",
        "Person Mountain Biking",
        "Man Mountain Biking",
        "Woman Mountain Biking",
        "Person Cartwheeling",
        "Man Cartwheeling",
        "Woman Cartwheeling",
        "People Wrestling",
        "Men Wrestling",
        "Women Wrestling",
        "Person Playing Water Polo",
        "Man Playing Water Polo",
        "Woman Playing Water Polo",
        "Person Playing Handball",
        "Man Playing Handball",
        "Woman Playing Handball",
        "Person Juggling",
        "Man Juggling",
        "Woman Juggling",
        "Person in Lotus Position",
        "Man in Lotus Position",
        "Woman in Lotus Position",
        "Circus Tent",
        "Skateboard",
        "Reminder Ribbon",
        "Admission Tickets",
        "Ticket",
        "Military Medal",
        "Trophy",
        "Sports Medal",
        "1st Place Medal",
        "2nd Place Medal",
        "3rd Place Medal",
        "Soccer Ball",
        "Baseball",
        "Softball",
        "Basketball",
        "Volleyball",
        "American Football",
        "Rugby Football",
        "Tennis",
        "Flying Disc",
        "Bowling",
        "Cricket Game",
        "Field Hockey",
        "Ice Hockey",
        "Lacrosse",
        "Ping Pong",
        "Badminton",
        "Boxing Glove",
        "Martial Arts Uniform",
        "Flag in Hole",
        "Ice Skate",
        "Fishing Pole",
        "Running Shirt",
        "Skis",
        "Sled",
        "Curling Stone",
        "Direct Hit",
        "Pool 8 Ball",
        "Video Game",
        "Slot Machine",
        "Game Die",
        "Puzzle Piece",
        "Chess Pawn",
        "Performing Arts",
        "Artist Palette",
        "Thread",
        "Yarn",
        "Musical Score",
        "Microphone",
        "Headphone",
        "Saxophone",
        "Guitar",
        "Musical Keyboard",
        "Trumpet",
        "Violin",
        "Drum",
        "Clapper Board"];
    var travelAndPlaces = ["Person Rowing Boat",
        "Map of Japan",
        "Snow-Capped Mountain",
        "Mountain",
        "Volcano",
        "Mount Fuji",
        "Camping",
        "Beach With Umbrella",
        "Desert",
        "Desert Island",
        "National Park",
        "Stadium",
        "Classical Building",
        "Building Construction",
        "Houses",
        "Derelict House",
        "House",
        "House With Garden",
        "Office Building",
        "Japanese Post Office",
        "Post Office",
        "Hospital",
        "Bank",
        "Hotel",
        "Love Hotel",
        "Convenience Store",
        "School",
        "Department Store",
        "Factory",
        "Japanese Castle",
        "Castle",
        "Wedding",
        "Tokyo Tower",
        "Statue of Liberty",
        "Church",
        "Mosque",
        "Synagogue",
        "Shinto Shrine",
        "Kaaba",
        "Fountain",
        "Tent",
        "Foggy",
        "Night With Stars",
        "Cityscape",
        "Sunrise Over Mountains",
        "Sunrise",
        "Cityscape at Dusk",
        "Sunset",
        "Bridge at Night",
        "Carousel Horse",
        "Ferris Wheel",
        "Roller Coaster",
        "Locomotive",
        "Railway Car",
        "High-Speed Train",
        "Bullet Train",
        "Train",
        "Metro",
        "Light Rail",
        "Station",
        "Tram",
        "Monorail",
        "Mountain Railway",
        "Tram Car",
        "Bus",
        "Oncoming Bus",
        "Trolleybus",
        "Minibus",
        "Ambulance",
        "Fire Engine",
        "Police Car",
        "Oncoming Police Car",
        "Taxi",
        "Oncoming Taxi",
        "Automobile",
        "Oncoming Automobile",
        "Delivery Truck",
        "Articulated Lorry",
        "Tractor",
        "Racing Car",
        "Motorcycle",
        "Motor Scooter",
        "Bicycle",
        "Kick Scooter",
        "Bus Stop",
        "Railway Track",
        "Fuel Pump",
        "Police Car Light",
        "Horizontal Traffic Light",
        "Vertical Traffic Light",
        "Construction",
        "Anchor",
        "Sailboat",
        "Speedboat",
        "Passenger Ship",
        "Ferry",
        "Motor Boat",
        "Ship",
        "Airplane",
        "Small Airplane",
        "Airplane Departure",
        "Airplane Arrival",
        "Seat",
        "Helicopter",
        "Suspension Railway",
        "Mountain Cableway",
        "Aerial Tramway",
        "Satellite",
        "Rocket",
        "Flying Saucer",
        "Shooting Star",
        "Milky Way",
        "Umbrella on Ground",
        "Fireworks",
        "Sparkler",
        "Moon Viewing Ceremony",
        "Yen Banknote",
        "Dollar Banknote",
        "Euro Banknote",
        "Pound Banknote",
        "Moai",
        "Passport Control",
        "Customs",
        "Baggage Claim"];
    var objects = ["Love Letter",
        "Hole",
        "Bomb",
        "Person Taking Bath",
        "Person in Bed",
        "Kitchen Knife",
        "Amphora",
        "World Map",
        "Compass",
        "Brick",
        "Barber Pole",
        "Oil Drum",
        "Bellhop Bell",
        "Luggage",
        "Hourglass Done",
        "Hourglass Not Done",
        "Watch",
        "Alarm Clock",
        "Stopwatch",
        "Timer Clock",
        "Mantelpiece Clock",
        "Thermometer",
        "Umbrella on Ground",
        "Firecracker",
        "Balloon",
        "Party Popper",
        "Confetti Ball",
        "Japanese Dolls",
        "Carp Streamer",
        "Wind Chime",
        "Red Envelope",
        "Ribbon",
        "Wrapped Gift",
        "Crystal Ball",
        "Nazar Amulet",
        "Joystick",
        "Teddy Bear",
        "Framed Picture",
        "Thread",
        "Yarn",
        "Shopping Bags",
        "Prayer Beads",
        "Gem Stone",
        "Postal Horn",
        "Studio Microphone",
        "Level Slider",
        "Control Knobs",
        "Radio",
        "Mobile Phone",
        "Mobile Phone With Arrow",
        "Telephone",
        "Telephone Receiver",
        "Pager",
        "Fax Machine",
        "Battery",
        "Electric Plug",
        "Laptop",
        "Desktop Computer",
        "Printer",
        "Keyboard",
        "Computer Mouse",
        "Trackball",
        "Computer Disk",
        "Floppy Disk",
        "Optical Disk",
        "DVD",
        "Abacus",
        "Movie Camera",
        "Film Frames",
        "Film Projector",
        "Television",
        "Camera",
        "Camera With Flash",
        "Video Camera",
        "Videocassette",
        "Magnifying Glass Tilted Left",
        "Magnifying Glass Tilted Right",
        "Candle",
        "Light Bulb",
        "Flashlight",
        "Red Paper Lantern",
        "Notebook With Decorative Cover",
        "Closed Book",
        "Open Book",
        "Green Book",
        "Blue Book",
        "Orange Book",
        "Books",
        "Notebook",
        "Page With Curl",
        "Scroll",
        "Page Facing Up",
        "Newspaper",
        "Rolled-Up Newspaper",
        "Bookmark Tabs",
        "Bookmark",
        "Label",
        "Money Bag",
        "Yen Banknote",
        "Dollar Banknote",
        "Euro Banknote",
        "Pound Banknote",
        "Money With Wings",
        "Credit Card",
        "Receipt",
        "Envelope",
        "E-Mail",
        "Incoming Envelope",
        "Envelope With Arrow",
        "Outbox Tray",
        "Inbox Tray",
        "Package",
        "Closed Mailbox With Raised Flag",
        "Closed Mailbox With Lowered Flag",
        "Open Mailbox With Raised Flag",
        "Open Mailbox With Lowered Flag",
        "Postbox",
        "Ballot Box With Ballot",
        "Pencil",
        "Black Nib",
        "Fountain Pen",
        "Pen",
        "Paintbrush",
        "Crayon",
        "Memo",
        "File Folder",
        "Open File Folder",
        "Card Index Dividers",
        "Calendar",
        "Tear-Off Calendar",
        "Spiral Notepad",
        "Spiral Calendar",
        "Card Index",
        "Chart Increasing",
        "Chart Decreasing",
        "Bar Chart",
        "Clipboard",
        "Pushpin",
        "Round Pushpin",
        "Paperclip",
        "Linked Paperclips",
        "Straight Ruler",
        "Triangular Ruler",
        "Scissors",
        "Card File Box",
        "File Cabinet",
        "Wastebasket",
        "Locked",
        "Unlocked",
        "Locked With Pen",
        "Locked With Key",
        "Key",
        "Old Key",
        "Hammer",
        "Pick",
        "Hammer and Pick",
        "Hammer and Wrench",
        "Dagger",
        "Crossed Swords",
        "Pistol",
        "Shield",
        "Wrench",
        "Nut and Bolt",
        "Gear",
        "Clamp",
        "Balance Scale",
        "Link",
        "Chains",
        "Toolbox",
        "Magnet",
        "Alembic",
        "Test Tube",
        "Petri Dish",
        "DNA",
        "Microscope",
        "Telescope",
        "Satellite Antenna",
        "Syringe",
        "Pill",
        "Door",
        "Bed",
        "Couch and Lamp",
        "Toilet",
        "Shower",
        "Bathtub",
        "Lotion Bottle",
        "Safety Pin",
        "Broom",
        "Basket",
        "Roll of Paper",
        "Soap",
        "Sponge",
        "Fire Extinguisher",
        "Cigarette",
        "Coffin",
        "Funeral Urn",
        "Moai"];
    var symbols = ["Heart With Arrow",
        "Heart With Ribbon",
        "Sparkling Heart",
        "Growing Heart",
        "Beating Heart",
        "Revolving Hearts",
        "Two Hearts",
        "Heart Decoration",
        "Heart Exclamation",
        "Broken Heart",
        "Red Heart",
        "Orange Heart",
        "Yellow Heart",
        "Green Heart",
        "Blue Heart",
        "Purple Heart",
        "Black Heart",
        "Hundred Points",
        "Anger Symbol",
        "Speech Balloon",
        "Eye in Speech Bubble",
        "Right Anger Bubble",
        "Thought Balloon",
        "Zzz",
        "White Flower",
        "Hot Springs",
        "Barber Pole",
        "Stop Sign",
        "Twelve O’Clock",
        "Twelve-Thirty",
        "One O’Clock",
        "One-Thirty",
        "Two O’Clock",
        "Two-Thirty",
        "Three O’Clock",
        "Three-Thirty",
        "Four O’Clock",
        "Four-Thirty",
        "Five O’Clock",
        "Five-Thirty",
        "Six O’Clock",
        "Six-Thirty",
        "Seven O’Clock",
        "Seven-Thirty",
        "Eight O’Clock",
        "Eight-Thirty",
        "Nine O’Clock",
        "Nine-Thirty",
        "Ten O’Clock",
        "Ten-Thirty",
        "Eleven O’Clock",
        "Eleven-Thirty",
        "Cyclone",
        "Spade Suit",
        "Heart Suit",
        "Diamond Suit",
        "Club Suit",
        "Joker",
        "Mahjong Red Dragon",
        "Flower Playing Cards",
        "Muted Speaker",
        "Speaker Low Volume",
        "Speaker Medium Volume",
        "Speaker High Volume",
        "Loudspeaker",
        "Megaphone",
        "Postal Horn",
        "Bell",
        "Bell With Slash",
        "Musical Note",
        "Musical Notes",
        "ATM Sign",
        "Litter in Bin Sign",
        "Potable Water",
        "Wheelchair Symbol",
        "Men’s Room",
        "Women’s Room",
        "Restroom",
        "Baby Symbol",
        "Water Closet",
        "Warning",
        "Children Crossing",
        "No Entry",
        "Prohibited",
        "No Bicycles",
        "No Smoking",
        "No Littering",
        "Non-Potable Water",
        "No Pedestrians",
        "No One Under Eighteen",
        "Radioactive",
        "Biohazard",
        "Up Arrow",
        "Up-Right Arrow",
        "Right Arrow",
        "Down-Right Arrow",
        "Down Arrow",
        "Down-Left Arrow",
        "Left Arrow",
        "Up-Left Arrow",
        "Up-Down Arrow",
        "Left-Right Arrow",
        "Right Arrow Curving Left",
        "Left Arrow Curving Right",
        "Right Arrow Curving Up",
        "Right Arrow Curving Down",
        "Clockwise Vertical Arrows",
        "Counterclockwise Arrows Button",
        "Back Arrow",
        "End Arrow",
        "On! Arrow",
        "Soon Arrow",
        "Top Arrow",
        "Place of Worship",
        "Atom Symbol",
        "Om",
        "Star of David",
        "Wheel of Dharma",
        "Yin Yang",
        "Latin Cross",
        "Orthodox Cross",
        "Star and Crescent",
        "Peace Symbol",
        "Menorah",
        "Dotted Six-Pointed Star",
        "Aries",
        "Taurus",
        "Gemini",
        "Cancer",
        "Leo",
        "Virgo",
        "Libra",
        "Scorpio",
        "Sagittarius",
        "Capricorn",
        "Aquarius",
        "Pisces",
        "Ophiuchus",
        "Shuffle Tracks Button",
        "Repeat Button",
        "Repeat Single Button",
        "Play Button",
        "Fast-Forward Button",
        "Reverse Button",
        "Fast Reverse Button",
        "Upwards Button",
        "Fast Up Button",
        "Downwards Button",
        "Fast Down Button",
        "Stop Button",
        "Eject Button",
        "Cinema",
        "Dim Button",
        "Bright Button",
        "Antenna Bars",
        "Vibration Mode",
        "Mobile Phone Off",
        "Infinity",
        "Recycling Symbol",
        "Trident Emblem",
        "Name Badge",
        "Japanese Symbol for Beginner",
        "Hollow Red Circle",
        "Check Mark Button",
        "Check Box With Check",
        "Check Mark",
        "Multiplication Sign",
        "Cross Mark",
        "Cross Mark Button",
        "Plus Sign",
        "Minus Sign",
        "Division Sign",
        "Curly Loop",
        "Double Curly Loop",
        "Part Alternation Mark",
        "Eight-Spoked Asterisk",
        "Eight-Pointed Star",
        "Sparkle",
        "Double Exclamation Mark",
        "Exclamation Question Mark",
        "Question Mark",
        "White Question Mark",
        "White Exclamation Mark",
        "Exclamation Mark",
        "Copyright",
        "Registered",
        "Trade Mark",
        "Keycap Number Sign",
        "Keycap Digit Zero",
        "Keycap Digit One",
        "Keycap Digit Two",
        "Keycap Digit Three",
        "Keycap Digit Four",
        "Keycap Digit Five",
        "Keycap Digit Six",
        "Keycap Digit Seven",
        "Keycap Digit Eight",
        "Keycap Digit Nine",
        "Keycap: 10",
        "Input Latin Uppercase",
        "Input Latin Lowercase",
        "Input Numbers",
        "Input Symbols",
        "Input Latin Letters",
        "A Button (Blood Type)",
        "AB Button (Blood Type)",
        "B Button (Blood Type)",
        "CL Button",
        "Cool Button",
        "Free Button",
        "Information",
        "ID Button",
        "Circled M",
        "New Button",
        "NG Button",
        "O Button (Blood Type)",
        "OK Button",
        "P Button",
        "SOS Button",
        "Up! Button",
        "Vs Button",
        "Japanese “Here” Button",
        "Japanese “Service Charge” Button",
        "Japanese “Monthly Amount” Button",
        "Japanese “Not Free of Charge” Button",
        "Japanese “Reserved” Button",
        "Japanese “Bargain” Button",
        "Japanese “Discount” Button",
        "Japanese “Free of Charge” Button",
        "Japanese “Prohibited” Button",
        "Japanese “Acceptable” Button",
        "Japanese “Application” Button",
        "Japanese “Passing Grade” Button",
        "Japanese “Vacancy” Button",
        "Japanese “Congratulations” Button",
        "Japanese “Secret” Button",
        "Japanese “Open for Business” Button",
        "Japanese “No Vacancy” Button",
        "Red Circle",
        "Blue Circle",
        "Black Circle",
        "White Circle",
        "Black Large Square",
        "White Large Square",
        "Black Medium Square",
        "White Medium Square",
        "Black Medium-Small Square",
        "White Medium-Small Square",
        "Black Small Square",
        "White Small Square",
        "Large Orange Diamond",
        "Large Blue Diamond",
        "Small Orange Diamond",
        "Small Blue Diamond",
        "Red Triangle Pointed Up",
        "Red Triangle Pointed Down",
        "Diamond With a Dot",
        "White Square Button"];
    var flags = ["Chequered Flag",
        "Triangular Flag",
        "Crossed Flags",
        "Black Flag",
        "White Flag",
        "Rainbow Flag",
        "Transgender Flag",
        "Pirate Flag",
        "Flag: Ascension Island",
        "Flag: Andorra",
        "Flag: United Arab Emirates",
        "Flag: Afghanistan",
        "Flag: Antigua & Barbuda",
        "Flag: Anguilla",
        "Flag: Albania",
        "Flag: Armenia",
        "Flag: Angola",
        "Flag: Antarctica",
        "Flag: Argentina",
        "Flag: American Samoa",
        "Flag: Austria",
        "Flag: Australia",
        "Flag: Aruba",
        "Flag: Åland Islands",
        "Flag: Azerbaijan",
        "Flag: Bosnia & Herzegovina",
        "Flag: Barbados",
        "Flag: Bangladesh",
        "Flag: Belgium",
        "Flag: Burkina Faso",
        "Flag: Bulgaria",
        "Flag: Bahrain",
        "Flag: Burundi",
        "Flag: Benin",
        "Flag: St. Barthélemy",
        "Flag: Bermuda",
        "Flag: Brunei",
        "Flag: Bolivia",
        "Flag: Caribbean Netherlands",
        "Flag: Brazil",
        "Flag: Bahamas",
        "Flag: Bhutan",
        "Flag: Bouvet Island",
        "Flag: Botswana",
        "Flag: Belarus",
        "Flag: Belize",
        "Flag: Canada",
        "Flag: Cocos (Keeling) Islands",
        "Flag: Congo - Kinshasa",
        "Flag: Central African Republic",
        "Flag: Congo - Brazzaville",
        "Flag: Switzerland",
        "Flag: Côte d’Ivoire",
        "Flag: Cook Islands",
        "Flag: Chile",
        "Flag: Cameroon",
        "Flag: China",
        "Flag: Colombia",
        "Flag: Clipperton Island",
        "Flag: Costa Rica",
        "Flag: Cuba",
        "Flag: Cape Verde",
        "Flag: Curaçao",
        "Flag: Christmas Island",
        "Flag: Cyprus",
        "Flag: Czechia",
        "Flag: Germany",
        "Flag: Diego Garcia",
        "Flag: Djibouti",
        "Flag: Denmark",
        "Flag: Dominica",
        "Flag: Dominican Republic",
        "Flag: Algeria",
        "Flag: Ceuta & Melilla",
        "Flag: Ecuador",
        "Flag: Estonia",
        "Flag: Egypt",
        "Flag: Western Sahara",
        "Flag: Eritrea",
        "Flag: Spain",
        "Flag: Ethiopia",
        "Flag: European Union",
        "Flag: Finland",
        "Flag: Fiji",
        "Flag: Falkland Islands",
        "Flag: Micronesia",
        "Flag: Faroe Islands",
        "Flag: France",
        "Flag: Gabon",
        "Flag: United Kingdom",
        "Flag: Grenada",
        "Flag: Georgia",
        "Flag: French Guiana",
        "Flag: Guernsey",
        "Flag: Ghana",
        "Flag: Gibraltar",
        "Flag: Greenland",
        "Flag: Gambia",
        "Flag: Guinea",
        "Flag: Guadeloupe",
        "Flag: Equatorial Guinea",
        "Flag: Greece",
        "Flag: South Georgia & South Sandwich Islands",
        "Flag: Guatemala",
        "Flag: Guam",
        "Flag: Guinea-Bissau",
        "Flag: Guyana",
        "Flag: Hong Kong SAR China",
        "Flag: Heard & McDonald Islands",
        "Flag: Honduras",
        "Flag: Croatia",
        "Flag: Haiti",
        "Flag: Hungary",
        "Flag: Canary Islands",
        "Flag: Indonesia",
        "Flag: Ireland",
        "Flag: Israel",
        "Flag: Isle of Man",
        "Flag: India",
        "Flag: British Indian Ocean Territory",
        "Flag: Iraq",
        "Flag: Iran",
        "Flag: Iceland",
        "Flag: Italy",
        "Flag: Jersey",
        "Flag: Jamaica",
        "Flag: Jordan",
        "Flag: Japan",
        "Flag: Kenya",
        "Flag: Kyrgyzstan",
        "Flag: Cambodia",
        "Flag: Kiribati",
        "Flag: Comoros",
        "Flag: St. Kitts & Nevis",
        "Flag: North Korea",
        "Flag: South Korea",
        "Flag: Kuwait",
        "Flag: Cayman Islands",
        "Flag: Kazakhstan",
        "Flag: Laos",
        "Flag: Lebanon",
        "Flag: St. Lucia",
        "Flag: Liechtenstein",
        "Flag: Sri Lanka",
        "Flag: Liberia",
        "Flag: Lesotho",
        "Flag: Lithuania",
        "Flag: Luxembourg",
        "Flag: Latvia",
        "Flag: Libya",
        "Flag: Morocco",
        "Flag: Monaco",
        "Flag: Moldova",
        "Flag: Montenegro",
        "Flag: St. Martin",
        "Flag: Madagascar",
        "Flag: Marshall Islands",
        "Flag: North Macedonia",
        "Flag: Mali",
        "Flag: Myanmar (Burma)",
        "Flag: Mongolia",
        "Flag: Macao Sar China",
        "Flag: Northern Mariana Islands",
        "Flag: Martinique",
        "Flag: Mauritania",
        "Flag: Montserrat",
        "Flag: Malta",
        "Flag: Mauritius",
        "Flag: Maldives",
        "Flag: Malawi",
        "Flag: Mexico",
        "Flag: Malaysia",
        "Flag: Mozambique",
        "Flag: Namibia",
        "Flag: New Caledonia",
        "Flag: Niger",
        "Flag: Norfolk Island",
        "Flag: Nigeria",
        "Flag: Nicaragua",
        "Flag: Netherlands",
        "Flag: Norway",
        "Flag: Nepal",
        "Flag: Nauru",
        "Flag: Niue",
        "Flag: New Zealand",
        "Flag: Oman",
        "Flag: Panama",
        "Flag: Peru",
        "Flag: French Polynesia",
        "Flag: Papua New Guinea",
        "Flag: Philippines",
        "Flag: Pakistan",
        "Flag: Poland",
        "Flag: St. Pierre & Miquelon",
        "Flag: Pitcairn Islands",
        "Flag: Puerto Rico",
        "Flag: Palestinian Territories",
        "Flag: Portugal",
        "Flag: Palau",
        "Flag: Paraguay",
        "Flag: Qatar",
        "Flag: Réunion",
        "Flag: Romania",
        "Flag: Serbia",
        "Flag: Russia",
        "Flag: Rwanda",
        "Flag: Saudi Arabia",
        "Flag: Solomon Islands",
        "Flag: Seychelles",
        "Flag: Sudan",
        "Flag: Sweden",
        "Flag: Singapore",
        "Flag: St. Helena",
        "Flag: Slovenia",
        "Flag: Svalbard & Jan Mayen",
        "Flag: Slovakia",
        "Flag: Sierra Leone",
        "Flag: San Marino",
        "Flag: Senegal",
        "Flag: Somalia",
        "Flag: Suriname",
        "Flag: South Sudan",
        "Flag: São Tomé & Príncipe",
        "Flag: El Salvador",
        "Flag: Sint Maarten",
        "Flag: Syria",
        "Flag: Eswatini",
        "Flag: Tristan Da Cunha",
        "Flag: Turks & Caicos Islands",
        "Flag: Chad",
        "Flag: French Southern Territories",
        "Flag: Togo",
        "Flag: Thailand",
        "Flag: Tajikistan",
        "Flag: Tokelau",
        "Flag: Timor-Leste",
        "Flag: Turkmenistan",
        "Flag: Tunisia",
        "Flag: Tonga",
        "Flag: Turkey",
        "Flag: Trinidad & Tobago",
        "Flag: Tuvalu",
        "Flag: Taiwan",
        "Flag: Tanzania",
        "Flag: Ukraine",
        "Flag: Uganda",
        "Flag: U.S. Outlying Islands",
        "Flag: United Nations",
        "Flag: United States",
        "Flag: Uruguay",
        "Flag: Uzbekistan",
        "Flag: Vatican City",
        "Flag: St. Vincent & Grenadines",
        "Flag: Venezuela",
        "Flag: British Virgin Islands",
        "Flag: U.S. Virgin Islands",
        "Flag: Vietnam",
        "Flag: Vanuatu",
        "Flag: Wallis & Futuna",
        "Flag: Samoa",
        "Flag: Kosovo",
        "Flag: Yemen",
        "Flag: Mayotte",
        "Flag: South Africa",
        "Flag: Zambia",
        "Flag: Zimbabwe",
        "Flag: England",
        "Flag: Scotland",
        "Flag: Wales"];
    for (var i = 0; i <= a.length - 1; i++) {
        for (var j = 0; j <= smileysAndPeople.length - 1; j++) {
            if (a[i].name.includes(smileysAndPeople[j]))
                a[i].groupID = 1;
        }
        for (var k = 0; k <= animalsAndNature.length - 1; k++) {
            if (a[i].name.includes(animalsAndNature[k]))
                a[i].groupID = 2;
        }
        for (var l = 0; l <= foodAndDrink.length - 1; l++) {
            if (a[i].name.includes(foodAndDrink[l]))
                a[i].groupID = 3;
        }
        for (var m = 0; m <= activity.length - 1; m++) {
            if (a[i].name.includes(activity[m]))
                a[i].groupID = 4;
        }
        for (var n = 0; n <= travelAndPlaces.length - 1; n++) {
            if (a[i].name.includes(travelAndPlaces[n]))
                a[i].groupID = 5;
        }
        for (var o = 0; o <= objects.length - 1; o++) {
            if (a[i].name.includes(objects[o]))
                a[i].groupID = 6;
        }
        for (var p = 0; p <= symbols.length - 1; p++) {
            if (a[i].name.includes(symbols[p]))
                a[i].groupID = 7;
        }
        for (var q = 0; q <= flags.length - 1; q++) {
            if (a[i].name.includes(flags[q]))
                a[i].groupID = 8;
        }
    }
    console.log(a);
});