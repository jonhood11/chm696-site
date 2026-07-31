# Optimization

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Optimization problems


- Derivative-free methods

  - Nelder--Mead (Simplex method): Works with a set of points forming a simplex, updates by reflection/expansion/contraction. Good for low-dimensional problems.

  - Powell's Method: Searches along directions iteratively, doesn't require derivatives.

  - Pattern Search / Coordinate Descent: Updates one coordinate or direction at a time.

- Gradient-Based Methods

  - Gradient Descent: Iteratively updates $x_{k+1} = x_k - \alpha \nabla f(x_k)$ where $\alpha$ is the step size (learning rate).

  - Newton's Method: Uses the Hessian (second derivative matrix) for faster (quadratic) convergence: $x_{k+1} = x_k - H^{-1}(x_k) \nabla f(x_k)$. More expensive (needs Hessian), but very powerful.

  - Quasi-Newton Methods (e.g., BFGS, L-BFGS): Approximate the Hessian cheaply; widely used in optimization libraries.

  - Conjugate Gradient (CG): Efficient for large-scale quadratic problems; uses gradient info but builds conjugate directions instead of computing Hessians.


## Optimization problems (continued)


- Constrained Optimization: for problems with constraints $g(x) \le 0, \; h(x) = 0.$

  - Lagrange Multipliers: Convert constrained problem to unconstrained one with multipliers.

  - Penalty and Barrier Methods: Incorporate constraints into the objective via extra terms.

- Global Optimization: for functions with many local minima.

  - Simulated Annealing: Inspired by physics annealing, uses probabilistic jumps to escape local minima.

  - Genetic Algorithms / Evolutionary Strategies: Population-based search mimicking evolution.

  - Particle Swarm Optimization: Inspired by swarm intelligence (birds, fish).

  - Bayesian Optimization: Builds a probabilistic model (e.g., Gaussian processes) to guide exploration.

- Specialized Methods

  - Linear Programming: Simplex method, Interior-point methods.

  - Stochastic Gradient Descent (SGD): Very popular in machine learning (updates on minibatches of data).


## Linear system of equations as optimization problem


The system $A \mathbf{x} = \mathbf{b}$ can be recast as a quadratic optimization problem. Define:
```{math}
f(\mathbf{x}) = \frac{1}{2} \mathbf{x}^T A \mathbf{x} - \mathbf{x}^T \mathbf{b}.
```


Key properties of $f(\mathbf{x})$:

- It is a convex quadratic function (if $A$ is symmetric and positive definite).

- The gradient of $f(\mathbf{x})$ is:
```{math}
\nabla f(\mathbf{x}) = A \mathbf{x} - \mathbf{b}.
```


- The minimum of $f(\mathbf{x})$ satisfies:
```{math}
\nabla f(\mathbf{x}) = 0 \implies A \mathbf{x} = \mathbf{b}.
```


## Gradient Descent Method

Gradient descent is an **iterative optimization algorithm** used to minimize a function $f(x)$.

The key idea is to move in the **opposite direction of the gradient**, since the gradient points toward increasing values.

For an objective function $f:\mathbb{R}^n \to \mathbb{R}$, starting from an initial guess $x_0$:


```{math}
x_{k+1} = x_k - \alpha \, \nabla f(x_k)
```


where

- $x_k$: current point,

- $\nabla f(x_k)$: gradient at the current point,

- $\alpha > 0$: learning rate (step size).

Repeat until $\|\nabla f(\mathbf{x}_k)\| < \epsilon$, where $\epsilon$ is a small tolerance.\
Intuition:\

- If $\alpha$ is too small, convergence is slow.

- If $\alpha$ is too large, the algorithm may overshoot and diverge.


## Steepest Descent Method


- This is a more general version of the gradient descent.

- We still make the step in the direction opposite to the gradient: $x_{k+1} = x_k - \alpha \, \nabla f(x_k)$.

- However, $\alpha$ is chosen via a line search (minimizing along the chosen direction).

- This approach guarantees to find the minimum!

- However, it might be slow; suffers from zig-zags.


