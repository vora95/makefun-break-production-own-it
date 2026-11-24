const entry = "I deleted the production database to save disk space, then deleted the backup too: it was also taking up disk space. I'm the incident now.";
if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) throw new Error("entry must be one line of 1-200 characters");
process.stdout.write(entry);