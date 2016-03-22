let origin = {
  "Democrats Abroad": {
    state: "Democrats Abroad",
    date: new Date("March 1, 2016"),
    delegates: 13,
    superdelegates: 4,
    class: "closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "Iowa": {
    state: "Iowa",
    date: new Date("February 1, 2016"),
    delegates: 44,
    superdelegates: 8,
    class: "semi-open",
    candidates: {"clinton":23, "sanders":21}
  },
  "New Hampshire": {
    state: "New Hampshire",
    date: new Date("February 9, 2016"),
    delegates: 24,
    superdelegates: 8,
    class: "semi-closed",
    candidates: {"clinton":9, "sanders":15}
  },
  "Nevada": {
    state: "Nevada",
    date: new Date("February 20, 2016"),
    delegates: 35,
    superdelegates: 8,
    class: "closed",
    candidates: {"clinton":19, "sanders":15}
  },
  "South Carolina": {
    state: "South Carolina",
    date: new Date("February 27, 2016"),
    delegates: 53,
    superdelegates: 6,
    class: "open",
    candidates: {"clinton":39, "sanders":14}
  },
  "Alabama": {
    state: "Alabama",
    date: new Date("March 1, 2016"),
    delegates: 53,
    superdelegates: 7,
    class: "open",
    candidates: {"clinton":44, "sanders":9}
  },
  "American Samoa": {
    state: "American Samoa",
    date: new Date("March 1, 2016"),
    delegates: 6,
    superdelegates: 4,
    class: "closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "Arkansas": {
    state: "Arkansas",
    date: new Date("March 1, 2016"),
    delegates: 32,
    superdelegates: 5,
    class: "open",
    candidates: {"clinton":22, "sanders":10}
  },
  "Colorado": {
    state: "Colorado",
    date: new Date("March 1, 2016"),
    delegates: 66,
    superdelegates: 13,
    class: "closed",
    candidates: {"clinton":28, "sanders":38}
  },
  "Georgia":{
    state:"Georgia",
    date: new Date("03/01/16"),
    delegates:102,
    superdelegates: 14,
    class: "open",
    candidates: {"clinton":72, "sanders":28}
  },

  "Massachusetts":{
    state:"Massachusetts",
    date: new Date("03/01/16"),
    delegates:91,
    superdelegates: 25,
    class: "semi-closed",
    candidates: {"clinton":46, "sanders":45}
  },
  "Minnesota":{
    state:"Minnesota",
    date: new Date("03/01/16"),
    delegates:77,
    superdelegates: 16,
    class: "open",
    candidates: {"clinton":29, "sanders":46}
  },
  "Oklahoma":{
    state:"Oklahoma",
    date: new Date("03/01/16"),
    delegates:38,
    superdelegates: 4,
    class: "semi-closed",
    candidates: {"clinton":17, "sanders":21}
  },
  "Tennessee":{
    state:"Tennessee",
    date: new Date("03/01/16"),
    delegates:67,
    superdelegates: 9,
    class: "open",
    candidates: {"clinton":42, "sanders":22}
  },
  "Texas":{
    state:"Texas",
    date: new Date("03/01/16"),
    delegates:222,
    superdelegates: 30,
    class: "open",
    candidates: {"clinton":145, "sanders":74}
  },
  "Vermont":{
    state:"Vermont",
    date: new Date("03/01/16"),
    delegates:16,
    superdelegates: 10,
    class: "open",
    candidates: {"clinton":0, "sanders":16}
  },
  "Virginia":{
    state:"Virginia",
    date: new Date("03/01/16"),
    delegates:95,
    superdelegates: 15,
    class: "open",
    candidates: {"clinton":61, "sanders":33}
  },
  "Louisiana":{
    state:"Louisiana",
    date: new Date("03/05/16"),
    delegates:51,
    superdelegates: 8,
    class: "closed",
    candidates: {"clinton":35, "sanders":12}
  },
  "Nebraska":{
    state:"Nebraska",
    date: new Date("03/05/16"),
    delegates:25,
    superdelegates: 5,
    class: "closed",
    candidates: {"clinton":10, "sanders":14}
  },
  "Kansas":{
    state:"Kansas",
    date: new Date("03/05/16"),
    delegates:33,
    superdelegates: 4,
    class: "closed",
    candidates: {"clinton":10, "sanders":23}
  },
  "Maine":{
    state:"Maine",
    date: new Date("03/06/16"),
    delegates:25,
    superdelegates: 5,
    class: "closed",
    candidates: {"clinton":7, "sanders":15}
  },
  "Mississippi":{
    state:"Mississippi",
    date: new Date("03/08/16"),
    delegates:36,
    superdelegates: 5,
    class: "open",
    candidates: {"clinton":30, "sanders":4}
  },
  "Michigan":{
    state:"Michigan",
    date: new Date("03/08/16"),
    delegates:130,
    superdelegates: 17,
    class: "open",
    candidates: {"clinton":60, "sanders":67}
  },
  "Northern Marianas":{
    state:"Northern Marianas",
    date: new Date("03/12/16"),
    delegates:6,
    superdelegates: 5,
    class: "n/a",
    candidates: {"clinton":0, "sanders":0}
  },
  "Florida":{
    state:"Florida",
    date: new Date("03/15/16"),
    delegates:214,
    superdelegates: 32,
    class: "closed",
    candidates: {"clinton":133, "sanders":65}
  },
  "Illinois":{
    state:"Illinois",
    date: new Date("03/15/16"),
    delegates:156,
    superdelegates: 26,
    class: "open",
    candidates: {"clinton":68, "sanders":67}
  },
  "Missouri":{
    state:"Missouri",
    date: new Date("03/15/16"),
    delegates:71,
    superdelegates: 13,
    class: "open",
    candidates: {"clinton":32, "sanders":32}
  },
  "North Carolina":{
    state:"North Carolina",
    date: new Date("03/15/16"),
    delegates:107,
    superdelegates: 14,
    class: "semi-closed",
    candidates: {"clinton":59, "sanders":45}
  },
  "Ohio":{
    state:"Ohio",
    date: new Date("03/15/16"),
    delegates:143,
    superdelegates: 16,
    class: "semi-open",
    candidates: {"clinton":79, "sanders":62}
  },
  "Arizona":{
    state:"Arizona",
    date: new Date("03/22/16"),
    delegates:75,
    superdelegates: 10,
    class: "closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "Idaho":{
    state:"Idaho",
    date: new Date("03/22/16"),
    delegates:23,
    superdelegates: 4,
    class: "open",
    candidates: {"clinton":0, "sanders":0}
  },
  "Utah":{
    state:"Utah",
    date: new Date("03/22/16"),
    delegates:33,
    superdelegates: 4,
    class: "semi-open",
    candidates: {"clinton":0, "sanders":0}
  },
  "Alaska":{
    state:"Alaska",
    date: new Date("03/26/16"),
    delegates:16,
    superdelegates: 4,
    class: "closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "Hawaii":{
    state:"Hawaii",
    date: new Date("03/26/16"),
    delegates:25,
    superdelegates: 9,
    class: "semi-closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "Washington":{
    state:"Washington",
    date: new Date("03/26/16"),
    delegates:101,
    superdelegates: 17,
    class: "open",
    candidates: {"clinton":0, "sanders":0}
  },
  "Wisconsin":{
    state:"Wisconsin",
    date: new Date("04/05/16"),
    delegates:86,
    superdelegates: 10,
    class: "open",
    candidates: {"clinton":0, "sanders":0}
  },
  "Wyoming":{
    state:"Wyoming",
    date: new Date("04/09/16"),
    delegates:14,
    superdelegates: 4,
    class: "closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "New York":{
    state:"New York",
    date: new Date("04/19/16"),
    delegates:247,
    superdelegates: 44,
    class: "closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "Maryland":{
    state:"Maryland",
    date: new Date("04/26/16"),
    delegates:95,
    superdelegates: 23,
    class: "closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "Connecticut":{
    state:"Connecticut",
    date: new Date("04/26/16"),
    delegates:55,
    superdelegates: 15,
    class: "closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "Delaware":{
    state:"Delaware",
    date: new Date("04/26/16"),
    delegates:21,
    superdelegates: 10,
    class: "closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "Pennsylvania":{
    state:"Pennsylvania",
    date: new Date("04/26/16"),
    delegates:189,
    superdelegates: 21,
    class: "closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "Rhode Island":{
    state:"Rhode Island",
    date: new Date("04/26/16"),
    delegates:24,
    superdelegates: 9,
    class: "semi-closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "Indiana":{
    state:"Indiana",
    date: new Date("05/03/16"),
    delegates:83,
    superdelegates: 9,
    class: "open",
    candidates: {"clinton":0, "sanders":0}
  },
  "Guam":{
    state:"Guam",
    date: new Date("05/07/16"),
    delegates:7,
    superdelegates: 5,
    class: "closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "West Virginia":{
    state:"West Virginia",
    date: new Date("05/10/16"),
    delegates:29,
    superdelegates: 8,
    class: "semi-closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "Kentucky":{
    state:"Kentucky",
    date: new Date("05/17/16"),
    delegates:55,
    superdelegates: 5,
    class: "closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "Oregon":{
    state:"Oregon",
    date: new Date("05/17/16"),
    delegates:61,
    superdelegates: 13,
    class: "closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "Virgin Islands":{
    state:"Virgin Islands",
    date: new Date("06/04/16"),
    delegates:7,
    superdelegates: 5,
    class: "closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "Puerto Rico":{
    state:"Puerto Rico",
    date: new Date("06/05/16"),
    delegates:60,
    superdelegates: 7,
    class: "open",
    candidates: {"clinton":0, "sanders":0}
  },
  "California":{
    state:"California",
    date: new Date("06/07/16"),
    delegates:475,
    superdelegates: 71,
    class: "semi-closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "Montana":{
    state:"Montana",
    date: new Date("06/07/16"),
    delegates:21,
    superdelegates: 6,
    class: "open",
    candidates: {"clinton":0, "sanders":0}
  },
  "New Jersey":{
    state:"New Jersey",
    date: new Date("06/07/16"),
    delegates:126,
    superdelegates: 16,
    class: "closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "North Dakota":{
    state:"North Dakota",
    date: new Date("06/07/16"),
    delegates:18,
    superdelegates: 5,
    class: "open",
    candidates: {"clinton":0, "sanders":0}
  },
  "New Mexico":{
    state:"New Mexico",
    date: new Date("06/07/16"),
    delegates:34,
    superdelegates: 9,
    class: "closed",
    candidates: {"clinton":0, "sanders":0}
  },
  "South Dakota":{
    state:"South Dakota",
    date: new Date("06/07/16"),
    delegates:20,
    superdelegates: 5,
    class: "semi-open",
    candidates: {"clinton":0, "sanders":0}
  },
  "District of Columbia":{
    state:"District of Columbia",
    date: new Date("06/14/16"),
    delegates:20,
    superdelegates: 25,
    class: "closed",
    candidates: {"clinton":0, "sanders":0}
  }
}

const blueStateDelegates = (state = origin, action) => {
  switch (action.type) {
    case 'SET_DELEGATE':
      let newstate = state[action.state]
      newstate.candidates[action.candidate] = action.vote
      return {...state, [action.state]:newstate}
    case 'RESET_DELEGATE':
      return {origin}
    default:
      return state
  }
}

export default blueStateDelegates
