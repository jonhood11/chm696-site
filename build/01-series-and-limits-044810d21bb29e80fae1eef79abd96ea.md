# Series and Limits

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

After this lecture, you should be able to:

- define convergence in terms of partial sums;
- apply the preliminary, comparison, integral, ratio, limit-comparison, and
  alternating-series tests;
- determine the radius and interval of convergence of a power series;
- construct Taylor and Maclaurin series; and
- estimate the error introduced by truncating a series.

## Why series?

Series are used throughout mathematics, chemistry, and physics to:

- represent functions using power, Taylor, and Fourier series;
- construct approximate solutions to differential equations and integrals;
- evaluate functions numerically; and
- represent functions in a finite basis for computation.

The central questions are:

- Do the partial sums approach a finite value? If so, the series
  **converges**; otherwise, it **diverges**.
- If a series contains positive and negative terms, does it converge
  absolutely or only conditionally?
- For a power series, what are its radius and interval of convergence?
- When a convergent series is truncated, how large is the resulting error?

## Infinite series and partial sums

An infinite series is a formal sum of infinitely many terms:

```{math}
S=a_1+a_2+a_3+\cdots=\sum_{n=1}^{\infty}a_n.
```

Its (N)-th **partial sum** is

```{math}
S_N=\sum_{n=1}^{N}a_n.
```

The series converges to (S) when the partial sums have the finite limit

```{math}
S=\lim_{N\to\infty}S_N.
```

If this finite limit does not exist, the series diverges. A divergent series
may grow without bound, oscillate, or fail to settle to a single value in some
other way.

## Geometric series

A finite geometric series with first term (a) and common ratio (r) is

```{math}
S_N=a+ar+ar^2+\cdots+ar^{N-1}=\sum_{n=0}^{N-1}ar^n.
```

For (r\neq1), multiply by (r) and subtract:

```{math}
\begin{aligned}
S_N &= a+ar+ar^2+\cdots+ar^{N-1},\\
rS_N &= ar+ar^2+ar^3+\cdots+ar^N,\\
(1-r)S_N &= a(1-r^N).
\end{aligned}
```

Therefore,

```{math}
S_N=\frac{a(1-r^N)}{1-r}.
```

If (|r|<1), then (r^N\to0), and the infinite geometric series converges:

```{math}
\sum_{n=0}^{\infty}ar^n=\frac{a}{1-r},\qquad |r|<1.
```

For (|r|\geq1) and (a\neq0), the infinite geometric series does not
converge.

## First convergence examples

:::{admonition} Example 1: geometric growth

The series

```{math}
1+2+4+8+16+\cdots
```

diverges. Its terms do not even approach zero.
:::

:::{admonition} Example 2: the harmonic series

The harmonic series

```{math}
1+\frac12+\frac13+\frac14+\cdots
```

diverges even though its terms approach zero. We will verify this with the
integral test below.
:::

:::{admonition} Example 3: the alternating harmonic series

The alternating harmonic series

```{math}
1-\frac12+\frac13-\frac14+\cdots
```

converges to (ln 2), but it does not converge absolutely. It is therefore
conditionally convergent.
:::

## Preliminary test for divergence

If (sum a_n) converges, then its terms must satisfy

```{math}
\lim_{n\to\infty}a_n=0.
```

Consequently, if this limit is nonzero or does not exist, the series diverges.
The converse is false: (a_n\to0) does not by itself prove convergence.

:::{admonition} Example

For the harmonic series, (a_n=1/n\to0), so the preliminary test is
inconclusive. For

```{math}
\frac12+\frac23+\frac34+\frac45+\cdots,
```

the terms approach (1), so the series diverges by the preliminary test.
:::

## Direct comparison test

Suppose the terms are nonnegative for all sufficiently large (n).

- If (0\leq a_n\leq b_n) and (sum b_n) converges, then
  (sum a_n) converges.
- If (0\leq b_n\leq a_n) and (sum b_n) diverges, then
  (sum a_n) diverges.

:::{warning}
The direction of the inequality matters. Being smaller than the terms of a
divergent series or larger than the terms of a convergent series gives no
conclusion.
:::

