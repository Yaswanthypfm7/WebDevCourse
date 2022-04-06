package com.example.icp10;

import com.google.gson.annotations.SerializedName;

public class User {
    private int id;

    @SerializedName("login")
    private String username;

    @SerializedName("html_url")
    private String url;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
