import React from 'react';

class Typography extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            headers: ['heading', 'body', 'disclaimer', 'error']
        });
    }

    render() {
        return(
            <section className='wrap'>
                <div className='section-header' id='typography'>
                  <h2>Typography</h2>
                </div>

                <article>
                  <div className='para'>
                      <div className='typo-grid'>
                        {this.state.headers.map((header, i) =>
                            <div className='typo-row' key={i}>
                                <h3>{header[0].toUpperCase() + header.substring(1)}</h3>
                                <p className={`${header}-demo`}>The quick brown fox jumps over the lazy dog</p>
                            </div>
                        )}
                      </div>
                  </div>
                </article>
              </section>
        )
    }
}

export default Typography;