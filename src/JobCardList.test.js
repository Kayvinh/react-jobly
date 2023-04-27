import React from 'react';
import { render } from '@testing-library/react';
import JobCardList from './JobCardList';



const testJobCardList = <JobCardList jobs={[
    {
        id: 1,
        title: "test title 1",
        companyName: "test company name 1",
        salary: 100,
        equity: 0.01
    },
    {
        id: 2,
        title: "test title 2",
        companyName: "test company name 2",
        salary: 200,
        equity: 0.02
    },
    {
        id: 3,
        title: "test title 3",
        companyName: "test company name 3",
        salary: 300,
        equity: 0.03
    }
]} />;


test('renders without crashing', function () {
    render(testJobCardList);
});

test('renders all jobCards', function () {
    const { container } = render(testJobCardList);

    expect(container).toContainHTML("test title 1");
    expect(container).toContainHTML("test title 2");
    expect(container).toContainHTML("test title 3");
});

test('matches snapshot', function () {
    const { container } = render(testJobCardList);

    expect(container).toMatchSnapshot()

});