## REDURL
###### This application is an url shortener.

## API
The api will basically run with MongoDB, Express and TypeScript. It will be separated in three main layers in order to
facilitate its modification if needed.
<br />
- [x] A layer for managing database connections
- [x] A layer for sending http data
<br />
#### How does the API work ?
As the API has two main functionnalities which are to add a new url to the database
and to retrieve data from it, let see how does both work.

###### Adding a new code
<hr/>
To add a new code, we'll send a post request to the api containing
an url. This request will be directly redirected to the HttpHandler which will contain a service that will be in charge
of adding it to the database.<br />
This service is the main logic of the api. It implements the following interface.<br />
<br />

```typescript
interface Service {
    repository: Repository;
    find(code: string): any;
    store(data: {url: string}): any;
}
```

<br />
The Http handler will call the store method and will pass it the url. <br/>
The service will make some verifications to see if the url is valid and will generate
a new code if the url is valid. The new data will now be given to the repository
which is in charge of all the interactions with the database.<br/>
The repository will call it's store method and will insert the data in the database.

###### Getting the code
<hr />
To retrieve an url, we'll send a get request to the api with the code.<br/>
It will then pass the code to the http handler which will call it's service. <br/>
The service will send it to the repository and return the result.