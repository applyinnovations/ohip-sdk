# SellLimitDateRangeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionType** | Pointer to **string** | It indicates the call is to update Available Rooms, Sell Limit or Sell Control Rooms. | [optional] 
**Amount** | Pointer to **float32** |  | [optional] 
**EndDate** | Pointer to **string** | The ending value of the date range. | [optional] 
**FlatOrPercentage** | Pointer to **string** |  | [optional] 
**Friday** | Pointer to **bool** |  | [optional] 
**Monday** | Pointer to **bool** |  | [optional] 
**Saturday** | Pointer to **bool** |  | [optional] 
**StartDate** | Pointer to **string** | The starting value of the date range. | [optional] 
**Sunday** | Pointer to **bool** |  | [optional] 
**Thursday** | Pointer to **bool** |  | [optional] 
**Tuesday** | Pointer to **bool** |  | [optional] 
**Wednesday** | Pointer to **bool** |  | [optional] 

## Methods

### NewSellLimitDateRangeType

`func NewSellLimitDateRangeType() *SellLimitDateRangeType`

NewSellLimitDateRangeType instantiates a new SellLimitDateRangeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSellLimitDateRangeTypeWithDefaults

`func NewSellLimitDateRangeTypeWithDefaults() *SellLimitDateRangeType`

NewSellLimitDateRangeTypeWithDefaults instantiates a new SellLimitDateRangeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActionType

`func (o *SellLimitDateRangeType) GetActionType() string`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *SellLimitDateRangeType) GetActionTypeOk() (*string, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *SellLimitDateRangeType) SetActionType(v string)`

SetActionType sets ActionType field to given value.

### HasActionType

`func (o *SellLimitDateRangeType) HasActionType() bool`

HasActionType returns a boolean if a field has been set.

### GetAmount

`func (o *SellLimitDateRangeType) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *SellLimitDateRangeType) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *SellLimitDateRangeType) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *SellLimitDateRangeType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetEndDate

`func (o *SellLimitDateRangeType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *SellLimitDateRangeType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *SellLimitDateRangeType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *SellLimitDateRangeType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetFlatOrPercentage

`func (o *SellLimitDateRangeType) GetFlatOrPercentage() string`

GetFlatOrPercentage returns the FlatOrPercentage field if non-nil, zero value otherwise.

### GetFlatOrPercentageOk

`func (o *SellLimitDateRangeType) GetFlatOrPercentageOk() (*string, bool)`

GetFlatOrPercentageOk returns a tuple with the FlatOrPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlatOrPercentage

`func (o *SellLimitDateRangeType) SetFlatOrPercentage(v string)`

SetFlatOrPercentage sets FlatOrPercentage field to given value.

### HasFlatOrPercentage

`func (o *SellLimitDateRangeType) HasFlatOrPercentage() bool`

HasFlatOrPercentage returns a boolean if a field has been set.

### GetFriday

`func (o *SellLimitDateRangeType) GetFriday() bool`

GetFriday returns the Friday field if non-nil, zero value otherwise.

### GetFridayOk

`func (o *SellLimitDateRangeType) GetFridayOk() (*bool, bool)`

GetFridayOk returns a tuple with the Friday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFriday

`func (o *SellLimitDateRangeType) SetFriday(v bool)`

SetFriday sets Friday field to given value.

### HasFriday

`func (o *SellLimitDateRangeType) HasFriday() bool`

HasFriday returns a boolean if a field has been set.

### GetMonday

`func (o *SellLimitDateRangeType) GetMonday() bool`

GetMonday returns the Monday field if non-nil, zero value otherwise.

### GetMondayOk

`func (o *SellLimitDateRangeType) GetMondayOk() (*bool, bool)`

GetMondayOk returns a tuple with the Monday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonday

`func (o *SellLimitDateRangeType) SetMonday(v bool)`

SetMonday sets Monday field to given value.

### HasMonday

`func (o *SellLimitDateRangeType) HasMonday() bool`

HasMonday returns a boolean if a field has been set.

### GetSaturday

`func (o *SellLimitDateRangeType) GetSaturday() bool`

GetSaturday returns the Saturday field if non-nil, zero value otherwise.

### GetSaturdayOk

`func (o *SellLimitDateRangeType) GetSaturdayOk() (*bool, bool)`

GetSaturdayOk returns a tuple with the Saturday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaturday

`func (o *SellLimitDateRangeType) SetSaturday(v bool)`

SetSaturday sets Saturday field to given value.

### HasSaturday

`func (o *SellLimitDateRangeType) HasSaturday() bool`

HasSaturday returns a boolean if a field has been set.

### GetStartDate

`func (o *SellLimitDateRangeType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *SellLimitDateRangeType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *SellLimitDateRangeType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *SellLimitDateRangeType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetSunday

`func (o *SellLimitDateRangeType) GetSunday() bool`

GetSunday returns the Sunday field if non-nil, zero value otherwise.

### GetSundayOk

`func (o *SellLimitDateRangeType) GetSundayOk() (*bool, bool)`

GetSundayOk returns a tuple with the Sunday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunday

`func (o *SellLimitDateRangeType) SetSunday(v bool)`

SetSunday sets Sunday field to given value.

### HasSunday

`func (o *SellLimitDateRangeType) HasSunday() bool`

HasSunday returns a boolean if a field has been set.

### GetThursday

`func (o *SellLimitDateRangeType) GetThursday() bool`

GetThursday returns the Thursday field if non-nil, zero value otherwise.

### GetThursdayOk

`func (o *SellLimitDateRangeType) GetThursdayOk() (*bool, bool)`

GetThursdayOk returns a tuple with the Thursday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThursday

`func (o *SellLimitDateRangeType) SetThursday(v bool)`

SetThursday sets Thursday field to given value.

### HasThursday

`func (o *SellLimitDateRangeType) HasThursday() bool`

HasThursday returns a boolean if a field has been set.

### GetTuesday

`func (o *SellLimitDateRangeType) GetTuesday() bool`

GetTuesday returns the Tuesday field if non-nil, zero value otherwise.

### GetTuesdayOk

`func (o *SellLimitDateRangeType) GetTuesdayOk() (*bool, bool)`

GetTuesdayOk returns a tuple with the Tuesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTuesday

`func (o *SellLimitDateRangeType) SetTuesday(v bool)`

SetTuesday sets Tuesday field to given value.

### HasTuesday

`func (o *SellLimitDateRangeType) HasTuesday() bool`

HasTuesday returns a boolean if a field has been set.

### GetWednesday

`func (o *SellLimitDateRangeType) GetWednesday() bool`

GetWednesday returns the Wednesday field if non-nil, zero value otherwise.

### GetWednesdayOk

`func (o *SellLimitDateRangeType) GetWednesdayOk() (*bool, bool)`

GetWednesdayOk returns a tuple with the Wednesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWednesday

`func (o *SellLimitDateRangeType) SetWednesday(v bool)`

SetWednesday sets Wednesday field to given value.

### HasWednesday

`func (o *SellLimitDateRangeType) HasWednesday() bool`

HasWednesday returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


