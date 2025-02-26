export const api = "http://127.0.0.1:8000/api";
export const apitoken = () => {
    // const adminData = localStorage.getItem('admin');
    const adminData = JSON.parse(localStorage.getItem('authtoken'));
    
    // console.log("Raw LocalStorage Data:", adminData);

    if (!adminData) {
        console.error("No admin data found in LocalStorage.");
        return null;
    }

    try {
        const admin = adminData;
        // console.log("Parsed Token:", admin.token);
        return admin.token || null;
    } catch (error) {
        // console.error("Error parsing admin from localStorage:", error);
        return null;
    }
};