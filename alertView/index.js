import React from 'react'
import './index.less'

export default class AlertView extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render () {
        const { baz } = this.props
        // if (!visiable) return null
        return (<div id='alertView' baz={baz}  className={'shadowView'}>
          {baz}
        </div>)
    }
}
