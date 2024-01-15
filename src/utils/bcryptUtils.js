import bcrypt from 'bcrypt';

const saltRounds = 10; // Adjust this based on your security requirements

// Function to hash a password
const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password:', error);
        throw error; // You might want to handle this error more gracefully in your application
    }
};

// Function to compare a user-entered password with a hashed password
const comparePasswords = async (enteredPassword, hashedPassword) => {
    try {
        const passwordMatch = await bcrypt.compare(enteredPassword, hashedPassword);
        return passwordMatch;
    } catch (error) {
        console.error('Error comparing passwords:', error);
        throw error; // You might want to handle this error more gracefully in your application
    }
};

export { hashPassword, comparePasswords };