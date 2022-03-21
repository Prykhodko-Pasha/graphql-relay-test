import { screen, render, fireEvent } from '@testing-library/react';

import { InputLogin } from '../InputLogin';

describe('<InputLogin />', () => {
    test('should call onEnter function, when submitting entered login', async () => {
        const onEnter = jest.fn();
        await render(<InputLogin onEnter={onEnter} />);
        const userLogin = await screen.findByPlaceholderText('your_login');
        const input = await screen.findByTestId('input');
        fireEvent.change(userLogin, { target: { value: 'test' } });
        fireEvent.submit(input);
        expect(onEnter).toHaveBeenCalledWith('test');
    });
});
