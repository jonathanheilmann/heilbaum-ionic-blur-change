# @heilbaum/heilbaum-ionic-blur-change
`@heilbaum/heilbaum-ionic-blur-change` provides an Ionic 2 directive to detect changes on input blur and emits an event.

## Example
See [demo.heilbaum.de/heilbaum-ionic-blur-change/](https://demo.heilbaum.de/heilbaum-ionic-blur-change/)

## Installation
1. Install via npm
    npm install @heilbaum/heilbaum-ionic-blur-change --save
2. Add `BlurChangeModule` to `src/app/app.modules.ts`
    ```typescript
    @NgModule({
     imports: [
         BlurChangeModule
     ]
    })
    ```

## Usage
Add `(blurChange)` attribute to `ion-input` component assigning a method to be called on
blurChange.  
`(blurChange)` passes an object `$event` of type `BlurChangeEvent` containing 
properties `oldValue` and `newValue`.

Example:
```html
<ion-input id="someInput"
           name="someInput"
           placeholder="Some input"
           type="text"
           value="Some input"
           (blurChange)="onBlurChange($event)">
</ion-input>
```

## Contribute
Having trouble, found a bug or got some improvements?  
You are welcome to create an issue on [GitHub](https://github.com/jonathanheilmann/heilbaum-ionic-blur-change) or submit
a pull-request.

## License
MIT License

Copyright (c) 2017 HeilBaum (Carsten Baumhögger & Jonathan Heilmann)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
