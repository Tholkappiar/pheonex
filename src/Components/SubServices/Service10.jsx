export default function Service10() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      height: '100vh',  // Adjust as needed for full viewport height
      backgroundColor: 'white'  // Optional background color
    }}>
      <div style={{ 
        width: '80%',  // Adjust width of container as needed
        display: 'flex', 
        justifyContent: 'flex-start',  // Align items to the left
        alignItems: 'center' 
      }}>
        <img 
          src="https://images.pexels.com/photos/4709291/pexels-photo-4709291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Image" 
          style={{ maxWidth: '50%', maxHeight: '50%', marginLeft: '50px' }}  // Adjust margins and size as needed
        />
        <div style={{ 
          marginLeft: '20px',  // Adjust spacing between image and heading
          textAlign: 'left',  // Align text to the left
          marginTop: '-50px',
        }}>
          <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '28px', fontWeight: 'bold' }}> Web Technologies</h2>
          <p>A web application, often simply referred to as an app, is a software program that operates on a 
            web server rather than being installed locally on a device. Users access these applications through a
             web browser over the internet. They offer a wide range of functionalities, from simple tasks like 
             online forms to complex operations such as managing databases or conducting e-commerce transactions. 
             Web applications are designed to be cross-platform compatible, accessible from any device with a web 
             browser, making them versatile tools for various purposes like online banking, social networking, 
             and productivity.</p>
        </div>
      </div>
    </div>
  );
}
