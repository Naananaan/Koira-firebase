import java.io.FileInputStream;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

public class FirebaseInitializer {

    public static void initializeFirebase() {
        try {
            // FileInputStream to read the service account JSON file
            FileInputStream serviceAccount = new FileInputStream("path/to/serviceAccountKey.json");
            // Build FirebaseOptions with the credentials from the service account JSON
            FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .build();
            // Initialize Firebase with the options
            FirebaseApp.initializeApp(options);
            System.out.println("Firebase initialized successfully!");
        } catch (Exception e) {
            System.err.println("Error initializing Firebase: " + e.getMessage());
        }
    }
}
