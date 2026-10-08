import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-rose-50 p-6 text-center">
          <div className="max-w-md bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-rose-200">
            <div className="text-4xl mb-3">🌸</div>
            <h1 className="text-xl font-bold text-slate-800 mb-2">Đang khởi tạo giao diện...</h1>
            <p className="text-sm text-slate-600 mb-4">
              Hệ thống đã tự động lưu lại phiên làm việc. Vui lòng bấm tải lại trang để tiếp tục.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-medium rounded-full shadow-md hover:opacity-95 transition-all cursor-pointer"
            >
              Tải lại trang
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
