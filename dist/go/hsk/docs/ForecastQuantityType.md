# ForecastQuantityType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** | Date of the statistic. | [optional] 
**IsWeekend** | Pointer to **bool** | Indicates whether the day is a weekend day or not. | [optional] 
**Quantity** | Pointer to **int32** | The actual quantity | [optional] 
**RoomTypeBreakDown** | Pointer to [**[]RoomTypeTaskType**](RoomTypeTaskType.md) | This is a break-down of the different room types and their tasks count on a date. | [optional] 

## Methods

### NewForecastQuantityType

`func NewForecastQuantityType() *ForecastQuantityType`

NewForecastQuantityType instantiates a new ForecastQuantityType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewForecastQuantityTypeWithDefaults

`func NewForecastQuantityTypeWithDefaults() *ForecastQuantityType`

NewForecastQuantityTypeWithDefaults instantiates a new ForecastQuantityType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *ForecastQuantityType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *ForecastQuantityType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *ForecastQuantityType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *ForecastQuantityType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetIsWeekend

`func (o *ForecastQuantityType) GetIsWeekend() bool`

GetIsWeekend returns the IsWeekend field if non-nil, zero value otherwise.

### GetIsWeekendOk

`func (o *ForecastQuantityType) GetIsWeekendOk() (*bool, bool)`

GetIsWeekendOk returns a tuple with the IsWeekend field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsWeekend

`func (o *ForecastQuantityType) SetIsWeekend(v bool)`

SetIsWeekend sets IsWeekend field to given value.

### HasIsWeekend

`func (o *ForecastQuantityType) HasIsWeekend() bool`

HasIsWeekend returns a boolean if a field has been set.

### GetQuantity

`func (o *ForecastQuantityType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *ForecastQuantityType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *ForecastQuantityType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *ForecastQuantityType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetRoomTypeBreakDown

`func (o *ForecastQuantityType) GetRoomTypeBreakDown() []RoomTypeTaskType`

GetRoomTypeBreakDown returns the RoomTypeBreakDown field if non-nil, zero value otherwise.

### GetRoomTypeBreakDownOk

`func (o *ForecastQuantityType) GetRoomTypeBreakDownOk() (*[]RoomTypeTaskType, bool)`

GetRoomTypeBreakDownOk returns a tuple with the RoomTypeBreakDown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeBreakDown

`func (o *ForecastQuantityType) SetRoomTypeBreakDown(v []RoomTypeTaskType)`

SetRoomTypeBreakDown sets RoomTypeBreakDown field to given value.

### HasRoomTypeBreakDown

`func (o *ForecastQuantityType) HasRoomTypeBreakDown() bool`

HasRoomTypeBreakDown returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


