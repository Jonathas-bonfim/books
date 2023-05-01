import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router';
import { ShelfProductItem } from '.';

jest.mock('react-router', () => ({
  useNavigate: jest.fn(),
}));

describe('ShelfProductItem', () => {
  test('Navigate', () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    const objectId = '1vc2vcewqxc3';
    const url = 'https://static2.taglivros.com/85a9bb9b06079f786ba8038ef12a6918_1-fEawdfl4qq4GXRvxC1c65A.png';
    const name = 'NOITE DO ORÁCULO';
    const author = 'PAUL AUSTER';

    const { getByTestId } = render(
      <ShelfProductItem objectId={objectId} url={url} name={name} author={author} />
    );

    const itemContainer = getByTestId('item');
    const button = itemContainer.querySelector('button') as HTMLElement;
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledWith(`/book/${objectId}`);
  });
});
