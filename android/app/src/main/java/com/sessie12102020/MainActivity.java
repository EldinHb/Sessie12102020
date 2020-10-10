package com.sessie12102020;

import android.app.Activity;
import android.content.Context;
import android.os.Bundle;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
  public static Activity MainActivity;
  public static Context MainContext;

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Sessie12102020";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    MainActivity = this;
    MainContext = this;
  }
}
