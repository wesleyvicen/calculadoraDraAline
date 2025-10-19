import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const OfflineNotification = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ff6b35;
  color: white;
  padding: 10px;
  text-align: center;
  z-index: 1000;
  transform: translateY(${props => props.show ? '0' : '-100%'});
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
`;

const InstallPrompt = styled.div`
  position: fixed;
  bottom: 90px; /* sobe acima da navbar (navbar ~64px) */
  left: 20px;
  right: 20px;
  background: linear-gradient(135deg, #4285f4, #34a853);
  color: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  z-index: 1201; /* acima da navbar (1200) */
  transform: translateY(${props => props.show ? '0' : '100px'});
  opacity: ${props => props.show ? '1' : '0'};
  transition: bottom 0.25s ease, opacity 0.25s ease, transform 0.25s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`;

const InstallButton = styled.button`
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.3);
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    background: rgba(255,255,255,0.3);
  }
`;

const PWAFeatures = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    // Monitorar status online/offline
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Capturar evento beforeinstallprompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Detectar se já está instalado
    const handleAppInstalled = () => {
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('PWA instalado');
      }
      
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  const handleDismissInstall = () => {
    setShowInstallPrompt(false);
    setDeferredPrompt(null);
  };

  return (
    <>
      <OfflineNotification show={!isOnline}>
        <i className="fas fa-wifi" style={{ marginRight: '8px' }}></i>
  Você está offline. Os utilitários do consultório continuarão funcionando normalmente!
      </OfflineNotification>

      <InstallPrompt show={showInstallPrompt}>
        <div style={{ marginBottom: '10px' }}>
          <i className="fas fa-download" style={{ marginRight: '8px' }}></i>
          <strong>Instalar Utilitários – Consultório Dra. Aline Oliveira</strong>
        </div>
        <p style={{ margin: '5px 0', fontSize: '14px' }}>
          Instale o app no seu dispositivo para acesso rápido e funcionamento offline!
        </p>
        <div>
          <InstallButton onClick={handleInstallClick}>
            Instalar
          </InstallButton>
          <InstallButton onClick={handleDismissInstall}>
            Agora não
          </InstallButton>
        </div>
      </InstallPrompt>
    </>
  );
};

export default PWAFeatures;