export const updateObjectInArray = (items: any, newObjProps: any) => {

    return newObjProps.map((u: any) => {

            return {items , ...u}

        return items;
    })
}
