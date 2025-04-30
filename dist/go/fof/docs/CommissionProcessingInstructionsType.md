# CommissionProcessingInstructionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OnHold** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Release** | Pointer to **bool** | When set to true, commission agent and/or its associated reservation will be released from commission processing. | [optional] 
**OffsetAR** | Pointer to **bool** | When set to true, commission agent and/or its associated reservation will be flagged to offset Account Receivable. | [optional] 

## Methods

### NewCommissionProcessingInstructionsType

`func NewCommissionProcessingInstructionsType() *CommissionProcessingInstructionsType`

NewCommissionProcessingInstructionsType instantiates a new CommissionProcessingInstructionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionProcessingInstructionsTypeWithDefaults

`func NewCommissionProcessingInstructionsTypeWithDefaults() *CommissionProcessingInstructionsType`

NewCommissionProcessingInstructionsTypeWithDefaults instantiates a new CommissionProcessingInstructionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOnHold

`func (o *CommissionProcessingInstructionsType) GetOnHold() CodeDescriptionType`

GetOnHold returns the OnHold field if non-nil, zero value otherwise.

### GetOnHoldOk

`func (o *CommissionProcessingInstructionsType) GetOnHoldOk() (*CodeDescriptionType, bool)`

GetOnHoldOk returns a tuple with the OnHold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnHold

`func (o *CommissionProcessingInstructionsType) SetOnHold(v CodeDescriptionType)`

SetOnHold sets OnHold field to given value.

### HasOnHold

`func (o *CommissionProcessingInstructionsType) HasOnHold() bool`

HasOnHold returns a boolean if a field has been set.

### GetRelease

`func (o *CommissionProcessingInstructionsType) GetRelease() bool`

GetRelease returns the Release field if non-nil, zero value otherwise.

### GetReleaseOk

`func (o *CommissionProcessingInstructionsType) GetReleaseOk() (*bool, bool)`

GetReleaseOk returns a tuple with the Release field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelease

`func (o *CommissionProcessingInstructionsType) SetRelease(v bool)`

SetRelease sets Release field to given value.

### HasRelease

`func (o *CommissionProcessingInstructionsType) HasRelease() bool`

HasRelease returns a boolean if a field has been set.

### GetOffsetAR

`func (o *CommissionProcessingInstructionsType) GetOffsetAR() bool`

GetOffsetAR returns the OffsetAR field if non-nil, zero value otherwise.

### GetOffsetAROk

`func (o *CommissionProcessingInstructionsType) GetOffsetAROk() (*bool, bool)`

GetOffsetAROk returns a tuple with the OffsetAR field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffsetAR

`func (o *CommissionProcessingInstructionsType) SetOffsetAR(v bool)`

SetOffsetAR sets OffsetAR field to given value.

### HasOffsetAR

`func (o *CommissionProcessingInstructionsType) HasOffsetAR() bool`

HasOffsetAR returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


