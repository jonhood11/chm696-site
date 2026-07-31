# Homework 3

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

1.  Full-Wave Rectifier Fourier Series

    Consider the full-wave rectifier function $f(x)$ defined over the interval $[-\pi, \pi]$ as: $$f(x) = |\sin(x)|$$ This function has a period of $2\pi$.

    1.  Sketch the function $f(x)$ over the interval $[-\pi, \pi]$. Clearly label important points.

    2.  Determine whether $f(x)$ is an even function, an odd function, or neither. Justify your answer.

    3.  Find the Fourier series representation of $f(x)$ in the form: $$f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} (a_n \cos(nx) + b_n \sin(nx))$$

        Hint: You may find the following integrals useful: $$\begin{align*}
                \int_{-\pi}^{\pi} |\sin(x)| \, dx &= 4 \\
                \int_{-\pi}^{\pi} |\sin(x)| \cos(nx) \, dx &= \begin{cases}
                    \frac{4}{1-n^2}, & n \text{ even} \\
                    0, & n \text{ odd}
                \end{cases} \\
                \int_{-\pi}^{\pi} |\sin(x)| \sin(nx) \, dx &= 0, \quad \text{for all } n
        \end{align*}$$

    4.  Show that the Fourier series for this full-wave rectifier can be simplified to: $$f(x) = \frac{2}{\pi} - \frac{4}{\pi} \sum_{k=1}^{\infty} \frac{\cos(2kx)}{4k^2-1}$$

    5.  Plot the original function and $n=1,2,5,10,100$ terms.

2.  Fourier Transform of Higher-Order Derivatives

    Consider the Fourier transform pair $f(t) \leftrightarrow F(\omega)$, where $F(\omega) = \mathcal{F}\{f(t)\}$.

    Given that the Fourier transform of the first derivative is: $$\mathcal{F}\left\{\dv{f}{t}\right\} = i\omega F(\omega)$$

    1.  Calculate the Fourier transform of the second derivative: $$\mathcal{F}\left\{\dv[2]{f}{t}\right\}$$ Show your work step-by-step.

    2.  Calculate the Fourier transform of the third derivative: $$\mathcal{F}\left\{\dv[3]{f}{t}\right\}$$ Again, show your work step-by-step.

    3.  Based on your results, what do you observe about the pattern for the Fourier transform of higher-order derivatives? Express this pattern in general terms for the n-th derivative.

    4.  Briefly explain how this result relates to the frequency domain representation of derivatives. What does it tell us about the effect of differentiation on the frequency content of a signal?

    *Hint: For each step, consider applying the first derivative result multiple times.*

3.  Fourier Transform of an Integral

    Consider the Fourier transform pair $f(t) \leftrightarrow F(\omega)$, where $F(\omega) = \mathcal{F}\{f(t)\}$.

    1.  Define the indefinite integral of $f(t)$ as: $$g(t) = \int_{-\infty}^t f(\tau) d\tau$$

    2.  Derive the Fourier transform of $g(t)$: $$\mathcal{F}\{g(t)\} = G(\omega)$$

    3.  Show that the result can be expressed as: $$G(\omega) = \frac{1}{i\omega} F(\omega) + \pi F(0) \delta(\omega)$$ where $\delta(\omega)$ is the Dirac delta function.

    4.  Compare this result to the Fourier transform of derivatives. Discuss the similarities and differences.

    5.  Explain the significance of the $\pi F(0) \delta(\omega)$ term. Under what conditions can this term be ignored?

    6.  (Bonus) How would you interpret this result in terms of frequency domain analysis? What does integration do to the frequency content of a signal?

    *Hints:*

    - Start by writing out the definition of the Fourier transform for $g(t)$.

    - You may use integration by parts.

    - Consider the behavior of $g(t)$ as $t \to \pm\infty$.

    - The following property of the Dirac delta function may be useful: $$\int_{-\infty}^{\infty} f(t) dt = F(0)$$

