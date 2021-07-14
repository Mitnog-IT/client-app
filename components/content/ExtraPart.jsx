import Particles from "react-tsparticles";

const ExtraPart = () => {
    return (
        <section
            style={{
                minHeight: '150px',
                color: '#0aa2c0',
                textAlign: 'center',
                fontFamily: '"Roboto Slab", serif',
                position: 'relative',
                overflow: "hidden"
            }}>
            <div style={{ position: 'absolute' }}>
                <Particles height="150px" width="100vw"
                    id="tsparticles"
                    options={{
                        fpsLimit: 100,
                        interactivity: {
                            detectsOn: "canvas",
                            modes: {
                                bubble: {
                                    distance: 300,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                },
                                repulse: {
                                    distance: 300,
                                    duration: 0.9,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#0aa2c0",
                            },
                            links: {
                                color: "#fff",
                                distance: 1,
                                enable: false,
                                opacity: 0.9,
                                width: .1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "top",
                                enable: true,
                                outMode: "bounce",
                                random: true,
                                speed: 3,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 600,
                                },
                                value: 130,
                            },
                            opacity: {
                                value: 0.6,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 4,
                            },
                        },
                        detectRetina: true,
                    }} />
            </div>
            <div className="container d-flex justify-content-around align-items-center"
                style={{ minHeight: '150px',position: 'relative' }}>
                <h3>So Are you ready to get our service ?</h3>
                <button style={{
                    padding: '7px 50px',
                    border: 'none',
                    background: '#0aa2c0',
                    color: '#fff'
                }}>Yes</button>
            </div>
        </section>
    );
};

export default ExtraPart;