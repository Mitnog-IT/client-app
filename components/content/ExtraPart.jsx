
const ExtraPart = () => {
    return (
        <section style={{
            minHeight: '150px',
            color: '#0aa2c0',
            textAlign: 'center',
            fontFamily: '"Roboto Slab", serif',
        }}>
            <div className="container d-flex justify-content-around align-items-center"
                style={{ minHeight: '150px' }}>
                <h6>We want to understand your business and its challenges – don’t be shy!</h6>
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