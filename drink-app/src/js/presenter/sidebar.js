import {connect} from 'react-redux'
import SidebarView from './../views/SidebarView.js'
import {guestsAction} from './../../actions/index'

const mapStateToProps = (state) =>  {
  return {
    guests: state.guests
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
      setGuests: x => dispatch(guestsAction(x))
  }
}
const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(SidebarView);
