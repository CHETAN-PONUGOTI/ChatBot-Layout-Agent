import express from 'express';
import { callLLM } from '../services/llmService.js';
import { buildSystemPrompt } from '../prompts/systemPrompt.js';
import { resizeArtboard } from '../services/layoutTransforms.js';
import { validateLayout } from '../utils/jsonValidator.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { message, layout, history } = req.body;
    let currentLayout = structuredClone(layout);
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes('9:16') || lowerMsg.includes('story') || lowerMsg.includes('reel')) {
      currentLayout = resizeArtboard(currentLayout, 1080, 1920);
    } else if (lowerMsg.includes('1:1') || lowerMsg.includes('post')) {
      currentLayout = resizeArtboard(currentLayout, 1080, 1080);
    } else if (lowerMsg.includes('16:9')) {
      currentLayout = resizeArtboard(currentLayout, 1920, 1080);
    }

    const systemPrompt = buildSystemPrompt(currentLayout);
    const result = await callLLM(systemPrompt, history || [], message);

    if (!result || !result.updatedLayout || !validateLayout(result.updatedLayout)) {
      return res.status(422).json({
        explanation: "The updates could not be computed validly. Keeping previous design parameters.",
        updatedLayout: layout
      });
    }

    const cleanNodes = { ...currentLayout.nodes, ...result.updatedLayout.nodes };
    result.updatedLayout.nodes = cleanNodes;

    res.json(result);
  } catch (error) {
    next(error);
  }
});

export default router;