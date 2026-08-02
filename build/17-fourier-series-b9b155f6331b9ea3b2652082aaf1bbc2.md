# Fourier Series

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

By the end of this lecture, you should be able to:

- compute real and complex Fourier-series coefficients;
- use parity and orthogonality to simplify a series;
- state what a Fourier series converges to at smooth points and jump
  discontinuities; and
- explain how the continuous Fourier transform emerges as the period tends to
  infinity.

## Introduction


- Fourier series are a powerful mathematical tool used to represent periodic functions as infinite sums of trigonometric functions.

- Under appropriate integrability conditions, a periodic function can be
  represented in a mean-square sense by sine and cosine modes. Pointwise
  convergence requires additional conditions and behaves specially at jumps.

- This decomposition allows analysis of complex periodic phenomena using their simpler constituent parts.

The general form of a Fourier series for a function $f(x)$ with period $2L$ is:
```{math}
f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} (a_n \cos(n\omega x) + b_n \sin(n\omega x))
```


- $\omega = \frac{2\pi}{2L} = \frac{\pi}{L}$ is the fundamental frequency.

- $L$ is half the period.

- $\frac{a_0}{2}$ represents the mean value of the function over one period.

- $\cos(n\omega x)$ and $\sin(n\omega x)$ are harmonic components of the function, $n$ is the harmonic number.

- $a_n$ and $b_n$ determine the amplitude of each harmonic component.


## Fourier series

The Fourier coefficients $a_0$, $a_n$, and $b_n$ are determined as:
```{math}
\begin{aligned}
a_0 &= \frac{1}{L} \int_{-L}^{L} f(x)  dx \\
a_n &= \frac{1}{L} \int_{-L}^{L} f(x) \cos(n\omega x)  dx \quad (n = 1, 2, 3, ...) \\
b_n &= \frac{1}{L} \int_{-L}^{L} f(x) \sin(n\omega x)  dx \quad (n = 1, 2, 3, ...)
\end{aligned}
```


- These integrals effectively \"project\" the function onto the basis of sines and cosines, determining how much of each frequency component is present in the original function.

- This projection is possible due to the orthogonality of the trigonometric functions.

- The approximation of the original function generally improves as more terms are included in the Fourier series. The rate of convergence depends on the smoothness of the function being approximated.


## Fourier transformation in human ear


:::{figure} figures/17-fourier-series/Fourier_ear.png
:alt: Anatomy of the ear and cochlea involved in frequency analysis
:width: 85%

The cochlea mechanically separates frequency components along its length.
:::

How sounds make their way from the source to the brain: <https://en.wikipedia.org/wiki/Cochlea>


:::{figure} figures/17-fourier-series/ear_implant.png
:alt: Schematic of a cochlear implant signal-processing pathway
:width: 85%

A cochlear implant converts sound into frequency-dependent stimulation channels.
:::

Cochlear implant simulations: <https://ecs.utdallas.edu/loizou/cimplants/cdemos.htm>


## Properties of Fourier Series: Orthogonality

A key property that makes Fourier series so useful is the orthogonality of the trigonometric functions. This property allows us to separate different frequency components of a function, simplifying analysis and computations. Over an interval of one period, we have:
```{math}
\begin{aligned}
    \int_{-L}^{L} \sin(n\omega x) \sin(m\omega x) \, dx &= L \delta_{nm} \\
    \int_{-L}^{L} \cos(n\omega x) \cos(m\omega x) \, dx &= L \delta_{nm} \\
    \int_{-L}^{L} \sin(n\omega x) \cos(m\omega x) \, dx &= 0
\end{aligned}
```
for positive integers $m,n$. The constant mode must be treated separately:
$\int_{-L}^{L}1\,dx=2L$. Here $\delta_{nm}$ is the Kronecker delta,
```{math}
\delta_{nm} = \begin{cases}
    1 & \text{if } n = m \\
    0 & \text{if } n \neq m
\end{cases}
```
 This orthogonality is what allows us to separate the different frequency components of a function.


## Properties of Fourier Series: Odd and Even Functions

The symmetry of a function can significantly simplify its Fourier series representation. This simplification occurs because odd functions only have sine components, while even functions only have cosine components:

- For odd functions \[$f(-x) = -f(x)$\]:

  - Only sine terms are present ($b_n \neq 0$, $a_n = 0$)

  - The series simplifies to: $f(x) = \sum_{n=1}^{\infty} b_n \sin(n\omega x)$

