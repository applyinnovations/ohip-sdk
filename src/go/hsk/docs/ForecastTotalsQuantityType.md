# ForecastTotalsQuantityType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** | Date of the statistic. | [optional] 
**IsWeekend** | Pointer to **bool** | Indicates whether the day is a weekend day or not. | [optional] 
**Quantity** | Pointer to **int32** | The actual quantity | [optional] 
**RoomTypeBreakDown** | Pointer to [**RoomTypeTasksType**](RoomTypeTasksType.md) |  | [optional] 
**TotalCredits** | Pointer to **int32** | Total Credits on the specified date. | [optional] 

## Methods

### NewForecastTotalsQuantityType

`func NewForecastTotalsQuantityType() *ForecastTotalsQuantityType`

NewForecastTotalsQuantityType instantiates a new ForecastTotalsQuantityType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewForecastTotalsQuantityTypeWithDefaults

`func NewForecastTotalsQuantityTypeWithDefaults() *ForecastTotalsQuantityType`

NewForecastTotalsQuantityTypeWithDefaults instantiates a new ForecastTotalsQuantityType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *ForecastTotalsQuantityType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *ForecastTotalsQuantityType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *ForecastTotalsQuantityType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *ForecastTotalsQuantityType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetIsWeekend

`func (o *ForecastTotalsQuantityType) GetIsWeekend() bool`

GetIsWeekend returns the IsWeekend field if non-nil, zero value otherwise.

### GetIsWeekendOk

`func (o *ForecastTotalsQuantityType) GetIsWeekendOk() (*bool, bool)`

GetIsWeekendOk returns a tuple with the IsWeekend field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsWeekend

`func (o *ForecastTotalsQuantityType) SetIsWeekend(v bool)`

SetIsWeekend sets IsWeekend field to given value.

### HasIsWeekend

`func (o *ForecastTotalsQuantityType) HasIsWeekend() bool`

HasIsWeekend returns a boolean if a field has been set.

### GetQuantity

`func (o *ForecastTotalsQuantityType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *ForecastTotalsQuantityType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *ForecastTotalsQuantityType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *ForecastTotalsQuantityType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetRoomTypeBreakDown

`func (o *ForecastTotalsQuantityType) GetRoomTypeBreakDown() RoomTypeTasksType`

GetRoomTypeBreakDown returns the RoomTypeBreakDown field if non-nil, zero value otherwise.

### GetRoomTypeBreakDownOk

`func (o *ForecastTotalsQuantityType) GetRoomTypeBreakDownOk() (*RoomTypeTasksType, bool)`

GetRoomTypeBreakDownOk returns a tuple with the RoomTypeBreakDown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeBreakDown

`func (o *ForecastTotalsQuantityType) SetRoomTypeBreakDown(v RoomTypeTasksType)`

SetRoomTypeBreakDown sets RoomTypeBreakDown field to given value.

### HasRoomTypeBreakDown

`func (o *ForecastTotalsQuantityType) HasRoomTypeBreakDown() bool`

HasRoomTypeBreakDown returns a boolean if a field has been set.

### GetTotalCredits

`func (o *ForecastTotalsQuantityType) GetTotalCredits() int32`

GetTotalCredits returns the TotalCredits field if non-nil, zero value otherwise.

### GetTotalCreditsOk

`func (o *ForecastTotalsQuantityType) GetTotalCreditsOk() (*int32, bool)`

GetTotalCreditsOk returns a tuple with the TotalCredits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCredits

`func (o *ForecastTotalsQuantityType) SetTotalCredits(v int32)`

SetTotalCredits sets TotalCredits field to given value.

### HasTotalCredits

`func (o *ForecastTotalsQuantityType) HasTotalCredits() bool`

HasTotalCredits returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


