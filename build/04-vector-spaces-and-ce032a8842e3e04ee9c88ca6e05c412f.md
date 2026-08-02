# Linear Algebra: Vector Spaces and Matrices

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

After this lecture, you should be able to:

- state the defining axioms of a vector space;
- distinguish span, linear independence, basis, and dimension;
- use inner products, norms, and orthogonality correctly;
- represent a linear map as a matrix after choosing bases; and
- check dimensions and compute matrix-vector and matrix-matrix products.

## Vector spaces


- In mathematics and physics, a *vector space* (also called a *linear space*) is a set whose elements, aka *vectors*, can be added together and multiplied (\"scaled\") by numbers called *scalars*.

- The operations of vector addition and scalar multiplication must satisfy certain requirements, called vector axioms.

- Vector spaces are characterized by their dimension, which, roughly speaking, specifies the number of independent directions in the space.


## Axioms of Vector Spaces

The axioms to be satisfied for every $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$ in vector space *V* , and $\lambda$ and $\mu$ in scalar field *F*:

- Associativity of vector addition: $\mathbf{a}+ (\mathbf{b}+ \mathbf{c}) = (\mathbf{a}+ \mathbf{b}) + \mathbf{c}$

- Commutativity of vector addition: $\mathbf{a}+ \mathbf{b}= \mathbf{b}+ \mathbf{a}$

- Identity element of vector addition: There exists an element $\mathbf{0} \in V$, called the *zero vector*, such that $\mathbf{a}+ \mathbf{0} = \mathbf{a}$ for all $\mathbf{a}\in V$.

- Inverse elements of vector addition: For every $\mathbf{a}\in V$, there
  exists $-\mathbf{a}\in V$ such that
  $\mathbf{a}+(-\mathbf{a})=\mathbf 0$.

- Compatibility of scalar multiplication with field multiplication: $\lambda(\mu \mathbf{a}) = (\lambda \mu)\mathbf{a}$

- Identity element of scalar multiplication: $1 \mathbf{a}= \mathbf{a}$, where 1 denotes the multiplicative identity in *F*.

- Distributivity of scalar multiplication with respect to vector addition: $\lambda(\mathbf{a}+ \mathbf{b}) = \lambda \mathbf{a}+ \lambda \mathbf{b}$.

- Distributivity of scalar multiplication with respect to field addition: $(\lambda + \mu) \mathbf{a}= \lambda \mathbf{a}+ \mu \mathbf{a}$.


## Linear Dependence of Vectors


- Two vectors $\mathbf{v}_1$ and $\mathbf{v}_2$ are *linearly independent* if
  $c_1\mathbf{v}_1+c_2\mathbf{v}_2=\mathbf 0$ implies $c_1=c_2=0$.

- If such scalars exist, the vectors are *linearly dependent*.

- Geometrically, this is just saying that the vectors $\mathbf{v_1}$ and $\mathbf{v_2}$ are linearly independent if they do not lie along the same line.

- This means we cannot express one as a multiple of the other.

- For N-dimensional space, vectors are linearly dependent if there is a set of scalars (not simultaneously zero) such that $c_1\mathbf{v_1} + c_2\mathbf{v_2} + \cdots +c_n\mathbf{v_n} =0$.


## Basis vectors


- If V is an N-dimensional vector space, then any set of N *linearly independent* vectors $\mathbf{e}_1,\mathbf{e}_2, ..., \mathbf{e}_N$ forms a *basis* for *V*.

- If $\mathbf{x}$ is an arbitrary vector in *V*, then the set of $N +1$ vectors $\mathbf{x} , \mathbf{e}_1, \mathbf{e}_2, \cdots , \mathbf{e}_N$, must be linearly dependent, i.e., $\alpha \mathbf{e}_1 +\beta \mathbf{e}_2 + \cdots + \sigma \mathbf{e}_N + \xi \mathbf{x} = 0$, where $\xi \neq 0$.

- Then we can rearrange this as: $\mathbf{x} = (-\alpha /\xi) \mathbf{e}_1  + (- \beta /\xi) \mathbf{e}_2 + \cdots + (-\sigma /\xi) \mathbf{e}_N =
  \sum _{i=1}^N x_i \mathbf{e}_i$

- Since any $\mathbf{x}$ lying in the span of *V* can be expressed in terms of the basis or base vectors $\mathbf{e}_i$, the latter are said to form a *complete set*.

- The *components* $x_i$ of $\mathbf{x}$ with respect to the $\mathbf{e}_i$ basis are unique.

- In a different set $\mathbf{e}'_i$, the same (!!!) $\mathbf{x}$ can be written as: $\mathbf{x} = x'_1 \mathbf{e}'_1  + x'_2 \mathbf{e}'_2 + \cdots + x'_N \mathbf{e}'_N = \sum _{i=1}^N x'_i \mathbf{e}'_i$


## The Inner Product


- The inner product of vectors $\langle \mathbf{a}| \mathbf{b}\rangle$

- The inner product is a generalization of the dot product to abstract vector spaces.

Properties of the inner product

- $\langle \mathbf{a}| \mathbf{b}\rangle = \langle \mathbf{b}| \mathbf{a}\rangle^*$

- $\langle \mathbf{a}| \lambda \mathbf{b}+ \mu \mathbf{c}\rangle = \lambda \langle \mathbf{a}| \mathbf{b}\rangle + \mu \langle \mathbf{a}|\mathbf{c}\rangle$

- Conjugate linearity in the first argument:
  $\langle \lambda\mathbf{a}+\mu\mathbf{b}|\mathbf{c}\rangle
  =\lambda^*\langle\mathbf{a}|\mathbf{c}\rangle
  +\mu^*\langle\mathbf{b}|\mathbf{c}\rangle$.

- And $\langle \lambda \mathbf{a}| \mu \mathbf{b}\rangle = \lambda^* \mu \langle \mathbf{a}| \mathbf{b}\rangle$

Vectors are *orthogonal* if $\langle \mathbf{a}| \mathbf{b}\rangle = 0$

*Norm* of the vector is $|| \mathbf{a}|| = \langle \mathbf{a}| \mathbf{a}\rangle ^{1/2}$


## Orthonormal basis

Useful inequalities

For an inner product,
$\langle\mathbf a|\mathbf a\rangle\geq0$, with equality only for
$\mathbf a=\mathbf 0$. This positive-definiteness is what makes
$\|\mathbf a\|=\sqrt{\langle\mathbf a|\mathbf a\rangle}$ a norm.

- Schwarz's inequality:
```{math}
|\langle \mathbf{a}| \mathbf{b}\rangle| \leq ||\mathbf{a}|| \: || \mathbf{b}||
```


  Note: the equality holds when $\mathbf{a}= \lambda \mathbf{b}$

- The triangle inequality:
```{math}
||\mathbf{a}+ \mathbf{b}|| \leq ||\mathbf{a}|| + ||\mathbf{b}||
```


## Linear operators

- In mathematics, an operator is generally a mapping or function that acts on elements of a space to produce elements of another space (possibly and sometimes required to be the same space).

- A linear operator is a linear transformation between vector spaces (or a vector space and itself). For example, a linear operator $\mathcal{A}$ associates with every vector $\mathbf{x}$ another vector $\mathbf{y} = \mathcal{A} \mathbf{x}$

- Linear operator satisfies properties of additivity (or superposition) and homogeneity: $\mathcal{A} (\lambda \mathbf{a} + \mu \mathbf{b}) = \lambda \mathcal{A} \mathbf{a} + \mu \mathcal{A}\mathbf{b}$

- The action of $\mathcal{A}$ is independent of any basis or coordinate system!


### Matrix elements of a linear operator

Let's introduce the basis $\mathbf{e}_i, \; i = 1,2, \dots, N$

- The action of linear operator $\mathcal{A}$ on each of the basis vectors is to produce a linear combination of them: $\mathcal{A}\mathbf{e}_j  = \sum_{i=1}^N A_{ij} \mathbf{e}_i$

- $A_{ij}$ is the $i$th component of the vector $\mathcal{A}\mathbf{e}_j$ in this basis.

- Collectively, the numbers $A_{ij}$ are called the components of the linear operator in the $\mathbf{e}_i$-basis.

- $\mathbf{y} = \mathcal{A} \mathbf{x}$ becomes (*in this basis*!!!): $\mathbf{y} = \sum_{i=1}^N y_i \mathbf{e}_i = \mathcal{A} \left(  \sum_{j=1}^N x_j \mathbf{e}_j \right) = \sum_{j=1}^N x_j \sum_{i=1}^N A_{ij} \mathbf{e}_i$

- In purely component form, *in this basis* we have: $y_i = \sum_{j=1}^N A_{ij} x_j$

- Note: in a different basis (in which components of $\mathbf{x}$, $\mathbf{y}$, $\mathcal{A}$ are $x'_i$, $y'_i$, $A'_{ij}$, respectively) $\mathbf{y} = \mathcal{A} \mathbf{x}$ becomes $y'_i = \sum_{j=1}^N A'_{ij} x'_j$

- In general, $\mathbf{y}$ and $\mathbf{x}$ might belong to different vector spaces, i.e., $\mathbf{x}$ is in N-dimensional space, and $\mathbf{y}$ in M-dimensional space. Then introduce the basis for $\mathbf{y}$ space: $\mathbf{f}_i$, i=1,2,\...,M. Then, $\mathcal{A}\mathbf{e}_j  = \sum_{i=1}^M A_{ij} \mathbf{f}_i$, where components $A_{ij}$ relate both to bases $\mathbf{e}_i$ and $\mathbf{f}_i$.


### Properties of linear operators

Given: $\mathbf{x}$ is a vector, $\mathcal{A}$ and $\mathcal{B}$ are linear operators

- $(\mathcal{A} + \mathcal{B} )\mathbf{x} =\mathcal{A}\mathbf{x} + \mathcal{B}\mathbf{x}$

- $(\lambda \mathcal{A} )\mathbf{x} = \lambda (\mathcal{A} \mathbf{x})$

- $(\mathcal{A} \mathcal{B} )\mathbf{x} =\mathcal{A} (\mathcal{B}\mathbf{x})$ - action of linear operators is associative

- However, the product of linear operators is in general *not commutative*: $\mathcal{A} \mathcal{B} \mathbf{x} \neq \mathcal{B} \mathcal{A} \mathbf{x}$

- Null operator: $\mathcal{O} \mathbf{x} = \mathbf{0}$

- Identity operator: $\mathcal{I} \mathbf{x} = \mathbf{x}$

- Operators are equal if $\mathcal{A} \mathbf{x} = \mathcal{B} \mathbf{x}$ for all vectors $\mathbf{x}$

- $\mathcal{A}^{-1}$ is *inverse* of $\mathcal{A}$: $\mathcal{A} \mathcal{A}^{-1} = \mathcal{A}^{-1} \mathcal{A} = \mathcal{I}$

- The linear operators that do not possess an inverse are called *singular*, whilst those operators that do have an inverse are termed *non-singular*.


## Matrices

- We saw that vectors and linear operators can be described in terms of their components with respect to a basis. These components may be displayed as an array of numbers called a *matrix*.

- If a linear operator $\mathcal{A}$ transforms vectors from an N-dimensional vector space (with basis $\mathbf{e}_i$, i=1,2,\..., N) into vectors belonging to an M-dimensional vector space (with basis $\mathbf{f}_i$, i=1,2,\..., M), it can be represented by the $M \times N$ matrix:
```{math}
A = \begin{pmatrix}
  A_{11} & A_{12} & \dots & A_{1N}\\
  A_{21} & A_{22} & \dots & A_{2N}\\
  \vdots & \vdots & \ddots & \vdots\\
  A_{M1} & A_{M2} & \dots & A_{MN}
  \end{pmatrix}
```


- If the dimensions of the two vector spaces are the same, i.e. M = N (for example, if they are the same vector space) then we may represent $\mathcal{A}$ by an N × N or *square* matrix of *order N*.


### Vector as a column matrix

- We may denote a vector $\mathbf{x}$ in terms of its components $x_i$ in a basis $\mathbf{e}_i$, i = 1,2,\..., N, as
```{math}
\mathbf{x} = \begin{pmatrix}
  x_1 \\
  x_2 \\
  \vdots \\
  x_N
  \end{pmatrix}
```


- This is called a *column matrix* or a *column vector*.

- Alternative notation as a *transpose* or a *row matrix*: $\text{x} = (x_1 \; x_2 \; \cdots x_N)^T$

- Note (again!) that the *same vector in a different basis will be represented by a different matrix*, i.e., $\text{x}' = (x'_1 \; x'_2 \; \cdots x'_N)^T$


## Vector as a matrix

Basic Matrix Algebra

- Addition of matrices: $\mathbf S=\mathbf A+\mathbf B$ means
  $S_{ij}=A_{ij}+B_{ij}$.

- Matrices must have the same dimensions!

- Matrix addition is commutative and associative.

- Matrix subtraction is analogous:
  $\mathbf S=\mathbf A-\mathbf B$ means $S_{ij}=A_{ij}-B_{ij}$.

- Multiplication by a scalar is distributive and associative:
```{math}
\lambda
  \begin{pmatrix}
  A_{11} & A_{12} &  A_{13}\\
  A_{21} & A_{22} &  A_{23}
  \end{pmatrix}
  =
  \begin{pmatrix}
  \lambda A_{11} & \lambda A_{12} &  \lambda A_{13}\\
  \lambda A_{21} & \lambda A_{22} &  \lambda A_{23}
  \end{pmatrix}
```


## Basic Matrix Algebra

Multiplication of matrices Recall $\mathbf{y} = \mathcal{A} \mathbf{x}$ can be written as $y_i = \sum_{j=1}^N A_{ij} x_j$ (for i = 1,2, \..., M)


```{figure} figures/04-vector-spaces-and-matrices/vec_mat_mult.png
:alt: Matrix-vector multiplication shown as row-by-column dot products
:width: 65%

Matrix-vector multiplication.
```

A particular component: $y_2 = A_{21}x_1 + A_{22}x_2 + \cdots + A_{2N}x_N$


```{figure} figures/04-vector-spaces-and-matrices/vec_mat_mult2.png
:alt: Construction of a selected component in a matrix-vector product
:width: 65%

A selected component of a matrix-vector product.
```

Recall: $A_{ij}$ is the *i*th component of $\text{A}\text{e}_j$ in this basis.


## Multiplication of matrices

cont

- Recall that $\sum_j (\text{A}\text{B})_{ij} x_j = \sum_k  A_{ik} (\text{Bx})_k = \sum_j \sum_k A_{ik} B_{kj} x_j$

- Since $\mathbf{x}$ is arbitrary,
  $(\mathbf A\mathbf B)_{ij}=\sum_k A_{ik}B_{kj}$.

- Then $\text{P} = \text{AB} \leftrightarrow P_{ij} = \sum_{k=1}^N A_{ik} B_{kj}$ for i = 1,2,\...,M, j= 1,2,\...,R


```{figure} figures/04-vector-spaces-and-matrices/mat_mat_mult.png
:alt: Row-by-column construction of a matrix-matrix product
:width: 70%

Each entry of a matrix product is a row-column dot product.
```

## Multiplication of matrices - cont


- For $\mathbf P=\mathbf A\mathbf B$ to be defined, if $\mathbf A$ is
  $M\times N$, then $\mathbf B$ must be $N\times R$. The product is
  $M\times R$.

- The reverse product $\mathbf B\mathbf A$ may have different dimensions or
  may not be defined at all. Even when both products are defined, they are
  generally unequal.

- Generally, $\text{AB} \neq \text{BA}$ even for square matrices!


## Multiplication of matrices - cont (continued)

Null and Identity Matrices

- The *null* or *zero* matrix $\text{0}$ has all elements equal to zero:
```{math}
\text{A0} = \text{0} = \text{0A}
```

```{math}
\mathbf{A}+\mathbf{0}=\mathbf{A}=\mathbf{0}+\mathbf{A}
```


- The *identity* matrix I has the property
```{math}
\text{AI} = \text{IA} = \text{A}
```


- The identity matrix is a square $N \times N$ matrix:
```{math}
\text{I}_N =
  \begin{pmatrix}
  1 & 0 & \dots & 0\\
  0 & 1 & \dots & 0\\
  \vdots & \vdots & \ddots & \vdots\\
  0 & 0 & \dots & 1
  \end{pmatrix}
```


- Elements of the identity matrix: $I_{ij} = \delta_{ij}$

---

*Migration source: `03_Linear_algebra/Matrices1.tex` from the archived Overleaf export.*
