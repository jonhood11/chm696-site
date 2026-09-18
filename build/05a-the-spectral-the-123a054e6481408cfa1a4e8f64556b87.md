---
title: "The Spectral Theorem and Spectral Decomposition"
---

# The Spectral Theorem and Spectral Decomposition

## An orthonormal eigenbasis

Earlier, we showed that an $n\times n$ matrix can be diagonalized if it has $n$ linearly independent eigenvectors. We put those eigenvectors into the columns of a matrix $\mathbf S$ and write

```{math}
\mathbf S^{-1}\mathbf M\mathbf S=\mathbf D.
```

But this was a conditional statement. A general $n\times n$ matrix is not guaranteed to have $n$ linearly independent eigenvectors.

The spectral theorem gives us a stronger result for Hermitian matrices: every Hermitian matrix is guaranteed to have $n$ orthonormal eigenvectors. Therefore every Hermitian matrix can be diagonalized, and the eigenvector matrix is unitary rather than merely invertible.

::::{prf:theorem} Spectral theorem for Hermitian matrices
Every $n\times n$ Hermitian matrix $\mathbf H$ has an orthonormal basis of eigenvectors. If these vectors are the columns of $\mathbf U$, then $\mathbf U$ is unitary and

```{math}
\mathbf U^\dagger\mathbf H\mathbf U=\mathbf D,
\qquad
\mathbf H=\mathbf U\mathbf D\mathbf U^\dagger,
```

where $\mathbf D$ is diagonal and real.
::::

The proof has one repeating idea: find one normalized eigenvector, and then repeat the argument inside the subspace perpendicular to it.

::::{prf:proof}
Start with the characteristic polynomial

```{math}
p(\lambda)=\det(\mathbf H-\lambda\mathbf I).
```

This is a polynomial of degree $n$. Over the complex numbers it has at least one root, which we call $\lambda_1$. Therefore

```{math}
\det(\mathbf H-\lambda_1\mathbf I)=0.
```

The matrix $\mathbf H-\lambda_1\mathbf I$ is singular, so it has a nonzero vector $\mathbf e_1$ in its null space:

```{math}
(\mathbf H-\lambda_1\mathbf I)\mathbf e_1=0.
```

Rearranging gives

```{math}
\mathbf H\mathbf e_1=\lambda_1\mathbf e_1,
```

so $\mathbf e_1$ is an eigenvector. Divide it by its length so that $\mathbf e_1^\dagger\mathbf e_1=1$. Because $\mathbf H$ is Hermitian, the eigenvalue $\lambda_1$ is real.

We have found one normalized eigenvector. Now consider any vector $\mathbf w$ perpendicular to $\mathbf e_1$. Then

```{math}
\mathbf e_1^\dagger\mathbf H\mathbf w
=(\mathbf H\mathbf e_1)^\dagger\mathbf w
=\lambda_1\mathbf e_1^\dagger\mathbf w=0.
```

The result is zero, so $\mathbf H\mathbf w$ is also perpendicular to $\mathbf e_1$. Thus $\mathbf H$ maps the entire perpendicular subspace back into itself.

That subspace has dimension $n-1$, and $\mathbf H$ is still Hermitian when acting within it. We can therefore repeat the same argument there to find a second normalized eigenvector $\mathbf e_2$, perpendicular to $\mathbf e_1$. Continuing in the remaining perpendicular subspace produces $n$ orthonormal eigenvectors.

Put the $n$ orthonormal eigenvectors into the columns of

```{math}
\mathbf U=
\begin{pmatrix}
\vert&\vert&&\vert\\
\mathbf e_1&\mathbf e_2&\cdots&\mathbf e_n\\
\vert&\vert&&\vert
\end{pmatrix}.
```

The $mn$ matrix element of $\mathbf U^\dagger\mathbf U$ is the inner product of columns $m$ and $n$:

```{math}
(\mathbf U^\dagger\mathbf U)_{mn}
=\mathbf e_m^\dagger\mathbf e_n
=\delta_{mn}.
```

