# BlockSalesAllowanceRangeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Contains Hotel Code. | [optional] 
**Quantity** | Pointer to **int32** | Contains quantity for sales allowance. | [optional] 
**CutoffDays** | Pointer to **int32** | Number of days before sales allowance date, after which unused quantity should set to 0. | [optional] 
**IncrementFlag** | Pointer to **bool** | Flag to indicate if the sales allowance update is absolute or relative to the current value. | [optional] 
**OverwriteExistingSalesAllowance** | Pointer to **bool** | Flag to indicate if the sales allowance already exists for criteria then overwrite the records. | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**Sunday** | Pointer to **bool** |  | [optional] 
**Monday** | Pointer to **bool** |  | [optional] 
**Tuesday** | Pointer to **bool** |  | [optional] 
**Wednesday** | Pointer to **bool** |  | [optional] 
**Thursday** | Pointer to **bool** |  | [optional] 
**Friday** | Pointer to **bool** |  | [optional] 
**Saturday** | Pointer to **bool** |  | [optional] 
**ValidateExistingSalesAllowance** | Pointer to **bool** | Flag to validate existing sales allowance records within criteria. | [optional] 

## Methods

### NewBlockSalesAllowanceRangeType

`func NewBlockSalesAllowanceRangeType() *BlockSalesAllowanceRangeType`

NewBlockSalesAllowanceRangeType instantiates a new BlockSalesAllowanceRangeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockSalesAllowanceRangeTypeWithDefaults

`func NewBlockSalesAllowanceRangeTypeWithDefaults() *BlockSalesAllowanceRangeType`

NewBlockSalesAllowanceRangeTypeWithDefaults instantiates a new BlockSalesAllowanceRangeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *BlockSalesAllowanceRangeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockSalesAllowanceRangeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockSalesAllowanceRangeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockSalesAllowanceRangeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetQuantity

