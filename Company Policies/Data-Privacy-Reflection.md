# Steps to ensure handling Data Securely in Daily Tasks:

- Using secure connections (https, using VPNs)
- Applying the Principle of Least Privilege (PoLP)
- Keeping software updated
- Enabling MFA
- Using strong passwords

# How to store, share, and dispose of sensitive information safely

- Using encrypted databases or cloud storage with access controls for storing sensitive info.
- Never store sensitive data in plaintext or local files.
- Use encrypted channels like SFTP, TLS, or secure file-sharing services.
- Avoid sharing credentails via email or text.
- Using secure deletion methods (e.g., data-wiping tools or cryptographic erasure).
- Shredding physical documents containing sensitive data.
- Revoking access to former employees or unauthorized users immediately.

# Common mistakes that lead to data privacy issues, and how they can be avoided:

- Hardcoding Credentials → Use environment variables or secure vaults.
- Weak Access Controls → Enforce strong authentication and role-based access.
- Improper Data Encryption → Always encrypt data at rest and in transit using strong algorithms.
- Excessive Data Collection → Only collect the minimum data necessary.
- Neglecting Security Updates → Regularly update and patch software to prevent exploits.
- Improper Data Sharing → Use secure collaboration tools, not public links or email attachments.
- Lack of Employee Training → Conduct regular security awareness training.

# one key learning or security measure I will implement:

storing credentials in environment variables instead of hardcoding them-Starting to use .env files for storing credentials in personal/local projects.
and ensuring .env is always added to .gitignore.
