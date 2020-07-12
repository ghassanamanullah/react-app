import React, { useContext } from 'react';
import { Context } from './context';
/* 
codingan untuk  hooks
*/
function Hooks() {
  const { bahasa, tema, onLangChange, onThemeChange } = useContext(Context);

  return (
    <div 
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: tema === 'dark' ? 'black' : 'white' 
      }}>
      <h1 
        style={{ 
          color: tema === 'dark' ? 'white' : 'black' 
        }}>
        {
          bahasa === 'id' ? 
          'Halo Dunia' 
          : 
          'Hello World'
        }
      </h1>

      <button onClick={() => {
        onLangChange();
        onThemeChange();
      }}>{
        bahasa === 'id' ? 
          'Ubah bahasa ke inggris' 
          : 
          'Change Language to Indonesia'
      }</button>
    </div>
  );
}

export default Hooks;