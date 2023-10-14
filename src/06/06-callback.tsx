import React, {ChangeEvent, MouseEvent} from 'react'

// const callback = (): number => { alert('hey')
// return 12
// }
// window.setTimeout( callback, 1000)

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {


        alert(event.currentTarget.name)
    }

    const saveUser = () => {
        alert('user should be save')
    }

    const onNameChanged = () =>{
        console.log("name changed")
    }
    const focusLostHandler = () =>{
        console.log("focus lost")
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) =>{
        console.log("age changed: " + event.currentTarget.value)
    }




    return <div><textarea onChange={onNameChanged}
                          onBlur={focusLostHandler}
    >Elizabeth</textarea>
        <input onChange={onAgeChanged} type={"number"}/>
        <button name="delete" onClick={deleteUser} >Delete</button>
        <button name="save" onClick={saveUser}>Save</button>

    </div>
}