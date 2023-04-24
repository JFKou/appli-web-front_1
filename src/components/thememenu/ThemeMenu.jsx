import React from 'react'

import './thememenu.css'

const mode_settings=[
    {
        id:'light',
        name:'Light',
        background:'light-background',
        class:'theme-mode-light'
    },
    {
        id:'dark',
        name:'Dark',
        background:'light-background',
        class:'theme-mode-dark'
    }
]

const color_settings = [
    {
        id: 'blue',
        name: 'Blue',
        background: 'blue-color',
        class: 'theme-color-blue'
    },
    {
        id: 'red',
        name: 'Red',
        background: 'red-color',
        class: 'theme-color-red'
    },
    {
        id: 'cyan',
        name: 'Cyan',
        background: 'cyan-color',
        class: 'theme-color-cyan'
    },
    {
        id: 'green',
        name: 'Green',
        background: 'green-color',
        class: 'theme-color-green'
    },
    {
        id: 'orange',
        name: 'Orange',
        background: 'orange-color',
        class: 'theme-color-orange'
    },
]

const ThemeMenu = () => {
  return (
    <div>ThemeMenu</div>
  )
}

export default ThemeMenu