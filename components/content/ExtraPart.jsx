

const ExtraPart = () => {
    return (
        <section className="container d-flex justify-content-around align-items-center"
            style={{
                minHeight: '150px',
                color: '#0aa2c0',
                textAlign: 'center',
                fontFamily: '"Roboto Slab", serif'
            }}>
            <h3>Are you ready to get our service ?</h3>
            <button style={{
                padding: '7px 50px',
                border: 'none',
                background: '#0aa2c0',
                color: '#fff'
            }}>Yes</button>
        </section>
    );
};

export default ExtraPart;