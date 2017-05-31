"use strict";layui.use(["form","_route","_view"],function(){{var e=layui.form(),i=layui._route,l=layui.layer,t="",n=$(".dx-info-box");new layui._view({template:'<style>.dx-manage-info{padding-top:23px!important;padding-left:38px;padding-right:38px;position:relative}.dx-manage-info .btn-box{position:absolute;right:0}.dx-manage-info .btn-box .layui-btn{width:120px}.dx-manage-info h2.title{font-size:16px;color:#333;border-left:solid 5px #fab530;padding-left:7px}.dx-manage-info .waterfall-box{-webkit-column-width:250px;-moz-column-width:250px;-o-colum-width:250px}.dx-manage-info .function-box{background-color:#f0f2f5;border:solid 1px #e4e4e4;margin-top:15px;margin-bottom:15px;width:250px;position:relative;padding-top:50px;display:inline-block;margin-right:10px}.dx-manage-info .function-box h5.title{width:100%;border:solid 1px #a5abb7;background-color:#a5abb7;color:#fff;font-size:14px;line-height:30px;position:absolute;top:-1px;left:-1px}.dx-manage-info .function-box h5.title i{margin-right:5px;margin-left:10px}.dx-manage-info .function-box .list-item{padding-bottom:5px}.dx-manage-info .function-box .list-item li{padding-left:30px}.dx-manage-info .function-box .list-item li:first-child{padding-left:0}.dx-manage-info .function-box .list-item .layui-form-checkbox{padding-left:30px;padding-right:0}.dx-manage-info .function-box .list-item .layui-form-checkbox i{left:-7px}.dx-manage-info.type-info .btn-box{display:none}.dx-manage-info.dx-info-box.type-info input{border:solid 1px #e6e6e6!important}.dx-manage-info.dx-info-box.type-info .layui-checkbox-disbaled.layui-form-checked:hover i{color:#6a96df!important}.dx-manage-info.dx-info-box.type-info .layui-checkbox-disbaled.layui-form-checked{border-color:#6a96df!important}.dx-manage-info.dx-info-box.type-info .layui-checkbox-disbaled.layui-form-checked span{background-color:#6a96df!important}</style>\r\n\r\n<section class="dx-info-default">\r\n  <div class="dx-info-box dx-manage-info">\r\n    <form class="layui-form layui-form-pane dx-form-pane">\r\n      <div class="layui-form-item">\r\n        <label class="layui-form-label">角色名称</label>\r\n        <div class="layui-input-inline">\r\n          <input type="text" name="username" lay-verify="required" placeholder="请输入新增角色名称" autocomplete="off"\r\n                 class="layui-input">\r\n        </div>\r\n        <button class="layui-btn btn-yellow" type="button">查询</button>\r\n      </div>\r\n      <div class="layui-form-item btn-box">\r\n        <div class="layui-input-block">\r\n          <button type="reset" class="layui-btn layui-btn-primary btn-simple-blue">重置</button>\r\n          <button class="layui-btn" lay-submit="" lay-filter="demo1">提交</button>\r\n        </div>\r\n      </div>\r\n\r\n      <h2 class="title">角色功能选择</h2>\r\n\r\n      <div class="waterfall-box">\r\n\r\n        <div class="function-box">\r\n          <h5 class="title"><i class="iconfont icon-xiangmu"></i>后台用户管理</h5>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="后台用户" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="新增" lay-filter="checkbox" checked></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox" checked></li>\r\n            <li>\r\n              <ul class="list-item">\r\n                <li><input type="checkbox" name="like[write]" title="后台用户" lay-filter="checkbox" parentCheckBox="true">\r\n                </li>\r\n                <li><input type="checkbox" name="like[write]" title="新增" lay-filter="checkbox"></li>\r\n                <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox" checked></li>\r\n                <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n                <li><input type="checkbox" name="like[game]" title="启用/禁用" lay-filter="checkbox"></li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="后台角色" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="新增" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="删除" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="后台角色" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="权限维护" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="删除" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="权限维护" lay-filter="checkbox"></li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class="function-box">\r\n          <h5 class="title"><i class="iconfont icon-xiangmu"></i>APP用户管理</h5>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="后台用户" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="新增" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="禁用" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="黑名单" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改">\r\n            <li><input type="checkbox" name="like[game]" title="启用" lay-filter="checkbox"></li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class="function-box">\r\n          <h5 class="title"><i class="iconfont icon-xiangmu"></i>业务设置</h5>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="实验人员角色" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="新增" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="删除" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="实验人员权限" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="启用" lay-filter="checkbox"></li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class="function-box">\r\n          <h5 class="title"><i class="iconfont icon-xiangmu"></i>后台用户管理</h5>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="后台用户" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="新增" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="启用/禁用" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="后台角色" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="新增" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="删除" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="后台角色" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="权限维护" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="删除" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="权限维护" lay-filter="checkbox"></li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class="function-box">\r\n          <h5 class="title"><i class="iconfont icon-xiangmu"></i>APP用户管理</h5>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="后台用户" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="新增" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="禁用" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="黑名单" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="启用" lay-filter="checkbox"></li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class="function-box">\r\n          <h5 class="title"><i class="iconfont icon-xiangmu"></i>业务设置</h5>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="实验人员角色" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="新增" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="删除" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="实验人员权限" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="启用" lay-filter="checkbox"></li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class="function-box">\r\n          <h5 class="title"><i class="iconfont icon-xiangmu"></i>后台用户管理</h5>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="后台用户" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="新增" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="启用/禁用" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="后台角色" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="新增" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="删除" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="后台角色" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="权限维护" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="删除" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="权限维护" lay-filter="checkbox"></li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class="function-box">\r\n          <h5 class="title"><i class="iconfont icon-xiangmu"></i>APP用户管理</h5>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="后台用户" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="新增" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="禁用" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="黑名单" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="启用" lay-filter="checkbox"></li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class="function-box">\r\n          <h5 class="title"><i class="iconfont icon-xiangmu"></i>业务设置</h5>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="实验人员角色" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="新增" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="删除" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="实验人员权限" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="启用" lay-filter="checkbox"></li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class="function-box">\r\n          <h5 class="title"><i class="iconfont icon-xiangmu"></i>后台用户管理</h5>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="后台用户" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="新增" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="启用/禁用" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="后台角色" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="新增" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="删除" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="后台角色" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="权限维护" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="删除" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="权限维护" lay-filter="checkbox"></li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class="function-box">\r\n          <h5 class="title"><i class="iconfont icon-xiangmu"></i>APP用户管理</h5>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="后台用户" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="新增" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="禁用" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="黑名单" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="启用" lay-filter="checkbox"></li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class="function-box">\r\n          <h5 class="title"><i class="iconfont icon-xiangmu"></i>业务设置</h5>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="实验人员角色" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[write]" title="新增" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="修改" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="删除" lay-filter="checkbox"></li>\r\n          </ul>\r\n          <ul class="list-item">\r\n            <li><input type="checkbox" name="like[write]" title="实验人员权限" lay-filter="checkbox" parentCheckBox="true"></li>\r\n            <li><input type="checkbox" name="like[read]" title="查看" lay-filter="checkbox"></li>\r\n            <li><input type="checkbox" name="like[game]" title="启用" lay-filter="checkbox"></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>'})}switch(i.params.type){case"add":t="新增",n.addClass("type-add");break;case"update":t="修改",n.addClass("type-update");break;case"info":t="查看",n.addClass("type-info").find('input[type="checkbox"]').attr("disabled","disabled")}i.setBreadcrumb(["后台用户管理",{url:"backstage.user",name:"后台角色"},t]),e.render(),e.on("checkbox(checkbox)",function(e){var i=$(e.elem).parent().parent();$(e.elem).attr("parentCheckBox")?e.elem.checked?(i.find(".layui-form-checkbox").addClass("layui-form-checked"),_.map(i.find('input[type="checkbox"]'),function(e){e.checked=!0})):(i.find(".layui-form-checkbox").removeClass("layui-form-checked"),_.map(i.find('input[type="checkbox"]'),function(e){e.checked=!1})):e.elem.checked||(i.find("input[parentCheckBox]").eq(0).next(".layui-form-checkbox").removeClass("layui-form-checked")[0].checked=!1)}),$("#add,.user-info,.user-update").on("click",function(){i.go("backstage.user.info",{type:$(this).attr("dx-type")})}),$(".user-delete").on("click",function(){l.confirm("确定删除此角色？",{btn:["确定","取消"]},function(){l.msg("删除了")})}),e.on("submit(search)",function(e){return l.alert(JSON.stringify(e.field),{title:"最终的提交信息"}),!1})});