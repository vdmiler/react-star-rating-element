# React Star Rating Element

> Customizable react star ratings. SVG stars that show aggregate star ratings to the hundreths decimal point.

## [Install](https://www.npmjs.com/package/react-star-rating-element)

```shell
npm install --save react-star-rating-element
```
### Demo Example Image

![](https://user-images.githubusercontent.com/64083482/156881983-e806302e-7786-47cc-81d6-9401c0e4d141.gif)

## Usage

```js
import { StarRating } from 'react-star-rating-element';

function App() {
  const [rating, setRating] = useState(0);
  
  return (
    <div className="App">
      <StarRating
        rating={rating}
        changeRating={setRating}
        starEmptyColor="#999999"
        starSpacing="2px"
        starDimension={18}
      />
    </div>
  );
}

export default App;
```

## API

| Prop | Type | Default | Description | Example |
| ---- | ---- | ------- | ----------- | ------- |
| rating | number | 0 | The user's rating. Number of stars to highlight. | `3` |
| numberOfStars | number | 5 | The max number of stars to choose from or to display | `6` |
| changeRating | function | ()=>{} | Callback that will be passed the new rating a user selects | `` |
| starRatedColor | string | '#ff8039' | Color of stars that the user has rated | `black` |
| starEmptyColor | string | '#ff8039' | Color of stars that the use hasn't rated | `grey` |
| starDimension | string | '13px' | The width and height of the star | `15px` |
| starSpacing | string | '2px' | The spacing between the stars | `0` |
| svgIconPath | string | 'M6.5 1.61803L7.48381 4.6459L7.59607 4.99139H7.95934H11.143L8.56737 6.86271L8.27348 7.07624L8.38573 7.42173L9.36955 10.4496L6.79389 8.57827L6.5 8.36475L6.20611 8.57827L3.63045 10.4496L4.61426 7.42173L4.72652 7.07624L4.43263 6.86271L1.85697 4.99139H5.04066H5.40393L5.51619 4.6459L6.5 1.61803Z' | Set a path that describes the svg shape | 'M6.5 1.61803L7.48381 4.6459L7.59607 4.99139H7.95934H11.143L8.56737 6.86271L8.27348 7.07624L8.38573 7.42173L9.36955 10.4496L6.79389 8.57827L6.5 8.36475L6.20611 8.57827L3.63045 10.4496L4.61426 7.42173L4.72652 7.07624L4.43263 6.86271L1.85697 4.99139H5.04066H5.40393L5.51619 4.6459L6.5 1.61803Z' |

## Browser Support

Supports Chrome, firefox, safari, edge, and ie 9+.
The star is SVG, so this library fails for any browser that doesn't support svg.
