# BlockRateProtectionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**RateProtectionType**](RateProtectionType.md) |  | [optional] 
**ProtectedDates** | Pointer to [**DatesType**](DatesType.md) |  | [optional] 

## Methods

### NewBlockRateProtectionType

`func NewBlockRateProtectionType() *BlockRateProtectionType`

NewBlockRateProtectionType instantiates a new BlockRateProtectionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockRateProtectionTypeWithDefaults

`func NewBlockRateProtectionTypeWithDefaults() *BlockRateProtectionType`

NewBlockRateProtectionTypeWithDefaults instantiates a new BlockRateProtectionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *BlockRateProtectionType) GetCriteria() RateProtectionType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *BlockRateProtectionType) GetCriteriaOk() (*RateProtectionType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *BlockRateProtectionType) SetCriteria(v RateProtectionType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *BlockRateProtectionType) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetProtectedDates

`func (o *BlockRateProtectionType) GetProtectedDates() DatesType`

GetProtectedDates returns the ProtectedDates field if non-nil, zero value otherwise.

### GetProtectedDatesOk

`func (o *BlockRateProtectionType) GetProtectedDatesOk() (*DatesType, bool)`

GetProtectedDatesOk returns a tuple with the ProtectedDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtectedDates

`func (o *BlockRateProtectionType) SetProtectedDates(v DatesType)`

SetProtectedDates sets ProtectedDates field to given value.

### HasProtectedDates

`func (o *BlockRateProtectionType) HasProtectedDates() bool`

HasProtectedDates returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


