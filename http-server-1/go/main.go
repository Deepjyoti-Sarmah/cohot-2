package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func homeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "welcome to the home page!")
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
	// extracr the "name"
	vars := mux.Vars(r)
	name := vars["name"]

	// send a greeting with extracted name
	fmt.Fprint(w, "Hello, %s\n", name)

}

func main() {
	// creating a new gorilla mux router
	router := mux.NewRouter()

	// define routes
	router.HandleFunc("/", homeHandler).Methods("GET")
	router.HandleFunc("/hello/{name}", helloHandler).Methods("GET")

	//set up the http server with gorilla mux router
	server := &http.Server{
		Addr:    ":8080",
		Handler: router,
	}

	//start the server
	fmt.Println("Server is listening on :8080...")
	err := server.ListenAndServe()
	if err != nil {
		fmt.Println("Error starting the server:", err)
	}
}
