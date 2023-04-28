import reducer from '../redux/covid/covidSlice';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(
    {
      cases: [], isLoading: true, error: '', searchText: '',
    },
  );
});
