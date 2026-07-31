# Project 1 Ideas

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Lanczos algorithm

The Lanczos algorithm is an iterative method that is an adaptation of power methods to find the *m* \"most useful\" (tending towards extreme highest/lowest) eigenvalues and eigenvectors of a square Hermitian matrix.

**Objectives**:

- Describe algorithm.

- Describe the computational cost of the algorithm.

- Develop the basic code for the algorithm.

- Demonstrate the algorithm in action.


## Randomized SVD algorithm

Randomized SVD (rSVD) is a probabilistic algorithm that approximates the low-rank singular value decomposition (SVD) of a large matrix $A$ by finding a random subspace $Q$ and then applying the standard SVD to a smaller matrix, $Q^{*}A$. This method uses a smaller matrix for the core decomposition, significantly reducing computational time and memory requirements for large datasets, while oversampling and power iterations are used to improve approximation accuracy.

**Objectives**:

- Describe algorithm.

- Describe the computational cost of the algorithm.

- Develop the basic code for the algorithm.

- Demonstrate the algorithm in action.


## Simplex optimization algorithm

The Simplex Algorithm is a widely used method for solving linear programming problems, which involve optimizing a linear objective function subject to a set of linear inequality constraints. It systematically moves through the vertices of the feasible region (a multi-dimensional shape defined by the constraints) until an optimal solution is found.

**Objectives**:

- Describe algorithm.

- Describe the computational cost of the algorithm.

- Develop the basic code for the algorithm.

- Demonstrate the algorithm in action.


## Classification of molecular structures

The often posed question in molecular modeling is to compare structures of the same molecular system that is exposed to fluctuations (e.g., thermal fluctuations explored in molecular dynamics).

**Possible objectives**:

- Develop the algorithm that computes RMSD between any two structures.

- Develop the algorithm that finds the structure that is closest to the average structure of the system.

- Develop the algorithm that clusters the structures and finds the center of each cluster.


## Fitting noisy spectral signal

A standard question in spectroscopic measurements is to fit the noisy data with a set of well-defined functions (Gaussians or Lorentians).

**Possible objectives**:

- Develop the algorithm that fits the spectrum with a given number of gaussians; compute the fitting error. As an extension, impose constraints on the algorithm: use gaussians of the same width, use only non-negative gaussians, etc.


## Determining the best model for the spectral signal

We often try to use molecular modeling predictions to interpret the experimental observables. Here is one example: electronic calculations predict five molecular structures very close in energy. Experimental IR spectrum contains the signatures of one structure. Which one is that?

**Possible objectives**:

- Computational IR spectrum contains a number of sticks (intensity, wavenumber); the experimental spectrum contains a continuous signal (intensity, wavenumber) in the same wavenumber range. Develop the algorithm to match the computed spectrum with the experimental one and find the best match. The caveat: the position (wavenumber) of the computed peaks can be allowed to scale (up to 10$\%$).

---

*Migration source: `Homeworks/project1.tex` from the archived Overleaf export.*
