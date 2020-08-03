class App
	def call(env)
		request = Rack::Request.new(env)
		response = Rack::Response.new

		# status = 200
		# body = []
		# headers = {"Content-Type" => "text/html"}

		# if env["PATH_INFO"] == '/'
		if request.path_info == '/'
			response.write("Home Route")
			# body << "Home Route"
		elsif request.path_info == '/cart'
			response.write("Cart")
			# body << "Cart"
		elsif request.path_info == '/add'
			item = request.params["item"]
			response.write("Added " + item)
		end
		
		response.finish
		# [status, headers, body]
	end
end
