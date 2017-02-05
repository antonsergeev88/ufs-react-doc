import * as React from 'react';
import { DefaultLayout, Tree, ComponentType } from '../components';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';

interface Props {
    title: string;
    version: string;
    list: ComponentType[];
}

export default function Version(props :Props) {
    const { title, version, list } = props;

    return (
        <DefaultLayout {...{ title }}>
            <Grid>
                <Row>
                    <Col xs={12}>
                        <h1>{title}</h1>
                    </Col>
                    <Col xs={8}>
                        <h3>Version {version}</h3>
                    </Col>
                    <Col xs={4}>
                        <Tree {...{ version, list }} />
                    </Col>
                </Row>
            </Grid>
        </DefaultLayout>
    );
}