# HotelCalendarType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalendarDay** | Pointer to [**[]HotelCalendarDayType**](HotelCalendarDayType.md) | Entries for a specific calendar day. | [optional] 
**HotelId** | Pointer to **string** | Indicates a specific hotel for which the calendar is being represented. | [optional] 

## Methods

### NewHotelCalendarType

`func NewHotelCalendarType() *HotelCalendarType`

NewHotelCalendarType instantiates a new HotelCalendarType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelCalendarTypeWithDefaults

`func NewHotelCalendarTypeWithDefaults() *HotelCalendarType`

NewHotelCalendarTypeWithDefaults instantiates a new HotelCalendarType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCalendarDay

`func (o *HotelCalendarType) GetCalendarDay() []HotelCalendarDayType`

GetCalendarDay returns the CalendarDay field if non-nil, zero value otherwise.

### GetCalendarDayOk

`func (o *HotelCalendarType) GetCalendarDayOk() (*[]HotelCalendarDayType, bool)`

GetCalendarDayOk returns a tuple with the CalendarDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalendarDay

`func (o *HotelCalendarType) SetCalendarDay(v []HotelCalendarDayType)`

SetCalendarDay sets CalendarDay field to given value.

### HasCalendarDay

`func (o *HotelCalendarType) HasCalendarDay() bool`

HasCalendarDay returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelCalendarType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelCalendarType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelCalendarType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelCalendarType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


