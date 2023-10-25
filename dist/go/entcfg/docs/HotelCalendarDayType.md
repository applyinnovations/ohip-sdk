# HotelCalendarDayType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** | Indicates a specific hotel for which the calendar is being represented. | [optional] 
**DayType** | Pointer to [**HotelCalendarDayTypeType**](HotelCalendarDayTypeType.md) |  | [optional] 
**Events** | Pointer to [**[]HotelCalendarEventType**](HotelCalendarEventType.md) | Details of hotel events | [optional] 

## Methods

### NewHotelCalendarDayType

`func NewHotelCalendarDayType() *HotelCalendarDayType`

NewHotelCalendarDayType instantiates a new HotelCalendarDayType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelCalendarDayTypeWithDefaults

`func NewHotelCalendarDayTypeWithDefaults() *HotelCalendarDayType`

NewHotelCalendarDayTypeWithDefaults instantiates a new HotelCalendarDayType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *HotelCalendarDayType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *HotelCalendarDayType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *HotelCalendarDayType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *HotelCalendarDayType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetDayType

`func (o *HotelCalendarDayType) GetDayType() HotelCalendarDayTypeType`

GetDayType returns the DayType field if non-nil, zero value otherwise.

### GetDayTypeOk

`func (o *HotelCalendarDayType) GetDayTypeOk() (*HotelCalendarDayTypeType, bool)`

GetDayTypeOk returns a tuple with the DayType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDayType

`func (o *HotelCalendarDayType) SetDayType(v HotelCalendarDayTypeType)`

SetDayType sets DayType field to given value.

### HasDayType

`func (o *HotelCalendarDayType) HasDayType() bool`

HasDayType returns a boolean if a field has been set.

### GetEvents

`func (o *HotelCalendarDayType) GetEvents() []HotelCalendarEventType`

GetEvents returns the Events field if non-nil, zero value otherwise.

### GetEventsOk

`func (o *HotelCalendarDayType) GetEventsOk() (*[]HotelCalendarEventType, bool)`

GetEventsOk returns a tuple with the Events field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvents

`func (o *HotelCalendarDayType) SetEvents(v []HotelCalendarEventType)`

SetEvents sets Events field to given value.

### HasEvents

`func (o *HotelCalendarDayType) HasEvents() bool`

HasEvents returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


