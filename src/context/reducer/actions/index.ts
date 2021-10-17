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
