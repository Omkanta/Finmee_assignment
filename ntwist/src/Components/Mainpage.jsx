import React from 'react'

export const Mainpage = () => {
    return (
        <div>
            <div style={{height:"700px", display: "flex", justifyContent: "space-evenly", marginBottom: "50px",backgroundSize:"1600px",backgroundPosition:"center",backgroundImage:"url(https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png)" }}>
                <div style={{ width: "40%" ,marginTop:"15%"}} >
                    <h1 style={{ fontSize: "40px", fontWeight: "inherit",textAlign:"justify", color: "white", textAlign: "initial" }}>Data-powered solution for industrial Ecellence</h1>

                    <div style={{ display: "flex", flexDirection: "inherit", marginTop: "50px" }}>
                        <button style={{ color: "white", backgroundColor: "#336ff1", border: "none", padding: "15px 25px", fontWeight: "bold", borderRadius: "3px" }}>Read More</button>
                    </div>
                </div >
                <img style={{ width: "40%" }} src="" alt="" />

            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "50px" }}>
                <div style={{ width: "40%" }} >
                    <h1 style={{ fontSize: "40px", fontWeight: "inherit", color: "red", textAlign: "initial" }}>Mine-To-Mill-To-Mine Optimization</h1>
                    <p style={{ textAlign: "justify" }}>NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.</p>
                    <div style={{ display: "flex", flexDirection: "inherit", marginTop: "50px" }}>
                        <button style={{ color: "white", backgroundColor: "#FF3D00", border: "none", padding: "10px 15px", fontWeight: "bold", borderRadius: "3px" }}>Read More</button>
                    </div>
                </div >
                <img style={{ width: "40%" }} src="https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg" alt="" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "50px" }}>
                <img style={{ width: "40%" }} src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg" alt="" />
                <div style={{ width: "40%" }} >
                    <h1 style={{ fontSize: "40px", fontWeight: "inherit", color: "red", textAlign: "initial" }}>Sustainability</h1>
                    <p style={{ textAlign: "justify" }}>Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.
                        <br /><br />
                        With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.</p>
                    <div style={{ display: "flex", flexDirection: "inherit", marginTop: "50px" }}>
                        <button style={{ color: "white", backgroundColor: "#FF3D00", border: "none", padding: "10px 15px", fontWeight: "bold", borderRadius: "3px" }}>Read More</button>
                    </div>
                </div >

            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "50px" }}>
                <div style={{ width: "40%" }} >
                    <h1 style={{ fontSize: "40px", fontWeight: "inherit", color: "red", textAlign: "initial" }}>Mineral Processing</h1>
                    <p style={{ textAlign: "justify" }}>NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.</p>
                    <div style={{ display: "flex", flexDirection: "inherit", marginTop: "50px" }}>
                        <button style={{ color: "white", backgroundColor: "#FF3D00", border: "none", padding: "10px 15px", fontWeight: "bold", borderRadius: "3px" }}>Read More</button>
                    </div>
                </div >
                <img style={{ width: "40%" }} src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg" alt="" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "50px" }}>
                <img style={{ width: "40%" }} src="https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png" alt="" />
                <div style={{ width: "40%" }} >
                    <h1 style={{ fontSize: "40px", fontWeight: "inherit", color: "red", textAlign: "initial" }}>Oil & Gas</h1>
                    <p style={{ textAlign: "justify" }}>Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment.
                        <br /><br />
                        NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.</p>
                    <div style={{ display: "flex", flexDirection: "inherit", marginTop: "50px" }}>
                        <button style={{ color: "white", backgroundColor: "#FF3D00", border: "none", padding: "10px 15px", fontWeight: "bold", borderRadius: "3px" }}>Read More</button>
                    </div>
                </div >

            </div>
        </div>
    )
}
