# Green's Functions

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

By the end of this lecture, you should be able to:

- interpret a Green's function as an inverse-operator kernel and impulse
  response;
- distinguish boundary-condition and retarded Green's functions;
- construct the retarded Green's function of a damped oscillator; and
- derive a spectral representation from eigenvalues and eigenfunctions.

## Delta Function


- The Dirac delta function $\delta(x)$ is a generalized function or distribution.

- The Dirac delta function is commonly used in physics and engineering to represent idealized point sources or impulses.

- When integrating over it and another function $f(t)$, it \"picks out\" the value of the function at a specific point:
```{math}
\int_a^b f(t) \, \delta(t - t_0) \, dt = f(t_0) \quad \text{for } a < t_0 < b
```
 This property indicates that the delta function evaluates a function $f(t)$ at $t = t_0$, and outside this interval, the integral is zero.

- The delta function is normalized as follows:
```{math}
\int_{-\infty}^{\infty} \delta(x) \, dx = 1
```


## Delta Function (continued)


- While the delta function is not a proper function, it can be viewed as the limit of a family of normalized functions.

- One common representation is in terms of a top-hat functions:
```{math}
\Pi_a(x) =
  \begin{cases}
  \frac{1}{a} & \text{if } |x| < \frac{a}{2} \\
  0 & \text{otherwise}
  \end{cases}
```


- Another common representation is in terms of a Gaussian. In the limit as $a \to 0$:
```{math}
\delta_a(x) = \frac{1}{|a|\sqrt{\pi}} e^{-x^2/a^2}
```
 This approximation is useful in numerical analysis, where $\delta(x)$ can be represented and manipulated as a limit of smooth functions.

- Both of these functions satisfy the normalization condition:
```{math}
\int_{-\infty}^{\infty} \delta_a(x) \, dx = 1
```


- As $a \to 0$, these functions converge to the delta function: $\delta(x) = \lim_{a \to 0} \delta_a(x)$

**What the original figure plots.** It shows hand-drawn top-hat and Gaussian sequences approaching a delta distribution.

**What this is trying to convey.** Two normalized delta-sequence constructions from Jonathan's original notes.

:::{figure} figures/22-green-functions/delta2.png
:alt: Hand-drawn top-hat and Gaussian sequences approaching a delta distribution
:width: 75%

Two normalized delta-sequence constructions from Jonathan's original notes.
:::

**Polished version.**

:::{figure} figures/22-green-functions/redraw-delta2.png
:alt: Polished version of hand-drawn top-hat and Gaussian sequences approaching a delta distribution
:width: 75%

The polished version preserves hand-drawn top-hat and Gaussian sequences approaching a delta distribution. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

**What the original figure plots.** It shows hand-drawn delta distribution selecting a function value inside an integration interval.

**What this is trying to convey.** The sifting property illustrated in Jonathan's original notes.

:::{figure} figures/22-green-functions/deltafunction.png
:alt: Hand-drawn delta distribution selecting a function value inside an integration interval
:width: 75%

The sifting property illustrated in Jonathan's original notes.
:::

**Polished version.**

:::{figure} figures/22-green-functions/redraw-deltafunction.png
:alt: Polished version of hand-drawn delta distribution selecting a function value inside an integration interval
:width: 75%

The polished version preserves hand-drawn delta distribution selecting a function value inside an integration interval. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::


## Properties of the delta function

For a smooth test function $\phi$,
```{math}
\int\phi(x)\delta(x-x_0)\,dx=\phi(x_0),
\qquad
\int\phi(x)\delta'(x-x_0)\,dx=-\phi'(x_0).
```
Useful scaling and composition identities include
```{math}
\delta(ax)=\frac{1}{|a|}\delta(x),
\qquad
\delta(g(x))
=\sum_{x_i:g(x_i)=0}\frac{\delta(x-x_i)}{|g'(x_i)|},
```
when the zeros $x_i$ are simple.


## Green's functions: Introduction


- The Green's function provides a powerful method for solving inhomogeneous linear equation systems.

- The Green's function generalizes the concept of an inverse matrix or an impulse response to continuous systems.

- The Green's function is fundamentally defined as **the response of the linear system to a unit impulse**.

- Let's write the linear equation system as $Ly(x)=f(x)$, where $f(x)$ represents the forcing term or input.

- The Green's function uses the same linear differential operator and the
  boundary or initial conditions chosen for the original problem:
```{math}
L G(x, z) = \delta(x-z)
```
- Away from the source point $x=z$, it satisfies the corresponding homogeneous
  equation.


