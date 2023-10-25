# HotelEventCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DateRange** | Pointer to [**TimeSpanDaysOfWeekType**](TimeSpanDaysOfWeekType.md) |  | [optional] 
**EventCode** | Pointer to **string** | Event code selected. | [optional] 
**HotelId** | Pointer to **string** | Code of the hotel for which the events are being set. | [optional] 

## Methods

### NewHotelEventCodeType

`func NewHotelEventCodeType() *HotelEventCodeType`

NewHotelEventCodeType instantiates a new HotelEventCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelEventCodeTypeWithDefaults

`func NewHotelEventCodeTypeWithDefaults() *HotelEventCodeType`

NewHotelEventCodeTypeWithDefaults instantiates a new HotelEventCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDateRange

`func (o *HotelEventCodeType) GetDateRange() TimeSpanDaysOfWeekType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *HotelEventCodeType) GetDateRangeOk() (*TimeSpanDaysOfWeekType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *HotelEventCodeType) SetDateRange(v TimeSpanDaysOfWeekType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *HotelEventCodeType) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.

### GetEventCode

`func (o *HotelEventCodeType) GetEventCode() string`

GetEventCode returns the EventCode field if non-nil, zero value otherwise.

### GetEventCodeOk

`func (o *HotelEventCodeType) GetEventCodeOk() (*string, bool)`

GetEventCodeOk returns a tuple with the EventCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventCode

`func (o *HotelEventCodeType) SetEventCode(v string)`

SetEventCode sets EventCode field to given value.

### HasEventCode

`func (o *HotelEventCodeType) HasEventCode() bool`

HasEventCode returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelEventCodeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelEventCodeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelEventCodeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelEventCodeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


