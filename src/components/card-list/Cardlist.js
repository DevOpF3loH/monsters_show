import React from 'react'
import { Card } from '../card/Card';
import './Cardlist.css'

export const Cardlist = (props) => {

  return (<div className='cardlist'>
    {props.monsters.map(monster => ( 
      <Card key={monster.id} monster={monster} />
        ))}
    </div>);
}