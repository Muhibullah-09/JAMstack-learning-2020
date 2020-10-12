import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { Link, navigate } from "gatsby";
import Button from '@material-ui/core/Button';

export default () => {
    return (
        <div>
            <Layout>
                <Header text="This is a heading" subtext="The is the sub heading"></Header>
                <p>This is my home page</p>
                <Link to="/app/client1">Go to Client 1</Link>
                <br />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        navigate('/app/client2')
                    }}
                >
                    Navigate to Client 2
                </Button>
            </Layout>
        </div>
    );
}