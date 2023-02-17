import child1 from '../assets/child_1.png'
import child2 from '../assets/child-2.png'
import child3 from '../assets/child-3.png'
import child4 from '../assets/child-4.png'
import child5 from '../assets/child-5.png'
import child6 from '../assets/child-6.png'

const Background = () => {
    return (
        <div className='child-container'>
            <img src={child1} alt="child1" className='child child1' />
            <img src={child2} alt="child1" className='child child2' />
            <img src={child3} alt="child1" className='child child3' />
            <img src={child4} alt="child1" className='child child4' />
            <img src={child5} alt="child1" className='child child5' />
            <img src={child6} alt="child1" className='child child6' />
        </div>
    )
}
export default Background; 