- Physically, $G(x,z)$ may be thought of as the response of the system at position $x$ resulting from a unit-strength point source located at position $z$.


## Green's functions: Introduction (continued)


- If the boundary conditions are built into $G$, the solution is
```{math}
y(x) = \int_{a}^{b} G(x, z) f(z) dz
```


- This integral means that the response of the system to a distributed force $f(x)$ is the superposition of the individual responses ($G$) to infinitesimal impulses comprising $f(x)$.

- For a time-translation-invariant system, $G(t,t')=g(t-t')$ and the integral
  is a convolution. For a general operator, $G(x,z)$ depends on its two
  arguments separately and the integral is not necessarily a convolution.

- In case of the linear differential operator $L$, the solution is formally $y=L^{-1}f$. The Green's function $G(x,z)$ is the kernel that defines this inverse linear operator $L^{-1}$ through integration.


## Driving force


- Let's consider an inhomogeneous linear equation:
```{math}
D y(t) = f(t)
```
 $D$ is a linear operator that represents any linear ordinary differential equation (ODE).

- $f(t)$ represents some driving force acting on the system. We can view it as a sum of delta functions:
```{math}
f(t) = \sum_i c_i \delta(t - t_i)
```


- In continuous form, this becomes
```{math}
f(t) = \int_0^\infty f(t') \delta(t' - t) \, dt'
```


- This representation implies that $f(t)$ can be thought of as a sum of \"kicks\" applied to the system at different times. If we find the response of the system to one of these kicks, then we can just sum up all of these responses for each kick to get the total response. This is the idea of the Green's function.

**What the original figure plots.** It shows hand-drawn decomposition of a driving function into impulses and their shifted responses.

**What this is trying to convey.** Impulse decomposition and superposed responses from Jonathan's original Green's-function notes.

:::{figure} figures/22-green-functions/GF.png
:alt: Hand-drawn decomposition of a driving function into impulses and their shifted responses
:width: 80%

Impulse decomposition and superposed responses from Jonathan's original
Green's-function notes.
:::

**Polished version.**

:::{figure} figures/22-green-functions/redraw-GF.png
:alt: Polished version of hand-drawn decomposition of a driving function into impulses and their shifted responses
:width: 80%

The polished version preserves hand-drawn decomposition of a driving function into impulses and their shifted responses. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::


## Green's function definition


- Next, we define the Green's function as the solution to the ODE with a delta function as the source term.

- The Green's function $G(t, t')$ satisfies:
```{math}
D y(t) = f(t)
```

```{math}
D G(t, t')  = \delta(t - t')
```

```{math}
y(t) = \int_0^\infty G_{\mathrm{R}}(t, t') f(t') \, dt',
```


- The Green's function $G(t, t')$ represents the system's response to a delta function \"kick\" applied at time $t'$.

- The retarded Green's function obeys $G_{\mathrm{R}}(t,t')=0$ for $t<t'$,
  so the fixed-domain integral receives contributions only from earlier source
  times. It becomes an ordinary convolution when the coefficients are
  time-translation invariant.


## Proof for the Green's function


- Using a fixed integration domain avoids extra boundary terms from a
  time-dependent upper limit:


```{math}
D y(t)
=D_t\left(\int_0^\infty G_{\mathrm{R}}(t,t')f(t')\,dt'\right)
```


- Since $D$ is a linear operator that operates on $t$, it can be applied inside the integral:
```{math}
D y(t)
=\int_0^\infty
\bigl[D_tG_{\mathrm{R}}(t,t')\bigr]f(t')\,dt'
```


- By definition, the Green's function $G(t, t')$ satisfies the following equation:
```{math}
D_t G_{\mathrm{R}}(t, t') = \delta(t - t')
```


- Substituting this back into the expression for $D y(t)$:
```{math}
D y(t)
=\int_0^\infty\delta(t-t')f(t')\,dt'
=f(t).
```


## Proof for the Green's function (continued)


This verifies the differential equation provided the interchange of the
operator and integral is justified and the Green's function enforces the
required initial or boundary conditions.


## Example: Driven damped harmonic oscillator


- Consider the driven damped harmonic oscillator:
```{math}
y''(t) + 2\gamma y'(t) + \omega_0^2 y(t) = f(t)
```
 where $\gamma$ is the damping coefficient and $\omega_0$ is the natural frequency of the undamped system.

