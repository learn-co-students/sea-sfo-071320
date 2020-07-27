#!/usr/bin/env ruby

require_relative "../config/environment"

welcome
character = get_character_from_user
show_character_movies(character)
