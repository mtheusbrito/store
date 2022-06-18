import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { IProduct } from '../../store/modules/cart/types';
import Item from '../Item';

// import { Container } from './styles';
import styles from './index.module.css';

const Catalog: React.FC = () => {
  
  const [ catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(()=>{
    api.get(`products`).then(response => { 
      setCatalog(response.data);
    })
  },[])
  
  return (<div className={styles.catalog}>
    {catalog.map((product)=>{
      return (
        // <CatalogItem product={product} key={product.id}/>
        <Item product={product} key={product.id}/>
      );
    })}
  </div>);
}

export default Catalog;