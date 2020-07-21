import React from 'react'
import classes from "./input.module.css";


class Input extends React.Component{

    render(){
      
        return(
          <React.Fragment>
          <div className={classes.inputclass}>
            <label for="fname">Text</label>
            <input type="text"  id="fname"placeholder="Text to have paginated style" onChange={(e)=>this.props.onChangeHandler(e,"text")} value={this.props.form.text}/>
            </div>
            <div className={classes.inputclass}>
            <label for="fname">Repeating Character</label>
            <input type="text" placeholder="Repeating Characters" onChange={(e)=>this.props.onChangeHandler(e,"repeatingChar")} value={this.props.form.repeatingChar}/>
            </div>
            <div className={classes.inputclass}>
            <label for="fname">Letter Occurence No</label>
            <input type="text" placeholder="Occurence No" onChange={(e)=>this.props.onChangeHandler(e,"occurenceNo")}  value={this.props.form.occurenceNo}/>
            </div>
            <div className={classes.inputclass}>
            <label for="fname">Margin</label>
            <input type="text" placeholder="margin" onChange={(e)=>this.props.onChangeHandler(e,"margin")}  value={this.props.form.margin}/>
            </div>
            <div className={classes.inputclass}>
            <label for="fname">Skip</label>
            <input type="text" placeholder="" onChange={(e)=>this.props.onChangeHandler(e,"skip")}  value={this.props.form.skip}/>
            </div>
            <div className={classes.inputclass}>
            <label for="fname">Total Pages</label>
            <input type="text" placeholder="Total Pages" onChange={(e)=>this.props.onChangeHandler(e,"totalPages")}  value={this.props.form.totalPages}/>
            </div>
          </React.Fragment>
        )

    }

}

export default Input