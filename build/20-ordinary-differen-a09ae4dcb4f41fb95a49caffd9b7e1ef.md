# Ordinary Differential Equations

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Linear differential equations


- A **linear differential equation** is an equation involving an unknown function $y(x)$ and its derivatives, where each term acts as a linear operator. For example, a time derivative $\frac{d}{dt}$ or multiplying by a function $a(x)$ is a linear operator.

- The general form of an $n$-th order linear differential equation is:
```{math}
a_0(x) y + a_1(x) y' + a_2(x) y'' + a_3(x) y''' + \dots + a_n(x) y^{(n)} = b(x)
```


- $y$ is the unknown function of $x$

- $y', y'', y^{(n)}$ denote the first, second, and $n$-th derivatives of $y$ with respect to $x$.

- The coefficients $a_0(x), a_1(x), \dots, a_n(x)$ may either be constants or functions of $x$.

- The term $b(x)$ is called the *inhomogeneous term*, but in physical systems, this is typically referred to as the *drive* or *source term*. For example, in a driven damped harmonic oscillator, this term represents the external driving force acting on the system.


## The order of the differential equation


- The order of the differential equation refers to the highest derivative present in the equation.

- For an $n$-th order linear differential equation, the general solution will contain $n$ independent constants, which correspond to the number of initial conditions required to uniquely specify a solution.

- These constants are determined by applying initial or boundary conditions relevant to the physical problem being modeled.

- **Example:** A second-order harmonic oscillator has the general solution $y(x) = A e^{ikx} + B e^{-ikx}$, which contains two constants $A$ and $B$, determined by the initial conditions.

- **Example:** A first-order exponential decay equation, $y(x) = A e^{-\kappa x}$, has one constant, $A$, determined by a single initial condition.


## Homogeneous and inhomogeneous equations


- When $b(x) = 0$, the equation is termed *homogeneous*; otherwise, it is *inhomogeneous*.

- In a **homogeneous** linear differential equation, the drive term is set to zero:
```{math}
a_0(x) y + a_1(x) y' + a_2(x) y'' + \dots + a_n(x) y^{(n)} = 0
```


- The solution to a homogeneous equation is particularly important because it forms the foundation for solving inhomogeneous equations.

- Solutions to homogeneous equations are called *homogeneous solutions*, denoted as $y_h(x)$.

- An **inhomogeneous** equation includes a non-zero drive term $b(x)$, which represents external forces or inputs to the system.

- A general solution of the inhomogeneous equation, $y(x)$, can be written as the sum of the homogeneous solution and a *particular solution*, $y_p(x)$, that satisfies the inhomogeneous equation:
```{math}
y(x) = y_h(x) + y_p(x)
```


## Linear Dependence


- A set of functions $y_1(x), y_2(x), \dots, y_n(x)$ is said to be *linearly independent* if no function in the set can be written as a linear combination of the others.

- In other words, the only solution to the equation


```{math}
c_1 y_1(x) + c_2 y_2(x) + \dots + c_n y_n(x) = 0
```


  for all $x$ is $c_1 = c_2 = \dots = c_n = 0$.

- If the functions are not linearly independent, they are called *linearly dependent*.

- **Example of linearly independent functions:** $\sin(x)$ and $\cos(x)$. The only solution to $c_1 \sin(x) + c_2 \cos(x) = 0$ for all $x$ is $c_1 = c_2 = 0$.

- **Example of linearly dependent functions:** $e^x$ and $2e^x$. In this case, $2e^x$ can be written as a constant multiple of $e^x$, so the two functions are linearly dependent.


## Linear Dependence (continued)

**Question:** Which of the following sets of functions are linearly dependent or linearly independent?

1.  $\{e^x, e^{-x}\}$

2.  $\{x^2, x, 1\}$

3.  $\{e^x, 2e^x, e^{2x}\}$

4.  $\{\sin(x), \cos(x), \sin(2x)\}$

5.  $\{x, x^2, x^3\}$


## The Wronskian


- The Wronskian of two functions $y_1(x)$ and $y_2(x)$ is defined as:
```{math}
W(y_1, y_2) = y_1y_2' - y_2y_1'
```


- More generally, for $n$ functions, the Wronskian is the determinant:
```{math}
W(y_1, \ldots, y_n) = \begin{vmatrix}
  y_1 & y_2 & \cdots & y_n \\
  y_1' & y_2' & \cdots & y_n' \\
  \vdots & \vdots & \ddots & \vdots \\
  y_1^{(n-1)} & y_2^{(n-1)} & \cdots & y_n^{(n-1)}
  \end{vmatrix}
```


- The Wronskian provides a measure of linear independence of functions. If $W(y_1, y_2) = 0$ for all $x$, then $y_1$ and $y_2$ are linearly dependent, meaning one is a scalar multiple of the other.

- Two functions $f_1(x)$ and $f_2(x)$ are linearly dependent if there exists a constant $c$ such that $f_1(x) = c \cdot f_2(x)$ for all $x$. Consequently, their derivatives are related by $f_1'(x) = c \cdot f_2'(x)$. The Wronskian captures both these relationships in a single expression.


## The Wronskian (continued)


:::{admonition} Example
Consider $f_1(x) = x$ and $f_2(x) = x^2$. Their Wronskian is:
```{math}
W(f_1, f_2) = \begin{vmatrix} x & x^2 \\ 1 & 2x \end{vmatrix} = 2x^2 - x^2 = x^2
```
 Since this is non-zero for most $x$, the functions are linearly independent.
:::


## Linear First-Order Ordinary Differential Equations


- The most general **first-order linear ODE**:
```{math}
\frac{dy}{dx} + P(x)y = Q(x)
```


