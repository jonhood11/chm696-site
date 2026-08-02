# Fourier Transforms and the DFT

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

By the end of this lecture, you should be able to:

- apply a consistent forward/inverse Fourier-transform convention;
- use shift, derivative, convolution, and Parseval identities;
- explain sampling and frequency bins in the discrete Fourier transform; and
- derive the radix-2 FFT recurrence and its $O(n\log n)$ cost.

## Fourier series

The complex form of the Fourier series is given by:
```{math}
f(x) = \sum_{k=-\infty}^{\infty} C_k e^{i k\omega x}
```


The complex coefficients $C_n$ are determined by:
```{math}
C_k = \frac{1}{2L} \int_{-L}^L f(x) e^{-ik\omega x} \, dx
```


The complex exponentials are orthogonal:
```{math}
\frac{1}{2L} \int_{-L}^L e^{im\omega x} e^{-in\omega x} \, dx = \delta_{mn}.
```


## Fourier series (continued)

We can think of a Fourier series as just a change of coordinates of a function $f(x)$ into an infinite-dimensional orthogonal function space spanned by sines and cosines $\psi_k = e^{i kx} = \cos(kx) + i \sin(kx)$. Indeed, for a function $f(x)$ defined on interval $(-\pi, \pi)$:


```{math}
f(x) = \sum_{k=-\infty}^{\infty} c_k \psi_k(x) = \frac{1}{2\pi} \sum_{k=-\infty}^{\infty} \langle \psi_k(x), f(x)\rangle \psi_k(x),
```


with coefficients given by $c_k = \frac{1}{2\pi}\langle \psi_k(x), f(x)\rangle$


## Convergence of Fourier series


Example 1: Continuous hat function: quick convergence.


**What the original figure plots.** It shows partial Fourier sums approximating a continuous hat function.

**What this is trying to convey.** For this continuous piecewise-smooth function, increasing the number of modes improves the approximation.

:::{figure} figures/18-fourier-transforms/Fourier1.png
:alt: Partial Fourier sums approximating a continuous hat function
:width: 85%

For this continuous piecewise-smooth function, increasing the number of modes improves the approximation.
:::

**Polished version.**

:::{figure} figures/18-fourier-transforms/redraw-Fourier1.png
:alt: Polished version of partial Fourier sums approximating a continuous hat function
:width: 85%

The polished version preserves partial Fourier sums approximating a continuous hat function. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

Example 2: Discontinuous square hat function: ringing oscillations at the points of discontinuities, known as *Gibbs phenomena*.


**What the original figure plots.** It shows partial Fourier sums near jumps of a discontinuous square pulse.

**What this is trying to convey.** Near a jump, the partial sums exhibit persistent Gibbs overshoot while the oscillatory region narrows.

:::{figure} figures/18-fourier-transforms/Fourier2.png
:alt: Partial Fourier sums near jumps of a discontinuous square pulse
:width: 85%

Near a jump, the partial sums exhibit persistent Gibbs overshoot while the oscillatory region narrows.
:::

**Polished version.**

:::{figure} figures/18-fourier-transforms/redraw-Fourier2.png
:alt: Polished version of partial Fourier sums near jumps of a discontinuous square pulse
:width: 85%

The polished version preserves partial Fourier sums near jumps of a discontinuous square pulse. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

## Comparison of Fourier Series and Fourier Transform


  **Fourier Series**                                                       **Fourier Transform**
  ------------------------------------------------------------------------ ----------------------------------------------------------------------------------------------------------------------------------
  $f(x) = \sum\limits_{n=-\infty}^{\infty} c_n e^{in\omega_0 x}$           $f(x) = \mathcal{F}^{-1}(\hat{f}(\omega)) = \frac{1}{2\pi} \int\limits_{-\infty}^{\infty} \hat{f}(\omega) e^{i\omega x} d\omega$
  $c_n = \frac{1}{T} \int\limits_{-T/2}^{T/2} f(x) e^{-in\omega_0 x} dx$   $\hat{f}(\omega) = \mathcal{F}(f(x)) = \int\limits_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$


## Fourier transform of a Gaussian function

