export default function Home() {

  return (

    <main style={{ fontFamily: "system-ui", padding: "40px", maxWidth: "700px", margin: "0 auto" }}>

      <h1>No Dairy Today</h1>

 

      <p style={{ fontSize: "18px", marginTop: "20px" }}>

        One dairy-free recipe. Every day. No stress.

      </p>

 

      <p style={{ marginTop: "24px" }}>

        Avoiding dairy shouldn’t feel like a project.

        Each day, we share one comforting recipe without cheese, cream,

        or hidden dairy.

      </p>

 

      <p>

        Simple ingredients. Clear steps. Something you can make today.

      </p>

 

      <button

        style={{

          marginTop: "30px",

          padding: "12px 20px",

          fontSize: "16px",

          cursor: "pointer"

        }}

      >

        Get today’s recipe

      </button>

    </main>

  );

}
