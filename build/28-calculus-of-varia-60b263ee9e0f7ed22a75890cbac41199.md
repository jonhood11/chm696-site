# Calculus of Variations

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

By the end of this lecture, you should be able to:

- derive the Euler--Lagrange equation from a first variation;
- use cyclic-coordinate and Beltrami first integrals;
- distinguish stationarity from minimization; and
- connect variational mechanics with constraints and Noether symmetries.

## Variational calculus


- Variational calculus is a branch of mathematical analysis that deals with finding extrema (minimum or maximum values) of functionals, which are mappings from a set of functions to the real numbers. Unlike standard calculus, which focuses on functions of real variables, variational calculus focuses on functionals that depend on functions and their derivatives.

- A **functional** is a rule that assigns a real number to a function. A common form of a functional is:
```{math}
J[y] = \int_{a}^{b} L(x, y(x), y'(x)) \, dx
```
 where:

  - $L(x, y, y')$ is called the **Lagrangian** and is a given function of $x$, $y(x)$, and $y'(x)$.

  - $y(x)$ is the function to be determined, belonging to a suitable class of functions satisfying given boundary conditions.

  - $y'(x) = \frac{dy}{dx}$ is the derivative of $y(x)$ with respect to $x$.


## The Variational Problem

Functional:
```{math}
J[y] = \int_{a}^{b} L(x, y(x), y'(x)) \, dx
```


The fundamental problem is to find a function $y(x)$ that makes $J[y]$
stationary. Stationarity is a necessary condition for a smooth local extremum,
but a stationary function may instead be a maximum or saddle point. Writing
$y_\epsilon=y+\epsilon\eta$,


```{math}
\delta J[y;\eta]
=\left.\frac{d}{d\epsilon}J[y+\epsilon\eta]\right|_{\epsilon=0}
=0
```


## The Euler-Lagrange Equation

To find the function $y(x)$ that makes $J[y]$ stationary, we consider a small variation $\delta y(x)$ that vanishes at the endpoints ($\delta y(a) = \delta y(b) = 0$) and compute the first variation $\delta J$:


```{math}
\delta J = \int_{a}^{b} \left[ \frac{\partial L}{\partial y} \delta y + \frac{\partial L}{\partial y'} \delta y' \right] dx
```


Using integration by parts on the second term:


```{math}
\int_{a}^{b} \frac{\partial L}{\partial y'} \delta y' \, dx = \left[ \frac{\partial L}{\partial y'} \delta y \right]_a^b - \int_{a}^{b} \frac{d}{dx} \left( \frac{\partial L}{\partial y'} \right) \delta y \, dx
```


Since $\delta y(a) = \delta y(b) = 0$, the boundary term vanishes, and we have:


```{math}
\delta J = \int_{a}^{b} \left( \frac{\partial L}{\partial y} - \frac{d}{dx} \left( \frac{\partial L}{\partial y'} \right) \right) \delta y \, dx
```


For $\delta J = 0$ to hold for arbitrary $\delta y$, the integrand must be zero:


```{math}
\frac{\partial L}{\partial y} - \frac{d}{dx} \left( \frac{\partial L}{\partial y'} \right) = 0
```


## The Euler-Lagrange Equation (continued)

For the functional:
```{math}
J[y] = \int_{a}^{b} L(x, y(x), y'(x)) \, dx
```


This is the **Euler-Lagrange equation** is:
```{math}
\frac{\partial L}{\partial y} - \frac{d}{dx} \left( \frac{\partial L}{\partial y'} \right) = 0
```


The **Euler-Lagrange equation** provides a necessary condition for $y(x)$ to be an extremal function for $J[y]$.


## First Integrals of the Euler-Lagrange Equation


- If $L$ does not depend explicitly on $y$:
```{math}
\frac{\partial L}{\partial y'} = \text{constant}
```


- If $L$ does not depend explicitly on $x$, the Beltrami identity gives
```{math}
L-y'\frac{\partial L}{\partial y'}=\text{constant}.
```
This follows by differentiating the left-hand side and using the
Euler--Lagrange equation.


## The Shortest Path (Geodesic) Between Two Points


:::{note}
**Problem.** Find the function $y(x)$ that minimizes the length of a curve between two points $(x_1, y_1)$ and $(x_2, y_2)$.
:::

The length $S$ of a curve between $x_1$ and $x_2$ is:


```{math}
S[y] = \int_{x_1}^{x_2} \sqrt{1 + \left( y'(x) \right)^2} \, dx
```


Here, the Lagrangian is:


```{math}
L(y, y') = \sqrt{1 + \left( y' \right)^2}
```


Since $L$ does not explicitly depend on $y$, the Euler-Lagrange equation simplifies to:


```{math}
\frac{d}{dx} \left( \frac{\partial L}{\partial y'} \right) = 0
```


## The Shortest Path (Geodesic) Between Two Points (continued)


```{math}
\frac{d}{dx} \left( \frac{\partial L}{\partial y'} \right) = 0
```


Compute $\frac{\partial L}{\partial y'}$:


```{math}
\frac{\partial L}{\partial y'} = \frac{y'}{\sqrt{1 + \left( y' \right)^2}}
```


Set the derivative to zero:


```{math}
\frac{d}{dx} \left( \frac{y'}{\sqrt{1 + \left( y' \right)^2}} \right) = 0
```


This implies that $\frac{y'}{\sqrt{1 + \left( y' \right)^2}} = C$, where $C$ is a constant.


