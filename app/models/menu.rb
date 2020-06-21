class Menu < ApplicationRecord

	   #relation resto N-N menu
    has_many :menu_restos
    has_many :restos, through: :menu_restos

end
