# Sturm-Liouville Theory

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

By the end of this lecture, you should be able to:

- put a second-order eigenvalue ODE into Sturm--Liouville form;
- identify its coefficient, weight, interval, and boundary conditions;
- derive orthogonality from the Lagrange boundary form; and
- recognize the Sturm--Liouville equations for common special functions.

## Introduction


- In Fourier series, we used a set of trigonometric functions and demonstrated that they were orthogonal and complete.

- Sturm-Liouville theory generalizes this concept by describing the relationship between eigenfunctions and ordinary differential equations (ODEs).

- A regular self-adjoint Sturm--Liouville problem has real eigenvalues and
  eigenfunctions that are orthogonal with respect to its weight. Under the
  standard regularity hypotheses, those eigenfunctions are complete in the
  corresponding weighted $L^2$ space.

- These orthogonal eigenfunctions are powerful tools for analyzing ODEs, such as finding the normal modes of a system, determining time dependence, or intuitively understanding the natural resonances of systems.


## Example: second-order ODE


- Consider a second-order linear ordinary differential equation (ODE) of the form:
```{math}
\label{eq:sl_basic}
  \frac{d^2 \psi(x)}{dx^2} + K^2 \psi(x) = 0.
```


- This equation can be rewritten in operator form as:
```{math}
\mathcal{L} \psi = K^2 \psi,
```
 where $\mathcal{L}$ is the differential operator defined by:
```{math}
\mathcal{L} = -\frac{d^2}{dx^2}.
```


- This formulation leads to the general eigenvalue problem:
```{math}
\mathcal{L} \psi = \lambda \psi,
```
 with boundary conditions $\psi(0) = \psi(a) = 0$.

- In this context, $\psi$ is the eigenfunction, and $\lambda$ is the eigenvalue.


## Example: second-order ODE (continued)


```{math}
\frac{d^2 \psi(x)}{dx^2} + K^2 \psi(x) = 0
```


- The boundary conditions require the solution to be represented as a Fourier sine series:
```{math}
\psi_n(x) = \sqrt{\frac{2}{a}} \sin\left( \frac{n \pi x}{a} \right), \quad K = \frac{n \pi}{a},
```
 where $n$ is a positive integer.

- The normalization ensures that the eigenfunctions are orthonormal over the interval $[0, a]$.


## Example: second-order ODE (continued)


```{math}
\psi_n(x) = \sqrt{\frac{2}{a}} \sin\left( \frac{n \pi x}{a} \right), \quad K = \frac{n \pi}{a},
```


- We can manually verify that these eigenfunctions $\psi_n(x)$ are orthogonal under the inner product:
```{math}
\int_0^a \psi_n(x)^* \psi_m(x) \, dx =
  \begin{cases}
  0 & \text{if } n \neq m, \\
  1 & \text{if } n = m.
  \end{cases}
```


- The complex conjugate $\psi_n(x)^*$ is included because the functions could, in general, be complex. The norm of a complex function is given by $|\psi|^2 = \psi^* \psi$.


## Dirac notations for inner product


- We now introduce a more general notation for the inner product, which is not yet specific to quantum mechanics. We define:
```{math}
\langle \psi_n | \psi_m \rangle = \int \psi_n(x)^* \psi_m(x) \, dx = \delta_{nm},
```
 where the Kronecker delta $\delta_{nm}$ is defined as
```{math}
\delta_{nm} =
      \begin{cases}
          1 & \text{if } n = m, \\
          0 & \text{if } n \neq m.
      \end{cases}
```


- We also introduce the notation for the inner product involving an operator $\mathcal{A}$:
```{math}
\langle \psi_n | \mathcal{A} | \psi_m \rangle = \int \psi_n(x)^* \mathcal{A} \psi_m(x) \, dx.
```
This is a matrix element. It is an expectation value only when the same
normalized state appears on both sides, $\langle\psi|\mathcal A|\psi\rangle$.


## Dirac notations for inner product (continued)


- For example, for the operator $\mathcal{L}$, we have:
```{math}
\int_0^a \psi_n(x)^* \mathcal{L} \psi_m(x) \, dx
= \lambda_m \int_0^a \psi_n(x)^* \psi_m(x) \, dx,
```
 which can be expressed using our new notation as:
```{math}
\langle \psi_n | \mathcal{L} | \psi_m \rangle = \lambda_m \langle \psi_n | \psi_m \rangle.
```


- Additionally, the operator can act on the first function in the inner product:
```{math}
\langle \mathcal{L} \psi_n | \psi_m \rangle = \int (\mathcal{L} \psi_n(x))^* \psi_m(x) \, dx.
```


