import React, {useEffect}  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Grid from '../component/Grid'


const UnivList = () => {

    const state = useSelector(state => state.univeList.univList)

    return state.map((i)=><Grid key={i.id} univ={i} />
    )
   
}

export default UnivList
