import React from 'react';
import { render } from '@testing-library/react';
import JobCard from './JobCard';

const testJobCard = <JobCard title="test title"
    companyName="test company name"
    salary={100}
    equity={0.01} />;

test('renders without crashing', function () {
    render(testJobCard);
});

test('renders proper text', function () {
    const { container } = render(testJobCard);

    expect(container).toContainHTML("test title");
    expect(container).toContainHTML("test company name");
    expect(container).toContainHTML("Salary: 100");
    expect(container).toContainHTML("Equity: 0.01");
});

test('matches snapshot', function () {
    const { container } = render(testJobCard);

    expect(container).toMatchSnapshot()

});