Therefore $\mathbf U^\dagger\mathbf U=\mathbf I$. Because $\mathbf U$ is square, it is unitary and $\mathbf U^{-1}=\mathbf U^\dagger$.

The individual eigenvalue equations combine column by column into

```{math}
\mathbf H\mathbf U=\mathbf U\mathbf D.
```

Multiplying on the left by $\mathbf U^\dagger$ gives

```{math}
\mathbf U^\dagger\mathbf H\mathbf U=\mathbf D,
\qquad
\mathbf H=\mathbf U\mathbf D\mathbf U^\dagger,
```

which proves the stated diagonalization.
::::


## Spectral decomposition

The spectral theorem tells us that a Hermitian matrix is completely described by its orthonormal eigenvectors and real eigenvalues. We can now make that statement explicit.

Let $\mathbf H$ be an $N\times N$ Hermitian matrix, with normalized eigenvectors $\mathbf e_n$ and eigenvalues $\lambda_n$:

```{math}
\mathbf H\mathbf e_n=\lambda_n\mathbf e_n,
\qquad
\mathbf e_m^\dagger\mathbf e_n=\delta_{mn}.
```

For each eigenvector, define the matrix

```{math}
\boxed{\mathbf P_n=\mathbf e_n\mathbf e_n^\dagger}.
```

This matrix is a **projector**. Acting on any vector $\mathbf v$, it extracts the component pointing along $\mathbf e_n$:

```{math}
\mathbf P_n\mathbf v
=\mathbf e_n(\mathbf e_n^\dagger\mathbf v).
```

The scalar $\mathbf e_n^\dagger\mathbf v$ is the component of $\mathbf v$ along $\mathbf e_n$, and multiplication by $\mathbf e_n$ turns that component back into a vector.

Now return to the diagonalization $\mathbf H=\mathbf U\mathbf D\mathbf U^\dagger$. Writing it one eigenvector at a time gives

```{math}
\boxed{
\mathbf H=\sum_{n=1}^N\lambda_n\mathbf e_n\mathbf e_n^\dagger
=\sum_{n=1}^N\lambda_n\mathbf P_n.}
```

This is the **spectral decomposition** of $\mathbf H$. Each $\mathbf P_n$ selects one eigenvector direction, and $\lambda_n$ tells us how strongly $\mathbf H$ scales that direction. In bra-ket notation, the same statement is

```{math}
H=\sum_n \lambda_n|e_n\rangle\langle e_n|.
```

The projectors satisfy

```{math}
\mathbf P_n^\dagger=\mathbf P_n,\qquad
\mathbf P_m\mathbf P_n=\delta_{mn}\mathbf P_n,\qquad
\sum_n\mathbf P_n=\mathbf I.
```

The middle identity follows from orthonormality; the last is completeness. To see how this acts on a general vector, first expand the vector in the eigenbasis:

```{math}
\mathbf v=\sum_n c_n\mathbf e_n,
\qquad
c_n=\mathbf e_n^\dagger\mathbf v.
```

Applying $\mathbf H$ now projects $\mathbf v$ onto each eigenvector, scales that component by its eigenvalue, and adds the components back together:

```{math}
\mathbf H\mathbf v=\sum_n\lambda_n(\mathbf e_n^\dagger\mathbf v)\mathbf e_n.
```

### A two-dimensional example

Take the matrix we have used before:

```{math}
\mathbf H=\begin{pmatrix}2&1\\1&2\end{pmatrix},
\qquad
\mathbf e_+=\frac1{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix},
\quad
\mathbf e_-=\frac1{\sqrt2}\begin{pmatrix}1\\-1\end{pmatrix}.
```

The eigenvalues are $3$ and $1$. Its projectors are

```{math}
\mathbf P_+=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix},
\qquad
\mathbf P_-=\frac12\begin{pmatrix}1&-1\\-1&1\end{pmatrix}.
```

Adding gives $\mathbf P_++\mathbf P_-=\mathbf I$, and scaling gives $\mathbf H=3\mathbf P_++\mathbf P_-$. The matrix acts separately on the symmetric and antisymmetric combinations.

