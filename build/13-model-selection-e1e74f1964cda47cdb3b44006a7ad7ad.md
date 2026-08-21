# Machine Learning: Model Selection

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

After this lecture, you should be able to:

- distinguish training, validation, interpolation, and extrapolation error;
- use holdout and $k$-fold cross-validation for model selection;
- define KL divergence and explain its directionality;
- compute and compare AIC and BIC for models fit to the same data; and
- explain how complexity penalties trade goodness of fit against flexibility.

## Occam's razor and parsimony

Occam's razor and the law of parsimony

:::{note}
Occam's razor Prefer the simplest model that explains the evidence adequately.
Simplicity is a model-selection principle, not a guarantee that the simplest
candidate is true.
:::

:::{note}
Pareto Principle Also known as the 80/20 rule, this principle states that roughly 80$\%$ of effects come from 20$\%$ of causes.
:::


**What the original figure plots.** It shows portrait or illustration associated with William of Ockham.

**What this is trying to convey.** Occam's razor motivates choosing the simplest model that adequately explains the evidence.

```{figure} figures/13-model-selection/Occam.png
:alt: Portrait or illustration associated with William of Ockham
:width: 80%

Occam's razor motivates choosing the simplest model that adequately explains the evidence.
```

**Polished version.**

```{figure} figures/13-model-selection/redraw-Occam.png
:alt: Polished version of portrait or illustration associated with William of Ockham
:width: 80%

The polished version preserves portrait or illustration associated with William of Ockham. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
```


**What the original figure plots.** It shows portrait of Vilfredo Pareto.

**What this is trying to convey.** Vilfredo Pareto, whose empirical observations inspired the Pareto principle.

```{figure} figures/13-model-selection/Pareo.png
:alt: Portrait of Vilfredo Pareto
:width: 80%

Vilfredo Pareto, whose empirical observations inspired the Pareto principle.
```

**Polished version.**

```{figure} figures/13-model-selection/redraw-Pareo.png
:alt: Polished version of portrait of Vilfredo Pareto
:width: 80%

The polished version preserves portrait of Vilfredo Pareto. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
```
*Vilfredo Pareto, 1848-1923*
## Pareto Principle


**What the original figure plots.** It shows illustration of the Pareto 80/20 principle.

**What this is trying to convey.** The Pareto principle is a heuristic about concentrated effects, not a universal statistical law.

```{figure} figures/13-model-selection/Pareto_principle.png
:alt: Illustration of the Pareto 80/20 principle
:width: 80%

The Pareto principle is a heuristic about concentrated effects, not a universal statistical law.
```

**Polished version.**

```{figure} figures/13-model-selection/redraw-Pareto_principle.png
:alt: Polished version of illustration of the Pareto 80/20 principle
:width: 80%

The polished version preserves illustration of the Pareto 80/20 principle. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
```

## DFT development


**What the original figure plots.** It shows comparison of errors across density-functional approximations.

**What this is trying to convey.** A chemistry example showing that model complexity and model error are not interchangeable.

```{figure} figures/13-model-selection/DFT_error.png
:alt: Comparison of errors across density-functional approximations
:width: 80%

A chemistry example showing that model complexity and model error are not interchangeable.
```

**Polished version.**

```{figure} figures/13-model-selection/redraw-DFT_error.png
:alt: Polished version of comparison of errors across density-functional approximations
:width: 80%

The polished version preserves comparison of errors across density-functional approximations. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
```

## Extrapolation error

The figure shows how the interpolation and extrapolation errors from the SVD least-squares fit change as a function of the complexity of the model.


**What the original figure plots.** It shows interpolation and extrapolation errors versus model complexity.

**What this is trying to convey.** Validation inside the sampled region may not predict extrapolation performance.

```{figure} figures/13-model-selection/extrapolation.png
:alt: Interpolation and extrapolation errors versus model complexity
:width: 80%

Validation inside the sampled region may not predict extrapolation performance.
```

**Polished version.**

```{figure} figures/13-model-selection/redraw-extrapolation.png
:alt: Polished version of interpolation and extrapolation errors versus model complexity
:width: 80%

The polished version preserves interpolation and extrapolation errors versus model complexity. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
```

## Model selection: Cross validation


**What the original figure plots.** It shows data splits used for model training and validation.

**What this is trying to convey.** Validation estimates out-of-sample performance and helps select hyperparameters.

```{figure} figures/13-model-selection/cross-validation.png
:alt: Data splits used for model training and validation
:width: 80%

Validation estimates out-of-sample performance and helps select hyperparameters.
```

**Polished version.**

```{figure} figures/13-model-selection/redraw-cross-validation.png
:alt: Polished version of data splits used for model training and validation
:width: 80%

The polished version preserves data splits used for model training and validation. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
```

- Cross-validation estimates out-of-sample performance by repeatedly holding
  out data from the fitting process.

- Use validation performance to compare model classes or tune
  hyperparameters. After selection, a final model is often refit using all
  available training data.

- Regularization can improve validation performance when its reduction in
  variance outweighs the bias it introduces.


## Thresholding


**What the original figure plots.** It shows prediction performance after thresholding small fitted coefficients.

