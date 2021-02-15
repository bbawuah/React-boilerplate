import React, { useEffect } from 'react';
import {render} from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import webfont from 'webfontloader'
import { Form } from './components/Form/Form';


const App: React.FC = ()  =>  {

        return (
                <div className="form-container">
                        <img src="assets/iMG_7412.jpg"></img>
                        <h1>A sweet message for Mary</h1>
                        <p>
                        We know our dear <strong>Mary</strong> is turning 24 this week and we want to make something special for her this year that she can always look back to as.
        
                        </p>
                        <p>
                        And we need your help!!
                        </p>
                        <p>
                        We created a digital lookbook and we want to fill it with messages from close friends of Mary!
                        </p>
                        <p>
                        We love you to contribute to this book by sharing with Mary how much you care about her and how important she has been to you!
                        </p>
                        <p>
                        We thank you in advance! :)                     
                        </p>
                        <Form />
                </div>
        )
}

render(<App/>, document.getElementById('app'))