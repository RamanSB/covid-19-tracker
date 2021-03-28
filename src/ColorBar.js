import React from 'react';
import ColorBar from 'react-color-bar';
import './ColorBar.css';

//https://www.npmjs.com/package/react-color-bar

function ColorBarKey(){
  const data = [
                {
                  value: 20,
                  color: '#ff0000',
                  legendLabel: 'Critical recovery rate',
                  legendValue: "0-25%",
                  tooltip: 'insurance is $100',
                },
                {
                  value: 20,
                  color: '#ff9100',
                  legendLabel: 'Semi-critical recovery rate',
                  legendValue: "25-50%",
                  tooltip: 'interest is $300',
                },
                {
                  value: 20,
                  color: '#d2ff00',
                  legendLabel: 'Stable recovery',
                  legendValue: "50-75%",
                  tooltip: 'tax is $200',
                },
                {
                  value: 20,
                  color: '#0aff00',
                  legendLabel: 'Excellent recovery',
                  legendValue: "75-100%",
                  tooltip: 'tax is $200',
                }
          ];

    return (
      <div className="color-bar-container">
          <h3>Color Key</h3>
          <ColorBar data={data}/>
      </div>
    )

}

export default ColorBarKey;
