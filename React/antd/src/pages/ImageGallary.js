import React from 'react'
import { Input, Typography } from 'antd';
import styled from 'styled-components';
const Search = styled(Input.Search)`
    max-width: 500px;
    display:flex;
    margin:auto;
    background-color:'blue';
`;
function ImageGallary() {
    return (
        <div>

            <Typography.Title style={{ textAlign: 'center' }} >Arun's Gallary</Typography.Title>

            <Search />
        </div>


    )
}

export default ImageGallary
