import Link from 'next/link'
import Proptypes from 'prop-types';

function Demo({name}) {
  return (
    <>
      <Link href="/"><a>{name}</a></Link>
    </>
  )
  }
    
  Demo.propTypes = {
    name: Proptypes.string
  }

  export default Demo;