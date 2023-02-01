import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Styles from './AccountItem.module.scss';

const cx = classNames.bind(Styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avata')}
                src="https://gaixinhsexy.site/wp-content/uploads/2022/09/52322376573_2b9b56de06_o.jpg"
                alt="name"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Tiin
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <p className={cx('useName')}>Tiiins</p>
            </div>
        </div>
    );
}

export default AccountItem;
