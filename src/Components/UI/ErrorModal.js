import Card from '../UI/Card';
import Button from './Button';

import ReactDom from 'react-dom';

import styles from './ErrorModal.module.css';

const Backdrop = props => {
    return <div onClick={props.resetError} className={styles.backdrop} />
};

const ModalOverlay = props => {
    return (
        <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.resetError}>Okay...</Button>
                </footer>
            </Card>
    )
}

const ErrorModal = props => {

    // React.Fragment is basically a wrapper function that works because the .createElement() will be able to return that function as a callback.

    // as for portals, they as used for things like modals/overlays for the sake of the same mindset as the aria roles. For example, you wouldnt give a div an 'onclick' rather than use a butoon.
    return (
        <>
            {ReactDom.createPortal(<Backdrop resetError={props.resetError} />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} resetError={props.resetError}/>, document.getElementById('overlay-root'))}
        </>)
}

export default ErrorModal;