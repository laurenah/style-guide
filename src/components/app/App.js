import React from 'react';
import './App.css';
import Color from '../Color';

function App() {
  return (
    <div className="root-1 hasSidebar">
      <main className='content'>
        <section> {/* Interchangeable Content Here */}
          <section className='wrap'>
            <div className='section-header'>
              <h1>Foundation</h1>
            </div>
            <article>
              <div>
                <p className='para'>Colors, spacing, and typography are the building blocks of the design system and are often referred to as design tokens. Design tokens are named entities that store visual design attributes.</p>
              </div>
            </article>

            <section>
              <Color />
            </section>
          </section>
        </section>

        <footer className='footer'>
          <p className='para'>&copy; laurenah</p>
        </footer>
      </main>

      <div className='sidebar'> 
        <header className='logo'>
          <h1>Style Guide</h1>
        </header>

        <div>
          <div class='sidebarContent'> {/* Routing Goes Here */}
            <nav>
              <ul className='list'>
                <li className='item'>
                  <a className='link' href='/'>Foundation</a>

                  <ul className='list'>
                    <li className='item'><a className='link' href='/'>Colors</a></li>
                    <li className='item'><a className='link' href='/'>Typography</a></li>
                    <li className='item'><a className='link' href='/'>Spacing</a></li>
                  </ul>
                </li>

                <li className='item'>
                  <a className='link' href='/'>Primitives</a>

                  <ul className='list'>
                    <li className='item'><a className='link' href='/'>Button</a></li>
                    <li className='item'><a className='link' href='/'>Heading</a></li>
                    <li className='item'><a className='link' href='/'>Input</a></li>
                    <li className='item'><a className='link' href='/'>Link</a></li>
                    <li className='item'><a className='link' href='/'>Text</a></li>
                  </ul>
                </li>

                <li className='item'>
                  <a className='link' href='/'>Layout Primitives</a>

                  <ul className='list'>
                    <li className='item'><a className='link' href='/'>Box</a></li>
                    <li className='item'><a className='link' href='/'>Flex</a></li>
                    <li className='item'><a className='link' href='/'>Grid</a></li>
                    <li className='item'><a className='link' href='/'>Stack</a></li>
                  </ul>
                </li>

                <li className='item'>
                  <a className='link' href='/'>UI Patterns</a>

                  <ul className='list'>
                    <li className='item'><a className='link' href='/'>Label</a></li>
                    <li className='item'><a className='link' href='/'>Login Form</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
