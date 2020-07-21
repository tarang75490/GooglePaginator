import React,{Component} from 'react'
import DesignerPaginator from '../DesignerPaginator/DesignerPaginator'
import classes from './integratepaginator.module.css'
import Input from '../../Component/input'
class IntegratePaginator extends Component{
    state = {
        activepage:1,
        form:{
            text:"Google",
            repeatingChar:"o",
            occurenceNo:2,
            margin:"8px",
            skip:5,
            totalPages:23
        }
    }
    onClickHandler = (activepage) =>{
        this.setState({
            activepage:activepage
        })
    }
    onChangeHandler = (event,inputIdentifier) => {
        let data=event.target.value;
        console.log(data)
        if (data !== ""){
        if(inputIdentifier === "occurenceNo" ||inputIdentifier === "totalPages" || inputIdentifier === "skip"){
            data = parseInt(data)
        }
    }
        
        const form = {
                ...this.state.form,
                [inputIdentifier]:data
            }
                console.log(form)

            this.setState({
                form : form
            })
        

    }
    


    render (){
        const header="Custom Paginator".split().map((letter)=>{
            return <span className={classes.hletter}>{letter}</span>
        })
        console.log(this.state)
        return (
            <React.Fragment>
            <div className={classes.header}>
            {header}
            </div>

        <div className={classes.surround}>
            
            <div className={classes.items}>
            <Input onChangeHandler={this.onChangeHandler} form={this.state.form}/>
            </div>
            <div className={classes.line}>
            </div>
            <div className={classes.item2}>
            <div className={classes.number}>
            {this.state.activepage}
            </div>
            <DesignerPaginator 
                    word={this.state.form.text}
                    repeatingChar={this.state.form.repeatingChar}  
                    occurenceNo={this.state.form.occurenceNo}
                    margin={this.state.form.margin} 
                    skip={this.state.form.skip} 
                    clicked={(activepage)=>this.onClickHandler(activepage)}  
                    totalPages={this.state.form.totalPages}  
                    />
            </div>

            
        </div>
        <div className={classes.footer}>
        <hr/>
        Made By Tarang Khetan<br/>
        Clone this Project:{"\xa0"}
        <i class="fa fa-github" href="https://github.com/tarang75490/GooglePaginator" style={{fontSize:"200%"}}></i><br/>
        
        </div>
        </React.Fragment>
        )
    }

}


export default IntegratePaginator



// <div className={classes.inputclass}>
// <input type="text" placeholder="Skip" onChange={(e)=>this.onChangeHandler(e,"skip")}  value={this.state.form.skip}/>
// </div>
// <div className={classes.inputclass}>
// <input type="text" placeholder="Total Pages" onChange={(e)=>this.onChangeHandler(e,"totalPages")}  value={this.state.form.totalPages}/>
// </div>