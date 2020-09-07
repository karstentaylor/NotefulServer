const makeFoldersArray = () => {
    return [
        {
            id: 1,
            folder_name: 'Important'
        },
        {
            id: 2,
            folder_name: 'Super'
        },
        {
            id: 3,
            folder_name: 'Spangley'
        },
    ];
};

const makeNotesArray = () => {
    return [
        {
            id: 1,
            note_name: 'Apples',
            note_content: 'Swwet!',
            modified: '2019-04-03T00:00:00.000Z',
            folder_name: 1,
        },
        {
            id: 2,
            note_name: 'Oranges',
            note_content: 'Sweet and Sour!',
            modified: '2019-05-18T23:00:00.000Z',
            folder_name: 2,
        },
        {
            id: 3,
            note_name: 'Limes',
            note_content: 'Sour!',
            modified: '2020-03-20T00:00:00.000Z',
            folder_name: 3,
        },
    ];
};

module.exports = {
    makeFoldersArray,
    makeNotesArray,
}