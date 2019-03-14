import axios from 'axios';

interface GoodExample {
    id: number;
    title: string;
    isActive: boolean;
    someOtherProp: string;
}

interface BadExample {
    id?: number;
    title?: string;
    isActive?: boolean;
    someOtherProp?: string;
}

function updateTitle(id: number, newTitle: string) {
    let updatedExample: Partial<GoodExample> = {
        id: id,
        title: newTitle
    }

    // Make api call to update the example with the corresponding id
}

async function getBadExample(id: number): Promise<BadExample> {
    let response = await axios.get('badexample.com');
    return response.data;
}

function printTitle(title: string) {
    console.log(title);
}

let badExample = await getBadExample(1);
printTitle(badExample.title);

function fakeApi