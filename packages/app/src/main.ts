import {help} from '@lab/commons'

needHelp()

export function needHelp(){
    const helped = help()
    console.log(helped)
    return helped
}

