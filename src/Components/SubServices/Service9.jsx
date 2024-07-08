export default function Service9() {
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <h1 style={{ 
        marginBottom: '50px', // Adjust the margin as needed
        fontFamily: 'Noto Sans JP, sans-serif',
        fontWeight: '800',
        color: '#333', // Optional: Change the color as needed
        fontSize: '50px',
      }}>Web Application</h1>
      <div style={{ 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        <div style={{ 
          width: '500px', 
          height: '300px', 
          backgroundColor: 'green',
          marginRight: '0px',
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}>
          <img 
            src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Green box image" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'  // Align items to the left
        }}>
          <div style={{ 
            width: '200px', 
            height: '150px', 
            backgroundColor: 'red',
            borderBottom: '1px solid black', // Shared border between red and pink
            borderRight: '1px solid black', // Shared border between columns
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}>
            <img 
              src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Red box image" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div style={{ 
            width: '200px', 
            height: '150px', 
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <span>Our Services</span>
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'  // Align items to the left
        }}>
          <div style={{ 
            width: '200px', 
            height: '150px', 
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <span>Our Services</span>
          </div>
          <div style={{ 
            width: '200px', 
            height: '150px', 
            backgroundColor: 'yellow',
          }}>
            <img 
              src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Yellow box image" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
