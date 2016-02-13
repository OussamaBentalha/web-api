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
            required: false
        },
        eventDate: {
            type: Date,
            required: true
        },
        categoryId: {
            type: app.mongoose.Schema.ObjectId,
            ref: 'Category',
            required: true
        },
        organizerId: {
            type: app.mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        participantsId: [{
            type: app.mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
        picturesUrl: [{
            type: String,
            default: '/default_avatar.png'
        }]

    });

    EventSchema.plugin(require('mongoose-timestamp'));

    var Event = app.mongoose.model('Event', EventSchema);
    return Event;
};