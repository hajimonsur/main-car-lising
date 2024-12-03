

const Bbutton = ({bgColor, txtcolor, bradius, btnFunc, children}) => {
    const styles = {
        backgroundColor: bgColor || 'blue',
        color: txtcolor || 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: bradius || '20px',
        cursor: 'pointer',
        margin: '10px',
        
        
    }
  return (
    <button onClick={btnFunc} style={styles}>{children}</button>
  )
}

export default Bbutton