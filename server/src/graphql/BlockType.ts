import { enumType } from "nexus";

export const BlockType = enumType({
    name: "BlockType",
    members: {
        TEXT: "TEXT",
        HEADING: "HEADING",
        PAGE: "PAGE",
        BULLET: "BULLET",
        NUMBERED: "NUMBERED",
        TODO: "TODO",
        TOGGLE: "TOGGLE",
    },
});

// const blockTypes = [
//     { name: "TEXT", value: 0 },
//     { name: "HEADING", value: 1 },
//     { name: "PAGE", value: 2 },
//     { name: "BULLET", value: 3 },
//     { name: "NUMBERED", value: 4 },
//     { name: "TODO", value: 5 },
//     { name: "TOGGLE", value: 6 },
// ];
