import React, { useState, useEffect } from 'react';

const PWAInstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [canInstall, setCanInstall] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Verificar se já está instalado
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                         window.navigator.standalone || 
                         document.referrer.includes('android-app://');
    
    setIsInstalled(isStandalone);

    // Capturar evento beforeinstallprompt
    const handleBeforeInstallPrompt = (e) => {
      console.log('PWA: beforeinstallprompt event fired');
      e.preventDefault();
      setDeferredPrompt(e);
      setCanInstall(true);
    };

    // Detectar quando foi instalado
    const handleAppInstalled = () => {
      console.log('PWA: App was installed');
      setIsInstalled(true);
      setCanInstall(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`PWA: User response to install prompt: ${outcome}`);
      
      if (outcome === 'accepted') {
        console.log('PWA: User accepted the install prompt');
      } else {
        console.log('PWA: User dismissed the install prompt');
      }
      
      setDeferredPrompt(null);
      setCanInstall(false);
    }
  };

  // Estilo inline para garantir visibilidade
  const buttonStyle = {
    position: 'fixed',
    top: '10px',
    right: '10px',
    backgroundColor: '#4285f4',
    color: 'white',
    border: 'none',
    padding: '12px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    zIndex: 9999,
    fontSize: '14px',
    fontWeight: 'bold',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
  };

  const statusStyle = {
    position: 'fixed',
    top: '60px',
    right: '10px',
    backgroundColor: isInstalled ? '#34a853' : canInstall ? '#ff9800' : '#666',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '4px',
    fontSize: '12px',
    zIndex: 9999
  };


  // Não mostrar nada quando instalado ou não pronto para instalar
  if (isInstalled) {
    return null;
  }

  // Não mostrar nada quando não instalado ou pronto para instalar
  return null;
};

export default PWAInstallButton;