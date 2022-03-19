package com.example.icp8;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    EditText username;
    EditText password;
    Button btn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        username = findViewById(R.id.username);
        password = findViewById(R.id.password);
        btn = findViewById(R.id.btn);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(!username.getText().toString().isEmpty() && !password.getText().toString().isEmpty()) {
                    if ((username.getText().toString().equals("user")) && (password.getText().toString().equals("password"))) {
                        //to change te page to new page create a new intent
                        Intent intent = new Intent(MainActivity.this, MainActivity2.class);
                        startActivity(intent);
                        //Message as button is clicked when the login is clicked
                        Toast.makeText(MainActivity.this, "Button pressed", Toast.LENGTH_SHORT).show();
                    } else {
                        //Message if Username/Password does not match
                        if (!username.getText().toString().equals("user") && !password.getText().toString().equals("password")) {
                            Toast.makeText(MainActivity.this, "Entered Username & Password are not correct", Toast.LENGTH_SHORT).show();
                        }
                        //Message if User name is wrong
                        else if (!username.getText().toString().equals("user")) {
                            Toast.makeText(MainActivity.this, "Username invalid", Toast.LENGTH_SHORT).show();
                        }
                        //Message if Password is wrong
                        else if (!password.getText().toString().equals("password")) {
                            Toast.makeText(MainActivity.this, "Wrong Password", Toast.LENGTH_SHORT).show();
                        }
                    }
                } else {
                    //Message if Username/Password are empty
                    Toast.makeText(MainActivity.this, "Please enter a value for Username/Password", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}