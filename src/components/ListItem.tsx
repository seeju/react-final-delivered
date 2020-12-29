import React from 'react';

export interface IProps { 
    id: number,
    imagePath: string | null
    tittle: string,
    subtitle: string,
    footer: string
}

function ListItem({id, tittle, imagePath, subtitle, footer}:IProps) {
  return (
    <>
        <div>
            {imagePath && <img src={imagePath} style={{width: '200px', height:'200px'}} />}
            <h3>{tittle}</h3>
            <p>{subtitle}</p>
            <p>{footer}</p>
        </div>
    </>
  );
}

export default ListItem;