import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Punklist from './components/Punklist';

function App() {
  const [punkListData, setPunkListData] = useState([])
  
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x56c1F309D9f6d42bAFa6498F534bf24CdF161f60&order_direction=asc'
      )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    
    return getMyNfts()
  }, [])

  return (
    <div className='app'>
      <Header />
      <CollectionCard 
      id={0} 
      name={'Anthony Punk'} 
      traits={[{'value': 7}]} 
      image='https://nftlabs.mypinata.cloud/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu' 
      />
      <Punklist punkListData={punkListData} />
    </div>
  )

}

export default App;
