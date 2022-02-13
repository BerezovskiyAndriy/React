import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {switchTheme} from '../../store';
import user from './../../common/images/user.png'
import {Genres} from '../Genres/Genres';

import './Header.scss';

const Header = () => {
    const {light} = useSelector(state => state['lightThemeReducer']);
    const dispatch = useDispatch();
    const [isChecked,setIsChecked] = useState(false);

    const item = JSON.parse(localStorage.getItem('light'));

    const onChange = e => {
        dispatch(switchTheme(e.target.checked))
        localStorage.setItem('light',e.target.checked)
        setIsChecked(item)
    };
    
    return (
        <header className={light ? 'light-header' : ''}>
            <div className={light ? 'light-logo' : 'logo'}>
                    OWU Studio
            </div>
            <Genres/>
            <div className='user'>
                <label className={'switch-wrap'}>
                    <input type='checkbox' checked={item}  className={'switch'} onChange={onChange}/>
                    <span className={'toggle-theme'}/>
                </label>
                <img src={user}
                     alt='user'/>
            </div>
        </header>
    );
};

export {Header};