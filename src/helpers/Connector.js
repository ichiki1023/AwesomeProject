import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * アクションとステートをコンポーネントに紐づける.
 *
 * @param mapStateToProps
 * @param Actions
 * @returns {Function}
 */
export function connectActionAndState(mapStateToProps,Actions) {
  const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);
  return connect(mapStateToProps, mapDispatchToProps);
}
