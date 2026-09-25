---
title: "Group Theory and Continuous Transformations"
---

# Group Theory and Continuous Transformations

## A collection of actions

Think of the things we can do to an object: rotate it, translate it, or exchange two identical parts. We can perform one action and then another. We can ask which action does nothing, and which action undoes a previous one.

Group theory studies this structure of combining actions. The elements need not be numbers or matrices; what matters is how they combine. This gives us a common language for rotations, permutations, and symmetries of molecules.

Let's first define a group, then use rotations, integers, and permutations to see what the definition means.

::::{prf:definition} Group
A group is a set $G$ together with an operation, written $ab$, satisfying:

1. Closure: if $a,b\in G$, then $ab\in G$.
2. Associativity: $(ab)c=a(bc)$.
3. Identity: there is an element $e$ such that $ea=ae=a$ for every $a$.
4. Inverses: each $a$ has an element $a^{-1}$ such that $aa^{-1}=a^{-1}a=e$.
::::

The letters $a,b$ stand for arbitrary group elements, and $e$ denotes the identity. Depending on the group, $e$ may be $0$ (addition), $1$ (multiplication of numbers), or $\mathbf I$ (matrix multiplication).

The operation need not be ordinary multiplication. For transformations, it is composition: $ab$ means do $b$ first, then $a$.

Associativity is not the same as commutativity. Associativity changes the parentheses without changing the order. If $ab=ba$ for every pair, the group is called abelian, or commutative. Otherwise it is nonabelian.

## Examples of groups

### Four quarter-turns

Consider the set $\{1,i,-1,-i\}$ under multiplication. These represent rotations through multiples of a quarter-turn. Their multiplication table is

| $\times$ | $1$ | $i$ | $-1$ | $-i$ |
|---|---|---|---|---|
| $1$ | $1$ | $i$ | $-1$ | $-i$ |
| $i$ | $i$ | $-1$ | $-i$ | $1$ |
| $-1$ | $-1$ | $-i$ | $1$ | $i$ |
| $-i$ | $-i$ | $1$ | $i$ | $-1$ |

Every entry stays in the set. The identity is $1$, and each element has an inverse; in particular, $i^{-1}=-i$. Associativity comes from complex multiplication.

All four elements are powers of $i$, with $i^4=1$. This is the cyclic group $C_4$. Here $i$ is called a generator because repeated multiplication produces the whole group. Later we will meet the related, but different, idea of an infinitesimal generator for continuous transformations.

### Integers under addition

The integers form a group under addition. Adding two integers gives an integer; addition is associative; the identity is $0$; and the inverse of $n$ is $-n$. This group is abelian.

```{figure} figures/05b-groups/integers-addition.svg
:name: fig-integer-addition-group
:alt: Integer number lines show addition of 3 followed by minus 2 ending at 1, and addition of 3 followed by minus 3 returning to zero.

Addition moves us along the integer number line. Combining $+3$ and $-2$ gives the integer $1$. Adding the inverse $-3$ after $+3$ returns us to $0$, the identity. The same moves can start from any integer.
```

### Permutations of three objects

Label three objects $1,2,3$. Their six possible permutations form the group $S_3$ under composition. Every permutation can be undone.

Let $a=(12)$ exchange objects 1 and 2, and let $b=(23)$ exchange objects 2 and 3. Track object 1:

```{math}
ab:\ 1\xrightarrow{b}1\xrightarrow{a}2,
\qquad
ba:\ 1\xrightarrow{a}2\xrightarrow{b}3.
```

The results differ, so $ab\ne ba$. This is a finite nonabelian group.

```{figure} figures/05b-groups/permutation-order.svg
:name: fig-permutation-order
:alt: Two diagrams map all three labels through the swaps a=(12) and b=(23). The blue path from label 1 ends at 2 for ab and at 3 for ba.

Read each diagram from left to right, but remember that the rightmost factor in a product acts first. For $ab$, apply $b$ and then $a$; for $ba$, reverse that order. The blue path tracks label $1$, whose different final labels prove that the permutations do not commute. Gray paths show the other two labels.
```

