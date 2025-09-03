//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const outputDiv = document.getElementById("output");
    const submitBtn = document.getElementById("btn")
    const input = document.getElementById("ip")

    submitBtn.addEventListener("click", () => {
        const inputValue = input.value;
        const initialPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                outputDiv.textContent = `Result: ${inputValue}`
                resolve(inputValue)
            }, 2000);
    });

    initialPromise
      .then((original) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const multiplied = original * 2;
            outputDiv.textContent = `Result: ${multiplied}`;
            resolve(multiplied);
          }, 2000);
        });
      })
      .then((multiplied) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const subtracted = multiplied - 3;
            outputDiv.textContent = `Result: ${subtracted}`;
            resolve(subtracted);
          }, 1000);
        });
      })
      .then((subtracted) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const divided = subtracted / 2;
            outputDiv.textContent = `Result: ${divided}`;
            resolve(divided);
          }, 1000);
        });
      })
      .then((divided) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const added = divided + 10;
            outputDiv.textContent = `Final Result: ${added}`;
          }, 1000);
        });
      })
      .catch((err) => {
        console.log(`Error ${err}`)
      })
    })

    
})