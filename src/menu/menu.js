let menu = {};

/**
 * 首页
 * @type {{name: string, path: string, icon: string}}
 */
menu.home = {
  name: '首页',
  path: '/'
};


/**
 * 字体图标
 * @type {{name: string, icon: string, children: {}}}
 */
menu.audit = {
  name: '用户信息审核',
  path: '/audit',
};
/**
 * 内容管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.content_manage = {
  name: '考勤管理',
  children: {}
};

let ContentManage = menu.content_manage.children;

ContentManage.leave = {
  name: '请假/外出申请',
  path: '/leave',
};
ContentManage.approval = {
  name: '审批',
  path: '/approval',
};
ContentManage.record = {
  name: '考勤记录',
  path: '/record',
};
ContentManage.minerecord = {
  name: '个人考勤记录',
  path: '/minerecord',
};
/**
 * 部门/职位管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.department = {
  name: '部门/职位管理',
  path: '/department',
};



/**
 * 员工管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.staff = {
  name: '员工管理',
  path: '/staff',
};

menu.profile = {
  name: '个人资料',
  path: '/profile',
};
menu.user_information = {
  name: '用户信息',
  path: '/user_information',
};
menu.seas = {
  name: '公海池',
  path: '/seas',
};

menu.business = {
  name: '业务池',
  path: '/business',
};

menu.enter = {
  name: '员工录入',
  path: '/enter',
};
menu.user_group = {
  name: '用户组',
  path: '/user_group',
};
menu.editpassword = {
  name: '修改密码',
  path: '/editpassword',
};


export default menu;

// if(__DEV__){

//   menu.development_tools = {
//     name: '开发工具',
//     icon: 'fa fa-wrench',
//     children: {}
//   };

//   let DevelopmentTools = menu.development_tools.children;

//   DevelopmentTools.code = {
//     name: '构建代码',
//     path: '/build_code',
//   };

// }
