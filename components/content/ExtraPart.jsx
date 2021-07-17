
const ExtraPart = () => {
    return (
        <section style={{
            minHeight: '150px',
            color: '#0aa2c0',
            textAlign: 'center',
            fontFamily: '"Roboto Slab", serif',
        }}>
            <section className="container d-flex justify-content-around align-items-center"
                style={{ minHeight: '150px' }}>
                <section>
                    <h6>We want to understand your business and its challenges – don’t be shy!</h6>
                    <h3>Please feel free to give us a shout out on <a href="mitnogit@gmail.com" style={{color:'#0aa2c0'}}>E-mail</a>.</h3>
                </section>
                {/* <button style={{
                    padding: '2px 50px',
                    border: 'none',
                    background: '#0aa2c0',
                    color: '#fff'
                }}>Yes</button> */}
            </section>
        </section>
    );
};

export default ExtraPart;