- Here, $y$ is the unknown function, $P(x)$ and $Q(x)$ are functions of $x$ but not of $y$. $Q(x)$ is the drive term.

- Note that in general we could also multiply $y'$ by a new function of $x$, but we could divide through by that function and absorb it into $P(x)$ and $Q(x)$.

- We will be looking for a solution in the form of
```{math}
y(x) = C y_h(x) + y_p(x)
```


  - $C$ is an arbitrary constant determined by the initial conditions

  - $y_h(x)$ is the homogeneous solution that does not depend on the drive

  - $y_p(x)$ is the particular solution to the inhomogeneous equation with drive


## Homogeneous Solution


- First, let's solve the homogeneous equation. In the case where $Q(x) = 0$, the equation simplifies to:
```{math}
\frac{dy}{dx} = -P(x) y
```


- We can solve this by *separation of variables*:
```{math}
\frac{dy}{y} = -P(x) dx
```


- Integrating both sides gives:
```{math}
\ln y = - \int P(x) \, dx + C
```


- Exponentiating both sides yields the general solution:
```{math}
y(x) = A e^{-\int P(x)dx}
```
 where $A = e^C$ is an arbitrary constant.


## Homogeneous Solution (continued)


:::{admonition} Example
Consider the simple case of exponential decay where $P(x) = \kappa$, where $\kappa > 0$. Also assume an initial condition $y(0) = 1$. The equation becomes:
```{math}
\frac{dy}{dx} + \kappa y = 0
```
 Using the general solution for the homogeneous case, we have:
```{math}
y(x) = A e^{-\kappa x}
```
 From the initial condition, we can solve for $A$. $y(0) = A = 1$.
:::


## Inhomogeneous Equation


- Now, let's solve the inhomogeneous equation where $Q(x) \neq 0$:
```{math}
\frac{dy}{dx} + P(x)y = Q(x)
```


- We will use an *integrating factor* $I(x)$ to rewrite the equation as a total derivative:
```{math}
\frac{d}{dx} \left[ I(x) y(x) \right] = I(x) Q(x)
```


- We can solve this new equation just by integrating both sides. First, we need to find $I(x)$ such that this is true.

- To find $I(x)$, we expand the left-hand side using the product rule:
```{math}
\frac{d}{dx} \left[ I(x) y(x) \right] = I(x) \frac{dy}{dx} + y(x) \frac{dI}{dx}
```


- Substitute this into the original equation:
```{math}
I(x) \frac{dy}{dx} + y(x) \frac{dI}{dx} = I(x) Q(x)
```


## Inhomogeneous Equation (continued)


- Divide by $I(x)$ to get:
```{math}
\frac{dy}{dx} + y(x) \frac{1}{I(x)} \frac{dI}{dx} = Q(x)
```


- This becomes the original ODE as long as:
```{math}
\frac{1}{I}  \frac{dI}{dx} = P(x)
```


- which simplifies to:
```{math}
\frac{dI}{I} = P(x) \, dx
```


- Integrating both sides gives:
```{math}
I(x) =  e^{\int P(x) \, dx}
```


- Note that we can skip a constant here because $I(x)$ is contained in each term of the new ODE, so we can just set $B = 1$.


## Inhomogeneous Equation (continued)


- Now that we have the integrating factor $I(x)$, we rewrite the general 1st order inhomogeneous ODE in terms of the total derivative:
```{math}
\frac{d}{dx} \left[ I(x) y(x) \right] = I(x) Q(x)
```


- Integrating both sides with respect to $x$ gives:
```{math}
I(x) y(x) = \int I(x) Q(x) \, dx + C
```


- Solving for $y(x)$:
```{math}
y(x) = \frac{1}{I(x)} \left( \int I(x) Q(x) \, dx + C \right)
```


- Substituting $I(x) = e^{\int P(x) \, dx}$ into the equation:
```{math}
y(x) = e^{-\int P(x) dx} \left( \int e^{\int P(x) dx} Q(x) \, dx + C \right)
```


## Inhomogeneous Equation (continued)

The general solution to the inhomogeneous ODE can be broken down into two components:

- **Solution to the homogeneous equation**:
```{math}
y_h(x) = C e^{-\int p(x) dx}
```
 This is the solution to the homogeneous equation. It contains a constant that is determined by the boundary conditions. It does not depend on the drive $Q(x)$.

- **Particular solution (no constant)**:
```{math}
y_p(x) = e^{-\int Q(x) dx} \int e^{\int P(x) dx} Q(x) dx
```
 This is the particular solution to the inhomogeneous equation. It depends on the drive $Q(x)$ and does not contains a constant.


## Example


:::{admonition} Example
Let's apply this method to the following equation:
```{math}
y' + y = e^x
```
 Here, $P(x) = 1$ and $Q(x) = e^x$. First, we compute the integrating factor:
```{math}
I(x) = e^{\int 1 dx} = e^x
```
 Multiplying through by the integrating factor:
```{math}
e^x y' + e^x y = e^{2x}
```

```{math}
\Rightarrow \frac{d}{dx} \left( e^x y \right) = e^{2x}
```

:::


## Example: cont


:::{admonition} Example

```{math}
\frac{d}{dx} \left( e^x y \right) = e^{2x}
```


Integrating both sides:
```{math}
e^x y = \int e^{2x} dx = \frac{1}{2} e^{2x} + C
```
 Finally, solving for $y(x)$:
```{math}
y(x) = e^{-x} \left( \frac{1}{2} e^{2x} + C \right) = \frac{1}{2} e^x + C e^{-x}
```

:::

---

*Migration source: `06_ODE/ode1.tex` from the archived Overleaf export.*
