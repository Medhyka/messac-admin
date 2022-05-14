import Card from '../Card/Card';
import './feature.css';

const Feature = () => {
    return (
    <div className='feature'>
        <div className='feature__name'>
            Nyiur
        </div>
        <div className='feature__cards'>
            <Card />
        </div>
    </div>
    );
}

export default Feature;
