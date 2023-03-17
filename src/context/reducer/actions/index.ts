export function actionReducerMenu(value: boolean) {
  return {
    type: 'MENU',
    payload: {
      open: value
    }
  }
}

export function actionReducerWidgets(value: boolean) {
  return {
    type: 'WIDGETS',
    payload: {
      widgets: value
    }
  }
}

export function actionReducerSearch(value: boolean) {
  return {
    type: 'SEARCH',
    payload: {
      search: value
    }
  }
}