- Similarly,
```{math}
\langle \psi_n | \mathcal{L} \psi_m \rangle = \langle \psi_n | \mathcal{L} | \psi_m \rangle,
```
 which highlights the linearity of the inner product operation.


## Hermitian operators


- An operator $\mathcal{L}$ is called **Hermitian** (or **self-adjoint**) if it satisfies:
```{math}
\langle v | \mathcal{L} u \rangle = \langle \mathcal{L} v | u \rangle
```
 for all functions $u$ and $v$ in the domain of $\mathcal{L}$, given appropriate boundary conditions.

- For the operator to be Hermitian, the following condition must hold:
```{math}
\int_a^b v^*(x) \mathcal{L} u(x) \, dx = \int_a^b \left[ \mathcal{L} v(x) \right]^* u(x) \, dx
```


- Self-adjointness first implies that every eigenvalue is real. For eigenpairs
  $\mathcal Lu=\lambda_u u$ and $\mathcal Lv=\lambda_v v$,
```{math}
(\lambda_u-\lambda_v)
\int_a^b v^*(x)u(x)\,dx=0.
```


- Thus, the eigenfunctions corresponding to different eigenvalues are orthogonal:
```{math}
\int_a^b v^*(x) u(x) \, dx = 0 \quad \text{if} \quad \lambda_u \neq \lambda_v
```


## Proof of self-adjointness


- Use the standard Sturm--Liouville expression
```{math}
\mathcal{L}u
=-\frac{d}{dx}\!\left[p(x)\frac{du}{dx}\right]+q(x)u,
```
where $p$ and $q$ are real and sufficiently regular and $p(x)>0$ in a regular
problem.

- $\mathcal{L}$ is the **Sturm--Liouville linear operator**.

- We will now show that this form is self-adjoint. While this does not encompass every second-order ODE, it includes a large and important class of them.

- To ensure that $\mathcal{L}$ is self-adjoint, the operator must satisfy certain conditions, including appropriate behavior at the boundaries. Specifically, the boundary terms arising from integration by parts must vanish.


## Proof of self-adjointness (continued)


- Consider the integral:
```{math}
\int_a^b v^*(x) \mathcal{L} u(x) \, dx
=\int_a^b v^*(x)
\left(-\frac{d}{dx}\left[p(x)\frac{du}{dx}\right]+q(x)u(x)\right)dx
```


- Integrate by parts:
```{math}
\int_a^b v^*(x) \mathcal{L} u(x) \, dx
```

```{math}
=-\left[v^*(x)p(x)u'(x)\right]_a^b
+\int_a^b v'^*(x)p(x)u'(x)\,dx
+\int_a^b v^*(x)q(x)u(x)\,dx
```


- Similarly, for $\int_a^b \left[ \mathcal{L} v(x) \right]^* u(x) \, dx$, we obtain:
```{math}
\int_a^b \left[ \mathcal{L} v(x) \right]^* u(x) \, dx
```

```{math}
=-\left[p(x)v'^*(x)u(x)\right]_a^b
+\int_a^b p(x)v'^*(x)u'(x)\,dx
+\int_a^b v^*(x)q(x)u(x)\,dx
```


- Subtracting the two expressions, the difference involves only the boundary terms


## Proof of self-adjointness (continued)


- Subtracting the two expressions, the difference involves only the boundary terms:
```{math}
\int_a^b v^*(x) \mathcal{L} u(x) \, dx - \int_a^b \left[ \mathcal{L} v(x) \right]^* u(x) \, dx
```

```{math}
=\left[p(x)v'^*(x)u(x)-v^*(x)p(x)u'(x)\right]_a^b.
```


- For $\mathcal{L}$ to be self-adjoint, the boundary terms must vanish:
```{math}
\left[ v^*(x) p(x) \frac{du}{dx} - p(x) \frac{d v^*(x)}{dx} u(x) \right]_a^b = 0.
```


- This condition can be satisfied by appropriate boundary conditions, such as Dirichlet or Neumann conditions.


## Proof of self-adjointness (continued)


- For $\mathcal{L}$ to be self-adjoint, the boundary terms must vanish:
```{math}
\left[ v^*(x) p(x) \frac{du}{dx} - p(x) \frac{d v^*(x)}{dx} u(x) \right]_a^b = 0.
```


