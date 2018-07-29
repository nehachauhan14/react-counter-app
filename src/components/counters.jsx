import React , {Component} from 'react';
import Counter from './counter';

class Counters extends Component{

    render(){
        const {onIncrement , onReset ,  onDelete , counters} = this.props;
        return (<div>
                    <button
                        onClick={onReset}  
                        className="btn btn-primary btn-lg m-2">Reset</button>
                    {counters.map(counter => 
                        <Counter 
                            key={counter.id}
                            onDelete={onDelete} 
                            counter={counter}
                            onIncrement = {onIncrement}>
                        </Counter>
                    )}
                </div>
        );
    }
}

export default Counters;