The symmetries of an equilateral triangle provide a geometric version: three rotations, including the identity, and three reflections permute its vertices. This group is isomorphic to $S_3$—there is a one-to-one correspondence preserving composition. Molecular point groups use the same idea: retain only the spatial operations that leave a molecular configuration unchanged, allowing identical atoms to exchange places.

### A non-example: nonnegative integers under addition

The set $\{0,1,2,3,\ldots\}$ is closed under addition, addition is associative, and $0$ is an identity. But $3$ has no additive inverse in this set: we would need $-3$. Therefore this set is not a group under addition.

The set and the operation must both be specified. The integers under addition form a group, but the integers under multiplication do not: for example, $2$ has no multiplicative inverse among the integers.

## Continuous transformations and generators

Unlike the discrete quarter-turn group, a continuous rotation can be made arbitrarily small. To define a generator by a derivative, we consider a differentiable family of matrices. We focus first on a single real parameter; rotations about different axes will require different generators.

### From a small change to a finite transformation

A rotation through a finite angle can be built from many small rotations. More generally, suppose $\mathbf T(t)$ describes a continuous family of transformations satisfying the **identity and composition laws**

```{math}
\underbrace{\mathbf T(0)=\mathbf I}_{\text{identity law}},
\qquad
\underbrace{\mathbf T(t+s)=\mathbf T(t)\mathbf T(s)}_{\text{composition law}}.
```

Here $t,s\in\mathbb R$. In particular, $\mathbf T(t)\mathbf T(-t)=\mathbf T(0)=\mathbf I$, so each transformation has an inverse. This is called a **one-parameter group** of transformations. The parameter might be time or angle: adding parameters corresponds to composing transformations. We assume the family is smooth in this parameter. Near zero, write

```{math}
\mathbf T(\delta t)=\mathbf I+\delta t\,\mathbf G+O(\delta t^2),
\qquad
\mathbf G=\left.\frac{d\mathbf T}{dt}\right|_{t=0}.
```

The matrix $\mathbf G$ is the **generator**: it specifies the first change away from the identity. To advance the transformation from $t$ to $t+\delta t$, compose the transformation already accumulated, $\mathbf T(t)$, with one additional infinitesimal step, $\mathbf T(\delta t)$.

::::{prf:theorem} Differential equation generated by $\mathbf G$
If $\mathbf T(t)$ is a differentiable one-parameter group and

```{math}
\mathbf G=\left.\frac{d\mathbf T}{dt}\right|_{t=0},
```

then

```{math}
\boxed{\frac{d\mathbf T}{dt}=\mathbf G\mathbf T(t)},
\qquad \mathbf T(0)=\mathbf I.
```
::::

::::{prf:proof}
The composition law gives

```{math}
\mathbf T(t+\delta t)=\mathbf T(\delta t)\mathbf T(t).
```

Therefore

```{math}
\begin{aligned}
\frac{\mathbf T(t+\delta t)-\mathbf T(t)}{\delta t}
&=\frac{\mathbf T(\delta t)\mathbf T(t)-\mathbf I\mathbf T(t)}{\delta t}\\
&=\left[\frac{\mathbf T(\delta t)-\mathbf I}{\delta t}\right]\mathbf T(t).
\end{aligned}
```

Taking the limit $\delta t\to0$ gives

```{math}
\frac{d\mathbf T}{dt}
=\left.\frac{d\mathbf T}{dt}\right|_{t=0}\mathbf T(t)
=\mathbf G\mathbf T(t).
```
::::

Thus $\mathbf T(t)$ describes the finite transformation accumulated so far, while $\mathbf G$ gives its instantaneous rate of change. A single matrix $\mathbf G$ therefore determines the whole family. We now solve the differential equation that relates them.

### The matrix exponential as evolution

The previous section reduced the composition law to the initial-value problem

```{math}
\boxed{
\frac{d\mathbf T}{dt}=\mathbf G\mathbf T(t),
\qquad
\mathbf T(0)=\mathbf I.}
```

For the scalar equation $dx/dt=gx$ with $x(0)=1$, the solution is $x(t)=e^{tg}$. The matrix equation has the same form, so this suggests

