import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cs = classNames.bind(styles);

function wrapper({ children }) {
    return <div className={cs('wrapper')}>{children}</div>;
}
export default wrapper;
