---
title: "Complex Vector Spaces, Hermitian and Unitary Matrices"
---

# Complex Vector Spaces, Hermitian and Unitary Matrices

## Complex vectors and inner products

We used complex numbers to keep track of amplitude and phase. If several amplitudes belong to the same system, we can collect them into a vector. The entries can now be complex, but matrix multiplication and changes of basis work as before.

For example,

```{math}
\mathbf v=\begin{pmatrix}1\\i\end{pmatrix}.
```

There is one operation we need to reconsider: the dot product. If we use the real-vector formula, this nonzero vector would have

```{math}
\mathbf v^T\mathbf v=1+i^2=0.
```

That cannot serve as its squared length. Instead, conjugate the entries of the first vector:

```{math}
\mathbf v^\dagger\mathbf v
=\begin{pmatrix}1&-i\end{pmatrix}
\begin{pmatrix}1\\i\end{pmatrix}
=1+(-i)i=2.
```

The dagger denotes the conjugate transpose:

```{math}
\mathbf A^\dagger=(\mathbf A^*)^T,\qquad
(A^\dagger)_{nm}=A_{mn}^*.
```

A star means complex conjugation without transposing. For a column vector, the dagger produces a row vector:

```{math}
\mathbf v^\dagger=(v_1^*,\ldots,v_n^*).
```

For two complex column vectors, the same row-times-column calculation gives

```{math}
\mathbf u^\dagger\mathbf v=\sum_m u_m^*v_m,
\qquad
\|\mathbf v\|^2=\mathbf v^\dagger\mathbf v=\sum_m|v_m|^2.
```

The product can be complex, but the squared length is real and nonnegative. Multiplying a vector by a phase leaves its length unchanged.

We conjugate the first vector throughout; some mathematics texts conjugate the second instead, so check the convention when comparing formulas. We will introduce the bra-ket notation used in physics below.

### Conjugate transpose of a product

Just as transposing reverses the order of a product, taking the conjugate transpose gives

```{math}
(\mathbf A\mathbf B)^\dagger=\mathbf B^\dagger\mathbf A^\dagger,
\qquad
(\mathbf A\mathbf v)^\dagger=\mathbf v^\dagger\mathbf A^\dagger.
```

::::{prf:proof}
Consider one matrix element of the conjugate transpose:

```{math}
\begin{aligned}
\big[(\mathbf A\mathbf B)^\dagger\big]_{nm}
&=\big[(\mathbf A\mathbf B)_{mn}\big]^*\\
&=\left(\sum_k A_{mk}B_{kn}\right)^*\\
&=\sum_k B_{kn}^*A_{mk}^*\\
&=\sum_k (B^\dagger)_{nk}(A^\dagger)_{km}\\
&=(\mathbf B^\dagger\mathbf A^\dagger)_{nm}.
\end{aligned}
```

Because every matrix element agrees, $(\mathbf A\mathbf B)^\dagger=\mathbf B^\dagger\mathbf A^\dagger$. Taking $\mathbf B$ to be the column vector $\mathbf v$ gives $(\mathbf A\mathbf v)^\dagger=\mathbf v^\dagger\mathbf A^\dagger$.
::::

The order reverses because transposing a product reverses its order. We will use this identity repeatedly when moving a matrix from one side of an inner product to the other.

### Bra-ket notation

In quantum mechanics and much of physics, a column vector is called a **ket** and is written

```{math}
|v\rangle
\quad\longleftrightarrow\quad
\mathbf v=
\begin{pmatrix}v_1\\v_2\\\vdots\\v_n\end{pmatrix}.
```

Taking the conjugate transpose produces a row vector called a **bra**:

```{math}
\langle v|
=(|v\rangle)^\dagger
\quad\longleftrightarrow\quad
\mathbf v^\dagger
=\begin{pmatrix}v_1^*&v_2^*&\cdots&v_n^*\end{pmatrix}.
```

The bra is not merely the transpose of the ket. Its entries are also complex conjugated. For example,

