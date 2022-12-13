import { useDispatch, useSelector } from 'react-redux';
import { categoryAction, CHECK_STATUS } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const checkStatusFromStore = () => ({
    type: CHECK_STATUS,
  });
  const status = useSelector((state) => state.category);
  return (
        <div>
            <h1>{status.status}</h1>
            <button onClick={(event) => {
              event.preventDefault();
              dispatch(categoryAction(checkStatusFromStore()));
            }}>Check Status</button>
        </div>
  );
};
export default Category;