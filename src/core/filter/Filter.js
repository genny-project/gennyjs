class Filter {
  constructor( filter ) {
    this.filter = filter;
  }

  process( data ) {
    const filter = this.filter;
    let passedFilter = true;

    /* Check if the event passes the filter, first grab the keys of the event and filter */
    const eventKeys = Object.keys( data );
    const filterKeys = Object.keys( filter );

    /* Loop through all the keys in the filter if see if any match the event */
    filterKeys.forEach( k => {
      /* Now loop through all the event keys and see if we can match them */
      eventKeys.forEach( e => {
        /* Create a regex expression to test against */
        const keyFilter = new RegExp( `^${k}$` );

        /* Check to see if the event key matches the filter */
        if ( keyFilter.test( e )) {
          /* Now check if the values match */
          const eventValue = data[e];
          const filterValue = filter[k];

          /* Create a regex expression from the filter value to test against */
          const valueFilter = new RegExp( `^${filterValue}$` );

          if ( !valueFilter.test( eventValue )) {
            passedFilter = false;
          }
        }
      });
    });

    /* If we didn't pass the filter return null, otherwise return the data */
    if ( !passedFilter ) {
      return null;
    }

    return data;
  }
}

export default Filter;