- This condition can be satisfied by appropriate boundary conditions, such as Dirichlet or Neumann conditions. For example:

  - **Dirichlet Boundary Conditions**: $u(a) = u(b) = 0$ and $v(a) = v(b) = 0$.

  - **Neumann Boundary Conditions**: $\frac{du}{dx}\bigg|_{x=a} = \frac{du}{dx}\bigg|_{x=b} = 0$ and $\frac{dv}{dx}\bigg|_{x=a} = \frac{dv}{dx}\bigg|_{x=b} = 0$.

  - **Mixed Boundary Conditions**: A combination of Dirichlet and Neumann conditions at different endpoints.

- These boundary conditions ensure that the boundary terms vanish, thereby guaranteeing that $\mathcal{L}$ is self-adjoint.


## Implications of Self-Adjointness

The self-adjointness of the operator $\mathcal{L}$ has several important consequences:

- **Real Eigenvalues**: All eigenvalues $\lambda$ of a self-adjoint operator are real.

- **Orthogonal Eigenfunctions**: Eigenfunctions corresponding to distinct eigenvalues are orthogonal under the inner product.

- **Complete Set of Eigenfunctions**: The eigenfunctions form a complete basis for the function space under consideration, allowing any sufficiently smooth function to be expressed as a linear combination of the eigenfunctions.

Completeness requires the hypotheses of the relevant spectral theorem; it does
not follow from formal symmetry alone.


## Sturm–Liouville equations

A regular Sturm--Liouville eigenproblem has the form
```{math}
-\frac{d}{dx}\!\left[p(x)y'(x)\right]+q(x)y(x)
=\lambda\rho(x)y(x),
```
with real $p,q,\rho$, $p(x)>0$, and $\rho(x)>0$ on the interval, together with
self-adjoint boundary conditions.

- This can be written as:
```{math}
\mathcal{L}y = \lambda \rho(x)y,
```
 where
```{math}
\mathcal{L}y
\equiv-\frac{d}{dx}\!\left[p(x)y'(x)\right]+q(x)y(x).
```


## Transforming an equation into Sturm–Liouville form

Transforming an equation into Sturm--Liouville form

- Any second-order differential equation of the form
```{math}
p(x)\frac{d^2y}{dx^2} + r(x)\frac{dy}{dx} + q(x)y + \lambda \rho(x)y = 0
```
 can be converted into Sturm--Liouville form by multiplying through by an integrating factor:
```{math}
F(x) = \exp \left\{ \int ^x \frac{r(u) - p'(u)}{p(u)}\,du \right\}
```


- Then the original equation takes the Sturm--Liouville form:
```{math}
[F(x)p(x)y']' + F(x)q(x)y + \lambda F(x)ρ(x)y = 0
```


## Example: converting the ODE into Sturm-Liouville form


- Consider Hermite equation:
```{math}
y'' - 2xy' + 2\nu y = 0
```


- Here, $p = 1$, $r = -2x$, $q = 2\nu$

- The integrating factor is:
```{math}
F(x) = \exp \left\{ \int ^x \frac{r(u) - p'(u)}{p(u)} \right\} = \exp\left\{ \int ^x -2u du \right\} = \exp(-x^2)
```


- Thus, the Hermite equation becomes:
```{math}
e^{-x^2}y'' -2xe^{-x^2}y' +2 \nu e^{-x^2} y = (e^{-x^2}y')' +2\nu e^{-x^2}y = 0
```


- This equation is in Sturm-Liouville form
```{math}
(py')' + q(x)y + \lambda \rho(x)y = 0
```
 with $p(x) = e^{-x^2}$, $q(x) = 0$, $\rho(x)= e^{-x^2}$, $\lambda = 2\nu$


## The weight function


- The general SL equation:
```{math}
(py')' + q(x)y + \lambda \rho(x)y = 0
```


- Here, $\rho$ is the weight function.

- The weight function modifies the inner product defined over the space of functions considered in the problem.

- The inner product is then defined as:
```{math}
\langle v,u\rangle_\rho
=\int_a^b v^*(x)u(x)\rho(x)\,dx
```


- Orthogonality condition of the eigenfunctions corresponding to different eigenvalues:
```{math}
\int_a^b v^*(x) u(x)\rho(x) \, dx = 0 \quad \text{if} \quad \lambda_u \neq \lambda_v
```


- The weight may arise from coordinates, material coefficients, or the
  integrating factor used to put an equation into self-adjoint form.


## Interval and boundary conditions


- A set of conditions that ensures the SL operator $L$ is Hermitian over the range \[a,b\] is the vanishing of the boundary term:
```{math}
\left[ v^*(x) p(x) \frac{du}{dx} - p(x) \frac{d v^*(x)}{dx} u(x) \right]_a^b = 0
```