- For even functions \[$f(-x) = f(x)$\]:

  - Only cosine terms are present ($a_n \neq 0$, $b_n = 0$)

  - The series simplifies to: $f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos(n\omega x)$

These simplifications occur because the integrals for the Fourier coefficients of the opposite type (cosine for odd functions, sine for even functions) evaluate to zero due to the symmetry of the function.


## The complex form of Fourier series

The complex form of the Fourier series is given by:
```{math}
f(x) = \sum_{n=-\infty}^{\infty} C_n e^{in\omega x}
```


The complex coefficients $C_n$ are determined by:
```{math}
C_n = \frac{1}{2L} \int_{-L}^L f(x) e^{-in\omega x} \, dx
```
 These coefficients relate to the real coefficients $a_n$ and $b_n$ as follows:
```{math}
\begin{aligned}
    C_0 &= \frac{a_0}{2} \quad \text{(represents the mean value of } f(x) \text{)} \\
    C_n &= \frac{a_n - ib_n}{2} \quad \text{for } n > 0 \\
    C_{-n} &= \frac{a_n + ib_n}{2} \quad \text{for } n > 0
\end{aligned}
```
 These relationships allow for conversion between the complex and real forms of the Fourier series.


## Properties of Complex Fourier Series


- For real functions $f(x)$, we have $C_{-n} = C_n^*$ (complex conjugate). This property ensures that the function remains real when the complex exponentials are summed.

- The complex exponentials are orthogonal:
```{math}
\frac{1}{2L} \int_{-L}^L e^{im\omega x} e^{-in\omega x} \, dx = \delta_{mn}.
```
 This orthogonality is analogous to that of sine and cosine functions in the real form.


## Advantages of the Complex Form

The complex form of Fourier series offers several advantages:

- More compact notation, combining sine and cosine terms into a single expression.

- Often simplifies mathematical manipulations, especially in advanced applications.

- Provides a natural bridge to the Fourier transform in more advanced studies.

- Facilitates easier handling of symmetry properties in certain types of problems.


## Example

Consider the square wave function:
```{math}
f(x) = \begin{cases}
1, & 0 < x < L \\
-1, & -L < x < 0
\end{cases}
```


:::{note}
The displayed formula defines one period on $(-L,L)$. It is understood to be
continued periodically with period $2L$ outside that interval.
:::

Its complex Fourier series is:
```{math}
f(x) = \frac{4}{\pi} \sum_{n=1,3,5,\ldots}^{\infty} \frac{1}{n} \sin(n\omega x)
= -\frac{2i}{\pi}
\sum_{\substack{n=-\infty\\ n\ \mathrm{odd}}}^{\infty}
\frac{e^{in\omega x}}{n}.
```
 This example demonstrates how the complex form can provide a concise representation of a discontinuous function.


## Convergence of Fourier Series: The Dirichlet Conditions

The Dirichlet conditions provide convenient sufficient (but not necessary)
conditions for pointwise convergence of a Fourier series. For a periodic
function satisfying these conditions, the series converges at $x$ to
$[f(x^-)+f(x^+)]/2$:

1.  $f(x)$ is periodic with period $2L$

2.  $f(x)$ is single-valued and has a finite number of discontinuities in $[-L, L]$

3.  $f(x)$ has a finite number of maxima and minima in $[-L, L]$

4.  $\int_{-L}^L |f(x)| \, dx$ is finite

At a point where $f$ is continuous, this limiting value is simply $f(x)$.


## Fourier Transform

The Fourier series for a function $f(x)$ defined on the interval $[-L, L]$ is:
```{math}
f(x) = \sum_{n=-\infty}^{\infty} c_n e^{i \frac{n\pi}{L} x}
```
 where the Fourier coefficients $c_n$ are defined as:
```{math}
c_n = \frac{1}{2L} \int_{-L}^{L} f(x) e^{-i \frac{n\pi}{L} x} \, dx
```


Define the continuous wave number $k$ as:
```{math}
k = \frac{n\pi}{L}
```
 This implies that $n = \frac{kL}{\pi}$. The spacing between adjacent $k$-values is:
```{math}
\Delta k = \frac{\pi}{L}
```


## Fourier Transform (continued)

