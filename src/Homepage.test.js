import React from 'react';
import { render } from '@testing-library/react';
import Homepage from './Homepage';

test('renders without crashing', function () {
    const { container } = render(
      <Homepage />
    );
});

test('renders proper text', function () {
    const { container } = render(
      <Homepage />
    );

    expect(container).toContainHTML("Jobly")
    expect(container).toContainHTML("All the jobs in one, convenient place.")
});

test('matches snapshot', function() {
    const {container} = render(
        <Homepage />
    );

    expect(container).toMatchSnapshot()

});