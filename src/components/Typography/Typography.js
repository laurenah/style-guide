import React from 'react';

class Typography extends React.Component {
    constructor(props) {
        super (props);
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
                          <div className='typo-row'>
                              <h3>Heading</h3>
                              <p className='heading-demo'>The quick brown fox jumps over the lazy dog</p>
                          </div>

                          <div className='typo-row'>
                              <h3>Body</h3>
                              <p className='body-demo'>The quick brown fox jumps over the lazy dog</p>
                          </div>

                          <div className='typo-row'>
                              <h3>Disclaimer</h3>
                              <p className='disc-demo'>The quick brown fox jumps over the lazy dog</p>
                          </div>

                          <div className='typo-row'>
                              <h3>Error</h3>
                              <p className='error-demo'>The quick brown fox jumps over the lazy dog</p>
                          </div>
                      </div>
                  </div>
                </article>
              </section>
        )
    }

}

export default Typography;