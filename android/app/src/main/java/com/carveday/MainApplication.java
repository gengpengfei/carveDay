package com.carveday;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.keyee.pdfview.PDFView;
import com.github.yamill.orientation.OrientationPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.cubicphuse.RCTTorch.RCTTorchPackage;
import com.horcrux.svg.SvgPackage;
import com.jadsonlourenco.RNShakeEvent.RNShakeEventPackage;
import cn.reactnative.httpcache.HttpCachePackage;
import com.rnfs.RNFSPackage;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import fr.greweb.reactnativeviewshot.RNViewShotPackage;
import com.rnim.rn.audio.ReactNativeAudioPackage;
import org.reactnative.camera.RNCameraPackage;
import com.zmxv.RNSound.RNSoundPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new PDFView(),
            new OrientationPackage(),
            new RNDeviceInfo(),
            new RCTTorchPackage(),
            new SvgPackage(),
            new RNShakeEventPackage(),
            new HttpCachePackage(),
            new RNFSPackage(),
            new ReactNativeContacts(),
            new RNViewShotPackage(),
            new ReactNativeAudioPackage(),
            new RNCameraPackage(),
            new RNSoundPackage(),
            new ReactVideoPackage(),
            new PickerPackage(),
            new LinearGradientPackage(),
            new RNFetchBlobPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
