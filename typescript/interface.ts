interface ResponseIF {
    id: number;
    name: string;
    description: string;
    tag: string[];
    image: {
        url: string;
        anchor: string;
    }
}

type RequestType = {
    id: number;
}

const getResponse = ({id}: RequestType): ResponseIF => {
    return {
        id: id,
        name: "sojiwoo",
        description: "description",
        tag: ["a", "b"],
        image: {
            url: "https",
            anchor: "image anchor"
        }
    }
}

console.log({id: 1});