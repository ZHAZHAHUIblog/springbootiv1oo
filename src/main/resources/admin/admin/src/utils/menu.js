const menu = {
    list() {
        return [{
            "backMenu": [{
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "用户",
                    "menuJump": "列表",
                    "tableName": "yonghu"
                }], "menu": "用户管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "企业",
                    "menuJump": "列表",
                    "tableName": "qiye"
                }], "menu": "企业管理"
            },
                {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "岗位分类",
                    "menuJump": "列表",
                    "tableName": "gangweifenlei"
                }], "menu": "岗位分类管理"
            },
                {
                "child": [{
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "招聘信息",
                    "menuJump": "列表",
                    "tableName": "zhaopinxinxi"
                }], "menu": "招聘信息管理"
            }, {
                "child": [{
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "岗位申请",
                    "menuJump": "列表",
                    "tableName": "gangweishenqing"
                }], "menu": "岗位申请管理"
            }, {
                "child": [{
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "在线留言",
                    "menuJump": "列表",
                    "tableName": "zaixianliuyan"
                }], "menu": "在线留言管理"
            }, {
                "child": [{
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "求职信息",
                    "menuJump": "列表",
                    "tableName": "qiuzhixinxi"
                }], "menu": "求职信息管理"
            }, {
                "child": [{
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "邀请面试",
                    "menuJump": "列表",
                    "tableName": "yaoqingmianshi"
                }], "menu": "邀请面试管理"
            }, {
                "child": [{"buttons": ["新增", "查看", "修改", "删除"], "menu": "管理员", "tableName": "users"}],
                "menu": "管理员管理"
            }, {
                "child": [{"buttons": ["新增", "查看", "修改", "删除"], "menu": "轮播图管理", "tableName": "config"}],
                "menu": "系统管理"
            }],
            "frontMenu": [{
                "child": [{
                    "buttons": ["查看", "岗位申请", "在线留言"],
                    "menu": "招聘信息列表",
                    "menuJump": "列表",
                    "tableName": "zhaopinxinxi"
                }], "menu": "招聘信息模块"
            }, {
                "child": [{
                    "buttons": ["查看", "邀请面试"],
                    "menu": "求职信息列表",
                    "menuJump": "列表",
                    "tableName": "qiuzhixinxi"
                }], "menu": "求职信息模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "否",
            "hasFrontLogin": "否",
            "hasFrontRegister": "否",
            "roleName": "管理员",
            "tableName": "users"
        }, {
            "backMenu": [{
                "child": [{
                    "buttons": ["查看"],
                    "menu": "岗位申请",
                    "menuJump": "列表",
                    "tableName": "gangweishenqing"
                }], "menu": "岗位申请管理"
            }, {
                "child": [{"buttons": ["查看"], "menu": "在线留言", "menuJump": "列表", "tableName": "zaixianliuyan"}],
                "menu": "在线留言管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "求职信息",
                    "menuJump": "列表",
                    "tableName": "qiuzhixinxi"
                }], "menu": "求职信息管理"
            }, {
                "child": [{"buttons": ["查看"], "menu": "邀请面试", "menuJump": "列表", "tableName": "yaoqingmianshi"}],
                "menu": "邀请面试管理"
            }],
            "frontMenu": [{
                "child": [{
                    "buttons": ["查看", "岗位申请", "在线留言"],
                    "menu": "招聘信息列表",
                    "menuJump": "列表",
                    "tableName": "zhaopinxinxi"
                }], "menu": "招聘信息模块"
            }, {
                "child": [{
                    "buttons": ["查看", "邀请面试"],
                    "menu": "求职信息列表",
                    "menuJump": "列表",
                    "tableName": "qiuzhixinxi"
                }], "menu": "求职信息模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "否",
            "hasFrontLogin": "是",
            "hasFrontRegister": "是",
            "roleName": "用户",
            "tableName": "yonghu"
        }, {
            "backMenu": [{
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "招聘信息",
                    "menuJump": "列表",
                    "tableName": "zhaopinxinxi"
                }], "menu": "招聘信息管理"
            }, {
                "child": [{
                    "buttons": ["查看", "审核"],
                    "menu": "岗位申请",
                    "menuJump": "列表",
                    "tableName": "gangweishenqing"
                }], "menu": "岗位申请管理"
            }, {
                "child": [{
                    "buttons": ["查看", "审核"],
                    "menu": "在线留言",
                    "menuJump": "列表",
                    "tableName": "zaixianliuyan"
                }], "menu": "在线留言管理"
            }, {
                "child": [{"buttons": ["查看"], "menu": "邀请面试", "menuJump": "列表", "tableName": "yaoqingmianshi"}],
                "menu": "邀请面试管理"
            }],
            "frontMenu": [{
                "child": [{
                    "buttons": ["查看", "岗位申请", "在线留言"],
                    "menu": "招聘信息列表",
                    "menuJump": "列表",
                    "tableName": "zhaopinxinxi"
                }], "menu": "招聘信息模块"
            }, {
                "child": [{
                    "buttons": ["查看", "邀请面试"],
                    "menu": "求职信息列表",
                    "menuJump": "列表",
                    "tableName": "qiuzhixinxi"
                }], "menu": "求职信息模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "是",
            "hasFrontLogin": "是",
            "hasFrontRegister": "否",
            "roleName": "企业",
            "tableName": "qiye"
        }]
    }
}
export default menu;
