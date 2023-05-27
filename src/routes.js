import Home from './screens/home'
import NightLife from './screens/nightLife'
import Out from './screens/out'
import Serie from './components/serie'
import LeSept from './screens/leSept'
import About from './screens/about'
import NeitherHereNorThere from './screens/neitherHereNorThere'
import Spring from './screens/spring'

const routes =[
    {
      path: '/',
      component: Home,
      exact: true
    },
    {
      path: '/nightlife',
      component: NightLife,
      exact: true
    },
    {
      path: '/out',
      component: Out,
      exact: true
    }, 
    {
      path: '/serie',
      component: Serie,
      exact: true
    },
    {
      path: '/sept',
      component: LeSept,
      exact: true
    }, 
    {
      path: '/about',
      component: About,
      exact: true
    },
    {
      path: '/NeitherHereNorThere',
      component: NeitherHereNorThere,
      exact: true
    }, 
    {
      path: '/spring',
      component: Spring,
      exact: true
    }
   

]
export default routes

