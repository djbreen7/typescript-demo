import axios from "axios";

interface Example {
    id: number;
    title: string;
    isActive: boolean;
    someOtherProp: string;
}

// async function updateTitle(id: number, newTitle: string) {
//     let updatedExample: Example = {
//         id: id,
//         title: newTitle
//     }

//     await axios.put('somewhere.com', updatedExample);
// }

async function updateTitleWithPartial(id: number, newTitle: string) {
    let updatedExample: Partial<Example> = {
        id: id,
        title: newTitle
    }

    await axios.put('somewhere.com', updatedExample);
}
