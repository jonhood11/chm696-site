# Eigenvalue Problems: Applications

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Simultaneous Diagonalization


- Q1. Can we diagonalize two (or more) matrices using the same similarity transformation?

- Q2. If matrices have the same set of eigenvectors, what can we tell about matrices?

- Q3. What can we tell about eigenvectors of commuting matrices?

Questions like that are essential in quantum mechanics. We can show that matrices have a common set of eigenvectors if and only if they commute.


## Simultaneous Diagonalization (continued)

We can show that matrices have a common set of eigenvectors if and only if they commute.\
**Proof**: Let's take commuting matrices F and G, i.e., $FG = GF$. Suppose $\mathbf{r}$ is the eigenvector of matrix F corresponding to the eigenvalue $\lambda$:
```{math}
F\mathbf{r} = \lambda \mathbf{r}
```
 Multiply this equation by G from the left:
```{math}
GF \mathbf{r} = \lambda G \mathbf{r},
```
 and rewrite using commuting relationship:
```{math}
F (G\mathbf{r}) = \lambda (G \mathbf{r})
```
 This says that $G \mathbf{r}$ is an eigenvector of F corresponding to the eigenvalue $\lambda$. If $\lambda$ is not degenerate (that is if there is just one eigenvector corresponding to $\lambda$) then $G \mathbf{r}$ must be the same vector as $\mathbf{r}$ (except for length), that is, $G \mathbf{r}$ is a multiple of $\mathbf{r}$, or $G \mathbf{r} = \lambda \mathbf{r}$. I.e., $\mathbf{r}$ is the eigenvector of F and G. If all eigenvalues of F are non-degenerate, then F and G have the same set of eigenvectors, and so can be diagonalized by the same C matrix.


## Normal modes: Classical mechanics


Systems of coupled oscillators (either classical or quantum) are prevalent in physics, chemistry and engineering. Motion of such systems is described by characteristic vibrations or [normal modes]{style="color: blue"}.\
Here is a simple example from classical mechanics:


:::{note} Original-slide figure pending review
The original lecture refers to `coupled_oscillator_classical.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

The equation of motion for a mass under a restoring force is given by Newton's second law:
```{math}
F = m \ddot{x} = m \frac{d^2 x}{dt^2}
```
 where $m$ is the mass and $x$ is the position.

Potential energy of each spring (spring constant K) from left to right is
```{math}
V_1 = 1/2 K x^2,
```

```{math}
V_2 = 1/2 K (x-y)^2,
```

```{math}
V_3 = 1/2 K y^2.
```


## Normal modes: Classical mechanics (continued)

The total potential energy of the system is
```{math}
V_1 = 1/2 K (x^2 + (x-y)^2 + y^2) = K (x^2 -xy + y^2)
```


The forces on two masses are $F_1 = -\frac{\partial V}{\partial x} = -2Kx + Ky$, $F_2 = -\frac{\partial V}{\partial y} = Kx - 2Ky$

For two masses $m$, we have the following equations of motion for displacements $x$ and $y$:
```{math}
m \ddot{x} =  -2Kx + Ky
```

```{math}
m \ddot{y} =  Kx - 2Ky
```


To find the normal modes, assume both $x$ and $y$ undergo simple harmonic oscillations:
```{math}
x = x_0 e^{i \omega t}, \quad y = y_0 e^{i \omega t}
```
 Substituting these into the equations of motion, we get:
```{math}
-m \omega^2 x_0 e^{i \omega t} = -2Kx_0 e^{i \omega t} + Ky_0 e^{i \omega t}
```

```{math}
-m \omega^2 y_0 e^{i \omega t} = Kx_0 e^{i \omega t} - 2Ky_0 e^{i \omega t}
```


## Normal modes: Classical mechanics (continued)

Dividing through by $e^{i \omega t}$, we obtain:
```{math}
-m \omega^2 x_0 = -2Kx_0 + Ky_0
```

```{math}
-m \omega^2 y_0 = Kx_0 - 2Ky_0
```


This can be written in matrix form as:
```{math}
\begin{bmatrix} -m \omega^2 + 2K & -K \\ -K & -m \omega^2 + 2K \end{bmatrix} \begin{bmatrix} x_0 \\ y_0 \end{bmatrix} = 0
```
 Dividing by $K$, we introduce a dimensionless parameter $\lambda = \frac{m \omega^2}{K}$, giving:
```{math}
\lambda \begin{bmatrix} x_0 \\ y_0 \end{bmatrix} = \begin{bmatrix} 2 & -1 \\ -1 & 2 \end{bmatrix} \begin{bmatrix} x_0 \\ y_0 \end{bmatrix}
```


This is an eigenvalue problem:
```{math}
A \mathbf{v} = \lambda \mathbf{v}, \quad \mathbf{v} = \begin{bmatrix} x_0 \\ y_0 \end{bmatrix}
```
 where $A$ is a real and symmetric matrix: $A = \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$


## Normal modes: Classical mechanics (continued)

$\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix} \mathbf{v} = \lambda \mathbf{v}$\
Since $A$ is symmetric, it is Hermitian, i.e., $A = A^\dagger$, and its eigenvalues will be real.

Solving the eigenvalue problem yields two eigenvalues and their corresponding eigenvectors.

The first eigenvalue and eigenvector are:
```{math}
\lambda_1 = 1, \quad \mathbf{v}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}
```
 The corresponding angular frequency is:
```{math}
\omega_1 = \sqrt{\frac{K}{m}}
```
 The real part of the oscillatory solution for this mode is:
```{math}
\Re \begin{bmatrix} x(t) \\ y(t) \end{bmatrix}  = \begin{bmatrix} \cos(\omega_1 t) \\ \cos(\omega_1 t) \end{bmatrix}
```


## Normal modes: Classical mechanics (continued)


The second eigenvalue and eigenvector are:
```{math}
\lambda_2 = 3, \quad \mathbf{v}_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}
```
 The corresponding angular frequency is:
```{math}
\omega_2 = \sqrt{\frac{3K}{m}}
```
 The real part of the oscillatory solution for this mode is:
```{math}
\Re\begin{bmatrix} x(t) \\ y(t) \end{bmatrix}  = \begin{bmatrix} \cos(\omega_2 t) \\ -\cos(\omega_2 t) \end{bmatrix}
```


This completes the analysis of normal modes for two masses connected by springs, showing the two distinct oscillatory patterns characterized by $\omega_1$ and $\omega_2$.


## Untitled topic


:::{note} Original-slide figure pending review
The original lecture refers to `vibrations1.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Untitled topic (continued)


