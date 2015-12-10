/**
 * Created by Sam on 10/12/2015.
 */
module.exports = function(app){
    var EventSchema = app.mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        eventDate: {
            type: Date,
            required: true
        }
        //TODO Image
    });

    EventSchema.plugin(require('mongoose-timestamp'));

    var Event = app.mongoose.model('Category', EventSchema);
    return Event;
};