`func (o *BlockSalesAllowanceRangeType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *BlockSalesAllowanceRangeType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *BlockSalesAllowanceRangeType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *BlockSalesAllowanceRangeType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetCutoffDays

`func (o *BlockSalesAllowanceRangeType) GetCutoffDays() int32`

GetCutoffDays returns the CutoffDays field if non-nil, zero value otherwise.

### GetCutoffDaysOk

`func (o *BlockSalesAllowanceRangeType) GetCutoffDaysOk() (*int32, bool)`

GetCutoffDaysOk returns a tuple with the CutoffDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutoffDays

`func (o *BlockSalesAllowanceRangeType) SetCutoffDays(v int32)`

SetCutoffDays sets CutoffDays field to given value.

### HasCutoffDays

`func (o *BlockSalesAllowanceRangeType) HasCutoffDays() bool`

HasCutoffDays returns a boolean if a field has been set.

### GetIncrementFlag

`func (o *BlockSalesAllowanceRangeType) GetIncrementFlag() bool`

GetIncrementFlag returns the IncrementFlag field if non-nil, zero value otherwise.

### GetIncrementFlagOk

`func (o *BlockSalesAllowanceRangeType) GetIncrementFlagOk() (*bool, bool)`

GetIncrementFlagOk returns a tuple with the IncrementFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncrementFlag

`func (o *BlockSalesAllowanceRangeType) SetIncrementFlag(v bool)`

SetIncrementFlag sets IncrementFlag field to given value.

### HasIncrementFlag

`func (o *BlockSalesAllowanceRangeType) HasIncrementFlag() bool`

HasIncrementFlag returns a boolean if a field has been set.

### GetOverwriteExistingSalesAllowance

`func (o *BlockSalesAllowanceRangeType) GetOverwriteExistingSalesAllowance() bool`

GetOverwriteExistingSalesAllowance returns the OverwriteExistingSalesAllowance field if non-nil, zero value otherwise.

### GetOverwriteExistingSalesAllowanceOk

`func (o *BlockSalesAllowanceRangeType) GetOverwriteExistingSalesAllowanceOk() (*bool, bool)`

GetOverwriteExistingSalesAllowanceOk returns a tuple with the OverwriteExistingSalesAllowance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverwriteExistingSalesAllowance

`func (o *BlockSalesAllowanceRangeType) SetOverwriteExistingSalesAllowance(v bool)`

SetOverwriteExistingSalesAllowance sets OverwriteExistingSalesAllowance field to given value.

### HasOverwriteExistingSalesAllowance

`func (o *BlockSalesAllowanceRangeType) HasOverwriteExistingSalesAllowance() bool`

HasOverwriteExistingSalesAllowance returns a boolean if a field has been set.

### GetStart

`func (o *BlockSalesAllowanceRangeType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *BlockSalesAllowanceRangeType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *BlockSalesAllowanceRangeType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *BlockSalesAllowanceRangeType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *BlockSalesAllowanceRangeType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *BlockSalesAllowanceRangeType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *BlockSalesAllowanceRangeType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *BlockSalesAllowanceRangeType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetSunday

`func (o *BlockSalesAllowanceRangeType) GetSunday() bool`

GetSunday returns the Sunday field if non-nil, zero value otherwise.

### GetSundayOk

`func (o *BlockSalesAllowanceRangeType) GetSundayOk() (*bool, bool)`

GetSundayOk returns a tuple with the Sunday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunday

`func (o *BlockSalesAllowanceRangeType) SetSunday(v bool)`

SetSunday sets Sunday field to given value.

### HasSunday

`func (o *BlockSalesAllowanceRangeType) HasSunday() bool`

HasSunday returns a boolean if a field has been set.

### GetMonday

`func (o *BlockSalesAllowanceRangeType) GetMonday() bool`

GetMonday returns the Monday field if non-nil, zero value otherwise.

### GetMondayOk

`func (o *BlockSalesAllowanceRangeType) GetMondayOk() (*bool, bool)`

GetMondayOk returns a tuple with the Monday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonday

`func (o *BlockSalesAllowanceRangeType) SetMonday(v bool)`

SetMonday sets Monday field to given value.

### HasMonday

`func (o *BlockSalesAllowanceRangeType) HasMonday() bool`

HasMonday returns a boolean if a field has been set.

### GetTuesday

`func (o *BlockSalesAllowanceRangeType) GetTuesday() bool`

GetTuesday returns the Tuesday field if non-nil, zero value otherwise.

### GetTuesdayOk

`func (o *BlockSalesAllowanceRangeType) GetTuesdayOk() (*bool, bool)`

GetTuesdayOk returns a tuple with the Tuesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTuesday

`func (o *BlockSalesAllowanceRangeType) SetTuesday(v bool)`

SetTuesday sets Tuesday field to given value.

### HasTuesday

`func (o *BlockSalesAllowanceRangeType) HasTuesday() bool`

HasTuesday returns a boolean if a field has been set.

### GetWednesday

`func (o *BlockSalesAllowanceRangeType) GetWednesday() bool`

GetWednesday returns the Wednesday field if non-nil, zero value otherwise.

### GetWednesdayOk

`func (o *BlockSalesAllowanceRangeType) GetWednesdayOk() (*bool, bool)`

GetWednesdayOk returns a tuple with the Wednesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWednesday

`func (o *BlockSalesAllowanceRangeType) SetWednesday(v bool)`

SetWednesday sets Wednesday field to given value.

### HasWednesday

`func (o *BlockSalesAllowanceRangeType) HasWednesday() bool`

HasWednesday returns a boolean if a field has been set.

### GetThursday

`func (o *BlockSalesAllowanceRangeType) GetThursday() bool`

GetThursday returns the Thursday field if non-nil, zero value otherwise.

### GetThursdayOk

`func (o *BlockSalesAllowanceRangeType) GetThursdayOk() (*bool, bool)`

GetThursdayOk returns a tuple with the Thursday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThursday

`func (o *BlockSalesAllowanceRangeType) SetThursday(v bool)`

SetThursday sets Thursday field to given value.

### HasThursday

`func (o *BlockSalesAllowanceRangeType) HasThursday() bool`

HasThursday returns a boolean if a field has been set.

### GetFriday

`func (o *BlockSalesAllowanceRangeType) GetFriday() bool`

GetFriday returns the Friday field if non-nil, zero value otherwise.

### GetFridayOk

`func (o *BlockSalesAllowanceRangeType) GetFridayOk() (*bool, bool)`

GetFridayOk returns a tuple with the Friday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFriday

`func (o *BlockSalesAllowanceRangeType) SetFriday(v bool)`

SetFriday sets Friday field to given value.

### HasFriday

`func (o *BlockSalesAllowanceRangeType) HasFriday() bool`

HasFriday returns a boolean if a field has been set.

### GetSaturday

`func (o *BlockSalesAllowanceRangeType) GetSaturday() bool`

GetSaturday returns the Saturday field if non-nil, zero value otherwise.

### GetSaturdayOk

`func (o *BlockSalesAllowanceRangeType) GetSaturdayOk() (*bool, bool)`

GetSaturdayOk returns a tuple with the Saturday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaturday

`func (o *BlockSalesAllowanceRangeType) SetSaturday(v bool)`

SetSaturday sets Saturday field to given value.

### HasSaturday

`func (o *BlockSalesAllowanceRangeType) HasSaturday() bool`

HasSaturday returns a boolean if a field has been set.

### GetValidateExistingSalesAllowance

`func (o *BlockSalesAllowanceRangeType) GetValidateExistingSalesAllowance() bool`

GetValidateExistingSalesAllowance returns the ValidateExistingSalesAllowance field if non-nil, zero value otherwise.

### GetValidateExistingSalesAllowanceOk

`func (o *BlockSalesAllowanceRangeType) GetValidateExistingSalesAllowanceOk() (*bool, bool)`

GetValidateExistingSalesAllowanceOk returns a tuple with the ValidateExistingSalesAllowance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidateExistingSalesAllowance

`func (o *BlockSalesAllowanceRangeType) SetValidateExistingSalesAllowance(v bool)`

SetValidateExistingSalesAllowance sets ValidateExistingSalesAllowance field to given value.

### HasValidateExistingSalesAllowance

`func (o *BlockSalesAllowanceRangeType) HasValidateExistingSalesAllowance() bool`

HasValidateExistingSalesAllowance returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


