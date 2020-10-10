package com.sessie12102020;

import android.media.Image;
import android.os.Handler;
import android.os.Looper;
import android.widget.ImageView;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.squareup.picasso.Picasso;
import com.stfalcon.imageviewer.StfalconImageViewer;
import com.stfalcon.imageviewer.loader.ImageLoader;

import java.util.ArrayList;
import java.util.List;

public class PhotoViewer extends ReactContextBaseJavaModule {
    private static ReactContext ReactContext;

    PhotoViewer(ReactApplicationContext context) {
        super(context);
        ReactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "PhotoViewer";
    }

    @ReactMethod
    public void Show(String url) {
        new Handler(Looper.getMainLooper()).post(() -> {
            List<String> imageUrls  = new ArrayList<>();
            imageUrls.add(url);
            new StfalconImageViewer.Builder<>(MainActivity.MainContext, imageUrls, (imageView, image) -> {
                Picasso.get().load(image).into(imageView);
            }).show();
        });
    }
}
