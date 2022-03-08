export const request = (method, link, body='', qsp='') => {
    return new Promise(resolve => {
        let h = new Headers();
        h.append('Content-Type', 'application/json');
        // h.append('x-api-key', 'tJ1ROscurb83mqyY4B0To5WTb4ekFzMa8LgGKoZh');
        h.append('x-api-key', 'LlSuT9tJfc6BnceWx3NrP5K71zZPrUxS4wJO12Tl');

        let param = {
            method: method,
            headers: h,
            body: JSON.stringify(body),
            redirect: 'follow'
        };

        body==='' && delete param.body;
        
        if (qsp !== '') {
            let subqsp = []
            for (let k in qsp) { subqsp.push(`${k}=${qsp[k]}`) }
            qsp = `?${subqsp.join('&')}`
        }

        fetch(`${link}${qsp}`, param)
        .then(result => {
            // console.log(result);
            return resolve(result.json())
        })
        .catch(error => console.log('error', error));
    })
}

export const globalrqx = (method, link, body='', qsp='') => {
    return new Promise(resolve => {
        let h = new Headers();
        h.append('Content-Type', 'application/json');
        h.append('x-api-key', 'tJ1ROscurb83mqyY4B0To5WTb4ekFzMa8LgGKoZh');

        let param = {
            method: method,
            headers: h,
            body: JSON.stringify(body),
            redirect: 'follow'
        };

        body==='' && delete param.body;
        
        if (qsp !== '') {
            let subqsp = []
            for (let k in qsp) { subqsp.push(`${k}=${qsp[k]}`) }
            qsp = `?${subqsp.join('&')}`
        }

        fetch(`${link}${qsp}`, param)
        .then(result => {
            // console.log(result);
            return resolve(result.json())
        })
        .catch(error => console.log('error', error));
    })
}