import React from 'react';
import ReactDOM from 'react-dom';
import { joinArrays } from './Utils';


it ('use correct atributte to join it', () => {
    const firstArray = [{id: 1, ref: 1}];
    const secondArray = [{id: 1, val: 1}, {id: 2, val: 2}];
    expect(joinArrays(firstArray, secondArray, 'ref', 'id')).toContainEqual({id: 1, ref: 1, val: 1});
    expect(joinArrays(firstArray, secondArray, 'ref', 'id')).not.toContainEqual({id: 1, ref: 1, val: 2});
});

it ('the result has the correct size', () => {
    const firstArray = [{id: 1, ref: 1}];
    const secondArray = [{id: 1, val: 1}, {id: 2, val: 2}];
    expect(joinArrays(firstArray, secondArray, 'ref', 'id')).toHaveLength(1);
    expect(joinArrays(firstArray, secondArray, 'ref', 'id')).not.toHaveLength(2);
    expect(joinArrays(firstArray, secondArray, 'ref', 'id')).not.toHaveLength(3);
});