

export class UnivEvent {
    constructor(
        id,
        day,
        type,
        fromTime,
        toTime,
        room,
        group
    ) { 
        this.id = id;
        this.day = day;
        this.type = type;
        this.fromTime = fromTime;
        this.room = room;
        this.group = group;
        this.toTime = toTime;
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