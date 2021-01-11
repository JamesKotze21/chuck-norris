import React from 'react'
import { Card } from '../StyledComp';

export default function NoJoke() {
    return (
        <Card className="card">
            <h4 className="card-title">Select a Category</h4>
            <div className="card-body">
            <p className="card-text">To view a joke, please select a category</p>
            </div>
        </Card>
    )
}
