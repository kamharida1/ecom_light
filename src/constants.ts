export const goHome = (navigation: any) => () => navigation.popToTop()();

export const onScreen = (screen: string, navigation: any, obj?: unknown) => () => {
  navigation.navigate(screen, obj)
};

export const goBack = (navigation: any) => () => navigation.goBack();