As $L\to\infty$, the wave-number spacing tends to zero and
```{math}
\Delta k=\frac{\pi}{L},
\qquad
\sum_n \Delta k \longrightarrow \int_{-\infty}^{\infty}dk.
```
Choose the transform convention
```{math}
F(k)=\int_{-\infty}^{\infty}f(x)e^{-ikx}\,dx.
```
For finite $L$, the sampled transform and Fourier coefficient satisfy
```{math}
F(k_n)=2L\,c_n,
\qquad k_n=\frac{n\pi}{L}.
```
Therefore
```{math}
f(x)
=\sum_n \frac{\Delta k}{2\pi}F(k_n)e^{ik_nx}
\longrightarrow
\frac{1}{2\pi}\int_{-\infty}^{\infty}F(k)e^{ikx}\,dk.
```


## Fourier Transform (continued)

The forward and inverse Fourier transforms are thus given by:

Forward Fourier Transform:
```{math}
F(k) = \int_{-\infty}^{\infty} f(x) e^{-i k x} \, dx
```


Inverse Fourier Transform:
```{math}
f(x) = \frac{1}{2\pi}\int_{-\infty}^{\infty}F(k)e^{ikx}\,dk
```


Other conventions move the factor of $2\pi$ to the forward transform or split
it symmetrically as $1/\sqrt{2\pi}$ in both directions.

[Physically, the Fourier transform decomposes a function into its constituent frequencies, allowing us to analyze signals in the frequency domain rather than the time domain.]{style="color: blue"}


## Comparison of Fourier Series and Fourier Transform


  **Fourier Series**                                                       **Fourier Transform**
  ------------------------------------------------------------------------ ----------------------------------------------------------------------------------------
  $f(x) = \sum\limits_{n=-\infty}^{\infty} c_n e^{in\omega_0 x}$           $f(x) = \frac{1}{2\pi} \int\limits_{-\infty}^{\infty} F(\omega) e^{i\omega x} d\omega$
  $c_n = \frac{1}{T} \int\limits_{-T/2}^{T/2} f(x) e^{-in\omega_0 x} dx$   $F(\omega) = \int\limits_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$


## Example 1: Transform of $e^i\omega_0t$

Example 1: Transform of $e^{i\omega_0t}$


```{math}
\begin{aligned}
f(t) &= e^{i\omega_0t} \\[1ex]
F(\omega) &= \int_{-\infty}^{\infty} e^{i\omega_0t} e^{-i\omega t} dt = \int_{-\infty}^{\infty} e^{i(\omega_0-\omega)t} dt \\[1ex]
&= 2\pi \delta(\omega-\omega_0)
\end{aligned}
```


This identity is understood in the sense of distributions, not as an ordinary
improper integral. It states that a pure complex exponential has all of its
spectral weight at the single frequency $\omega_0$.


## Delta Function


The Dirac delta function $\delta(x)$ is a generalized function that has the following properties:

- $\delta(x) = 0$ for all $x \neq 0$

- $\int_{-\infty}^{\infty} \delta(x) dx = 1$

- For any continuous function $f(x)$, $\int_{-\infty}^{\infty} f(x)\delta(x-a) dx = f(a)$

While the delta function is not a proper function, we can understand it as the limit of a sequence of functions. Let's consider a rectangular pulse function:


```{math}
\delta_\epsilon(x) =
\begin{cases}
\frac{1}{\epsilon} & \text{if } |x| < \frac{\epsilon}{2} \\
0 & \text{otherwise}
\end{cases}
```


The area under this function is:


```{math}
\int_{-\infty}^{\infty} \delta_\epsilon(x) dx = \int_{-\epsilon/2}^{\epsilon/2} \frac{1}{\epsilon} dx = \frac{1}{\epsilon} \cdot \epsilon = 1
```


As $\epsilon \to 0$, $\delta_\epsilon(x)$ approaches the delta function, but the area remains 1.


## Example 2: Transform of $\cos(\omega_0t)$


```{math}
\begin{aligned}
f(t) &= \cos(\omega_0t)
\end{aligned}
```

```{math}
\begin{aligned}
F(\omega) &= \pi [\delta(\omega-\omega_0) + \delta(\omega+\omega_0)]
\end{aligned}
```


**Explanation:**

1\) Express cosine in terms of complex exponentials: $\cos(\omega_0t) = \frac{e^{i\omega_0t} + e^{-i\omega_0t}}{2}$

