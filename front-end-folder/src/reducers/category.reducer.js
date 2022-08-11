import { categoryConstants } from "../actions/constant";

const initState = {
  categories: [],
  loading: false,
  error: null,
};

const buildNewCategories = (parentId, categories, category) => {
  let myCategories = [];

  if (parentId == undefined) {
    return [
      ...categories,
      {
        _id: category._id,
        name: category.name,
        slug: category.slug,
        children: [],
      },
    ];
  }

  for (let cat of categories) {
    if (cat._Id == parentId) {
      myCategories.push({
        ...cat,
        children: cat.children
          ? buildNewCategories(
              parentId,
              [
                ...cat.children,
                {
                  _id: category._id,
                  name: category.name,
                  slug: category.slug,
                  parentId: category.parentId,
                  children: category.children,
                },
              ],
              category
            )
          : [],
      });
    } else {
      myCategories.push({
        ...cat,
        children: cat.children
          ? buildNewCategories(parentId, cat.children, category)
          : [],
      });
    }
  }
  return myCategories;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories,
      };
      break;
    case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
      const category = action.payload.category;
      const updatedCategories = buildNewCategories(
        category.parentId,
        state.categories,
        category
      );
      console.log(updatedCategories);
      state = {
        ...state,
        categories: updatedCategories,
        loading: false,
      };
      break;
    case categoryConstants.ADD_NEW_CATEGORY_FAILURE:
      state = {
        ...initState,
      };
  }
  return state;
};
