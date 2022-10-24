class Recipe < ApplicationRecord
    include MeiliSearch::Rails
    
    meilisearch do
        # all attributes will be sent to Meilisearch if block is left empty
        displayed_attributes [:id, :title, :ingredients, :directions, :diet]
        searchable_attributes [:title, :ingredients, :directions, :diet]
        filterable_attributes [:diet]
    end
end
