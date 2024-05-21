import { useDispatch, useSelector } from 'react-redux';

const useService = () => {
  const dispatch = useDispatch();
  const selectedProducts = useSelector(state => state.selectedProducts?.data);

  return { dispatch, selectedProducts };
};

export default useService;
