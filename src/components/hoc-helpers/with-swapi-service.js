import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
const withSwapiService = (Wrapped, mapMethodsToProps) => {

  return (props) => {
    return (
      <ErrorBoundry>
        <SwapiServiceConsumer>
          {
            (swapiService) => {
              const serviceProps = mapMethodsToProps(swapiService);

              return (
                <Wrapped {...props} {...serviceProps} />
              );
            }
          }
        </SwapiServiceConsumer>
      </ErrorBoundry>
    );
  }
};

export default withSwapiService;