## Commuting Hermitian Matrices

Suppose we have two Hermitian matrices $\mathbf A$ and $\mathbf B$. Can we choose one orthonormal basis in which both matrices are diagonal? The answer is determined by their commutator,

```{math}
[\mathbf A,\mathbf B]=\mathbf A\mathbf B-\mathbf B\mathbf A.
```

The commutator measures whether applying $\mathbf A$ and $\mathbf B$ in opposite orders gives the same result.

::::{prf:theorem} Simultaneous diagonalization
Two Hermitian matrices have a common orthonormal eigenbasis if and only if they commute:

```{math}
[\mathbf A,\mathbf B]=0.
```
::::

::::{prf:proof}
First suppose the two matrices have a common orthonormal eigenbasis. In that basis they are both diagonal:

```{math}
\mathbf U^\dagger\mathbf A\mathbf U=\mathbf D_A,
\qquad
\mathbf U^\dagger\mathbf B\mathbf U=\mathbf D_B.
```

Diagonal matrices commute, so $\mathbf D_A\mathbf D_B=\mathbf D_B\mathbf D_A$. Transforming back to the original basis gives $\mathbf A\mathbf B=\mathbf B\mathbf A$.

Now suppose instead that $\mathbf A$ and $\mathbf B$ commute. Take an eigenvector $\mathbf v$ of $\mathbf A$, with $\mathbf A\mathbf v=\lambda\mathbf v$. The eigenspace belonging to $\lambda$ is

```{math}
E_\lambda=\{\mathbf w:\mathbf A\mathbf w=\lambda\mathbf w\}.
```

Then

```{math}
\begin{aligned}
\mathbf A(\mathbf B\mathbf v)
&=\mathbf B(\mathbf A\mathbf v)\\
&=\lambda\mathbf B\mathbf v.
\end{aligned}
```

Thus $\mathbf B\mathbf v$ remains inside the same eigenspace $E_\lambda$ of $\mathbf A$.

If $E_\lambda$ is one-dimensional, $\mathbf B\mathbf v$ must be proportional to $\mathbf v$, so $\mathbf v$ is automatically an eigenvector of both matrices. If $E_\lambda$ is degenerate, $\mathbf B$ may mix vectors within that space. But $\mathbf B$ is Hermitian, so we can choose an orthonormal basis inside $E_\lambda$ that diagonalizes $\mathbf B$. Those vectors remain eigenvectors of $\mathbf A$ because every vector in $E_\lambda$ has the same eigenvalue $\lambda$.

Repeating this within every eigenspace of $\mathbf A$ produces one orthonormal basis that diagonalizes both matrices.
::::


::::{prf:example} Different matrices with the same eigenvectors
Consider the two Hermitian matrices

```{math}
\mathbf A=\begin{pmatrix}2&1\\1&2\end{pmatrix},
\qquad
\mathbf B=\begin{pmatrix}5&-2\\-2&5\end{pmatrix}.
```

They are clearly different and neither is diagonal in the standard basis. Nevertheless,

```{math}
\mathbf A\mathbf B
=\begin{pmatrix}8&1\\1&8\end{pmatrix}
=\mathbf B\mathbf A,
```

so $[\mathbf A,\mathbf B]=0$. The common eigenvectors are the symmetric and antisymmetric combinations

```{math}
\mathbf e_+=\frac{1}{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix},
\qquad
\mathbf e_-=\frac{1}{\sqrt2}\begin{pmatrix}1\\-1\end{pmatrix}.
```

Indeed,

```{math}
\begin{aligned}
\mathbf A\mathbf e_+&=3\mathbf e_+,
&\qquad \mathbf B\mathbf e_+&=3\mathbf e_+,\\[4pt]
\mathbf A\mathbf e_-&=\mathbf e_-,
&\qquad \mathbf B\mathbf e_-&=7\mathbf e_-.
\end{aligned}
```

Thus the same orthonormal basis diagonalizes both matrices:

