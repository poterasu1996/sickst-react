import classes from './PrimaryBtn.module.css'

const PrimaryBtn = () => {
    const btnClass = `${classes['button-primary']} ${classes.big} mt-5`
    return <a className={btnClass}>Afla mai multe</a>
};

export default PrimaryBtn;