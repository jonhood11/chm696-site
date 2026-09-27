---
title: Normal Modes
---

# Normal Modes

Before we calculate anything, play with the masses and springs below. Can you find a motion in which all the masses oscillate at the same frequency and keep a fixed pattern of relative amplitudes? That pattern is a normal mode. Mixing modes gives more complicated motion.

<iframe src="https://phet.colorado.edu/sims/html/normal-modes/latest/normal-modes_en.html" title="PhET Normal Modes simulation" width="100%" height="560" allowfullscreen></iframe>

[Open the simulation in a new tab](https://phet.colorado.edu/sims/html/normal-modes/latest/normal-modes_en.html). Simulation by PhET Interactive Simulations, University of Colorado Boulder. Requires an internet connection.

Now let's derive the two modes of a simple system with two masses.

## Coupled oscillators

Let's start with two equal masses $m$ connected by three identical springs, each with spring constant $K$. The outer ends are attached to fixed walls. The masses move horizontally without friction, and we neglect damping.

```{figure} figures/04a-normal-modes/coupled-oscillators.svg
:width: 80%
:alt: Two equal masses m joined by three springs K between fixed walls, with both displacement directions x and y pointing right.

Two coupled oscillators. The arrows show the positive directions of $x$ and $y$, measured from each mass's equilibrium position.
```

If we move one mass, the middle spring also exerts a force on the other mass. The two motions are coupled. We want to find the patterns in which both masses oscillate at a single frequency.

For the left mass, Newton's second law gives

```{math}
F = m \ddot{x} = m \frac{d^2 x}{dt^2}
```

Here $x$ and $y$ are displacements from equilibrium, not the distance between the masses. The left spring contributes $-Kx$. The middle spring's change in length is $y-x$, so its force on the left mass is $K(y-x)$. Adding the forces,

```{math}
m \ddot{x} = -Kx + K(y - x) = -2Kx + Ky
```

For the right mass, the outer spring contributes $-Ky$, and the middle spring exerts the equal and opposite force $K(x-y)$:

```{math}
m \ddot{y} = -Ky + K(x - y) = Kx - 2Ky
```

### Assuming Oscillatory Motion

To find the normal modes, assume both $x$ and $y$ undergo simple harmonic oscillations:

```{math}
x = x_0 e^{i \omega t}, \quad y = y_0 e^{i \omega t}
```

Substituting these into the equations of motion, we get:

```{math}
-m \omega^2 x_0 e^{i \omega t} = -2Kx_0 e^{i \omega t} + Ky_0 e^{i \omega t}
```

Dividing through by $e^{i \omega t}$, we obtain:

```{math}
-m \omega^2 x_0 = -2Kx_0 + Ky_0
```

Similarly for $y$, we have:

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

where $A$ is a real and symmetric matrix:

```{math}
A = \begin{bmatrix} 2 & -1 \\ -1 & 2 \end{bmatrix}
```

Here the two off-diagonal entries are equal: the coupling between the masses appears symmetrically in the two equations. Thus $A^T=A$. This symmetry gives us a useful property of the mode vectors.

### Orthogonality of the mode vectors

::::{prf:theorem} Eigenvectors of a real symmetric matrix
For a real symmetric matrix $A^T=A$, real eigenvectors corresponding to distinct eigenvalues are orthogonal and therefore linearly independent.
::::

::::{prf:proof}
Let $A\mathbf{v}_i=\lambda_i\mathbf{v}_i$ and $A\mathbf{v}_j=\lambda_j\mathbf{v}_j$, with $\lambda_i\ne\lambda_j$. Using the second eigenvalue equation gives

```{math}
\mathbf{v}_i^T A\mathbf{v}_j
=\lambda_j\mathbf{v}_i^T\mathbf{v}_j.
```

But symmetry lets us move $A$ to the other vector:

```{math}
\mathbf{v}_i^T A\mathbf{v}_j
=(A\mathbf{v}_i)^T\mathbf{v}_j
=\lambda_i\mathbf{v}_i^T\mathbf{v}_j.
```

Subtracting these expressions,

```{math}
(\lambda_i-\lambda_j)\mathbf{v}_i^T\mathbf{v}_j=0.
```

Since the eigenvalues differ, $\mathbf{v}_i^T\mathbf{v}_j=0$. The nonzero eigenvectors are orthogonal, so they are also linearly independent.
::::

For our equal-mass system, this means modes with different squared frequencies have perpendicular displacement vectors. With unequal masses, the corresponding orthogonality uses the mass-weighted inner product instead.

Real symmetric matrices have real eigenvalues and admit real eigenvectors; we will return to that result in the later discussion of complex spaces. The proof above uses only real vectors and the transpose.

### Eigenmodes

Solving the eigenvalue problem yields two eigenvalues and their corresponding eigenvectors.

#### Eigenvalue 1

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

#### Eigenvalue 2

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

### The total motion

The masses do not have to move in just one normal mode. Because the equations of motion are linear, a sum of mode solutions is also a solution. Our two eigenvectors span the displacement space, so together they describe any motion of this system.

Writing $\mathbf{x}(t)=(x(t),y(t))^T$, the general solution is

```{math}
\mathbf{x}(t)=
\sum_{j=1}^{2}
\left[A_j\cos(\omega_jt)+B_j\sin(\omega_jt)\right]\mathbf{v}_j.
```

Each mode oscillates independently at its own frequency. The initial positions and velocities determine its coefficients:

```{math}
\mathbf{x}(0)=\sum_{j=1}^{2}A_j\mathbf{v}_j,
\qquad
\dot{\mathbf{x}}(0)=\sum_{j=1}^{2}\omega_j B_j\mathbf{v}_j.
```

If both masses are released from rest, the $B_j$ vanish. Using the eigenvectors we just found,

```{math}
\begin{pmatrix}x(t)\\y(t)\end{pmatrix}
=
A_1\begin{pmatrix}1\\1\end{pmatrix}\cos(\omega_1t)
+
A_2\begin{pmatrix}1\\-1\end{pmatrix}\cos(\omega_2t).
```

Thus each mass's displacement contains contributions from both modes. The two amplitude sliders below control $A_1$ and $A_2$; the simulation starts with zero initial velocities.

For a system with more masses and positive normal-mode frequencies, the same expression applies with a sum over all its modes.

### Seeing the normal modes

We can now compare the two patterns of motion. In the simulation, $x_1$ and $x_2$ denote the displacements we called $x$ and $y$ above. Start with both masses and all three spring constants set to $1$.

In Mode 1, the masses move together, following the eigenvector $(1,1)^T$. In Mode 2, they move in opposite directions, following $(1,-1)^T$, at a frequency $\sqrt{3}$ times larger. The amplitudes control how much of each mode is present, not the amplitude of each mass separately.

The left panel shows the physical motion. The right panel plots the pair of displacements as one vector $(x_1,x_2)$. In a single mode, its tip moves back and forth along the corresponding dashed eigenvector line. With both modes present, the two contributions add and the tip follows a more complicated path.

<a href="https://jonhood11.github.io/chm696-site/normal-modes/index.html" target="_blank" rel="noopener noreferrer">Open in new tab ↗</a>

<iframe src="https://jonhood11.github.io/chm696-site/normal-modes/index.html" title="Interactive normal modes explorer" style="width:100%;height:900px;border:0;"></iframe>

Use the checkboxes to include either mode or both, and adjust each included mode's amplitude before pressing Play. Try changing one mass or spring constant: both the frequencies and the relative displacements in each mode change. Under Starting conditions, “Start with only the left mass displaced” selects both modes and sets their amplitudes so that initially only the left mass is displaced and both masses are at rest.

## Homework

::::{admonition} Question 1: Detuning and an avoided crossing in two coupled oscillators

Consider two equal masses $m$ connected by three springs between fixed walls. The left and right outer springs have constants $k_1$ and $k_3$, while the middle coupling spring has constant $k_2$:

```{math}
\text{wall — }k_1\text{ — }m\text{ — }k_2\text{ — }m\text{ — }k_3\text{ — wall}.
```

Let $x_1$ and $x_2$ be the displacements of the two masses from equilibrium.

1. Write the equations of motion in the form

   ```{math}
   \ddot{\mathbf x}=-\mathbf A\mathbf x,
   \qquad
   \mathbf x=\begin{pmatrix}x_1\\x_2\end{pmatrix},
   ```

   and show that

   ```{math}
   \mathbf A=\frac1m
   \begin{pmatrix}
   k_1+k_2&-k_2\\
   -k_2&k_3+k_2
   \end{pmatrix}.
   ```

2. Begin with the symmetric case $k_1=k_3=k$. Find the two eigenvalues, normal-mode angular frequencies, and normalized eigenvectors. Describe how the masses move in each mode. For $k_2\ll k$, use a Taylor expansion to approximate the difference between the two angular frequencies to first order in $k_2/k$.

3. Break the left-right symmetry by writing

   ```{math}
   k_1=k(1-\delta),\qquad
   k_3=k(1+\delta),\qquad
   k_2=\kappa k,
   ```

   where $|\delta|<1$ is the detuning and $\kappa>0$ is a fixed dimensionless coupling. Define the dimensionless eigenvalue $\mu=m\omega^2/k$. Show that

   ```{math}
   \frac{m}{k}\mathbf A=
   \begin{pmatrix}
   1+\kappa-\delta&-\kappa\\
   -\kappa&1+\kappa+\delta
   \end{pmatrix},
   \qquad
   \mu_\pm(\delta)=1+\kappa\pm\sqrt{\delta^2+\kappa^2}.
   ```

4. Set $\kappa=0.10$ and plot $\mu_-(\delta)$ and $\mu_+(\delta)$ over $-0.8\le\delta\le0.8$. On the same axes, show the two uncoupled, mass-localized eigenvalues

   ```{math}
   \mu_1^{(0)}=1-\delta,\qquad
   \mu_2^{(0)}=1+\delta
   ```

   as dashed gray lines. Where do the uncoupled lines cross? Do the coupled eigenvalues cross? Find their minimum separation and the detuning at which it occurs.

5. For each value of $\delta$, calculate a normalized eigenvector $\mathbf v_\pm(\delta)$ for each branch and the squared projections

   ```{math}
   p_{1,\pm}=\left|\begin{pmatrix}1&0\end{pmatrix}\mathbf v_\pm\right|^2,
   \qquad
   p_{2,\pm}=\left|\begin{pmatrix}0&1\end{pmatrix}\mathbf v_\pm\right|^2.
   ```

   Verify that $p_{1,\pm}+p_{2,\pm}=1$. Color each eigenvalue branch continuously by its mode character: blue when $p_1=1$, red when $p_2=1$, and purple for equal mixing. Use the same color scale for both branches and include a color bar.

6. At $\delta=0$, describe the relative displacements of the two masses in each mode. Then follow each colored branch from negative to positive detuning. Where are the modes strongly mixed? Where is a mode concentrated mostly on one mass? Explain how the two branches exchange their physical character through the avoided crossing.

::::

::::{admonition} Question 2: Two small masses and a larger central mass

Two identical small masses $m$ are attached symmetrically to a larger central mass $M>m$ by two identical springs of spring constant $K$:

```{math}
m\;\text{— spring }K\text{ —}\;M\;\text{— spring }K\text{ —}\;m.
```

There are no walls or fixed supports. All three masses can move along the same horizontal line without friction. Let $x_1$, $x_2$, and $x_3$ be their displacements from equilibrium, measured in the same direction from left to right.

1. Write the three equations of motion and put them in matrix form.
2. Find all three normal modes: give the angular frequencies and the corresponding displacement eigenvectors in terms of $m$, $M$, and $K$.
3. Sketch how the masses move in each mode. What is the physical meaning of any zero-frequency mode?

::::
