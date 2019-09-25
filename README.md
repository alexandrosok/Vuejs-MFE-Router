
VueJs Micro-Front End Stucture with routing <img src="http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-15/96/Filehippo-icon.png" />

# Vuejs-MFE-Router 

## How to run this project
1. Clone the projects :
    <br />
    ```
    $ git clone https://github.com/alexandrosok/Vuejs-MFE-router-page1.git page1
    ```
    
    <br />
    
    ```
    $ git clone https://github.com/alexandrosok/Vuejs-MFE-router-page2.git page2
    ```
    <br />
    
    ```
    $ git clone https://github.com/alexandrosok/Vuejs-MFE-router-page3.git page3
    ```
    ** !important: Don't Forget to add the correct folder name while cloning
    
    <br />
2. Jump into each app folder and do:
   - `npm install`
   - `npm run watch:portal`
3. Then start the portal with:
   - `npm install`
   - `npm run watch`
4. Open up http://localhost:9000 in a web browser.

<h3>External Components</h3>
    External components are injected inside the package.json file of each app ( they will be installed automagically):
<br />

```
vue-form-component-v1-test
```
<br />

```
vue-address-form-v1-mf-structure
```
<br />

```
vue-list-component-mf-structure
```
<br />

<h3>Communication</h3>
The original solution is using redux lib as a storage and event emmition (which makes more sense as I am thinking about  it)

The currect solution is using custom browser events and localstorage.
Basically an event is emmited from a component and it will be caught from the assigned component.
No run time errors will occure if the component that is suppose to catch this event is missing. 

<h4>Ps. Efford on the UI = 0.1 </h4>

<img src="https://image.prntscr.com/image/kex_WSP0SQGGAQXn0J4S3g.png" />

