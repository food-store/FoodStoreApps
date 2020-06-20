class Resto < ApplicationRecord

	   #relation resto N-N menu
    has_many :menu_restos
    has_many :menus, through: :menu_restos
    has_many :orders #un client 1 ---- N  commande

end
