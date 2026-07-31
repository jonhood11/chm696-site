# Partial Differential Equations

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## General Form of a Second-Order PDE


- A general second-order linear PDE in two variables $x$ and $t$ can be written as: 
```{math}
A \frac{\partial^2 u}{\partial x^2} + B \frac{\partial^2 u}{\partial x \partial t} + C \frac{\partial^2 u}{\partial t^2} + \text{lower-order terms} = 0,
```
 where $A$, $B$, and $C$ are coefficients that may depend on $x$, $t$, or $u$.

- PDEs can be classified as **elliptic**, **hyperbolic**, or **parabolic** based on the discriminant of their highest-order terms: 
```{math}
\Delta = B^2 - 4AC.
```


- The PDE is classified as:

  - **Elliptic:** $\Delta < 0$ ($B^2 - 4AC < 0$),

  - **Hyperbolic:** $\Delta > 0$ ($B^2 - 4AC > 0$),

  - **Parabolic:** $\Delta = 0$ ($B^2 - 4AC = 0$).

- This classification influences the behavior of solutions and the types of physical phenomena the PDE describes.


## Elliptic PDEs

**Definition:** Elliptic PDEs are characterized by $\Delta < 0$. They describe static or equilibrium states without inherent time evolution.

**Canonical Example:** Laplace's equation: 
```{math}
\nabla^2 u = 0 \quad \text{or} \quad \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0.
```


**Properties:**

- **Nature of Solutions:** Smooth and globally influenced; the solution at any point depends on the boundary conditions over the entire domain.

- **Physical Interpretation:** Models static or steady-state phenomena such as:

  - Electrostatics ($\nabla^2 \phi = 0$),

  - Heat conduction in equilibrium,

  - Fluid flow in incompressible fluids.

- **Boundary Conditions:** Elliptic PDEs require boundary conditions (e.g., Dirichlet or Neumann conditions).


## Hyperbolic PDEs

**Definition:** Hyperbolic PDEs are characterized by $\Delta > 0$. They describe systems with wave-like or propagative behavior.

**Canonical Example:** The wave equation: 
```{math}
\frac{\partial^2 u}{\partial t^2} - c^2 \frac{\partial^2 u}{\partial x^2} = 0.
```


**Properties:**

- **Nature of Solutions:** Governed by causality; the solution at a given point depends only on the initial and boundary data within its causal domain (e.g., the light cone in relativistic systems).

- **Physical Interpretation:** Models dynamic phenomena involving wave propagation, such as:

  - Vibrations of a string or membrane,

  - Electromagnetic waves,

  - Sound waves in a medium.

- **Initial and Boundary Conditions:** Hyperbolic PDEs require initial conditions (e.g., field values and their time derivatives at $t = 0$) as well as boundary conditions.


## Parabolic PDEs

A PDE is classified as parabolic if the coefficients A,B, and C satisfy the condition $B^2=4AC$

**Canonical Example:** The diffusion equation (or heat equation): 
```{math}
\kappa \frac{\partial^2 u}{\partial x^2} =\frac{\partial u}{\partial t}
```


**Properties:**

- **Nature of Solutions:**

  - Solutions become infinitely smooth instantly, even if the initial data is rough. This comes from the diffusion kernel (Gaussian), which convolves with the initial condition.

  - The maximum is controlled by initial and boundary values, which results in uniqueness of solutions.

  - Solutions depend continuously on initial data.

  - Unlike hyperbolic PDEs, parabolic PDEs have no finite wave speed.

- **Physical Interpretation:** Propagation of heat, diffusion, chemical reactions

- **Initial and Boundary Conditions:** Parabolic PDEs require one initial condition $u(x,0)$ and boundary conditions (Dirichlet, Neumann).


## Definition of $\Delta$

The **Laplacian** (also called the Laplace operator) of a sufficiently smooth function $u : \mathbb{R}^n \to \mathbb{R}$ is defined as 
```{math}
\Delta u = \sum_{i=1}^n \frac{\partial^2 u}{\partial x_i^2}.
```


**Special cases:**

- **1D:** $\Delta u = u_{xx}$

- **2D:** $\Delta u = u_{xx} + u_{yy}$

