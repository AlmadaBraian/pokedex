import React, {Component} from 'react';
import App, {handleSubmit, handleChange, pokemon } from '..\src\App';

class AutoComplete extends Component {
    
    render(){

        
        
        return <form onSubmit={handleSubmit}>
                    <label>
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Ingrese nombre del pokemon"
                        value={pokemon}
                    />
                    </label>
            </form> 
                
    }
}
 export default AutoComplete