:::{admonition} Example

For (n\geq1), (n!\geq2^{n-1}), so

```{math}
0\leq\frac{1}{n!}\leq\frac{1}{2^{n-1}}.
```

Because (sum_{n=1}^{\infty}2^{-(n-1)}) is a convergent geometric series,
(sum_{n=1}^{\infty}1/n!) converges by direct comparison.
:::

## Integral test

Let (f(x)) be continuous, positive, and decreasing for (x\geq N), with
(a_n=f(n)). Then

```{math}
\sum_{n=N}^{\infty}a_n
```

and

```{math}
\int_N^{\infty}f(x)\,dx
```

either both converge or both diverge.

:::{admonition} Example: the harmonic series

For (f(x)=1/x),

```{math}
\int_1^B\frac{dx}{x}=\ln B.
```

Since (ln B\to\infty) as (B\to\infty), the harmonic series diverges.
:::

## Ratio test

For a series (sum a_n) with nonzero terms for sufficiently large (n), let

```{math}
L=\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|,
```

provided the limit exists. Then:

- if (L<1), the series converges absolutely;
- if (L>1), or (L=\infty), the series diverges; and
- if (L=1), the test is inconclusive.

:::{admonition} Example

For (sum_{n=0}^{\infty}x^n/n!),

```{math}
\left|\frac{a_{n+1}}{a_n}\right|
=\frac{|x|}{n+1}\longrightarrow0.
```

The series therefore converges absolutely for every real or complex (x).
:::

## Limit-comparison test

Suppose (a_n>0), (b_n>0), and

```{math}
\lim_{n\to\infty}\frac{a_n}{b_n}=c,
\qquad 0<c<\infty.
```

Then (sum a_n) and (sum b_n) have the same convergence behavior.

:::{admonition} Example

For

```{math}
a_n=\frac{2n+1}{n^3+4},\qquad b_n=\frac{1}{n^2},
```

we have (a_n/b_n\to2). Since (sum 1/n^2) converges, so does
(sum a_n).
:::

## Alternating series

An alternating series has the form

```{math}
\sum_{n=1}^{\infty}(-1)^{n-1}b_n,
\qquad b_n\geq0.
```

If (b_{n+1}\leq b_n) for all sufficiently large (n) and (b_n\to0), the
series converges.

A convergent series is **absolutely convergent** if (sum |a_n|) also
converges. A series that converges but does not converge absolutely is
**conditionally convergent**.

:::{note}
The alternating harmonic series converges conditionally. Ionic-lattice sums
provide a physical setting in which conditional convergence and the order or
geometry of summation require special care.
:::

## Operations on convergent series

- Multiplying every term by a fixed nonzero constant does not change whether a
  series converges, although it changes the sum.
- Changing finitely many terms does not change convergence or divergence,
  although it may change the sum.
- Two convergent series may be added or subtracted term by term, and their sums
  add or subtract correspondingly.
- The terms of an absolutely convergent series may be rearranged without
  changing its sum. This is not generally true for a conditionally convergent
  series.

## Power series

A power series centered at (x=a) has the form

```{math}
\sum_{n=0}^{\infty}c_n(x-a)^n
=c_0+c_1(x-a)+c_2(x-a)^2+\cdots.
```

Every power series has a radius of convergence (R), where
(0\leq R\leq\infty), such that it:

- converges absolutely for (|x-a|<R);
- diverges for (|x-a|>R); and
- must be checked separately at the endpoints (x=a\pm R) when (R) is
  finite.

### Example: radius and interval of convergence

Consider

```{math}
\sum_{n=0}^{\infty}\frac{(-x)^n}{2^n}
=1-\frac{x}{2}+\frac{x^2}{4}-\frac{x^3}{8}+\cdots.
```

The ratio test gives

```{math}
L=\left|\frac{x}{2}\right|.
```

Thus the radius of convergence is (R=2). At (x=2), the terms alternate
between (1) and (-1), so the series diverges. At (x=-2), every term is
(1), so the series also diverges. The interval of convergence is therefore
((-2,2)).

## Algebra and calculus of power series

Inside the radius of convergence:

