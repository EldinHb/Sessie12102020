import 'react-native';

export interface PhotoBrowserInterface {
    Show: (url: string) => void;
}

declare module 'react-native' {
    interface NativeModulesStatic {
        PhotoViewer: PhotoBrowserInterface;
    }
}