```{math}
\mathbf U=\begin{pmatrix}\vert&\vert\\\mathbf e_+&\mathbf e_-\\\vert&\vert\end{pmatrix},
\qquad
\mathbf U^\dagger\mathbf A\mathbf U
=\begin{pmatrix}3&0\\0&1\end{pmatrix},
\qquad
\mathbf U^\dagger\mathbf B\mathbf U
=\begin{pmatrix}3&0\\0&7\end{pmatrix}.
```

Commutation does not mean that the matrices are equal. It means that they are compatible with the same eigenvector directions. In quantum mechanics, two commuting observables can therefore have definite values in the same states.
::::

## Functions of a matrix

We can give meaning to a function of a matrix using the same Taylor series that defines the function of a number. If

```{math}
f(x)=\sum_{n=0}^{\infty}a_nx^n,
```

then we define

```{math}
\boxed{f(\mathbf A)=\sum_{n=0}^{\infty}a_n\mathbf A^n},
\qquad
\mathbf A^0=\mathbf I,
```

whenever the series converges. The important point is that $\mathbf A^n$ means repeated matrix multiplication. We are not applying the function separately to each entry of $\mathbf A$.

For example, the scalar Taylor series

```{math}
e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots
```

gives the matrix exponential

```{math}
e^{\mathbf A}=\mathbf I+\mathbf A+\frac{\mathbf A^2}{2!}
+\frac{\mathbf A^3}{3!}+\cdots.
```

This series converges for every finite square matrix. The Taylor series gives the definition; the eigenvector basis now gives us a much easier way to evaluate it.

## Evaluating a function in an eigenbasis

The eigenvectors of a Hermitian matrix $\mathbf H$ form an orthonormal basis for the vector space. In that basis, $\mathbf H$ acts independently along each eigenvector direction. We expressed this idea through the spectral decomposition

```{math}
\mathbf H=\sum_n\lambda_n\mathbf P_n,
```

where $\mathbf P_n$ projects onto the eigenvector with eigenvalue $\lambda_n$.

Using the Taylor-series definition above, the spectral decomposition now gives us a much easier way to evaluate $f(\mathbf H)$. Applying $\mathbf H$ twice multiplies the component along $\mathbf e_n$ by $\lambda_n^2$; applying it $p$ times multiplies that component by $\lambda_n^p$. Therefore


```{math}
\mathbf H^p=\sum_n\lambda_n^p\mathbf P_n.
```

The eigenvectors and projectors have not changed—only the eigenvalues have been raised to the power $p$. For a power series converging at every eigenvalue, the same reasoning gives

```{math}
f(\mathbf H)=\sum_n f(\lambda_n)\mathbf P_n.
```

Thus a function of a Hermitian matrix keeps the same eigenvectors and applies the ordinary scalar function to its eigenvalues:

```{math}
\lambda_n\longmapsto f(\lambda_n).
```

In finite dimensions, the projector expression also defines $f(\mathbf H)$ for any function defined on the eigenvalues, even without a power-series representation.

::::{prf:example} Exponentiating the Pauli matrix $\boldsymbol\sigma_x$
We want to evaluate

```{math}
e^{i\theta\boldsymbol\sigma_x},
\qquad
\boldsymbol\sigma_x=
\begin{pmatrix}0&1\\1&0\end{pmatrix}.
```

Rather than expanding the exponential term by term, first find the eigenvalues and projectors of $\boldsymbol\sigma_x$. Its normalized eigenvectors are

```{math}
\mathbf e_+=\frac{1}{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix},
\qquad
\mathbf e_-=\frac{1}{\sqrt2}\begin{pmatrix}1\\-1\end{pmatrix},
```

with eigenvalues $\lambda_+=1$ and $\lambda_-=-1$:

```{math}
\boldsymbol\sigma_x\mathbf e_+=\mathbf e_+,
\qquad
\boldsymbol\sigma_x\mathbf e_-=-\mathbf e_-.
```

The corresponding projectors are