:::{note} Original-slide figure pending review
The original lecture refers to `steepest_decent.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Conjugate Gradient (CG) method

The Conjugate Gradient (CG) method improves upon the Gradient Descent by ensuring that each step is taken in a direction that is **conjugate** (with respect to $A$) to the previous steps.

:::{note}
Key Requirements The CG method applies to systems where:

- $A$ is symmetric ($A^T = A$).

- $A$ is positive definite ($\mathbf{x}^T A \mathbf{x} > 0$).
:::

:::{note}
Conjugacy and $A$-Orthogonality

Two vectors $\mathbf{p}_i$ and $\mathbf{p}_j$ are [$A$-orthogonal (conjugate)]{style="color: blue"} if:
```{math}
\mathbf{p}_i^T A \mathbf{p}_j = 0 \quad \text{for } i \neq j.
```

:::

Picking conjugate directions ensures that movement along one direction does not "undo" progress made along previous ones.


## Conjugacy and $ A $-Orthogonality

Conjugacy and $A$-Orthogonality

Geometrical intuition:\

- As we assume, $\nabla f(\mathbf{x}) = A \mathbf{x} - \mathbf{b}$.

- How does the gradient change when we move along some direction?: $\delta (\nabla f(\mathbf{x})) = A \cdot  (\delta\mathbf{x})$

- Note that if we minimize a function along some direction $\mathbf{u}$, the gradient of the function must be perpendicular to $\mathbf{u}$ at the line minimum. If not, then there would still be a nonzero directional derivative along $\mathbf{u}$.

- Suppose we have moved along $\mathbf{u}$ to a minimum and now propose to move along some new direction $\mathbf{v}$. The condition that motion along $\mathbf{v}$ not spoil minimization along $\mathbf{u}$ is that the gradient stay perpendicular to $\mathbf{u}$, i.e., the change in the gradient is perpendicular to $\mathbf{u}$: $0 = \mathbf{u}^T \cdot \delta (\nabla f(\mathbf{x})) = \mathbf{u}^T \cdot A \cdot \mathbf{v}$


## Conjugate Gradient (CG): Algorithm


- Initialization

  1.  Start with an initial guess $\mathbf{x}_0$.

  2.  Compute the initial residual: $\mathbf{r}_0 = \nabla f(\mathbf{x}_0) = \mathbf{b} - A \mathbf{x}_0$.

  3.  Set the initial search direction: $\mathbf{p}_0 = \mathbf{r}_0$.

- Iterative Steps

  For $k = 0, 1, \dots, n-1$:

  1.  Compute the step size:
```{math}
\alpha_k = \frac{\mathbf{r}_k^T \mathbf{r}_k}{\mathbf{p}_k^T A \mathbf{p}_k}
```
.

  2.  Update the solution: $\mathbf{x}_{k+1} = \mathbf{x}_k + \alpha_k \mathbf{p}_k.$

  3.  Update the residual: $\mathbf{r}_{k+1} = \mathbf{r}_k - \alpha_k A \mathbf{p}_k.$

  4.  Compute the conjugacy coefficient:
```{math}
\beta_k = \frac{\mathbf{r}_{k+1}^T \mathbf{r}_{k+1}}{\mathbf{r}_k^T \mathbf{r}_k}.
```


  5.  Update the search direction: $\mathbf{p}_{k+1} = \mathbf{r}_{k+1} + \beta_k \mathbf{p}_k.$

- Termination Criterion The algorithm terminates when the norm of the residual is small: $\|\mathbf{r}_k\| < \epsilon,$ where $\epsilon$ is a predefined tolerance.


## Functional Minimization and Taylor Expansion


The CG method minimizes the quadratic function:
```{math}
f(\mathbf{x}) = \frac{1}{2} \mathbf{x}^T A \mathbf{x} - \mathbf{b}^T \mathbf{x}.
```


Using the Taylor series expansion:
```{math}
f(\mathbf{x} + \Delta \mathbf{x}) = f(\mathbf{x}) + \nabla f(\mathbf{x})^T \Delta \mathbf{x} + \frac{1}{2} \Delta \mathbf{x}^T A \Delta \mathbf{x}.
```


Here, the Hessian $H$ is equal to $A$.


## Conjugate Gradient (CG) for solving linear systems of equations


- Cost per iteration

  - Matrix-vector multiplication:\
    $O(N^2)$ for dense $N \times N$ matrices.\
    If $A$ is sparse with $M$ nonzero entries: $O(M)$.

  - updates: Cost: $O(N)$

  - Inner products: Cost: $O(N)$

- Number of iterations:

  - In exact arithmetic, CG converges in at most $N$ iterations for an $N \times N$ system.

  - In practice, convergence depends on the **condition number** of $A$: $\kappa(A) = \frac{\lambda_{\max}}{\lambda_{\min}}$, with rough estimate of iterations to reach accuracy $\epsilon$: $k \lesssim \sqrt{\kappa(A)} \, \log \frac{1}{\epsilon}.$

- Memory cost

  - CG requires storing only a few vectors of size $N$ (residuals, search directions, solution)

  - Direct methods (LU, Gaussian elimination) require $O(N^2)$ memory for dense matrices


## Newton’s Method

Newton's Method

- Newton's Method uses the Hessian (second derivative matrix) for faster (quadratic) convergence.

- More expensive (needs Hessian), but very powerful.

- Consider (again!) the Taylor series expansion $f(\mathbf{x} + \Delta \mathbf{x}) = f(\mathbf{x}) + \nabla f(\mathbf{x})^T \Delta \mathbf{x} + \frac{1}{2} \Delta \mathbf{x}^T A \Delta \mathbf{x}.$

- We are looking for the stationary point, i.e., $\frac{df}{d\mathbf{x}} = 0$.

- This results in: $\nabla f(\mathbf{x}) + \Delta \mathbf{x}^T A = 0\Rightarrow \Delta \mathbf{x} = -\nabla f(\mathbf{x}) A^{-1}$

- In other words, $x_{k+1} = x_k - H^{-1}(x_k) \nabla f(x_k)$, where $H$ is the Hessian (matrix of function's second derivatives).

- Intuition: think of 1D harmonic oscillator. We would need a larger geometry displacement if the gradient is larger or the force constant is smaller.

- The step is exact in the case of a quadratic function and exact gradient and Hessian.


## Quasi-Newton Method


- Computing and inverting $H_k$ can be expensive for large $n$.

- The idea of the Pseudo-Newton (Quasi-Newton) method is to approximate the Hessian $H_k$ by a matrix $B_k \approx H_k$ or its inverse.

- The update becomes
```{math}
\mathbf{x}_{k+1} = \mathbf{x}_k - B_k \, \nabla f(\mathbf{x}_k),
```
 where $B_k$ is a computationally cheaper approximation of the inverse Hessian. The method uses gradient information from previous iterations to improve $B_k$ step by step.

- To ensure $B_k$ captures curvature information, we enforce the secant (quasi-Newton) condition $B_{k+1} \mathbf{y}_k = \mathbf{s}_k,$ where $\mathbf{s}_k = \mathbf{x}_{k+1} - \mathbf{x}_k, \quad \mathbf{y}_k = \nabla f(\mathbf{x}_{k+1}) - \nabla f(\mathbf{x}_k).$ This condition ensures the new Hessian approximation matches the observed change in gradients along the last step.


## Quasi-Newton Method (continued)

Common Quasi-Newton update formulas include:

- **BFGS** (Broyden--Fletcher--Goldfarb--Shanno)
```{math}
B_{k+1} = \left(I - \frac{\mathbf{s}_k \mathbf{y}_k^T}{\mathbf{y}_k^T \mathbf{s}_k}\right) B_k
      \left(I - \frac{\mathbf{y}_k \mathbf{s}_k^T}{\mathbf{y}_k^T \mathbf{s}_k}\right) + \frac{\mathbf{s}_k \mathbf{s}_k^T}{\mathbf{y}_k^T \mathbf{s}_k}
```


- **DFP (Davidon--Fletcher--Powell)**
```{math}
B_{k+1} = B_k + \frac{\mathbf{s}_k \mathbf{s}_k^T}{\mathbf{s}_k^T \mathbf{y}_k} - \frac{B_k \mathbf{y}_k \mathbf{y}_k^T B_k}{\mathbf{y}_k^T B_k \mathbf{y}_k}
```


Both formulas maintain symmetry and positive-definiteness of $B_k$, which is important for convergence.


## Quasi-Newton Method (continued)


Key points:\

- Pseudo-Newton is faster than gradient descent because it incorporates curvature information.

- It is cheaper than Newton's method because it avoids computing the Hessian.

- The method achieves superlinear convergence for smooth functions if the line search is accurate.

- Only gradients are required, not second derivatives.

- It is suitable for medium-scale problems (hundreds to thousands of variables).

---

*Migration source: `03_Linear_algebra/optimization.tex` from the archived Overleaf export.*