2\) Take the Fourier transform of each term: $\mathcal{F}\{e^{i\omega_0t}\} = 2\pi\delta(\omega-\omega_0)$ $\mathcal{F}\{e^{-i\omega_0t}\} = 2\pi\delta(\omega+\omega_0)$

3\) Apply linearity and the factor of 1/2: $F(\omega) = \frac{1}{2}[2\pi\delta(\omega-\omega_0) + 2\pi\delta(\omega+\omega_0)]$

This result shows that the Fourier transform of a cosine function consists of two delta functions: one at $\omega_0$ and one at $-\omega_0$, each with half the amplitude of the transform of the complex exponential. This reflects the fact that a cosine wave can be thought of as the sum of two rotating complex exponentials, one rotating positively and one negatively.


## Fourier Transform Properties for Real Functions

If $f(t)$ is real, then $F(-\omega) = F^*(\omega)$

**Proof:**

1\. We assume $f(t)$ is real-valued, i.e. $f(t) = f^*(t)$.

2\. Transform at $-\omega$:
```{math}
F(-\omega) = \int_{-\infty}^{\infty} f(t)\, e^{-i(-\omega)t}\, dt
           = \int_{-\infty}^{\infty} f(t)\, e^{i\omega t}\, dt.
```


3\. Complex conjugate of $F(\omega)$:
```{math}
F^*(\omega) = \left[\int_{-\infty}^{\infty} f(t)\, e^{-i\omega t}\, dt \right]^*
= \int_{-\infty}^{\infty} f^*(t)\, e^{i\omega t}\, dt.
```


4\. Since $f^*(t) = f(t)$ (real function):
```{math}
F^*(\omega) = \int_{-\infty}^{\infty} f(t)\, e^{i\omega t}\, dt.
```


Comparing with step 2, we find
```{math}
\boxed{F(-\omega) = F^*(\omega)}
```


## Derivatives in Fourier Transforms

Given a function $f(t)$, we want to find the Fourier transform of its derivative, i.e., $\mathcal{F}\left\{\frac{df}{dt}\right\}$.

**Proof:**

Step 1: Definition of Fourier Transform:
```{math}
\mathcal{F}\{g(t)\} = \int_{-\infty}^{\infty} g(t) e^{-i\omega t} dt
```


Step 2: Apply definition to Derivative:
```{math}
\begin{aligned}
\mathcal{F}\left\{\frac{df}{dt}\right\} &= \int_{-\infty}^{\infty} \frac{df}{dt} e^{-i\omega t} dt
\end{aligned}
```


Step 3: Integration by parts: $\int u \,dv = uv - \int v \,du.$ In our case:
```{math}
\begin{aligned}
dv &= \frac{df}{dt}dt & u &= e^{-i\omega t} \\
v &= f & du &= -i\omega e^{-i\omega t}dt
\end{aligned}
```


## Derivatives in Fourier Transforms (continued)


Step 4: Apply Integration by Parts:
```{math}
\begin{aligned}
\mathcal{F}\left\{\frac{df}{dt}\right\}
&= \left. f(t)e^{-i\omega t}\right|_{t=-\infty}^{t=+\infty}
   - \int_{-\infty}^{\infty} f(t)\big(-i\omega e^{-i\omega t}\big)\,dt\\[6pt]
&= \left. f(t)e^{-i\omega t}\right|_{-\infty}^{\infty} + i\omega
   \int_{-\infty}^{\infty} f(t)e^{-i\omega t}\,dt\\[6pt]
&= \left. f(t)e^{-i\omega t}\right|_{-\infty}^{\infty} + i\omega F(\omega).
\end{aligned}
```


Step 5: Evaluate Limits

We assume sufficient decay or boundary behavior so that
$\left.f(t)e^{-i\omega t}\right|_{-\infty}^{\infty}=0$.


## Derivatives in Fourier Transforms (continued)

Step 6: Final Result


```{math}
\begin{aligned}
\mathcal{F}\left\{\frac{df}{dt}\right\}
&=i\omega F(\omega)
=i\omega\mathcal{F}\{f(t)\}.
\end{aligned}
```
 We have derived the important property:

This result shows that differentiation in the time domain corresponds to multiplication by $i\omega$ in the frequency domain. This property is fundamental in signal processing and differential equations.

---

*Migration source: `05_Fourier/Fourier1.tex` from the archived Overleaf export.*
