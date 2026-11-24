const entry = "I deleted the production database to save disk space, then deleted the backup too: it was also taking up disk space. I'm the incident now.";

// Validation gates: the entry must be one line, 1-200 characters, no trailing newline.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}
if (entry.includes("\n") || entry !== entry.trim()) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

process.stdout.write(entry);
