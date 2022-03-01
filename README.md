
# JS Async-Await Parallel Execution

Testing of JS `async/await` loop performance with for loop await vs map await. 

## Description
Since `for loop await` is a common mistake that JS developers makes, causes major performance issues without understanding the concept of parallel execution which can be done with `Promise.all()`.
## Installation

Can copy all this and execute to clone & install

```bash
  git clone https://github.com/ChrisLegaxy/js-async-await-parallel-execution.git \
  && cd js-async-await-parallel-execution \
  && yarn
```
    
## Running Tests

To run tests, run the following command

```bash
  yarn test
```


## My Test Results

| Execution | Time     | Description                |
| :-------- | :------- | :------------------------- |
| `BAD_AWAIT_LOOP` | `4.006s` | `MOCK TEST` |
| `GOOD_AWAIT_LOOP` | `1.001s` | `MOCK TEST` |
| `BAD_AWAIT_LOOP` | `686.375ms` | `REAL FETCH TEST` |
| `GOOD_AWAIT_LOOP` | `213.2ms` | `REAL FETCH TEST` |


## Credits & References

 - [Awesome Blog](https://dev.to/imichaelowolabi/this-is-why-your-nodejs-application-is-slow-206j)
 - [Parallel Execution](https://programmingwithswift.com/run-async-await-in-parallel-with-javascript/#:~:text=In%20order%20to%20run%20multiple,(see%20Conclusion%20for%20caveat).)


## Author

> Chris Legaxy/Chris Van
> 
> Contact: chris.legaxy@gmail.com | chrisvan.vshmr@gmail.com
> 
> Website: https://chrisvan.netlify.app