- a power series may be differentiated or integrated term by term;
- power series may be added, subtracted, and multiplied; and
- one convergent power series may be substituted into another when the
  substituted values remain inside the outer series' convergence interval.

Term-by-term differentiation and integration preserve the **radius** of
convergence, but behavior at the endpoints must be checked again. A function's
power-series representation about a fixed center is unique wherever it exists.

## Taylor and Maclaurin series

The Taylor series of (f(x)) about (x=a) is

```{math}
f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n,
```

when the series converges to (f(x)). The special case (a=0) is the
**Maclaurin series**:

```{math}
f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}x^n.
```

For example, the derivatives of (sin x) cycle through
(sin x,cos x,-\sin x,-\cos x). Evaluating at (x=0) gives

```{math}
\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots
=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n+1}}{(2n+1)!}.
```

## Maclaurin series to remember

```{math}
e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!}
=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots,
\qquad -\infty<x<\infty.
```

```{math}
\sin x=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n+1}}{(2n+1)!},
\qquad -\infty<x<\infty.
```

```{math}
\cos x=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n}}{(2n)!},
\qquad -\infty<x<\infty.
```

```{math}
\frac{1}{1-x}=\sum_{n=0}^{\infty}x^n,
\qquad |x|<1.
```

```{math}
\ln(1+x)=\sum_{n=1}^{\infty}(-1)^{n+1}\frac{x^n}{n}
=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots,
\qquad -1<x\leq1.
```

For a general real or complex exponent (p),

```{math}
(1+x)^p
=\sum_{n=0}^{\infty}\binom{p}{n}x^n
=1+px+\frac{p(p-1)}{2!}x^2+\cdots,
\qquad |x|<1.
```

Endpoint behavior for the binomial series depends on (p).

## How to construct power-series expansions

Useful approaches include:

1. Apply the Taylor formula by evaluating derivatives at the expansion point.
2. Add, multiply, divide, differentiate, or integrate known power series.
3. Substitute an expression into a known series while respecting its interval
   of convergence.

Examples worth practicing include (e^x\cos x), (	an x), and
(1/(1-x)). Since (ln x) is not analytic at (x=0), expand it about
(x=1) by writing

```{math}
\ln x=\ln\!\left(1+(x-1)\right).
```

## Taylor approximation and remainder

The degree-(n) Taylor polynomial about (x=a) is

```{math}
T_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k.
```

The remainder is

```{math}
R_n(x)=f(x)-T_n(x).
```

Under the hypotheses of Taylor's theorem, there is a point (c) between
(a) and (x) such that

```{math}
R_n(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}.
```

If (|f^{(n+1)}(t)|\leq M) between (a) and (x), then

```{math}
|R_n(x)|\leq\frac{M|x-a|^{n+1}}{(n+1)!}.
```

The Taylor series converges to (f(x)) at a point when (R_n(x)\to0).

## Error bounds for series

For an alternating series

```{math}
S=\sum_{k=0}^{\infty}(-1)^k b_k
```

with (b_k\geq0), (b_{k+1}\leq b_k), and (b_k\to0), the error after
terms through (k=N) satisfies

```{math}
\left|S-\sum_{k=0}^{N}(-1)^k b_k\right|\leq b_{N+1}.
```

For a power series tail with coefficients satisfying
(|c_{n+1}|\leq|c_n|) for (n\geq N+1) and (|x|<1), comparison with a
geometric series gives

```{math}
\left|\sum_{n=N+1}^{\infty}c_nx^n\right|
\leq\frac{|c_{N+1}x^{N+1}|}{1-|x|}.
```

## Numerical uses and limits

Series can be used for numerical evaluation, differentiation, integration, and
limits. For example,

```{math}
\frac{\sin x}{x}
=1-\frac{x^2}{3!}+\frac{x^4}{5!}-\cdots,
```

so

```{math}
\lim_{x\to0}\frac{\sin x}{x}=1.
```

L'Hopital's rule provides an alternative for appropriate indeterminate forms,
but it requires its own hypotheses; it is not a consequence of this single
example.

---

*Migration source: `01_Series/series.tex` from the archived Overleaf export.*