```{math}
\mathbf T(t)=e^{t\mathbf G}.
```

We can verify this directly using the power-series definition:

```{math}
e^{t\mathbf G}
=\mathbf I+t\mathbf G+\frac{t^2\mathbf G^2}{2!}
+\frac{t^3\mathbf G^3}{3!}+\cdots.
```

Differentiating term by term gives

```{math}
\frac{d}{dt}e^{t\mathbf G}=\mathbf G e^{t\mathbf G},
\qquad e^{0\mathbf G}=\mathbf I.
```

These are exactly the differential equation and initial condition derived above. Therefore

```{math}
\boxed{\mathbf T(t)=e^{t\mathbf G}}.
```

The same result can be understood as the limit of many small transformation steps:

```{math}
e^{t\mathbf G}=\lim_{N\to\infty}
\left(\mathbf I+\frac{t}{N}\mathbf G\right)^N.
```

The parameter times the generator must be dimensionless. For time evolution, $\mathbf G$ has units of inverse time.

## Planar rotations as a worked example

::::{prf:example} Rotation transformations

Let us apply the construction to planar rotations. Their composition adds angles, so the angle plays the role of the parameter $t$. For the planar rotation matrix,

```{math}
\mathbf R[\theta]=
\begin{pmatrix}\cos\theta&-\sin\theta\\
\sin\theta&\cos\theta\end{pmatrix},\qquad
\mathbf G=\left.\frac{d\mathbf R}{d\theta}\right|_0
=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.
```

Since $\mathbf G^2=-\mathbf I$, the even and odd powers of its exponential separate:

```{math}
e^{\theta\mathbf G}
=\mathbf I\cos\theta+\mathbf G\sin\theta
=\mathbf R[\theta].
```

This is the matrix version of Euler's formula. The generator plays the algebraic role of $i$: applying it twice gives minus the identity.
::::

### SO(2), U(1), and representations

Unlike four quarter-turns, all planar rotations form a continuous family. The complex numbers of unit magnitude form

```{math}
\mathrm U(1)=\{e^{i\theta}:\theta\in\mathbb R\}.
```

Angles differing by $2\pi$ describe the same element. Multiplication is closed and associative; the identity is $1$; and the inverse of $e^{i\theta}$ is $e^{-i\theta}$. This is an abelian group.

The real rotation matrices in the example obey

```{math}
\mathbf R[\alpha]\mathbf R[\beta]=\mathbf R[\alpha+\beta],
\qquad
\mathbf R[0]=\mathbf I,
\qquad
\mathbf R[\theta]^{-1}=\mathbf R[-\theta].
```

The matrices are orthogonal and have determinant one. Their group is SO(2): special orthogonal matrices in two dimensions.

The correspondence $e^{i\theta}\leftrightarrow\mathbf R[\theta]$ preserves multiplication and is one-to-one, so U(1) and SO(2) are isomorphic. They express the same group structure using different mathematical objects.

A matrix representation assigns matrices to group elements while preserving their multiplication:

```{math}
D(ab)=D(a)D(b).
```

Different representations can act on different vector spaces. Not every representation is one-to-one.

### Matrix groups

All real $n\times n$ matrices under multiplication do not form a group, because singular matrices have no inverse. Restrict to invertible matrices and we obtain the general linear group $\mathrm{GL}(n,\mathbb R)$.

Closure follows from

```{math}
\det(\mathbf A\mathbf B)=\det(\mathbf A)\det(\mathbf B)\ne0.
```

The identity and inverses are included, and matrix multiplication is associative.

Orthogonal matrices form a smaller group, O($n$). For two orthogonal matrices,

```{math}
(\mathbf A\mathbf B)^T(\mathbf A\mathbf B)
=\mathbf B^T\mathbf A^T\mathbf A\mathbf B=\mathbf I.
```

Requiring determinant $+1$ gives SO($n$). Such a group contained in another group, with the same operation, is called a subgroup.

Reflections alone are not a group. The product of two reflections has determinant $+1$, so it is not another reflection. Also the identity is not a reflection. The full orthogonal group includes both orientation-preserving and orientation-reversing operations.

