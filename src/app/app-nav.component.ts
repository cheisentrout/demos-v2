import { NONE_TYPE } from '@angular/compiler';
import { Component, ViewEncapsulation } from '@angular/core';


/* ViewEncapsulation.None : this makes styles written in this component, accessible
to all elements in the DOM. So, for example, the styles specified in the div code block
are applied to ALL divs, not just the single div in the template below. */
@Component({
    selector: 'saa-app-nav',
    encapsulation: ViewEncapsulation.None,
    template: `
        <div>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Prerequisites</a>
                </li>
                <li>
                    <a href="#">Modules</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
        </div>
    `,
    styles: [`

        div {
            background: #2A9FBC;
            border-radius: 0.5em;
            margin: 1.5em 0;
            padding: 1em 1.2em;
            border: 2px solid purple;
        }

        ul {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        a {
            color: #fff;
            padding: 0 1em;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

    `]
})

export class AppNavComponent {
}