import React from 'react';

class Spacing extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            spacings: ['0', '0.125rem', '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '16rem']
        });
    }

    render() {
        return(
            <section className='wrap'>
                <div className='section-header' id='Spacing'>
                  <h2>Spacing</h2>
                </div>

                <article>
                  <div className='para'>
                    <div className='spacing-grid'>
                        {this.state.spacings.map((space, i) =>
                            <div className='spacing-row' value={space} key={i}>
                                <h3>{i}</h3>
                                <div className='spacing-inner' style={{
                                    width: space
                                }}>
                                <p className='ruler'>{space}</p>
                                </div>
                            </div>
                        )}
                    </div>
                  </div>
                </article>
              </section>
        )
    }
}

export default Spacing;