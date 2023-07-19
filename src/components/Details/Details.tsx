import type {Item} from 'containers/App/App';
import {cn} from 'utils/classname';

import './Details.scss';

const block = cn('details');

interface DetailsProps {
    data: Item | null;
}

export function Details({data}: DetailsProps) {
    if (!data) {
        return null;
    }
    const {name, avatar, details} = data;
    return (
        <div className={block()}>
            <img key={data.id} className={block('img')} src={avatar} alt="" />
            <h2 className={block('item')}>{name}</h2>
            <div className={block('item')}>City: {details.city}</div>
            <div className={block('item')}>Company: {details.company}</div>
            <div className={block('item')}>Position: {details.position}</div>
        </div>
    );
}
