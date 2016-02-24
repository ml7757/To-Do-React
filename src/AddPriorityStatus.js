import React from 'react';

class AddPriorityStatus extends React.Component{

    onSubmit(event){
      event.preventDefault();
    }

    render(){
        return (
          <form>
            <label><b>Choose task Priority: </b></label><br />
            <input type="radio" name="priority" value="high" checked /> High<br />
            <input type="radio" name="priority" value="medium" /> Medium<br />
            <input type="radio" name="priority" value="low" /> Low
          </form>
        );
    }
}

export default AddPriorityStatus;
