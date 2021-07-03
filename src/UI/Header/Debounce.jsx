import { useState } from "react"
import { NavLink } from "react-router-dom"
import Trie from "./Trie"

let Debounce = () => {

    let trie = new Trie()
    trie.AddWord(trie.root, "pollution")
    trie.AddWord(trie.root, "weather")
    trie.AddWord(trie.root, "coordinate")
    trie.AddWord(trie.root,"main")

    let [term, setTerm] = useState("")
    let [result,setResult] = useState()

    let debounce = (e) => {
        let item;
        if(e.target.value){
            item=trie.Mean(trie.root,e.target.value.toLowerCase())
        }
        if(item){
            setResult(item[0].toUpperCase()+item.slice(1))    
        }else if(!e.target.value){setResult("")}
        else{setResult("No such as theme")}
        setTerm(e.target.value)
    }


    return <div className="mt-4 mb-1">
        <div className="mb-1">
            <input type="search" placeholder="Search"
                className="w-100 mainInput" value={term} onChange={debounce}
                />
        </div>
        {result &&
        <div>
            <ul className="list-group">
                <NavLink style={{textDecoration:"none"}} to={result=="No such as theme" ? "" : result}>
                <li className="list-group-item bounce">{result}</li>
                </NavLink>
            </ul>
        </div>}
    </div>
}

export default Debounce

