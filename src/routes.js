import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/home/home'));
const Booking = lazy(() => import('./components/booking/booking'));

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route path="/home" component={Home} />
                    <Route path="/booking" component={Booking} />
                </Suspense>
            </Switch>
        </Router>
    );
}
