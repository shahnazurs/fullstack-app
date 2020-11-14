import React, { Component } from 'react';

class Home extends Component {
    state = {

    }


    render() {
        return (
            <div class="myrow">
                <div>
                    <img src={"./images/daughter.jpg"} alt="Dear Daughter"  />
                </div>
                <div>
                    <img src={"./images/d1.jpg"} alt="Dear Daughter"  />
                </div>
                <div>
                    <img src={"./images/d2.jpg"} alt="Dear Daughter" />
                </div>
                <div>
                    <img src={"./images/d3.jpg"} alt="Dear Daughter" />
                </div>
                <div>
                    <img src={"./images/d4.jpg"} alt="Dear Daughter" />
                </div>
                <div>
                    <img src={"./images/d5.jpg"} alt="Dear Daughter" />
                </div>
            </div>
        );
    }
}

export default Home;