import React from 'react';
import Color from '../Color';
import Typography from '../Typography';
import Spacing from '../Spacing';

class Foundation extends React.Component {
    colorsRef = null;
    typoRef = null;
    spacingRef = null;

    componentDidUpdate() {
        if (this.props.location.state.colors) {
            this.scrollToColours();
        } else if (this.props.location.state.typo) {
            this.scrollToTypo();
        } else if (this.props.location.state.spacing) {
            this.scrollToSpacing();
        }
    }

    scrollToColours = () => window.scrollTo(0, this.colorsRef.offsetTop)
    scrollToTypo = () => window.scrollTo(0, this.typoRef.offsetTop)
    scrollToSpacing = () => window.scrollTo(0, this.spacingRef.offsetTop)

    render() {
        return(
            <section className='wrap'>
                <div className='section-header'>
                <h1>Foundation</h1>
                </div>
                <article>
                <div>
                    <p className='para'>Colors, spacing, and typography are the building blocks of the design system 
                    and are often referred to as design tokens. Design tokens are named entities that store visual design attributes.</p>
                </div>
                </article>

                <section ref={(ref) => this.colorsRef = ref}>
                <Color />
                </section>

                <section ref={(ref) => this.typoRef = ref}>
                <Typography />
                </section>

                <section ref={(ref) => this.spacingRef = ref}>
                <Spacing />
                </section>
            </section>
        )
    }
}

export default Foundation;