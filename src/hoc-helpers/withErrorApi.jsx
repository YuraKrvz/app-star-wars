//hoc хоки обычно называют с представкой "with"

import React, {useState} from "react"
import ErrorMessage from '@components/ErrorMessage'

export const withErrorApi = (View)=> {
   return props => {
      const [errorApi, setErrorApi] = useState(false);
      return (
         <React.Fragment>
            { errorApi
               ? <ErrorMessage />
               : (
                  <View 
                     setErrorApi={setErrorApi}
                     {...props}
                  />
            ) }
         
         </React.Fragment>
      )
   }
}