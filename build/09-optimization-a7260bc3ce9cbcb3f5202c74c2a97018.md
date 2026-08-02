---
kernelspec:
  name: python3
  display_name: Python 3
---

# Optimization

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

After this lecture, you should be able to:

- classify common local, global, constrained, and derivative-free methods;
- derive gradient descent and conjugate gradient for a quadratic objective;
- state the assumptions required by conjugate gradient;
- derive the Newton step from a quadratic model; and
- explain how quasi-Newton methods approximate inverse-Hessian information.

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

- An exact or sufficient-decrease line search makes the method descend under
  standard smoothness assumptions. It does not guarantee the global minimum
  for a general nonconvex objective.

- However, it might be slow; suffers from zig-zags.


```{figure} figures/09-optimization/steepest_decent.png
:alt: Zig-zag trajectory of steepest descent across elongated objective contours
:width: 65%

Steepest descent can zig-zag when the objective has strongly unequal
curvatures.
```

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

  2.  Compute the initial residual:
      $\mathbf r_0=\mathbf b-A\mathbf x_0=-\nabla f(\mathbf x_0)$.

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

- Differentiating the quadratic model with respect to $\Delta\mathbf x$ gives

  ```{math}
  \nabla f(\mathbf x)+H(\mathbf x)\Delta\mathbf x=\mathbf0,
  \qquad
  \Delta\mathbf x=-H(\mathbf x)^{-1}\nabla f(\mathbf x).
  ```

