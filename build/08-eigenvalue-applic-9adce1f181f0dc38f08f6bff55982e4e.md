# Eigenvalue Problems: Applications

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

After this lecture, you should be able to:

- state the conditions for simultaneous diagonalization of commuting matrices;
- formulate coupled oscillations as an eigenvalue problem;
- connect a mass-weighted Hessian to molecular normal modes; and
- interpret the eigenvalues and eigenvectors of a Hückel Hamiltonian.

## Simultaneous diagonalization


- Q1. Can we diagonalize two (or more) matrices using the same similarity transformation?

- Q2. If matrices have the same set of eigenvectors, what can we tell about matrices?

- Q3. What can we tell about eigenvectors of commuting matrices?

These questions are central in quantum mechanics. Two diagonalizable matrices
over $\mathbb C$ are simultaneously diagonalizable if and only if they
commute. In particular, commuting normal matrices admit a common orthonormal
eigenbasis and are simultaneously unitarily diagonalizable.


## Simultaneous Diagonalization (continued)

Suppose $F$ and $G$ commute and $\mathbf r$ lies in the $\lambda$-eigenspace
of $F$:
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
Thus $G\mathbf r$ remains in the same eigenspace of $F$. If that eigenspace is
one-dimensional, $G\mathbf r=\mu\mathbf r$ for some $\mu$, so $\mathbf r$ is
also an eigenvector of $G$. For a degenerate eigenspace, diagonalize the
restriction of $G$ within that invariant subspace. The diagonalizability
assumptions are essential; commutation alone does not guarantee simultaneous
diagonalization for arbitrary defective matrices.


## Normal modes: Classical mechanics


Systems of coupled oscillators (either classical or quantum) are prevalent in physics, chemistry and engineering. Motion of such systems is described by characteristic vibrations or [normal modes]{style="color: blue"}.\
Here is a simple example from classical mechanics:


```{figure} figures/08-eigenvalue-applications/coupled_oscillator_classical.png
:alt: Two equal masses coupled to one another and to fixed walls by three springs
:width: 55%

A two-mass, three-spring model for normal modes.
```

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
V=\frac12K\left[x^2+(x-y)^2+y^2\right]
=K(x^2-xy+y^2).
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


## Molecular vibrational analysis

For a diatomic coordinate $r$, the harmonic approximation near an equilibrium
distance $r_e$ is controlled by the curvature
$k=d^2V/dr^2|_{r_e}$ and the reduced mass
$\mu=m_1m_2/(m_1+m_2)$. The angular frequency is
$\omega=\sqrt{k/\mu}$, or $\nu=\omega/(2\pi)$.

```{figure} figures/08-eigenvalue-applications/vibrations1.png
:alt: Harmonic and Morse potentials for a diatomic vibration with force constant, reduced mass, and vibrational energy levels
:width: 90%

One-dimensional vibrational analysis and the harmonic approximation.
```

For many Cartesian coordinates collected in $\Delta\mathbf x$, expand about a
stationary geometry $\mathbf x_0$:

```{math}
V(\mathbf x_0+\Delta\mathbf x)
\approx V(\mathbf x_0)
+\frac12\Delta\mathbf x^\mathsf T H\Delta\mathbf x,
\qquad
H_{ij}=\left.\frac{\partial^2V}{\partial x_i\partial x_j}
\right|_{\mathbf x_0}.
```

```{figure} figures/08-eigenvalue-applications/vibrations2.png
:alt: Multidimensional Taylor expansion of a molecular potential and definition of the gradient and Hessian
:width: 90%

The gradient vanishes at a stationary geometry, leaving the Hessian as the
quadratic restoring-force matrix. The source slide is schematic; the
one-dimensional second-order term requires the factor $1/2$ shown in the
equation above.
```

Let $M$ be the diagonal Cartesian mass matrix. The symmetric mass-weighted
Hessian is

```{math}
F=M^{-1/2}HM^{-1/2}.
```

```{figure} figures/08-eigenvalue-applications/vibrations3.png
:alt: Transformation from Cartesian displacements to mass-weighted coordinates in a molecular vibrational Hamiltonian
:width: 90%

Mass weighting separates the kinetic-energy metric from the force-constant
matrix.
```

Diagonalize $F$:

```{math}
F\mathbf q_k=\omega_k^2\mathbf q_k.
```

The eigenvectors define normal coordinates, and the nonzero eigenvalues give
squared angular frequencies.

```{figure} figures/08-eigenvalue-applications/vibrations4.png
:alt: Diagonalization of a mass-weighted Hessian into independent normal coordinates
:width: 90%

Diagonalization rotates coupled mass-weighted coordinates into independent
normal coordinates.
```

```{figure} figures/08-eigenvalue-applications/vibrations5.png
:alt: Independent harmonic-oscillator equations and the count of molecular vibrational modes
:width: 90%

A nonlinear molecule has $3N-6$ vibrational modes, while a linear molecule has
$3N-5$; the remaining coordinates correspond to overall translation and
rotation.
```

## Eigenvalue problems in QM

QM is full of eigenvalue problems. A few examples:

- Any numerical solution of the Schrodinger equation, either on a grid or using basis sets, results in a matrix diagonalization problem, with the dimensionality of the matrix being the size of the grid or basis set.

- Often, complex physical systems can be represented using model Hamiltonians. Examples: time-dependent processes in multi-level or excitonic systems, Huckel model, etc.


## Example: Hückel model for benzene

```{figure} figures/08-eigenvalue-applications/huckel1.png
:alt: Benzene p orbitals with Hückel parameters alpha and beta
:width: 85%

The Hückel model retains one $p_z$ orbital per carbon, with site energy
$\alpha$ and nearest-neighbor coupling $\beta$.
```

For benzene, the Hückel Hamiltonian is

```{math}
\hat{H} = \begin{pmatrix}
    \alpha & \beta & 0 & 0 & 0 & \beta \\
    \beta & \alpha & \beta & 0 & 0 & 0 \\
    0 & \beta & \alpha & \beta & 0 & 0  \\
    0 & 0 & \beta & \alpha & \beta & 0 \\
    0 & 0 & 0 & \beta & \alpha & \beta  \\
    \beta & 0 & 0 & 0 & \beta & \alpha \\
\end{pmatrix}.
```


The eigenvalues are the molecular-orbital energies:
$\det(H-EI)=0$. The eigenvectors contain the corresponding atomic-orbital
coefficients, $(H-EI)\mathbf C=\mathbf0$.

```{figure} figures/08-eigenvalue-applications/huckel2.png
:alt: Hückel molecular-orbital energy levels and orbital shapes for benzene
:width: 80%

Hückel molecular orbitals and energy levels for benzene. With the usual
convention $\beta<0$, $\alpha+2\beta$ is the lowest level.
```

---

*Migration source: `03_Linear_algebra/diagonalization_applications.tex` from the archived Overleaf export.*