4.  Fourier Transform of a Rectangular Pulse

    The rectangular pulse function, often denoted as $\text{rect}(t)$, is defined as:

    $$\text{rect}(t) =
    \begin{cases}
    1, & |t| \leq \frac{T}{2} \\
    0, & |t| > \frac{T}{2}
    \end{cases}$$

    Compute the Fourier transform of $\text{rect}(t)$.

    Hint: Because $\text{rect}(t)$ is non-zero only for $|t| \leq \frac{T}{2}$, you can simplify the limits of the integral to:

    $$F(\omega) = \int_{-\frac{T}{2}}^{\frac{T}{2}} e^{-i \omega t} \, dt$$

    Recall the identity $e^{i \theta} - e^{-i \theta} = 2i \sin(\theta)$ to express the result in terms of the sinc function.

    Show that the Fourier transform of the rectangular pulse is:

    $$F(\omega) = T \, \text{sinc} \left( \frac{\omega T}{2} \right)$$

    where $\text{sinc}(x) = \frac{\sin(x)}{x}$.

5.  Fourier Transform of an Exponential Decay

    Consider the following exponential decay function: $$f(t) =
    \begin{cases}
    e^{-\alpha t}, & t \geq 0 \\
    0, & t < 0
    \end{cases}$$ where $\alpha > 0$ is a constant. Using this formula, compute the Fourier transform of $f(t)$.

6.  Fourier Transform of a Gaussian Function

    Consider the following Gaussian function: $$f(t) = e^{-\alpha t^2}$$ where $\alpha > 0$ is a constant. Compute the Fourier transform of $f(t)$.

    Hint: To evaluate the integral, complete the square in the exponent: $$\alpha t^2 + i \omega t = \alpha \left(t^2 + \frac{i \omega}{\alpha} t \right)$$ Use the known result for the Gaussian integral: $$\int_{-\infty}^{\infty} e^{-a t^2 + b t} \, dt = \sqrt{\frac{\pi}{a}} e^{\frac{b^2}{4a}}$$ to compute the final result.

7.  Fourier Transform of a Damped Sine Wave

    Consider the following damped sine wave function: $$f(t) = e^{-\alpha t} \sin(\omega_0 t), \quad t \geq 0$$ where $\alpha > 0$ controls the rate of decay and $\omega_0$ is the frequency of the sine wave.

    Compute the Fourier transform of $f(t)$.

    Hint: Since $f(t) = 0$ for $t < 0$, the integral simplifies to: $$F(\omega) = \int_{0}^{\infty} e^{-\alpha t} \sin(\omega_0 t) e^{-i \omega t} \, dt$$ Use Euler's formula for the sine function: $$\sin(\omega_0 t) = \frac{e^{i \omega_0 t} - e^{-i \omega_0 t}}{2i}$$ Substitute this into the integral and split it into two parts: $$F(\omega) = \frac{1}{2i} \left( \int_{0}^{\infty} e^{-(\alpha + i(\omega - \omega_0)) t} \, dt - \int_{0}^{\infty} e^{-(\alpha + i(\omega + \omega_0)) t} \, dt \right)$$ Each integral is of the form: $$\int_{0}^{\infty} e^{-a t} \, dt = \frac{1}{a}$$ where $a > 0$. Solve both integrals and simplify. This should look similar to the damped harmonic oscillator we did in class.

8.  Time-Shifting Property

    The time-shifting property states that a shift in the time domain corresponds to a phase shift in the frequency domain:

    If $\mathcal{F}\{f(t)\} = F(\omega)$, then $\mathcal{F}\{f(t-t_0)\} = e^{-i\omega t_0}F(\omega)$

    This property is crucial in understanding how delays in signals affect their frequency content. Prove this.

---

*Migration source: `Homeworks/HW03.tex` from the archived Overleaf export.*