```{math}
|v\rangle=\begin{pmatrix}1\\i\end{pmatrix},
\qquad
\langle v|=\begin{pmatrix}1&-i\end{pmatrix}.
```

Placing a bra and ket together gives their inner product:

```{math}
\boxed{\langle u|v\rangle=\mathbf u^\dagger\mathbf v},
\qquad
\langle v|v\rangle=\|\mathbf v\|^2.
```

The result is a scalar. Reversing the order conjugates that scalar:

```{math}
\langle v|u\rangle=\langle u|v\rangle^*.
```

Putting a ket before a bra gives an **outer product** instead:

```{math}
\boxed{|u\rangle\langle v|=\mathbf u\mathbf v^\dagger}.
```

This result is a matrix. In particular, $|e\rangle\langle e|$ is the projector onto the direction of a normalized vector $|e\rangle$.

## Orthogonality and completeness

We already did this for real vectors: $\mathbf u\cdot\mathbf v=\mathbf u^T\mathbf v$, and orthogonal vectors satisfy $\mathbf u^T\mathbf v=0$. For complex vectors, the construction is the same except that we replace the transpose by the conjugate transpose.

Thus two complex vectors are orthogonal when $\langle u|v\rangle=\mathbf u^\dagger\mathbf v=0$. An orthonormal set satisfies

```{math}
\langle e_n|e_m\rangle
=\mathbf e_n^\dagger\mathbf e_m
=\delta_{nm}.
```

For example, the complex vectors

```{math}
\mathbf e_1=\frac1{\sqrt2}\begin{pmatrix}1\\i\end{pmatrix},
\qquad
\mathbf e_2=\frac1{\sqrt2}\begin{pmatrix}1\\-i\end{pmatrix}
```

both have norm one, and their inner product is $(1+(-i)(-i))/2=0$. They form an orthonormal basis of $\mathbb C^2$.

### Expanding in an orthonormal basis

If $\mathbf e_1,\ldots,\mathbf e_n$ form an orthonormal basis, any vector can be expanded as

```{math}
\mathbf v=\sum_{m=1}^n c_m\mathbf e_m,\qquad
c_m=\langle e_m|v\rangle
=\mathbf e_m^\dagger\mathbf v.
```

To find a coefficient, multiply the expansion by $\mathbf e_m^\dagger$; orthogonality removes every other term.

::::{prf:theorem} Completeness of an orthonormal basis
For a full orthonormal basis of $\mathbb C^n$,

```{math}
\sum_{m=1}^n|e_m\rangle\langle e_m|
=\sum_{m=1}^n\mathbf e_m\mathbf e_m^\dagger
=\mathbf I.
```

::::

::::{prf:proof}
Applying the sum to any vector gives

```{math}
\left(\sum_m|e_m\rangle\langle e_m|\right)|v\rangle
=\sum_m\langle e_m|v\rangle|e_m\rangle
=|v\rangle.
```

It therefore acts as the identity on every vector.
::::

If we sum over only part of the basis, we obtain the projector onto that subspace, not the identity. Orthogonality also gives

```{math}
\|\mathbf v\|^2=\sum_m|c_m|^2.
```

For the two basis vectors above, $(1,0)^T=(\mathbf e_1+\mathbf e_2)/\sqrt2$: each coefficient has squared magnitude $1/2$.

The construction of an orthonormal basis by subtracting projections is developed in [Projections and Gram–Schmidt](03a-projections-and-gram-schmidt.md). For complex vectors, use the conjugate transpose in each projection.

## Hermitian matrices

In the normal-modes lecture, our system of springs and masses gave us a real symmetric matrix. That symmetry was important: its eigenvalues were real, and eigenvectors belonging to different eigenvalues were orthogonal.

Now our vectors and matrices can be complex. What plays the same role as a real symmetric matrix in a complex vector space? Many physical systems, especially quantum observables and the generators of closed-system evolution, are described by **Hermitian matrices**. These matrices again have real eigenvalues and orthogonal eigenvectors for distinct eigenvalues.

A matrix is Hermitian when

```{math}
\mathbf H^\dagger=\mathbf H.
```