- In other words, $x_{k+1} = x_k - H^{-1}(x_k) \nabla f(x_k)$, where $H$ is the Hessian (matrix of function's second derivatives).

- Intuition: think of 1D harmonic oscillator. We would need a larger geometry displacement if the gradient is larger or the force constant is smaller.

- The step is exact in the case of a quadratic function and exact gradient and Hessian.


## Quasi-Newton Method


- Computing and inverting $H_k$ can be expensive for large $n$.

- A quasi-Newton method approximates either the Hessian or its inverse. Here
  $B_k$ denotes an inverse-Hessian approximation.

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


Both updates preserve symmetry. They preserve positive-definiteness when the
current approximation is positive definite and the curvature condition
$\mathbf y_k^\mathsf T\mathbf s_k>0$ holds.


## Quasi-Newton Method (continued)


Key points:\

- Quasi-Newton methods often converge faster than gradient descent because they
  incorporate curvature information.

- It is cheaper than Newton's method because it avoids computing the Hessian.

- The method achieves superlinear convergence for smooth functions if the line search is accurate.

- Only gradients are required, not second derivatives.

- It is suitable for medium-scale problems (hundreds to thousands of variables).

## Candidate visualizations for review

These optional figures are placed after the lecture so the algorithms can be
compared visually before deciding whether to incorporate them.

```{code-cell} python
:tags: [hide-input]
import numpy as np
import matplotlib.pyplot as plt

GOLD = "#cfb991"
DARK_GOLD = "#8e6f3e"
BLACK = "#000000"
GRAY = "#6f727b"

plt.rcParams.update({
    "figure.dpi": 120,
    "axes.spines.top": False,
    "axes.spines.right": False,
    "axes.grid": True,
    "grid.alpha": 0.22,
})
```

### Three methods take different paths through the same landscape

Gradient descent follows the local slope, conjugate gradient chooses
$A$-conjugate directions, and Newton's method uses the full quadratic curvature.

```{code-cell} python
H = np.array([[5.0, 4.0], [4.0, 5.0]])
x0 = np.array([-2.5, 1.6])

def gradient_descent_path(x, steps=18, alpha=0.11):
    path = [x.copy()]
    for _ in range(steps):
        x = x - alpha * (H @ x)
        path.append(x.copy())
    return np.array(path)

def conjugate_gradient_path(x):
    path = [x.copy()]
    r = -(H @ x)
    p = r.copy()
    for _ in range(2):
        alpha = (r @ r) / (p @ H @ p)
        x = x + alpha*p
        r_new = r - alpha*(H @ p)
        path.append(x.copy())
        beta = (r_new @ r_new) / (r @ r)
        p, r = r_new + beta*p, r_new
    return np.array(path)

paths = {
    "gradient descent": gradient_descent_path(x0),
    "conjugate gradient": conjugate_gradient_path(x0.copy()),
    "Newton": np.vstack([x0, x0 - np.linalg.solve(H, H @ x0)]),
}
colors = [GRAY, DARK_GOLD, BLACK]
xg = np.linspace(-3,3,300)
yg = np.linspace(-3,3,300)
X, Y = np.meshgrid(xg, yg)
F = 0.5*(H[0,0]*X**2 + 2*H[0,1]*X*Y + H[1,1]*Y**2)

fig, ax = plt.subplots(figsize=(7.0, 5.7))
ax.contour(X, Y, F, levels=np.geomspace(0.08, 60, 14), colors=GOLD, linewidths=0.8)
for (label, path), color in zip(paths.items(), colors):
    ax.plot(path[:,0], path[:,1], "o-", color=color, linewidth=2,
            markersize=4, label=label)
ax.scatter(0,0, marker="*", s=150, color=DARK_GOLD, edgecolor=BLACK, zorder=4)
ax.set(aspect="equal", xlim=(-3,3), ylim=(-3,3), xlabel="$x_1$", ylabel="$x_2$",
       title="Optimization paths on one quadratic objective")
ax.legend(frameon=False)
plt.show()
```

### Step size determines convergence or divergence

For a one-dimensional quadratic, the learning rate controls whether iterates
approach the minimum monotonically, oscillate toward it, or move away.

```{code-cell} python
rates = [0.25, 1.0, 1.75, 2.1]
labels = ["slow", "one-step", "oscillatory", "divergent"]
fig, axes = plt.subplots(1, 2, figsize=(9.7, 4.1))
for rate, label, color in zip(rates, labels, [GRAY, BLACK, DARK_GOLD, GOLD]):
    values = [3.0]
    for _ in range(10):
        values.append(values[-1] - rate*values[-1])
    axes[0].plot(range(11), values, "o-", color=color, label=rf"$\alpha={rate}$: {label}")
    axes[1].semilogy(range(11), np.maximum(0.5*np.array(values)**2, 1e-8),
                     "o-", color=color)
axes[0].axhline(0, color=BLACK, linewidth=0.8)
axes[0].set(xlabel="iteration", ylabel="$x_k$", title="position")
axes[1].set(xlabel="iteration", ylabel="$f(x_k)$", title="objective value")
axes[0].legend(frameon=False, fontsize=8)
fig.suptitle(r"Gradient descent on $f(x)=x^2/2$")
fig.tight_layout()
plt.show()
```

### Ill-conditioning creates the gradient-descent zigzag

The same algorithm behaves very differently when the objective has comparable
curvature in every direction versus a narrow, high-condition-number valley.

```{code-cell} python
matrices = [(np.diag([2.0,1.0]), "condition number 2"),
            (np.diag([18.0,1.0]), "condition number 18")]
fig, axes = plt.subplots(1, 2, figsize=(9.6, 4.5))
for ax, (matrix, title) in zip(axes, matrices):
    X, Y = np.meshgrid(np.linspace(-2.5,2.5,250), np.linspace(-2.5,2.5,250))
    F = 0.5*(matrix[0,0]*X**2 + matrix[1,1]*Y**2)
    ax.contour(X, Y, F, levels=np.geomspace(0.1,45,12), colors=GOLD, linewidths=0.8)
    point = np.array([2.1,2.1])
    path = [point.copy()]
    alpha = 0.085 if matrix[0,0] > 10 else 0.35
    for _ in range(22):
        point = point - alpha*(matrix @ point)
        path.append(point.copy())
    path = np.array(path)
    ax.plot(path[:,0], path[:,1], "o-", color=DARK_GOLD, markersize=3)
    ax.set(aspect="equal", xlim=(-2.5,2.5), ylim=(-2.5,2.5), title=title,
           xlabel="$x_1$", ylabel="$x_2$")
fig.suptitle("Curvature imbalance slows steepest descent")
fig.tight_layout()
plt.show()
```

### Newton's method minimizes a local quadratic model

The Newton step is the minimum of a parabola that matches the function's value,
slope, and curvature at the current point—not necessarily the minimum of the
original function.

```{code-cell} python
def f(x): return 0.18*(x-1.0)**4 + 0.5*(x-1.0)**2 + 0.3
def fp(x): return 0.72*(x-1.0)**3 + (x-1.0)
def fpp(x): return 2.16*(x-1.0)**2 + 1.0

x0 = 2.65
x_newton = x0 - fp(x0)/fpp(x0)
x = np.linspace(-0.5,3.3,500)
model = f(x0) + fp(x0)*(x-x0) + 0.5*fpp(x0)*(x-x0)**2

fig, ax = plt.subplots(figsize=(7.4, 4.7))
ax.plot(x, f(x), color=BLACK, linewidth=2.5, label="$f(x)$")
ax.plot(x, model, "--", color=DARK_GOLD, linewidth=2,
        label="local quadratic model")
ax.scatter([x0,x_newton], [f(x0),f(x_newton)], s=70,
           color=[GOLD,DARK_GOLD], edgecolor=BLACK, zorder=3)
ax.annotate("Newton step", xy=(x_newton,f(x_newton)), xytext=(1.75,2.6),
            arrowprops={"arrowstyle":"->", "color":GRAY})
ax.set(xlim=(-0.5,3.3), ylim=(0,4.3), xlabel="$x$", ylabel="objective",
       title="Newton steps to the minimum of the local model")
ax.legend(frameon=False)
plt.show()
```

---

*Migration source: `03_Linear_algebra/optimization.tex` from the archived Overleaf export.*
