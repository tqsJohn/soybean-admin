const local: App.I18n.Schema = {
  system: {
    title: '產品碳足跡 管理系統',
    updateTitle: '系統版本更新通知',
    updateContent: '檢測到系統有新版本發布，是否立即刷新頁面？',
    updateConfirm: '立即刷新',
    updateCancel: '稍後再說'
  },
  common: {
    action: '操作',
    add: '新增',
    addSuccess: '添加成功',
    backToHome: '返回首頁',
    batchDelete: '批量刪除',
    cancel: '取消',
    close: '關閉',
    check: '勾選',
    expandColumn: '展開列',
    columnSetting: '列設置',
    config: '配置',
    confirm: '確認',
    delete: '刪除',
    deleteSuccess: '刪除成功',
    confirmDelete: '確認刪除嗎？',
    edit: '編輯',
    error: '錯誤',
    index: '序號',
    keywordSearch: '請輸入關鍵詞搜索',
    logout: '退出登錄',
    logoutConfirm: '確認退出登錄嗎？',
    lookForward: '敬請期待',
    modify: '修改',
    modifySuccess: '修改成功',
    noData: '無數據',
    operate: '操作',
    pleaseCheckValue: '請檢查輸入的值是否合法',
    refresh: '刷新',
    reset: '重置',
    search: '搜索',
    switch: '切換',
    tip: '提示',
    trigger: '觸發',
    update: '更新',
    updateSuccess: '更新成功',
    userCenter: '個人中心',
    yesOrNo: {
      yes: '是',
      no: '否'
    }
  },
  request: {
    logout: '請求失敗後登出用戶',
    logoutMsg: '用戶狀態失效，請重新登錄',
    logoutWithModal: '請求失敗後彈出模態框再登出用戶',
    logoutWithModalMsg: '用戶狀態失效，請重新登錄',
    refreshToken: '請求的token已過期，刷新token',
    tokenExpired: 'token已過期'
  },
  theme: {
    themeSchema: {
      title: '主題模式',
      light: '亮色模式',
      dark: '暗黑模式',
      auto: '跟隨系統'
    },
    grayscale: '灰度模式',
    layoutMode: {
      title: '佈局模式',
      vertical: '左側菜單模式',
      'vertical-mix': '左側菜單混合模式',
      horizontal: '頂部菜單模式',
      'horizontal-mix': '頂部菜單混合模式'
    },
    recommendColor: '應用推薦算法的顏色',
    recommendColorDesc: '推薦顏色的算法參照',
    themeColor: {
      title: '主題顏色',
      primary: '主色',
      info: '信息色',
      success: '成功色',
      warning: '警告色',
      error: '錯誤色',
      followPrimary: '跟隨主色'
    },
    scrollMode: {
      title: '滾動模式',
      wrapper: '外層滾動',
      content: '主體滾動'
    },
    page: {
      animate: '頁面切換動畫',
      mode: {
        title: '頁面切換動畫類型',
        'fade-slide': '滑動',
        fade: '淡入淡出',
        'fade-bottom': '底部消退',
        'fade-scale': '縮放消退',
        'zoom-fade': '漸變',
        'zoom-out': '閃現',
        none: '無'
      }
    },
    fixedHeaderAndTab: '固定頭部和標籤欄',
    header: {
      height: '頭部高度',
      breadcrumb: {
        visible: '顯示麵包屑',
        showIcon: '顯示麵包屑圖標'
      }
    },
    tab: {
      visible: '顯示標籤欄',
      cache: '緩存標籤頁',
      height: '標籤欄高度',
      mode: {
        title: '標籤欄風格',
        chrome: '谷歌風格',
        button: '按鈕風格'
      }
    },
    sider: {
      inverted: '深色側邊欄',
      width: '側邊欄寬度',
      collapsedWidth: '側邊欄折疊寬度',
      mixWidth: '混合佈局側邊欄寬度',
      mixCollapsedWidth: '混合佈局側邊欄折疊寬度',
      mixChildMenuWidth: '混合佈局子菜單寬度'
    },
    footer: {
      visible: '顯示底部',
      fixed: '固定底部',
      height: '底部高度',
      right: '底部局右'
    },
    themeDrawerTitle: '主題配置',
    pageFunTitle: '頁面功能',
    configOperation: {
      copyConfig: '複製配置',
      copySuccessMsg: '複製成功，請替換 src/theme/settings.ts 中的變量 themeSettings',
      resetConfig: '重置配置',
      resetSuccessMsg: '重置成功'
    }
  },
  route: {
    login: '登錄',
    403: '無權限',
    404: '頁面不存在',
    500: '服務器錯誤',
    'iframe-page': '外鏈頁面',
    home: '首頁',
    document: '文檔',
    document_project: '項目文檔',
    'document_project-link': '項目文檔(外鏈)',
    document_vue: 'Vue文檔',
    document_vite: 'Vite文檔',
    document_unocss: 'UnoCSS文檔',
    document_naive: 'Naive UI文檔',
    document_antd: 'Ant Design Vue文檔',
    exception: '異常頁',
    exception_403: '403',
    exception_404: '404',
    exception_500: '500',
    system: '系統管理',
    system_role: '角色管理',
    system_user: '用戶管理'
  },
  page: {
    login: {
      common: {
        loginOrRegister: '登錄 / 註冊',
        userNamePlaceholder: '請輸入用戶名',
        phonePlaceholder: '請輸入手機號',
        codePlaceholder: '請輸入驗證碼',
        passwordPlaceholder: '請輸入密碼',
        confirmPasswordPlaceholder: '請再次輸入密碼',
        codeLogin: '驗證碼登錄',
        confirm: '確定',
        back: '返回',
        validateSuccess: '驗證成功',
        loginSuccess: '登錄成功',
        welcomeBack: '歡迎回來，{userName} ！'
      },
      pwdLogin: {
        title: '密碼登錄',
        rememberMe: '記住我',
        forgetPassword: '忘記密碼？',
        register: '註冊賬號',
        otherAccountLogin: '其他賬號登錄',
        otherLoginMode: '其他登錄方式',
        superAdmin: '超級管理員',
        admin: '管理員',
        user: '普通用戶'
      },
      codeLogin: {
        title: '驗證碼登錄',
        getCode: '獲取驗證碼',
        reGetCode: '{time}秒後重新獲取',
        sendCodeSuccess: '驗證碼發送成功',
        imageCodePlaceholder: '請輸入圖片驗證碼'
      },
      register: {
        title: '註冊賬號',
        agreement: '我已經仔細閱讀並接受',
        protocol: '《用戶協議》',
        policy: '《隱私權政策》'
      },
      resetPwd: {
        title: '重置密碼'
      },
      bindWeChat: {
        title: '綁定微信'
      }
    },
    home: {
      greeting: '早安，{userName}, 今天又是充滿活力的一天!',
      weatherDesc: '今日多雲轉晴，20℃ - 25℃!',
      projectCount: '項目數',
      todo: '待辦',
      message: '消息',
      downloadCount: '下載量',
      registerCount: '註冊量',
      schedule: '作息安排',
      study: '學習',
      work: '工作',
      rest: '休息',
      entertainment: '娛樂',
      visitCount: '訪問量',
      turnover: '成交額',
      dealCount: '成交量',
      projectNews: {
        title: '項目動態',
        moreNews: '更多動態',
        desc1: 'Soybean 在2021年5月28日創建了開源項目 soybean-admin!',
        desc2: 'Yanbowe 向 soybean-admin 提交了一個bug，多標籤欄不會自適應。',
        desc3: 'Soybean 準備為 soybean-admin 的發布做充分的準備工作!',
        desc4: 'Soybean 正在忙於為soybean-admin寫項目說明文檔！',
        desc5: 'Soybean 剛才把工作台頁面隨便寫了一些，湊合能看了！'
      },
      creativity: '創意'
    },
    function: {
      tab: {
        tabOperate: {
          title: '標籤頁操作',
          addTab: '添加標籤頁',
          addTabDesc: '跳轉到關於頁面',
          closeTab: '關閉標籤頁',
          closeCurrentTab: '關閉當前標籤頁',
          closeAboutTab: '關閉"關於"標籤頁',
          addMultiTab: '添加多標籤頁',
          addMultiTabDesc1: '跳轉到多標籤頁頁面',
          addMultiTabDesc2: '跳轉到多標籤頁頁面(帶有查詢參數)'
        },
        tabTitle: {
          title: '標籤頁標題',
          changeTitle: '修改標題',
          change: '修改',
          resetTitle: '重置標題',
          reset: '重置'
        }
      },
      multiTab: {
        routeParam: '路由參數',
        backTab: '返回 function_tab'
      },
      toggleAuth: {
        toggleAccount: '切換賬號',
        authHook: '權限鉤子函數 `hasAuth`',
        superAdminVisible: '超級管理員可見',
        adminVisible: '管理員可見',
        adminOrUserVisible: '管理員和用戶可見'
      },
      request: {
        repeatedErrorOccurOnce: '重複請求錯誤只出現一次',
        repeatedError: '重複請求錯誤',
        repeatedErrorMsg1: '自定義請求錯誤 1',
        repeatedErrorMsg2: '自定義請求錯誤 2'
      }
    },
    manage: {
      common: {
        status: {
          enable: '啟用',
          disable: '禁用'
        }
      },
      role: {
        title: '角色列表',
        roleName: '角色名稱',
        roleCode: '角色編碼',
        roleStatus: '角色狀態',
        roleDesc: '角色描述',
        menuAuth: '菜單權限',
        buttonAuth: '按鈕權限',
        form: {
          roleName: '請輸入角色名稱',
          roleCode: '請輸入角色編碼',
          roleStatus: '請選擇角色狀態',
          roleDesc: '請輸入角色描述'
        },
        addRole: '新增角色',
        editRole: '編輯角色'
      },
      user: {
        title: '用戶列表',
        userName: '用戶名',
        userGender: '性別',
        nickName: '昵稱',
        userPhone: '手機號',
        userEmail: '郵箱',
        userStatus: '用戶狀態',
        userRole: '用戶角色',
        form: {
          userName: '請輸入用戶名',
          userGender: '請選擇性別',
          nickName: '請輸入昵稱',
          userPhone: '請輸入手機號',
          userEmail: '請輸入郵箱',
          userStatus: '請選擇用戶狀態',
          userRole: '請選擇用戶角色'
        },
        addUser: '新增用戶',
        editUser: '編輯用戶',
        gender: {
          male: '男',
          female: '女'
        }
      },
      menu: {
        home: '首頁',
        title: '菜單列表',
        id: 'ID',
        parentId: '父級菜單ID',
        menuType: '菜單類型',
        menuName: '菜單名稱',
        routeName: '路由名稱',
        routePath: '路由路徑',
        pathParam: '路徑參數',
        layout: '佈局',
        page: '頁面組件',
        i18nKey: '國際化key',
        icon: '圖標',
        localIcon: '本地圖標',
        iconTypeTitle: '圖標類型',
        order: '排序',
        constant: '常量路由',
        keepAlive: '緩存路由',
        href: '外鏈',
        hideInMenu: '隱藏菜單',
        activeMenu: '高亮的菜單',
        multiTab: '支持多頁簽',
        fixedIndexInTab: '固定在頁簽中的序號',
        query: '路由參數',
        button: '按鈕',
        buttonCode: '按鈕編碼',
        buttonDesc: '按鈕描述',
        menuStatus: '菜單狀態',
        form: {
          home: '請選擇首頁',
          menuType: '請選擇菜單類型',
          menuName: '請輸入菜單名稱',
          routeName: '請輸入路由名稱',
          routePath: '請輸入路由路徑',
          pathParam: '請輸入路徑參數',
          page: '請選擇頁面組件',
          layout: '請選擇佈局組件',
          i18nKey: '請輸入國際化key',
          icon: '請輸入圖標',
          localIcon: '請選擇本地圖標',
          order: '請輸入排序',
          keepAlive: '請選擇是否緩存路由',
          href: '請輸入外鏈',
          hideInMenu: '請選擇是否隱藏菜單',
          activeMenu: '請選擇高亮的菜單的路由名稱',
          multiTab: '請選擇是否支持多標籤',
          fixedInTab: '請選擇是否固定在頁簽中',
          fixedIndexInTab: '請輸入固定在頁簽中的序號',
          queryKey: '請輸入路由參數Key',
          queryValue: '請輸入路由參數Value',
          button: '請選擇是否按鈕',
          buttonCode: '請輸入按鈕編碼',
          buttonDesc: '請輸入按鈕描述',
          menuStatus: '請選擇菜單狀態'
        },
        addMenu: '新增菜單',
        editMenu: '編輯菜單',
        addChildMenu: '新增子菜單',
        type: {
          directory: '目錄',
          menu: '菜單'
        },
        iconType: {
          iconify: 'iconify圖標',
          local: '本地圖標'
        }
      }
    }
  },
  form: {
    required: '不能為空',
    userName: {
      required: '請輸入用戶名',
      invalid: '用戶名格式不正確'
    },
    phone: {
      required: '請輸入手機號',
      invalid: '手機號格式不正確'
    },
    pwd: {
      required: '請輸入密碼',
      invalid: '密碼格式不正確，6-18位字符，包含字母、數字、下劃線'
    },
    confirmPwd: {
      required: '請輸入確認密碼',
      invalid: '兩次輸入密碼不一致'
    },
    code: {
      required: '請輸入驗證碼',
      invalid: '驗證碼格式不正確'
    },
    email: {
      required: '請輸入郵箱',
      invalid: '郵箱格式不正確'
    }
  },
  dropdown: {
    closeCurrent: '關閉',
    closeOther: '關閉其它',
    closeLeft: '關閉左側',
    closeRight: '關閉右側',
    closeAll: '關閉所有'
  },
  icon: {
    themeConfig: '主題配置',
    themeSchema: '主題模式',
    lang: '切換語言',
    fullscreen: '全屏',
    fullscreenExit: '退出全屏',
    reload: '刷新頁面',
    collapse: '折疊菜單',
    expand: '展開菜單',
    pin: '固定',
    unpin: '取消固定'
  },
  datatable: {
    itemCount: '共 {total} 條'
  }
};

export default local;
