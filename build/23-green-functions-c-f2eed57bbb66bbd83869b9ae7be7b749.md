# Green's Functions: Chemistry Applications

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Inhomogeneous ODE


- Let's consider an inhomogeneous linear equation: 
```{math}
D y(t) = f(t)
```
 $D$ is a linear operator that represents any linear ordinary differential equation (ODE).

- $f(t)$ represents some driving force acting on the system. We can view it as a sum of delta functions: $f(t) = \sum_i c_i \delta(t - t_i)$

- In continuous form, this becomes 
```{math}
f(t) = \int_0^\infty f(t') \delta(t' - t) \, dt'
```


- This representation implies that $f(t)$ can be thought of as a sum of \"kicks\" applied to the system at different times. If we find the response of the system to one of these kicks, then we can just sum up all of these responses for each kick to get the total response. This is the idea of the Green's function.


## Green's function definition


- The Green's function is fundamentally defined as **the response of the linear system to a unit impulse**.

- Here, we define the Green's function as the solution to the ODE with a delta function as the source term.

- The Green's function $G(t, t')$ satisfies: 
```{math}
D y(t) = f(t)
```
 
```{math}
D G(t, t')  = \delta(t - t')
```
 
```{math}
y(t) = \int_0^t G(t, t') f(t') \, dt'
```


- The Green's function $G(t, t')$ represents the system's response to a delta function \"kick\" applied at time $t'$.

