import axios from "axios";

interface Example {
    isActive: boolean;
    someOtherProp: string;
}

interface Entity {
    id: number
}

interface Titled {
    title: string
}

type TitledEntity = Titled & Entity & object;

async function updateTitle(id: number, newTitle: string) {
    let updatedExample: TitledEntity = {
        id: id,
        title: newTitle,
    }

    await axios.put('somewhere.com', updatedExample);
}

async function updateTitleWithPartial(id: number, newTitle: string) {
    let updatedExample: Partial<Example> = {
        id: id,
        title: newTitle
    }

    await axios.put('somewhere.com', updatedExample);
}
