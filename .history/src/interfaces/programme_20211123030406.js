

export class UnivEvent {
    constructor(
        id,
        day,
        type,
        fromTime,
        toTime,
        room,
        group,
        group_longform
    ) { 
        this.id = id;
        this.day = day;
        this.type = type;
        this.fromTime = fromTime;
        this.room = room;
        this.group = group;
        this.toTime = toTime;
        this.
    }
}

export class Programme {

    constructor(
        events,
        name
    ) { 
        this.events = events;
        this.name = name;
    }
}