## The Shortest Path (Geodesic) Between Two Points (continued)

Solve for $y'$:


```{math}
y' = \frac{C}{\sqrt{1 - C^2}}
```


Since $y'$ is constant, the solution is a straight line:


```{math}
y(x) = mx + b
```


where $m$ and $b$ are determined by the boundary conditions.


## The Brachistochrone Problem


:::{note}
**Problem.** Determine the curve between two points along which a particle will descend under gravity in the shortest time.
:::

A system is at rest (initially); $y=0$ is a reference level for potential energy:
```{math}
\text{kinetic energy} =1/2 mv^2 = 1/2 m \left(\frac{ds}{dt}\right)^2
```

```{math}
\text{potential energy} = -mgy
```


The sum of the two energies is zero initially and therefore zero at any time since the total energy is constant when there is no friction. Hence
```{math}
1/2 mv^2 -mgy = 0 \rightarrow v=\sqrt{2gy}
```


Then the integral which we want to minimize is:


```{math}
I = \int dt = \int \frac{ds}{v} = \int \frac{ds}{\sqrt{2gy}} = \int_{x_1}^{x_2} \frac{\sqrt{1 + \left( y' \right)^2}}{\sqrt{2g y}} \, dx
```


## The Brachistochrone Problem (continued)

The Lagrangian is:


```{math}
L(y, y') = \frac{\sqrt{1 + \left( y' \right)^2}}{\sqrt{2g y}}
```


Because the Lagrangian has no explicit $x$ dependence, use the Beltrami
identity directly:
```{math}
L-y'\frac{\partial L}{\partial y'}
=\frac{1}{\sqrt{2gy}\sqrt{1+y'^2}}
=C.
```


## The Brachistochrone Problem (continued)

Equivalently, for a positive constant $2R$,
```{math}
2R=y(1+y'^2).
```


Thus
```{math}
\frac{dx}{dy}=\sqrt{\frac{y}{2R-y}}.
```


Setting $y=R(1-\cos\theta)$ and integrating gives the cycloid


```{math}
\begin{cases}
x(\theta) = R (\theta - \sin \theta) \\
y(\theta) = R (1 - \cos \theta)
\end{cases}
```


where $R$ is a constant related to the initial conditions.


## The Brachistochrone Problem (continued)


**What the original figure plots.** It shows cycloidal brachistochrone compared with alternative paths.

**What this is trying to convey.** The brachistochrone is a cycloidal arc, not the geometrically shortest straight line.

:::{figure} figures/28-calculus-of-variations/VC1.png
:alt: Cycloidal brachistochrone compared with alternative paths
:width: 80%

The brachistochrone is a cycloidal arc, not the geometrically shortest straight line.
:::

**Polished version.**

:::{figure} figures/28-calculus-of-variations/redraw-VC1.png
:alt: Polished version of cycloidal brachistochrone compared with alternative paths
:width: 80%

