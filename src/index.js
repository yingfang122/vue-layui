/**
 * kouchao 创建于 2018/8/27
 */


import row from '@/components/layout/row'
import col from '@/components/layout/col'
import container from '@/components/layout/container'

import btn from '@/components/button/btn'
import btnGroup from '@/components/button/btn-group'

import form from '@/components/form/form'
import formItem from '@/components/form/form-item'
import radio from '@/components/form/radio'
import input from '@/components/form/input'
import checkbox from '@/components/form/checkbox'
import select from '@/components/form/select'
import textarea from '@/components/form/textarea'

import tabs from '@/components/tabs/tabs'
import tabPane from '@/components/tabs/tab-pane'

import hr from '@/components/auxiliary/hr'
import block from '@/components/auxiliary/block'

import LayMenu from '@/components/menu'
import LayMenuItem from '@/components/menu-item'
import LayMenuChildItem from '@/components/menu-child-item'
import LayAdmin from '@/components/admin'
import LayHeader from '@/components/header'
import LayLogo from '@/components/logo'
import LaySide from '@/components/side'
import LayBody from '@/components/body'
import LayFooter from '@/components/footer'


const layui = {
	config: {},
	install: function (Vue) {
		Vue.prototype.testLayui = function () {
			console.log('ok')
		}
		let components = [
			row,
			col,
			container,
			btn,
			btnGroup,
			form,
			formItem,
			radio,
			input,
			checkbox,
			select,
			textarea,
			tabs,
			tabPane,
			hr,
			block,

			LayMenu,
			LayMenuItem,
			LayMenuChildItem,
			LayAdmin,
			LayHeader,
			LayLogo,
			LaySide,
			LayBody,
			LayFooter
		]
		components.forEach(function (component) {
			Vue.component(component.name, component)
		})
		console.log('install layui ok')
	}
}

export default layui