// Partial<> allows us to create a type without using all of it's properties so we don't have to use the ?

import axios from "axios";

{
    // Bad: This means that anyone using 'Example' can ALWAYS omit properties
    interface Example {
        id?: number,
        title?: string,
        isActive?: boolean;
        someOtherProp?: string;
    }

    (async function updateTitleWithPartial(id: number, newTitle: string) {
        let updatedExample: Example = {
            id: id,
            title: newTitle
        }

        await axios.patch('somewhere.com', updatedExample);
    })
}

{
    // Good
    interface Example {
        id: number,
        title: string,
        isActive: boolean;
        someOtherProp: string;
    }

    (async function updateTitleWithPartial(id: number, newTitle: string) {
        let updatedExample: Partial<Example> = {
            id: id,
            title: newTitle
        }

        await axios.patch('somewhere.com', updatedExample);
    })
}



