class Order < ApplicationRecord
	    belongs_to :client      #un client 1 ---- N  commande
	    belongs_to :resto      #un Resto 1 ---- N  commande

end
