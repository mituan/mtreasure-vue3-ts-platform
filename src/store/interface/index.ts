/**
 * 定义接口来定义对象的类型
 * `stores` 全部类型定义在这里
 */


// 布局配置
export interface ThemeConfigState {
	isDrawer: boolean;
	primary: string;
	topBar: string;
	topBarColor: string;
	isTopBarColorGradual: boolean;
	menuBar: string;
	menuBarColor: string;
	isMenuBarColorGradual: boolean;
	columnsMenuBar: string;
	columnsMenuBarColor: string;
	isColumnsMenuBarColorGradual: boolean;
	isCollapse: boolean;
	isUniqueOpened: boolean;
	isFixedHeader: boolean;
	isFixedHeaderChange: boolean;
	isClassicSplitMenu: boolean;
	isLockScreen: boolean;
	lockScreenTime: number;
	isShowLogo: boolean;
	isShowLogoChange: boolean;
	isBreadcrumb: boolean;
	isTagsview: boolean;
	isBreadcrumbIcon: boolean;
	isTagsviewIcon: boolean;
	isCacheTagsView: boolean;
	isSortableTagsView: boolean;
	isShareTagsView: boolean;
	isFooter: boolean;
	isGrayscale: boolean;
	isInvert: boolean;
	isIsDark: boolean;
	isWartermark: boolean;
	wartermarkText: string;
	tagsStyle: string;
	animation: string;
	columnsAsideStyle: string;
	columnsAsideLayout: string;
	layout: string;
	isRequestRoutes: boolean;
	globalTitle: string;
	globalViceTitle: string;
	globalI18n: string;
	globalComponentSize: string;
}

export interface ThemeConfigStates {
	themeConfig: ThemeConfigState;
}
