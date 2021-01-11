import React from 'react'
import { Card } from '../StyledComp';

export default function LoadingJoke() {
    return (
        <Card className="card">
            <h4 className="card-title">Loading</h4>
            <div className="card-body">
                <p className="card-text">Asking Chuck Norris for a joke...</p>
            </div>
        </Card>
    )
}
