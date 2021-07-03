import React from "react"
let withSuspense=(Component)=>{
    return<React.Suspense fallback={<div>
        <img className="img w-100" 
        src="https://minecraft-pe.com/wp-content/themes/minecraft-pe/spinner.gif"/>
    </div>}>
        <Component/>
    </React.Suspense>
}
export default withSuspense