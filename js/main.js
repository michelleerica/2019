encoder = {
    code: {
        a: 4,
        b: 17,
        c: 8,
        d: 11,
        e: 0,
        f: 20,
        g: 18,
        h: 7,
        i: 9,
        j: 12,
        k: 19,
        l: 21,
        m: 3,
        n: 22,
        o: 13,
        p: 23,
        q: 14,
        r: 5,
        s: 2,
        t: 1,
        u: 24,
        v: 15,
        w: 25,
        x: 16,
        y: 6,
        z: 10
    },

    lorem: `[Verse 1]
        Now that I can see another part of me
        Hittin' back, slap in the face, yeah, you were the key
        Yeah, I knew I'd see this other part of me
        Beat in my chest, pain in my breast, yeah, you were the key
        And you know, you know that you were right
        You know, you know I hate to fight
        You know, you know I can't believe

        [Chorus]
        You're right there
        And I'm right here thinking 'bout
        Here thinking about you
        About you
        See, you're right there
        And I'm right here thinking 'bout
        Here thinking about you
        About you
        (There thinking about you)
    `,

    encoder: function(){
        let convertedLorem = this.lorem.toLowerCase().split('');
        let newMessage = [];

        convertedLorem = convertedLorem.forEach(letter => {
            
            for (var key in this.code) {
                // console.log(key);
                if (key === letter) {
                    newMessage.push(this.code[key]);
                }
            }
        });
        return newMessage;
    },

    print: function(){
        document.getElementsByClassName("container")[0].textContent = this.encoder();
    }
}

console.log(encoder.print());
