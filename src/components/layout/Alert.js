import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import AlertContext from '../../context/alert/alertContext'


const Alert = () => {
    const alertContext = useContext(AlertContext);
    return (
        alertContext.alert !== null && (
            <div className={`alert alert-${alertContext.alert.type}`}>
                <FontAwesomeIcon icon={faInfoCircle}/> {alertContext.alert.msg}
            </div>
        )
    )
}

export default Alert;
