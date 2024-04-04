import React from 'react';

function Home()
{
    return (
        <div>
            <h1>Home Component</h1>
            <div className='img-wrapper item'>
                <img src='https://picsum.photos/200/300' />
            </div>
            <div className='text-wrapper item'>
                <span>
                    I-Phone
                </span>
                <span>
                    Price: $1000
                </span>
            </div>
            <div className='btn-wrapper item'>
                <button>Add To Cart</button>
            </div>

        </div>
    )
}
export default Home;