import React from 'react';
import './App.css';
import Foundation from './Foundation';
import {BrowserRouter, Link, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="root-1 hasSidebar">
      <main className='content'>
        
        <section> {/* Interchangeable Content Here */}
          <Route exact path={'/'} component={Foundation} />
        </section>

        <footer className='footer'>
          <p className='para'>&copy; laurenah</p>
        </footer>
      </main>

      <div className='sidebar'> 
        <header className='logo'>
          <h1>Stylst</h1>
        </header>

        <div>
          <div className='sidebarContent'> {/* Routing Goes Here */}
            <nav>
              <ul className='list'>
                <li className='item'>
                  <a className='link' href='/'>Foundation</a>

                  <ul className='list'>
                    <li className='item'>
                      <Link className='link' to={{
                        pathname: '/',
                        hash: '#colors',
                        state: {
                          fromSidebar: true,
                          colors: true,
                          typo: false,
                          spacing: false
                        }
                      }}>Colors</Link>
                    </li>
                    <li className='item'>
                      <Link className='link' to={{
                          pathname: '/',
                          hash: '#typography',
                          state: {
                            fromSidebar: true,
                            colors: false,
                            typo: true,
                            spacing: false
                          }
                        }}>Typography</Link>
                    </li>
                    <li className='item'>
                      <Link className='link' to={{
                            pathname: '/',
                            hash: '#spacing',
                            state: {
                              fromSidebar: true,
                              colors: false,
                              typo: false,
                              spacing: true
                            }
                          }}>Spacing</Link>
                    </li>
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
    </BrowserRouter>
  );
}

export default App;
