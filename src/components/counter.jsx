 import React, {Component} from 'react';

 class Counter extends Component{

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    //     this.handleDecrement = this.handleDecrement.bind(this);
    //    console.log('In constructor' , this);
    // }
    state ={
        //value:this.props.counter.value,
        ImageUrl : "https://picsum.photos/100/50/?random",
    };

    styles={
        fontsize : 10,
        fontweight : "bold",
        margin : "10px" 

    }

    renderTags() {
        if(this.state.tags.length === 0) return <p>No tags are available!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>; 
    }

    handleIncrement = (product) => {
        this.setState({value : this.state.value+1})
    }

    handleDecrement = (product) => {
        if(this.state.value > 0) {
            this.setState({
                value : this.state.value-1
            })
        }
        
    }

    doHandleIncrement = ()=>{
        this.handleIncrement({id:1});
    }


    render(){
        console.log("props :" , this.props);
        return (
            
            <div style={{margin:10}}>
                 <h4>Title #{this.props.counter.id}</h4>
                <img src={this.state.ImageUrl} alt=""/>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={()=> this.props.onIncrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm m-2">Increment
                </button>
                <button
                    onClick={()=>this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm"> Delete
                </button>
            </div>
        );
    }

    getBadgeClasses = () =>{
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount = () =>{
        const {value} = this.props.counter;
        return value === 0 ? "Zero" :  value ;
   }
 }

 export default Counter;