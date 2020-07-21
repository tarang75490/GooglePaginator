import React from 'react'
import styled from 'styled-components'
import classes from './DPaginator.module.css'
import pfucntions from './utilityFuctions/paginationFunctions'
class LetterPaginator extends React.Component{
    state={
        end :null,
        start:null,
        totalPages:null,
        skip:null,
        active : 1,
        word: null,
        occurenceNo :null,
        char:null
    }
    componentDidMount(){
        this.setState({
            totalPages:this.props.totalPages || 100,
            skip:this.props.skip || 10,
            word: this.props.word,
            start: this.props.totalPages > 0 ? 1 : 1,
            end : ((this.props.totalPages || 10) > (this.props.skip || 5) ?  this.props.skip : this.props.totalPages) || 10,
            occurenceNo : this.props.occurenceNo || 1,
            char : this.props.repeatingChar || this.props.word[0]
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(this.props.totalPages!==prevProps.totalPages ||this.props.skip!==prevProps.skip || this.props.word!==prevProps.word ||
            this.props.occurenceNo!==prevProps.occurenceNo || this.props.char   !==prevProps.char  ){
            console.log(this.props.totalPages    ===prevProps.totalPages   )
            console.log("fdsfsdf12132")
            this.updateState()
        }if((this.props.totalPages!==prevProps.totalPages || this.props.skip!==prevProps.skip ) && (this.state.start!==prevState.start || this.state.end !==prevState.end )){
            console.log("fdsfsdf")
            this.updateState()
        }
        return true
    }
    updateState = ()=>{
        this.setState({
            totalPages:this.props.totalPages || 100,
            skip:this.props.skip || 10,
            word: this.props.word,
                start: this.props.totalPages > 0 ? 1 : 1,
                end : ((this.props.totalPages || 10) > (this.props.skip || 5) ?  this.props.skip : this.props.totalPages) || 10,
            occurenceNo : this.props.occurenceNo || 1,
            char : this.props.repeatingChar || this.props.word[0]
        })
    }
    incrementFunction=()=> {
        this.setState(pfucntions.incrementFunction(this.state))
    }
    decrementFunction = () => {
        this.setState(pfucntions.decrementFunction(this.state))
    }
    toFirst = ()=>{
        this.setState(pfucntions.toFirst(this.state))
    }
    toLast = ()=>{
      this.setState(pfucntions.toLast(this.state))
    }
    paginationHandler = (r) =>{
        this.setState({
            active: r
        })
        this.props.clicked(r)
    }

    render(){
        const Bspan = styled.span`
            font-size:1.2em;    
            margin:2px 40px;
            marginRight: 53px;
            color:blue;
            font-weight:bold;
            cursor:pointer;
            height: 25px;
            width: 25px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
        `;
        let items;
        if (this.state.word){
        let flag = 1
        const char = this.state.char;
        const occurenceNo = this.state.occurenceNo;
        const start = this.state.start
        const end = this.state.end
        const word = this.state.word
        const cursorStart = start === 1 ? 'not-allowed':'pointer'
        const cursorEnd = this.state.end === this.state.totalPages ? 'not-allowed':'pointer'
        const margin = this.props.margin || "8px"
        items = [<span onClick={this.toFirst} className={classes.dleft} key= "fastRight"><center>&#10216;&#10216;</center></span> ]
        items.push(<span className={classes.left} key= "right" onClick={this.decrementFunction} style={{cursor:cursorStart}} ><center>&#10216;</center></span>)
        word.split("").forEach((letter,index)=>{
            if (letter === char && flag ===  occurenceNo){
            
                console.log(start,end)
                for(let i =start ;i<=end;i++){
                    let attachedclass = [classes.pletter]
                    if (this.state.active === i){
                        attachedclass = [classes.pletter,classes.active]
                    }
                    items.push(<span className={classes.item} key={'c'+i} onClick={()=>this.paginationHandler(i)}>
                                    <span className={attachedclass.join(' ')} style={{"marginLeft":margin,"marginRight":margin}}>{letter}</span>
                                    <span className={classes.pnumber} style={{"marginLeft":margin,"marginRight":margin}}>{i}</span>
                                </span>)
                                flag = flag +1 
                    }
                }else{
                    if (letter === char ){ 
                        if (flag !== occurenceNo){
                            items.push(<span key={'L'+index} className={classes.letter}>{letter}</span>)
                        }
                        flag = flag +1 
                    }
                    else {
                        items.push(<span key={'M'+index} className={classes.letter}>{letter}</span>)
                    }
                }
                })
        items.push(<span onClick={this.incrementFunction} className={classes.right} key="left" style={{cursor:cursorEnd}}><center>&#10217;</center></span>)
        items.push(<span onClick={this.toLast} className={classes.dright} key= "fastLeft"><center>&#10217;&#10217;</center></span>)
        }
        console.log(items)
        return(
           <span className={classes.word}>{items}</span>
        )

    }

}

export default LetterPaginator