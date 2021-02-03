import Registro from './Signin'
import { connect } from 'react-redux'
import { registro } from '../../redux/action/insertproductAction'

const mapDispatchToProps = {
  registro
}
const mapStoreToProps = state => ({
  signin_loading: state.signin.signin_loading,
  signin_error: state.signin.error
})

export default connect(mapStoreToProps, mapDispatchToProps)(Registro)
