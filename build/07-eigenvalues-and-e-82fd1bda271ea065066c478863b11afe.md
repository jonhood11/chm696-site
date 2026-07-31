# Eigenvalues and Eigenvectors

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Eigenvalue equation


- A matrix transforms a vector space - rotates, squeezes, reflects, and so on.

- However, the matrix can have some characteristic vectors that remain unchanged (up to a scalar) upon matrix action. Such vectors are called the [eigenvectors]{style="color: blue"}.

- It means that $\text{A}\mathbf{x} = \lambda \mathbf{x}$, where $\lambda$ is the [eigenvalue]{style="color: blue"}, corresponding to the eigenvector $x$. $\lambda$ shows how much the eigenvector $x$ is scaled when acted upon by matrix A.

- This equation is called the [eigenvalue equation]{style="color: blue"}.

- It is much simpler to work with matrices in the basis of their eigenvectors.

- So, we need to learn how to:

  - compute matrix eigenvalues and eigenvectors

  - transform the matrix to the basis of its eigenvectors

  - figure out useful properties of eigenvectors and eigenvalues


## Characteristic equation


- Let's write the eigenvalue equation in terms of the identity 
$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix} \mathbf{v} = \lambda \mathbf{v}
$$
 which becomes 
$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix} \mathbf{v} = \begin{pmatrix} \lambda & 0 \\ 0 & \lambda \end{pmatrix} \mathbf{v}.
$$


- Then subtract the right-hand side to get 
$$
\begin{pmatrix} a - \lambda & b \\ c & d - \lambda \end{pmatrix} \mathbf{v} = 0.
$$


- This matrix transforms the vector into the zero vector, effectively collapsing it. I.e., the volume (or area in the 2D case) created by this transformation is also zero. Thus, the determinant of the matrix on the left must be zero: $\det \begin{pmatrix} a - \lambda & b \\ c & d - \lambda \end{pmatrix} = 0$

- This is the [characteristic equation]{style="color: blue"} that we need to solve for $\lambda$.

- The determinant is the [characteristic]{style="color: blue"} or [secular]{style="color: blue"} determinant of A.


## Finding eigenvalues and eigenvectors


- More generally, to find eigenvalues and eigenvectors, we write the characteristic equation: 
$$
|\text{A} - I \lambda| = 0,
$$


- Solving this characteristic equation (which is a polynomial of degree N in the quantity $\lambda$) yields the eigenvalues $\lambda_i$.

- We then use the eigenvalues to solve the system of equations defined by $\text{A} \mathbf{v}_i = \lambda_i \mathbf{v}_i$, determining the eigenvector corresponding to each eigenvalue.

- Note: the eigenvectors are defined up to a constant. Typically, we will normalize them.

- Note: both the eigenvalues and eigenvectors can be complex-valued even for real matrices!


## Finding eigenvalues and eigenvectors: Examples


- Find the eigenvalues and eigenvectors for $\text{A} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$

- Find the eigenvalues and eigenvectors for $\text{A} = \begin{pmatrix} -1 & 3 \\ 0 & 2 \end{pmatrix}$

