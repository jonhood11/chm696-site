---
title: "Similarity Transformations and Diagonalization"
---

# Similarity Transformations and Diagonalization

## Why use an eigenvector basis?

We have found the special directions of a matrix. Along an eigenvector, the matrix does not mix directions: it only multiplies that vector by its eigenvalue. This suggests a natural question:

> What does the matrix look like if we use its eigenvectors as our coordinate axes?

Suppose an $n\times n$ matrix $\mathbf M$ has $n$ linearly independent eigenvectors $\mathbf u_1,\ldots,\mathbf u_n$. Place them in the columns of a matrix:

```{math}
\mathbf S=[\,\mathbf u_1\ \mathbf u_2\ \cdots\ \mathbf u_n\,].
```

The matrix $\mathbf S$ converts eigenvector-basis coordinates into the original coordinates, while $\mathbf S^{-1}$ performs the reverse conversion:

```{math}
\boxed{\text{eigenvector coordinates}}
\xrightarrow{\ \mathbf S\ }
\boxed{\text{original coordinates}},
\qquad
\boxed{\text{original coordinates}}
\xrightarrow{\ \mathbf S^{-1}\ }
\boxed{\text{eigenvector coordinates}}.
```

For example, if $\mathbf c=(c_1,\ldots,c_n)^T$ contains the coordinates in the eigenvector basis, then

```{math}
\mathbf v=\mathbf S\mathbf c
=c_1\mathbf u_1+\cdots+c_n\mathbf u_n,
\qquad
\mathbf c=\mathbf S^{-1}\mathbf v.
```

In this basis, applying $\mathbf M$ should simply multiply each coordinate by its eigenvalue.

::::{prf:theorem} Diagonalization in an eigenvector basis
An $n\times n$ matrix $\mathbf M$ is diagonalizable if and only if it has $n$ linearly independent eigenvectors. The eigenvectors must belong to the coordinate space we are using: real eigenvectors for a real change of basis, or complex eigenvectors if we allow complex coordinates.

Place those eigenvectors in the columns of $\mathbf S$:

```{math}
\mathbf S=[\,\mathbf u_1\ \mathbf u_2\ \cdots\ \mathbf u_n\,].
```

Then

```{math}
\mathbf S^{-1}\mathbf M\mathbf S
=\mathbf D
=\operatorname{diag}(\lambda_1,\lambda_2,\ldots,\lambda_n).
```
::::

::::{prf:proof}
Multiplying a matrix by $\mathbf S$ applies it to each column. Since $\mathbf M\mathbf u_j=\lambda_j\mathbf u_j$,

```{math}
\begin{aligned}
\mathbf M\mathbf S
&=[\,\mathbf M\mathbf u_1\ \cdots\ \mathbf M\mathbf u_n\,]\\
&=[\,\lambda_1\mathbf u_1\ \cdots\ \lambda_n\mathbf u_n\,]\\
&=\mathbf S\mathbf D.
\end{aligned}
```

The columns are linearly independent, so $\mathbf S$ is invertible. Multiplying on the left by $\mathbf S^{-1}$ gives $\mathbf S^{-1}\mathbf M\mathbf S=\mathbf D$.

Conversely, if an invertible $\mathbf S$ gives $\mathbf S^{-1}\mathbf M\mathbf S=\mathbf D$, then $\mathbf M\mathbf S=\mathbf S\mathbf D$. Reading this column by column shows that the columns of $\mathbf S$ are eigenvectors. They are linearly independent because $\mathbf S$ is invertible.
::::

Read the diagonalization from right to left:

```{math}
\boxed{\text{eigenvector coordinates}}
\xrightarrow{\ \mathbf S\ }
\boxed{\text{original coordinates}}
\xrightarrow{\ \mathbf M\ }
\boxed{\text{transformed vector}}
\xrightarrow{\ \mathbf S^{-1}\ }
\boxed{\text{new eigenvector coordinates}}.
```

The final result is diagonal because each eigenvector component evolves independently:

```{math}
\mathbf c'=\mathbf D\mathbf c
=\begin{pmatrix}
\lambda_1c_1\\
\vdots\\
\lambda_nc_n
\end{pmatrix}.
```

