import { useEffect, useState } from "react";

export const useDebounceValue = ( input: string = "", time: Readonly<number> = 500 ) => {

   const [ debounceValue, setDebounceValue ] = useState<string>( input )
   const [ isPending,  setIsPending ] = useState<boolean>( false )


   useEffect( () => {
      setIsPending( true )
      const timeout = setTimeout( () => {
         setDebounceValue( input )
         setIsPending( false )
      }, time )

      return () => {
         clearTimeout( timeout );
      }
   }, [ input ] )

   return { debounceValue, isPending } ;
}
