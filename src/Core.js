import { lazy, Suspense, useContext, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material/';
import { ToolContext } from './core/context/ToolContext';
import { VM } from './core/VM';
import { WebRoute } from "./core/webrouter/Route";
import { SnakeLoader } from './core/loader/SnakeLoader'
import { BizLogo } from './core/global/Icons';
import { InstallPromotion } from './components/layouts/installation/InstallPromotion';
// import { env } from './core/Env';
// import { globalrqx } from './core/request/API';
// import { motion } from 'framer-motion';

const __SESSION = JSON.parse(localStorage.getItem('mc_tool_session'))

let view = VM();
const Navigation = lazy(() => import(`./components/layouts/navigations${view}/Index`))

export const Core = () => {
	const { tool_state, install_state } = useContext(ToolContext)

	const __installer = () => {
		window.addEventListener('beforeinstallprompt', (e) => {
			e.preventDefault();
			install_state.prompt.set(e)
		});
	}

	const installPromptHandler = () => {
		setTimeout(() => {
			install_state.ip.set({stat: true, prompt_type: 'first_prompt'})
		}, 10000);
	}
	
	useEffect(() => {
		const __init = async () => {
			// RUN AN API REQUEST HERE ( SAMPLE REQUESTS BELOW: )
			// const acc = await globalrqx('GET', `https://tpdjwm06fj.execute-api.ap-southeast-1.amazonaws.com/api/global/rqx/${env()==='prod'?env():'sb'}/account/read`, '', {aid: __SESSION.ainfo.aid})
			// const ainfo = await globalrqx('GET', `https://tpdjwm06fj.execute-api.ap-southeast-1.amazonaws.com/api/global/rqx/${env()==='prod'?env():'sb'}/primeinfo/read`, '', {aid: __SESSION.ainfo.aid})
			// const owned = await globalrqx('GET', `https://tpdjwm06fj.execute-api.ap-southeast-1.amazonaws.com/api/global/rqx/${env()!=='prod'?'sb':'prod'}/tools/owned`, '', {aid: __SESSION.ainfo.aid, platform: 'all'})
			// const cart = await globalrqx('GET', `https://tpdjwm06fj.execute-api.ap-southeast-1.amazonaws.com/api/global/rqx/${env()!=='prod'?'sb':'prod'}/tools/cart`, '', {aid: __SESSION.ainfo.aid, ref: 'list'})


			// SET STORAGE AND STATES HERE ( SAMPLE STORING BELOW: )
			// localStorage.setItem('your_tool_session', JSON.stringify({...__SESSION, pinfo: ainfo, ainfo: acc}))
			// tools_state.owned.set(owned)
            // tools_state.cart.set(cart)

			
			// RUN INSTALLATION PROMPT HANDLER
			installPromptHandler()
		}
		
		if (__SESSION !== null) {
			__installer()
			__init()
		} else {
			setTimeout(() => {
				tool_state.prefetch.set(true)
				// installPromptHandler()
			}, 1000);
		}
		
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Box width="100%" height="100%">
			{
				tool_state.prefetch.data ? (
					<Router>
						<Suspense fallback={<SnakeLoader bg="black" />} >
							<Navigation side={0} />
							<Box display="flex">
								<Navigation side={1} />
								<Box mt={16} flexGrow={1}>
									<WebRoute />
								</Box>
							</Box>
						</Suspense>
					</Router>
				) : (
					<Box height="100%" width="100%" display="flex" justifyContent="center" alignItems="center">
						<Box /* component={motion.div} */ animate={{ x: [100, 0], rotate: [30, -30, 0], opacity: [0, 1]}} transition={{ duration: 0.8 }} mt={0.5} zIndex={2}>
							<BizLogo size={60}/>
						</Box>
						<Box /* component={motion.div} */ animate={{ x: [-80, 0], opacity: [0, 1]}} transition={{ duration: 0.8, delay: 0.8 }} ml={1} zIndex={1}>
							<Box color="primary.main" fontSize={24} >POF<strong>Yourtool</strong></Box>
							<Box fontSize={12}>
								Powered by: POFSIS
							</Box>
						</Box>
					</Box>
				)
			}
			<InstallPromotion install_state={install_state} />
		</Box>
	)
}