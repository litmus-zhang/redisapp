export default function CarForm()
{
    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries())
        console.log(formData);

        const res = await fetch('/api/cars', {
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        const result = await res.json();
        console.log(result);
    }
    return (
      <div className="form-container">
            <h1>Enter Your car details</h1>
      <form>
          <input name='make' type='text' placeholder="car make"/>
          <input name='model' type='text' placeholder="car model" />
          <input name='image' type='text' placeholder="Upload Image" />
          <textarea name="description" type='text' placeholder="Car description" />

          <button type="submit" onClick={handleSubmit}>Create Car</button>
            </form>
            <style jsx>{`
            .form-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                background-color: #fff;
                padding: 2rem;
                width: fit-content;
                height: fit-content;
                border-radius: 5px;
                box-shadow: 2px 3px 20px #ccc;
            }
            h1{
                text-align: center;
                font-size: 1.3rem;
                margin:0;
                margin-bottom: 1rem;

            }
            form {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                row-gap: 1rem;
            }
            form input {
                padding: 0.5rem 1rem 0.5rem 0.5rem;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: .9rem;
            }
            form input:active, form input:focus {
                outline: none;
                border:2px solid skyblue;
            }
            form textarea {
                padding: 0.5rem 1rem 0.5rem 0.5rem;
                border: 1px solid #ccc;
                border-radius: 5px;
                height: 4rem;
                width: 100%;
            }
            form textarea:active, form textarea:focus {
                outline: none;
                border:2px solid skyblue;
            }
            form button {
                padding: 0.5rem 1rem 0.5rem 0.5rem;
                background-color: blue;
                color: white;
                border: none;
                border-radius: 5px;
                width: 100%;
            }
            `}</style>
      </div>
  )
}
