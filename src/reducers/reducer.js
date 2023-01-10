import { works } from '../data/works';
import { team } from '../data/team';
import { intro } from '../data/intros';

const initialState = {
    works: works,
    team: team,
    intro: intro
};

const Reducer = (state = initialState) => {
    return state;
};

export default Reducer;