For a real matrix, the dagger is just the transpose, so the Hermitian condition reduces to the symmetric condition. A Hermitian matrix has real diagonal entries, and entries across the diagonal are complex conjugates:

```{math}
\mathbf H=\begin{pmatrix}a&b\\b^*&d\end{pmatrix},
\qquad a,d\in\mathbb R.
```

This definition gives us the complex version of the structure we used in normal modes. The next theorem makes its two key consequences precise.

::::{prf:theorem} Eigenvalues and eigenvectors of a Hermitian matrix
A Hermitian matrix has real eigenvalues. Eigenvectors belonging to distinct eigenvalues are orthogonal.
::::

::::{prf:proof} Bra-ket notation
Assume $\mathbf H$ is Hermitian, so $\mathbf H^\dagger=\mathbf H$. Let $|u_n\rangle$ and $|u_m\rangle$ be nonzero eigenvectors:

```{math}
\mathbf H|u_n\rangle=\lambda_n|u_n\rangle,
\qquad
\mathbf H|u_m\rangle=\lambda_m|u_m\rangle.
```

We have not yet assumed that the eigenvalues are real or distinct. Start with the scalar matrix element

```{math}
\langle u_n|\mathbf H|u_m\rangle.
```

First let $\mathbf H$ act on the ket to its right:

```{math}
\langle u_n|\mathbf H|u_m\rangle
=\lambda_m\langle u_n|u_m\rangle.
```

We can also let $\mathbf H$ act to the left. Taking the dagger of the first eigenvalue equation gives

```{math}
(\mathbf H|u_n\rangle)^\dagger
=(\lambda_n|u_n\rangle)^\dagger,
```

and therefore

```{math}
\langle u_n|\mathbf H^\dagger
=\lambda_n^*\langle u_n|.
```

Because $\mathbf H^\dagger=\mathbf H$,

```{math}
\langle u_n|\mathbf H|u_m\rangle
=\lambda_n^*\langle u_n|u_m\rangle.
```

We have evaluated the same scalar in two ways, so

```{math}
(\lambda_m-\lambda_n^*)\langle u_n|u_m\rangle=0.
```

There are two conclusions. First, set $m=n$:

```{math}
(\lambda_n-\lambda_n^*)\langle u_n|u_n\rangle=0.
```

Because $|u_n\rangle$ is nonzero, $\langle u_n|u_n\rangle>0$. Therefore $\lambda_n=\lambda_n^*$, so every eigenvalue is real.

Second, choose two distinct eigenvalues, $\lambda_n\ne\lambda_m$. Since the eigenvalues are real,

```{math}
(\lambda_m-\lambda_n)\langle u_n|u_m\rangle=0.
```

The first factor is nonzero, so $\langle u_n|u_m\rangle=0$. Thus eigenvectors belonging to distinct eigenvalues are orthogonal.
::::

Although we proved this using complex vectors, the real symmetric case is included: for a real matrix, the conjugate transpose is just the transpose.

### A standard complex example: the Pauli matrices

Three Hermitian matrices that appear throughout quantum mechanics are the Pauli matrices:

```{math}
\boldsymbol\sigma_x=
\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
\boldsymbol\sigma_y=
\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad
\boldsymbol\sigma_z=
\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
```

The matrices $\boldsymbol\sigma_x$ and $\boldsymbol\sigma_z$ are real and symmetric. The matrix $\boldsymbol\sigma_y$ is genuinely complex, but its off-diagonal entries are complex conjugates, so $\boldsymbol\sigma_y^\dagger=\boldsymbol\sigma_y$. All three are therefore Hermitian.

Each matrix has eigenvalues $+1$ and $-1$. One normalized choice of eigenvectors is

