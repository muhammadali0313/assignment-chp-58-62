document.write(`<h3>Q2: Display all child elements of “main-content” element.</h3>`)
var parent = document.querySelector("#main-content")
document.write(`<p>Ans: ${parent.children[0]}<br>
  2. ${parent.children[1]}<br>
  3. ${parent.children[2]}<br>
  4. ${parent.children[3]}<br>
  5. ${parent.children[4]}<br>
`)

document.write(`<h2>Q3: Get all elements of class “render” and show their innerHTML in browser<h3>`)

var renderElements = document.querySelectorAll(".render")
document.write(`<p>Ans: ${renderElements[0].innerHTML}<br>
2. ${renderElements[1].innerHTML}<br>
3. ${renderElements[2].innerHTML}<br>
4. ${renderElements[3].innerHTML}<br>
5. ${renderElements[4].innerHTML}<br></p>`)

document.write(`<h3>Q4:  Fill input value whose element id first-name using javascript. </h3>`)
document.getElementById("first-name").value = "Ali"

document.write(`<h3>Q5: Repeat part iv for id ”last-name” and “email” </h3>`)
document.getElementById("last-name").value = "Abid"
document.getElementById("email").value = "xyz@gmail.com"