- **3D:** $\Delta u = u_{xx} + u_{yy} + u_{zz}$


## Wave Equation


```{math}
u_{tt} = c^2 \Delta u
```


**Type:** Hyperbolic

**Models:**

- Vibrating strings and membranes

- Sound waves

- Electromagnetic waves (in simplified form)

**Properties:**

- Finite propagation speed

- Energy conserved

- Well-posed with initial position and velocity


## Wave Equation (continued)


```{math}
u_{tt} = c^2 u_{xx}
```


**General 1D Solution (d'Alembert):** 
```{math}
u(x,t) = f(x - ct) + g(x + ct)
```


**Fourier Series Solution ($0 < x < L$):** 
```{math}
u(x,t) = \sum_{n=1}^{\infty}
\left( A_n \cos(c k_n t) + B_n \sin(c k_n t) \right)
\sin(k_n x)
```
 
```{math}
k_n = \frac{n\pi}{L}
```


## Diffusion (Heat) Equation


```{math}
u_t = \kappa\, \Delta u
```


**Type:** Parabolic

**Models:**

- Heat conduction

- Diffusion of particles or chemicals

- Brownian motion via probability density evolution

**Properties:**

- Infinite propagation speed (instant smoothing)

- Maximum principle applies

- Solutions become smoother for $t>0$

**Fundamental Solution (Heat Kernel):** 
```{math}
u(x,t) = \frac{1}{\sqrt{4\pi D t}}
\exp\!\left(-\frac{x^2}{4Dt}\right)
```


## Laplace Equation


```{math}
\Delta u = 0
```


**Type:** Elliptic (steady-state)

**Models:**

- Electrostatics (potential fields)

- Steady heat flow

- Incompressible fluid potential flow

**Properties:**

- Solutions are harmonic and smooth

- Maximum principle: extrema on boundary

- No time evolution

**Radially Symmetric 3D Solution:** 
```{math}
u(r) = A + \frac{B}{r}
```


## Poisson Equation


```{math}
\Delta u = f(x)
```


**Type:** Elliptic

**Models:**

- Potentials generated by sources

- Electrostatics with charge density

- Gravitational potential in Newtonian gravity

**Properties:**

- Requires boundary conditions

- Solutions smoother than $f$

- Green's function representation

**Function $f$ is called the source density**

**Green's Function Solution (3D):** 
```{math}
u(\mathbf{x}) =
\frac{1}{4\pi} \int_{\mathbb{R}^3}
\frac{f(\mathbf{x}')}{\|\mathbf{x} - \mathbf{x}'\|}
\, d^3x'
```


## Poisson's Equation in Electrostatics


**Electric potential $\phi(\mathbf{r})$ satisfies:** 
```{math}
\Delta \phi(\mathbf{r}) = -\,\frac{\rho(\mathbf{r})}{\varepsilon_0}
```


**Where:**

- $\rho(\mathbf{r})$ = charge density

- $\varepsilon_0$ = vacuum permittivity

**Example: Point charge $q$ at origin:** 
```{math}
\rho(\mathbf{r}) = q\, \delta(\mathbf{r})
```


**Solution: Coulomb potential** 
```{math}
\phi(\mathbf{r}) = \frac{q}{4\pi \varepsilon_0\, r}, \quad r = \|\mathbf{r}\|
```


## Poisson's Equation in Newtonian Gravity


**Gravitational potential $\Phi(\mathbf{r})$ satisfies:** 
```{math}
\Delta \Phi(\mathbf{r}) = 4\pi G\, \rho(\mathbf{r})
```


**Where:**

- $\rho(\mathbf{r})$ = mass density

- $G$ = gravitational constant

**Example: Point mass $M$ at origin:** 
```{math}
\rho(\mathbf{r}) = M\, \delta(\mathbf{r})
```


**Solution: Newtonian potential** 
```{math}
\Phi(\mathbf{r}) = -\frac{GM}{r}, \quad r = \|\mathbf{r}\|
```


## Schrödinger Equation


```{math}
i\hbar \psi_t = -\frac{\hbar^2}{2m} \Delta \psi + V(x)\psi
```


**Type:** Dispersive (not elliptic/parabolic/hyperbolic in the classical sense)

**Models:**

- Quantum mechanical time evolution of wavefunctions

**Properties:**

- Norm (probability) conserved: $\|\psi\|_{L^2}$ constant in time

- Solutions disperse/spread over time

- Linear unitary evolution


## Schrödinger Equation (continued)


```{math}
i\hbar \psi_t
= -\frac{\hbar^2}{2m} \psi_{xx} + V(x)u
```


**Free-Particle Solution:** 
```{math}
\psi(x,t) = \frac{1}{\sqrt{2\pi}}
\int_{-\infty}^{\infty}
\hat{\psi}(k,0)\,
e^{i\left(kx - \frac{\hbar k^2}{2m} t\right)} \, dk
```


**Energy Eigenfunction Expansion:** 
```{math}
\psi(x,t) = \sum_n c_n\, \psi_n(x)\, e^{-i E_n t/\hbar}
```


## Separation of variables

Let's consider the three-dimensional wave equation: 
```{math}
u_{tt} = c^2 \Delta u, \qquad \Delta u = u_{xx} + u_{yy} + u_{zz}
```


**Domain:** Rectangular box $0<x<L_x$, $0<y<L_y$, $0<z<L_z$

**Boundary conditions:** Dirichlet 
```{math}
u(0,y,z,t) = u(L_x,y,z,t) = 0, \quad \text{etc. for } y,z
```


**Initial conditions:** 
```{math}
u(x,y,z,0) = f(x,y,z), \quad u_t(x,y,z,0) = g(x,y,z)
```


## Step 1: Assume Separable Solution

Assume a solution of the form: 
```{math}
u(x,y,z,t) = X(x)\, Y(y)\, Z(z)\, T(t)
```


Substitute into the wave equation: 
```{math}
X Y Z\, T'' = c^2 \left( X'' Y Z + X Y'' Z + X Y Z'' \right) T
```


Divide both sides by $c^2XYZT$: 
```{math}
\frac{T''(t)}{c^2 T(t)} =
\frac{X''(x)}{X(x)} + \frac{Y''(y)}{Y(y)} + \frac{Z''(z)}{Z(z)}
```


Each side depends on different variables $\implies$ must equal a constant: 
```{math}
\frac{X''}{X} + \frac{Y''}{Y} + \frac{Z''}{Z} = -\lambda^2, \quad T'' + c^2 \lambda^2 T = 0
```


## Step 2: Solve Spatial Equations

Split spatial part into three 1D problems: 
```{math}
X'' + k_x^2 X = 0, \quad Y'' + k_y^2 Y = 0, \quad Z'' + k_z^2 Z = 0
```


Boundary conditions: 
```{math}
X(0)=X(L_x)=0 \implies X_n(x) = \sin\left(\frac{n\pi x}{L_x}\right),\; n=1,2,...
```


Similarly: 
```{math}
Y_m(y) = \sin\left(\frac{m \pi y}{L_y}\right),\quad
Z_p(z) = \sin\left(\frac{p \pi z}{L_z}\right)
```


Eigenvalues: 
```{math}
k_x = \frac{n\pi}{L_x},\quad k_y = \frac{m\pi}{L_y},\quad k_z = \frac{p\pi}{L_z}
```


```{math}
\lambda^2 = k_x^2 + k_y^2 + k_z^2
```


## Step 3: Solve Temporal Equation

Temporal equation: 
```{math}
T'' + c^2 \lambda^2 T = 0
```


General solution: 
```{math}
T_{nmp}(t) = A_{nmp} \cos(c \lambda t) + B_{nmp} \sin(c \lambda t)
```


$\lambda^2 = k_x^2 + k_y^2 + k_z^2$


## Step 4: Construct Full Solution

Combine spatial and temporal parts: 
```{math}
u(x,y,z,t) = \sum_{n,m,p=1}^{\infty}
\sin\Big(\frac{n\pi x}{L_x}\Big)
\sin\Big(\frac{m\pi y}{L_y}\Big)
\sin\Big(\frac{p\pi z}{L_z}\Big)
```
 
```{math}
\times\Big[ A_{nmp} \cos(c \lambda_{nmp} t) + B_{nmp} \sin(c \lambda_{nmp} t) \Big]
```


```{math}
\lambda_{nmp} = \sqrt{\left(\frac{n\pi}{L_x}\right)^2 + \left(\frac{m\pi}{L_y}\right)^2 + \left(\frac{p\pi}{L_z}\right)^2}
```


Constants $A_{nmp}, B_{nmp}$ are determined from initial conditions via Fourier series.


## Summary


- Assumed separable solution: $u(x,y,z,t) = X Y Z T$

- Reduced PDE to ODEs in $x$, $y$, $z$, $t$

- Applied boundary conditions to find spatial eigenfunctions

- Solved temporal ODE to get oscillatory time dependence

- Superposed all modes using Fourier series to satisfy initial conditions

**Key Takeaway:** Separation of variables converts a multi-dimensional PDE into simpler 1D ODEs, which can be solved systematically.


## The Superposition Principle

#### The Superposition Principle

The Superposition Principle enables the construction of the overall solution:

- **Separation of Variables generates** independent ODEs coupled by [separation constants]{.alert} $\lambda$.

- This yields a family of particular solutions,$u_{\lambda_i} (x,y)$.

- **Multiple Solutions**: If individual solutions $u_1, u_2, \dots$ satisfy the linear PDE, then any weighted sum of these solutions also satisfies the PDE.

- **General Solution**: The general solution $u(x,y)$ is formed by the linear superposition (weighted sum) of all allowed solutions: 
```{math}
u(x, y) = \sum_i a_i X_{\lambda_i}(x)Y_{\lambda_i}(y)
```


- **Role of Boundary Conditions**: The linear superposition is necessary because it creates a flexible general solution that can be matched to the specific boundary conditions imposed by the physical problem.


## Example: Laplace's Equation (Steady-State Temperature)

Consider a semi-infinite rectangular plate whose edges are kept at fixed temperature: 
```{math}
\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0 \quad
```
 **Homogeneous Boundary Conditions (BCs):**

- $u(x,0)=0$ (Bottom edge)

- $u(x,b)=0$ (Top edge)

- $u(\infty,y)=0$ (Far edge)


:::{note} Original-slide figure pending review
The original lecture refers to `pse1.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Example: Laplace's Equation (Steady-State Temperature) (continued)


```{math}
\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0 \quad
```
 **Separated Solution and Eigenvalues:**

- Applying the BCs leads to solutions of the form $u(x,y)\propto \exp(-\lambda x)\sin(\lambda y)$.

- The constraints imposed by the geometry and BCs quantize the separation constant $\lambda$ to discrete values: 
```{math}
\lambda_n = \frac{n\pi}{b}, \quad n = 1, 2, 3, \dots
```


## Constructing the Fourier Series Solution

Since $u$ must satisfy the linear PDE for all allowed values of $\lambda_n$, the general solution is the superposition of these elemental solutions: **Superposed Solution:** 
```{math}
u(x, y) = \sum_{n=1}^{\infty} B_n \exp\left(-\frac{n\pi x}{b}\right) \sin\left(\frac{n\pi y}{b}\right)
```


**Matching the Inhomogeneous BC:** The arbitrary coefficients $B_n$ are now determined by the final boundary condition, $u(0,y)=f(y)$: 
```{math}
f(y) = \sum_{n=1}^{\infty} B_n \sin\left(\frac{n\pi y}{b}\right)
```


- This expression is a [Fourier sine series]{.alert}.

- The coefficients $B_n$ are found using the orthogonality of the sine functions (a fundamental principle of [eigenfunction expansion]{.alert}).


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


## Laplace Transform: Definition

The **Laplace transform** of a function $f(t)$ is defined as: 
```{math}
\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st} f(t) \, dt
```


**Properties:**

- Linearity: $\mathcal{L}\{a f + b g\} = a F + b G$

- Derivative in time: $\mathcal{L}\{f'(t)\} = s F(s) - f(0)$

- Reduces differential equations in $t$ to algebraic equations in $s$


## Step 1: PDE Example

Consider the 1D heat equation: 
```{math}
u_t = \alpha^2 u_{xx}, \qquad 0 < x < L, \; t>0
```


**Initial condition:** $u(x,0) = f(x)$

**Boundary conditions:** $u(0,t) = u(L,t) = 0$


## Step 2: Apply Laplace Transform in Time

Take Laplace transform w.r.t $t$: 
```{math}
\mathcal{L}\{u_t\} = s \bar{u}(x,s) - u(x,0)
```


$\Rightarrow$ PDE becomes an ODE in $x$: 
```{math}
s \bar{u}(x,s) - f(x) = \alpha^2 \bar{u}_{xx}(x,s)
```


```{math}
\bar{u}_{xx} - \frac{s}{\alpha^2} \bar{u} = - \frac{f(x)}{\alpha^2}
```


**Boundary conditions in Laplace domain:** $\bar{u}(0,s) = \bar{u}(L,s) = 0$


## Step 3: Solve the Spatial ODE

The transformed equation is a linear second-order ODE: 
```{math}
\bar{u}_{xx} - \frac{s}{\alpha^2} \bar{u} = - \frac{f(x)}{\alpha^2}
```


**Homogeneous solution:** 
```{math}
\bar{u}_h(x,s) = A \sinh\left(\sqrt{\frac{s}{\alpha^2}}\, x \right) + B \sinh\left(\sqrt{\frac{s}{\alpha^2}} (L-x)\right)
```


**Particular solution:** depends on $f(x)$

**Apply boundary conditions** to determine constants $A,B$


## Obtaining the Particular Solution Using Eigenfunction Expansion


**Inhomogeneous ODE in Laplace domain:** 
```{math}
\bar{u}_{xx} - \frac{s}{\alpha^2} \bar{u} = -\frac{f(x)}{\alpha^2},
\quad \bar{u}(0,s) = \bar{u}(L,s) = 0
```


**1. Expand the initial condition in eigenfunctions (sine series):** 
```{math}
f(x) = \sum_{n=1}^{\infty} F_n \sin\left(\frac{n \pi x}{L}\right),
\quad F_n = \frac{2}{L} \int_0^L f(x) \sin\left(\frac{n \pi x}{L}\right) dx
```


**2. Look for a particular solution in the same basis:** 
```{math}
\bar{u}_p(x,s) = \sum_{n=1}^{\infty} \bar{U}_n(s) \sin\left(\frac{n \pi x}{L}\right)
```


**3. Substitute into the ODE and solve algebraically for each mode:** 
```{math}
\bar{U}_n(s) = \frac{F_n}{s + \alpha^2 (n \pi / L)^2}
```


**4. Inverse Laplace transform:** $u(x,t) = \sum_{n=1}^{\infty} F_n \sin\left(\frac{n \pi x}{L}\right) e^{-\alpha^2 (n \pi / L)^2 t}$


## Step 4: Inverse Laplace Transform

Once $\bar{u}(x,s)$ is determined, the solution in time is obtained by inverse Laplace transform: 
```{math}
u(x,t) = \mathcal{L}^{-1}\{\bar{u}(x,s)\} = \frac{1}{2\pi i} \int_{\gamma - i\infty}^{\gamma + i\infty} e^{st} \bar{u}(x,s)\, ds
```


**Example for simple initial condition:** $f(x) = \sin\left(\frac{n\pi x}{L}\right)$ 
```{math}
\bar{u}(x,s) = \frac{\sin\left(\frac{n \pi x}{L}\right)}{s + \alpha^2 (n\pi/L)^2} \quad \Rightarrow \quad
u(x,t) = \sin\left(\frac{n \pi x}{L}\right) e^{-\alpha^2 (n\pi/L)^2 t}
```


## Summary of the Method


1.  Take Laplace transform in time (or other variable) to reduce PDE to ODE.

2.  Solve the resulting ODE in space (or other variable) with boundary conditions.

3.  Apply the inverse Laplace transform to return to the original variable.

4.  Superpose solutions if initial/boundary conditions are decomposed in eigenfunctions.

**Key Advantage:** Converts time derivatives into algebraic terms, simplifying the solution of linear PDEs.

---

*Migration source: `06_ODE/PSE1.tex` from the archived Overleaf export.*
