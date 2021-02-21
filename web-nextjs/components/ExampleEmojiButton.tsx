import React, { useRef, useState, useEffect } from "react";
// import EmojiButton from "@joeattardi/emoji-button";
// import EmojiButton = require("@joeattardi/emoji-button");
import EmojiButton from "emoji-button";

export default function ExampleEmojiButton({
    initialEmoji = "😎",
    initialImageUrl,
    options,
}) {
    const buttonRef = useRef();
    const [picker, setPicker] = useState(null);
    const [emoji, setEmoji] = useState(initialEmoji);
    const [imageUrl, setImageUrl] = useState(initialImageUrl);

    useEffect(() => {
        const pickerObj = new EmojiButton(options);

        pickerObj.on("emoji", (selection) => {
            setEmoji(selection.emoji);
            setImageUrl(selection.url);
        });

        setPicker(pickerObj);
    }, []);
    const togglePicker = () => {
        picker.togglePicker(buttonRef.current);
    };

    // function togglePicker() {
    //     picker.togglePicker(buttonRef.current);
    // }

    return (
        <button ref={buttonRef} onClick={togglePicker}>
            {imageUrl ? (
                <img alt={emoji} src={imageUrl} />
            ) : (
                <span>{emoji}</span>
            )}
        </button>
    );
}

// // import 'emoji-picker-element';
// // export const ExampleEmojiButton = () => {
// //     document.querySelector('emoji-picker')
// //   .addEventListener('emoji-click', event => console.log(event.detail));

// //     return (
// //         <emoji-picker></emoji-picker>
// //     )
// // }

// import React, { useRef, useState, useEffect } from "react";
// import {EmojiButton}  from "@joeattardi/emoji-button";

// // interface ExampleEmojiButtonProps {
// //     initialEmoji: string | null;
// //     initialImageUrl: string | null;
// //     options: any;
// // }

// export const ExampleEmojiButton = ({
//     initialEmoji = "😎",
//     initialImageUrl,
//     options,
// }) => {
//     const buttonRef = useRef();
//     const [picker, setPicker] = useState(null);
//     const [emoji, setEmoji] = useState(initialEmoji);
//     const [imageUrl, setImageUrl] = useState(initialImageUrl);

//     const useEffect = () => {
//         const pickerObj = new EmojiButton(options);

//         pickerObj.on("emoji", (selection) => {
//             setEmoji(selection.emoji);
//             setImageUrl(selection.url);
//         });

//         setPicker(pickerObj);
//     }, []);

//     const togglePicker = () => {
//         picker.togglePicker(buttonRef.current);
//       }

//       return (
//         <button
//           className={styles.emojiButton}
//           ref={buttonRef}
//           onClick={togglePicker}
//         >
//           {imageUrl ? <img alt={emoji} src={imageUrl} /> : <span>{emoji}</span>}
//         </button>
//       );
// };
