import {cn} from 'utils/classname';

import './List.scss';

const block = cn('list');

interface ListProps {
    items: {id: number; name: string}[];
    value?: number;
    onItemClick: (value: number) => void;
}

export function List({items, value, onItemClick}: ListProps) {
    return (
        <ul className={block()}>
            {items.map((item) => (
                <li
                    key={item.id}
                    className={block('item', {selected: value === item.id})}
                    onClick={() => onItemClick(item.id)}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
}