- Find the eigenvalues and eigenvectors for $\text{A} = \begin{pmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{pmatrix}$


## Change of Basis


- Let's introduce a basis $\mathbf{e}_i, \; i = 1,2,\dots N$, and a vector with components in this basis $\mathbf{x} = (x_1 \; x_2 \; \dots x_n)^T$.

- Now introduce another (new!) basis $\mathbf{e}'_i, \; i = 1,2,\dots N$. It is related to the old basis by a transformation S: 
$$
\mathbf{e}'_j = \sum _{i=1}^N S_{ij}\mathbf{e}_i
$$
.

- In other words, S is the transformation matrix associated with the change of basis.

- [Questions:]{style="color: blue"}

  - What is the representation of vector $\mathbf{x}$ in the new basis?

  - What is the representation of a linear operator (matrix) A in the new basis?


## Change of Basis (continued)


- Q1: What is the representation of vector $\mathbf{x}$ in the new basis? 
$$
\mathbf{x} = \sum _{i=1}^N x_i \mathbf{e}_i = \sum _{j=1}^N x'_j\mathbf{e}'_j = \sum _{j=1}^N x'_j \sum _{i=1}^N  S_{ij}\mathbf{e}_i
$$
. 
$$
x_i =  \sum _{j=1}^N S_{ij} x'_j
$$
 or, in matrix form: $\text{x} = \text{S} \text{x}'$

- Since the vectors $\mathbf{e}'_j$ are linearly independent, the matrix S is non-singular and so possesses an inverse. Then 
$$
\text{x}' = \text{S}^{-1} \text{x}
$$
 which relates the components of $\mathbf{x}$ in the new basis to those in the old basis.

- Note: components of $\mathbf{x}$ transform inversely to the way in which the basis vectors $\mathbf{e}_i$ themselves transform.


## Change of Basis (continued)


- Q2: What is the representation of a linear operator (matrix) A in the new basis?

- Let's write the operator equation in two basis sets: 
$$
\text{y} = \text{A}\text{x}
$$
 
$$
\text{y}' = \text{A}'\text{x}'
$$


- Rewrite the first equation as: 
$$
\text{S} \text{y}' = \text{A} \text{S} \text{x}'
$$
 
$$
\text{y}'= \text{S}^{-1} \text{A} \text{S} \text{x}'
$$
 
$$
\text{A}' = \text{S}^{-1} \text{A} \text{S}
$$


- The last equation is an example of a [similarity transformation]{style="color: blue"}.


## Similarity transformation


- Similarity transformation: $\text{A}' = \text{S}^{-1} \text{A} \text{S}$

- Generally, we should expect that any property of the matrix A that represents some basis-independent property of the linear operator $\mathcal{A}$ will also be shared by the matrix $\text{A}'$.

- If A=I, $\text{A}'$=I.

- The value of the determinant is unchanged.

- The characteristic determinant and hence the eigenvalues of $\text{A}'$ are the same as those of A.

- The value of the trace is unchanged.

- Additionally, if transformation matrix S is unitary, then

  - $\text{A}' = \text{S}^{-1} \text{A} \text{S}  = \text{S}^\dagger \text{A} \text{S}$.

  - If the original basis $\mathbf{e}_i$ is orthonormal, the new basis is also orthonormal.

  - If A is Hermitian (anti-Hermitian) then $\text{A}'$ is also Hermitian (anti-Hermitian).

  - If A is unitary then $\text{A}'$ is unitary.


## Diagonalization of matrices


- Transforming a matrix to a diagonal form, known as [diagonalization]{style="color: blue"}, is useful because diagonal matrices are easier to work with. E.g., it is straightforward to raise a diagonal matrix to a power or apply functions of the matrix (like exponentials).

- Given a matrix A, is there a similarity transformation that creates a diagonal matrix, $\text{S}^{-1} \text{A} \text{S} = \text{D}$? If so, how do we find $S$?

- Consider again basis $\mathbf{e}_i, \; i = 1,2,\dots N$, in which operator $\mathcal{A}$ is represented by matrix A.

- Consider a new basis $\mathbf{x}^j$ given by 
$$
\mathbf{x}^j = \sum _{i=1}^N  S_{ij}\mathbf{e}_i
$$
 where $\mathbf{x}^j$ are [chosen to be the eigenvectors of the linear operator $\mathcal{A}$]{style="color: blue"}: 
$$
\mathcal{A} \mathbf{x}^j = \lambda_j \mathbf{x}^j
$$


## Diagonalization of matrices (continued)


- In the new (eigenvector) basis, $\text{A}' = \text{S}^{-1} \text{A} \text{S}$

- The element $S_{ij}$ gives the *i*th component, in the old (unprimed) basis, of the *j*th eigenvector $\text{x}^j$ of A, i.e., the columns of S are the eigenvectors of the matrix A, i.e., $S_{ij} = (\text{x}^j)_i$

  
:::{note} Original-slide figure pending review
The original lecture refers to `mat_diagonalization1.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

  
$$
(\text{A}')_{ij} = (\text{S}^{-1} \text{A} \text{S})_{ij} = \sum_k \sum_l (\text{S}^{-1})_{ik} A_{kl} S_{lj} =
  \sum_k \sum_l (\text{S}^{-1})_{ik} A_{kl} (\text{x}^j)_{l} = \\
  \sum_k (\text{S}^{-1})_{ik} \lambda_j (\text{x}^j)_{k} =
  \sum_k \lambda_j  (\text{S}^{-1})_{ik} S_{kj} = \lambda_j \delta_{ij}
$$


- So the matrix $\text{A}'$ is diagonal with the eigenvalues of A as the diagonal elements!


## Diagonalization of matrices (continued)


- Since we require S to be non-singular ($|S| \ne 0$), the N eigenvectors of A must be linearly independent and form a basis for the N-dimensional vector space.

- It may be shown that any matrix with *distinct eigenvalues* can be diagonalised by this procedure.

- If, however, a general square matrix has degenerate eigenvalues then it may, or may not, have N linearly independent eigenvectors. If it does not then it cannot be diagonalised.

- For [normal matrices]{style="color: blue"} (i.e., those that commute with their Hermitian conjugates - Hermitian, anti-Hermitian and unitary matrices), N eigenvectors are linearly independent. Moreover, when normalised, these eigenvectors form an orthonormal set.

- Matrix S formed from the orthonormal eigenvectors is unitary. This means that any normal matrix A can be diagonalised by a similarity transformation using a unitary transformation matrix S.


## Using the diagonalization


- A similarity transformation does not change the determinant of a matrix.

- The determinant of a matrix is equal to the product of it's eigenvalues: 
$$
|\text{M}| = \lambda_1 \lambda_2 \cdots \lambda_n = \Pi_i \lambda_i
$$
 The proof is simple: 
$$
|\text{M}'| = | \text{S}^{-1} \text{M} \text{S} |  = |\text{D}| = \Pi_i \lambda_i .
$$


- Show that $(\text{A}')^n =  \text{S}^{-1} \text{A}^n \text{S}$


## Trace of the matrix


- The trace of the matrix is the sum of the eigenvalues: 
$$
\text{Tr}(\text{M}) = \lambda_1 + \lambda_2 + \cdots + \lambda_n
$$


- Cyclic identity of the trace: 
$$
\text{Tr}(\mathbf{A} \mathbf{B} \mathbf{C}) = \text{Tr}(\mathbf{B} \mathbf{C} \mathbf{A}) = \text{Tr}(\mathbf{C} \mathbf{A} \mathbf{B}).
$$
 This cyclic identity says that we can rearrange the matrices as long as the order is the same.

-

-

-


## Orthogonal Vector Space and the Gram-Schmidt Method

Recall: A vector space $\mathbf{u}_i$ is said to be orthogonal if $\mathbf{u}_i^* \cdot \mathbf{u}_j  = 0$ for $i \ne j$. A vector is normalized if $\mathbf{u}_i^*  \cdot \mathbf{u}_i = 1$. An orthonormal set of vectors is both orthogonal and normalized: 
$$
\mathbf{u}_i^* \cdot \mathbf{u}_j = \delta_{ij} .
$$


If given non-orthogonal vectors, how do we make them orthogonal? Here is the Gram-Schmidt method for finding a set of orthogonal vectors:

**Solution: Gram-Schmidt Method**

1.  Step 1: Normalize $\mathbf{a}$ to get the first vector.

2.  Step 2: Subtract from $\mathbf{b}$ its component along $\mathbf{a}$, then normalize: 
$$
\mathbf{b}' = \mathbf{b} - \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{a} \cdot \mathbf{a}} \mathbf{a}
$$


## Eigenvalues and Eigenvectors of Hermitian Matrices


- Symmetric and Hermitian matrices have [real eigenvalues]{style="color: blue"} and [orthogonal eigenvectors]{style="color: blue"}.

- Suppose we have Hermitian $M$: $M^\dagger = M$. We find the set of eigenvectors and eigenvalues of $M$ given by $M \mathbf{v}_i = \lambda_i \mathbf{v}_i$.

- Let's take two of those eigenvectors: 
$$
M \mathbf{v}_i = \lambda_i \mathbf{v}_i, \quad M \mathbf{v}_j = \lambda_j \mathbf{v}_j.
$$


- Now let's take $M$ and multiply on the right by $\mathbf{v}_i$ and multiply by $\mathbf{v}_j^\dagger$ on the left. This gives $\mathbf{v}_j^\dagger M \mathbf{v}_i$

- We can write this in two different ways: 
$$
\mathbf{v}_j^\dagger M \mathbf{v}_i   =  \mathbf{v}_j^\dagger (M \mathbf{v}_i ) = (M^\dagger \mathbf{v}_j )^\dagger  \mathbf{v}_i
$$
 (by using the identity $(A b)^\dagger = (b^\dagger A^\dagger )$. )

- If $M$ is Hermitian then we replace $M^\dagger$ on the right side with $M$, and we get 
$$
\mathbf{v}_j^\dagger (M \mathbf{v}_i ) = (M \mathbf{v}_j )^\dagger  \mathbf{v}_i   .
$$


## Eigenvalues and Eigenvectors of Hermitian Matrices (continued)


$$
\mathbf{v}_j^\dagger (M \mathbf{v}_i ) = (M \mathbf{v}_j )^\dagger  \mathbf{v}_i   .
$$


- Now we can substitute the two eigenvalue equations, and putting both on the same side we get 
$$
(\lambda^*_j - \lambda_i) \, \mathbf{v}_j^\dag \mathbf{v}_i   =0
$$


- Consider $i = j$. Then, 
$$
(\lambda^*_i - \lambda_i) \, \mathbf{v}_i^\dag \mathbf{v}_i   =0  ,
$$
 which tells us $\lambda^*_i = \lambda_i$. The eigenvalues are therefore all real.

- Consider $i \ne j$. Since the eigenvalues are real, we can take away the complex conjugate for the eigenvalue: 
$$
(\lambda_i - \lambda_j) \, \mathbf{v}_j^\dag \mathbf{v}_i   =0  ,
$$


- This tells us that if $\lambda_i \ne \lambda_j$, then $\mathbf{v}_j^\dag \mathbf{v}_i   =0$, which means that the eigenvectors are orthogonal.

---

*Migration source: `03_Linear_algebra/matrix_diagonalization.tex` from the archived Overleaf export.*
