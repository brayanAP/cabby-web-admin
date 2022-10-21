import React from 'react'
import Text from 'components/atoms/Text'
import Button from 'components/atoms/Button'
import type { Music } from 'types'
import { List, Item } from './style'

type Props = {
    data: Array<Music>;
    onDelete?: (item: Music) => Promise<void> | void;
}

const MusicList: React.FC<Props> = ({ data, onDelete }) => (
    <List>
        {data.map((item) => (
            <Item key={item.id}>
                <div>
                    <Text>{item.name}</Text>
                    <Text>{item.author}</Text>
                </div>
                <Button variant="outlined" color="error" onClick={() => onDelete?.(item)}>Delete</Button>
            </Item>
        ))}
    </List>
)

export default MusicList
