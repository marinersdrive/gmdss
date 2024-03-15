import React, { useEffect } from 'react';

function PaymentPage() {

  const ct = localStorage.getItem("selectedCategory3");
  let tab_id = ""
  
  if (ct === "Physics" || ct === "Chemistry" || ct === "Mathematics" || 
  ct === "General English" || ct === "General Aptitude" || ct === "General Knowledge"){
    tab_id = "prctbl_1Otn4kSDQR54U2z7AxJOHMKD"
  }
  else if (ct === "PCM" ){
    tab_id = "prctbl_1OtvK5SDQR54U2z7q5BUG15d"
  }
  else{
    tab_id = "prctbl_1OtvQmSDQR54U2z7eMuZUEdV"
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.defer = true;
    script.id = 'razorpay-embed-btn-js';
    script.src = 'https://cdn.razorpay.com/static/embed_btn/bundle.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='text-white text-center'>
        <p className='text-4xl font-bold mb-8 tracking-wide'>Pay Now!</p>
        <div
          className="razorpay-embed-btn"
          data-url="https://pages.razorpay.com/pl_NmH2PfkMDK4KTN/view"
          data-text="Pay Now"
          data-color="#528FF0"
          data-size="large"
        ></div>
      </div>
    </div>
  );
}

export default PaymentPage;