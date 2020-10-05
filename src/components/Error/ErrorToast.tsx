// import React from 'react'
// import { useToasts } from 'react-toast-notifications'
// import { connect } from 'react-redux'

// import { IRootState } from '../../store/rootReducer'
// // import { getRequestErrors, IRequestError } from '../../store/ducks/users'

// interface IErrorToastProps {
//   errors: IRequestError
// }

// export const ErrorToast: React.FunctionComponent<IErrorToastProps> = ({ errors }) => {
//   const [toastedErrors, setToastedErrors] = React.useState<IRequestError>({})
//   React.useEffect(() => {
//     Object.values(errors).forEach((error: string) => {
//       if (!toastedErrors[error]) {
//         setToastedErrors({
//           ...toastedErrors,
//           error
//         })
//         addToast(error, { appearance: 'error' })
//       }
//     })
//   }, [errors])
//   const { addToast } = useToasts()
//   return null
// }

// const mapStateToProps = (state: IRootState) => ({
//   // errors: getRequestErrors()(state)
// })

// export default connect(mapStateToProps)(ErrorToast)