- We start by defining the Green's function $G(t, t')$ for this system, which satisfies:
```{math}
G''(t, t') + 2\gamma G'(t, t') + \omega_0^2 G(t, t') = \delta(t - t')
```
with retarded support $G_{\mathrm{R}}(t,t')=0$ for $t<t'$. Integrating across
$t=t'$ shows that $G_{\mathrm{R}}$ is continuous and its first derivative has
the unit jump
```{math}
\partial_tG_{\mathrm{R}}(t'^+,t')
-\partial_tG_{\mathrm{R}}(t'^-,t')=1.
```

- To find $G(t, t')$, we take the Laplace transform of both sides. Let $\mathcal{L}\{G(t, t')\} = \tilde{G}(p, t')$, where $p$ is the Laplace variable.

- The Laplace transform of the differential equation yields:
```{math}
p^2 \widetilde G(p,t')-pG(0,t')-\partial_tG(0,t')
+2\gamma\!\left[p\widetilde G(p,t')-G(0,t')\right]
+\omega_0^2\widetilde G(p,t')
=\mathcal{L}\{\delta(t-t')\}.
```


## Example: Driven damped harmonic oscillator (continued)


- The Laplace transform of the differential equation yields:
```{math}
p^2 \widetilde G(p,t')-pG(0,t')-\partial_tG(0,t')
+2\gamma\!\left[p\widetilde G(p,t')-G(0,t')\right]
+\omega_0^2\widetilde G(p,t')
=\mathcal{L}\{\delta(t-t')\}.
```


- Given the initial conditions $G(0, t') = 0$ and $G'(0, t') = 0$, this simplifies to:
```{math}
(p^2 + 2\gamma p + \omega_0^2) \tilde{G}(p, t') = e^{-p t'}
```


- Thus:
```{math}
\tilde{G}(p, t') = \frac{e^{-p t'}}{p^2 + 2\gamma p + \omega_0^2}
```


- We now take the inverse Laplace transform to find $G(t, t')$:
```{math}
G_{\mathrm{R}}(t,t')
=\Theta(t-t')\,\frac{e^{-\gamma(t-t')}}{\omega_d}
\sin\!\left[\omega_d(t-t')\right],
```
where $\omega_d=\sqrt{\omega_0^2-\gamma^2}$. This form assumes the
underdamped case $\gamma<\omega_0$; critical and overdamped systems have the
corresponding repeated-root or hyperbolic-sine limits.

- This Green's function represents the system's response to an impulsive force applied at time $t'$.


## Example: Driven damped harmonic oscillator (continued)


- Using the Green's function, the general solution to the original equation is given by:
```{math}
y(t) = \int_0^\infty G_{\mathrm{R}}(t,t')f(t')\,dt'
```


- Substituting the expression for $G(t, t')$:
```{math}
y(t) = \frac{1}{\omega_d}\int_0^t
e^{-\gamma(t-t')}\sin[\omega_d(t-t')]f(t')\,dt'.
```


- This solution shows that the system's response at time $t$ is a sum of the responses to the source term $f(t')$ at all previous times $t'$, weighted by the Green's function. The Green's function incorporates both the damping and the oscillatory nature of the harmonic oscillator.


## System of linear equations


- Let's try to solve matrix equation
```{math}
(E\mathbf{I} - \mathbf{H})\mathbf{a} = \mathbf{b},
```
where $E$ is a scalar, $\mathbf{H}$ is an $N\times N$ Hermitian matrix, and
$\mathbf{a},\mathbf{b}$ are vectors. The inverse exists only when $E$ is not an
eigenvalue of $\mathbf{H}$.

- The standard approach is to find inverse of $(E\mathbf{I} - \mathbf{H})$:
```{math}
\mathbf{G}(E) = (E\mathbf{I} - \mathbf{H})^{-1}
```


- If $\mathbf{G}(E)$ is found, the original equation can be solved for any $\mathbf{b}$:
```{math}
\mathbf{a} = (E\mathbf{I} - \mathbf{H})^{-1}\mathbf{b} = \mathbf{G}(E)\mathbf{b}
```


## System of linear equations (continued)


- For a diagonalizable matrix,
```{math}
\mathbf{A}\mathbf{q}_i = \lambda_i \mathbf{q}_i \; \rightarrow \; \mathbf{A}^{-1} = \mathbf{Q}\Lambda^{-1} \mathbf{Q}^{-1},
```
where $\mathbf{Q}$ is the matrix of eigenvectors and $\Lambda$ is the diagonal
matrix of eigenvalues. For a Hermitian matrix, $\mathbf{Q}^{-1}=\mathbf{Q}^\dagger$.

- Then if $\mathbf{H}\mathbf{C}^{\alpha} = E_{\alpha}\mathbf{C}^{\alpha},$ $\alpha=1,2,\dots,N$:
```{math}
(\mathbf{G}(E))_{ij} = \sum _{\alpha} \frac{C_i^{\alpha}C_j^{\alpha*}}{E-E_{\alpha}}
```


- Elements of $\mathbf{G}(E)$ \"blow up\" (have poles) when E is equal to eigenvalues of $\mathbf{H}$.

- $\mathbf{G}(E)$ is a Green's function associated with $\mathbf{H}$.


## Inhomogeneous differential equation


- Now consider inhomogeneous differential equation:
```{math}
(E-\hat{H})a(x) = b(x),
```
 where E - parameter, $\hat{H}$ - Hermitian differential operator.\
  We solve for $a(x)$.

- Assume for simplicity that $\hat H$ has a complete discrete orthonormal
  eigenbasis:
```{math}
\hat{H} \psi_\alpha (x) = E_{\alpha} \psi_{\alpha}(x)
```


- Expand $a(x)$ and $b(x)$ into eigenstates of $\hat{H}$:
```{math}
a(x) = \sum_{\alpha} a_{\alpha} \psi_{\alpha}(x)
```

```{math}
b(x) = \sum_{\alpha} b_{\alpha} \psi_{\alpha}(x)
```
 Here, we can compute $b_\alpha= \int dx' \psi_\alpha ^*(x') b(x')$.\
  However, we do not know $a_\alpha$ - these need to be determined.


## Inhomogeneous differential equation (continued)


- Plug in $a(x)$ and $b(x)$ into the original equation:
```{math}
\sum_\alpha a_{\alpha}(E-\hat{H})\psi_{\alpha}(x) = \sum_{\alpha} b_{\alpha} \psi_{\alpha}(x)
```


- Since $\psi_\alpha$ are eigenstates of $\hat{H}$:
```{math}
\sum_\alpha a_{\alpha}(E-E_\alpha)\psi_{\alpha}(x) = \sum_{\alpha} b_{\alpha} \psi_{\alpha}(x)
```


- Multiplying from left by $\psi_\alpha^*(x)$, integrating and using orthogonality of eigenstates $\psi_\alpha$:
```{math}
a_{\alpha}(E-E_\alpha) = b_{\alpha}
```


- Solution:
```{math}
a(x) = \sum_{\alpha} \frac{ b_{\alpha}}{E-E_\alpha}\psi_\alpha(x)=
          \int dx' \Bigl[ \sum_\alpha \frac{\psi_\alpha(x)\psi_\alpha^*(x')}{E-E_\alpha}  \Bigr] b(x')
```


## Inhomogeneous differential equation (continued)


```{math}
a(x) = \sum_{\alpha} \frac{ b_{\alpha}}{E-E_\alpha}\psi_\alpha(x)=
        \int dx' \Bigl[ \sum_\alpha \frac{\psi_\alpha(x)\psi_\alpha^*(x')}{E-E_\alpha}  \Bigr] b(x')
```


- Green's function $G(x,x',E)$:
```{math}
G(x,x',E) = \sum_\alpha \frac{\psi_\alpha(x)\psi_\alpha^*(x')}{E-E_\alpha}
```


- Then solution can be written as:
```{math}
a(x) = \int dx' G(x,x',E) b(x')
```


- Similarly to matrix equation, solution to the differential equation with any input (driving force) is known as long as its Green's function is found.

- The resolvent has poles at isolated discrete eigenvalues. At such an energy
  the inverse is undefined unless a prescription such as $E\to E\pm i0$ or a
  projection away from the null space is specified. Continuous spectra require
  integrals in addition to the discrete sum.


## Inhomogeneous differential equation (continued)


- Suppose $b(x)=\delta(x-x')$.

- Then:
```{math}
a(x)=\int dz\,G(x,z;E)\delta(z-x')=G(x,x';E).
```


- Substituting in the original differential equation:
```{math}
(E-\hat{H})G(x,x',E) = \delta(x-x')
```


- This is differential equation for $G(x,x',E)$.

- In matrix form:
```{math}
(E\mathbf{I} - \mathbf{H})(E\mathbf{I} - \mathbf{H})^{-1} = \mathbf{I}.
```

## Homework for this lecture

### Existing final-project option

:::{include} ../assignments/final-project.md
:start-after: ## Deriving the Green's Function for the Time-Dependent Schrödinger Equation
:end-before: ## Michaelis--Menten Kinetics and Reaction--Diffusion Modeling
:filename: false
:::

---

*Migration source: `06_ODE/Green.tex` from the archived Overleaf export.*
