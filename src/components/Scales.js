import React from 'react';
import {
    symbolClasses
} from './Chroma';
import * as Scale from 'tonal-scale';

import { symbolName, scaleNames } from './Symbols'

export default class Scales extends React.Component {
    render() {
        const props = this.props.props;
        const scales = scaleNames(this.props.group)
            .sort((a, b) => {
                return Scale.notes(props.tonic, a).length < Scale.notes(props.tonic, b).length ? -1 : 1;
            });
        return scales.reduce((groups, scale, index) => {
            const n = Scale.notes(props.tonic, scale).length;
            if (!groups[n]) {
                groups[n] = [];
            }
            groups[n].push(scale);
            groups[n] = groups[n].sort((a, b) => a.length < b.length ? -1 : 1);
            return groups;
        }, []).map(group =>
            group.map((scale, index) => (
                (<li key={index} className={symbolClasses('scale', scale, props)}
                    onClick={() => this.props.onClick({ chord: null, scale })}
                    onMouseEnter={() => this.props.onMouseEnter(Object.assign(props, { chord: null, scale }))}
                    onMouseLeave={() => this.props.onMouseLeave(Object.assign(props, { chord: null, scale }))}>
                    {symbolName('scale', scale)}
                </li>)
            )))
            .slice(1).map((group, index) => (
                <div key={index}>
                    <ul key={index} className="scroll">
                        {group}
                    </ul>
                </div>));
    }
}
