import * as React from 'react';
import {Details} from 'components/Details/Details';
import {List} from 'components/List/List';
import {cn} from 'utils/classname';

import '../../styles/root.scss';
import './App.scss';

const block = cn('app');

export interface Item {
    id: number;
    name: string;
    avatar: string;
    details: {
        city: string;
        company: string;
        position: string;
    };
}

export function App() {
    const [list, setList] = React.useState<Item[]>([]);
    const [currentListItem, setCurrentListItem] = React.useState<number | undefined>();
    const [currentItemData, setCurrentItemData] = React.useState<Item | null>(null);

    const getList = async () => {
        const response = await fetch(
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json',
        );
        const data = await response.json();
        setList(data);
    };

    const getItemById = async (itemId?: number) => {
        if (!currentListItem) {
            setCurrentItemData(null);
            return;
        }
        const response = await fetch(
            `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${itemId}.json`,
        );
        const data = await response.json();
        setCurrentItemData(data);
    };

    React.useEffect(() => {
        getList();
    }, []);

    React.useEffect(() => {
        getItemById(currentListItem);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentListItem]);

    const handleClick = (id: number) => {
        if (id === currentListItem) {
            setCurrentListItem(undefined);
            return;
        }
        setCurrentListItem(id);
    };

    return (
        <div className={block()}>
            <List items={list} value={currentListItem} onItemClick={handleClick} />
            <Details data={currentItemData} />
        </div>
    );
}