Can we do this for every matrix? Not always. We need enough linearly independent eigenvectors to form a basis. Recall the [two repeated-eigenvalue examples](04-eigenvectors-and-eigenvalues.md#eigenvector-basis): the identity matrix had a full eigenvector basis, while the shear matrix had only one independent eigenvector. Repeated roots alone do not decide whether diagonalization is possible.

For a $2\times2$ matrix with two distinct eigenvalues, the condition is automatically satisfied because the two eigenvectors are linearly independent. For an $n\times n$ matrix, $n$ distinct eigenvalues are sufficient. They are not necessary: a repeated eigenvalue may still have enough independent eigenvectors.

### Worked example

Return to the symmetric matrix from the eigenvector lecture:

```{math}
\mathbf M=
\begin{pmatrix}2&1\\1&2\end{pmatrix}.
```

Its eigenpairs are

```{math}
\lambda_1=3,
\quad
\mathbf u_1=\begin{pmatrix}1\\1\end{pmatrix},
\qquad
\lambda_2=1,
\quad
\mathbf u_2=\begin{pmatrix}1\\-1\end{pmatrix}.
```

Put the eigenvectors into the columns of $\mathbf S$:

```{math}
\mathbf S=
\begin{pmatrix}1&1\\1&-1\end{pmatrix},
\qquad
\mathbf S^{-1}=\frac12
\begin{pmatrix}1&1\\1&-1\end{pmatrix}.
```

Then

```{math}
\mathbf S^{-1}\mathbf M\mathbf S
=\frac12
\begin{pmatrix}1&1\\1&-1\end{pmatrix}
\begin{pmatrix}2&1\\1&2\end{pmatrix}
\begin{pmatrix}1&1\\1&-1\end{pmatrix}
=\begin{pmatrix}3&0\\0&1\end{pmatrix}.
```

The original matrix mixes the $x$ and $y$ coordinates. In the eigenvector basis, it independently multiplies the symmetric component by $3$ and the antisymmetric component by $1$.

This example is especially simple because $\mathbf M$ is symmetric and its eigenvectors are orthogonal. In general, $\mathbf S$ only needs to be invertible. Its columns need not be orthogonal, and we cannot usually replace $\mathbf S^{-1}$ by $\mathbf S^\dagger$.

## General similarity transformations

Diagonalization is one particularly useful change of coordinates. We can describe any invertible change of coordinates in the same way.

Suppose $\mathbf M$ takes an input vector to an output vector in the original coordinates:

```{math}
\mathbf v_2=\mathbf M\mathbf v_1.
```

Let an invertible matrix $\mathbf R$ convert the old coordinate columns into new ones:

```{math}
\mathbf v_1'=\mathbf R\mathbf v_1,
\qquad
\mathbf v_2'=\mathbf R\mathbf v_2.
```

What matrix $\mathbf M'$ represents the same linear map in the new coordinates?

::::{prf:theorem} Similarity transformation
If coordinates change according to $\mathbf v'=\mathbf R\mathbf v$, then the matrix representing the same linear transformation in the new coordinates is

```{math}
\mathbf M'=\mathbf R\mathbf M\mathbf R^{-1}.
```

The matrices $\mathbf M$ and $\mathbf M'$ are called similar.
::::

::::{prf:proof}
Apply $\mathbf R$ to the original output and use $\mathbf v_1=\mathbf R^{-1}\mathbf v_1'$:

```{math}
\mathbf v_2'
=\mathbf R\mathbf v_2
=\mathbf R\mathbf M\mathbf v_1
=\mathbf R\mathbf M\mathbf R^{-1}\mathbf v_1'.
```

Because this holds for every input $\mathbf v_1'$, the new matrix is $\mathbf M'=\mathbf R\mathbf M\mathbf R^{-1}$.
::::

The linear map has not changed; only its matrix representation has. Read the product from right to left: return to the original coordinates with $\mathbf R^{-1}$, apply $\mathbf M$, and convert the result into the new coordinates with $\mathbf R$.

For diagonalization, the new coordinates are the eigenvector coefficients. Since $\mathbf S$ maps eigenvector coordinates to original coordinates, the coordinate-change matrix in the theorem is

```{math}
\mathbf R=\mathbf S^{-1}.
```

Therefore the general expression $\mathbf R\mathbf M\mathbf R^{-1}$ becomes

```{math}
\mathbf S^{-1}\mathbf M\mathbf S=\mathbf D.
```

This is the precise connection between a general similarity transformation and diagonalization.

## What diagonalization gives us

### Powers of a matrix

A diagonal matrix is easy to raise to a nonnegative integer power:

```{math}
\mathbf D^p=
\begin{pmatrix}\lambda_1^p&0\\0&\lambda_2^p\end{pmatrix}.
```

Since $\mathbf M=\mathbf S\mathbf D\mathbf S^{-1}$, the adjacent factors $\mathbf S^{-1}\mathbf S$ cancel when we multiply copies of $\mathbf M$. Thus

```{math}
\mathbf M^p=\mathbf S\mathbf D^p\mathbf S^{-1}.
```

We can calculate in the eigenvector basis and then transform back.

### Trace and determinant

Two simple quantities provide useful checks on eigenvalue calculations. The trace is the sum of the diagonal entries,

```{math}
\operatorname{tr}(\mathbf M)=\sum_{i=1}^n M_{ii},
```

and the determinant measures the total signed volume scaling of the transformation. Both are unchanged by a similarity transformation.

For the determinant,

```{math}
\det(\mathbf S^{-1}\mathbf M\mathbf S)
=\det(\mathbf S^{-1})\det(\mathbf M)\det(\mathbf S)
=\det(\mathbf M).
```

For the trace, use the cyclic identity

```{math}
\operatorname{tr}(\mathbf A\mathbf B)
=\operatorname{tr}(\mathbf B\mathbf A),
```

which follows directly from

```{math}
\operatorname{tr}(\mathbf A\mathbf B)
=\sum_{i,j}A_{ij}B_{ji}
=\sum_{j,i}B_{ji}A_{ij}.
```

Therefore,

```{math}
\operatorname{tr}(\mathbf S^{-1}\mathbf M\mathbf S)
=\operatorname{tr}(\mathbf M\mathbf S\mathbf S^{-1})
=\operatorname{tr}(\mathbf M).
```

If $\mathbf M$ is diagonalizable, we can evaluate these quantities in the eigenvector basis:

```{math}
\boxed{
\operatorname{tr}(\mathbf M)=\sum_{j=1}^n\lambda_j,
\qquad
\det(\mathbf M)=\prod_{j=1}^n\lambda_j
}.
```

Eigenvalues are counted with multiplicity. These two identities remain true even when a matrix is not diagonalizable; the general proof follows from the coefficients of its characteristic polynomial.

### Checking normal-mode frequencies

For two equal masses and three equal springs, the equations of motion are $\ddot{\mathbf x}=-\mathbf A\mathbf x$, with

```{math}
\mathbf A=\frac{k}{m}
\begin{pmatrix}2&-1\\-1&2\end{pmatrix}.
```

Its eigenvalues are the squared angular frequencies. Before solving for either mode, the trace tells us

```{math}
\omega_1^2+\omega_2^2=\operatorname{tr}(\mathbf A)=\frac{4k}{m}.
```

If we have found $\omega_1^2=k/m$, the other must be $\omega_2^2=3k/m$. The determinant provides a second check:

```{math}
\omega_1^2\omega_2^2=\det(\mathbf A)=3\left(\frac{k}{m}\right)^2.
```

These identities are also useful for checking eigenvalues returned by a numerical calculation.

## Questions

::::{admonition} Question 1

Given the matrix $\mathbf{M} = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$, find its eigenvalues and eigenvectors. Then, construct the matrix $\mathbf{S}$ using these eigenvectors and verify that $\mathbf{S}^{-1} \mathbf{M} \mathbf{S}$ is a diagonal matrix.

::::

::::{admonition} Question 2

Let $\mathbf{M} = \begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$.

- \(a\) Find the eigenvalues and eigenvectors of $\mathbf{M}$.

- \(b\) Construct a matrix $\mathbf{S}$ from the eigenvectors and use it to diagonalize $\mathbf{M}$ by finding $\mathbf{S}^{-1} \mathbf{M} \mathbf{S}$.

::::

::::{admonition} Question 3: Diagonalizing the detuned normal-mode problem

Continue with the two-mass, three-spring system from Question 1 of the Normal Modes homework. Using

```{math}
k_1=k(1-\delta),
\qquad
k_3=k(1+\delta),
\qquad
k_2=\kappa k,
```

the equations of motion are

```{math}
\ddot{\mathbf x}=-\mathbf A(\delta)\mathbf x,
\qquad
\frac{m}{k}\mathbf A(\delta)=
\begin{pmatrix}
1+\kappa-\delta&-\kappa\\
-\kappa&1+\kappa+\delta
\end{pmatrix}.
```

You previously found the dimensionless eigenvalues

```{math}
\mu_\pm(\delta)=1+\kappa\pm\sqrt{\delta^2+\kappa^2}
```

and corresponding normalized eigenvectors $\mathbf v_-(\delta)$ and $\mathbf v_+(\delta)$.

1. Form the matrix

   ```{math}
   \mathbf S(\delta)=
   [\,\mathbf v_-(\delta)\ \mathbf v_+(\delta)\,].
   ```

   Because $\mathbf A$ is real and symmetric, choose the two eigenvectors to be orthonormal. Explain why this gives $\mathbf S^{-1}=\mathbf S^T$.

2. Verify that

   ```{math}
   \mathbf S^T\left(\frac{m}{k}\mathbf A\right)\mathbf S
   =\begin{pmatrix}\mu_-&0\\0&\mu_+\end{pmatrix}.
   ```

   Then define the normal-mode coordinates $\mathbf q=\mathbf S^T\mathbf x$ and show that the coupled equations become

   ```{math}
   \ddot{\mathbf q}
   =-\frac{k}{m}
   \begin{pmatrix}\mu_-&0\\0&\mu_+\end{pmatrix}
   \mathbf q.
   ```

3. At zero detuning, show that the normal-mode coordinates are the symmetric and antisymmetric combinations

   ```{math}
   q_-=\frac{x_1+x_2}{\sqrt2},
   \qquad
   q_+=\frac{x_1-x_2}{\sqrt2},
   ```

   up to an overall sign for either eigenvector.

4. Now follow $\mathbf S(\delta)$ from negative to positive detuning. Far from the avoided crossing, what physical displacements do $q_-$ and $q_+$ primarily represent? Near $\delta=0$, why does each coordinate involve both masses? Connect this changing coordinate transformation to the exchange of mode character in your projection-colored eigenvalue plot.

::::