Unitary matrices similarly form U($n$), and those with determinant one form SU($n$). We can now ask what restrictions these length-preserving groups place on their generators.

## Unitary transformations and Hermitian generators

What must the generator look like if every transformation $\mathbf U(t)$ is unitary? For a small parameter step $\delta t$,

```{math}
\mathbf U(\delta t)
=\mathbf I+\delta t\,\mathbf G+O(\delta t^2),
\qquad
\mathbf U^\dagger(\delta t)
=\mathbf I+\delta t\,\mathbf G^\dagger+O(\delta t^2).
```

Now impose the unitary condition $\mathbf U^\dagger\mathbf U=\mathbf I$:

```{math}
\begin{aligned}
\mathbf U^\dagger(\delta t)\mathbf U(\delta t)
&=\left(\mathbf I+\delta t\,\mathbf G^\dagger\right)
  \left(\mathbf I+\delta t\,\mathbf G\right)
  +O(\delta t^2)\\
&=\mathbf I+\delta t\left(\mathbf G^\dagger+\mathbf G\right)
  +O(\delta t^2).
\end{aligned}
```

This must equal $\mathbf I$ for arbitrarily small $\delta t$. Subtracting $\mathbf I$, dividing by $\delta t$, and taking the limit $\delta t\to0$ gives

```{math}
\mathbf G^\dagger+\mathbf G=0.
```

The derivative generator is anti-Hermitian. It is often more convenient to write it in terms of a Hermitian matrix $\mathbf J$:

```{math}
\mathbf G=-i\mathbf J,\qquad
\mathbf J^\dagger=\mathbf J,\qquad
\mathbf U(t)=e^{-it\mathbf J}.
```

We will use this minus-sign convention here. One can instead use $e^{+it\mathbf J}$, but then the corresponding generator changes sign.

::::{prf:theorem} A Hermitian generator produces unitary transformations
If $\mathbf J^\dagger=\mathbf J$ and $t$ is real, then $e^{-it\mathbf J}$ is unitary.
::::

::::{prf:proof}
Let

```{math}
\mathbf U=e^{-it\mathbf J}
=\sum_{n=0}^{\infty}\frac{(-it\mathbf J)^n}{n!}
=\mathbf I-it\mathbf J+\frac{(-it)^2}{2!}\mathbf J^2+\cdots.
```

Now take the dagger term by term. Because $t$ is real, $(-it)^*=it$. Because $\mathbf J$ is Hermitian,

```{math}
(\mathbf J^n)^\dagger=(\mathbf J^\dagger)^n=\mathbf J^n.
```

Therefore

```{math}
\begin{aligned}
\mathbf U^\dagger
&=\left(\sum_{n=0}^{\infty}
\frac{(-it)^n\mathbf J^n}{n!}\right)^\dagger\\
&=\sum_{n=0}^{\infty}
\frac{\bigl((-it)^n\bigr)^*(\mathbf J^n)^\dagger}{n!}\\
&=\sum_{n=0}^{\infty}\frac{(it)^n\mathbf J^n}{n!}\\
&=e^{it\mathbf J}.
\end{aligned}
```

The exponents $it\mathbf J$ and $-it\mathbf J$ commute because both are multiples of the same matrix. We may therefore combine them:

```{math}
\begin{aligned}
\mathbf U^\dagger\mathbf U
&=e^{it\mathbf J}e^{-it\mathbf J}\\
&=e^{it\mathbf J-it\mathbf J}\\
&=e^{\mathbf 0}=\mathbf I.
\end{aligned}
```

Thus $\mathbf U$ is unitary.
::::

For the planar example, $\mathbf J=i\mathbf G$ is Hermitian and $\mathbf R[\theta]=e^{-i\theta\mathbf J}$ is still real. Complex notation does not force the resulting transformation to be complex.

An eigenvector of $\mathbf J$ with eigenvalue $j$ acquires the phase $e^{-itj}$. The generator's eigenvalues specify the rates at which the components change phase.

## Commutators and order

::::{prf:theorem} Commuting generators give commuting transformations
Let $\mathbf J_1$ and $\mathbf J_2$ be Hermitian matrices with $\mathbf J_1\mathbf J_2=\mathbf J_2\mathbf J_1$. Then, for any real $s,t$,