:::{note} Original-slide figure pending review
The original lecture refers to `vibrations2.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Untitled topic (continued)


:::{note} Original-slide figure pending review
The original lecture refers to `vibrations3.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Untitled topic (continued)


:::{note} Original-slide figure pending review
The original lecture refers to `vibrations4.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Untitled topic (continued)


:::{note} Original-slide figure pending review
The original lecture refers to `vibrations5.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Eigenvalue problems in QM

QM is full of eigenvalue problems. A few examples:

- Any numerical solution of the Schrodinger equation, either on a grid or using basis sets, results in a matrix diagonalization problem, with the dimensionality of the matrix being the size of the grid or basis set.

- Often, complex physical systems can be represented using model Hamiltonians. Examples: time-dependent processes in multi-level or excitonic systems, Huckel model, etc.


## Example: H\"uckel model for aromatic molecules

Example: Hückel model for aromatic molecules


:::{note} Original-slide figure pending review
The original lecture refers to `huckel1.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

For example, Hückel Hamiltonian for benzene: $\hat{H} = \begin{pmatrix}
    \alpha & \beta & 0 & 0 & 0 & \beta \\
    \beta & \alpha & \beta & 0 & 0 & 0 \\
    0 & \beta & \alpha & \beta & 0 & 0  \\
    0 & 0 & \beta & \alpha & \beta & 0 \\
    0 & 0 & 0 & \beta & \alpha & \beta  \\
    \beta & 0 & 0 & 0 & \beta & \alpha \\
\end{pmatrix}$


## Example: H\"uckel model for aromatic molecules (continued)

Example: Hückel model for aromatic molecules 1. Find eigenvalues -- molecular orbital energies E: $\det(H-EI)=0$\
2. Find eigenvectors -- molecular orbital coefficients $\mathbf{C}$: $(H-EI)\mathbf{C} = 0$


:::{note} Original-slide figure pending review
The original lecture refers to `huckel2.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

---

*Migration source: `03_Linear_algebra/diagonalization_applications.tex` from the archived Overleaf export.*
