# AutoFolioSettlementCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioSettlementTypes** | Pointer to **string** | Comma-delimited list of Folio Settlement Type codes. | [optional] 
**DefaultDays** | Pointer to **bool** | Use the Number of Days For Settlement, defined for the Reservation. | [optional] 
**DaysSinceLastAutoSettled** | Pointer to **int32** | Days since the last auto folio settlement. | [optional] 
**DateSinceLastAutoSettled** | Pointer to **string** | Date since the last auto folio settlement. | [optional] 

## Methods

### NewAutoFolioSettlementCriteriaType

`func NewAutoFolioSettlementCriteriaType() *AutoFolioSettlementCriteriaType`

NewAutoFolioSettlementCriteriaType instantiates a new AutoFolioSettlementCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoFolioSettlementCriteriaTypeWithDefaults

`func NewAutoFolioSettlementCriteriaTypeWithDefaults() *AutoFolioSettlementCriteriaType`

NewAutoFolioSettlementCriteriaTypeWithDefaults instantiates a new AutoFolioSettlementCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioSettlementTypes

`func (o *AutoFolioSettlementCriteriaType) GetFolioSettlementTypes() string`

GetFolioSettlementTypes returns the FolioSettlementTypes field if non-nil, zero value otherwise.

### GetFolioSettlementTypesOk

`func (o *AutoFolioSettlementCriteriaType) GetFolioSettlementTypesOk() (*string, bool)`

GetFolioSettlementTypesOk returns a tuple with the FolioSettlementTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioSettlementTypes

`func (o *AutoFolioSettlementCriteriaType) SetFolioSettlementTypes(v string)`

SetFolioSettlementTypes sets FolioSettlementTypes field to given value.

### HasFolioSettlementTypes

`func (o *AutoFolioSettlementCriteriaType) HasFolioSettlementTypes() bool`

HasFolioSettlementTypes returns a boolean if a field has been set.

### GetDefaultDays

`func (o *AutoFolioSettlementCriteriaType) GetDefaultDays() bool`

GetDefaultDays returns the DefaultDays field if non-nil, zero value otherwise.

### GetDefaultDaysOk

`func (o *AutoFolioSettlementCriteriaType) GetDefaultDaysOk() (*bool, bool)`

GetDefaultDaysOk returns a tuple with the DefaultDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultDays

`func (o *AutoFolioSettlementCriteriaType) SetDefaultDays(v bool)`

SetDefaultDays sets DefaultDays field to given value.

### HasDefaultDays

`func (o *AutoFolioSettlementCriteriaType) HasDefaultDays() bool`

HasDefaultDays returns a boolean if a field has been set.

### GetDaysSinceLastAutoSettled

`func (o *AutoFolioSettlementCriteriaType) GetDaysSinceLastAutoSettled() int32`

GetDaysSinceLastAutoSettled returns the DaysSinceLastAutoSettled field if non-nil, zero value otherwise.

### GetDaysSinceLastAutoSettledOk

`func (o *AutoFolioSettlementCriteriaType) GetDaysSinceLastAutoSettledOk() (*int32, bool)`

GetDaysSinceLastAutoSettledOk returns a tuple with the DaysSinceLastAutoSettled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysSinceLastAutoSettled

`func (o *AutoFolioSettlementCriteriaType) SetDaysSinceLastAutoSettled(v int32)`

SetDaysSinceLastAutoSettled sets DaysSinceLastAutoSettled field to given value.

### HasDaysSinceLastAutoSettled

`func (o *AutoFolioSettlementCriteriaType) HasDaysSinceLastAutoSettled() bool`

HasDaysSinceLastAutoSettled returns a boolean if a field has been set.

### GetDateSinceLastAutoSettled

`func (o *AutoFolioSettlementCriteriaType) GetDateSinceLastAutoSettled() string`

GetDateSinceLastAutoSettled returns the DateSinceLastAutoSettled field if non-nil, zero value otherwise.

### GetDateSinceLastAutoSettledOk

`func (o *AutoFolioSettlementCriteriaType) GetDateSinceLastAutoSettledOk() (*string, bool)`

GetDateSinceLastAutoSettledOk returns a tuple with the DateSinceLastAutoSettled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateSinceLastAutoSettled

`func (o *AutoFolioSettlementCriteriaType) SetDateSinceLastAutoSettled(v string)`

SetDateSinceLastAutoSettled sets DateSinceLastAutoSettled field to given value.

### HasDateSinceLastAutoSettled

`func (o *AutoFolioSettlementCriteriaType) HasDateSinceLastAutoSettled() bool`

HasDateSinceLastAutoSettled returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


