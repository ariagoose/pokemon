import React from 'react'

function Form(props) {
    return(
        <div>
            <form>
                <label for="poke">Pokemon Name: </label>
                <input type="text" name="pokemon" placeholder="works?" onChange={props.onNameInsertion}></input>
                <input type="submit" name="submit" value="Submit" onClick={props.onSearch}/>
          </form>       
        </div>
    )
}

export default Form