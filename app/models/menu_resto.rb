class MenuResto < ApplicationRecord

	    #relation Menu N-N Resto
    belongs_to :menu
    belongs_to :resto
    

end
