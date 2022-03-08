export const tool = (env, call) => {
    const url = {
        local: {
            'url': 'http://localhost:3001'   
        },
        dev: {
            'url': 'https://dev-market.pofsis.com'   
        },
        sb: {
            'url': 'https://dev-market.pofsis.com'   
        },
        prod: {
            'url': 'https://market.pofsis.com'   
        },
    }
    
    return url[env][call]
}

export const psl = (env, call) => {
    let pslenv = {
        local: {
            'url': 'http://dev-personal.pofsis.com',
            'ws': 'https://dev-personal-main.pofsis.com'
        },
        dev: {
            'url': 'http://dev-personal.pofsis.com',
            'ws': 'https://dev-personal-main.pofsis.com'
        },
        test: {
            'url': 'https://test-personal.pofsis.com',
            'ws': 'https://dev-personal-main.pofsis.com'   
        },
        prod: {
            'url': 'https://personal.pofsis.com',
            'ws': 'https://personal-main.pofsis.com'   
        },
    }
    return pslenv[env][call]
}

export const biz = (env, call) => {
    let psldev = {
        local: {
            'url': 'https://dev-pofsis-business.pofsis.com',
            'ws': 'https://dev-business-main.pofsis.com'
        },
        dev: {
            'url': 'https://dev-pofsis-business.pofsis.com',
            'ws': 'https://dev-business-main.pofsis.com'   
        },
        test: {
            'url': 'https://sb-pofsis-business.pofsis.com',
            'ws': 'https://dev-business-main.pofsis.com'   
        },
        prod: {
            'url': 'https://pofsis-business.pofsis.com',
            'ws': 'https://business-main.pofsis.com'   
        },
    }

    return psldev[env][call]
}

export const pm = (env, call) => {
    const url = {
        local: {
            'url': 'http://localhost:3000'   
        },
        dev: {
            'url': 'https://dev-sls-pofsis.pofsis.com'   
        },
        sb: {
            'url': 'https://sb-sls-pofsis.pofsis.com'   
        },
        prod: {
            'url': 'https://pofsis.pofsis.com'   
        },
    }
    
    return url[env][call]
}

export const env = () => {
    return 'local'
}