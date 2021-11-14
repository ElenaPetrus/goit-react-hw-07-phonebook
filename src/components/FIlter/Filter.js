import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/actions';
import { getFilter } from '../../redux/selectors';

import s from './Filter.module.css';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contact by name/number
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={e => dispatch(filterContact(e.currentTarget.value))}
      />
    </label>
  );
}

export { Filter };
