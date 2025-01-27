# vue-project （vue3脚手架工程）

提供了vue3开发的基本目录结构，可以直接基于该脚手架继续开发

# assets

用于存放静态资源，例如图标、静态图片等

# business

用于存放于页面无关的业务代码，一般为ts文件，在页面中引入business中的方法执行对应的逻辑

# components

用于存放一些公用组件所有页面均可引用。对于组件库的自定义修改也放在这里

# constants

用于存放常量，例如请求响应状态码等

# i18n

用于存放国际化，其中lang包存放的是语言包，每个语言包下有各个模块的语言文件以及一个index.ts用于将各个模块语言文件组合在一起。在i18n目录下还有一个index.ts用于创建vue-i18n实例，在main.ts中创建Vue实例的时候绑定。langUtil中提供了切换语言包的方法。

# pages

存放所有的页面，每个页面为一个文件夹，每个文件夹中有个index.vue表示该页面，在每个页面中允许有自己私有的components文件夹用于存放私有的组件，简化页面代码

# requests

用于存放所有请求，在pages中不应该直接使用axios发起请求，而要引用request中的对应请求方法发起请求

# router

用于存放vue的路由

# stores

用于存放状态变量 pinia

# styles

用于存放一些通用样式以及宏定义的样式变量

# utils

用于存放工具方法，都应该为ts文件
