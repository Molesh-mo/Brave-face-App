


const feelingMessages= {
         happy: "Yay! You're happy — keep smiling and share your joy!",
        sad: "It’s okay to feel sad.Hugs help and things will get better.",
        angry: "Oh-oh, feeling mad? Take a deep breath like a dragon blowing out fire.",
        scared: "being scared doesn't mean no fear, it means pushing through it.",
        tired: "Feeling tired? you need to sleep. Rest and care of yourself.",
        excited: "Wow! Excited? That means something fun is happening!",
        confused: "Hmmm... confused? Asking questions is how we learn!",
        Proud: "You did it! Be proud — you’re amazing!",
        grateful: "You appreciate and thankful for everything and everyone around you",
        Hopeful: "I believe good things are coming",

}

;

const traitMessages= {
        strong: "You are brave and you dont give up!",
        courage: "Courage is doing the right thing, even when you feel scared — like a true hero!",
        Responsibility: "Heroes help others and take care of what needs to be done.",
        wisdom: "Being wise means you think before you act and make good choices.",
        focused: "With your focus, you're unstoppable your superpowers shines",
        Leadership: "A real leader listens, helps others, and shows the way with kindness.",
        smart: "you come up with amazing ideas that help others.",
        confidence: "You can do great things,just believe in yourself like a superhero!",
        Innovation: "Great heroes use their imagination to solve problems in cool new ways!",
        helpful: "helpful heroes stick by their friends and family — no matter what!"
}

;

document.querySelectorAll('#feeling-emojis .emoji').forEach(emoji=> {
        emoji.addEventListener('click', ()=> {
                const id=emoji.getAttribute('data-id');
                document.getElementById('feeling-message').textContent=feelingMessages[id];
            });
    });

document.querySelectorAll('#trait-emojis .emoji').forEach(emoji=> {
        emoji.addEventListener('click', ()=> {
                const id=emoji.getAttribute('data-id');
                document.getElementById('trait-message').textContent=traitMessages[id];
            });
    });