- If $p$ vanishes or an endpoint is infinite, the problem may be *singular*.
  Vanishing $p$ does not by itself guarantee self-adjointness for arbitrary
  functions; endpoint behavior and, when required, boundary conditions must
  still be analyzed.

- Additionally, the weight function should satisfy the following conditions:

  - For a regular problem, $\rho(x)$ is real and positive on the interval.

  - $\rho(x)$ must not change sign in the interval.


## Special functions


- In many physical and engineering problems, second-order linear differential equations with variable coefficients arise. These equations often have solutions that cannot be expressed in terms of elementary functions but are instead defined as **special functions**. We will briefly consider here Legendre, Bessel, Hermite, and Laguerre functions.


## Legendre's Equation and Legendre Polynomials


- Legendre's differential equation is:
```{math}
(1 - x^2) \frac{d^2 y}{dx^2} - 2 x \frac{dy}{dx} + n(n + 1) y = 0
```
 where $n$ is a non-negative integer.

- The solutions to this equation are the **Legendre polynomials** $P_n(x)$, defined on the interval $-1 \leq x \leq 1$.

- These polynomials are orthogonal with respect to the weight function $w(x) = 1$.

- Properties:

  - $P_n(x)$ is a polynomial of degree $n$.

  - Orthogonality:
```{math}
\int_{-1}^{1} P_n(x) P_m(x) \, dx = 0 \quad \text{for} \quad n \neq m
```


## Bessel's Equation and Bessel Functions


- Bessel's differential equation is:
```{math}
x^2 \frac{d^2 y}{dx^2} + x \frac{dy}{dx} + (x^2 - \nu^2) y = 0
```
 where $\nu$ is the order of the Bessel function.

- The solutions are:

  - **Bessel functions of the first kind**, $J_\nu(x)$.

  - **Bessel functions of the second kind**, $Y_\nu(x)$.

- Bessel functions appear in problems with cylindrical symmetry, e.g., heat conduction in a cylindrical rod or vibrations of a circular membrane.

- Properties:

  - Series representation for $J_\nu(x)$:
```{math}
J_\nu(x) = \sum_{k=0}^\infty \frac{(-1)^k}{k! \, \Gamma(k + \nu + 1)} \left( \frac{x}{2} \right)^{2k + \nu}
```


  - Orthogonality over specific intervals with weight $w(x) = x$:
```{math}
\int_0^1 J_\nu(\alpha_n x)J_\nu(\alpha_m x)x\,dx=0
\quad(n\ne m),
```
when $\alpha_n$ and $\alpha_m$ are distinct positive zeros of $J_\nu$.


## Hermite's Equation and Hermite Polynomials


- Hermite's differential equation is:
```{math}
\frac{d^2 y}{dx^2} - 2 x \frac{dy}{dx} + 2 n y = 0
```
 where $n$ is a non-negative integer.

- The solutions are the **Hermite polynomials** $H_n(x)$.

- Properties:

  - $H_n(x)$ is a polynomial of degree $n$.

  - Orthogonality with weight $w(x) = e^{-x^2}$:
```{math}
\int_{-\infty}^{\infty} H_n(x) H_m(x) e^{-x^2} dx = 0 \quad \text{for} \quad n \neq m
```


## Laguerre's Equation and Laguerre Polynomials


- Laguerre's differential equation is:
```{math}
x \frac{d^2 y}{dx^2} + (1 - x) \frac{dy}{dx} + n y = 0
```
 with $n$ being a non-negative integer.

- The solutions are the **Laguerre polynomials** $L_n(x)$, defined for $x \geq 0$.

- Properties:

  - $L_n(x)$ is a polynomial of degree $n$.

  - Orthogonality with weight $w(x) = e^{-x}$:
```{math}
\int_0^\infty L_n(x) L_m(x) e^{-x} dx = 0 \quad \text{for} \quad n \neq m
```


## Summary of special functions

## Homework for this lecture

### Existing final-project options

:::{include} ../assignments/final-project.md
:start-after: ## Quantum Particle in a Variable-Potential Well
:end-before: ## Boundary Conditions and Their Effect on Eigenvalues
:filename: false
:::

:::{include} ../assignments/final-project.md
:start-after: ## Boundary Conditions and Their Effect on Eigenvalues
:end-before: ## Comparing Numerical Methods for Sturm--Liouville Eigenvalue Problems
:filename: false
:::

:::{include} ../assignments/final-project.md
:start-after: ## Comparing Numerical Methods for Sturm--Liouville Eigenvalue Problems
:end-before: ## Aliasing and Sampling Theorem Investigation
:filename: false
:::

---

*Migration source: `06_ODE/SturmLouville.tex` from the archived Overleaf export.*
