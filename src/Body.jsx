export default function Body() {
    return (
        <main>
            <div style={{ display: "flex", justifyContent: "center", padding: "1%" }}>
                <div className="pic" style={{ height: "50vh", width: "100%" }}><img style={{ height: "100%", width: "100%", objectFit: "cover" }} src="https://media.licdn.com/dms/image/D4E12AQH9ShsSiOwklw/article-cover_image-shrink_720_1280/0/1698447625877?e=2147483647&v=beta&t=sgCjVNj-eBVASq32YETIckycfTDbiOaWQSvpfxMKC8s" alt="" />
                </div>
            </div>

            <div className="redbox" style={{ height: "35vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "white", background: "#991f48" }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "2vh" }}>Think Health. Think Massage</h2>
                <p>We are open 9am to 6pm, Monday through Sunday. If you would like to shedule an appointment</p>
                <p style={{ marginBottom: "4vh" }}>with us, please call us at 987-654-3210 today!
                </p>
                <div>
                    <button style={{ color: "white", background: "#991f48", border: "white solid 1px", padding: "2vh", marginRight: "3vw" }}>LEARN MORE ABOUT US</button>
                    <button style={{ color: "white", background: "#991f48", border: "white solid 1px", padding: "2vh" }}>CONTACT US TODAY</button>
                </div>
            </div>
            <div className="text" style={{padding:"6.5vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <div>
                <p style={{ marginBottom: "4vh",color:"#991f48" }}>Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapist who can provide clinical massage. </p>
                <p style={{ marginBottom: "4vh"}}>We are commited to your long term health and well-being. Our multi-discipinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatment.</p>
                <p style={{ marginBottom: "4vh" }}>We welcome you to come explore all the benefits you'll enjoy as one of our valued guests. Our professional staff is commited to offering the best therapy in Mainland</p>
                </div>
                <hr style={{ background: "#c5c3c4", height: "2px", width: "100%", border: "none",marginBottom:"3vh"}} />
                <h2 style={{marginBottom:"3vh",color:"#991f48"}}>Family Wellness Massage Therapy</h2>
                <p>9876 Main Street, Suite 123, Mainland, ML12345</p>
                <p>Phone: 987.654.3210</p>
            </div>

        </main>
    )
}