```{math}
e^{-is\mathbf J_1}e^{-it\mathbf J_2}
=e^{-it\mathbf J_2}e^{-is\mathbf J_1}
=e^{-i(s\mathbf J_1+t\mathbf J_2)}.
```
::::

::::{prf:proof}
Set $\mathbf A=-is\mathbf J_1$ and $\mathbf B=-it\mathbf J_2$. Since $\mathbf A\mathbf B=\mathbf B\mathbf A$, every power of $\mathbf A$ commutes with every power of $\mathbf B$. Expanding the exponentials therefore lets us exchange their order term by term:

```{math}
\begin{aligned}
e^{\mathbf A}e^{\mathbf B}
&=\sum_{m,n\geq0}\frac{\mathbf A^m\mathbf B^n}{m!n!}\\
&=\sum_{m,n\geq0}\frac{\mathbf B^n\mathbf A^m}{m!n!}
=e^{\mathbf B}e^{\mathbf A}.
\end{aligned}
```

The ordinary binomial expansion is also valid when $\mathbf A$ and $\mathbf B$ commute, so this same double sum equals $e^{\mathbf A+\mathbf B}$. Replacing $\mathbf A$ and $\mathbf B$ gives the claimed result.
::::

So two commuting generators give transformations that can be applied in either order. We can also combine them into one exponential. What happens when we do not know whether the generators commute? The difference between the two possible matrix products is called their *commutator*:

```{math}
[\mathbf A,\mathbf B]=\mathbf A\mathbf B-\mathbf B\mathbf A.
```

To test when two small transformations can be brought into a single exponent, compare $e^{\epsilon\mathbf A}e^{\epsilon\mathbf B}$ with $e^{\epsilon(\mathbf A+\mathbf B)}$. The parameter $\epsilon$ lets us find the first term where they differ.

::::{prf:theorem} When can we combine two matrix exponentials?
For square matrices $\mathbf A$ and $\mathbf B$ of the same size,

```{math}
e^{\epsilon\mathbf A}e^{\epsilon\mathbf B}
=e^{\epsilon(\mathbf A+\mathbf B)}
\quad\text{for all sufficiently small real }\epsilon
```

if and only if $[\mathbf A,\mathbf B]=\mathbf0$.
::::

::::{prf:proof}
Expand both sides through second order:

```{math}
\begin{aligned}
e^{\epsilon\mathbf A}e^{\epsilon\mathbf B}
&=\mathbf I+\epsilon(\mathbf A+\mathbf B)
+\frac{\epsilon^2}{2}(\mathbf A^2+2\mathbf A\mathbf B+\mathbf B^2)
+O(\epsilon^3),\\
e^{\epsilon(\mathbf A+\mathbf B)}
&=\mathbf I+\epsilon(\mathbf A+\mathbf B)
+\frac{\epsilon^2}{2}(\mathbf A^2+\mathbf A\mathbf B+\mathbf B\mathbf A+\mathbf B^2)
+O(\epsilon^3).
\end{aligned}
```

Subtracting gives

```{math}
e^{\epsilon\mathbf A}e^{\epsilon\mathbf B}
-e^{\epsilon(\mathbf A+\mathbf B)}
=\frac{\epsilon^2}{2}[\mathbf A,\mathbf B]+O(\epsilon^3).
```

If the exponentials are equal for all sufficiently small $\epsilon$, divide by $\epsilon^2$ and take $\epsilon\to0$. The commutator must vanish. Conversely, if the matrices commute, their powers can be rearranged as in the previous proof, and the exponentials combine for every $\epsilon$.
::::

Equality at just one value of $\epsilon$ does not imply that the matrices commute. The theorem concerns the whole family near zero. The permutation example showed that changing the order of two actions can change the result; here the commutator captures that effect for small matrix transformations.

A useful way to isolate it is to perform a small sequence and then reverse the individual steps:

```{math}
e^{\epsilon\mathbf A}e^{\epsilon\mathbf B}
e^{-\epsilon\mathbf A}e^{-\epsilon\mathbf B}
=\mathbf I+\epsilon^2[\mathbf A,\mathbf B]+O(\epsilon^3).
```

