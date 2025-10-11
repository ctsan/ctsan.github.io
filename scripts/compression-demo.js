// Compression/Decompression Demo
// 5 elaborate examples showing novel ideas and insights

const examples = [
  {
    verbose: "I've been running experiments on attention mechanisms and noticed something peculiar. When we increase model depth beyond a certain threshold, the attention patterns start exhibiting what looks like hierarchical clustering - lower layers focus on syntax, middle layers on semantics, and upper layers on pragmatics. It's almost as if the model is spontaneously developing a linguistic hierarchy without explicit supervision. The surprising part is that this only happens when we let the learning rate decay slowly enough for these patterns to stabilize. I think this might explain why some of our earlier models failed to generalize - we were optimizing too aggressively and destroying these emergent structures before they could form. This could be a new principle for training: give the network time to discover its own representational hierarchy.",
    core: "Attention layers self-organize into hierarchical linguistic structures when learning rate decays slowly",
    decompressed: "Your observation about emergent hierarchical attention patterns is compelling. The learning rate dependency suggests these structures require extended consolidation periods. This aligns with recent work on implicit regularization in deep networks. Have you quantified the clustering coefficient across layers? This could establish whether we're observing genuine hierarchy or simply depth-dependent specialization. The training dynamics angle is particularly novel - most optimization research focuses on convergence speed rather than the geometric properties of learned representations.",
    bobPersonality: "Senior ML researcher",
    styleInjection: "Technical with constructive questions"
  },
  {
    verbose: "I've been thinking about how we measure model uncertainty, and I realized we might be approaching it backwards. Everyone uses dropout or ensembles to estimate epistemic uncertainty, but these methods assume the model knows what it doesn't know. What if instead we measured uncertainty by how much the model's internal representations change when we perturb the input slightly? Like, if you show it a cat picture and then add imperceptible noise, a confident model should maintain stable intermediate activations, while an uncertain model should show large fluctuations. This would capture something deeper than just output variance - it would measure whether the model has actually formed robust internal concepts. I tested this on some image classification tasks and found that this 'representation stability' correlates much better with actual errors than standard uncertainty estimates. It's computationally cheap too - just one forward pass with a small perturbation.",
    core: "Model uncertainty measurable via representation stability under input perturbations, not just output variance",
    decompressed: "Interesting reframing. Your approach essentially treats representation space geometry as an uncertainty signal. This is conceptually related to adversarial robustness but applied to uncertainty quantification. The computational efficiency is attractive - output-space methods require multiple forward passes. Question: does this capture aleatoric uncertainty or only epistemic? Also, have you checked if this correlates with calibration metrics like ECE? One concern: representation stability might reflect memorization rather than true confidence. Worth comparing on OOD detection benchmarks where memorization fails.",
    bobPersonality: "Skeptical theorist",
    styleInjection: "None"
  },
  {
    verbose: "You know how in reinforcement learning we always struggle with credit assignment - figuring out which actions actually led to the reward? I had this idea while watching my kid learn to walk. When babies fall, they don't just randomly try different movements; they seem to focus on the moment right before they lost balance. So what if we trained RL agents the same way? Instead of propagating rewards backwards through the entire trajectory, we could use the temporal gradient of the value function to identify critical moments - states where the expected return changes most rapidly. Then we'd concentrate learning on those decision points. I implemented a simple version using value function derivatives as attention weights for TD updates, and the agent learned to solve some sparse reward tasks way faster than standard methods. The beautiful part is that this 'temporal saliency' emerges automatically from the value estimates; we're not adding any new supervision signal.",
    core: "Use value function temporal gradients to identify critical decision points for focused credit assignment",
    decompressed: "Dude, this is brilliant! You're basically doing temporal attention for credit assignment. The baby analogy really clarifies the intuition. I love that it's derived from the value function itself - no extra oracle needed. This could be huge for exploration in sparse reward environments. Quick thoughts: (1) Does this help with the deadly triad issues in off-policy learning? (2) Could we combine this with hindsight experience replay? (3) Have you visualized what states get high temporal saliency? Would be cool to see if it discovers known critical states. Also, this might explain why humans learn from mistakes so well - we naturally attend to moments of surprise. Ship me the code, I want to try this on some robotics tasks!",
    bobPersonality: "Enthusiastic collaborator",
    styleInjection: "Energetic & collaborative"
  },
  {
    verbose: "I've been analyzing training loss curves across different architectures and scales, and there's this universal pattern that nobody seems to talk about. After the initial rapid descent, there's always a long plateau where the loss barely moves, and then suddenly it drops again. But here's what's weird: the length of the plateau scales logarithmically with model size. Bigger models plateau longer before breakthroughs. I think what's happening is that during the plateau, the model is actually doing important work - it's reorganizing its internal representations, finding better coordinate systems. The loss doesn't improve because it's undergoing a geometric transformation that preserves the current performance while enabling future improvements. It's like climbing a mountain by first walking around it to find a better path. This suggests we should never early-stop during plateaus; they're not signs of convergence but signs of geometric restructuring. I verified this by tracking representation similarity matrices during training - they show massive changes during plateaus despite stable loss.",
    core: "Training plateaus represent geometric restructuring of representations, not convergence; duration scales with model size",
    decompressed: "Your observation about plateau duration scaling is novel - I haven't seen this documented. The geometric restructuring hypothesis is testable: does the Hessian spectrum change during plateaus? If you're right, we should see eigenvalue reorganization without loss change. This could explain double descent too - the second descent might correspond to a major geometric transition. However, alternative explanation: plateaus might just be slow diffusion through flat regions of the loss landscape. Can you distinguish between these? Also, if plateaus are productive, what determines their length? Is it network width, depth, or dataset complexity? The representation similarity analysis is key evidence here. Consider comparing with lottery ticket networks - do pruned subnetworks skip plateaus?",
    bobPersonality: "Rigorous scientist",
    styleInjection: "Methodical with falsifiable hypotheses"
  },
  {
    verbose: "Here's a strange thing I noticed about how language models handle negation. If you ask GPT 'Is the sky not blue?' it often gets confused, but if you ask 'The sky is not blue, true or false?' it answers correctly. At first I thought this was just a quirk, but then I realized it reveals something fundamental about how these models represent truth. They're not doing logical inference; they're doing pattern completion in a semantic space. The first phrasing requires explicit logical operations, but the second one triggers a contradiction detection pattern that's already baked into the training data - people often write 'X is not Y, true or false? False!' So the model learned this as a single chunk. This means LLMs might not actually understand negation as a logical operation; they just recognize patterns that typically involve negation. The implications for AI safety are significant - we can't assume these models handle logical operations reliably even when they seem to. We need to test their understanding not just with standard prompts but with reformulations that break their cached patterns.",
    core: "LLMs handle negation via pattern matching, not logical inference; reformulating queries reveals this limitation",
    decompressed: "This is an important observation for both interpretability and safety. Your distinction between logical operations and pattern matching cuts to the core of what these models actually learn. This relates to Chomsky's critique that LLMs don't learn compositional semantics. Practical implications: (1) Adversarial robustness - semantic preserving rephrasings could be a new attack surface. (2) Prompt engineering - we should catalog which phrasings trigger genuine understanding vs. pattern matching. (3) Evaluation - current benchmarks might overestimate reasoning capabilities by using standard phrasings. Suggestion: systematically vary logical operators (negation, conjunction, disjunction) across multiple surface forms and measure consistency. If your hypothesis is correct, we'd see high variance for logically equivalent statements. This could motivate new architectures with explicit symbolic reasoning modules.",
    bobPersonality: "AI safety researcher",
    styleInjection: "None"
  }
];

let currentIndex = 0;

function updateDisplay() {
  const example = examples[currentIndex];

  document.getElementById('verboseSource').textContent = example.verbose;
  document.getElementById('coreIdea').textContent = example.core;
  document.getElementById('decompressedOutput').textContent = example.decompressed;
  document.getElementById('styleInfo').textContent = `Bob: ${example.bobPersonality} | Style: ${example.styleInjection}`;
  document.getElementById('exampleCounter').textContent = `${currentIndex + 1} / ${examples.length}`;
}

function nextExample() {
  currentIndex = (currentIndex + 1) % examples.length;
  updateDisplay();
}

function prevExample() {
  currentIndex = (currentIndex - 1 + examples.length) % examples.length;
  updateDisplay();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateDisplay();

  document.getElementById('nextExample').addEventListener('click', nextExample);
  document.getElementById('prevExample').addEventListener('click', prevExample);

  // Optional: auto-advance every 10 seconds
  // setInterval(nextExample, 10000);
});