```{math}
\begin{array}{c|cc}
&\lambda=+1&\lambda=-1\\ \hline
\boldsymbol\sigma_x
&\dfrac{1}{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix}
&\dfrac{1}{\sqrt2}\begin{pmatrix}1\\-1\end{pmatrix}\\[1.2em]
\boldsymbol\sigma_y
&\dfrac{1}{\sqrt2}\begin{pmatrix}1\\i\end{pmatrix}
&\dfrac{1}{\sqrt2}\begin{pmatrix}1\\-i\end{pmatrix}\\[1.2em]
\boldsymbol\sigma_z
&\begin{pmatrix}1\\0\end{pmatrix}
&\begin{pmatrix}0\\1\end{pmatrix}
\end{array}
```

You can check each pair by multiplying the matrix into the proposed vector. For the genuinely complex example,

```{math}
\boldsymbol\sigma_y\frac{1}{\sqrt2}\begin{pmatrix}1\\i\end{pmatrix}
=\frac{1}{\sqrt2}\begin{pmatrix}1\\i\end{pmatrix},\qquad
\boldsymbol\sigma_y\frac{1}{\sqrt2}\begin{pmatrix}1\\-i\end{pmatrix}
=-\frac{1}{\sqrt2}\begin{pmatrix}1\\-i\end{pmatrix}.
```

The two eigenvectors for each matrix are orthogonal. Thus these familiar matrices show both conclusions of the theorem: Hermitian matrices have real eigenvalues, and eigenvectors with different eigenvalues are orthogonal.


::::{prf:theorem} Hermitian quadratic forms are real
If $\mathbf H$ is Hermitian, then

```{math}
q=\mathbf v^\dagger\mathbf H\mathbf v
```

is real for every complex vector $\mathbf v$.
::::

::::{prf:proof}
The quantity $q$ is a scalar. Take its complex conjugate. Because the conjugate transpose of a scalar is the same as its complex conjugate,

```{math}
q^*=(\mathbf v^\dagger\mathbf H\mathbf v)^\dagger
=\mathbf v^\dagger\mathbf H^\dagger\mathbf v
=\mathbf v^\dagger\mathbf H\mathbf v=q.
```

Thus $q^*=q$, so $q$ is real.
::::


### Connection to quantum mechanics

In quantum mechanics, an observable is a physical quantity that we can measure, such as position, momentum, or energy. The result of a measurement must be a real number. For a normalized state $\boldsymbol\psi$, the expectation value $\boldsymbol\psi^\dagger\mathbf H\boldsymbol\psi$ must also be real. The theorem we just proved shows why Hermitian matrices have exactly the structure we need. This leads to a special correspondence between observables and Hermitian matrices, or more generally, Hermitian operators:

```{math}
\boxed{\text{quantum observable}}
\quad\longleftrightarrow\quad
\boxed{\text{Hermitian operator }\mathbf H}.
```

Suppose

```{math}
\mathbf H\mathbf u_n=\lambda_n\mathbf u_n.
```

The real eigenvalue $\lambda_n$ is a possible result of measuring the observable. The normalized eigenvector $\mathbf u_n$ represents a state in which that result is definite:

```{math}
\boxed{\text{possible measurement result }\lambda_n}
\quad\longleftrightarrow\quad
\boxed{\text{real eigenvalue of }\mathbf H},
```

```{math}
\boxed{\text{state with definite result }\lambda_n}
\quad\longleftrightarrow\quad
\boxed{\text{normalized eigenvector }\mathbf u_n}.
```

Because a Hermitian matrix has orthogonal eigenvectors for distinct eigenvalues, states with different definite measurement results are orthogonal. A general quantum state does not have to be one eigenvector: it can be a superposition

```{math}
\boldsymbol\psi=\sum_n c_n\mathbf u_n,
\qquad
c_n=\mathbf u_n^\dagger\boldsymbol\psi.
```

If the eigenvectors form an orthonormal basis and $\boldsymbol\psi$ is normalized, then $|c_n|^2$ is the probability of obtaining the result $\lambda_n$. Thus the eigenvectors identify the definite-outcome states, while their real eigenvalues give the possible measured values.

## Unitary matrices

