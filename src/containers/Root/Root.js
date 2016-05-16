import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { Provider } from 'react-redux';

import DevTools from 'containers/DevTools';
import SlotGrid from 'components/SlotGrid';
import SlotForm from 'components/SlotForm';

export default class Root extends React.Component {
  render() {
    const { store } = this.props;

    return (
        <Provider store={store}>
          <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <SlotGrid />
                    </div>
                    <div className="col-md-4 col-md-offset-1">
                      <SlotForm />
                    </div>
                </div>
            </div>
            <DevTools />
          </div>
        </Provider>
    );
  }
}
