export default function Header()
    {
        return(
            <header>
                <h1 style={{fontSize:"xxlarger",color:"#981f48",marginLeft:"1%"}}>Family Wellness</h1>
                <p style={{marginLeft:"1%"}}>MASSAGE THERAPY</p>

                <nav style={{marginLeft:"1%",marginRight:"1%",background:"#a6a29f",marginBottom:"2vh"}}><ul style={{display:"flex",justifyContent:"space-between",alignItems:"center",color:"white",height:"6vh"}}><li style={{background:"#981f48",padding:"1.7vh 5vw"}}>HOME</li>
                <li style={{padding:"1.7vh 5vw"}}>ABOUT</li>
                <li style={{padding:"1.7vh 5vw"}}>SERVICE</li>
                <li style={{padding:"1.7vh 5vw"}}>FAQ</li>
                <li style={{padding:"1.7vh 5vw"}}>CONTACT</li></ul></nav>
            </header>
        )
    }