**What this is trying to convey.** Thresholding small coefficients can reduce variance at the cost of added bias.

```{figure} figures/13-model-selection/thresholding.png
:alt: Prediction performance after thresholding small fitted coefficients
:width: 80%

Thresholding small coefficients can reduce variance at the cost of added bias.
```

**Polished version.**

```{figure} figures/13-model-selection/redraw-thresholding.png
:alt: Polished version of prediction performance after thresholding small fitted coefficients
:width: 80%

The polished version preserves prediction performance after thresholding small fitted coefficients. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
```

- Thresholding: zeroing-out small loadings

- Thresholding improves performance of non-regularized models


## k-fold cross-validation


**What the original figure plots.** It shows K-fold cross-validation in which each fold serves once as validation data.

**What this is trying to convey.** In k-fold cross-validation, every observation is used for validation exactly once.

```{figure} figures/13-model-selection/k-fold.png
:alt: K-fold cross-validation in which each fold serves once as validation data
:width: 80%

In k-fold cross-validation, every observation is used for validation exactly once.
```

**Polished version.**

```{figure} figures/13-model-selection/redraw-k-fold.png
:alt: Polished version of K-fold cross-validation in which each fold serves once as validation data
:width: 80%

The polished version preserves K-fold cross-validation in which each fold serves once as validation data. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
```

## Model selection


- How do you know you have a good model?

- Is this the best model?

:::{note}
Kullback-Leibler (KL) divergence
```{math}
D_{\mathrm{KL}}(f\|g)
=\int f(\mathbf x;\beta)
\log\!\left[\frac{f(\mathbf x;\beta)}{g(\mathbf x;\mu)}\right]\,d\mathbf x
```


- $f$ and $g$ are normalized probability densities, and $g>0$ wherever
  $f>0$ for the divergence to remain finite.

- $f(\mathbf{x}, \beta)$ represents the \"true\" data distribution with its parameters $\beta$.

- $g(\mathbf{x}, \mu)$ represents the proposed model's distribution with its parameters $\mu$.

- $I(f,g)$ measures the information lost when $g$ is used to represent $f$.

- If $f = g$, there is no information lost.

- KL divergence is not symmetric:
  $D_{\mathrm{KL}}(f\|g)\ne D_{\mathrm{KL}}(g\|f)$ in general.
:::


## KL divergence: example


**What the original figure plots.** It shows target distribution compared with candidate model distributions.

**What this is trying to convey.** KL divergence measures the expected log-density discrepancy from a target distribution to a model.

```{figure} figures/13-model-selection/KL_divergence.png
:alt: Target distribution compared with candidate model distributions
:width: 80%

KL divergence measures the expected log-density discrepancy from a target distribution to a model.
```

**Polished version.**

```{figure} figures/13-model-selection/redraw-KL_divergence.png
:alt: Polished version of target distribution compared with candidate model distributions
:width: 80%

The polished version preserves target distribution compared with candidate model distributions. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
```

- $f$ represents the truth (the distribution you want to model); $g$ are the models proposed to describe $f$.

- The model with the smallest KL divergence is considered the best model.


## Akaike Information Criterion (AIC)

The problem: often we do not know the exact function $f$!

:::{note}
Akaike Information Criterion (AIC)
```{math}
AIC = 2K - 2 \log [L(\hat{\mu}|\mathbf{x})]
```

:::

- K is the number of parameters used in the model; it acts as a penalty for complexity.

- L is the maximized value of the likelihood function for the model. This term measures the model's goodness-of-fit to the data.

- Effectively, we want to find the model parameters $\hat{\mu}$ that maximize $\log(L)$. Maximizing $\log(L)$ is equivalent to minimizing the Sum of Squared Errors (achieved by least-squares fitting) for the Gaussian (normal) distribution of errors.

- The $-2 \log(L)$ term rewards models that fit the data well.

- Among models fit to the same data and likelihood, the lowest AIC is preferred.
  AIC is a relative criterion; its numerical value does not certify that the
  selected model is adequate.


## Bayesian Information Criterion (BIC)


:::{note}
Bayesian Information Criterion (BIC)
```{math}
BIC = \log(n)K - 2 \log [L(\hat{\mu}|\mathbf{x})]
```

:::

- $n$ is the sample size on which the model was trained.

- The term $\log(n)K$ as a whole acts as the penalty for model complexity. It penalizes model complexity more heavily when the sample size is large.

- The complexity penalty grows with sample size because increasingly large
  data sets provide stronger evidence for or against each additional
  parameter.

- Under standard regularity assumptions, fixed candidate models, and the true
  model being among them, BIC is model-selection consistent: its probability
  of selecting the true model approaches one as $n\to\infty$.

## Homework for this lecture

### Existing course project

The computed-versus-experimental spectrum model-selection project below is
embedded from [Project 1 ideas](../assignments/project-01.md).

:::{include} ../assignments/project-01.md
:start-after: ## Determining the best model for the spectral signal
:end-before: ---
:filename: false
:::

---

*Migration source: `04_Machine_Learning/Linear_Regression2.tex` from the archived Overleaf export.*
