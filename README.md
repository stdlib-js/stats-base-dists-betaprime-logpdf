<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Logarithm of Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Beta prime][betaprime-distribution] distribution logarithm of probability density function (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [beta prime][betaprime-distribution] random variable is

<!-- <equation class="equation" label="eq:betaprime_pdf" align="center" raw="f(x;\alpha,\beta)= \begin{cases} \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha) + \Gamma(\beta)}{x^{\alpha-1}(1+x)^{-\alpha-\beta}} & \text{ for } x > 0 \\ 0 & \text{ otherwise } \end{cases}" alt="Probability density function (PDF) for a beta prime distribution."> -->

```math
f(x;\alpha,\beta)= \begin{cases} \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha) + \Gamma(\beta)}{x^{\alpha-1}(1+x)^{-\alpha-\beta}} & \text{ for } x > 0 \\ 0 & \text{ otherwise } \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\alpha,\beta)= \begin{cases} \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha) + \Gamma(\beta)}{x^{\alpha-1}(1+x)^{-\alpha-\beta}} &amp; \text{ for } x &gt; 0 \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:betaprime_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/betaprime/logpdf/docs/img/equation_betaprime_pdf.svg" alt="Probability density function (PDF) for a beta prime distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `α > 0` is the first shape parameter and `β > 0` is the second shape parameter.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-betaprime-logpdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats-base-dists-betaprime-logpdf' );
```

#### logpdf( x, alpha, beta )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [beta prime][betaprime-distribution]  distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var y = logpdf( 0.5, 0.5, 1.0 );
// returns ~-0.955

y = logpdf( 0.1, 1.0, 1.0 );
// returns ~-0.191

y = logpdf( 0.8, 4.0, 2.0 );
// returns ~-1.2
```

If provided an input value `x` outside smaller or equal to zero, the function returns `-Infinity`.

```javascript
var y = logpdf( -0.1, 1.0, 1.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 1.0, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 0.5, 0.0, 1.0 );
// returns NaN

y = logpdf( 0.5, -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 0.5, 1.0, 0.0 );
// returns NaN

y = logpdf( 0.5, 1.0, -1.0 );
// returns NaN
```

#### logpdf.factory( alpha, beta )

Returns a `function` for evaluating the natural logarithm of the [PDF][pdf] for a [beta prime][betaprime-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var mylogPDF = logpdf.factory( 0.5, 0.5 );

var y = mylogPDF( 0.8 );
// returns ~-1.62

y = mylogPDF( 0.3 );
// returns ~-0.805
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-array-uniform' );
var logEachMap = require( '@stdlib/console-log-each-map' );
var EPS = require( '@stdlib/constants-float64-eps' );
var logpdf = require( '@stdlib/stats-base-dists-betaprime-logpdf' );

var opts = {
    'dtype': 'float64'
};
var alpha = uniform( 10, EPS, 5.0, opts );
var beta = uniform( 10, EPS, 5.0, opts );
var x = uniform( 10, 0.0, 1.0, opts );

logEachMap( 'x: %0.4f, α: %0.4f, β: %0.4f, ln(f(x;α,β)): %0.4f', x, alpha, beta, logpdf );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/betaprime/logpdf.h"
```

#### stdlib_base_dists_betaprime_logpdf( x, alpha, beta )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [beta prime][betaprime-distribution]  distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```c
double y = stdlib_base_dists_betaprime_logpdf( 0.5, 0.5, 1.0 );
// returns ~-0.955
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **alpha**: `[in] double` first shape parameter.
-   **beta**: `[in] double` second shape parameter.

```c
double stdlib_base_dists_betaprime_logpdf( const double x, const double alpha, const double beta );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section`
element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/betaprime/logpdf.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double alpha;
    double beta;
    double x;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        x = random_uniform( 0.0, 1.0 );
        alpha = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 5.0 );
        beta = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 5.0 );
        y = stdlib_base_dists_betaprime_logpdf( x, alpha, beta );
        printf( "x: %lf, α: %lf, β: %lf, ln(f(x;α,β)): %lf\n", x, alpha, beta, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-betaprime-logpdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-betaprime-logpdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-betaprime-logpdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-betaprime-logpdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-betaprime-logpdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-betaprime-logpdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-betaprime-logpdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-betaprime-logpdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-betaprime-logpdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-betaprime-logpdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-betaprime-logpdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-betaprime-logpdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-betaprime-logpdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-betaprime-logpdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-betaprime-logpdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-betaprime-logpdf/main/LICENSE

[betaprime-distribution]: https://en.wikipedia.org/wiki/Beta_prime_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
