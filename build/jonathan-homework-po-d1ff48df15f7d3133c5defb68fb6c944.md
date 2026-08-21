# Additional problems from Jonathan's original homeworks

:::{admonition} Course-material provenance
:class: dropdown
These problems were recovered from Jonathan Hood's Fall 2024 `HW1`, `HW2`,
and `HW3` source files. Problems already preserved in the shared Homework 1--3
pages are not duplicated here. Wording and notation have been edited for
clarity and mathematical consistency during the Fall 2026 website migration.
:::

## Taylor approximations and plots

1. For each function below, calculate the Taylor expansion about $x=0$ through
   second order. On the same axes, plot the exact function and its zeroth-,
   first-, and second-order approximations. Use $a=1$ for the plots, and choose
   a plotting interval on which both the success and eventual breakdown of the
   local approximation are visible.

   1. $\displaystyle \frac{1}{1-ax}$
   2. $\displaystyle \sqrt{1+ax}$
   3. $\displaystyle \frac{1}{\sqrt{1+ax}}$
   4. $e^{-ax}$
   5. $\cos x$
   6. $\tan x$
   7. $\tanh x$
   8. $\displaystyle \frac{e^x}{1-x}$
   9. $\displaystyle \frac{\sin(ax)}{x}$, with its removable singularity
      defined by the $x\to0$ limit

2. In a far-field approximation, a path length has the form

   ```{math}
   R=\sqrt{x^2+(y+d/2)^2},
   ```

   where $|y|\ll x$ and $|d|\ll x$. Factor out $x$ and expand $R$ through
   second order in the small ratio $(y+d/2)/x$. State explicitly which terms
   you retain and which you discard.

## Complex-exponential identities

1. Express the complex conjugate of $z=re^{\mathrm{i}\theta}$ in polar form.

2. For real $x$ and $y$, express the conjugate of
   $z=e^{x+\mathrm{i}y}$ in terms of $x$ and $y$.

3. Solve for $\cos\theta$ and $\sin\theta$ in terms of
   $e^{\mathrm{i}\theta}$ and $e^{-\mathrm{i}\theta}$.

4. Use Euler's formula to prove
   $2\sin\theta\cos\theta=\sin(2\theta)$.

5. Prove De Moivre's theorem for integer $n$:

   ```{math}
   (\cos\theta+\mathrm{i}\sin\theta)^n
   =\cos(n\theta)+\mathrm{i}\sin(n\theta).
   ```

6. Use complex exponentials to prove the product-to-sum identity

   ```{math}
   \cos\theta\sin\phi
   =\frac{1}{2}\left[\sin(\theta+\phi)-\sin(\theta-\phi)\right].
   ```

## Linear-operator classification

For each mapping below, determine whether it is linear over the real scalars,
linear over the complex scalars, both, or neither. Give a counterexample for
every failed linearity property.

1. $L[y]=c,y$, for a fixed scalar $c$.
2. $L[y]=dy/dx$.
3. $L[y]=y^2$.
4. $L[y]=\operatorname{Re}y$.
5. $L[y]=|y|^2$.
6. $L[y]=(dy/dx)^2$.

## Complex waves and optical intensity

1. Let the physical field be
   $E(t)=\operatorname{Re}[\widetilde E_0e^{\mathrm{i}\omega t}]$.
   Show by averaging over one period that

   ```{math}
   \left\langle E(t)^2\right\rangle
   =\frac{1}{2}|\widetilde E_0|^2.
   ```

   Explain why optical intensity is therefore proportional to the squared
   modulus of the complex amplitude, not to the squared real part at one
   instant.

2. Two fields with the same frequency and wavevector are

   ```{math}
   E_1=E_{01}e^{\mathrm{i}(\omega t-kx)},\qquad
   E_2=E_{02}e^{\mathrm{i}(\omega t-kx+\phi)},
   ```

   with real $E_{01}$ and $E_{02}$. Calculate the time-averaged intensity of
   $E_1+E_2$ as a function of $\phi$. Identify the phases producing maximum and
   minimum intensity.

3. Model two coherent point sources at transverse positions $\pm d/2$. At a
   screen point $(x,y)$, let

   ```{math}
   r_1=\sqrt{x^2+(y-d/2)^2},\qquad
   r_2=\sqrt{x^2+(y+d/2)^2},
   ```

   and $E=e^{\mathrm{i}kr_1}+e^{\mathrm{i}kr_2}$. In the limit
   $x\gg |y|,d$, expand the path lengths, derive the far-field interference
   pattern, and plot the intensity versus $y$ for
   $d=\lambda/2$, $d=\lambda/10$, and $d=4\lambda$. Explain how the fringe
   spacing changes with $d$.

## Separation of variables for diffusion

Consider the one-dimensional diffusion equation

```{math}
\frac{\partial u}{\partial t}=D\frac{\partial^2u}{\partial x^2},
\qquad 0<x<L,
```

with homogeneous boundary conditions $u(0,t)=u(L,t)=0$.

1. Substitute $u(x,t)=X(x)T(t)$ and derive the two ordinary differential
   equations, including a consistent choice of separation constant.
2. Find the allowed spatial eigenfunctions and their corresponding temporal
   factors.
3. Write the series solution for an arbitrary initial profile $u(x,0)=f(x)$
   and give the integral formula for its expansion coefficients.

## Triangle-wave Fourier series

Define the $2\pi$-periodic triangle wave by

```{math}
f(x)=1-\frac{2|x|}{\pi},\qquad -\pi\le x\le\pi.
```

1. Use symmetry before integrating, then calculate the Fourier coefficients
   analytically.
2. Plot the exact triangle wave together with partial Fourier sums containing
   1, 2, 5, and 10 nonzero harmonics.
3. Describe how the approximation error is distributed and compare the
   convergence near the corners with the convergence on smooth portions of the
   wave.

---

*Migration sources: Jonathan Hood's Fall 2024 `HW1.tex`, `HW2.tex`, and
`HW3.tex` from the private original-notes archive.*
