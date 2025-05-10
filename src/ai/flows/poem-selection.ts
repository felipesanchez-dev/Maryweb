'use server';

/**
 * @fileOverview An AI agent that suggests the type of poem that best expresses user sentiments.
 *
 * - suggestPoemType - A function that handles the poem type suggestion process.
 * - SuggestPoemTypeInput - The input type for the suggestPoemType function.
 * - SuggestPoemTypeOutput - The return type for the suggestPoemType function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPoemTypeInputSchema = z.object({
  sentiment: z
    .string()
    .describe('A description of the sentiments the user wants to express.'),
});
export type SuggestPoemTypeInput = z.infer<typeof SuggestPoemTypeInputSchema>;

const SuggestPoemTypeOutputSchema = z.object({
  poemType: z
    .string()
    .describe(
      'The suggested type of poem (e.g., short, long, rhyming, free verse) that best expresses the sentiments.'
    ),
  reason: z
    .string()
    .describe(
      'The reason why this poem type is suitable for the given sentiments.'
    ),
});
export type SuggestPoemTypeOutput = z.infer<typeof SuggestPoemTypeOutputSchema>;

export async function suggestPoemType(
  input: SuggestPoemTypeInput
): Promise<SuggestPoemTypeOutput> {
  return suggestPoemTypeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestPoemTypePrompt',
  input: {schema: SuggestPoemTypeInputSchema},
  output: {schema: SuggestPoemTypeOutputSchema},
  prompt: `You are a helpful assistant that suggests the type of poem that best expresses user sentiments.

Given the following sentiments, suggest a poem type and explain why it is suitable.

Sentiments: {{{sentiment}}}`,
});

const suggestPoemTypeFlow = ai.defineFlow(
  {
    name: 'suggestPoemTypeFlow',
    inputSchema: SuggestPoemTypeInputSchema,
    outputSchema: SuggestPoemTypeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