- The solution $y(t)$ to the original differential equation can be written as a convolution of the source term $f(t')$ with the Green's function $G(t, t')$.


## System of linear equations


- Let's try to solve matrix equation 
```{math}
(E\mathbf{I} - \mathbf{H})\mathbf{a} = \mathbf{b},
```
 where $E$ is constant, $\mathbf{H}$ is NxN Hermitian matrix, $\mathbf{a}$, $\mathbf{b}$ are vectors.

- The standard approach is to find inverse of $(E\mathbf{I} - \mathbf{H})$: 
```{math}
\mathbf{G}(E) = (E\mathbf{I} - \mathbf{H})^{-1}
```


- If $\mathbf{G}(E)$ is found, the original equation can be solved for any $\mathbf{b}$: 
```{math}
\mathbf{a} = (E\mathbf{I} - \mathbf{H})^{-1}\mathbf{b} = \mathbf{G}(E)\mathbf{b}
```


## Spectral representation


- Recall that the inverse can be found via eigenvalues and eigenvectors of the original matrix, e.g., 
```{math}
\mathbf{A}\mathbf{q}_i = \lambda_i \mathbf{q}_i \; \rightarrow \; \mathbf{A}^{-1} = \mathbf{Q}\Lambda^{-1} \mathbf{Q}^{-1},
```
 where $\mathbf{Q}$ is matrix of eigenvectors and $\Lambda$ is diagonal matrix of eigenvalues.

- Then if $\mathbf{H}\mathbf{C}^{\alpha} = E_{\alpha}\mathbf{C}^{\alpha},$ $\alpha=1,2,\dots,N$: 
```{math}
(\mathbf{G}(E))_{ij} = \sum _{\alpha} \frac{C_i^{\alpha}C_j^{\alpha*}}{E-E_{\alpha}}
```


- Elements of $\mathbf{G}(E)$ \"blow up\" (have poles) when E is equal to eigenvalues of $\mathbf{H}$.

- $\mathbf{G}(E)$ is a Green's function associated with $\mathbf{H}$.


## Inhomogeneous differential equation


- Now consider inhomogeneous differential equation: 
```{math}
(E-\hat{H})a(x) = b(x),
```
 where E - parameter, $\hat{H}$ - Hermitian differential operator.\
  We solve for $a(x)$.

- Assume we know eigenvalues and eigenvectors of $\hat{H}$: 
```{math}
\hat{H} \psi_\alpha (x) = E_{\alpha} \psi_{\alpha}(x)
```


- Expand $a(x)$ and $b(x)$ into eigenstates of $\hat{H}$: 
```{math}
a(x) = \sum_{\alpha} a_{\alpha} \psi_{\alpha}(x)
```
 
```{math}
b(x) = \sum_{\alpha} b_{\alpha} \psi_{\alpha}(x)
```
 Here, we can compute $b_\alpha= \int dx' \psi_\alpha ^*(x') b(x')$.\
  However, we do not know $a_\alpha$ - these need to be determined.


## Inhomogeneous differential equation (continued)


- Plug in $a(x)$ and $b(x)$ into the original equation: 
```{math}
\sum_\alpha a_{\alpha}(E-\hat{H})\psi_{\alpha}(x) = \sum_{\alpha} b_{\alpha} \psi_{\alpha}(x)
```


- Since $\psi_\alpha$ are eigenstates of $\hat{H}$: 
```{math}
\sum_\alpha a_{\alpha}(E-E_\alpha)\psi_{\alpha}(x) = \sum_{\alpha} b_{\alpha} \psi_{\alpha}(x)
```


- Multiplying from left by $\psi_\alpha^*(x)$, integrating and using orthogonality of eigenstates $\psi_\alpha$: 
```{math}
a_{\alpha}(E-E_\alpha) = b_{\alpha}
```


- Solution: 
```{math}
a(x) = \sum_{\alpha} \frac{ b_{\alpha}}{E-E_\alpha}\psi_\alpha(x)=
          \int dx' \Bigl[ \sum_\alpha \frac{\psi_\alpha(x)\psi_\alpha^*(x')}{E-E_\alpha}  \Bigr] b(x')
```


## Inhomogeneous differential equation (continued)


```{math}
a(x) = \sum_{\alpha} \frac{ b_{\alpha}}{E-E_\alpha}\psi_\alpha(x)=
        \int dx' \Bigl[ \sum_\alpha \frac{\psi_\alpha(x)\psi_\alpha^*(x')}{E-E_\alpha}  \Bigr] b(x')
```


- Green's function $G(x,x',E)$: 
```{math}
G(x,x',E) = \sum_\alpha \frac{\psi_\alpha(x)\psi_\alpha^*(x')}{E-E_\alpha}
```


- Then solution can be written as: 
```{math}
a(x) = \int dx' G(x,x',E) b(x')
```


- Similarly to matrix equation, solution to the differential equation with any input (driving force) is known as long as its Green's function is found.

- Similarly to matrix equation, $G$ has poles at $E$ equal to the eigenvalues of $\hat{H}$.


## Inhomogeneous differential equation (continued)


- Suppose $b(x) = \delta(x-x')$

- Then: 
```{math}
a(x) = \int dx" G(x,x",E) \delta(x'-x") =  G(x,x',E)
```


- Substituting in the original differential equation: 
```{math}
(E-\hat{H})G(x,x',E) = \delta(x-x')
```


- This is differential equation for $G(x,x',E)$.

- In matrix form: 
```{math}
(E\mathbf{I} - \mathbf{H})(E\mathbf{I} - \mathbf{H})^{-1} = \mathbf{1}
```


## Perturbation and the Dyson Equation


- Suppose $\hat{H} = \hat{H}_0 + \hat{V}(x)$ and the Green function function associated with $\hat{H}_0$ is known $(G_0(x, x', E))$.

- The Green's function $G$ for $\hat{H}$ satisfies: 
```{math}
(E - \hat{H}_0 - \hat{V}(x))G(x, x'; E) = \delta(x - x')
```


- Rearranging: $(E - \hat{H}_0)G(x, x'; E) = \delta(x - x') + \hat{V}(x)G(x, x'; E)$

- This leads to the **Integral Equation for G**: $G(x, x', E) = G_0(x, x', E) + \int dx'' G_0(x, x'', E) \hat{V}(x'') G(x'', x', E)$

- **Matrix Form:** $G(E) = G_0(E) + G_0(E)VG(E)$

- If $G(E)$ is found, eigenvalues of $H_0 + \hat{V}$ are found by determining poles of $G(E)$

- In operator notations: $\hat{G}(E) = \hat{G}_0(E) + \hat{G}_0(E)\hat{V}\hat{G}(E)$


## The Propagator (Time Domain)

Consider time-dependent SE: $i\hbar \frac{\partial}{\partial t} |\Psi(t)\rangle = \hat{H} |\Psi(t)\rangle$ with known solutions of $\hat{H}$ as $\epsilon_n$ , $\Phi_n$.

Evolution from initial state $|\psi(0)\rangle$: 
```{math}
|\psi(t)\rangle = e^{-iHt/\hbar} |\psi(0)\rangle = \sum_n |\phi_n\rangle e^{-iE_n t/\hbar} \langle \phi_n | \psi(0) \rangle
```


Probability to find a particle at time $t$ at position $x$: 
```{math}
\langle x | \psi(t) \rangle = \int dx' \langle x | e^{-iHt/\hbar} | x' \rangle \langle x' | \psi(0) \rangle
```


This means that the Green's function propagates the wave function in time.


```{math}
\psi(x, t) = \int dx' G(x, x'; t) \psi(x', 0)
```


## The Propagator (Time Domain) (continued)


Green's function in the time domain is related to Green's function in the energy domain (Fourier Transform): 
```{math}
G(x, x', E) = \lim_{\epsilon \to 0} (-i) \int_0^{\infty} dt e^{-\epsilon t} e^{iEt} G(x, x', t)
```
 In operator notations (with $\hbar = 1$)): 
```{math}
G(t) = e^{-\hat{H}t}
```
 
```{math}
G(E) = -i \lim_{\epsilon \to 0} \int_0^{\infty} dt e^{(i(E - \hat{H}) - \epsilon)t} = (E - \hat{H})^{-1}
```


## Many-Particle Systems: Hartree-Fock

Start with the Hartree-Fock model $\hat{H}_0 = \sum_i \hat{f}(i)$

Fock operator: $\hat{f}\chi_i(x) = \epsilon_i \chi_i(x)$

HF Green's function (HFGF): 
```{math}
G_0(x, x', E) = \sum_i \frac{\chi_i(x) \chi_i^*(x')}{E - \epsilon_i} = \sum_{a \in occ} \frac{\chi_a(x) \chi_a^*(x')}{E - \epsilon_a} + \sum_{r \in unocc} \frac{\chi_r(x) \chi_r^*(x')}{E - \epsilon_r}
```
 **Matrix Representation:** 
```{math}
(G_0(E))_{ij} = \iint dx dx' \chi_i^*(x) G_0(x,x',E) \chi_j(x') =  \frac{\delta_{ij}}{E - \epsilon_i}
```
 $G_0$ has poles at HF orbital energies ($\epsilon_i$).


## Many-Particle Systems: Hartree-Fock (continued)


Recall Koopmans' Theorem (assumes frozen orbital approximation): 
```{math}
-IP = \epsilon_c \quad \text{and} \quad -EA = \epsilon_r
```


Exact energies require **orbital Relaxation** and **electron correlation**: 
```{math}
-IP = \epsilon_c - ^{N-1} E_{relax}(c) + (^N E_{corr} - ^{N-1} E_{corr}(c))
```


Exact many-body Green's function (MBGF) should have poles at the exact IPs/EAs.

Exact (or at least improved) $G(E)$ should improve upon Koopmans' theorem IP and EA (and excitation energies if used in the KS DFT framework).

How to obtain improved $G(E)$? $\Rightarrow$ Dyson equation!


## Exact MBGF and Self-Energy


Dyson Equation for Many-Body System: 
```{math}
G(E) = G_0(E) + G_0(E) \Sigma(E) G(E)
```
 $\Sigma(E)$ is the exact **self-energy** in the basis of the HF spin orbitals. It is the effective **energy-dependent** potential.

Recall $G(E) = G_0(E) + G_0(E) V G(E)$ - here $V$ is the energy-independent perturbation.

Dyson equation is formally exact: with exact $\Sigma(E)$, we will find exact $G(E)$ that gives exact IPs and EAs.

Approximations to $\Sigma(E)$ will give approximate theories; $\Sigma(E) = 0$ is HF.


## Solving the Dyson Equation

Perturbation expansion to $\Sigma(E)$: $\Sigma(E) = \Sigma^{(2)}(E) + \Sigma^{(3)}(E) + \dots$

2nd Order Self-Energy resembles the MP2 energy expression

($a, b$ - occupied orbitals, $r,s$ - virtual): 
```{math}
\Sigma_{ij}^{(2)}(E) = \frac{1}{2} \sum_{a,r,s} \frac{\langle rs || ia \rangle \langle ja || rs \rangle}{E + \epsilon_a - \epsilon_r - \epsilon_s} + \frac{1}{2} \sum_{a,b,r} \frac{\langle ab || ir \rangle \langle jr || ab \rangle}{E + \epsilon_r - \epsilon_a - \epsilon_b}
```


Exact MBGF ($E$ and $\Phi$ are exact FCI energies and wavefunctions): 
```{math}
\begin{aligned}
(G(E))_{ii} = \sum_m \frac{\langle ^N\Phi_0 | \hat{a}_i^\dagger | ^{N-1}\Phi_m \rangle \langle ^{N-1}\Phi_m | \hat{a}_i | ^N\Phi_0 \rangle}{E - (^N E_0 - ^{N-1} E_m)} + \\
\sum_p \frac{\langle ^N\Phi_0 | \hat{a}_j | ^{N+1}\Phi_p \rangle \langle ^{N+1}\Phi_p | \hat{a}_i^\dagger | ^N\Phi_0 \rangle}{E - (^{N+1} E_p - ^{N} E_0)}
\end{aligned}
```


**Main advantage of MBGF**:\
Dimensionality of the Dyson equation is KxK, where K is the number of basis functions.


## Solving the Dyson Equation (continued)

Need to solve 
```{math}
G(E) = G_0(E) + G_0(E) \Sigma(E) G(E)
```
\
Multiply by $G_0(E)^{-1}$ on the left and $G(E)^{-1}$ on the right: 
```{math}
G_0(E)^{-1} = G(E)^{-1} + \Sigma(E)
```
 Solving for $G(E)$: $G(E) = [G_0(E)^{-1} - \Sigma(E)]^{-1} = [E\mathbf{1} - \epsilon - \Sigma(E)]^{-1}$\
Poles of $G(E)$ are found by solving: 
```{math}
\det(E\mathbf{1} - \epsilon - \Sigma(E)) = 0
```
 If we ignore off-diagonal elements of $\Sigma(E)$: 
```{math}
\prod_{i} (E - \epsilon_i - \Sigma_{ii}(E)) = 0
```


Iterative solution for $E = \epsilon_i + \Sigma_{ii}(E)$: $E^{(k+1)} = \epsilon_i + \Sigma_{ii}(E^{(k)})$


## Solving the Dyson Equation (continued)


Lowest order correction (with $\Sigma^{(2)}(E)$):


```{math}
\begin{aligned}
\Delta IP = \Sigma_{cc}^{(2)}(\epsilon_c) = -\sum_{a,r} \frac{|\langle ac || cr \rangle|^2}{\epsilon_r - \epsilon_a} - \frac{1}{2} \sum_{a,b,r} \frac{|\langle ab || cr \rangle|^2}{\epsilon_r + \epsilon_c - \epsilon_a - \epsilon_b}  \\
+ \frac{1}{2} \sum_{a,r,s} \frac{|\langle rs || ca \rangle|^2}{\epsilon_r + \epsilon_s - \epsilon_a - \epsilon_c}
\end{aligned}
```


**Physical Contributions to $\Delta IP$:**

- Term 1: Orbital Relaxation of $(N-1)$ system.

- Term 2: Pair Relaxation of $(N-1)$ system.

- Term 3: Pair Removal (Correlation of $N$ system).


## Green's Functions in DFT: The GW Method


Start with KS-DFT eq-n: 
```{math}
\hat{H}^{ks}|\phi_i^{ks}\rangle = (\hat{H}_0 + \hat{V}_{xc})|\phi_i^{ks}\rangle = \epsilon_i^{ks}|\phi_i^{ks}\rangle
```
 
```{math}
\hat{H}_0 = \hat{T}_0 + \hat{V}_{ext} + \hat{V}_H
```


Dyson equation: 
```{math}
(H_0 + \Sigma(E))G_0(E) = EG_1(E)
```


Self-energy in the GW approximation: 
```{math}
\Sigma(r, r'; \omega) = \frac{i}{2\pi} \int d\omega' G_0(r, r'; \omega + \omega') W(r, r'; \omega')
```
 $W$ is the screened Coulomb interaction: 
```{math}
W = \epsilon^{-1} v_c = \frac{1}{\epsilon(r, r'; \omega) |r - r'|}
```


$\epsilon$ is dielectric function or polarizability.


## Green's Functions in DFT: The GW Method (continued)


**Quasi-particle (QP) energies** (ignoring off-diagonal elements ($i \neq j$)): 
```{math}
\epsilon_i^{QP} = \epsilon_i^{KS} + \langle \phi_i^{KS} | \hat{\Sigma}(\epsilon_i^{QP}) - \hat{V}_{xc} | \phi_i^{KS} \rangle
```
 This equation must be solved iteratively because $\hat{\Sigma}$ depends on $E$ ($\epsilon_i^{QP}$).\


## Green's Functions in DFT: Bethe-Salpeter Equation


Two-particle Green's functions are used to find excitation energies.\
Bethe-Salpeter Equation (BSE): 
```{math}
\det( \Omega - E ) = 0
```
 Where the matrix $\Omega$ is: 
```{math}
\begin{pmatrix} A & B \\ -B^* & -A^* \end{pmatrix}
```
 This looks similar to TDDFT but uses QP states and a different kernel.

---

*Migration source: `06_ODE/Green_chm673.tex` from the archived Overleaf export.*
