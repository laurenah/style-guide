import React from 'react';

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['333333', '7E7E7E', 'BBBBBB', 'E1E1E1']
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(i, e) { // change colors as the values are changed
        e.preventDefault();
        var newColors = this.state.colors; // copy state to edit
        newColors[i] = e.target.value.substring(1, 7); // allocate new color minus the hash symbol
        this.setState({
            colors: newColors
        });
    }

    render() {
        return (
            <section className='wrap'>
                <div className='section-header' id='colors'>
                    <h2>Colors</h2>
                </div>
    
                <article>
                    <div className='para'>
                    <div className='color-grid'>
                        <div className='color-row'>
                            {
                                this.state.colors.map((color, i) => 
                                    <div className='swatch' key={i}>
                                        <div className='color' style={{backgroundColor: `#${color}`}}>
                                            <p><input value={`#${color}`} onChange={(e) => this.handleChange(i, e)}></input></p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    </div>
                </article>
            </section>
        );
    }
    
}

export default Color;