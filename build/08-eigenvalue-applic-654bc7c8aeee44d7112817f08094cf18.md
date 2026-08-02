---
kernelspec:
  name: python3
  display_name: Python 3
---

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

## Candidate visualizations for review

These optional figures are collected after the main lecture so they can be
judged independently.

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

### Commuting matrices share eigenvector directions

Two commuting symmetric matrices stretch along the same pair of axes. A
noncommuting comparison rotates those preferred directions, showing why a
single diagonalizing basis no longer works.

```{code-cell} python
angle = np.deg2rad(28)
Q = np.array([[np.cos(angle), -np.sin(angle)],
              [np.sin(angle),  np.cos(angle)]])
A = Q @ np.diag([2.1, 0.7]) @ Q.T
B = Q @ np.diag([1.4, 0.45]) @ Q.T
C = np.array([[1.5, 0.75], [0.75, 1.0]])
t = np.linspace(0, 2*np.pi, 500)
circle = np.vstack([np.cos(t), np.sin(t)])

fig, axes = plt.subplots(1, 3, figsize=(11, 3.9), sharex=True, sharey=True)
for ax, matrix, title in zip(axes, [A, B, C],
                             ["A", "B: AB = BA", "C: AC ≠ CA"]):
    image = matrix @ circle
    _, eigenvectors = np.linalg.eigh(matrix)
    ax.plot(image[0], image[1], color=GRAY, linewidth=2)
    for j, color in zip(range(2), [GOLD, DARK_GOLD]):
        v = eigenvectors[:,j]
        ax.plot([-2*v[0],2*v[0]], [-2*v[1],2*v[1]], color=color, linewidth=2)
    ax.set(aspect="equal", xlim=(-2.5,2.5), ylim=(-2.5,2.5), title=title)
fig.suptitle("Simultaneous diagonalization means one common set of axes")
fig.tight_layout()
plt.show()
```

### Normal modes of two coupled masses

The two eigenvectors correspond to collective motions: an in-phase translation
and an out-of-phase stretch. Arrow direction communicates the mode more quickly
than the component column alone.

```{code-cell} python
positions = np.array([0.0, 2.5])
modes = [(np.array([1,1])/np.sqrt(2), "symmetric: in phase"),
         (np.array([1,-1])/np.sqrt(2), "antisymmetric: out of phase")]
fig, axes = plt.subplots(1, 2, figsize=(9.5, 3.5), sharex=True, sharey=True)
for ax, (mode, title) in zip(axes, modes):
    ax.plot([-1,3.5], [0,0], color=GRAY, linewidth=1)
    ax.plot(positions, [0,0], "o", color=BLACK, markersize=18)
    ax.plot(positions, [0,0], color=GOLD, linewidth=5, alpha=0.45)
    for x0, amplitude, color in zip(positions, mode, [DARK_GOLD, GOLD]):
        ax.arrow(x0, 0, 0.9*amplitude, 0, width=0.045,
                 head_width=0.18, head_length=0.15, color=color,
                 length_includes_head=True)
    ax.set(xlim=(-1.2,3.8), ylim=(-0.8,0.8), yticks=[], title=title)
fig.suptitle("Normal modes are eigenvectors of the coupled equations")
fig.tight_layout()
plt.show()
```

### General motion as a superposition of normal modes

Starting with only one mass displaced excites both modes. Their different
frequencies interfere, transferring motion back and forth between the masses.

```{code-cell} python
t = np.linspace(0, 35, 900)
omega_symmetric = 1.0
omega_antisymmetric = 1.32
x1 = 0.5*np.cos(omega_symmetric*t) + 0.5*np.cos(omega_antisymmetric*t)
x2 = 0.5*np.cos(omega_symmetric*t) - 0.5*np.cos(omega_antisymmetric*t)

fig, ax = plt.subplots(figsize=(8.7, 4.1))
ax.plot(t, x1, color=BLACK, linewidth=2, label="mass 1")
ax.plot(t, x2, color=DARK_GOLD, linewidth=2, label="mass 2")
ax.fill_between(t, x1, x2, color=GOLD, alpha=0.18)
ax.set(xlabel="time", ylabel="displacement",
       title="Beating comes from two normal-mode frequencies")
ax.legend(frameon=False)
plt.show()
```

### Benzene orbitals from Hückel eigenvectors

Each panel shows one eigenvector on the carbon ring. Marker size is the
magnitude of the atomic-orbital coefficient; fill distinguishes its sign.
Degenerate energy levels appear automatically.

```{code-cell} python
beta = -1.0
H = np.zeros((6,6))
for j in range(6):
    H[j,(j+1)%6] = H[(j+1)%6,j] = beta
energies, coefficients = np.linalg.eigh(H)
angles = np.pi/2 + np.arange(6)*2*np.pi/6
xy = np.c_[np.cos(angles), np.sin(angles)]

fig, axes = plt.subplots(2, 3, figsize=(9.3, 6.2))
for orbital, ax in enumerate(axes.flat):
    c = coefficients[:,orbital]
    ax.plot(np.r_[xy[:,0],xy[0,0]], np.r_[xy[:,1],xy[0,1]], color=GRAY)
    for (x0,y0), coefficient in zip(xy, c):
        ax.scatter(x0, y0, s=900*abs(coefficient)+35,
                   facecolor=DARK_GOLD if coefficient >= 0 else "none",
                   edgecolor=BLACK, linewidth=1.5)
    factor = energies[orbital] / beta
    ax.set(aspect="equal", xlim=(-1.45,1.45), ylim=(-1.35,1.35),
           xticks=[], yticks=[], title=rf"$(E-\alpha)/\beta={factor:.0f}$")
fig.suptitle("Hückel eigenvectors give orbital phases and amplitudes")
fig.tight_layout()
plt.show()
```

## Homework for this lecture

### Existing course homework

The triatomic normal-mode problem below is embedded from
[Homework 2](../assignments/homework-02.md).

:::{include} ../assignments/homework-02.md
:start-after: ## Normal-mode computation
:end-before: ---
:filename: false
:::

### ChatGPT-assisted extensions

For any of these assignments, students may use ChatGPT as a provisional
collaborator, but the submission must include the important prompts, an
independent mathematical check, at least one correction or limitation, and the
student's own conceptual explanation. ChatGPT output by itself is not evidence.

1. **Coupled-oscillator design studio.** Ask ChatGPT to derive the normal modes
   of two unequal masses connected by specified springs. Verify the mass-weighted
   eigenvalue problem, test limiting cases, and animate or plot each mode. Then
   change one mass and explain—not merely report—how the frequencies and mode
   shapes respond.

2. **Modify the Hückel benzene model.** Let ChatGPT predict what happens to the
   benzene energy levels when one site energy is shifted or one coupling is
   weakened. Build and diagonalize the modified Hamiltonian, track degeneracy
   breaking and orbital localization, and explain which molecular symmetry was
   lost. Separate qualitative predictions from computed evidence.

3. **Compatible-observable fact check.** Ask ChatGPT for examples of two
   commuting matrices and two noncommuting matrices, together with claims about
   common eigenvectors. Check the commutators and diagonalizations explicitly.
   Include a degenerate case and explain why commuting preserves an eigenspace
   but does not force an arbitrary basis inside that eigenspace to diagonalize
   both matrices.

---

*Migration source: `03_Linear_algebra/diagonalization_applications.tex` from the archived Overleaf export.*
