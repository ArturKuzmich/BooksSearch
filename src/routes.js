import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchBooks from "./pages/searchBooks/searchBooks";
import BookDetails from "./pages/bookDetails/bookDetails";

export default (
    <Switch>
        <Route exact path="/" component={SearchBooks}/>
        <Route path="/book/:ID" component={BookDetails}/>
    </Switch>
);