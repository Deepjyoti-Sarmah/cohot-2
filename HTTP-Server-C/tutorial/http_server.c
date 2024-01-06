#include<stdio.h>
#include<stdio.h>
#include<string.h>

#include<sys/socket.h>
#include<sys/types.h>

int main()
{
  // open a file to serve
  FILE *http_data;
  http_data = fopen("index.html", "r");
  
  char response_data[1024];
  fgets(response_data, 1024, http_data);

  char http_header[2048] = "HTTP/1.1 200 OK\n\n";
  strcat(http_header, response_data);

  // create a socket
  int server_socket;
  server_socket = socket(AF_INET, SOCK_STREAM, 0);




  return 0;
}
