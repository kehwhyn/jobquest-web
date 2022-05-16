function Colors(color) {
  var answer;
  if(color === 'blue') answer = `#003298`;
  else if(color === 'red') answer = `#FE0100`;
  else if(color === 'pink') answer = `#fc009b`;
  else if(color === 'orange') answer = `#ff7b00`;
  else if(color === 'green') answer = `#00d60e`;
  else if(color === 'yellow') answer = `#F7FF00`;
  else if(color === 'yellow-darck') answer = `#ffd100`;
  else if(color === 'white') answer = `#FFF`;
  else if(color === 'black') answer = `#000`;
  else if(color === 'grey') answer = `#999`;
  else if(color === 'border-color') answer = `#404040`;
  else if(color === 'box-background') answer = `#151515`;
  else if(color === 'background') answer = `#101010`;
  else answer = '';

  return( answer );
}

export default Colors;