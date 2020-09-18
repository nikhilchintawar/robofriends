import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants';

import * as reducers from './reducers';

describe('serachrobots', () => {
    const initialStateSearch = {
        searchField: ''
    }
    it('should return the initial state', () => {
        expect(reducers.searchRobotsReducer(undefined, {})).toEqual({ searchField: ''})
    })

    it('should handle change search field', () => {
        expect(reducers.searchRobotsReducer(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc'})
    })
})

describe('requestRobots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false,
        error: ''
    }
    it('should return the initial state', () => {
        expect(reducers.requestRobotsReducer(undefined, {})).toEqual(initialStateRobots)
    })

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(
          reducers.requestRobotsReducer(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING,
            payload: {isPending: true}
          })
        ).toEqual(
            {
                robots: [],
                isPending: true,
                error: ''
            }
        )
      })
      it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(
          reducers.requestRobotsReducer(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'j@jmail.com'
              }]
          })
        ).toEqual(
          {
            robots: [{
              id: '123',
              name: 'test',
              email: 'j@jmail.com'
            }],
            isPending: false,
            error: ''
          }
        )
      })
      it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(
          reducers.requestRobotsReducer(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'NOOO'
          })
        ).toEqual(
          {
            error: 'NOOO',
            robots: [],
            isPending: false
          }
        )
      })
})