The polished version preserves cycloidal brachistochrone compared with alternative paths. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

**What the original figure plots.** It shows parametric construction of a cycloid.

**What this is trying to convey.** A point on a rolling circle traces the cycloid parameterized by theta.

:::{figure} figures/28-calculus-of-variations/VC2.png
:alt: Parametric construction of a cycloid
:width: 80%

A point on a rolling circle traces the cycloid parameterized by theta.
:::

**Polished version.**

:::{figure} figures/28-calculus-of-variations/redraw-VC2.png
:alt: Polished version of parametric construction of a cycloid
:width: 80%

The polished version preserves parametric construction of a cycloid. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

## Generalizations


The Euler-Lagrange equation can be extended to functionals involving higher-order derivatives or multiple functions. For example, for functionals of the form:


```{math}
J[y] = \int_{a}^{b} L(x, y, y', y'') \, dx
```


the Euler-Lagrange equation becomes:


```{math}
\frac{\partial L}{\partial y} - \frac{d}{dx} \left( \frac{\partial L}{\partial y'} \right) + \frac{d^2}{dx^2} \left( \frac{\partial L}{\partial y''} \right) = 0
```


## Variational Principle in Classical Mechanics

Classical mechanics can be formulated through:

- Newton's laws (forces),

- Lagrangian mechanics (energy),

- Variational principle: the physical path makes the action stationary.

The variational formulation is elegant and generalizes naturally to fields, quantum mechanics, and relativity.


## Action Functional

Define the **Lagrangian**
```{math}
L(q, \dot q, t) = T - V,
```
 where $T$ is kinetic and $V$ is potential energy.

Define the **action**:
```{math}
S[q] = \int_{t_1}^{t_2} L(q, \dot q, t) \, dt.
```


The true path taken by the system satisfies the **principle of stationary action**:
```{math}
\delta S = 0.
```


## Euler--Lagrange Equation

Apply a variation:
```{math}
q(t) \rightarrow q(t) + \epsilon \, \eta(t), \quad \eta(t_1)=\eta(t_2)=0.
```


Require:
```{math}
\frac{d}{d\epsilon} S[q + \epsilon \eta] \bigg|_{\epsilon=0} = 0.
```


This leads to the **Euler--Lagrange equation**:
```{math}
\frac{d}{dt} \left( \frac{\partial L}{\partial \dot q} \right)
- \frac{\partial L}{\partial q} = 0.
```


This equation replaces Newton's laws.


## Example: Free Particle

For a particle of mass $m$:
```{math}
L = T = \tfrac{1}{2} m \dot q^2.
```


Compute derivatives:
```{math}
\begin{aligned}
\frac{\partial L}{\partial q} &= 0, \\
\frac{\partial L}{\partial \dot q} &= m \dot q.
\end{aligned}
```


Then Euler--Lagrange gives:
```{math}
\frac{d}{dt}(m\dot q)=0 \; \Rightarrow \; m\ddot q = 0.
```


The particle moves with constant velocity.


## Example: Harmonic Oscillator

Lagrangian:
```{math}
L = \tfrac{1}{2} m \dot q^2 - \tfrac{1}{2} k q^2.
```


Then
```{math}
\begin{aligned}
\frac{\partial L}{\partial q} &= -k q, \\
\frac{\partial L}{\partial \dot q} &= m \dot q.
\end{aligned}
```


Euler--Lagrange equation:
```{math}
m \ddot q + k q = 0.
```


We recover the familiar oscillator equation.


## Generalized Coordinates

Lagrangian mechanics allows the use of any convenient coordinates:

- polar coordinates,

- angles in pendulums,

- coordinates adapted to constraints.

Example: simple pendulum (angle $\theta$):
```{math}
L = \tfrac{1}{2} m \ell^2 \dot \theta^2 - mg\ell(1 - \cos \theta).
```


Euler--Lagrange equation:
```{math}
\ddot\theta + \frac{g}{\ell} \sin \theta = 0.
```


## Advantages of the Variational Method


- Coordinates chosen freely.

- Constraints handled systematically.

