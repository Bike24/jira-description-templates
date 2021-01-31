import React from 'react';
import { SelectorWrapper, Select, Option } from './Selector.styles';

function Selector(props: SelectorProps) {

  const select = (id: string): void => {
    const selected = props.list.find(item => item.id === id);
    if (!selected) return;
    props.onChange(selected);
  }

  return (
    <SelectorWrapper>
      <Select value={props.current.id}
              onChange={ e => select(e.target.value)}>
        {props.list.map((item: Selectable) => (
          <Option value={item.id}>{item.name}</Option>
        ))}
      </Select>
    </SelectorWrapper>
  )
}

export default Selector;