The rightmost factor acts first. If the generators commute, the sequence returns exactly to the starting point. Otherwise a second-order change remains.

## Noether's theorem: symmetry and conservation

Why do we have conservation laws at all? Energy, momentum, and angular momentum can look like three separate rules. In 1918, the mathematician Emmy Noether showed that they have a common origin. In her paper [*Invariant Variation Problems*](https://arxiv.org/abs/physics/0503066), written amid work on the mathematical foundations of general relativity, she connected continuous symmetries to conservation laws.

```{figure} figures/05b-groups/emmy-noether.jpg
:name: fig-emmy-noether-portrait
:alt: Black-and-white portrait of Emmy Noether as a young woman, standing beside a chair.
:width: 28%

Emmy Noether, around 1900. Photograph: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Noether.jpg), public domain.
```

The idea is fundamental to how we describe the physical universe: when the action governing a system is unchanged by a continuous transformation, a corresponding quantity is conserved. If the laws are the same after shifting an experiment in space, the corresponding quantity is momentum. Rotational symmetry gives angular momentum; symmetry under a shift in time gives energy. A symmetry can be broken by the surroundings, so the associated conservation statement must be checked for the system being studied.

```{figure} figures/05b-groups/noether-symmetry-conservation.svg
:name: fig-noether-symmetry-conservation
:alt: Three panels show the same experiment started later, moved in space, or rotated, linking each unchanged dynamics to energy, momentum, or angular momentum conservation.
:width: 100%

Three continuous symmetries and their conserved quantities. The sketches compare transformed experiments; they do not say that a particle's position or state stays fixed. The governing dynamics must be unchanged by the transformation.
```

Unlike the discrete turns of an equilateral triangle, these transformations can be made arbitrarily small. We will not derive Noether's general theorem from the classical action here. Instead, we can see its quantum counterpart using the generators we have just introduced: a generator of a continuous symmetry is conserved during the system's evolution.

::::{prf:theorem} Continuous symmetry and conservation (quantum form)
Let $\mathbf H$ be a time-independent Hamiltonian, and let the time-independent Hermitian operator $\mathbf Q$ generate a family of transformations

```{math}
\mathbf U(s)=e^{-is\mathbf Q/\hbar}.
```

The product $s\mathbf Q/\hbar$ is dimensionless. For a rotation, $s$ is an angle and $\mathbf Q/\hbar$ is the dimensionless Hermitian generator $\mathbf J$ used above.

If $\mathbf U(s)\mathbf H\mathbf U(s)^\dagger=\mathbf H$ for every real $s$, then $\langle\mathbf Q\rangle$ is constant in time for any state evolving under $\mathbf H$.
::::

Why does invariance give conservation? Differentiate the symmetry condition at $s=0$. Since $\mathbf U(0)=\mathbf I$, we get

```{math}
\left.\frac{d}{ds}\bigl(\mathbf U(s)\mathbf H\mathbf U(s)^\dagger\bigr)\right|_{s=0}
=\frac{i}{\hbar}[\mathbf H,\mathbf Q]=\mathbf 0.
```

The generator therefore commutes with the Hamiltonian. The Schrödinger equation then gives

```{math}
\frac{d}{dt}\langle\mathbf Q\rangle
=\frac{i}{\hbar}\langle[\mathbf H,\mathbf Q]\rangle=0.
```

Question 3 below asks you to fill in both steps. For example, if the dynamics are unchanged by rotations about $z$, the conserved quantity is the $z$ component of angular momentum. Symmetry about one axis does not by itself imply conservation of the other components.


## Homework

### Identifying groups

::::{admonition} Question 1: Which of these are groups?

For each set and operation below, decide whether it forms a group. If it does, explain closure and associativity, identify the identity, and explain how to find an inverse for each element. If it does not, identify at least one axiom that fails and give a specific example of the failure.

1. The odd integers $\{\ldots,-3,-1,1,3,\ldots\}$ under addition.
2. The even integers $\{\ldots,-4,-2,0,2,4,\ldots\}$ under multiplication.
3. All real $2\times2$ matrices under matrix multiplication.
4. All invertible real $2\times2$ matrices under matrix multiplication.


::::

::::{admonition} Question 2: Permutations and symmetries of a triangle

Label the vertices of an equilateral triangle $A,B,C$ in counterclockwise order. A *symmetry* is a rotation or reflection that leaves the triangle in the same position, though it may exchange the labeled vertices. The six possible permutations of the vertices are

```{math}
e,\quad (ABC),\quad (ACB),\quad (AB),\quad (AC),\quad (BC).
```

Here $e$ leaves every vertex fixed, $(ABC)$ sends $A\to B$, $B\to C$, and $C\to A$, and $(AB)$ exchanges $A$ and $B$ while fixing $C$.

1. For each of the six permutations listed above, write down where it sends $A$, $B$, and $C$.
2. Match each permutation to a symmetry of the triangle. Which are rotations, and which are reflections? For each reflection, say which vertex stays fixed.

These are two descriptions of the same group structure. We say two groups are **isomorphic** if we can match their elements one-to-one in a way that preserves how they combine. Here, each triangle symmetry matches a permutation of its vertices, and performing two symmetries in order gives the same vertex permutation as composing their matching permutations in that order.

::::

### Generators and continuous transformations

::::{admonition} Question 3: Symmetry implies a conserved quantity

A continuous symmetry leaves a system's Hamiltonian unchanged. Suppose a family of unitary transformations is generated by a time-independent Hermitian observable $\mathbf Q$:

```{math}
\mathbf U(s)=e^{-is\mathbf Q/\hbar},
\qquad
\mathbf U(s)\mathbf H\mathbf U(s)^\dagger=\mathbf H
```

for every real $s$. The parameter has units such that $s\mathbf Q/\hbar$ is dimensionless. For rotations, $s$ is an angle and $\mathbf Q$ is an angular-momentum component. We use $\mathbf Q$ here to distinguish the Hermitian observable from the derivative generator $\mathbf G=-i\mathbf Q/\hbar$ used earlier. Assume $\mathbf H$ is Hermitian and time independent.

1. Expand $\mathbf U(s)$ and $\mathbf U(s)^\dagger$ to first order in $s$. Multiply $\mathbf U(s)\mathbf H\mathbf U(s)^\dagger$, keep the terms through first order, and use the symmetry condition to show that $[\mathbf Q,\mathbf H]=\mathbf0$.
2. The normalized state obeys the Schrödinger equation

   ```{math}
   i\hbar\frac{d}{dt}|\psi(t)\rangle=\mathbf H|\psi(t)\rangle.
   ```

   Take its conjugate transpose, using $\mathbf H^\dagger=\mathbf H$, to find the equation for $d\langle\psi|/dt$. Then differentiate $\langle\mathbf Q\rangle=\langle\psi|\mathbf Q|\psi\rangle$, using the product rule, to derive

   ```{math}
   \frac{d}{dt}\langle\mathbf Q\rangle
   =\frac{i}{\hbar}\langle\psi|[\mathbf H,\mathbf Q]|\psi\rangle.
   ```

3. Combine your results to show that $\langle\mathbf Q\rangle$ is constant in time for every initial state. If a Hamiltonian is invariant under rotations about $z$, what observable does this tell us is conserved?

::::

::::{admonition} Question 4: Translations, momentum, and conservation

Generators can act on functions as well as finite-dimensional vectors. A translation through a distance $a$ in the positive $x$ direction acts on a function by

```{math}
[T(a)f](x)=f(x-a).
```

For example, a peak initially centered at $x=0$ moves to $x=a$. The derivative operator $D=d/dx$ is linear, and its powers act as $D^nf=d^nf/dx^n$. For the Taylor-series steps below, assume the series converges to the translated function at the displacement considered.

1. Verify the identity and composition laws $T(0)=I$ and $T(a+b)=T(a)T(b)$ by applying both sides to a function. Here $I$ is the identity operator on functions.
2. Taylor-expand $f(x-a)$ about $x$. Compare the result term by term with the exponential series to show that

   ```{math}
   T(a)=e^{-aD}.
   ```

3. Differentiate $[T(a)f](x)=f(x-a)$ with respect to $a$. From the result, find $G=\left.dT/da\right|_{a=0}$ and verify $dT/da=GT(a)$. Explain why moving a peak to the right gives a minus sign in $G$.
4. Apply $D$ and $T(a)$ separately to $f(x)=e^{ikx}$, where $k$ is real. Find the eigenvalue in each case and explain why translation changes only the wave's phase. In quantum mechanics, momentum is represented by $\hat p=-i\hbar D$. Rewrite $T(a)$ in terms of $\hat p$, and find the plane wave's momentum eigenvalue.
5. For a free particle of mass $m$, the Hamiltonian is $\hat H=\hat p^2/(2m)$. Show that $\hat H T(a)\psi=T(a)\hat H\psi$ for any sufficiently smooth $\psi$. Why is the free-particle Hamiltonian unchanged by a translation?
6. Take $\hat p$ to be Hermitian and $T(a)$ to be unitary on the wavefunctions considered. Apply the quantum form of Noether's theorem above: what is conserved during free evolution? Does every state have to have a single, definite momentum?
7. The plane wave $\psi_k(x,0)=e^{ikx}$ is an idealized momentum eigenstate. Find its energy, then use the time-dependent Schrödinger equation to find $\psi_k(x,t)$. Explain in what sense this momentum eigenstate is preserved as time passes. (A plane wave is not normalizable on the whole real line.)

::::

::::{admonition} Question 5: A change of reference frame in spacetime

Let's use a continuous transformation to change reference frames. An event is something that happens at one time and place. Two observers moving at constant velocity relative to one another use different inertial frames and can assign different coordinates $(t,x)$ and $(t',x')$ to the same event. A Lorentz boost relates those coordinates; it does not move the event or describe time evolution.

Let the primed frame move at velocity $v$ along the positive $x$ direction relative to the unprimed frame, with $|v|<c$, where $c$ is the speed of light. Their origins coincide at $t=t'=0$ and $x=x'=0$. Write $X=(ct,x)^T$ and $X'=(ct',x')^T$, so each entry has units of length. The boost is $X'=\Lambda(\eta)X$. Its parameter $\eta$, called rapidity, satisfies $\tanh\eta=v/c$. Take this matrix as given:

```{math}
\Lambda(\eta)=
\begin{pmatrix}
\cosh\eta&-\sinh\eta\\
-\sinh\eta&\cosh\eta
\end{pmatrix}.
```

If the hyperbolic functions are new to you, $\cosh\eta=(e^\eta+e^{-\eta})/2$ and $\sinh\eta=(e^\eta-e^{-\eta})/2$. You may use $\cosh^2\eta-\sinh^2\eta=1$.

1. Multiply out $X'=\Lambda(\eta)X$ to find $ct'$ and $x'$. Then use $\tanh\eta=v/c$ and $\cosh^2\eta-\sinh^2\eta=1$ to show that $\cosh\eta=\gamma$ and $\sinh\eta=\gamma v/c$, where $\gamma=1/\sqrt{1-v^2/c^2}$. Write your coordinate transformation in terms of $v$ and $\gamma$.
2. The moving observer stays at $x'=0$. Set $x'=0$ in your result from part 1 and show that this observer's position in the unprimed frame is $x=vt$.
3. Find the generator $G=\left.d\Lambda/d\eta\right|_{\eta=0}$ and check that $G^2=I$. Separate the even and odd powers in $e^{\eta G}$ to recover $\Lambda(\eta)$. For a small $d\eta$, use $X'\approx(I+d\eta\,G)X$ to write the changes in $ct$ and $x$.
4. Substitute your formulas for $ct'$ and $x'$ to show that $c^2t'^2-x'^2=c^2t^2-x^2$. This quantity is the squared spacetime interval from the common origin to the event. The individual coordinates change; what stays the same?
5. Use the exponential form to show that two boosts along $x$ compose as $\Lambda(\eta_2)\Lambda(\eta_1)=\Lambda(\eta_1+\eta_2)$. Which parameter adds, much as angles add for rotations about the same axis?

::::
