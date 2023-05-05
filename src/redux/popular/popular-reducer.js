import { popularProducts } from "../../data/popularData";

const INITIAL_STATE = {
  popular: Array(5)
    .fill(0)
    .reduce((acc, _item) => {
      const IDs = acc.map((value) => value.id);
      let newPopular;
      do {
        newPopular = {
          ...popularProducts[
            Math.floor(Math.random() * popularProducts.length)
          ],
        };
      } while (IDs.includes(newPopular.id));

      return [...acc, newPopular];
    }, []),
};

const popularReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
    }

    export default popularReducer