A normalized Gaussian distribution $f(t)$, centered on $t=0$:
```{math}
f(t) = \frac{1}{\tau \sqrt{2\pi}} \exp \left( - \frac{t^2}{2\tau^2} \right), \quad -\infty < t < \infty
```
 A root mean square deviation (or \"spread\") in time is $\Delta t =  \tau$.

The Fourier transform $\hat{f}(\omega)$ of $f(t)$:
```{math}
\hat{f}(\omega) = \exp \left( - \frac{\tau^2 \omega^2}{2} \right)
```


The Gaussian amplitude has reciprocal width parameters: $\tau$ in time and
$1/\tau$ in angular frequency. If widths are instead defined as the standard
deviations of the normalized intensities $|f(t)|^2$ and
$|\hat f(\omega)|^2$, then
```{math}
\Delta t=\frac{\tau}{\sqrt{2}},
\qquad
\Delta\omega=\frac{1}{\sqrt{2}\tau},
\qquad
\Delta t\,\Delta\omega=\frac{1}{2}.
```
Thus a narrower signal in time necessarily has a broader frequency spectrum.


## Time-Shifting Property


The time-shifting property states that a shift in the time domain corresponds to a phase shift in the frequency domain:

If $\mathcal{F}\{f(t)\} = F(\omega)$, then
```{math}
\mathcal{F}\{f(t-t_0)\} = e^{-i\omega t_0}F(\omega)
```


This property is crucial in understanding how delays in signals affect their frequency content.

**Proof:**
```{math}
\begin{aligned}
 \mathcal{F}\{f(t-t_0)\} &= \int_{-\infty}^{\infty} f(t-t_0)e^{-i\omega t}dt \\
 &= \int_{-\infty}^{\infty} f(u)e^{-i\omega (u+t_0)}du \quad \text{(let $u = t-t_0$)} \\
 &= e^{-i\omega t_0}\int_{-\infty}^{\infty} f(u)e^{-i\omega u}du \\
 &= e^{-i\omega t_0}F(\omega)
\end{aligned}
```


## Fourier transform: summary


```{math}
\mathcal{F}( e^{i\omega_0t} ) = 2\pi \delta(\omega-\omega_0)
```


```{math}
\mathcal{F}(\cos(\omega_0t)) = \pi [\delta(\omega-\omega_0) + \delta(\omega+\omega_0)]
```


```{math}
\mathcal{F}(\frac{df}{dt}) = i\omega \mathcal{F}(f(t))
```


```{math}
\mathcal{F}(f(t-t_0)) = e^{-i\omega t_0}F(\omega)
```


## Convolution

The continuous convolution of $f(t)$ and $g(t)$ is defined as:
```{math}
(f * g)(t) = \int_{-\infty}^{\infty} f(\tau) g(t - \tau) \, d\tau
```


The convolution is commutative,
```{math}
(f * g)(t) = (g * f)(t)
```
 The proof for commutativity comes from a quick change of variables by setting $u = t - \tau$, which implies $du = -d\tau$. Substituting into the integral:
```{math}
(f * g)(t) = \int_{\infty}^{-\infty} f(t - u) g(u) (-du)
```
 Flipping the limits of integration to absorb the negative sign:
```{math}
(f * g)(t) = \int_{-\infty}^{\infty} f(t - u) g(u) \, du
```
 This is exactly the form of $(g * f)(t)$


## Convolution and cross-correlation

One common cross-correlation convention is
```{math}
(f\star g)(t)
=\int_{-\infty}^{\infty}f^*(\tau)\,g(\tau+t)\,d\tau.
```
Unlike convolution, correlation conjugates one input and does not use the same
reflection-and-shift operation. For real functions it measures their overlap as
a function of relative shift.


**What the original figure plots.** It shows graphical comparison of convolution and cross-correlation.

**What this is trying to convey.** Convolution includes a reflection before shifting and integrating; cross-correlation compares relative shifts.

:::{figure} figures/18-fourier-transforms/convolution.png
:alt: Graphical comparison of convolution and cross-correlation
:width: 90%

Convolution includes a reflection before shifting and integrating; cross-correlation compares relative shifts.
:::

**Polished version.**

:::{figure} figures/18-fourier-transforms/redraw-convolution.png
:alt: Polished version of graphical comparison of convolution and cross-correlation
:width: 90%

The polished version preserves graphical comparison of convolution and cross-correlation. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

## Convolution Theorem

The Convolution Theorem is a fundamental principle in signal processing and Fourier analysis. It states that under suitable conditions, the Fourier transform of the convolution of two functions is equal to the product of their Fourier transforms.
```{math}
\mathcal{F}\{ f(t) * g(t) \} = F(\omega) G(\omega)
```

```{math}
\mathcal{F}^{-1}\{ F(\omega) G(\omega) \} = f(t) * g(t) = \int_{-\infty}^\infty f(\tau) g(t - \tau) \, d\tau
```


This theorem provides a powerful link between operations in the time domain and the frequency domain:

- Convolution in the time domain corresponds to multiplication in the frequency domain.

- Multiplication in the time domain corresponds to convolution in the frequency domain.

With the transform normalization used here, the second identity includes a
factor:
```{math}
\mathcal{F}\{f(t)g(t)\}(\omega)
=\frac{1}{2\pi}(F*G)(\omega).
```


## Proof of the Convolution Theorem

Suppose $\mathcal{F}\{ f(t) \} = F(\omega)$ and $\mathcal{F}\{ g(t) \} = G(\omega)$. Then, the Fourier transform of the convolution of $f(t)$ and $g(t)$ is:


```{math}
\begin{aligned}
\mathcal{F}\{ (f * g)(t) \} &= \int_{-\infty}^\infty (f * g)(t) \, e^{- i \omega t} \, dt \\
&= \int_{-\infty}^\infty \left( \int_{-\infty}^\infty f(\tau) g(t - \tau) \, d\tau \right) e^{- i \omega t} \, dt \\
&= \int_{-\infty}^\infty f(\tau) \left( \int_{-\infty}^\infty g(t - \tau) e^{- i \omega t} \, dt \right) d\tau \\
&= \int_{-\infty}^\infty f(\tau) e^{- i \omega \tau} \left( \int_{-\infty}^\infty g(u) e^{- i \omega u} \, du \right) d\tau \\
&= F(\omega) G(\omega)
\end{aligned}
```
 In the second-to-last line, we used the change of variables $u = t - \tau$.


## Example: Solving heat equation using Fourier transform


- The Heat (Diffusion) Equation in the Spatial Domain:
```{math}
\frac{\partial u}{\partial t} = \alpha^2 \frac{\partial^2 u}{\partial x^2} \quad \text{or} \quad u_t = \alpha^2 u_{xx}
```
 where $u(t,x)$ is the temperature distribution in time and space,\
  $\alpha$ is the thermal diffusivity constant.

- Apply the Fourier transform in space:
```{math}
\mathcal{F}(u(t, x)) = \hat{u}(t,\omega)
```
.

- Utilize the property of the Fourier transform derivatives :
```{math}
\mathcal{F}(u_{xx}) = (\text{i}\omega)^2 \hat{u} = -\omega^2 \hat{u}
```


- Applying this transformation, the original PDE is converted into an ODE for each fixed frequency $\omega$:
```{math}
\hat{u}_t = -\alpha^2 \omega^2 \hat{u}
```


## Example: Solving heat equation using Fourier transform (continued)


- The resulting ODE in the frequency domain has a straightforward exponential solution
```{math}
\hat{u}(t, \omega) = e^{-\alpha^2\omega^2 t} \hat{u}(0, \omega)
```
 where $\hat{u}(0, \omega)$ is the Fourier transform of the initial temperature distribution $u(0, x)$.

  This solution shows that **higher frequencies** (larger $\omega$) **decay more rapidly**.

- To find the solution $u(t, x)$ in the original coordinates, the inverse Fourier transform is applied to $\hat{u}(t, \omega)$:
```{math}
u(t, x) = \mathcal{F}^{-1}(\hat{u}(t, \omega))
```


  Using the convolution theorem, the solution is the convolution of the initial condition $u(0, x)$ with the inverse transform of the Gaussian term, which is also a Gaussian:
```{math}
u(t, x) = \mathcal{F}^{-1}\left(e^{-\alpha^2\omega^2 t}\right) \ast u(0, x) = \frac{1}{2\alpha \sqrt{\pi t}} e^{-\frac{x^2}{4 \alpha^2 t}} \ast u(0, x)
```


## Parseval's Theorem

For complex waves, the power or intensity is related to the square of the wave's amplitude: $I = |x(t)|^2$.\
The total energy in a signal over all time is given by:
```{math}
E = \int_{-\infty}^{\infty} |x(t)|^2 \, dt
```


We can also analyze signals in the frequency domain using the Fourier transform: $X(\omega) = \mathcal{F}\{ x(t) \}$

Parseval's theorem relates the energy of a signal in the time domain to its energy in the frequency domain:
```{math}
\int_{-\infty}^{\infty} |x(t)|^2 \, dt = \frac{1}{2\pi}\int_{-\infty}^{\infty} |X(\omega)|^2 \, d\omega
```


[The total energy of a signal is preserved whether we consider it in the time domain or the frequency domain.]{style="color: blue"}


## Parseval's Theorem (continued)

Parseval's Theorem:
```{math}
\int_{-\infty}^{\infty} |x(t)|^2 \, dt = \frac{1}{2\pi}\int_{-\infty}^{\infty} |X(\omega)|^2 \, d\omega
```


This theorem states that the total energy can also be obtained by integrating $|X(\omega)|^2$ over the frequency domain.\
With this Fourier convention, $|X(\omega)|^2/(2\pi)$ is the spectral energy
density with respect to angular frequency.


## Proof of Parseval's Theorem

Start with the inverse Fourier transform:
```{math}
\begin{aligned}
f(t) &= \frac{1}{2\pi}\int_{-\infty}^{\infty} F(\omega)e^{i\omega t} \, d\omega
\end{aligned}
```
 To find $|f(t)|^2$, we multiply $f(t)$ by its complex conjugate:
```{math}
\begin{aligned}
|f(t)|^2 &= f(t)f^*(t) \\
&= \frac{1}{(2\pi)^2}\int_{-\infty}^{\infty}\int_{-\infty}^{\infty} F(\omega)F^*(\omega')e^{i(\omega-\omega')t} \, d\omega \, d\omega'
\end{aligned}
```
 Now, we integrate both sides over all time:
```{math}
\begin{aligned}
\int_{-\infty}^{\infty} |f(t)|^2 \, dt &= \frac{1}{(2\pi)^2}\int_{-\infty}^{\infty}\int_{-\infty}^{\infty} F(\omega)F^*(\omega')\left(\int_{-\infty}^{\infty}e^{i(\omega-\omega')t} \, dt\right) \, d\omega \, d\omega'
\end{aligned}
```
 The integral in parentheses is the Dirac delta function:
```{math}
\begin{aligned}
\int_{-\infty}^{\infty}e^{i(\omega-\omega')t} \, dt = 2\pi\delta(\omega-\omega')
\end{aligned}
```


## Proof of Parseval's Theorem - cont

Substituting this back into our equation:
```{math}
\begin{aligned}
\int_{-\infty}^{\infty} |f(t)|^2 \, dt &= \frac{1}{2\pi}\int_{-\infty}^{\infty}\int_{-\infty}^{\infty} F(\omega)F^*(\omega')\delta(\omega-\omega') \, d\omega \, d\omega' \\
&= \frac{1}{2\pi}\int_{-\infty}^{\infty} F(\omega)F^*(\omega) \, d\omega \\
&= \frac{1}{2\pi}\int_{-\infty}^{\infty} |F(\omega)|^2 \, d\omega
\end{aligned}
```
 This completes the proof of Parseval's Theorem.


## Discrete Fourier transform (DFT)

The Discrete Fourier Transform (DFT) is a powerful tool used to transform a sequence of discrete-time signals from the time domain into the frequency domain. It is often considered an approximation or discretization of the Fourier series for signals that are sampled in time and of finite length.

Suppose $\mathbf{f} = [f_0, f_1, f_2, \dots, f_{n-1} ]$ is the discretized representation of function $f(x)$ at regular spacing $\Delta x$.

The discrete Fourier transform is given by:
```{math}
\hat{f}_k = \sum_{j=0}^{n-1} f_j e^{-i 2\pi jk /n}
```


The inverse discrete Fourier transform is
```{math}
f_j = \frac{1}{n} \sum_{k=0}^{n-1} \hat{f}_k e^{i 2\pi jk /n}.
```


Here $\omega_n=e^{-i2\pi/n}$ is the primitive $n$th root of unity used to
construct the DFT matrix. If samples are separated by $\Delta t$, frequency bin
$k$ corresponds to $k/(n\Delta t)$ cycles per unit time, with negative
frequencies represented by the upper-index bins.


## Discrete Fourier transform (DFT) (continued)

Thus, DFT is a linear operator (i.e., a matrix) that maps the data points in $\mathbf{f}$ to the frequency domain $\hat{\mathbf{f}}$:
```{math}
\{f_0, f_1, f_2, \dots, f_{n-1}  \} \Rightarrow \{\hat{f}_0, \hat{f}_1, \hat{f}_2, \dots, \hat{f}_{n-1} \}
```


The DFT may be computed by matrix multiplication:


```{math}
\begin{bmatrix}
        \hat{f}_0 \\ \hat{f}_1 \\ \hat{f}_2 \\ \vdots \\ \hat{f}_{n-1}
    \end{bmatrix} =
    \begin{bmatrix}
        1 & 1 & 1 & \cdots & 1 \\
        1 & \omega_n & \omega_n^2 & \cdots & \omega_n^{n-1} \\
        1 & \omega_n^2 & \omega_n^4 & \cdots & \omega_n^{2(n-1)} \\
        \vdots & \vdots & \vdots & \ddots & \vdots \\
        1 & \omega_n^{n-1} & \omega_n^{2(n-1)} & \cdots & \omega_n^{(n-1)^2} \\
    \end{bmatrix}
    \begin{bmatrix}
    f_0 \\ f_1 \\ f_2\\ \vdots \\ f_{n-1}
    \end{bmatrix}
```


The displayed DFT matrix is a complex Vandermonde matrix. With this
normalization it satisfies $F_n^\dagger F_n=nI$ and is therefore not itself
unitary; $F_n/\sqrt{n}$ is unitary. Each output coefficient has a magnitude and
phase.


## Fast Fourier transform (FFT)


- Discrete Fourier transform (DFT): cost $O(n^2)$

- Fast Fourier transform (FFT): cost $O(n \log (n))$

- The ratio $n^2/(n\log n)=n/\log n$ grows with $n$, so the computational
  advantage becomes dramatic for long signals.

- Example: ten seconds sampled at 44.1 kHz gives $n=441{,}000$. The leading
  operation counts scale roughly as $1.94\times10^{11}$ for direct DFT
  evaluation versus $8.3\times10^6$ for $n\log_2n$ FFT scaling (implementation
  constants vary).

- Related factorizations date back to Gauss; Cooley and Tukey's 1965 paper
  helped establish the modern FFT algorithm.


## FFT algorithm


- Suppose $n$ is a power of 2, e.g., $n = 1024 = 2^{10}$.

- Split the input into its even- and odd-indexed subsequences. For
  $k=0,\ldots,n/2-1$, compute the two length-$n/2$ DFTs $E_k$ and $O_k$. Then
```{math}
\begin{aligned}
\widehat f_k &= E_k+\omega_n^k O_k,\\
\widehat f_{k+n/2} &= E_k-\omega_n^k O_k,
\qquad
\omega_n=e^{-i2\pi/n}.
\end{aligned}
```


- $\mathbf{f}_{even}$ and $\mathbf{f}_{odd}$ are the even and odd index elements of $\mathbf{f}$

- The process is then repeated, i.e., $\mathbf{F}_{1024} \rightarrow \mathbf{F}_{512} \rightarrow \mathbf{F}_{256} \rightarrow \cdots \rightarrow \mathbf{F}_{4} \rightarrow \mathbf{F}_{2}$

- If $n\ne2^p$, one may use a mixed-radix or other general-length FFT; zero
  padding to a convenient length changes the frequency-grid sampling but does
  not add information to the signal.


## FFT applications

**What the original figure plots.** It shows aperture and observation planes in a far-field diffraction geometry.

**What this is trying to convey.** Fourier-optics geometry from Jonathan's original notes: the far-field pattern is related to the spatial Fourier transform of the aperture field.

:::{figure} figures/18-fourier-transforms/asdiojsapij.png
:alt: Aperture and observation planes in a far-field diffraction geometry
:width: 75%

Fourier-optics geometry from Jonathan's original notes: the far-field pattern
is related to the spatial Fourier transform of the aperture field.
:::

**Polished version.**

:::{figure} figures/18-fourier-transforms/redraw-asdiojsapij.png
:alt: Polished version of aperture and observation planes in a far-field diffraction geometry
:width: 75%

The polished version preserves aperture and observation planes in a far-field diffraction geometry. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::


- Computing derivatives, e.g., to solve PDEs

- Denoising data

- Data analysis

- Compression of audio and video signals

## Homework for this lecture

### Existing shared homework

The Fourier-transform problems are embedded from
[Homework 3](../assignments/homework-03.md).

:::{include} ../assignments/homework-03.md
:start-after: ## Fourier transforms
:end-before: ---
:filename: false
:::

### Existing final-project option

:::{include} ../assignments/final-project.md
:start-after: ## Aliasing and Sampling Theorem Investigation
:end-before: ## Continuous Wavelet Transform (CWT) Time--Frequency Analysis
:filename: false
:::

---

*Migration source: `05_Fourier/Fourier2.tex` from the archived Overleaf export.*