In [Orthogonal Transformations and Rotations](03-linear-algebra-vectors-and-transformations.md#orthogonal-transformations-and-rotations), we asked which real matrices preserve the length of every real vector. If $\mathbf b=\mathbf M\mathbf a$, requiring $\|\mathbf b\|^2=\|\mathbf a\|^2$ for every $\mathbf a$ led to

```{math}
\mathbf M^T\mathbf M=\mathbf I.
```

We can now ask the same question for a complex vector. Let a matrix $\mathbf U$ transform $\mathbf v$ into $\mathbf v'$:

```{math}
\mathbf v'=\mathbf U\mathbf v.
```

Using the complex squared length $\|\mathbf v\|^2=\mathbf v^\dagger\mathbf v$, the transformed vector has

```{math}
\begin{aligned}
\|\mathbf v'\|^2
&=\mathbf v'^\dagger\mathbf v'\\
&=(\mathbf U\mathbf v)^\dagger(\mathbf U\mathbf v)\\
&=\mathbf v^\dagger\mathbf U^\dagger\mathbf U\mathbf v.
\end{aligned}
```

For this to equal $\mathbf v^\dagger\mathbf v$ for every complex vector $\mathbf v$, we require

```{math}
\mathbf U^\dagger\mathbf U=\mathbf I.
```

This is the complex version of the orthogonal-matrix condition: the transpose is replaced by the conjugate transpose.

::::{prf:definition} Unitary matrix
A square complex matrix $\mathbf U$ is **unitary** when

```{math}
\mathbf U^\dagger\mathbf U=\mathbf U\mathbf U^\dagger=\mathbf I,
\qquad \mathbf U^{-1}=\mathbf U^\dagger.
```

For a square matrix, $\mathbf U^\dagger\mathbf U=\mathbf I$ makes $\mathbf U^\dagger$ the inverse of $\mathbf U$, so it also gives $\mathbf U\mathbf U^\dagger=\mathbf I$.
::::

::::{prf:theorem} Unitary transformations preserve inner products
For a unitary $\mathbf U$,

```{math}
(\mathbf U\mathbf u)^\dagger(\mathbf U\mathbf v)
=\mathbf u^\dagger\mathbf v.
```

In particular, lengths and orthogonality are preserved.
::::

::::{prf:proof}
Using the conjugate-transpose product rule,

```{math}
(\mathbf U\mathbf u)^\dagger(\mathbf U\mathbf v)
=\mathbf u^\dagger\mathbf U^\dagger\mathbf U\mathbf v
=\mathbf u^\dagger\mathbf v.
```

Set $\mathbf u=\mathbf v$ to obtain preservation of squared length.
::::

::::{prf:example} A unitary transformation that mixes components
Consider

```{math}
\mathbf U=\frac1{\sqrt2}\begin{pmatrix}1&i\\i&1\end{pmatrix}.
```

Taking the conjugate transpose and multiplying gives

```{math}
\mathbf U^\dagger\mathbf U
=\frac12\begin{pmatrix}1&-i\\-i&1\end{pmatrix}
\begin{pmatrix}1&i\\i&1\end{pmatrix}
=\mathbf I,
```

so $\mathbf U$ is unitary. Now apply it to the first coordinate vector:

```{math}
\mathbf v=\begin{pmatrix}1\\0\end{pmatrix},\qquad
\mathbf v'=\mathbf U\mathbf v
=\frac1{\sqrt2}\begin{pmatrix}1\\i\end{pmatrix}.
```

The individual components changed, but the squared length did not:

```{math}
\|\mathbf v\|^2=1,
\qquad
\|\mathbf v'\|^2
=\left|\frac1{\sqrt2}\right|^2
+\left|\frac{i}{\sqrt2}\right|^2=1.
```

This is a complex rotation: in fact, $\mathbf U=e^{i\pi\boldsymbol\sigma_x/4}$. In quantum mechanics, this transformation can be pictured as a rotation of a state on the Bloch sphere. We will return to that picture later.
::::

### Connection to quantum mechanics: transformations

In quantum mechanics, we describe a state by a complex vector. A reversible transformation of a closed quantum system must preserve the total probability, and it is represented by a unitary matrix:

```{math}
\boxed{\text{unitary matrix }\mathbf U}
\quad\longleftrightarrow\quad
\boxed{\text{reversible transformation of a quantum state}}.
```

If the initial state is $\boldsymbol\psi$, the transformed state is

```{math}
\boldsymbol\psi'=\mathbf U\boldsymbol\psi.
```

The squared length of a normalized state is its total probability. Unitarity guarantees

```{math}
\|\boldsymbol\psi'\|^2
=\boldsymbol\psi^\dagger\mathbf U^\dagger\mathbf U\boldsymbol\psi
=\boldsymbol\psi^\dagger\boldsymbol\psi=1.
```

Time evolution is one of the most important examples. A unitary matrix takes the state at time $t_0$ to the state at time $t$:

```{math}
\boldsymbol\psi(t)=\mathbf U(t,t_0)\boldsymbol\psi(t_0).
```

Unitary evolution is reversible: applying $\mathbf U^\dagger$ undoes $\mathbf U$. If $\boldsymbol\psi'=\mathbf U\boldsymbol\psi$, then

```{math}
\mathbf U^\dagger\boldsymbol\psi'
=\mathbf U^\dagger\mathbf U\boldsymbol\psi
=\boldsymbol\psi.
```

For real matrices, the unitary condition reduces to the orthogonal condition. Do not confuse this with the Hermitian condition: Hermitian means $\mathbf H^\dagger=\mathbf H$; unitary means $\mathbf U^\dagger=\mathbf U^{-1}$.

The example above shows what this allows: the state can change from one component to a superposition with probabilities $(1/2,1/2)$ while the total probability remains one.

### Eigenvalues of a unitary matrix

::::{prf:theorem} Unitary eigenvalues have unit magnitude
If $\mathbf U\mathbf v=\lambda\mathbf v$ with $\mathbf v\ne0$, then $|\lambda|=1$.
::::

::::{prf:proof}
Since a unitary matrix preserves length,

```{math}
\|\mathbf v\|^2=\|\mathbf U\mathbf v\|^2
=\|\lambda\mathbf v\|^2=|\lambda|^2\|\mathbf v\|^2.
```

Because $\mathbf v\ne0$, its squared norm is positive. Dividing by $\|\mathbf v\|^2$ gives $|\lambda|^2=1$, and therefore $|\lambda|=1$.
::::

Thus a unitary eigenvalue can be written as $e^{i\theta}$: along an eigenvector, the transformation changes phase but not magnitude. This completes the complex version of our earlier argument for orthogonal matrices.

## Questions

::::{admonition} Question 1

Consider the genuinely complex matrix

```{math}
\mathbf H=
\begin{pmatrix}
0&-i\\
i&0
\end{pmatrix}.
```

- \(a\) Verify that $\mathbf H$ is Hermitian.
- \(b\) Find its eigenvalues and normalized eigenvectors.
- \(c\) Verify that the eigenvalues are real and that the eigenvectors belonging to distinct eigenvalues are orthogonal using the complex inner product.

::::

::::{admonition} Question 2

Let

```{math}
\mathbf U=\frac{1}{\sqrt{2}}
\begin{pmatrix}
1&i\\
i&1
\end{pmatrix}.
```

- \(a\) Show that $\mathbf U$ is unitary.
- \(b\) Apply $\mathbf U$ to $|v\rangle=\begin{pmatrix}1\\0\end{pmatrix}$.
- \(c\) Verify directly that the magnitude of the vector is unchanged by the transformation.

::::

::::{admonition} Question 3

Let

```{math}
|u\rangle=\frac{1}{\sqrt{2}}
\begin{pmatrix}
1\\i
\end{pmatrix}.
```

- \(a\) Find $\langle u|$, $\langle u|u\rangle$, and the outer product $\mathbf P=|u\rangle\langle u|$.
- \(b\) Show that $\mathbf P^\dagger=\mathbf P$ and $\mathbf P^2=\mathbf P$.
- \(c\) Explain geometrically what $\mathbf P$ does to an arbitrary vector.

::::
