import { v4 as uuidv4 } from 'uuid';
/**
 * Contains business logic
 */


/**
 * Factory function for checkboxes
 * How should the UUID be handled? Title not unique.
 */
const Checkbox = (checkBoxName) => {
    let name = checkBoxName;
    let completed = false;
    const id = uuidv4();

    const getName = () => name;

    const isCompleted = () => completed

    const getId = () => id;

    const setName = (newName) => {
        name = newName;
    }

    const changeCompletion = () => {
        completed = !completed;
    }

    return {setName, changeCompletion, getName, isCompleted, getId}
}

/**
 * Factory function for to do cards.
 * How should the UUID be handled? Title not unique.
 * Break out checkboxes? Or only keep getcheckboxes and getcheckbox and add/delete? Rest in the model?
 */
const TodoCard = (firstTitle) => {
    let description = "";
    let completed = false;
    let title = firstTitle;
    const checkBoxes = []; // objects instead?
    const id = uuidv4();

    // Getters
    const getTitle = () => title;
    const getDescription = () => description;
    const isCompleted = () => completed;
    const getId = () => id;
    const getCheckboxes = () => checkBoxes;

    // Setters
    const setTitle = (newTitle) => {
        // Check if title is empty.
        title = newTitle;
    }

    const setDescription = (newDescription) => {
        description = newDescription;
    } 

    const changeCompletion = () => {
        completed = !completed;
    }

    
    const addCheckBox = (name) => {
        const newCheckBox = Checkbox(name);
        checkBoxes.push(newCheckBox);
    }

    const getCheckBox = (checkboxId) => {
        const checkBox = checkBoxes.find(checkbox => checkbox.getId() === checkboxId);
        if (checkBox != null){
            return checkBox;
        } 
        return null;
        
    }

    const editCheckBoxName = (newName, checkboxId) => {
        const checkBox = checkBoxes.find(checkbox => checkbox.getId() === checkboxId);
        if (checkBox !== null ){
            checkBox.setName(newName);
        }
    }

    const deleteCheckBox = (checkboxId) => {
        const index = checkBoxes.map(checkbox => checkbox.getId()).indexOf(checkboxId);
        if (index > -1 ){
            checkBoxes.splice(index,1);
            console.log(`Succesfully removed ${checkboxId}`);
        }
    }
    
    const changeCheckBoxCompletion = (checkboxId) => {
        const checkBox = checkBoxes.find(checkbox => checkbox.getId() === checkboxId);
        if (checkBox != null){
            checkBox.changeCompletion();
        }
    }

    return {getTitle, getDescription, isCompleted, getId, setTitle, setDescription, changeCompletion, getCheckboxes, addCheckBox, changeCheckBoxCompletion, deleteCheckBox, editCheckBoxName, getCheckBox}
}



const testController = () => {
    const cardOne = TodoCard("Exercise");
    cardOne.setDescription("Ride the bike");
    cardOne.changeCompletion();
    const cardTwo = TodoCard("Buy groceries");
    cardTwo.setDescription("One banana");
    console.log(`Cardone has title ${cardOne.getTitle()}, description ${cardOne.getDescription()} and guid ${cardOne.getId()}. Is it completed? ${cardOne.isCompleted()}`);
    console.log(`cardTwo has title ${cardTwo.getTitle()}, description ${cardTwo.getDescription()} and guid ${cardTwo.getId()}. Is it completed? ${cardTwo.isCompleted()}`);

    // Testing checkboxes
    cardOne.addCheckBox("First thing");
    cardOne.addCheckBox("Second thing");
    cardOne.addCheckBox("Third thing");

    console.log("Checkboxes test");
    const checkBoxes = cardOne.getCheckboxes();
    const storedGuids = [];
    checkBoxes.forEach(checkbox => {
        console.log(`Checkbox name: ${checkbox.getName()} with the id ${checkbox.getId()} and is it completed? ${checkbox.isCompleted()}`)
        storedGuids.push(checkbox.getId());
    })

    // Testing removing and editing checkboxes
    const newNameCheckBox = "Test new name";
    cardOne.changeCheckBoxCompletion(storedGuids[2]);
    cardOne.editCheckBoxName(newNameCheckBox, storedGuids[1]);
    cardOne.deleteCheckBox(storedGuids[0]);

    console.log("Updated second name, removed first one, set third one to complete.");
    checkBoxes.forEach(checkbox => {
        console.log(`Checkbox name: ${checkbox.getName()} with the id ${checkbox.getId()} and is it completed? ${checkbox.isCompleted()}`)
    })

}

// Decide if the checkboxes should 
// TO DO: Add projects and boards.





export {testController}