```{math}
\begin{aligned}
\mathbf P_+
&=\mathbf e_+\mathbf e_+^\dagger
=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}
=\frac{\mathbf I+\boldsymbol\sigma_x}{2},\\
\mathbf P_-
&=\mathbf e_-\mathbf e_-^\dagger
=\frac12\begin{pmatrix}1&-1\\-1&1\end{pmatrix}
=\frac{\mathbf I-\boldsymbol\sigma_x}{2}.
\end{aligned}
```

The spectral rule tells us to apply the ordinary scalar function to each eigenvalue while keeping the same projectors. Here the function is

```{math}
f(\lambda)=e^{i\theta\lambda},
```

so the two eigenvalues become

```{math}
f(\lambda_+)=e^{i\theta},
\qquad
f(\lambda_-)=e^{-i\theta}.
```

Now recombine the two eigendirections:

```{math}
\begin{aligned}
e^{i\theta\boldsymbol\sigma_x}
&=e^{i\theta\lambda_+}\mathbf P_+ + e^{i\theta\lambda_-}\mathbf P_-\\
&=e^{i\theta}\mathbf P_+ + e^{-i\theta}\mathbf P_-\\
&=\cos\theta\,\mathbf I+i\sin\theta\,\boldsymbol\sigma_x\\
&=\begin{pmatrix}
\cos\theta&i\sin\theta\\
i\sin\theta&\cos\theta
\end{pmatrix}.
\end{aligned}
```

That is the whole calculation: diagonalize $\boldsymbol\sigma_x$, exponentiate the two scalar eigenvalues, and recombine using the projectors. The eigenvectors remain $\mathbf e_+$ and $\mathbf e_-$, while their eigenvalues become the phases $e^{i\theta}$ and $e^{-i\theta}$.
::::


## Homework

::::{admonition} Question 1: Constructing a spectral decomposition

Consider the Hermitian matrix

```{math}
\mathbf H=
\begin{pmatrix}
2&-i\\
i&2
\end{pmatrix}.
```

1. Verify directly that $\mathbf H^\dagger=\mathbf H$.
2. Find the eigenvalues of $\mathbf H$ and a normalized eigenvector for each eigenvalue. Verify that the two eigenvectors are orthogonal.
3. For each normalized eigenvector $\mathbf e_n$, construct the projector

   ```{math}
   \mathbf P_n=\mathbf e_n\mathbf e_n^\dagger
   =|e_n\rangle\langle e_n|.
   ```

   Write each projector explicitly as a $2\times2$ matrix.
4. Verify the projector identities

   ```{math}
   \mathbf P_n^\dagger=\mathbf P_n,
   \qquad
   \mathbf P_n^2=\mathbf P_n,
   \qquad
   \mathbf P_1\mathbf P_2=\mathbf 0,
   \qquad
   \mathbf P_1+\mathbf P_2=\mathbf I.
   ```

5. Reconstruct the original matrix from its eigenvalues and projectors:

   ```{math}
   \mathbf H=\lambda_1\mathbf P_1+\lambda_2\mathbf P_2.
   ```

   Multiply out the right-hand side and confirm that it equals the given matrix. Explain in one or two sentences how this calculation illustrates the spectral theorem.
6. Without multiplying $\mathbf H$ by itself, use the same projectors to calculate $\mathbf H^2$.

::::

::::{admonition} Question 2: Exponentiating $\boldsymbol\sigma_y$

Consider the Hermitian Pauli matrix

```{math}
\boldsymbol\sigma_y=
\begin{pmatrix}
0&-i\\
i&0
\end{pmatrix}.
```

Use its spectral decomposition to derive $e^{i\theta\boldsymbol\sigma_y}$.

1. Find its eigenvalues, normalized eigenvectors, and spectral projectors.
2. Apply $f(\lambda)=e^{i\theta\lambda}$ to the eigenvalues and recombine the two eigendirections to obtain $e^{i\theta\boldsymbol\sigma_y}$.
3. Simplify your answer and write it explicitly as a $2\times2$ matrix.

::::
