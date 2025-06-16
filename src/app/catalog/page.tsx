import React from 'react'
import { getLocalData } from "../../../lib/localdata";
import { Perfume } from '../../../data/type';

export default async function CatalogPage() {
  const localData = await getLocalData();

  return (
    <div>
      <h1>Catalog Brader</h1>
      <ul>
        {localData.map((item: Perfume, index: number) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