- Natural extension to fields and quantum mechanics.

- Symmetries lead directly to conserved quantities (Noether's theorem).


## Noether's Theorem

**Noether's Theorem:** Every continuous symmetry of the action corresponds to a conserved quantity.

If the action is invariant under a transformation
```{math}
q \rightarrow q + \epsilon \, \delta q,
```
 then there exists a conserved current.


**What the original figure plots.** It shows correspondence between continuous symmetries and conserved quantities.

**What this is trying to convey.** Noether's theorem connects action symmetries with conservation laws.

:::{figure} figures/28-calculus-of-variations/Noether.png
:alt: Correspondence between continuous symmetries and conserved quantities
:width: 90%

Noether's theorem connects action symmetries with conservation laws.
:::

**Polished version.**

:::{figure} figures/28-calculus-of-variations/redraw-Noether.png
:alt: Polished version of correspondence between continuous symmetries and conserved quantities
:width: 90%

The polished version preserves correspondence between continuous symmetries and conserved quantities. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

## Noether's Theorem (continued)


- Time Translation Symmetry

  If $L$ has no explicit time dependence:
```{math}
\frac{\partial L}{\partial t} = 0,
```
 then the transformation $t \rightarrow t + \epsilon$ is a symmetry.

  **Conserved quantity: Energy**
```{math}
E = \dot q\frac{\partial L}{\partial \dot q} - L.
```


- Spatial Translation Symmetry
```{math}
\frac{\partial L}{\partial x} = 0,
```
 then the system is invariant under $x \rightarrow x + \epsilon$.

  **Conserved quantity: Linear Momentum**
```{math}
p = \frac{\partial L}{\partial \dot x}.
```


## Noether's Theorem (continued)


- Rotational Symmetry

  If the Lagrangian is invariant under rotations:

  **Conserved quantity: Angular Momentum**
```{math}
\mathbf{L} = \mathbf{r} \times m \dot{\mathbf{r}}.
```


## Constraints in Lagrangian Mechanics

Many mechanical systems have constraints, e.g.

- a particle constrained to move on a surface,

- fixed-length pendulum (constraint: $x^2 + y^2 = \ell^2$),

- rolling without slipping.

A constraint can be written as
```{math}
f(q_1, q_2, \dots, t) = 0.
```


To enforce the constraint, we introduce a **Lagrange multiplier** $\lambda(t)$.


## Lagrangian With a Constraint

Given an unconstrained Lagrangian $L(q, \dot q)$ and a constraint $f(q,t)=0$, the modified Lagrangian is
```{math}
L' = L + \lambda(t) f(q,t).
```


**Euler--Lagrange equations become**
```{math}
\frac{d}{dt} \left( \frac{\partial L'}{\partial \dot q_i} \right)
- \frac{\partial L'}{\partial q_i} = 0.
```


The variation with respect to $\lambda$ enforces the constraint:
```{math}
\frac{\partial L'}{\partial \lambda} = f(q,t) = 0.
```


## Example: Particle on a Circle

Constraint: particle moves on a circle of radius $R$:
```{math}
f(x,y) = x^2 + y^2 - R^2 = 0.
```


Kinetic energy:
```{math}
T = \tfrac{1}{2} m (\dot x^2 + \dot y^2).
```


Constrained Lagrangian:
```{math}
L' = \tfrac{1}{2} m (\dot x^2 + \dot y^2) + \lambda(x^2 + y^2 - R^2).
```


Variation yields equations of motion and the constraint force term (from $\lambda$).


## Interpretation of the Lagrange Multiplier

The multiplier determines the generalized constraint force through
$Q_i^{(c)}=\lambda\,\partial f/\partial q_i$ for this sign convention.

Example: for a bead constrained to a wire:

- The constraint force keeps the particle on the wire.

- It does no virtual work along allowed displacements.

- Its physical magnitude follows only after combining $\lambda$ with the
  gradient and normalization of the constraint.

Thus $\lambda$ is not arbitrary, but it is not itself a normalization-
independent force magnitude; rescaling $f$ rescales $\lambda$.

---

*Migration source: `07_different/variational_calculus.tex` from the archived Overleaf export.*
