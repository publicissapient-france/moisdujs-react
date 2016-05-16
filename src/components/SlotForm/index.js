import './SlotForm.css'

import {connect} from 'react-redux'
import SlotForm from './SlotForm'
import {addSlot} from 'actions'

const mapDispatchToProps = (dispatch) => {
    return {
        onAddSlot: (slot) => {
            dispatch(addSlot(slot.column, slot.name))
        }
    }
};

export default connect(null, mapDispatchToProps)(SlotForm);
