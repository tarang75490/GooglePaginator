import React,{Component} from 'react'
import DesignerPaginator from '../DesignerPaginator/DesignerPaginator'
import classes from './integratepaginator.module.css'
class IntegratePaginator extends Component{
    state = {
        activepage:1
    }
    onClickHandler = (activepage) =>{
        this.setState({
            activepage:activepage
        })
    }



    render (){
        return (
        <div className={classes.surround}>
        <div className={classes.items}>
            Custom Paginator
            </div>
            <div className={classes.items}>
            {this.state.activepage}
            </div>
            <div className={classes.items}>
            <DesignerPaginator 
                    word="Tarang" 
                    repeatingChar="a"  
                    occurenceNo={1} 
                    skip={10} 
                    clicked={(activepage)=>this.onClickHandler(activepage)}  
                    totalPages={95}  
                    />
            </div>
            
        </div>  
        )
    }

}


export default IntegratePaginator