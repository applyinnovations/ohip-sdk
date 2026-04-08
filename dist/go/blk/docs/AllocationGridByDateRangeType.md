# AllocationGridByDateRangeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Inventory** | Pointer to [**SetBlockGridInvType**](SetBlockGridInvType.md) |  | [optional] 
**Rate** | Pointer to [**BlockGridRatesType**](BlockGridRatesType.md) |  | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**Sunday** | Pointer to **bool** |  | [optional] 
**Monday** | Pointer to **bool** |  | [optional] 
**Tuesday** | Pointer to **bool** |  | [optional] 
**Wednesday** | Pointer to **bool** |  | [optional] 
**Thursday** | Pointer to **bool** |  | [optional] 
**Friday** | Pointer to **bool** |  | [optional] 
**Saturday** | Pointer to **bool** |  | [optional] 

## Methods

### NewAllocationGridByDateRangeType

`func NewAllocationGridByDateRangeType() *AllocationGridByDateRangeType`

NewAllocationGridByDateRangeType instantiates a new AllocationGridByDateRangeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAllocationGridByDateRangeTypeWithDefaults

`func NewAllocationGridByDateRangeTypeWithDefaults() *AllocationGridByDateRangeType`

NewAllocationGridByDateRangeTypeWithDefaults instantiates a new AllocationGridByDateRangeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInventory

`func (o *AllocationGridByDateRangeType) GetInventory() SetBlockGridInvType`

GetInventory returns the Inventory field if non-nil, zero value otherwise.

### GetInventoryOk

`func (o *AllocationGridByDateRangeType) GetInventoryOk() (*SetBlockGridInvType, bool)`

GetInventoryOk returns a tuple with the Inventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventory

`func (o *AllocationGridByDateRangeType) SetInventory(v SetBlockGridInvType)`

SetInventory sets Inventory field to given value.

### HasInventory

`func (o *AllocationGridByDateRangeType) HasInventory() bool`

HasInventory returns a boolean if a field has been set.

### GetRate

`func (o *AllocationGridByDateRangeType) GetRate() BlockGridRatesType`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *AllocationGridByDateRangeType) GetRateOk() (*BlockGridRatesType, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *AllocationGridByDateRangeType) SetRate(v BlockGridRatesType)`

SetRate sets Rate field to given value.

### HasRate

`func (o *AllocationGridByDateRangeType) HasRate() bool`

HasRate returns a boolean if a field has been set.

### GetStart

`func (o *AllocationGridByDateRangeType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *AllocationGridByDateRangeType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *AllocationGridByDateRangeType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *AllocationGridByDateRangeType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *AllocationGridByDateRangeType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *AllocationGridByDateRangeType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *AllocationGridByDateRangeType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *AllocationGridByDateRangeType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetSunday

`func (o *AllocationGridByDateRangeType) GetSunday() bool`

GetSunday returns the Sunday field if non-nil, zero value otherwise.

### GetSundayOk

`func (o *AllocationGridByDateRangeType) GetSundayOk() (*bool, bool)`

GetSundayOk returns a tuple with the Sunday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunday

`func (o *AllocationGridByDateRangeType) SetSunday(v bool)`

SetSunday sets Sunday field to given value.

### HasSunday

`func (o *AllocationGridByDateRangeType) HasSunday() bool`

HasSunday returns a boolean if a field has been set.

### GetMonday

`func (o *AllocationGridByDateRangeType) GetMonday() bool`

GetMonday returns the Monday field if non-nil, zero value otherwise.

### GetMondayOk

`func (o *AllocationGridByDateRangeType) GetMondayOk() (*bool, bool)`

GetMondayOk returns a tuple with the Monday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonday

`func (o *AllocationGridByDateRangeType) SetMonday(v bool)`

SetMonday sets Monday field to given value.

### HasMonday

`func (o *AllocationGridByDateRangeType) HasMonday() bool`

HasMonday returns a boolean if a field has been set.

### GetTuesday

`func (o *AllocationGridByDateRangeType) GetTuesday() bool`

GetTuesday returns the Tuesday field if non-nil, zero value otherwise.

### GetTuesdayOk

`func (o *AllocationGridByDateRangeType) GetTuesdayOk() (*bool, bool)`

GetTuesdayOk returns a tuple with the Tuesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTuesday

`func (o *AllocationGridByDateRangeType) SetTuesday(v bool)`

SetTuesday sets Tuesday field to given value.

### HasTuesday

`func (o *AllocationGridByDateRangeType) HasTuesday() bool`

HasTuesday returns a boolean if a field has been set.

### GetWednesday

`func (o *AllocationGridByDateRangeType) GetWednesday() bool`

GetWednesday returns the Wednesday field if non-nil, zero value otherwise.

### GetWednesdayOk

`func (o *AllocationGridByDateRangeType) GetWednesdayOk() (*bool, bool)`

GetWednesdayOk returns a tuple with the Wednesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWednesday

`func (o *AllocationGridByDateRangeType) SetWednesday(v bool)`

SetWednesday sets Wednesday field to given value.

### HasWednesday

`func (o *AllocationGridByDateRangeType) HasWednesday() bool`

HasWednesday returns a boolean if a field has been set.

### GetThursday

`func (o *AllocationGridByDateRangeType) GetThursday() bool`

GetThursday returns the Thursday field if non-nil, zero value otherwise.

### GetThursdayOk

`func (o *AllocationGridByDateRangeType) GetThursdayOk() (*bool, bool)`

GetThursdayOk returns a tuple with the Thursday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThursday

`func (o *AllocationGridByDateRangeType) SetThursday(v bool)`

SetThursday sets Thursday field to given value.

### HasThursday

`func (o *AllocationGridByDateRangeType) HasThursday() bool`

HasThursday returns a boolean if a field has been set.

### GetFriday

`func (o *AllocationGridByDateRangeType) GetFriday() bool`

GetFriday returns the Friday field if non-nil, zero value otherwise.

### GetFridayOk

`func (o *AllocationGridByDateRangeType) GetFridayOk() (*bool, bool)`

GetFridayOk returns a tuple with the Friday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFriday

`func (o *AllocationGridByDateRangeType) SetFriday(v bool)`

SetFriday sets Friday field to given value.

### HasFriday

`func (o *AllocationGridByDateRangeType) HasFriday() bool`

HasFriday returns a boolean if a field has been set.

### GetSaturday

`func (o *AllocationGridByDateRangeType) GetSaturday() bool`

GetSaturday returns the Saturday field if non-nil, zero value otherwise.

### GetSaturdayOk

`func (o *AllocationGridByDateRangeType) GetSaturdayOk() (*bool, bool)`

GetSaturdayOk returns a tuple with the Saturday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaturday

`func (o *AllocationGridByDateRangeType) SetSaturday(v bool)`

SetSaturday sets Saturday field to given value.

### HasSaturday

`func (o *AllocationGridByDateRangeType) HasSaturday() bool`

HasSaturday returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


